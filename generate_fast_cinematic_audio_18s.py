import numpy as np
import scipy.io.wavfile as wavfile
import scipy.signal as signal
import os

SAMPLE_RATE = 48000
DURATION = 18.35  # ~550 frames @ 30fps (covers 18.0s master with 0.35s reverb tail)
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
    # Exponential drop from 190Hz down to 46Hz
    pitch_env = 195.0 * np.exp(-42.0 * t) + 46.0
    phase = 2 * np.pi * np.cumsum(pitch_env) / SAMPLE_RATE
    env = np.exp(-8.5 * t)
    sub = np.sin(phase) * env
    # Top transient punch
    click_len = int(SAMPLE_RATE * 0.012)
    click_t = t[:click_len]
    click = np.sin(2 * np.pi * 2200 * click_t) * np.exp(-280 * click_t)
    sub[:click_len] += click * 0.35
    wave = np.tanh(sub * 1.8) * gain
    return np.column_stack((wave, wave))

def synth_snare_clap(dur=0.28, gain=0.85):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    # 3 micro bursts spaced 9ms apart
    clap_noise = np.random.uniform(-1, 1, n)
    clap_env = np.zeros(n)
    for offset in [0.0, 0.009, 0.018]:
        idx = int(offset * SAMPLE_RATE)
        burst_len = int(0.03 * SAMPLE_RATE)
        if idx + burst_len < n:
            b_t = np.linspace(0, 0.03, burst_len, endpoint=False)
            clap_env[idx:idx+burst_len] += np.exp(-90 * b_t)
    snare_pitch = 220.0 * np.exp(-25.0 * t) + 150.0
    snare_phase = 2 * np.pi * np.cumsum(snare_pitch) / SAMPLE_RATE
    snare_body = np.sin(snare_phase) * np.exp(-22.0 * t)
    noise_tail = clap_noise * np.exp(-14.0 * t) * 0.7
    
    sos = signal.butter(4, [800, 7000], btype='bandpass', fs=SAMPLE_RATE, output='sos')
    filtered_noise = signal.sosfilt(sos, clap_noise * clap_env + noise_tail)
    
    left = (snare_body * 0.45 + filtered_noise * 0.65) * gain
    right = (snare_body * 0.45 + np.roll(filtered_noise, 45) * 0.65) * gain
    return np.column_stack((np.tanh(left * 1.5), np.tanh(right * 1.5)))

def synth_hihat(dur=0.06, open_hat=False, gain=0.45):
    actual_dur = 0.22 if open_hat else dur
    n = int(SAMPLE_RATE * actual_dur)
    t = np.linspace(0, actual_dur, n, endpoint=False)
    noise = np.random.uniform(-1, 1, n)
    decay = 14.0 if open_hat else 90.0
    env = np.exp(-decay * t)
    sos = signal.butter(4, 7500, btype='highpass', fs=SAMPLE_RATE, output='sos')
    filtered = signal.sosfilt(sos, noise) * env * gain
    return np.column_stack((filtered, np.roll(filtered, 12)))

def synth_bass_note(freq, dur, gain=0.65):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    phase1 = 2 * np.pi * freq * t
    phase2 = 2 * np.pi * (freq * 1.004) * t
    saw1 = 2 * (t * freq % 1.0) - 1.0
    saw2 = 2 * (t * freq * 1.004 % 1.0) - 1.0
    sub_sq = np.sign(np.sin(phase1 * 0.5)) * 0.5
    raw = saw1 * 0.45 + saw2 * 0.35 + sub_sq * 0.3
    env = np.exp(-6.5 * t)
    sos = signal.butter(2, min(freq * 5.0, 1800.0), btype='lowpass', fs=SAMPLE_RATE, output='sos')
    filtered = signal.sosfilt(sos, raw * env) * gain
    return np.column_stack((filtered, filtered))

def synth_arp_note(freq, dur=0.18, gain=0.35):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    sine = np.sin(2 * np.pi * freq * t)
    tri = 2.0 * np.abs(2.0 * (t * freq % 1.0) - 1.0) - 1.0
    wave = sine * 0.6 + tri * 0.4
    env = np.exp(-12.0 * t)
    sos = signal.butter(2, [800, 5500], btype='bandpass', fs=SAMPLE_RATE, output='sos')
    filtered = signal.sosfilt(sos, wave * env) * gain
    return np.column_stack((filtered, np.roll(filtered, 28)))

