import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

export const CalendarSketchAnchor: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active frames 725 to 945 (24.1s to 31.5s) — Anchored upper-safe area
  const startFrame = 725;
  const endFrame = 945;

  if (frame < startFrame || frame > endFrame) return null;

  const localFrame = frame - startFrame;
  const enterSpring = spring({
    frame: localFrame,
    fps,
    config: { damping: 22, stiffness: 60 },
  });

  const exitProgress = interpolate(localFrame, [205, 220], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Progressive marker stroke begins drawing at localFrame 140 (frame 865) and completes at 190 (frame 915)
  // precisely synchronized as Rusan utters "two months ago" (frames 892-926)
  const strokeProgress = interpolate(localFrame, [140, 190], [400, 0], {
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
        zIndex: 22,
        opacity: enterSpring * exitProgress,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 90,
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      {/* Hand-drawn Sketch Calendar Card - Positioned in upper safe area */}
      <div
        style={{
          width: 440,
          backgroundColor: '#FFFFFF',
          borderRadius: 24,
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 25px rgba(255, 255, 255, 0.2)',
          overflow: 'hidden',
          transform: `scale(${enterSpring * 0.9}) rotate(-3deg)`,
          border: '3px solid #0F172A',
        }}
      >
        {/* Calendar Red Header */}
        <div
          style={{
            backgroundColor: '#DC2626',
            color: '#FFFFFF',
            textAlign: 'center',
            padding: '12px 0',
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          TIMELINE RESET
        </div>

        {/* Calendar Body */}
        <div
          style={{
            padding: '24px 20px',
            textAlign: 'center',
            position: 'relative',
            backgroundColor: '#FAFAF9',
          }}
        >
          <div style={{ fontSize: 58, fontWeight: 900, color: '#18181B', lineHeight: 1 }}>
            60 DAYS
          </div>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#71717A', marginTop: 6 }}>
            PRIOR TO LAUNCH
          </div>

          {/* SVG Hand-Drawn Animated Red Marker Circle */}
          <svg
            style={{
              position: 'absolute',
              top: 10,
              left: 20,
              width: 400,
              height: 120,
              pointerEvents: 'none',
            }}
          >
            <ellipse
              cx="200"
              cy="60"
              rx="180"
              ry="48"
              fill="none"
              stroke="#EF4444"
              strokeWidth="6"
              strokeDasharray="400"
              strokeDashoffset={strokeProgress}
              strokeLinecap="round"
              transform="rotate(-2 200 60)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
