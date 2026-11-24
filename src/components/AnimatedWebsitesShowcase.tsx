import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

export const AnimatedWebsitesShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active frames 525 to 635 (17.5s to 21.2s) — Synchronized with "how to make animated websites"
  const startFrame = 525;
  const endFrame = 635;

  if (frame < startFrame || frame > endFrame) return null;

  const localFrame = frame - startFrame;
  const enterSpring = spring({
    frame: localFrame,
    fps,
    config: { damping: 24, stiffness: 60 },
  });

  const exitProgress = interpolate(localFrame, [88, 110], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Continuous subtle 3D spatial drift with soft easing
  const rotateX = interpolate(localFrame, [0, 100], [12, 6], { extrapolateRight: 'clamp' });
  const rotateY = interpolate(localFrame, [0, 100], [-14, -7], { extrapolateRight: 'clamp' });
  const scale = interpolate(localFrame, [0, 100], [0.95, 1.03], { extrapolateRight: 'clamp' });

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        backgroundColor: '#050711',
        zIndex: 26,
        opacity: enterSpring * exitProgress,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: 1200,
        overflow: 'hidden',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      {/* Background glow radial */}
      <div
        style={{
          position: 'absolute',
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, transparent 70%)',
          top: '30%',
          left: '15%',
          filter: 'blur(60px)',
        }}
      />

      {/* Header Tag */}
      <div
        style={{
          position: 'absolute',
          top: 180,
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#C084FC',
            backgroundColor: 'rgba(192, 132, 252, 0.12)',
            padding: '8px 24px',
            borderRadius: 30,
            border: '1px solid rgba(192, 132, 252, 0.3)',
          }}
        >
          ✨ High-End Web Experiences
        </span>
        <h2
          style={{
            fontSize: 48,
            fontWeight: 900,
            color: '#FFFFFF',
            marginTop: 12,
            letterSpacing: '-0.02em',
          }}
        >
          Interactive Animated Websites
        </h2>
      </div>

      {/* 3D Floating Web Showcase Mockup */}
      <div
        style={{
          width: 880,
          height: 980,
          backgroundColor: 'rgba(15, 23, 42, 0.88)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderRadius: 32,
          border: '1.5px solid rgba(255, 255, 255, 0.18)',
          boxShadow: '0 40px 100px -20px rgba(0, 0, 0, 0.9), 0 0 50px rgba(168, 85, 247, 0.25)',
          transform: `scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
          padding: 36,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Mock Browser Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <span style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: '#EF4444' }} />
            <span style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: '#F59E0B' }} />
            <span style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: '#10B981' }} />
          </div>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 20, padding: '6px 20px', color: '#94A3B8', fontSize: 16, fontFamily: 'monospace' }}>
            studio.antigravity.ai
          </div>
          <div style={{ color: '#38BDF8', fontSize: 14, fontWeight: 700 }}>WEBGL ACTIVE</div>
        </div>

        {/* Mock Hero Showcase Layout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 20 }}>
          <div style={{ fontSize: 42, fontWeight: 900, color: '#FFFFFF', lineHeight: 1.2 }}>
            Next-Gen Spatial Architecture
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{ flex: 1, height: 260, backgroundColor: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.4)', borderRadius: 20, padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <span style={{ fontSize: 32 }}>🪐</span>
              <span style={{ color: '#F8FAFC', fontWeight: 800, fontSize: 20, marginTop: 8 }}>Three.js Physics Engine</span>
              <span style={{ color: '#38BDF8', fontSize: 14 }}>60 FPS Realtime Render</span>
            </div>
            <div style={{ flex: 1, height: 260, backgroundColor: 'rgba(236, 72, 153, 0.15)', border: '1px solid rgba(236, 72, 153, 0.4)', borderRadius: 20, padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <span style={{ fontSize: 32 }}>⚡</span>
              <span style={{ color: '#F8FAFC', fontWeight: 800, fontSize: 20, marginTop: 8 }}>GSAP ScrollTrigger</span>
              <span style={{ color: '#F472B6', fontSize: 14 }}>Adaptive Velocity Curves</span>
            </div>
          </div>
        </div>

        {/* Floating Interactive Badge inside 3D Card */}
        <div
          style={{
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            border: '1px solid #10B981',
            borderRadius: 20,
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transform: 'translateZ(30px)',
          }}
        >
          <span style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 700 }}>
            Client Conversion Benchmark
          </span>
          <span style={{ color: '#34D399', fontSize: 22, fontWeight: 900 }}>
            +410% Engagement
          </span>
        </div>
      </div>
    </div>
  );
};
