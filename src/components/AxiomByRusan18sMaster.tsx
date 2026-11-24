import React from 'react';
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  staticFile,
  Img,
  Audio,
  Sequence,
} from 'remotion';

// ============================================================================
// AXIOM BY RUSAN — 18.0-SECOND APPLE STYLE MASTER REEL (VERTICAL 9:16)
// Aesthetic: Apple Keynote / Apple Intelligence Cinema (Deep Space Black & Titanium)
// 100% Authentic Copy & Architecture from https://axiombyrusan.vercel.app/
// Duration: 540 Frames @ 30 FPS (18.00s)
// ============================================================================

export const AxiomByRusan18sMaster: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Apple-grade subtle camera recoil on keynote impact moments
  const isImpact1 = frame >= 14 && frame <= 24;   // Laser slice
  const isImpact2 = frame >= 30 && frame <= 38;   // Rusan Reveal
  const isImpact3 = frame >= 85 && frame <= 93;   // Dashboard reveal
  const isImpact4 = frame >= 184 && frame <= 192; // Bento Grid reveal
  const isImpact5 = frame >= 284 && frame <= 292; // 14-Day Sprint reveal
  const isImpact6 = frame >= 385 && frame <= 393; // No Middlemen
  const isImpact7 = frame >= 409 && frame <= 417; // Deterministic Code
  const isImpact8 = frame >= 433 && frame <= 441; // Amplify Revenue
  const isImpact9 = frame >= 448 && frame <= 462; // Axiom Monolith Climax

  let shakeX = 0;
  let shakeY = 0;
  if (
    isImpact1 ||
    isImpact2 ||
    isImpact3 ||
    isImpact4 ||
    isImpact5 ||
    isImpact6 ||
    isImpact7 ||
    isImpact8 ||
    isImpact9
  ) {
    shakeX = Math.sin(frame * 2.8) * 5;
    shakeY = Math.cos(frame * 3.1) * 3.5;
  }

  // Smooth continuous cinematic camera push (Apple Keynote drift)
  const cameraPush = 1.0 + (frame / 540) * 0.04;
  const ambientPulse = Math.sin(frame / 16) * 0.08 + 0.92;

  return (
    <div
      style={{
        position: 'relative',
        width,
        height,
        backgroundColor: '#000000',
        overflow: 'hidden',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", sans-serif',
        color: '#FFFFFF',
        transform: `translate(${shakeX}px, ${shakeY}px)`,
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap');
          
          .apple-glass {
            background: rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(40px) saturate(190%);
            -webkit-backdrop-filter: blur(40px) saturate(190%);
            border: 1px solid rgba(255, 255, 255, 0.12);
            box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.9), inset 0 1px 1px 0 rgba(255, 255, 255, 0.2);
          }
          .titanium-text {
            background: linear-gradient(180deg, #FFFFFF 20%, #E2E8F0 60%, #94A3B8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .iris-glow-text {
            background: linear-gradient(135deg, #818CF8 0%, #C084FC 50%, #38BDF8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .emerald-glow-text {
            background: linear-gradient(135deg, #34D399 0%, #10B981 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>

      {/* Cinematic Studio Lighting: Top Volumetric Iris Spotlight */}
      <div
        style={{
          position: 'absolute',
          top: -200,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 1200,
          height: 1000,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, rgba(79, 70, 229, 0.08) 45%, transparent 75%)',
          filter: 'blur(100px)',
          opacity: ambientPulse,
          pointerEvents: 'none',
        }}
      />

      {/* Subtle Bottom Ambient Refraction Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: -220,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 1100,
          height: 850,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(56, 189, 248, 0.05) 50%, transparent 70%)',
          filter: 'blur(110px)',
          opacity: ambientPulse,
          pointerEvents: 'none',
        }}
      />

      {/* Apple Keynote Architectural Micro-Grid */}
      <div
        style={{
          position: 'absolute',
          inset: -40,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `scale(${cameraPush})`,
          opacity: 0.8,
        }}
      />

      {/* Dynamic Island: Signature Apple Glass Pill at Top */}
      <DynamicIslandTop frame={frame} fps={fps} />

      {/* Bottom Precision Telemetry (Apple Monospace Status) */}
      <div
        style={{
          position: 'absolute',
          bottom: 38,
          left: 48,
          right: 48,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 12,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: '0.12em',
          color: 'rgba(255, 255, 255, 0.45)',
          zIndex: 100,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#10B981',
              boxShadow: '0 0 10px rgba(16, 185, 129, 0.8)',
            }}
          />
          <span style={{ fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)' }}>
            SYSTEMS OPERATIONAL
          </span>
        </div>
        <div style={{ display: 'flex', gap: 14, color: 'rgba(255, 255, 255, 0.45)' }}>
          <span>14-DAY SPRINT</span>
          <span>•</span>
          <span>ZERO MIDDLEMEN</span>
          <span>•</span>
          <span style={{ color: '#818CF8', fontWeight: 600 }}>axiombyrusan.vercel.app</span>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 18.0-SECOND CONTINUOUS APPLE CINEMATIC STORYLINE                     */}
      {/* ==================================================================== */}

      {/* ACT 1: THE MONOLITHIC STATEMENT & THE ARCHITECT (0.0s – 3.2s | Frames 0 – 96) */}
      {frame >= 0 && frame < 98 && <AppleAct1 frame={frame} fps={fps} />}

      {/* ACT 2: THE APPLE-GRADE AUTOMATION COMMAND CENTER (2.7s – 6.6s | Frames 82 – 200) */}
      {frame >= 82 && frame < 200 && <AppleAct2 frame={frame - 82} fps={fps} />}

      {/* ACT 3: APPLE KEYNOTE BENTO GRID — CORE CAPABILITIES (6.1s – 10.0s | Frames 184 – 302) */}
      {frame >= 184 && frame < 302 && <AppleAct3 frame={frame - 184} fps={fps} />}

      {/* ACT 4: THE 14-DAY DELIVERY SPRINT & PRINCIPLES (9.5s – 13.3s | Frames 284 – 402) */}
      {frame >= 284 && frame < 402 && <AppleAct4 frame={frame - 284} fps={fps} />}

      {/* ACT 5: KINETIC VELOCITY SPRINT (12.8s – 15.2s | Frames 385 – 460) */}
      {frame >= 385 && frame < 460 && <AppleAct5 frame={frame - 385} fps={fps} />}

      {/* ACT 6: CLIMAX & APPLE-STYLE INTERACTIVE CTA (14.9s – 18.0s | Frames 448 – 540) */}
      {frame >= 448 && <AppleAct6 frame={frame - 448} fps={fps} />}

      {/* Synchronized 18.0s High-Fidelity Audio Track */}
      <AudioTrack18s />
    </div>
  );
};

// ============================================================================
// APPLE DYNAMIC ISLAND COMPONENT
// ============================================================================
const DynamicIslandTop: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  // Pill state morphing across acts
  let pillWidth = 340;
  let pillContent = (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 13, color: '#818CF8' }}>✦</span>
        <span style={{ fontWeight: 800, fontSize: 12, letterSpacing: '0.04em', color: '#FFFFFF' }}>Axiom</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10B981', boxShadow: '0 0 6px #10B981' }} />
        <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255, 255, 255, 0.7)' }}>Systems Operational</span>
      </div>
    </div>
  );

  if (frame >= 82 && frame < 184) {
    pillWidth = 420;
    pillContent = (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 13, color: '#818CF8' }}>✦</span>
          <span style={{ fontWeight: 700, fontSize: 11.5, color: '#FFFFFF' }}>Dashboard</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: '#10B981' }}>
          <span>1,248 Tasks Synced</span>
          <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>|</span>
          <span style={{ color: '#818CF8' }}>05 Running ●</span>
        </div>
      </div>
    );
  } else if (frame >= 184 && frame < 284) {
    pillWidth = 390;
    pillContent = (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 13, color: '#10B981' }}>⚡</span>
          <span style={{ fontWeight: 700, fontSize: 11.5, color: '#FFFFFF' }}>Response Latency</span>
        </div>
        <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: '#10B981', fontWeight: 700 }}>
          &lt; 90s Guaranteed
        </div>
      </div>
    );
  } else if (frame >= 284 && frame < 385) {
    pillWidth = 370;
    pillContent = (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 13, color: '#818CF8' }}>✦</span>
          <span style={{ fontWeight: 700, fontSize: 11.5, color: '#FFFFFF' }}>Delivery Cycle</span>
        </div>
        <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: '#FFFFFF', fontWeight: 700 }}>
          14 Days Handover
        </div>
      </div>
    );
  } else if (frame >= 448) {
    pillWidth = 330;
    pillContent = (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 13, color: '#818CF8' }}>✦</span>
          <span style={{ fontWeight: 800, fontSize: 12, color: '#FFFFFF' }}>Axiom</span>
        </div>
        <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: '#818CF8', fontWeight: 600 }}>
          Ready to Automate
        </div>
      </div>
    );
  }

  const islandSpring = spring({
    frame,
    fps,
    config: { damping: 22, stiffness: 140 },
  });

  return (
    <div
      style={{
        position: 'absolute',
        top: 36,
        left: '50%',
        transform: `translateX(-50%) scale(${islandSpring})`,
        width: pillWidth,
        height: 40,
        borderRadius: 24,
        backgroundColor: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(30px)',
        border: '1px solid rgba(255, 255, 255, 0.16)',
        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.8), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        zIndex: 200,
        transition: 'width 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {pillContent}
    </div>
  );
};

