import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

const FONT_FAMILY = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Helvetica, Arial, sans-serif';

export const CredentialCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active window: frame 1010 to 1330 (~33.7s to 44.3s)
  const startFrame = 1010;
  const endFrame = 1330;

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

  const spr = spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const opacity = (1 - exitProgress);
  const translateX = interpolate(spr, [0, 1], [-50, 0]) - exitProgress * 80;

  // Subtle pulse on the live status dot
  const pulse = Math.sin((frame - startFrame) * 0.15) * 0.3 + 0.7;

  return (
    <div
      style={{
        position: 'absolute',
        left: 90,
        top: 200,
        width: 480,
        opacity,
        transform: `translateX(${translateX}px)`,
        fontFamily: FONT_FAMILY,
        zIndex: 40,
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(11, 18, 34, 0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: 20,
          border: '1px solid rgba(16, 185, 129, 0.35)',
          boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.6), 0 0 30px rgba(16, 185, 129, 0.2)',
          padding: '24px 28px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: '#10B981',
                boxShadow: `0 0 12px rgba(16, 185, 129, ${pulse})`,
              }}
            />
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6EE7B7' }}>
              Current Practice
            </span>
          </div>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.15)', padding: '3px 10px', borderRadius: 12 }}>
            ACTIVE FULL-TIME
          </span>
        </div>

        <div style={{ fontSize: 30, fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 8 }}>
          AI Consultant
        </div>

        <div style={{ fontSize: 15, color: 'rgba(255, 255, 255, 0.7)', fontWeight: 500, marginBottom: 18 }}>
          Architecting Enterprise Workflows & Autonomous Ops
        </div>

        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 12,
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <span style={{ fontSize: 20 }}>💼</span>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#FFFFFF' }}>Commercial Deliverables</div>
            <div style={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.6)' }}>Custom Business Automations & AI Systems</div>
          </div>
        </div>
      </div>
    </div>
  );
};
