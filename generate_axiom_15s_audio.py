import numpy as np
import scipy.io.wavfile as wavfile
import os

SAMPLE_RATE = 48000
DURATION = 15.00  # Exactly 15.00 seconds (450 frames @ 30fps)
TOTAL_SAMPLES = int(SAMPLE_RATE * DURATION)
BPM = 126.0
BEAT_DUR = 60.0 / BPM  # ~0.476s
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
# SYNTHESIS INSTRUMENTS
# ---------------------------------------------------------

def synth_kick(dur=0.35, gain=0.95):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    pitch_env = 200.0 * np.exp(-40.0 * t) + 44.0
    phase = 2 * np.pi * np.cumsum(pitch_env) / SAMPLE_RATE
    env = np.exp(-8.5 * t)
    sub = np.sin(phase) * env
    # Top beater click
    click_len = int(SAMPLE_RATE * 0.01)
    click_t = t[:click_len]
    click = np.sin(2 * np.pi * 2600 * click_t) * np.exp(-320 * click_t)
    sub[:click_len] += click * 0.4
    wave = np.tanh(sub * 1.8) * gain
    return np.column_stack((wave, wave))

def synth_snare_clap(dur=0.25, gain=0.85):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    clap_noise = np.random.uniform(-1, 1, n)
    clap_env = np.zeros(n)
    for offset in [0.0, 0.008, 0.016]:
        idx = int(offset * SAMPLE_RATE)
        burst_len = int(0.025 * SAMPLE_RATE)
        if idx + burst_len < n:
            b_t = np.linspace(0, 0.025, burst_len, endpoint=False)
            clap_env[idx:idx+burst_len] += np.exp(-85 * b_t)
    body_env = np.exp(-14.0 * t)
    wave = (clap_noise * (clap_env * 0.7 + body_env * 0.5)) * gain
    return np.column_stack((wave, np.roll(wave, 12)))

def synth_tactile_snap(dur=0.08, gain=0.9):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    noise = np.random.uniform(-1, 1, n)
    click = np.sin(2 * np.pi * 3200 * t) * np.exp(-180 * t)
    snap_env = np.exp(-110 * t)
    wave = (noise * snap_env * 0.6 + click * 0.5) * gain
    return np.column_stack((wave, np.roll(wave, 6)))

def synth_sub_impact(dur=1.8, f_start=140.0, f_end=32.0, gain=1.0):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    pitch_env = f_start * np.exp(-7.5 * t) + f_end
    phase = 2 * np.pi * np.cumsum(pitch_env) / SAMPLE_RATE
    env = np.exp(-2.2 * t)
    wave = np.sin(phase) * env
    wave = np.tanh(wave * 2.2) * gain
    return np.column_stack((wave, wave))

def synth_riser(dur=1.8, f_start=120.0, f_end=3200.0, gain=0.7):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    progress = t / dur
    freq = f_start * ((f_end / f_start) ** progress)
    phase = 2 * np.pi * np.cumsum(freq) / SAMPLE_RATE
    env = progress ** 1.8
    noise = np.random.uniform(-0.3, 0.3, n) * env
    wave = (np.sin(phase) * 0.7 + noise * 0.3) * env * gain
    return np.column_stack((wave, np.roll(wave, 25)))

def synth_glitch(dur=0.15, gain=0.8):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    noise = np.random.choice([-1.0, 0.0, 1.0], n)
    env = np.exp(-18.0 * t)
    carrier = np.sin(2 * np.pi * 950 * t)
    wave = noise * carrier * env * gain
    return np.column_stack((wave, np.roll(wave, 18)))

def synth_bass_note(freq, dur=0.22, gain=0.65):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    saw = 2 * (t * freq - np.floor(t * freq + 0.5))
    sine = np.sin(2 * np.pi * freq * t)
    env = np.exp(-12.0 * t)
    wave = (saw * 0.4 + sine * 0.7) * env
    wave = np.tanh(wave * 1.5) * gain
    return np.column_stack((wave, wave))

def synth_arp_note(freq, dur=0.14, gain=0.35):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    sine = np.sin(2 * np.pi * freq * t)
    harmonic = np.sin(2 * np.pi * freq * 2.0 * t) * 0.25
    env = np.exp(-22.0 * t)
    wave = (sine + harmonic) * env * gain
    left = wave
    right = np.roll(wave, int(SAMPLE_RATE * 0.003))
    return np.column_stack((left, right))

