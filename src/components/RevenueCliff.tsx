import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

export const RevenueCliff: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active frames 625 to 725 (20.8s to 24.2s) — Synchronized with "can't make any revenue"
  const startFrame = 625;
  const endFrame = 725;

  if (frame < startFrame || frame > endFrame) return null;

  const localFrame = frame - startFrame;
  const enterSpring = spring({
    frame: localFrame,
    fps,
    config: { damping: 22, stiffness: 70 },
  });

  const exitProgress = interpolate(localFrame, [80, 100], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // The drop occurs smoothly across 25 frames (frames 660 to 685)
  const isDropped = localFrame > 35;
  const dropProgress = interpolate(localFrame, [35, 60], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Controlled single-impulse cinematic thud vibration with exponential decay
  const decay = Math.max(0, localFrame - 50);
  const shake = isDropped && decay < 20 ? Math.sin(decay * 0.8) * Math.exp(-decay * 0.2) * 3 : 0;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        backgroundColor: '#0A0507',
        zIndex: 27,
        opacity: enterSpring * exitProgress,
        transform: `translate(${shake}px, ${shake}px)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 50px',
        overflow: 'hidden',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      {/* Red ambient warning background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isDropped
            ? 'radial-gradient(circle, rgba(239, 68, 68, 0.25) 0%, transparent 80%)'
            : 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
          transition: 'background 0.3s ease',
        }}
      />

      {/* Warning Banner */}
      <div
        style={{
          backgroundColor: isDropped ? 'rgba(239, 68, 68, 0.18)' : 'rgba(255, 255, 255, 0.08)',
          border: `1.5px solid ${isDropped ? '#EF4444' : 'rgba(255, 255, 255, 0.2)'}`,
          borderRadius: 30,
          padding: '10px 28px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginBottom: 30,
        }}
      >
        <span style={{ fontSize: 22 }}>{isDropped ? '🚨' : '📊'}</span>
        <span
          style={{
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: isDropped ? '#EF4444' : '#94A3B8',
          }}
        >
          {isDropped ? 'The Commercial Reality' : 'Effort vs Output'}
        </span>
      </div>

      {/* Massive $0 Display Card */}
      <div
        style={{
          width: '100%',
          backgroundColor: 'rgba(20, 10, 15, 0.85)',
          backdropFilter: 'blur(20px)',
          borderRadius: 36,
          border: `2px solid ${isDropped ? '#EF444488' : 'rgba(255, 255, 255, 0.12)'}`,
          boxShadow: isDropped
            ? '0 30px 80px rgba(239, 68, 68, 0.35), 0 0 40px rgba(239, 68, 68, 0.2)'
            : '0 20px 50px rgba(0, 0, 0, 0.5)',
          padding: '48px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ fontSize: 20, color: '#94A3B8', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Realized Commercial Return
        </div>

        {/* The Plunging Number */}
        <div
          style={{
            fontSize: 110,
            fontWeight: 900,
            color: isDropped ? '#EF4444' : '#FFFFFF',
            margin: '20px 0',
            letterSpacing: '-0.04em',
            textShadow: isDropped ? '0 0 40px rgba(239, 68, 68, 0.6)' : 'none',
          }}
        >
          {isDropped ? '$0.00' : '$??,???'}
        </div>

        {/* SVG Cliff Graph */}
        <div style={{ width: '100%', height: 200, position: 'relative', marginTop: 10 }}>
          <svg style={{ width: '100%', height: '100%', overflow: 'visible' }}>
            {/* High effort rising slope */}
            <path
              d="M 50 160 L 320 80 L 520 40"
              stroke="#38BDF8"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
            {/* The Sudden Vertical Drop */}
            {isDropped && (
              <path
                d={`M 520 40 L 580 ${40 + dropProgress * 130} L 900 ${40 + dropProgress * 130}`}
                stroke="#EF4444"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                filter="drop-shadow(0 0 10px #EF4444)"
              />
            )}
          </svg>
        </div>

        {/* Warning label */}
        <div
          style={{
            marginTop: 30,
            backgroundColor: isDropped ? 'rgba(239, 68, 68, 0.2)' : 'transparent',
            padding: '12px 24px',
            borderRadius: 16,
            color: isDropped ? '#FCA5A5' : '#64748B',
            fontWeight: 700,
            fontSize: 22,
          }}
        >
          {isDropped ? '❌ REVENUE NOT FOUND' : 'High Knowledge · Zero Monetization'}
        </div>
      </div>
    </div>
  );
};
