import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

export const HookHero: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active during hook: frames 0 to 240 (0.0s to 8.0s)
  if (frame > 240) return null;

  const badgeSpring = spring({
    frame,
    fps,
    config: { damping: 20, stiffness: 60 },
  });

  const titleSpring = spring({
    frame: Math.max(0, frame - 18),
    fps,
    config: { damping: 22, stiffness: 55 },
  });

  // Synchronized to enter right as Rusan utters "and you are not?" (frame 184 / 6.1s)
  const subSpring = spring({
    frame: Math.max(0, frame - 184),
    fps,
    config: { damping: 20, stiffness: 70 },
  });

  const exitOpacity = interpolate(frame, [215, 240], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        pointerEvents: 'none',
        zIndex: 20,
        opacity: exitOpacity,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 180,
      }}
    >
      {/* Category Pill */}
      <div
        style={{
          transform: `scale(${badgeSpring})`,
          opacity: badgeSpring,
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(56, 189, 248, 0.35)',
          borderRadius: 40,
          padding: '14px 32px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(56, 189, 248, 0.2)',
          marginBottom: 24,
        }}
      >
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: '#38BDF8',
            boxShadow: '0 0 10px #38BDF8',
          }}
        />
        <span
          style={{
            fontSize: 24,
            fontWeight: 800,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#F8FAFC',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          AI Operator Reality Check
        </span>
      </div>

      {/* Main Kinetic Headline */}
      <div
        style={{
          transform: `scale(${titleSpring}) translateY(${interpolate(titleSpring, [0, 1], [30, 0])}px)`,
          opacity: titleSpring,
          textAlign: 'center',
          maxWidth: 960,
          padding: '0 30px',
        }}
      >
        <h1
          style={{
            fontSize: 64,
            fontWeight: 900,
            lineHeight: 1.15,
            color: '#FFFFFF',
            margin: 0,
            textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)',
            fontFamily: 'Inter, system-ui, sans-serif',
            letterSpacing: '-0.02em',
          }}
        >
          HOW ARE PEOPLE EARNING WITH AI?
        </h1>
      </div>

      {/* Contrast Punch Subline */}
      <div
        style={{
          transform: `scale(${subSpring})`,
          opacity: subSpring,
          marginTop: 20,
          backgroundColor: '#EF4444',
          borderRadius: 16,
          padding: '10px 28px',
          boxShadow: '0 10px 30px rgba(239, 68, 68, 0.4)',
        }}
      >
        <span
          style={{
            fontSize: 34,
            fontWeight: 900,
            letterSpacing: '0.04em',
            color: '#FFFFFF',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          ...AND YOU ARE NOT?
        </span>
      </div>
    </div>
  );
};
