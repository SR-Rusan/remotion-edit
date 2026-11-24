import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

const FONT_FAMILY = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Helvetica, Arial, sans-serif';

export const IdentityShift: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active window: frame 1800 to 2540 (~60.0s to 84.7s)
  const startFrame = 1800;
  const splitFrame = 2315; // ~77.1s: "from this Rusan to this Rusan who is now making a good amount of money"
  const endFrame = 2540;

  if (frame < startFrame || frame > endFrame) {
    return null;
  }

  const exitFrames = 15;
  const isExiting = frame > endFrame - exitFrames;
  const exitProgress = isExiting
    ? interpolate(frame, [endFrame - exitFrames, endFrame], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      })
    : 0;

  // Initial entrance
  const entranceSpr = spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  // Transition between Phase 1 (The Past) and Phase 2 (The Present)
  const isPhase2 = frame >= splitFrame;
  const phase2Spr = isPhase2
    ? spring({
        frame: frame - splitFrame,
        fps,
        config: { damping: 14, stiffness: 130 },
      })
    : 0;

  const cardOpacity = (1 - exitProgress);
  const cardTranslateX = interpolate(entranceSpr, [0, 1], [-50, 0]) - exitProgress * 80;

  return (
    <div
      style={{
        position: 'absolute',
        left: 90,
        top: 190,
        width: 500,
        opacity: cardOpacity,
        transform: `translateX(${cardTranslateX}px)`,
        fontFamily: FONT_FAMILY,
        zIndex: 40,
      }}
    >
      {!isPhase2 ? (
        /* Phase 1: 2 Months Ago */
        <div
          style={{
            backgroundColor: 'rgba(15, 20, 35, 0.92)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: 20,
            border: '1px solid rgba(244, 63, 94, 0.35)',
            boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.6), 0 0 30px rgba(244, 63, 94, 0.15)',
            padding: '24px 28px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#F43F5E' }} />
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FDA4AF' }}>
                The Starting Point
              </span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#F43F5E', backgroundColor: 'rgba(244, 63, 94, 0.15)', padding: '3px 9px', borderRadius: 10 }}>
              2 MONTHS AGO
            </span>
          </div>

          <div style={{ fontSize: 26, fontWeight: 800, color: '#FFFFFF', marginBottom: 16 }}>
            Rusan: <span style={{ color: '#F43F5E' }}>The Stalled Builder</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#FECDD3', fontSize: 15, fontWeight: 500 }}>
              <span style={{ color: '#F43F5E', fontWeight: 800 }}>✕</span>
              <span>Knew every tool, launched zero offers</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#FECDD3', fontSize: 15, fontWeight: 500 }}>
              <span style={{ color: '#F43F5E', fontWeight: 800 }}>✕</span>
              <span>Overwhelmed by theoretical knowledge</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#FECDD3', fontSize: 15, fontWeight: 500 }}>
              <span style={{ color: '#F43F5E', fontWeight: 800 }}>✕</span>
              <span>Zero paying clients & zero business revenue</span>
            </div>
          </div>
        </div>
      ) : (
        /* Phase 2: Today */
        <div
          style={{
            backgroundColor: 'rgba(11, 22, 34, 0.94)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: 20,
            border: '1px solid rgba(16, 185, 129, 0.4)',
            boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.6), 0 0 35px rgba(16, 185, 129, 0.22)',
            padding: '24px 28px',
            transform: `scale(${interpolate(phase2Spr, [0, 1], [0.96, 1])})`,
            opacity: phase2Spr,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#10B981' }} />
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6EE7B7' }}>
                The Transformation
              </span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.15)', padding: '3px 9px', borderRadius: 10 }}>
              TODAY • CONSULTANT
            </span>
          </div>

          <div style={{ fontSize: 26, fontWeight: 800, color: '#FFFFFF', marginBottom: 16 }}>
            Rusan: <span style={{ color: '#10B981' }}>Monetized AI Agency</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#A7F3D0', fontSize: 15, fontWeight: 500 }}>
              <span style={{ color: '#10B981', fontWeight: 800 }}>✓</span>
              <span>Full-time high-ticket AI consultancy</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#A7F3D0', fontSize: 15, fontWeight: 500 }}>
              <span style={{ color: '#10B981', fontWeight: 800 }}>✓</span>
              <span>Delivering automated enterprise systems</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#A7F3D0', fontSize: 15, fontWeight: 500 }}>
              <span style={{ color: '#10B981', fontWeight: 800 }}>✓</span>
              <span>Consistent high-margin monthly income</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
