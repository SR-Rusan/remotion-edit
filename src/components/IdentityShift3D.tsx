import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

export const IdentityShift3D: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active frames 1820 to 2415 (60.6s to 80.5s)
  const startFrame = 1820;
  const endFrame = 2415;

  if (frame < startFrame || frame > endFrame) return null;

  const localFrame = frame - startFrame;

  // Card 1 enters at frame 0 (on "that particular Rusan who was lost...")
  const card1Spring = spring({
    frame: localFrame,
    fps,
    config: { damping: 22, stiffness: 55 },
  });

  // Card 2 enters smoothly at frame 340 (frame 2160 / ~72.0s, on "from this Rusan to this Rusan...")
  const card2Spring = spring({
    frame: Math.max(0, localFrame - 340),
    fps,
    config: { damping: 22, stiffness: 55 },
  });

  const exitProgress = interpolate(localFrame, [570, 595], [1, 0], {
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
        backgroundColor: 'rgba(5, 7, 16, 0.94)',
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        zIndex: 26,
        opacity: exitProgress,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 160,
        perspective: 1200,
        overflow: 'hidden',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      {/* Top Section Headline */}
      <div style={{ textAlign: 'center', marginBottom: 30 }}>
        <span
          style={{
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#38BDF8',
            backgroundColor: 'rgba(56, 189, 248, 0.12)',
            padding: '8px 24px',
            borderRadius: 30,
            border: '1px solid rgba(56, 189, 248, 0.3)',
          }}
        >
          TRANSFORMATION BLUEPRINT
        </span>
        <h2
          style={{
            fontSize: 48,
            fontWeight: 900,
            color: '#FFFFFF',
            marginTop: 14,
            letterSpacing: '-0.02em',
          }}
        >
          The Identity Shift
        </h2>
      </div>

      {/* 3D Tilted Cards Container (Inspired by Ref 2) */}
      <div
        style={{
          width: 960,
          display: 'flex',
          flexDirection: 'column',
          gap: 36,
          marginTop: 20,
        }}
      >
        {/* Card 1: The Theorist (Lost, $0) */}
        <div
          style={{
            transform: `scale(${card1Spring}) translateY(${interpolate(card1Spring, [0, 1], [60, 0])}px) rotateX(6deg) rotateY(-8deg)`,
            opacity: card1Spring,
            backgroundColor: 'rgba(24, 24, 27, 0.90)',
            border: '2px solid rgba(239, 68, 68, 0.4)',
            borderRadius: 32,
            padding: '36px 36px',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(239, 68, 68, 0.15)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <span style={{ fontSize: 16, color: '#EF4444', fontWeight: 800, letterSpacing: '0.1em' }}>
              PHASE 1: THE THEORIST
            </span>
            <span style={{ fontSize: 14, color: '#FCA5A5', backgroundColor: 'rgba(239, 68, 68, 0.2)', padding: '4px 12px', borderRadius: 12, fontWeight: 700 }}>
              $0 REVENUE
            </span>
          </div>
          <div style={{ fontSize: 32, fontWeight: 900, color: '#FFFFFF', marginBottom: 12 }}>
            Knew Everything · Couldn't Monetize
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, color: '#A1A1AA', fontSize: 20 }}>
            <div>❌ Stuck in tutorial binge cycles</div>
            <div>❌ Endlessly over-engineering prototypes</div>
            <div>❌ Zero commercial client positioning</div>
          </div>
        </div>

        {/* Card 2: The Operator (Active AI Consultant) */}
        <div
          style={{
            transform: `scale(${card2Spring}) translateY(${interpolate(card2Spring, [0, 1], [60, 0])}px) rotateX(-4deg) rotateY(6deg)`,
            opacity: card2Spring,
            backgroundColor: 'rgba(6, 26, 18, 0.92)',
            border: '2.5px solid #10B981',
            borderRadius: 32,
            padding: '36px 36px',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9), 0 0 50px rgba(16, 185, 129, 0.35)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <span style={{ fontSize: 16, color: '#10B981', fontWeight: 800, letterSpacing: '0.1em' }}>
              PHASE 2: THE OPERATOR
            </span>
            <span style={{ fontSize: 14, color: '#6EE7B7', backgroundColor: 'rgba(16, 185, 129, 0.25)', padding: '4px 12px', borderRadius: 12, fontWeight: 700 }}>
              HIGH CASH FLOW
            </span>
          </div>
          <div style={{ fontSize: 32, fontWeight: 900, color: '#FFFFFF', marginBottom: 12 }}>
            Full-Time AI Consultant & Systems Builder
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, color: '#D1FAE5', fontSize: 20 }}>
            <div>✅ Packaging AI as business ROI & time savings</div>
            <div>✅ Building production client automation systems</div>
            <div>✅ High-margin enterprise client retainers</div>
          </div>
        </div>
      </div>
    </div>
  );
};