def synth_riser(dur=2.2, f_start=200.0, f_end=4800.0, gain=0.6):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    freq = np.geomspace(f_start, f_end, n)
    phase = 2 * np.pi * np.cumsum(freq) / SAMPLE_RATE
    saw = 2 * (phase / (2 * np.pi) % 1.0) - 1.0
    noise = np.random.uniform(-1, 1, n)
    env = (t / dur) ** 2.2
    sos = signal.butter(2, [300, 8000], btype='bandpass', fs=SAMPLE_RATE, output='sos')
    layer = signal.sosfilt(sos, saw * 0.4 + noise * 0.6) * env * gain
    return np.column_stack((layer, np.roll(layer, 55)))

def synth_cinematic_sub_drop(dur=2.8, f_start=180.0, f_end=28.0, gain=1.0):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    freq = np.geomspace(f_start, f_end, n)
    phase = 2 * np.pi * np.cumsum(freq) / SAMPLE_RATE
    env = np.exp(-1.8 * t)
    sub = np.sin(phase) * env
    wave = np.tanh(sub * 2.2) * gain
    return np.column_stack((wave, wave))

def synth_laser_slash(dur=0.35, gain=0.85):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    freq = np.geomspace(6500.0, 180.0, n)
    phase = 2 * np.pi * np.cumsum(freq) / SAMPLE_RATE
    env = np.exp(-16.0 * t)
    wave = np.sin(phase) * env * gain
    return np.column_stack((wave, wave))

def synth_tactile_snap(dur=0.08, gain=0.85):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    click = np.sin(2 * np.pi * 3200 * t) * np.exp(-120 * t)
    thud = np.sin(2 * np.pi * 140 * t) * np.exp(-45 * t)
    noise = np.random.uniform(-0.5, 0.5, n) * np.exp(-150 * t)
    wave = (click * 0.5 + thud * 0.6 + noise * 0.3) * gain
    return np.column_stack((wave, wave))