def synth_shimmer_crystal(dur=2.2, gain=0.75):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    freqs = [1760.0, 2637.0, 3520.0, 4186.0, 5274.0]
    out = np.zeros(n)
    for idx, f in enumerate(freqs):
        env = np.exp(-(2.5 + idx * 0.8) * t)
        out += np.sin(2 * np.pi * f * t) * env * (0.35 / len(freqs))
    left = out * gain
    right = np.roll(left, 40)
    return np.column_stack((left, right))

def synth_warm_pad(dur=2.5, root_freq=220.0, gain=0.55):
    n = int(SAMPLE_RATE * dur)
    t = np.linspace(0, dur, n, endpoint=False)
    # Major 9th chord: Root, 5th, 9th, 3rd (e.g. A3, E4, B4, C#5)
    freqs = [root_freq, root_freq * 1.5, root_freq * 2.25, root_freq * 2.5]
    out = np.zeros(n)
    for f in freqs:
        # Subtle detune for lush thickness
        out += np.sin(2 * np.pi * (f - 0.7) * t) * 0.25
        out += np.sin(2 * np.pi * (f + 0.7) * t) * 0.25
    # Smooth attack and slow decay
    attack = np.clip(t / 0.35, 0, 1)
    decay = np.exp(-1.1 * t)
    wave = out * attack * decay * gain
    return np.column_stack((wave, np.roll(wave, 50)))

# ---------------------------------------------------------
# COMPOSING THE FULL 15-SECOND SOUNDTRACK
# ---------------------------------------------------------

soundtrack = np.zeros((TOTAL_SAMPLES, 2))

# ACT 1: THE HOOK (0.0s – 2.0s)
# 0.0s: Clean Sub Impact & Typographic Strike
safe_add(soundtrack, synth_sub_impact(dur=1.8, f_start=130.0, f_end=35.0, gain=0.9), 0.0)
safe_add(soundtrack, synth_tactile_snap(dur=0.08, gain=0.8), 0.0)
safe_add(soundtrack, synth_tactile_snap(dur=0.08, gain=0.7), 0.45)
safe_add(soundtrack, synth_tactile_snap(dur=0.08, gain=0.85), 0.90)

# 1.75s: Digital Glitch / Vinyl Disruption into the Problem
safe_add(soundtrack, synth_glitch(dur=0.22, gain=0.85), 1.75)

# ACT 2: THE PROBLEM / FRAGMENTATION (2.0s – 4.5s)
# 2.0s, 2.7s, 3.4s: Broken syncopated hits (disorganization)
safe_add(soundtrack, synth_kick(dur=0.25, gain=0.8), 2.0)
safe_add(soundtrack, synth_glitch(dur=0.12, gain=0.6), 2.45)
safe_add(soundtrack, synth_tactile_snap(dur=0.09, gain=0.8), 2.85)
safe_add(soundtrack, synth_glitch(dur=0.14, gain=0.7), 3.3)
safe_add(soundtrack, synth_tactile_snap(dur=0.08, gain=0.85), 3.75)
safe_add(soundtrack, synth_glitch(dur=0.18, gain=0.75), 4.0)

# 3.8s – 4.5s: Rising magnetic vacuum sweep pulling everything together
safe_add(soundtrack, synth_riser(dur=0.75, f_start=140.0, f_end=1800.0, gain=0.8), 3.75)

# ACT 3: THE AXIOM SHIFT (CHAOS -> SYSTEM) (4.5s – 7.0s)
# 4.5s: CLIMAX 1 — Monumental Magnetic Snap & Sub-Bass Drop
safe_add(soundtrack, synth_sub_impact(dur=2.2, f_start=160.0, f_end=36.0, gain=1.0), 4.5)
safe_add(soundtrack, synth_tactile_snap(dur=0.1, gain=0.95), 4.5)
safe_add(soundtrack, synth_shimmer_crystal(dur=1.5, gain=0.6), 4.52)

# 4.9s, 5.3s, 5.7s, 6.1s, 6.5s: Steady rhythmic pulses as grid elements lock in
grid_beats = [4.95, 5.4, 5.85, 6.3, 6.75]
for gb in grid_beats:
    safe_add(soundtrack, synth_tactile_snap(dur=0.06, gain=0.55), gb)
    safe_add(soundtrack, synth_arp_note(880.0, dur=0.1, gain=0.3), gb)

# ACT 4: SHOW THE SYSTEM (7.0s – 10.5s)
# High-energy, intelligent 128 BPM electronic groove
groove_start = 7.0
groove_end = 10.5
num_beats = int((groove_end - groove_start) / BEAT_DUR)

