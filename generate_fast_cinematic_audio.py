import numpy as np
import scipy.io.wavfile as wavfile
import scipy.signal as signal
import os

SAMPLE_RATE = 48000
DURATION = 15.06  # 452 frames @ 30fps
TOTAL_SAMPLES = int(SAMPLE_RATE * DURATION)
BPM = 132.0
BEAT_DUR = 60.0 / BPM  # ~0.4545s
SIXTEENTH = BEAT_DUR / 4.0

def make_stereo(arr):
    if arr.ndim == 1:
        return np.column_stack((arr, arr))
    return arr

def safe_add(target, sound, start_time, gain=1.0):
    start_idx = int(start_time * SAMPLE_RATE)
    sound = make_stereo(sound) * gain
    n_samples = len(sound)
    if start_idx >= len(target):
        return
    end_idx = min(start_idx + n_samples, len(target))
    valid_len = end_idx - start_idx
    target[start_idx:end_idx] += sound[:valid_len]

# ---------------------------------------------------------
# SYNTHESIS INSTRUMENTS (HIGH FIDELITY)
# ---------------------------------------------------------

def synth_kick(dur=0.35, gain=0.9):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    # Exponential drop from 180Hz down to 48Hz
    pitch_env = 190.0 * np.exp(-42.0 * t) + 46.0
    phase = 2 * np.pi * np.cumsum(pitch_env) / SAMPLE_RATE
    env = np.exp(-8.5 * t)
    sub = np.sin(phase) * env
    # Top transient punch / beater click
    click_len = int(SAMPLE_RATE * 0.012)
    click_t = t[:click_len]
    click = np.sin(2 * np.pi * 2200 * click_t) * np.exp(-280 * click_t)
    sub[:click_len] += click * 0.35
    # Warm saturation
    wave = np.tanh(sub * 1.8) * gain
    return np.column_stack((wave, wave))

def synth_snare_clap(dur=0.28, gain=0.85):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    # Layer 1: Claps (3 micro bursts spaced 9ms apart)
    clap_noise = np.random.uniform(-1, 1, n)
    clap_env = np.zeros(n)
    for offset in [0.0, 0.009, 0.018]:
        idx = int(offset * SAMPLE_RATE)
        burst_len = int(0.03 * SAMPLE_RATE)
        if idx + burst_len < n:
            b_t = np.linspace(0, 0.03, burst_len, endpoint=False)
            clap_env[idx:idx+burst_len] += np.exp(-90 * b_t)
    # Layer 2: Snare body tone (220 Hz dropping to 150 Hz)
    snare_pitch = 220.0 * np.exp(-25.0 * t) + 150.0
    snare_phase = 2 * np.pi * np.cumsum(snare_pitch) / SAMPLE_RATE
    snare_body = np.sin(snare_phase) * np.exp(-22.0 * t)
    # Layer 3: Noise tail
    noise_tail = clap_noise * np.exp(-14.0 * t) * 0.7
    
    # Filter noise tail with bandpass
    sos = signal.butter(4, [800, 7000], btype='bandpass', fs=SAMPLE_RATE, output='sos')
    filtered_noise = signal.sosfilt(sos, clap_noise * clap_env + noise_tail)
    
    left = (snare_body * 0.45 + filtered_noise * 0.65) * gain
    # Stereo decorrelation for wide clap
    right = (snare_body * 0.45 + np.roll(filtered_noise, 45) * 0.65) * gain
    return np.column_stack((np.tanh(left * 1.5), np.tanh(right * 1.5)))

def synth_hihat(dur=0.06, open_hat=False, gain=0.45):
    actual_dur = 0.22 if open_hat else dur
    n = int(SAMPLE_RATE * actual_dur)
    t = np.linspace(0, actual_dur, n, endpoint=False)
    noise = np.random.uniform(-1, 1, n)
    decay = 14.0 if open_hat else 90.0
    env = np.exp(-decay * t)
    # Highpass filter at 7500 Hz
    sos = signal.butter(4, 7500, btype='highpass', fs=SAMPLE_RATE, output='sos')
    filtered = signal.sosfilt(sos, noise) * env * gain
    return np.column_stack((filtered, np.roll(filtered, 12)))