def synth_pro_whoosh(dur=0.45, gain=0.8):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    noise = np.random.uniform(-1, 1, n)
    env = np.sin(np.pi * (t / dur)) ** 1.8
    center_freq = 600.0 + 3200.0 * np.sin(np.pi * (t / dur))
    q = 3.5
    f_low = np.clip(center_freq - center_freq / (2 * q), 100, SAMPLE_RATE / 2 - 500)
    f_high = np.clip(center_freq + center_freq / (2 * q), 200, SAMPLE_RATE / 2 - 100)
    sos = signal.butter(2, [f_low[n//2], f_high[n//2]], btype='bandpass', fs=SAMPLE_RATE, output='sos')
    filtered = signal.sosfilt(sos, noise) * env * gain
    return np.column_stack((filtered, np.roll(filtered, 40)))

def synth_shimmer_crystal(dur=1.2, gain=0.75):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    harmonics = [1760.0, 2637.0, 3520.0, 5274.0, 7040.0]
    crystal = np.zeros(n)
    for idx, f in enumerate(harmonics):
        crystal += np.sin(2 * np.pi * f * t + idx * 0.8) * (0.6 ** idx)
    env = np.clip(t / 0.05, 0, 1) * np.exp(-2.5 * t)
    crystal = crystal * env * gain * 0.25
    return np.column_stack((crystal, np.roll(crystal, 60)))

# ---------------------------------------------------------
# COMPOSE 18.35s MASTER SCORE
# ---------------------------------------------------------
music = np.zeros((TOTAL_SAMPLES, 2))

# 0.0s - 0.9s: Ambient anticipation & intro laser
sub_intro = synth_cinematic_sub_drop(dur=1.5, f_start=120.0, f_end=42.0, gain=0.55)
safe_add(music, sub_intro, 0.0)
safe_add(music, synth_laser_slash(dur=0.35, gain=0.85), 0.45) # Frame 14

# Beat drops in at 1.0s (Frame 30) when Rusan is revealed
beat_start = 1.00

bass_d1 = 36.7
bass_f1 = 43.65
bass_g1 = 49.0
bass_a1 = 55.0
bass_c2 = 65.4

arp_freqs = [293.66, 349.23, 440.0, 523.25, 587.33, 523.25, 440.0, 349.23]

# Generate driving beats from 1.0s to 14.8s
# Total ~31 beats
total_beats = 31
for beat_idx in range(total_beats):
    b_time = beat_start + beat_idx * BEAT_DUR
    if b_time >= 14.8:
        break
    
    # 1. KICK DRUM:
    if b_time < 12.6:
        safe_add(music, synth_kick(dur=0.32, gain=0.88), b_time)
    elif 12.6 <= b_time < 14.6:
        # Rapid pulse kicks during velocity sprint
        safe_add(music, synth_kick(dur=0.25, gain=0.92), b_time)
        safe_add(music, synth_kick(dur=0.25, gain=0.85), b_time + BEAT_DUR * 0.5)

    # 2. SNARE / CLAP:
    if b_time >= 2.8 and b_time < 12.6:
        if beat_idx % 2 == 1:
            safe_add(music, synth_snare_clap(dur=0.25, gain=0.85), b_time)
            
    # 3. HI-HATS:
    if b_time >= 1.9 and b_time < 14.6:
        for s in range(4):
            six_t = b_time + s * SIXTEENTH
            is_open = (s == 2)
            gain_hat = 0.45 if s % 2 == 0 else 0.32
            safe_add(music, synth_hihat(dur=0.06, open_hat=is_open, gain=gain_hat), six_t)

    # 4. ROLLING BASSLINE:
    if b_time >= 2.0 and b_time < 12.6:
        f_chord = bass_d1
        if 6.0 <= b_time < 9.2:
            f_chord = bass_f1 if (beat_idx % 4 < 2) else bass_g1
        elif 9.2 <= b_time < 12.6:
            f_chord = bass_a1 if (beat_idx % 4 < 2) else bass_c2

        for s in range(4):
            six_t = b_time + s * SIXTEENTH
            note_freq = f_chord * 2.0 if s == 2 else f_chord
            gain_b = 0.35 if s == 0 else 0.65
            safe_add(music, synth_bass_note(note_freq, dur=SIXTEENTH * 0.9, gain=gain_b), six_t)

    # 5. KINETIC SYNTH ARPEGGIO:
    if 2.8 <= b_time < 12.6:
        for s in range(4):
            six_t = b_time + s * SIXTEENTH
            note_idx = (beat_idx * 4 + s) % len(arp_freqs)
            safe_add(music, synth_arp_note(arp_freqs[note_idx], dur=0.15, gain=0.32), six_t)

# ---------------------------------------------------------
# SPRINT BUILD-UP (12.6s to 14.8s | Frames 378 - 445)
# ---------------------------------------------------------
safe_add(music, synth_riser(dur=2.1, f_start=220.0, f_end=4800.0, gain=0.68), 12.6)

# Accelerating snare roll in sprint
snare_times = [
    12.6, 12.83, 13.05, 13.28, 13.50, 13.73, 13.95, 14.18, 14.30, 14.41, 14.52, 14.60, 14.68, 14.75
]
for idx, st in enumerate(snare_times):
    gain_s = 0.5 + 0.45 * (idx / len(snare_times))
    safe_add(music, synth_snare_clap(dur=0.16, gain=gain_s), st)

# 14.8s - 14.9s: Micro-drop tension silence
mute_start = int(14.80 * SAMPLE_RATE)
mute_end = int(14.88 * SAMPLE_RATE)
music[mute_start:mute_end] *= 0.05

# ---------------------------------------------------------
# 14.88s (Frame 446): MONUMENTAL CLIMAX DROP // AXIOM FINALE
# ---------------------------------------------------------
safe_add(music, synth_cinematic_sub_drop(dur=3.2, f_start=180.0, f_end=28.0, gain=1.0), 14.88)
safe_add(music, synth_shimmer_crystal(dur=3.0, gain=0.75), 14.88)

# Outro power chord (D Major: D3, A3, D4, F#4, A4) with long decay
outro_dur = 3.3
n_o = int(SAMPLE_RATE * outro_dur)
t_o = np.linspace(0, outro_dur, n_o, endpoint=False)
chord_wave = np.zeros(n_o)
for freq in [146.83, 220.0, 293.66, 369.99, 440.0, 587.33]:
    chord_wave += np.sin(2 * np.pi * freq * t_o) * 0.18
env_o = np.clip(t_o / 0.05, 0, 1) * np.exp(-1.1 * t_o)
chord_stereo = np.column_stack((chord_wave * env_o * 0.75, np.roll(chord_wave * env_o * 0.75, 40)))
safe_add(music, chord_stereo, 14.88)

# Master Limiter / Normalize
max_val = np.max(np.abs(music))
if max_val > 0.98:
    music = (music / max_val) * 0.96

# Save master music track for 18s master
out_music_path = 'public/bg_music_18s.wav'
wavfile.write(out_music_path, SAMPLE_RATE, (music * 32767).astype(np.int16))
print(f"Created {out_music_path} (Duration: {len(music)/SAMPLE_RATE:.2f}s, Max: {np.max(np.abs(music)):.3f})")