// ============================================================================
// APPLE TRANSLUCENT CURSOR COMPONENT (macOS / iPadOS Precision Pointer)
// ============================================================================
const ApplePointer: React.FC<{
  x: number;
  y: number;
  isClicking?: boolean;
  opacity?: number;
  label?: string;
}> = ({ x, y, isClicking = false, opacity = 1, label }) => {
  if (opacity <= 0.01) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top: y,
        left: x,
        zIndex: 999,
        pointerEvents: 'none',
        opacity,
        transform: `translate(-4px, -4px) scale(${isClicking ? 0.86 : 1.0})`,
        transition: 'transform 0.08s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Precision Apple Glass Pointer */}
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 3L11.5 21L14.5 13.5L22 10.5L4 3Z"
          fill="rgba(255, 255, 255, 0.92)"
          stroke="rgba(0, 0, 0, 0.6)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          style={{ filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.5))' }}
        />
      </svg>

      {/* Tactile Apple Click Haptic Ring */}
      {isClicking && (
        <div
          style={{
            position: 'absolute',
            top: 2,
            left: 2,
            width: 36,
            height: 36,
            borderRadius: '50%',
            border: '2px solid #818CF8',
            backgroundColor: 'rgba(129, 140, 248, 0.25)',
            transform: 'translate(-10px, -10px)',
            boxShadow: '0 0 15px rgba(129, 140, 248, 0.6)',
          }}
        />
      )}

      {/* Telemetry Label Tag */}
      {label && (
        <div
          style={{
            position: 'absolute',
            left: 28,
            top: 16,
            padding: '5px 12px',
            borderRadius: 10,
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(20px)',
            color: '#FFFFFF',
            fontSize: 11,
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            whiteSpace: 'nowrap',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

// ============================================================================
// ACT 1: THE MONOLITHIC STATEMENT & THE ARCHITECT (0.0s – 3.2s | Frames 0 – 96)
// ============================================================================
const AppleAct1: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const exitProgress = interpolate(frame, [80, 96], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const actOpacity = 1 - exitProgress;
  const actScale = 1.0 - exitProgress * 0.08;
  const actTranslateY = -exitProgress * 45;

  const hookSpring = spring({
    frame,
    fps,
    config: { damping: 20, stiffness: 130 },
  });

  const slashProgress = interpolate(frame, [14, 22], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const founderSpring = spring({
    frame: Math.max(0, frame - 30),
    fps,
    config: { damping: 22, stiffness: 100 },
  });

  const floatY = Math.sin(frame / 7) * 6;

  // Scene 1A: The Monolithic Hook (Frames 0 to 30)
  if (frame < 30) {
    return (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 54px',
          textAlign: 'center',
          zIndex: 20,
          opacity: actOpacity,
          transform: `translateY(${actTranslateY}px) scale(${actScale})`,
        }}
      >
        {/* Apple Keynote Eyebrow Pill */}
        <div
          style={{
            fontSize: 12,
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            color: '#818CF8',
            letterSpacing: '0.16em',
            marginBottom: 24,
            padding: '7px 22px',
            borderRadius: 30,
            border: '1px solid rgba(129, 140, 248, 0.3)',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
            opacity: hookSpring,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#818CF8' }} />
          <span>AI AUTOMATION FOR GROWING BUSINESSES</span>
        </div>

        {/* Monolithic Apple Titanium Headline */}
        <div
          style={{
            fontSize: 74,
            fontWeight: 900,
            lineHeight: 1.02,
            letterSpacing: '-0.045em',
            marginBottom: 14,
            opacity: hookSpring,
            transform: `scale(${0.92 + hookSpring * 0.08})`,
          }}
          className="titanium-text"
        >
          AUTOMATE
          <br />
          THE WORK.
        </div>

        {/* Apple Sub-Headline with Shimmer Accent */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 1.1,
            marginBottom: 28,
            opacity: hookSpring,
          }}
          className="iris-glow-text"
        >
          Amplify the Business.
        </div>

        {/* Exact Subtitle from axiombyrusan.vercel.app Hero */}
        <div
          style={{
            fontSize: 17,
            color: 'rgba(255, 255, 255, 0.65)',
            lineHeight: 1.5,
            maxWidth: 620,
            fontWeight: 400,
            letterSpacing: '-0.01em',
            opacity: hookSpring,
          }}
        >
          I build practical AI automations that eliminate repetitive work, connect your tools,
          and give growing businesses more time to focus on what actually matters.
        </div>

        {/* Laser Slice & Warning Pill */}
        {frame >= 14 && (
          <div
            style={{
              position: 'relative',
              marginTop: 34,
              overflow: 'hidden',
              borderRadius: 30,
              padding: '2px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                width: `${slashProgress}%`,
                height: 2,
                backgroundColor: '#38BDF8',
                boxShadow: '0 0 16px #38BDF8, 0 0 30px #818CF8',
                transform: 'translateY(-50%)',
              }}
            />
            <div
              style={{
                padding: '9px 24px',
                borderRadius: 28,
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.35)',
                color: '#FCA5A5',
                fontSize: 12.5,
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
                letterSpacing: '0.12em',
                backdropFilter: 'blur(10px)',
              }}
            >
              ⚠ MANUAL PROCESSES KILL MOMENTUM
            </div>
          </div>
        )}
      </div>
    );
  }

  // Scene 1B: Rusan Revealed (The Architect Behind Axiom) (Frames 30 to 96)
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 48px',
        textAlign: 'center',
        zIndex: 20,
        opacity: actOpacity,
        transform: `translateY(${actTranslateY}px) scale(${actScale})`,
      }}
    >
      {/* Precision Apple Optical Lens Frame with Orbit Rings */}
      <div
        style={{
          position: 'relative',
          width: 250,
          height: 250,
          marginBottom: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: `scale(${founderSpring}) translateY(${floatY}px)`,
        }}
      >
        {/* Outer Orbit Ring with dashed ticks */}
        <div
          style={{
            position: 'absolute',
            inset: -22,
            borderRadius: '50%',
            border: '1px dashed rgba(129, 140, 248, 0.4)',
            transform: `rotate(${frame * 1.2}deg)`,
          }}
        />

        {/* Counter Orbit Ring with Glowing Satellite Node */}
        <div
          style={{
            position: 'absolute',
            inset: -10,
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            transform: `rotate(-${frame * 0.9}deg)`,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: -5,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: '#38BDF8',
              boxShadow: '0 0 12px #38BDF8',
            }}
          />
        </div>

        {/* Apple Optical Glass Lens Avatar Container */}
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(99, 102, 241, 0.3)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
          }}
        >
          <Img
            src={staticFile('rusan-avatar.png')}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Floating 3D Elements from Website */}
        <div
          style={{
            position: 'absolute',
            top: -20,
            right: -32,
            width: 76,
            height: 76,
            transform: `rotate(12deg) translateY(${Math.sin(frame / 6) * 8}px)`,
            filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.7))',
          }}
        >
          <Img src={staticFile('about-3d-lego.png')} style={{ width: '100%', height: '100%' }} />
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: -15,
            left: -32,
            width: 80,
            height: 80,
            transform: `rotate(-10deg) translateY(${Math.cos(frame / 6) * 8}px)`,
            filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.7))',
          }}
        >
          <Img src={staticFile('about-3d-ai-brain.png')} style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      {/* Pill Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 18px',
          borderRadius: 24,
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          marginBottom: 16,
          opacity: founderSpring,
        }}
      >
        <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10B981', boxShadow: '0 0 6px #10B981' }} />
        <span style={{ fontSize: 11.5, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: '#34D399', letterSpacing: '0.12em' }}>
          FOUNDER & LEAD AUTOMATION ENGINEER
        </span>
      </div>

      {/* Founder Name */}
      <div
        style={{
          fontSize: 82,
          fontWeight: 900,
          letterSpacing: '-0.05em',
          lineHeight: 1.0,
          marginBottom: 14,
          opacity: founderSpring,
        }}
        className="titanium-text"
      >
        RUSAN
      </div>

      {/* About Section Core Manifesto */}
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: '-0.025em',
          marginBottom: 14,
          opacity: founderSpring,
        }}
        className="iris-glow-text"
      >
        Built by an Engineer, Not a Middleman.
      </div>

      <div
        style={{
          fontSize: 16.5,
          color: 'rgba(255, 255, 255, 0.65)',
          lineHeight: 1.5,
          maxWidth: 580,
          fontWeight: 400,
          opacity: founderSpring,
        }}
      >
        No account managers or telephone games—just direct engineering and clean, maintainable systems.
      </div>
    </div>
  );
};

