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
// AXIOM BY RUSAN — 18.0-SECOND APPLE STYLE MASTER REEL (LANDSCAPE 16:9)
// Aesthetic: Apple Keynote Widescreen Cinema (Deep Space Black & Titanium)
// 100% Authentic Copy & Architecture from https://axiombyrusan.vercel.app/
// Duration: 540 Frames @ 30 FPS (18.00s | 1920x1080)
// ============================================================================

export const AxiomByRusan18sMasterLandscape: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const isImpact1 = frame >= 14 && frame <= 24;
  const isImpact2 = frame >= 30 && frame <= 38;
  const isImpact3 = frame >= 85 && frame <= 93;
  const isImpact4 = frame >= 184 && frame <= 192;
  const isImpact5 = frame >= 284 && frame <= 292;
  const isImpact6 = frame >= 385 && frame <= 393;
  const isImpact7 = frame >= 409 && frame <= 417;
  const isImpact8 = frame >= 433 && frame <= 441;
  const isImpact9 = frame >= 448 && frame <= 462;

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

  const cameraPush = 1.0 + (frame / 540) * 0.035;
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
          top: -240,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 1600,
          height: 1100,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(79, 70, 229, 0.07) 45%, transparent 75%)',
          filter: 'blur(120px)',
          opacity: ambientPulse,
          pointerEvents: 'none',
        }}
      />

      {/* Bottom Ambient Refraction Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: -250,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 1500,
          height: 900,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(56, 189, 248, 0.05) 50%, transparent 70%)',
          filter: 'blur(130px)',
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
          backgroundSize: '70px 70px',
          transform: `scale(${cameraPush})`,
          opacity: 0.8,
        }}
      />

      {/* Dynamic Island: Signature Apple Glass Pill at Top */}
      <DynamicIslandTopLandscape frame={frame} fps={fps} />

      {/* Bottom Precision Telemetry */}
      <div
        style={{
          position: 'absolute',
          bottom: 34,
          left: 64,
          right: 64,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 12.5,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: '0.12em',
          color: 'rgba(255, 255, 255, 0.45)',
          zIndex: 100,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
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
        <div style={{ display: 'flex', gap: 20, color: 'rgba(255, 255, 255, 0.45)' }}>
          <span>14-DAY SPRINT</span>
          <span>•</span>
          <span>ZERO MIDDLEMEN</span>
          <span>•</span>
          <span style={{ color: '#818CF8', fontWeight: 600 }}>axiombyrusan.vercel.app</span>
        </div>
      </div>

      {/* ACTS */}
      {frame >= 0 && frame < 98 && <AppleAct1Landscape frame={frame} fps={fps} />}
      {frame >= 82 && frame < 200 && <AppleAct2Landscape frame={frame - 82} fps={fps} />}
      {frame >= 184 && frame < 302 && <AppleAct3Landscape frame={frame - 184} fps={fps} />}
      {frame >= 284 && frame < 402 && <AppleAct4Landscape frame={frame - 284} fps={fps} />}
      {frame >= 385 && frame < 460 && <AppleAct5Landscape frame={frame - 385} fps={fps} />}
      {frame >= 448 && <AppleAct6Landscape frame={frame - 448} fps={fps} />}

      <AudioTrack18s />
    </div>
  );
};

