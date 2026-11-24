import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

export const DualRoiEngine: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active frames 1080 to 1460 (36.0s to 48.6s)
  const startFrame = 1080;
  const endFrame = 1460;

  if (frame < startFrame || frame > endFrame) return null;

  const localFrame = frame - startFrame;
  const enterSpring = spring({
    frame: localFrame,
    fps,
    config: { damping: 22, stiffness: 55 },
  });

  const exitProgress = interpolate(localFrame, [355, 380], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Staggered sequential counter animation: A -> settle -> B -> settle
  // 1. Meter 1 (Hours Saved) animates localFrame 30 to 130, then settles
  const hoursSaved = Math.round(interpolate(localFrame, [30, 130], [40, 4], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  }));

  // 2. Meter 2 (Revenue Generated) animates localFrame 170 to 270 on vocal sync, then settles
  const revenueMade = Math.round(interpolate(localFrame, [170, 270], [2500, 18400], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  }));

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        backgroundColor: '#060B18',
        zIndex: 26,
        opacity: enterSpring * exitProgress,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 50px',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      {/* Top Header */}
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <span
          style={{
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#10B981',
            backgroundColor: 'rgba(16, 185, 129, 0.12)',
            padding: '8px 24px',
            borderRadius: 30,
            border: '1px solid rgba(16, 185, 129, 0.3)',
          }}
        >
          ⚡ The Commercial Flywheel
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
          Save Time · Multiply Revenue
        </h2>
      </div>

      {/* Dual Meter Container */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 30 }}>
        {/* Meter 1: Time Saved */}
        <div
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.90)',
            backdropFilter: 'blur(20px)',
            borderRadius: 32,
            border: '1.5px solid rgba(56, 189, 248, 0.35)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(56, 189, 248, 0.15)',
            padding: '36px 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: 16, color: '#38BDF8', fontWeight: 800, letterSpacing: '0.1em' }}>
              OPERATIONAL OVERHEAD
            </div>
            <div style={{ fontSize: 72, fontWeight: 900, color: '#FFFFFF', margin: '8px 0' }}>
              {hoursSaved} <span style={{ fontSize: 32, color: '#94A3B8' }}>hrs/wk</span>
            </div>
            <div style={{ fontSize: 18, color: '#94A3B8', fontWeight: 600 }}>
              Repetitive manual tasks eliminated
            </div>
          </div>
          <div
            style={{
              backgroundColor: 'rgba(56, 189, 248, 0.18)',
              border: '1px solid #38BDF8',
              borderRadius: 20,
              padding: '16px 20px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 32, fontWeight: 900, color: '#38BDF8' }}>-90%</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#BAE6FD' }}>TIME FREED</div>
          </div>
        </div>

        {/* SVG Connecting Flux Arrow */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              width: 50,
              height: 50,
              borderRadius: '50%',
              backgroundColor: '#1E293B',
              border: '2px solid #10B981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24,
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)',
            }}
          >
            ⬇
          </div>
        </div>

        {/* Meter 2: Revenue Generated */}
        <div
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.90)',
            backdropFilter: 'blur(20px)',
            borderRadius: 32,
            border: '1.5px solid rgba(16, 185, 129, 0.4)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(16, 185, 129, 0.2)',
            padding: '36px 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: 16, color: '#10B981', fontWeight: 800, letterSpacing: '0.1em' }}>
              SCALABLE BUSINESS REVENUE
            </div>
            <div style={{ fontSize: 72, fontWeight: 900, color: '#34D399', margin: '8px 0' }}>
              ${revenueMade.toLocaleString()}
            </div>
            <div style={{ fontSize: 18, color: '#94A3B8', fontWeight: 600 }}>
              High-margin enterprise consulting
            </div>
          </div>
          <div
            style={{
              backgroundColor: 'rgba(16, 185, 129, 0.2)',
              border: '1px solid #10B981',
              borderRadius: 20,
              padding: '16px 20px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 32, fontWeight: 900, color: '#10B981' }}>+636%</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#A7F3D0' }}>ROI YIELD</div>
          </div>
        </div>
      </div>
    </div>
  );
};