// ============================================================================
// ACT 2: THE APPLE-GRADE AUTOMATION COMMAND CENTER (2.7s – 6.6s | Frames 82 – 200)
// ============================================================================
const AppleAct2: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 22, stiffness: 110 },
  });

  const exitProgress = interpolate(frame, [100, 118], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const opacity = (1 - exitProgress) * enterSpring;
  const scale = 0.94 + enterSpring * 0.06 - exitProgress * 0.08;
  const translateY = (1 - enterSpring) * 60 - exitProgress * 40;

  // Real-time counter interpolation up to 1,248
  const taskCount = Math.floor(
    interpolate(frame, [0, 60], [0, 1248], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })
  );

  // Dynamic SVG wave draw
  const pathLength = 650;
  const strokeDashoffset = interpolate(frame, [10, 75], [pathLength, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Apple cursor sequence
  const cursorX = interpolate(frame, [18, 55, 75], [780, 520, 520], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const cursorY = interpolate(frame, [18, 55, 75], [1400, 1060, 1060], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const isClicking = frame >= 55 && frame <= 70;
  const cursorOpacity = interpolate(frame, [15, 25, 85, 95], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 40px',
        zIndex: 25,
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
      }}
    >
      {/* Apple Studio Display Chassis (Frosted Dark Glass) */}
      <div
        className="apple-glass"
        style={{
          width: '100%',
          maxWidth: 960,
          borderRadius: 36,
          padding: '36px 36px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: 22,
          position: 'relative',
        }}
      >
        {/* Top Header of AutomationDashboard.tsx */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: 20,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 14,
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: 16,
                letterSpacing: '0.05em',
                color: '#FFFFFF',
              }}
            >
              AX
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 19, letterSpacing: '-0.02em', color: '#FFFFFF' }}>
                Axiom by Rusan
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.45)', fontFamily: "'JetBrains Mono', monospace" }}>
                Enterprise Automation Engine
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <div
              style={{
                padding: '8px 16px',
                borderRadius: 12,
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                fontSize: 12,
                fontFamily: "'JetBrains Mono', monospace",
                color: 'rgba(255, 255, 255, 0.65)',
              }}
            >
              Search ⌘K
            </div>
            <div
              style={{
                padding: '8px 18px',
                borderRadius: 12,
                backgroundColor: '#6366F1',
                fontWeight: 700,
                fontSize: 12,
                color: '#FFFFFF',
                boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)',
              }}
            >
              + New automation
            </div>
          </div>
        </div>

        {/* Greeting Banner from Dashboard */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.025em', color: '#FFFFFF' }}>
              Good evening, Rusan.
            </div>
            <div style={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.55)', marginTop: 2 }}>
              Your automation systems are running smoothly.
            </div>
          </div>
          <div
            style={{
              padding: '6px 14px',
              borderRadius: 20,
              backgroundColor: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              fontSize: 12,
              fontFamily: "'JetBrains Mono', monospace",
              color: '#34D399',
              fontWeight: 700,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10B981', boxShadow: '0 0 6px #10B981' }} />
            <span>05 Running</span>
          </div>
        </div>

        {/* 3 Metric Squircle Tiles */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          <div
            style={{
              padding: '18px 20px',
              borderRadius: 20,
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div style={{ fontSize: 11.5, fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255, 255, 255, 0.45)', marginBottom: 4 }}>
              ACTIVE PIPELINES
            </div>
            <div style={{ fontSize: 36, fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.03em' }}>
              07
            </div>
          </div>

          <div
            style={{
              padding: '18px 20px',
              borderRadius: 20,
              backgroundColor: 'rgba(16, 185, 129, 0.05)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
            }}
          >
            <div style={{ fontSize: 11.5, fontFamily: "'JetBrains Mono', monospace", color: '#34D399', marginBottom: 4 }}>
              TASKS COMPLETED
            </div>
            <div style={{ fontSize: 36, fontWeight: 900, color: '#34D399', letterSpacing: '-0.03em' }}>
              {taskCount.toLocaleString()}
            </div>
          </div>

          <div
            style={{
              padding: '18px 20px',
              borderRadius: 20,
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div style={{ fontSize: 11.5, fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255, 255, 255, 0.45)', marginBottom: 4 }}>
              SYSTEM HEALTH
            </div>
            <div style={{ fontSize: 36, fontWeight: 900, color: '#818CF8', letterSpacing: '-0.03em' }}>
              99.9%
            </div>
          </div>
        </div>

        {/* Live SVG Telemetry Wave Curve */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 120,
            borderRadius: 20,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            overflow: 'hidden',
            padding: '10px 16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255, 255, 255, 0.4)' }}>
            <span>LIVE THROUGHPUT TELEMETRY</span>
            <span style={{ color: '#818CF8' }}>● 132 executions/min</span>
          </div>

          <svg
            viewBox="0 0 480 140"
            style={{ width: '100%', height: '100%', overflow: 'visible' }}
          >
            <defs>
              <linearGradient id="appleWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#818CF8" />
                <stop offset="50%" stopColor="#C084FC" />
                <stop offset="100%" stopColor="#34D399" />
              </linearGradient>
            </defs>
            <path
              d="M0,130 C40,110 80,125 120,80 C160,40 200,90 240,65 C280,45 320,105 360,50 C400,20 440,75 480,40"
              fill="none"
              stroke="url(#appleWaveGrad)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={pathLength}
              strokeDashoffset={strokeDashoffset}
              style={{ filter: 'drop-shadow(0 0 10px rgba(129, 140, 248, 0.8))' }}
            />
          </svg>
        </div>

        {/* 4 Real Workflows from Website */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            { name: 'Lead Qualification', type: 'AI + CRM Sync', status: 'RUNNING' },
            { name: 'Client Onboarding', type: 'Forms + Email', status: 'RUNNING' },
            { name: 'Content Repurposing', type: 'AI + Social', status: 'ACTIVE' },
            { name: 'Invoice Follow-up', type: 'Email + Sheets', status: 'ACTIVE' },
          ].map((w, idx) => (
            <div
              key={idx}
              style={{
                padding: '14px 18px',
                borderRadius: 16,
                backgroundColor:
                  idx === 0 && isClicking ? 'rgba(99, 102, 241, 0.18)' : 'rgba(255, 255, 255, 0.03)',
                border:
                  idx === 0 && isClicking
                    ? '1px solid #818CF8'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.15s ease',
              }}
            >
              <div>
                <div style={{ fontWeight: 700, fontSize: 14.5, color: '#FFFFFF' }}>{w.name}</div>
                <div style={{ fontSize: 11.5, color: 'rgba(255, 255, 255, 0.45)' }}>{w.type}</div>
              </div>
              <div
                style={{
                  fontSize: 10,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 800,
                  color: '#34D399',
                  backgroundColor: 'rgba(16, 185, 129, 0.12)',
                  padding: '4px 10px',
                  borderRadius: 10,
                }}
              >
                ● {w.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Apple Glass Cursor */}
      <ApplePointer
        x={cursorX}
        y={cursorY}
        isClicking={isClicking}
        opacity={cursorOpacity}
        label={isClicking ? '✓ WEBHOOK TRIGGERED' : 'Click to execute'}
      />
    </div>
  );
};

// ============================================================================
// ACT 3: APPLE KEYNOTE BENTO GRID — CORE CAPABILITIES (6.1s – 10.0s | Frames 184 – 302)
// Verbatim from ServicesSection.tsx of axiombyrusan.vercel.app
// ============================================================================
const AppleAct3: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 22, stiffness: 110 },
  });

  const exitProgress = interpolate(frame, [100, 118], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const opacity = (1 - exitProgress) * enterSpring;
  const scale = 0.94 + enterSpring * 0.06 - exitProgress * 0.08;
  const translateY = (1 - enterSpring) * 60 - exitProgress * 40;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 44px',
        zIndex: 25,
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
      }}
    >
      {/* Apple Keynote Eyebrow Pill */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 20px',
          borderRadius: 24,
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.14)',
          marginBottom: 16,
        }}
      >
        <span style={{ fontSize: 12, color: '#818CF8' }}>✦</span>
        <span style={{ fontSize: 11.5, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: '#818CF8', letterSpacing: '0.14em' }}>
          CORE CAPABILITIES
        </span>
      </div>

      {/* Main Section Headline from ServicesSection.tsx */}
      <div
        style={{
          fontSize: 48,
          fontWeight: 900,
          letterSpacing: '-0.04em',
          textAlign: 'center',
          lineHeight: 1.08,
          marginBottom: 26,
        }}
        className="titanium-text"
      >
        Engineered Automations,
        <br />
        <span className="iris-glow-text">Not Gimmicks.</span>
      </div>

      {/* Apple Signature 4-Tile Bento Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 16,
          width: '100%',
          maxWidth: 960,
        }}
      >
        {/* Tile 1: Lead Qualification & CRM Sync */}
        <div
          className="apple-glass"
          style={{
            padding: '28px',
            borderRadius: 28,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 220,
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: '#34D399', fontWeight: 800 }}>
                ● RESPONSE TIME
              </span>
              <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255, 255, 255, 0.4)' }}>
                100% AUTOMATED
              </span>
            </div>
            <div style={{ fontSize: 52, fontWeight: 900, letterSpacing: '-0.04em', color: '#34D399', lineHeight: 1.0, marginBottom: 8 }}>
              &lt; 90s
            </div>
            <div style={{ fontSize: 17, fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Autonomous Lead Qualification & CRM Sync
            </div>
          </div>
          <div style={{ fontSize: 12.5, color: 'rgba(255, 255, 255, 0.55)' }}>
            Saves 8–12 hours weekly. Enriched directly into your pipeline.
          </div>
        </div>

        {/* Tile 2: Zero-Friction Client Onboarding */}
        <div
          className="apple-glass"
          style={{
            padding: '28px',
            borderRadius: 28,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 220,
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: '#818CF8', fontWeight: 800 }}>
                ● INSTANT LATENCY
              </span>
              <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: '#34D399' }}>
                0% ERROR RATE
              </span>
            </div>
            <div style={{ fontSize: 52, fontWeight: 900, letterSpacing: '-0.04em', color: '#818CF8', lineHeight: 1.0, marginBottom: 8 }}>
              0 ms
            </div>
            <div style={{ fontSize: 17, fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Zero-Friction Client Onboarding
            </div>
          </div>
          <div style={{ fontSize: 12.5, color: 'rgba(255, 255, 255, 0.55)' }}>
            From intake form to live workspace, folder, and Slack room instantly.
          </div>
        </div>

        {/* Tile 3: Content Pipeline & Repurposing Engine */}
        <div
          className="apple-glass"
          style={{
            padding: '28px',
            borderRadius: 28,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 220,
          }}
        >
          <div>
            <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: '#C084FC', fontWeight: 800, marginBottom: 12 }}>
              ● MULTI-CHANNEL DISTRIBUTION
            </div>
            <div style={{ fontSize: 44, fontWeight: 900, letterSpacing: '-0.04em', color: '#FFFFFF', lineHeight: 1.0, marginBottom: 8 }}>
              1 ➔ 10
            </div>
            <div style={{ fontSize: 17, fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Content Pipeline & Repurposing Engine
            </div>
          </div>
          <div style={{ fontSize: 12.5, color: 'rgba(255, 255, 255, 0.55)' }}>
            One longform input formatted into multi-platform scheduled drafts.
          </div>
        </div>

        {/* Tile 4: Internal Knowledge Assistant & SOP Copilot */}
        <div
          className="apple-glass"
          style={{
            padding: '28px',
            borderRadius: 28,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 220,
          }}
        >
          <div>
            <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: '#38BDF8', fontWeight: 800, marginBottom: 12 }}>
              ● REDUCED INTERRUPTIONS
            </div>
            <div style={{ fontSize: 52, fontWeight: 900, letterSpacing: '-0.04em', color: '#38BDF8', lineHeight: 1.0, marginBottom: 8 }}>
              -80%
            </div>
            <div style={{ fontSize: 17, fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Internal Knowledge Assistant & SOP Copilot
            </div>
          </div>
          <div style={{ fontSize: 12.5, color: 'rgba(255, 255, 255, 0.55)' }}>
            Instant documented answers directly inside Slack or your CRM.
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// ACT 4: THE 14-DAY DELIVERY SPRINT & PRINCIPLES (9.5s – 13.3s | Frames 284 – 402)
// Verbatim from ProcessSection.tsx & AboutSection.tsx
// ============================================================================
const AppleAct4: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 22, stiffness: 110 },
  });

  const exitProgress = interpolate(frame, [100, 118], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const opacity = (1 - exitProgress) * enterSpring;
  const scale = 0.94 + enterSpring * 0.06 - exitProgress * 0.08;
  const translateY = (1 - enterSpring) * 60 - exitProgress * 40;

  // Timeline progress scrubber line
  const timelineProgress = interpolate(frame, [15, 80], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 44px',
        zIndex: 25,
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
      }}
    >
      {/* Eyebrow Pill */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 20px',
          borderRadius: 24,
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.14)',
          marginBottom: 16,
        }}
      >
        <span style={{ fontSize: 12, color: '#34D399' }}>✦</span>
        <span style={{ fontSize: 11.5, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: '#34D399', letterSpacing: '0.14em' }}>
          PROVEN 14-DAY DELIVERY CYCLE
        </span>
      </div>

      {/* Main Headline from ProcessSection.tsx */}
      <div
        style={{
          fontSize: 52,
          fontWeight: 900,
          letterSpacing: '-0.04em',
          textAlign: 'center',
          lineHeight: 1.05,
          marginBottom: 36,
        }}
        className="titanium-text"
      >
        From Bottleneck to System
        <br />
        <span className="iris-glow-text">in 14 Days.</span>
      </div>

      {/* Apple Panoramic Timeline Card */}
      <div
        className="apple-glass"
        style={{
          width: '100%',
          maxWidth: 960,
          borderRadius: 32,
          padding: '36px 36px',
          marginBottom: 20,
        }}
      >
        {/* Timeline Scrubber Bar */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 2,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: `${timelineProgress}%`,
              background: 'linear-gradient(90deg, #818CF8, #34D399)',
              borderRadius: 2,
              boxShadow: '0 0 12px #34D399',
            }}
          />
        </div>

        {/* 4 Process Stages from ProcessSection.tsx */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {[
            { days: 'DAYS 1–3', title: 'Audit & Mapping', desc: 'Identify drag and design target architecture.' },
            { days: 'DAYS 4–7', title: 'Sandbox Build', desc: 'Construct workflows with mock data & JSON schemas.' },
            { days: 'DAYS 8–11', title: 'Production Sync', desc: 'Connect live APIs with error-handling.' },
            { days: 'DAYS 12–14', title: 'Handover & SOPs', desc: 'Team walkthrough, docs, and 30-day monitoring.' },
          ].map((s, idx) => (
            <div key={idx}>
              <div
                style={{
                  fontSize: 11,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 800,
                  color: '#818CF8',
                  marginBottom: 6,
                }}
              >
                {s.days}
              </div>
              <div style={{ fontSize: 16, fontWeight: 800, color: '#FFFFFF', marginBottom: 4, letterSpacing: '-0.02em' }}>
                {s.title}
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.4 }}>
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Two Core Engineering Pillars from AboutSection.tsx */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 16,
          width: '100%',
          maxWidth: 960,
        }}
      >
        <div
          className="apple-glass"
          style={{
            padding: '24px 28px',
            borderRadius: 24,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <span style={{ color: '#818CF8', fontSize: 16 }}>✦</span>
            <div style={{ fontSize: 17, fontWeight: 800, color: '#FFFFFF' }}>Deterministic Engineering</div>
          </div>
          <div style={{ fontSize: 13, color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.45 }}>
            Structured JSON schemas, strict validation, and comprehensive error handling. No fragile prompt chains.
          </div>
        </div>

        <div
          className="apple-glass"
          style={{
            padding: '24px 28px',
            borderRadius: 24,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <span style={{ color: '#34D399', fontSize: 16 }}>✦</span>
            <div style={{ fontSize: 17, fontWeight: 800, color: '#FFFFFF' }}>Privacy by Default</div>
          </div>
          <div style={{ fontSize: 13, color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.45 }}>
            Zero customer data is used to train public models. Only private API endpoints and ephemeral storage.
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// ACT 5: KINETIC VELOCITY SPRINT (12.8s – 15.2s | Frames 385 – 460)
// High-Impact Apple Keynote Typographic Punches
// ============================================================================
const AppleAct5: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  let text = 'NO MIDDLEMEN.';
  let sub = 'Direct engineering from Rusan.';
  let colorClass = 'titanium-text';

  if (frame >= 24 && frame < 48) {
    text = 'DETERMINISTIC CODE.';
    sub = 'Reliable systems. Zero guesswork.';
    colorClass = 'iris-glow-text';
  } else if (frame >= 48) {
    text = 'AMPLIFY REVENUE.';
    sub = 'Scale without adding payroll.';
    colorClass = 'emerald-glow-text';
  }

  const beatSpring = spring({
    frame: frame % 24,
    fps,
    config: { damping: 16, stiffness: 180 },
  });

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 40px',
        textAlign: 'center',
        zIndex: 30,
        transform: `scale(${0.9 + beatSpring * 0.1})`,
      }}
    >
      <div
        style={{
          fontSize: 13,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: '0.2em',
          color: 'rgba(255, 255, 255, 0.45)',
          marginBottom: 16,
        }}
      >
        // CORE PHILOSOPHY
      </div>

      <div
        style={{
          fontSize: 78,
          fontWeight: 900,
          letterSpacing: '-0.05em',
          lineHeight: 1.0,
          marginBottom: 16,
        }}
        className={colorClass}
      >
        {text}
      </div>

      <div
        style={{
          fontSize: 22,
          fontWeight: 500,
          color: 'rgba(255, 255, 255, 0.75)',
          letterSpacing: '-0.02em',
        }}
      >
        {sub}
      </div>
    </div>
  );
};