// ============================================================================
// DYNAMIC ISLAND LANDSCAPE
// ============================================================================
const DynamicIslandTopLandscape: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  let pillWidth = 400;
  let pillContent = (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 14, color: '#818CF8' }}>✦</span>
        <span style={{ fontWeight: 800, fontSize: 13, letterSpacing: '0.04em', color: '#FFFFFF' }}>Axiom</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#10B981', boxShadow: '0 0 6px #10B981' }} />
        <span style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255, 255, 255, 0.7)' }}>Systems Operational</span>
      </div>
    </div>
  );

  if (frame >= 82 && frame < 184) {
    pillWidth = 500;
    pillContent = (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 14, color: '#818CF8' }}>✦</span>
          <span style={{ fontWeight: 700, fontSize: 12.5, color: '#FFFFFF' }}>Automation Command Center</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: '#10B981' }}>
          <span>1,248 Tasks Synced</span>
          <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>|</span>
          <span style={{ color: '#818CF8' }}>05 Running ●</span>
        </div>
      </div>
    );
  } else if (frame >= 184 && frame < 284) {
    pillWidth = 440;
    pillContent = (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 14, color: '#10B981' }}>⚡</span>
          <span style={{ fontWeight: 700, fontSize: 12.5, color: '#FFFFFF' }}>Core Capabilities</span>
        </div>
        <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: '#10B981', fontWeight: 700 }}>
          &lt; 90s Response Latency
        </div>
      </div>
    );
  } else if (frame >= 284 && frame < 385) {
    pillWidth = 420;
    pillContent = (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 14, color: '#818CF8' }}>✦</span>
          <span style={{ fontWeight: 700, fontSize: 12.5, color: '#FFFFFF' }}>Turnkey Delivery</span>
        </div>
        <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: '#FFFFFF', fontWeight: 700 }}>
          14 Days Handover
        </div>
      </div>
    );
  } else if (frame >= 448) {
    pillWidth = 380;
    pillContent = (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 14, color: '#818CF8' }}>✦</span>
          <span style={{ fontWeight: 800, fontSize: 13, color: '#FFFFFF' }}>Axiom</span>
        </div>
        <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: '#818CF8', fontWeight: 600 }}>
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
        height: 42,
        borderRadius: 24,
        backgroundColor: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(30px)',
        border: '1px solid rgba(255, 255, 255, 0.16)',
        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.8), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 18px',
        zIndex: 200,
        transition: 'width 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {pillContent}
    </div>
  );
};