arp_notes = [440.0, 554.37, 659.25, 880.0, 659.25, 1108.73, 880.0, 554.37]

for b_idx in range(num_beats):
    t_beat = groove_start + b_idx * BEAT_DUR
    # Kick on every beat
    safe_add(soundtrack, synth_kick(dur=0.3, gain=0.85), t_beat)
    # Snare on beats 2 and 4
    if b_idx % 2 == 1:
        safe_add(soundtrack, synth_snare_clap(dur=0.22, gain=0.8), t_beat)
    # 16th note bass and arpeggio
    for s in range(4):
        t_sub = t_beat + s * SIXTEENTH
        f_bass = 55.0 if (b_idx % 4 < 2) else 65.41
        safe_add(soundtrack, synth_bass_note(f_bass, dur=SIXTEENTH * 0.85, gain=0.55), t_sub)
        arp_f = arp_notes[(b_idx * 4 + s) % len(arp_notes)]
        safe_add(soundtrack, synth_arp_note(arp_f, dur=0.12, gain=0.28), t_sub)

# 8.8s: Cursor clicks Lead Qualification workflow -> Haptic click
safe_add(soundtrack, synth_tactile_snap(dur=0.09, gain=0.9), 8.8)
safe_add(soundtrack, synth_shimmer_crystal(dur=1.2, gain=0.65), 8.82)

# 10.0s – 10.5s: Smooth transitional riser
safe_add(soundtrack, synth_riser(dur=0.5, f_start=300.0, f_end=1200.0, gain=0.5), 10.0)

# ACT 5: TRANSFORMATION (10.5s – 13.0s)
# 10.5s: "Automate the Work. Amplify the Business."
# Serene, lush, warm analog pad chords
safe_add(soundtrack, synth_warm_pad(dur=2.5, root_freq=220.0, gain=0.7), 10.5)
safe_add(soundtrack, synth_kick(dur=0.3, gain=0.7), 10.5)
safe_add(soundtrack, synth_tactile_snap(dur=0.08, gain=0.75), 10.5)
safe_add(soundtrack, synth_tactile_snap(dur=0.08, gain=0.7), 11.25)
safe_add(soundtrack, synth_tactile_snap(dur=0.08, gain=0.7), 12.0)
safe_add(soundtrack, synth_warm_pad(dur=2.0, root_freq=277.18, gain=0.65), 11.8)

# 12.5s – 12.95s: Vacuum drop into the Brand Reveal
safe_add(soundtrack, synth_riser(dur=0.45, f_start=200.0, f_end=2400.0, gain=0.6), 12.5)

# ACT 6: BRAND REVEAL (13.0s – 15.0s)
# 13.0s: FINAL CLIMAX — Pristine ✦ AXIOM Reveal
safe_add(soundtrack, synth_sub_impact(dur=2.0, f_start=150.0, f_end=32.0, gain=1.0), 13.0)
safe_add(soundtrack, synth_shimmer_crystal(dur=2.0, gain=0.85), 13.0)

# Pristine outro harmonic chord (A Major 9 / C# / E / G#)
outro_freqs = [220.0, 277.18, 329.63, 415.30, 440.0, 554.37]
n_o = int(SAMPLE_RATE * 1.95)
t_o = np.linspace(0, 1.95, n_o, endpoint=False)
chord = np.zeros(n_o)
for of in outro_freqs:
    chord += np.sin(2 * np.pi * of * t_o) * 0.15
env_o = np.clip(t_o / 0.05, 0, 1) * np.exp(-1.4 * t_o)
safe_add(soundtrack, np.column_stack((chord * env_o, np.roll(chord * env_o, 20))), 13.0)

# Normalize audio
max_amp = np.max(np.abs(soundtrack))
if max_amp > 0.01:
    soundtrack = (soundtrack / max_amp) * 0.95

# Output to remotion public and axiom-motion-video assets
out_paths = [
    '~/Documents/Google anti-gravity projects/remotion-edit/public/axiom_15s_soundtrack.wav',
    '~/Documents/Google anti-gravity projects/axiom-motion-video/assets/axiom_15s_soundtrack.wav'
]

for op in out_paths:
    os.makedirs(os.path.dirname(op), exist_ok=True)
    wavfile.write(op, SAMPLE_RATE, (soundtrack * 32767).astype(np.int16))
    print(f"Generated soundtrack at {op} (length: {len(soundtrack)/SAMPLE_RATE:.2f}s)")