// ============================================================================
// ACT 6: CLIMAX & APPLE-STYLE INTERACTIVE CTA (14.9s – 18.0s | Frames 448 – 540)
// Verbatim from BookingSection.tsx of axiombyrusan.vercel.app
// ============================================================================
const AppleAct6: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 22, stiffness: 100 },
  });

  // Apple cursor sequence
  const cursorX = interpolate(frame, [15, 45, 60], [780, 540, 540], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const cursorY = interpolate(frame, [15, 45, 60], [1450, 1140, 1140], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const isClicking = frame >= 45 && frame <= 62;
  const cursorOpacity = interpolate(frame, [10, 20, 75, 85], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Ripple shockwave upon click
  const rippleScale = interpolate(frame, [45, 75], [1, 2.4], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const rippleOpacity = interpolate(frame, [45, 75], [0.8, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 48px',
        textAlign: 'center',
        zIndex: 35,
        opacity: enterSpring,
        transform: `scale(${0.92 + enterSpring * 0.08})`,
      }}
    >
      {/* Monolithic Axiom Monogram Squircle */}
      <div
        className="apple-glass"
        style={{
          width: 100,
          height: 100,
          borderRadius: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 40,
          fontWeight: 900,
          marginBottom: 28,
          boxShadow: '0 25px 60px rgba(99, 102, 241, 0.35)',
        }}
      >
        <span className="iris-glow-text">✦</span>
      </div>

      {/* Brand Title Lockup */}
      <div
        style={{
          fontSize: 84,
          fontWeight: 900,
          letterSpacing: '-0.05em',
          lineHeight: 1.0,
          marginBottom: 8,
        }}
        className="titanium-text"
      >
        AXIOM
      </div>

      <div
        style={{
          fontSize: 22,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: '0.14em',
          color: '#818CF8',
          marginBottom: 28,
          fontWeight: 600,
        }}
      >
        BY RUSAN
      </div>

      {/* BookingSection Headline & Pitch */}
      <div
        style={{
          fontSize: 34,
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: 14,
          color: '#FFFFFF',
        }}
      >
        Ready to Automate? Let’s Connect.
      </div>

      <div
        style={{
          fontSize: 16.5,
          color: 'rgba(255, 255, 255, 0.65)',
          lineHeight: 1.5,
          maxWidth: 580,
          fontWeight: 400,
          marginBottom: 44,
        }}
      >
        Book a complimentary 20-minute workflow discovery call with Rusan at Axiom.
      </div>

      {/* Apple Glass Pill CTA Button */}
      <div style={{ position: 'relative' }}>
        {/* Ripple Shockwave */}
        {frame >= 45 && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 32,
              border: '2px solid #818CF8',
              transform: `scale(${rippleScale})`,
              opacity: rippleOpacity,
              pointerEvents: 'none',
            }}
          />
        )}

        <div
          style={{
            padding: '20px 48px',
            borderRadius: 30,
            backgroundColor: isClicking ? '#4F46E5' : '#6366F1',
            color: '#FFFFFF',
            fontWeight: 800,
            fontSize: 20,
            letterSpacing: '-0.02em',
            boxShadow: '0 20px 50px rgba(99, 102, 241, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            transform: `scale(${isClicking ? 0.94 : 1.0})`,
            transition: 'all 0.1s ease-out',
          }}
        >
          <span>Book a call</span>
          <span style={{ fontSize: 22 }}>➔</span>
        </div>
      </div>

      {/* Direct Website URL Pill */}
      <div
        style={{
          marginTop: 52,
          padding: '8px 24px',
          borderRadius: 20,
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          fontSize: 14,
          fontFamily: "'JetBrains Mono', monospace",
          color: 'rgba(255, 255, 255, 0.8)',
          letterSpacing: '0.04em',
        }}
      >
        axiombyrusan.vercel.app
      </div>

      {/* Apple Translucent Cursor */}
      <ApplePointer
        x={cursorX}
        y={cursorY}
        isClicking={isClicking}
        opacity={cursorOpacity}
      />
    </div>
  );
};