// ============================================================================
// APPLE TRANSLUCENT CURSOR LANDSCAPE
// ============================================================================
const ApplePointerLandscape: React.FC<{
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
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 3L11.5 21L14.5 13.5L22 10.5L4 3Z"
          fill="rgba(255, 255, 255, 0.92)"
          stroke="rgba(0, 0, 0, 0.6)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          style={{ filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.5))' }}
        />
      </svg>
      {isClicking && (
        <div
          style={{
            position: 'absolute',
            top: 2,
            left: 2,
            width: 38,
            height: 38,
            borderRadius: '50%',
            border: '2px solid #818CF8',
            backgroundColor: 'rgba(129, 140, 248, 0.25)',
            transform: 'translate(-10px, -10px)',
            boxShadow: '0 0 15px rgba(129, 140, 248, 0.6)',
          }}
        />
      )}
      {label && (
        <div
          style={{
            position: 'absolute',
            left: 30,
            top: 18,
            padding: '5px 12px',
            borderRadius: 10,
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(20px)',
            color: '#FFFFFF',
            fontSize: 11.5,
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
// ACT 1 LANDSCAPE
// ============================================================================
const AppleAct1Landscape: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const exitProgress = interpolate(frame, [80, 96], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const actOpacity = 1 - exitProgress;
  const actScale = 1.0 - exitProgress * 0.08;

  const hookSpring = spring({
    frame,
    fps,
    config: { damping: 20, stiffness: 130 },
  });

  const founderSpring = spring({
    frame: Math.max(0, frame - 30),
    fps,
    config: { damping: 22, stiffness: 100 },
  });

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
          textAlign: 'center',
          zIndex: 20,
          opacity: actOpacity,
          transform: `scale(${actScale})`,
          padding: '0 120px',
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            color: '#818CF8',
            letterSpacing: '0.16em',
            marginBottom: 20,
            padding: '7px 24px',
            borderRadius: 30,
            border: '1px solid rgba(129, 140, 248, 0.3)',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            backdropFilter: 'blur(20px)',
            opacity: hookSpring,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#818CF8' }} />
          <span>AI AUTOMATION FOR GROWING BUSINESSES</span>
        </div>

        <div
          style={{
            fontSize: 82,
            fontWeight: 900,
            letterSpacing: '-0.045em',
            lineHeight: 1.05,
            marginBottom: 16,
            opacity: hookSpring,
          }}
          className="titanium-text"
        >
          Automate the Work. <span className="iris-glow-text">Amplify the Business.</span>
        </div>

        <div
          style={{
            fontSize: 21,
            color: 'rgba(255, 255, 255, 0.65)',
            lineHeight: 1.5,
            maxWidth: 880,
            fontWeight: 400,
            opacity: hookSpring,
          }}
        >
          I build practical AI automations that eliminate repetitive work, connect your tools,
          and give growing businesses more time to focus on what actually matters.
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 80,
        padding: '0 140px',
        zIndex: 20,
        opacity: actOpacity,
        transform: `scale(${actScale})`,
      }}
    >
      <div
        style={{
          position: 'relative',
          width: 320,
          height: 320,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: `scale(${founderSpring})`,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: -25,
            borderRadius: '50%',
            border: '1px dashed rgba(129, 140, 248, 0.4)',
            transform: `rotate(${frame * 1.2}deg)`,
          }}
        />
        <div
          style={{
            width: 280,
            height: 280,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(99, 102, 241, 0.3)',
          }}
        >
          <Img src={staticFile('rusan-avatar.png')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>

      <div style={{ maxWidth: 800 }}>
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
          <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10B981' }} />
          <span style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: '#34D399', letterSpacing: '0.12em' }}>
            FOUNDER & LEAD AUTOMATION ENGINEER
          </span>
        </div>

        <div style={{ fontSize: 88, fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1.0, marginBottom: 16 }} className="titanium-text">
          RUSAN
        </div>

        <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 14 }} className="iris-glow-text">
          Built by an Engineer, Not a Middleman.
        </div>

        <div style={{ fontSize: 18, color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.5, maxWidth: 640 }}>
          No account managers or telephone games—just direct engineering and clean, maintainable systems.
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// ACT 2 LANDSCAPE
// ============================================================================
const AppleAct2Landscape: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
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

  const taskCount = Math.floor(
    interpolate(frame, [0, 60], [0, 1248], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })
  );

  const pathLength = 650;
  const strokeDashoffset = interpolate(frame, [10, 75], [pathLength, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const cursorX = interpolate(frame, [18, 55, 75], [1300, 950, 950], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const cursorY = interpolate(frame, [18, 55, 75], [780, 580, 580], {
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
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 80px',
        zIndex: 25,
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <div
        className="apple-glass"
        style={{
          width: '100%',
          maxWidth: 1400,
          borderRadius: 36,
          padding: '36px 44px',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 46, height: 46, borderRadius: 14, backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 18, color: '#FFFFFF' }}>
              AX
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 20, color: '#FFFFFF' }}>Axiom by Rusan</div>
              <div style={{ fontSize: 12.5, color: 'rgba(255, 255, 255, 0.45)', fontFamily: "'JetBrains Mono', monospace" }}>Enterprise Automation Engine</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <div style={{ padding: '8px 18px', borderRadius: 12, backgroundColor: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.12)', fontSize: 13, fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255, 255, 255, 0.65)' }}>
              Search ⌘K
            </div>
            <div style={{ padding: '8px 20px', borderRadius: 12, backgroundColor: '#6366F1', fontWeight: 700, fontSize: 13, color: '#FFFFFF', boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)' }}>
              + New automation
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.8fr', gap: 32, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#FFFFFF', marginBottom: 4 }}>Good evening, Rusan.</div>
            <div style={{ fontSize: 15, color: 'rgba(255, 255, 255, 0.55)', marginBottom: 24 }}>Your automation systems are running smoothly.</div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
              <div style={{ padding: '16px 18px', borderRadius: 18, backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255, 255, 255, 0.45)', marginBottom: 4 }}>ACTIVE</div>
                <div style={{ fontSize: 32, fontWeight: 900, color: '#FFFFFF' }}>07</div>
              </div>
              <div style={{ padding: '16px 18px', borderRadius: 18, backgroundColor: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: '#34D399', marginBottom: 4 }}>COMPLETED</div>
                <div style={{ fontSize: 32, fontWeight: 900, color: '#34D399' }}>{taskCount.toLocaleString()}</div>
              </div>
              <div style={{ padding: '16px 18px', borderRadius: 18, backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255, 255, 255, 0.45)', marginBottom: 4 }}>RUNNING</div>
                <div style={{ fontSize: 32, fontWeight: 900, color: '#818CF8' }}>05 ●</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ height: 110, borderRadius: 20, backgroundColor: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.06)', padding: '12px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255, 255, 255, 0.4)' }}>
                <span>THROUGHPUT TELEMETRY</span>
                <span style={{ color: '#818CF8' }}>● 132 executions/min</span>
              </div>
              <svg viewBox="0 0 480 140" style={{ width: '100%', height: '100%' }}>
                <defs>
                  <linearGradient id="appleWaveGradLand" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#818CF8" />
                    <stop offset="50%" stopColor="#C084FC" />
                    <stop offset="100%" stopColor="#34D399" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,130 C40,110 80,125 120,80 C160,40 200,90 240,65 C280,45 320,105 360,50 C400,20 440,75 480,40"
                  fill="none"
                  stroke="url(#appleWaveGradLand)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={pathLength}
                  strokeDashoffset={strokeDashoffset}
                />
              </svg>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { name: 'Lead Qualification', type: 'AI + CRM Sync', status: 'RUNNING' },
                { name: 'Client Onboarding', type: 'Forms + Email', status: 'RUNNING' },
              ].map((w, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '14px 18px',
                    borderRadius: 16,
                    backgroundColor: idx === 0 && isClicking ? 'rgba(99, 102, 241, 0.18)' : 'rgba(255, 255, 255, 0.03)',
                    border: idx === 0 && isClicking ? '1px solid #818CF8' : '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14.5, color: '#FFFFFF' }}>{w.name}</div>
                    <div style={{ fontSize: 11.5, color: 'rgba(255, 255, 255, 0.45)' }}>{w.type}</div>
                  </div>
                  <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, color: '#34D399', backgroundColor: 'rgba(16, 185, 129, 0.12)', padding: '4px 10px', borderRadius: 10 }}>
                    ● {w.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ApplePointerLandscape
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
// ACT 3 LANDSCAPE: APPLE BENTO GRID
// ============================================================================
const AppleAct3Landscape: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const enterSpring = spring({ frame, fps, config: { damping: 22, stiffness: 110 } });
  const exitProgress = interpolate(frame, [100, 118], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const opacity = (1 - exitProgress) * enterSpring;
  const scale = 0.94 + enterSpring * 0.06 - exitProgress * 0.08;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 80px',
        zIndex: 25,
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 20px', borderRadius: 24, backgroundColor: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.14)', marginBottom: 14 }}>
        <span style={{ fontSize: 12, color: '#818CF8' }}>✦</span>
        <span style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: '#818CF8', letterSpacing: '0.14em' }}>
          CORE CAPABILITIES
        </span>
      </div>

      <div style={{ fontSize: 54, fontWeight: 900, letterSpacing: '-0.04em', textAlign: 'center', marginBottom: 28 }} className="titanium-text">
        Engineered Automations, <span className="iris-glow-text">Not Gimmicks.</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, width: '100%', maxWidth: 1400 }}>
        {[
          { metric: '< 90s', color: '#34D399', title: 'Autonomous Lead Qualification', sub: '100% automated enrichment, saves 8–12 hrs weekly.' },
          { metric: '0 ms', color: '#818CF8', title: 'Zero-Friction Client Onboarding', sub: 'Instant workspace, folder, and Slack room setup.' },
          { metric: '1 ➔ 10', color: '#FFFFFF', title: 'Content Pipeline Engine', sub: 'One longform input formatted into multi-platform drafts.' },
          { metric: '-80%', color: '#38BDF8', title: 'Internal Knowledge Assistant', sub: 'Instant documented SOP answers directly inside Slack.' },
        ].map((c, idx) => (
          <div key={idx} className="apple-glass" style={{ padding: '28px', borderRadius: 26, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 230 }}>
            <div>
              <div style={{ fontSize: 44, fontWeight: 900, color: c.color, letterSpacing: '-0.03em', marginBottom: 10 }}>{c.metric}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: '#FFFFFF', marginBottom: 8, letterSpacing: '-0.02em' }}>{c.title}</div>
            </div>
            <div style={{ fontSize: 13, color: 'rgba(255, 255, 255, 0.55)', lineHeight: 1.4 }}>{c.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================================================
// ACT 4 LANDSCAPE: 14-DAY DELIVERY SPRINT
// ============================================================================
const AppleAct4Landscape: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const enterSpring = spring({ frame, fps, config: { damping: 22, stiffness: 110 } });
  const exitProgress = interpolate(frame, [100, 118], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const opacity = (1 - exitProgress) * enterSpring;
  const scale = 0.94 + enterSpring * 0.06 - exitProgress * 0.08;

  const timelineProgress = interpolate(frame, [15, 80], [0, 100], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 80px',
        zIndex: 25,
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 20px', borderRadius: 24, backgroundColor: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.14)', marginBottom: 14 }}>
        <span style={{ fontSize: 12, color: '#34D399' }}>✦</span>
        <span style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: '#34D399', letterSpacing: '0.14em' }}>
          PROVEN 14-DAY DELIVERY CYCLE
        </span>
      </div>

      <div style={{ fontSize: 54, fontWeight: 900, letterSpacing: '-0.04em', textAlign: 'center', marginBottom: 28 }} className="titanium-text">
        From Bottleneck to System <span className="iris-glow-text">in 14 Days.</span>
      </div>

      <div className="apple-glass" style={{ width: '100%', maxWidth: 1400, borderRadius: 32, padding: '36px 44px', marginBottom: 20 }}>
        <div style={{ position: 'relative', width: '100%', height: 4, backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: 2, marginBottom: 28 }}>
          <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: `${timelineProgress}%`, background: 'linear-gradient(90deg, #818CF8, #34D399)', borderRadius: 2, boxShadow: '0 0 12px #34D399' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {[
            { days: 'DAYS 1–3', title: 'Audit & Mapping', desc: 'Identify drag and design target architecture.' },
            { days: 'DAYS 4–7', title: 'Sandbox Build', desc: 'Construct workflows with mock data & JSON schemas.' },
            { days: 'DAYS 8–11', title: 'Production Sync', desc: 'Connect live APIs with error-handling.' },
            { days: 'DAYS 12–14', title: 'Handover & SOPs', desc: 'Team walkthrough, docs, and 30-day monitoring.' },
          ].map((s, idx) => (
            <div key={idx}>
              <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, color: '#818CF8', marginBottom: 6 }}>{s.days}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: '#FFFFFF', marginBottom: 6 }}>{s.title}</div>
              <div style={{ fontSize: 13, color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.4 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, width: '100%', maxWidth: 1400 }}>
        <div className="apple-glass" style={{ padding: '22px 28px', borderRadius: 22 }}>
          <div style={{ fontSize: 18, fontWeight: 800, color: '#FFFFFF', marginBottom: 4 }}>✦ Deterministic Engineering</div>
          <div style={{ fontSize: 13.5, color: 'rgba(255, 255, 255, 0.6)' }}>Structured JSON schemas, strict validation, and comprehensive error handling.</div>
        </div>
        <div className="apple-glass" style={{ padding: '22px 28px', borderRadius: 22 }}>
          <div style={{ fontSize: 18, fontWeight: 800, color: '#FFFFFF', marginBottom: 4 }}>✦ Privacy by Default</div>
          <div style={{ fontSize: 13.5, color: 'rgba(255, 255, 255, 0.6)' }}>Zero training on customer data. Private API endpoints and ephemeral storage only.</div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// ACT 5 LANDSCAPE: KINETIC VELOCITY
