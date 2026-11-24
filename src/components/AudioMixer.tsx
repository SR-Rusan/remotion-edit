import React from 'react';
import { Audio, Sequence, staticFile, interpolate } from 'remotion';

export const AudioMixer: React.FC = () => {
  return (
    <>
      {/* 1. Background Music with Dynamic Ducking (~7.5 dB lower under speech) */}
      <Audio
        src={staticFile('bg_music.wav')}
        volume={(f) => {
          // Fade in at start
          if (f < 30) {
            return interpolate(f, [0, 30], [0, 0.04]);
          }
          // Outro swell & fade (swells only after Rusan's final spoken word at frame 2670)
          if (f > 2640) {
            return interpolate(f, [2640, 2675, 2700], [0.036, 0.11, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
          }
          // Dynamic gentle swells during visual transition beats (capped to prevent vocal competition)
          if (f >= 235 && f <= 270) {
            return 0.07; // Idea cloud reveal swell
          }
          if (f >= 655 && f <= 690) {
            return 0.075; // Revenue cliff impact swell
          }
          if (f >= 935 && f <= 965) {
            return 0.07; // Consultant dossier swell
          }
          if (f >= 2155 && f <= 2195) {
            return 0.075; // 3D Operator transformation swell
          }
          // Base ducked speech level (-7.5 dB from previous 0.085)
          return 0.036;
        }}
      />

      {/* 2. Synchronized Curated SFX Events (Tuned down 6-8 dB, no redundant popping) */}
      {/* Hook entrance */}
      <Sequence from={5} durationInFrames={40}>
        <Audio src={staticFile('sfx/sfx_whoosh_soft.wav')} volume={0.14} />
      </Sequence>
      {/* Hook punchline on "...and you are not?" (synchronized with vocal delivery) */}
      <Sequence from={184} durationInFrames={30}>
        <Audio src={staticFile('sfx/sfx_tick.wav')} volume={0.15} />
      </Sequence>

      {/* Idea Cloud entrance (Single soft entrance; all rapid notification pops removed) */}
      <Sequence from={240} durationInFrames={45}>
        <Audio src={staticFile('sfx/sfx_whoosh_soft.wav')} volume={0.14} />
      </Sequence>

      {/* Vibe coding terminal reveal */}
      <Sequence from={405} durationInFrames={40}>
        <Audio src={staticFile('sfx/sfx_whoosh_soft.wav')} volume={0.14} />
      </Sequence>

      {/* Automations workflow split-screen transition */}
      <Sequence from={455} durationInFrames={30}>
        <Audio src={staticFile('sfx/sfx_tick.wav')} volume={0.14} />
      </Sequence>

      {/* Animated websites showcase reveal */}
      <Sequence from={525} durationInFrames={45}>
        <Audio src={staticFile('sfx/sfx_whoosh_soft.wav')} volume={0.14} />
      </Sequence>

      {/* Revenue cliff plunge (Single smooth drop whoosh; harsh impact pop removed) */}
      <Sequence from={660} durationInFrames={45}>
        <Audio src={staticFile('sfx/sfx_whoosh_soft.wav')} volume={0.16} />
      </Sequence>

      {/* Calendar sketch completion tick (Synchronized with "two months ago" circle completion) */}
      <Sequence from={915} durationInFrames={30}>
        <Audio src={staticFile('sfx/sfx_tick.wav')} volume={0.14} />
      </Sequence>

      {/* Consultant dossier highlighter sweep */}
      <Sequence from={955} durationInFrames={50}>
        <Audio src={staticFile('sfx/sfx_shimmer.wav')} volume={0.14} />
      </Sequence>

      {/* Dual ROI engine entrance */}
      <Sequence from={1080} durationInFrames={45}>
        <Audio src={staticFile('sfx/sfx_whoosh_soft.wav')} volume={0.14} />
      </Sequence>

      {/* 3D Identity Shift - Phase 1: Theorist Card */}
      <Sequence from={1820} durationInFrames={45}>
        <Audio src={staticFile('sfx/sfx_whoosh_soft.wav')} volume={0.14} />
      </Sequence>

      {/* 3D Identity Shift - Phase 2: Operator Card Transformation (Subtle shimmer, no loud pop) */}
      <Sequence from={2160} durationInFrames={50}>
        <Audio src={staticFile('sfx/sfx_shimmer.wav')} volume={0.14} />
      </Sequence>

      {/* Outro teaser banner */}
      <Sequence from={2385} durationInFrames={40}>
        <Audio src={staticFile('sfx/sfx_whoosh_soft.wav')} volume={0.12} />
      </Sequence>
    </>
  );
};
