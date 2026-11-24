import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

export const OutroTeaser: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active frames 2385 to 2700 (79.5s to 90.0s)
  const startFrame = 2385;
  const endFrame = 2700;

  if (frame < startFrame || frame > endFrame) return null;

  const localFrame = frame - startFrame;
  const enterSpring = spring({
    frame: localFrame,
    fps,
    config: { damping: 22, stiffness: 60 },
  });

  const fadeToBlack = interpolate(localFrame, [285, 314], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <>
      {/* Top Banner Outro Teaser Card - Completely separated from bottom captions */}
      <div
        style={{
          position: 'absolute',
          top: 160,
          left: 50,
          right: 50,
          transform: `scale(${enterSpring}) translateY(${interpolate(enterSpring, [0, 1], [-40, 0])}px)`,
          opacity: enterSpring,
          backgroundColor: 'rgba(15, 23, 42, 0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1.5px solid rgba(56, 189, 248, 0.4)',
          borderRadius: 28,
          padding: '24px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(56, 189, 248, 0.25)',
          zIndex: 35,
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 16,
              backgroundColor: '#38BDF820',
              border: '1.5px solid #38BDF8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 26,
            }}
          >
            📺
          </div>
          <div>
            <div style={{ fontSize: 14, color: '#38BDF8', fontWeight: 800, letterSpacing: '0.1em' }}>
              COMING IN PART 2
            </div>
            <div style={{ fontSize: 24, fontWeight: 900, color: '#FFFFFF' }}>
              The Full AI Consulting Playbook
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: '#38BDF8',
            color: '#0F172A',
            fontSize: 16,
            fontWeight: 900,
            padding: '10px 22px',
            borderRadius: 20,
          }}
        >
          FOLLOW
        </div>
      </div>

      {/* Cinematic Fade to Black at End */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#000000',
          opacity: fadeToBlack,
          zIndex: 50,
          pointerEvents: 'none',
        }}
      />
    </>
  );
};