// ============================================================================
const AppleAct5Landscape: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
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

  const beatSpring = spring({ frame: frame % 24, fps, config: { damping: 16, stiffness: 180 } });

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        zIndex: 30,
        transform: `scale(${0.92 + beatSpring * 0.08})`,
      }}
    >
      <div style={{ fontSize: 14, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.2em', color: 'rgba(255, 255, 255, 0.45)', marginBottom: 16 }}>
        // CORE PHILOSOPHY
      </div>
      <div style={{ fontSize: 96, fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1.0, marginBottom: 16 }} className={colorClass}>
        {text}
      </div>
      <div style={{ fontSize: 26, fontWeight: 500, color: 'rgba(255, 255, 255, 0.75)' }}>
        {sub}
      </div>
    </div>
  );
};

// ============================================================================
// ACT 6 LANDSCAPE: CLIMAX & CTA
// ============================================================================
const AppleAct6Landscape: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const enterSpring = spring({ frame, fps, config: { damping: 22, stiffness: 100 } });

  const cursorX = interpolate(frame, [15, 45, 60], [1300, 960, 960], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const cursorY = interpolate(frame, [15, 45, 60], [850, 670, 670], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const isClicking = frame >= 45 && frame <= 62;
  const cursorOpacity = interpolate(frame, [10, 20, 75, 85], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  const rippleScale = interpolate(frame, [45, 75], [1, 2.4], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const rippleOpacity = interpolate(frame, [45, 75], [0.8, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        zIndex: 35,
        opacity: enterSpring,
        transform: `scale(${0.94 + enterSpring * 0.06})`,
        padding: '0 80px',
      }}
    >
      <div className="apple-glass" style={{ width: 90, height: 90, borderRadius: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, fontWeight: 900, marginBottom: 20 }}>
        <span className="iris-glow-text">✦</span>
      </div>

      <div style={{ fontSize: 92, fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1.0, marginBottom: 8 }} className="titanium-text">
        AXIOM
      </div>

      <div style={{ fontSize: 24, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.14em', color: '#818CF8', marginBottom: 24, fontWeight: 600 }}>
        BY RUSAN
      </div>

      <div style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 12, color: '#FFFFFF' }}>
        Ready to Automate? Let’s Connect.
      </div>

      <div style={{ fontSize: 18, color: 'rgba(255, 255, 255, 0.65)', maxWidth: 640, marginBottom: 38 }}>
        Book a complimentary 20-minute workflow discovery call with Rusan at Axiom.
      </div>

      <div style={{ position: 'relative' }}>
        {frame >= 45 && (
          <div style={{ position: 'absolute', inset: 0, borderRadius: 32, border: '2px solid #818CF8', transform: `scale(${rippleScale})`, opacity: rippleOpacity, pointerEvents: 'none' }} />
        )}
        <div
          style={{
            padding: '20px 52px',
            borderRadius: 30,
            backgroundColor: isClicking ? '#4F46E5' : '#6366F1',
            color: '#FFFFFF',
            fontWeight: 800,
            fontSize: 21,
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

      <div style={{ marginTop: 28, padding: '8px 24px', borderRadius: 20, backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.12)', fontSize: 14.5, fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255, 255, 255, 0.8)' }}>
        axiombyrusan.vercel.app
      </div>

      <ApplePointerLandscape
        x={cursorX}
        y={cursorY}
        isClicking={isClicking}
        opacity={cursorOpacity}
      />
    </div>
  );
};

// ============================================================================
// AUDIO TRACK
// ============================================================================
const AudioTrack18s: React.FC = () => {
  return (
    <>
      <Audio src={staticFile('bg_music_18s.wav')} volume={0.88} />
      <Sequence from={0}><Audio src={staticFile('sfx/sfx_sub_impact.wav')} volume={0.7} /></Sequence>
      <Sequence from={14}><Audio src={staticFile('sfx/sfx_laser_cut.wav')} volume={0.85} /></Sequence>
      <Sequence from={30}><Audio src={staticFile('sfx/sfx_whoosh_pro.wav')} volume={0.65} /></Sequence>
      <Sequence from={82}><Audio src={staticFile('sfx/sfx_sub_impact.wav')} volume={0.65} /></Sequence>
      <Sequence from={137}><Audio src={staticFile('sfx/sfx_snap.wav')} volume={0.9} /></Sequence>
      <Sequence from={184}><Audio src={staticFile('sfx/sfx_whoosh_pro.wav')} volume={0.65} /></Sequence>
      <Sequence from={284}><Audio src={staticFile('sfx/sfx_shimmer_pro.wav')} volume={0.75} /></Sequence>
      <Sequence from={385}><Audio src={staticFile('sfx/sfx_pop.wav')} volume={0.75} /></Sequence>
      <Sequence from={409}><Audio src={staticFile('sfx/sfx_pop.wav')} volume={0.75} /></Sequence>
      <Sequence from={433}><Audio src={staticFile('sfx/sfx_pop.wav')} volume={0.75} /></Sequence>
      <Sequence from={448}><Audio src={staticFile('sfx/sfx_sub_impact.wav')} volume={0.9} /></Sequence>
      <Sequence from={493}><Audio src={staticFile('sfx/sfx_snap.wav')} volume={0.95} /></Sequence>
    </>
  );
};