def synth_bass_note(freq, dur, gain=0.65):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    # Dual saw + sub square
    phase1 = 2 * np.pi * freq * t
    phase2 = 2 * np.pi * (freq * 1.004) * t
    saw1 = 2 * (t * freq % 1.0) - 1.0
    saw2 = 2 * (t * freq * 1.004 % 1.0) - 1.0
    sub_sq = np.sign(np.sin(phase1 * 0.5)) * 0.5
    raw = saw1 * 0.45 + saw2 * 0.35 + sub_sq * 0.3
    # Plucky lowpass filter envelope
    env = np.exp(-6.5 * t)
    # Apply warm distortion
    dist = np.tanh(raw * 2.5) * env * gain
    # Lowpass filter
    sos = signal.butter(2, min(freq * 8, 1200), btype='lowpass', fs=SAMPLE_RATE, output='sos')
    filtered = signal.sosfilt(sos, dist)
    return np.column_stack((filtered, filtered))

def synth_arp_note(freq, dur=0.18, gain=0.35):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    phase1 = 2 * np.pi * freq * t
    phase2 = 2 * np.pi * (freq * 1.008) * t
    wave = (np.sin(phase1) + 0.5 * np.sin(phase2) + 0.25 * np.sin(3 * phase1))
    env = np.exp(-18 * t)
    left = wave * env * gain
    right = np.roll(wave * env * gain, 30)
    return np.column_stack((left, right))

def synth_cinematic_sub_drop(dur=2.2, f_start=140.0, f_end=32.0, gain=0.9):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    freq = f_start * (f_end / f_start) ** (t / dur)
    phase = 2 * np.pi * np.cumsum(freq) / SAMPLE_RATE
    env = np.exp(-2.2 * t / dur)
    wave = np.sin(phase) + 0.25 * np.sin(2 * phase)
    # Initial punch
    punch_len = int(SAMPLE_RATE * 0.03)
    punch = np.sin(2 * np.pi * 160 * t[:punch_len]) * np.exp(-70 * t[:punch_len])
    wave[:punch_len] += punch * 0.5
    wave = np.tanh(wave * 1.8) * env * gain
    return np.column_stack((wave, wave))

def synth_riser(dur=2.4, f_start=200.0, f_end=3200.0, gain=0.55):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    freq = f_start * (f_end / f_start) ** (t / dur)
    phase = 2 * np.pi * np.cumsum(freq) / SAMPLE_RATE
    noise = np.random.uniform(-0.5, 0.5, n) * (t / dur) ** 2
    raw = (np.sin(phase) * 0.7 + noise * 0.4) * (t / dur) ** 1.6 * gain
    lfo = np.sin(2 * np.pi * 8 * t)
    left = raw * (0.8 + 0.2 * lfo)
    right = raw * (0.8 - 0.2 * lfo)
    return np.column_stack((left, right))

def synth_tactile_snap(dur=0.08, gain=0.85):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    # High frequency glass / shutter click
    click = np.sin(2 * np.pi * 3200 * t) * np.exp(-120 * t)
    thump = np.sin(2 * np.pi * 350 * t) * np.exp(-60 * t) * 0.6
    noise = np.random.uniform(-1, 1, n) * np.exp(-180 * t) * 0.4
    raw = (click + thump + noise) * gain
    return np.column_stack((raw, np.roll(raw, 15)))

