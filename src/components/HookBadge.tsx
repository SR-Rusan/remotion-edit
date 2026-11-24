import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

const FONT_FAMILY = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Helvetica, Arial, sans-serif';

export const HookBadge: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active window: frame 10 to 200 (duration: 190 frames, ~6.3s)
  const startFrame = 10;
  const endFrame = 200;

  if (frame < startFrame || frame > endFrame) {
    return null;
  }

  const localFrame = frame - startFrame;
  const exitFrames = 15;
  const isExiting = frame > endFrame - exitFrames;

  // Spring entrance
  const entrance = spring({
    frame: localFrame,
    fps,
    config: { damping: 14, stiffness: 120, mass: 0.8 },
  });

  // Smooth exit
  const exitProgress = isExiting
    ? interpolate(frame, [endFrame - exitFrames, endFrame], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      })
    : 0;

  const translateX = interpolate(entrance, [0, 1], [-60, 0]) - exitProgress * 80;
  const opacity = interpolate(entrance, [0, 1], [0, 1]) * (1 - exitProgress);

  return (
    <div
      style={{
        position: 'absolute',
        left: 90,
        top: 210,
        width: 490,
        opacity,
        transform: `translateX(${translateX}px)`,
        fontFamily: FONT_FAMILY,
        zIndex: 40,
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(11, 18, 34, 0.90)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: 20,
          border: '1px solid rgba(255, 255, 255, 0.14)',
          boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.6), 0 0 25px rgba(16, 185, 129, 0.12)',
          padding: '24px 28px',
        }}
      >
        {/* Header Tag */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#F43F5E' }} />
            <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.6)' }}>
              Market Reality Check
            </span>
          </div>
          <span style={{ fontSize: 13, fontWeight: 600, color: '#38BDF8', backgroundColor: 'rgba(56, 189, 248, 0.12)', padding: '4px 10px', borderRadius: 12 }}>
            AI Economy
          </span>
        </div>

        {/* Row 1: Others */}
        <div
          style={{
            backgroundColor: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.28)',
            borderRadius: 14,
            padding: '14px 18px',
            marginBottom: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#6EE7B7', marginBottom: 2 }}>
              Other Builders
            </div>
            <div style={{ fontSize: 26, fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              $10,000+ <span style={{ fontSize: 15, fontWeight: 500, color: '#A7F3D0' }}>/ month</span>
            </div>
          </div>
          <div style={{ fontSize: 22, color: '#10B981', fontWeight: 800 }}>↗</div>
        </div>

        {/* Row 2: You */}
        <div
          style={{
            backgroundColor: 'rgba(244, 63, 94, 0.08)',
            border: '1px solid rgba(244, 63, 94, 0.28)',
            borderRadius: 14,
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#FDA4AF', marginBottom: 2 }}>
              Your Revenue
            </div>
            <div style={{ fontSize: 26, fontWeight: 800, color: '#F43F5E', letterSpacing: '-0.02em' }}>
              $0.00 <span style={{ fontSize: 14, fontWeight: 600, color: '#FDA4AF', marginLeft: 6 }}>[ STUCK ]</span>
            </div>
          </div>
          <div style={{ fontSize: 20, color: '#F43F5E', fontWeight: 700 }}>✕</div>
        </div>
      </div>
    </div>
  );
};
