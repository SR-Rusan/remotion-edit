import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

export const ConsultantDossier: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active frames 935 to 1090 (31.1s to 36.3s) — Synchronized with "full-time AI consultant"
  const startFrame = 935;
  const endFrame = 1090;

  if (frame < startFrame || frame > endFrame) return null;

  const localFrame = frame - startFrame;
  const enterSpring = spring({
    frame: localFrame,
    fps,
    config: { damping: 22, stiffness: 60 },
  });

  const exitProgress = interpolate(localFrame, [135, 155], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Kinetic highlighter sweep across key title (50 frames = 1.67s smooth glide)
  const highlightWidth = interpolate(localFrame, [20, 70], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Progressive checklist items reveal
  const item1Progress = interpolate(localFrame, [45, 60], [0, 1], { extrapolateRight: 'clamp' });
  const item2Progress = interpolate(localFrame, [65, 80], [0, 1], { extrapolateRight: 'clamp' });
  const item3Progress = interpolate(localFrame, [85, 100], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        backgroundColor: '#070C18',
        zIndex: 26,
        opacity: enterSpring * exitProgress,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 60px',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      {/* Top Category Badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          backgroundColor: 'rgba(56, 189, 248, 0.15)',
          border: '1.5px solid #38BDF8',
          borderRadius: 30,
          padding: '10px 24px',
          marginBottom: 36,
        }}
      >
        <span style={{ fontSize: 20 }}>💼</span>
        <span style={{ fontSize: 18, color: '#38BDF8', fontWeight: 800, letterSpacing: '0.12em' }}>
          VERIFIED ROLE & PRACTICE
        </span>
      </div>

      {/* Modern Executive Dossier Card */}
      <div
        style={{
          width: '100%',
          backgroundColor: 'rgba(15, 23, 42, 0.92)',
          backdropFilter: 'blur(30px)',
          borderRadius: 36,
          border: '1.5px solid rgba(255, 255, 255, 0.16)',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.7), 0 0 50px rgba(56, 189, 248, 0.2)',
          padding: '48px 40px',
        }}
      >
        {/* Profile Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 36 }}>
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: '50%',
              backgroundColor: '#1E293B',
              border: '2px solid #38BDF8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 40,
              boxShadow: '0 0 20px rgba(56, 189, 248, 0.4)',
            }}
          >
            ⚡
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 36, fontWeight: 900, color: '#FFFFFF' }}>RUSAN</span>
              <span style={{ fontSize: 24, color: '#38BDF8' }}>✓</span>
            </div>
            <span style={{ fontSize: 18, color: '#94A3B8', fontWeight: 600 }}>Commercial AI Architect</span>
          </div>
        </div>

        {/* Highlighted Title Block (Inspired by Ref 3 Highlighter) */}
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: 36 }}>
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: `${highlightWidth}%`,
              backgroundColor: 'rgba(56, 189, 248, 0.35)',
              borderRadius: 8,
              zIndex: 1,
            }}
          />
          <h2
            style={{
              fontSize: 44,
              fontWeight: 900,
              color: '#FFFFFF',
              margin: 0,
              position: 'relative',
              zIndex: 2,
              padding: '6px 12px',
              letterSpacing: '-0.02em',
            }}
          >
            FULL-TIME AI CONSULTANT
          </h2>
        </div>

        {/* Deliverables Checklist — Progressively revealed */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              opacity: item1Progress,
              transform: `translateY(${interpolate(item1Progress, [0, 1], [15, 0])}px)`,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              backgroundColor: 'rgba(255,255,255,0.05)',
              padding: '16px 20px',
              borderRadius: 16,
            }}
          >
            <span style={{ color: '#10B981', fontSize: 22 }}>✓</span>
            <span style={{ color: '#E2E8F0', fontSize: 22, fontWeight: 600 }}>Autonomous Workflow Engineering</span>
          </div>
          <div
            style={{
              opacity: item2Progress,
              transform: `translateY(${interpolate(item2Progress, [0, 1], [15, 0])}px)`,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              backgroundColor: 'rgba(255,255,255,0.05)',
              padding: '16px 20px',
              borderRadius: 16,
            }}
          >
            <span style={{ color: '#10B981', fontSize: 22 }}>✓</span>
            <span style={{ color: '#E2E8F0', fontSize: 22, fontWeight: 600 }}>Enterprise Operational Cost Reduction</span>
          </div>
          <div
            style={{
              opacity: item3Progress,
              transform: `translateY(${interpolate(item3Progress, [0, 1], [15, 0])}px)`,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              backgroundColor: 'rgba(255,255,255,0.05)',
              padding: '16px 20px',
              borderRadius: 16,
            }}
          >
            <span style={{ color: '#10B981', fontSize: 22 }}>✓</span>
            <span style={{ color: '#E2E8F0', fontSize: 22, fontWeight: 600 }}>Client Revenue Optimization via AI</span>
          </div>
        </div>
      </div>
    </div>
  );
};