def synth_pro_whoosh(dur=0.45, gain=0.7):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    noise = np.random.uniform(-1, 1, n)
    env = np.sin(np.pi * t / dur) ** 2
    # Moving bandpass filter
    sos = signal.butter(2, [400, 4500], btype='bandpass', fs=SAMPLE_RATE, output='sos')
    filtered = signal.sosfilt(sos, noise) * env * gain
    pan = t / dur
    return np.column_stack((filtered * (1 - pan), filtered * pan))

def synth_laser_slash(dur=0.35, gain=0.8):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    freq = 3800 * np.exp(-35 * t) + 180
    phase = 2 * np.pi * np.cumsum(freq) / SAMPLE_RATE
    saw = 2 * (phase / (2 * np.pi) % 1.0) - 1.0
    env = np.exp(-16 * t)
    raw = np.tanh(saw * 3.0) * env * gain
    return np.column_stack((raw, np.roll(raw, 25)))

def synth_shimmer_crystal(dur=1.2, gain=0.6):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    notes = [1046.5, 1318.5, 1567.98, 2093.0, 2637.0]  # C6, E6, G6, C7, E7
    raw = np.zeros(n)
    for i, freq in enumerate(notes):
        st = i * 0.04
        idx = int(st * SAMPLE_RATE)
        rem = n - idx
        if rem > 0:
            sub_t = t[:rem]
            raw[idx:] += np.sin(2 * np.pi * freq * sub_t) * np.exp(-4.5 * sub_t) * (0.35 - i * 0.04)
    left = raw * gain
    right = np.roll(raw, 40) * gain * 0.95
    return np.column_stack((left, right))

# ---------------------------------------------------------
# GENERATE MASTER MUSIC TRACK (15s @ 132 BPM)
# ---------------------------------------------------------

music = np.zeros((TOTAL_SAMPLES, 2), dtype=np.float32)

# 0.0s: Intro Sub Rumble & Laser Cut Hit
safe_add(music, synth_cinematic_sub_drop(dur=1.8, f_start=160, f_end=35, gain=0.95), 0.0)
safe_add(music, synth_laser_slash(dur=0.35, gain=0.8), 0.35)

# Beat drops in at 0.8s (Frame 24) when Rusan is revealed
beat_start = 0.80

# Bass notes pattern in D minor (D1=36.7Hz, F1=43.65Hz, G1=49.0Hz, A1=55.0Hz)
bass_d1 = 36.7
bass_f1 = 43.65
bass_g1 = 49.0
bass_a1 = 55.0
bass_c2 = 65.4

# Arpeggio frequencies: D4, F4, A4, C5, D5, C5, A4, F4
arp_freqs = [293.66, 349.23, 440.0, 523.25, 587.33, 523.25, 440.0, 349.23]