// ============================================================================
// AUDIO TRACK: 18.0s SYNCHRONIZED HIGH-FIDELITY AUDIO
// ============================================================================
const AudioTrack18s: React.FC = () => {
  return (
    <>
      {/* 18s Driving Electro Groove */}
      <Audio src={staticFile('bg_music_18s.wav')} volume={0.88} />

      {/* Keyframe Sound Design */}
      <Sequence from={0}>
        <Audio src={staticFile('sfx/sfx_sub_impact.wav')} volume={0.7} />
      </Sequence>
      <Sequence from={14}>
        <Audio src={staticFile('sfx/sfx_laser_cut.wav')} volume={0.85} />
      </Sequence>
      <Sequence from={30}>
        <Audio src={staticFile('sfx/sfx_whoosh_pro.wav')} volume={0.65} />
      </Sequence>
      <Sequence from={82}>
        <Audio src={staticFile('sfx/sfx_sub_impact.wav')} volume={0.65} />
      </Sequence>
      <Sequence from={137}>
        <Audio src={staticFile('sfx/sfx_snap.wav')} volume={0.9} />
      </Sequence>
      <Sequence from={184}>
        <Audio src={staticFile('sfx/sfx_whoosh_pro.wav')} volume={0.65} />
      </Sequence>
      <Sequence from={284}>
        <Audio src={staticFile('sfx/sfx_shimmer_pro.wav')} volume={0.75} />
      </Sequence>
      <Sequence from={385}>
        <Audio src={staticFile('sfx/sfx_pop.wav')} volume={0.75} />
      </Sequence>
      <Sequence from={409}>
        <Audio src={staticFile('sfx/sfx_pop.wav')} volume={0.75} />
      </Sequence>
      <Sequence from={433}>
        <Audio src={staticFile('sfx/sfx_pop.wav')} volume={0.75} />
      </Sequence>
      <Sequence from={448}>
        <Audio src={staticFile('sfx/sfx_sub_impact.wav')} volume={0.9} />
      </Sequence>
      <Sequence from={493}>
        <Audio src={staticFile('sfx/sfx_snap.wav')} volume={0.95} />
      </Sequence>
    </>
  );
};