# Generate 31 driving beats (from 0.8s up to ~14.8s)
for beat_idx in range(31):
    b_time = beat_start + beat_idx * BEAT_DUR
    if b_time >= 14.8:
        break
    
    # 1. KICK DRUM:
    # Kick hits on:
    # - 0.8s to 2.5s: on every quarter note (driving 4-on-the-floor)
    # - 2.5s to 10.8s: heavy 4-on-the-floor with driving groove
    # - 10.8s to 12.6s: tension build (syncopated 8th notes leading into sprint)
    if b_time < 10.8:
        safe_add(music, synth_kick(dur=0.32, gain=0.88), b_time)
    elif 10.8 <= b_time < 12.5:
        # Rapid pulse kicks during velocity sprint
        safe_add(music, synth_kick(dur=0.25, gain=0.92), b_time)
        safe_add(music, synth_kick(dur=0.25, gain=0.85), b_time + BEAT_DUR * 0.5)

    # 2. SNARE / CLAP:
    # Crisp clap on beats 2 and 4 (starting from beat 4 at ~2.5s)
    if b_time >= 2.5 and b_time < 10.8:
        if beat_idx % 2 == 1:
            safe_add(music, synth_snare_clap(dur=0.25, gain=0.85), b_time)
            
    # 3. HI-HATS:
    # 16th-note fast groove starting at 1.7s
    if b_time >= 1.7 and b_time < 12.6:
        for s in range(4):
            six_t = b_time + s * SIXTEENTH
            is_open = (s == 2)  # open hat on upbeat
            gain_hat = 0.45 if s % 2 == 0 else 0.32
            safe_add(music, synth_hihat(dur=0.06, open_hat=is_open, gain=gain_hat), six_t)

    # 4. ROLLING BASSLINE:
    # 16th note rolling electro bass from 2.0s to 10.8s
    if b_time >= 2.0 and b_time < 10.8:
        # 4 bass pulses per beat
        f_chord = bass_d1
        if 5.5 <= b_time < 8.1:
            f_chord = bass_f1 if (beat_idx % 4 < 2) else bass_g1
        elif 8.1 <= b_time < 10.8:
            f_chord = bass_a1 if (beat_idx % 4 < 2) else bass_c2

        for s in range(4):
            six_t = b_time + s * SIXTEENTH
            # Slight pitch octave jump on 16th #3
            note_freq = f_chord * 2.0 if s == 2 else f_chord
            # Duck bass if kick is hitting on s=0
            gain_b = 0.35 if s == 0 else 0.65
            safe_add(music, synth_bass_note(note_freq, dur=SIXTEENTH * 0.9, gain=gain_b), six_t)

    # 5. KINETIC SYNTH ARPEGGIO:
    if 2.5 <= b_time < 10.8:
        for s in range(4):
            six_t = b_time + s * SIXTEENTH
            note_idx = (beat_idx * 4 + s) % len(arp_freqs)
            safe_add(music, synth_arp_note(arp_freqs[note_idx], dur=0.15, gain=0.32), six_t)

# ---------------------------------------------------------
# SPRINT BUILD-UP (10.8s to 12.6s | Frames 325 - 380)
# ---------------------------------------------------------
# Escalating riser sweep
safe_add(music, synth_riser(dur=1.85, f_start=220.0, f_end=4200.0, gain=0.65), 10.8)

# Accelerating snare roll in sprint
snare_times = [
    10.8, 11.02, 11.25, 11.48, 11.71, 11.82, 11.94, 12.05, 12.16, 12.28, 12.39, 12.45, 12.50, 12.56
]
for idx, st in enumerate(snare_times):
    gain_s = 0.5 + 0.45 * (idx / len(snare_times))
    safe_add(music, synth_snare_clap(dur=0.16, gain=gain_s), st)

# 12.6s - 12.7s: Micro-drop tension silence (vacuum drop)
mute_start = int(12.62 * SAMPLE_RATE)
mute_end = int(12.67 * SAMPLE_RATE)
music[mute_start:mute_end] *= 0.05

# ---------------------------------------------------------
# 12.67s (Frame 380): MONUMENTAL CLIMAX DROP // AXIOM FINALE
# ---------------------------------------------------------
safe_add(music, synth_cinematic_sub_drop(dur=2.35, f_start=180.0, f_end=30.0, gain=1.0), 12.67)
safe_add(music, synth_shimmer_crystal(dur=2.3, gain=0.7), 12.67)

# Outro power chord (D Major: D3, A3, D4, F#4, A4)
outro_dur = 2.3
n_o = int(SAMPLE_RATE * outro_dur)
t_o = np.linspace(0, outro_dur, n_o, endpoint=False)
chord_wave = np.zeros(n_o)
for freq in [146.83, 220.0, 293.66, 369.99, 440.0, 587.33]:
    chord_wave += np.sin(2 * np.pi * freq * t_o) * 0.18
env_o = np.clip(t_o / 0.04, 0, 1) * np.exp(-1.4 * t_o)
chord_stereo = np.column_stack((chord_wave * env_o * 0.7, np.roll(chord_wave * env_o * 0.7, 35)))
safe_add(music, chord_stereo, 12.67)

# Master Limiter / Normalize
max_val = np.max(np.abs(music))
if max_val > 0.98:
    music = (music / max_val) * 0.96

# Save master music track
out_music_path = 'remotion-edit/public/bg_music_fast.wav'
wavfile.write(out_music_path, SAMPLE_RATE, (music * 32767).astype(np.int16))
print(f"Created {out_music_path} (Duration: {len(music)/SAMPLE_RATE:.2f}s, Max: {np.max(np.abs(music)):.3f})")

# Also overwrite remotion-edit/public/bg_music.wav so all default references use this energetic master
wavfile.write('remotion-edit/public/bg_music.wav', SAMPLE_RATE, (music * 32767).astype(np.int16))
print("Overwrote remotion-edit/public/bg_music.wav")

# ---------------------------------------------------------
# GENERATE CRISP, PRO SFX (REPLACING AI-SLOP POPS/TICKS)
# ---------------------------------------------------------
sfx_dir = 'remotion-edit/public/sfx'
os.makedirs(sfx_dir, exist_ok=True)

# 1. Tactile Snap (Replaces sfx_tick.wav with high-end camera/glass tactile snap)
snap = synth_tactile_snap(dur=0.07, gain=0.9)
wavfile.write(os.path.join(sfx_dir, 'sfx_snap.wav'), SAMPLE_RATE, (snap * 32767).astype(np.int16))
wavfile.write(os.path.join(sfx_dir, 'sfx_tick.wav'), SAMPLE_RATE, (snap * 32767).astype(np.int16))

# 2. Cinematic Sub Impact (Replaces sfx_pop.wav with deep physical 40Hz thud)
sub_pop = synth_kick(dur=0.25, gain=0.95)
wavfile.write(os.path.join(sfx_dir, 'sfx_sub_impact.wav'), SAMPLE_RATE, (sub_pop * 32767).astype(np.int16))
wavfile.write(os.path.join(sfx_dir, 'sfx_pop.wav'), SAMPLE_RATE, (sub_pop * 32767).astype(np.int16))

# 3. Aerodynamic Cinematic Whoosh
whoosh = synth_pro_whoosh(dur=0.38, gain=0.85)
wavfile.write(os.path.join(sfx_dir, 'sfx_whoosh.wav'), SAMPLE_RATE, (whoosh * 32767).astype(np.int16))
wavfile.write(os.path.join(sfx_dir, 'sfx_whoosh_pro.wav'), SAMPLE_RATE, (whoosh * 32767).astype(np.int16))

whoosh_soft = synth_pro_whoosh(dur=0.24, gain=0.6)
wavfile.write(os.path.join(sfx_dir, 'sfx_whoosh_soft.wav'), SAMPLE_RATE, (whoosh_soft * 32767).astype(np.int16))

# 4. Crystal Shimmer
shimmer = synth_shimmer_crystal(dur=0.8, gain=0.8)
wavfile.write(os.path.join(sfx_dir, 'sfx_shimmer.wav'), SAMPLE_RATE, (shimmer * 32767).astype(np.int16))
wavfile.write(os.path.join(sfx_dir, 'sfx_shimmer_pro.wav'), SAMPLE_RATE, (shimmer * 32767).astype(np.int16))

# 5. Laser Slash for the Hook cut
laser = synth_laser_slash(dur=0.3, gain=0.88)
wavfile.write(os.path.join(sfx_dir, 'sfx_laser_cut.wav'), SAMPLE_RATE, (laser * 32767).astype(np.int16))

# 6. Sprint Glitch Hit
glitch = np.tanh(synth_tactile_snap(dur=0.09, gain=0.95) * 1.5)
wavfile.write(os.path.join(sfx_dir, 'sfx_glitch_hit.wav'), SAMPLE_RATE, (glitch * 32767).astype(np.int16))

print("All pro sound effects successfully generated and synchronized!")
