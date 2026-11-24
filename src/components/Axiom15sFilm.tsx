import React from 'react';
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  staticFile,
  Audio,
  Sequence,
} from 'remotion';

export const Axiom15sFilm: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Subtle camera shake on major narrative impact beats
  const isShake1 = frame >= 18 && frame <= 26;   // Hook strike
  const isShake2 = frame >= 60 && frame <= 68;   // Problem hit 1
  const isShake3 = frame >= 82 && frame <= 90;   // Problem hit 2
  const isShake4 = frame >= 104 && frame <= 112; // Problem hit 3
  const isShake5 = frame >= 135 && frame <= 146; // The Axiom Shift Snap (CHAOS -> SYSTEM)
  const isShake6 = frame >= 264 && frame <= 272; // Cursor click on workflow
  const isShake7 = frame >= 315 && frame <= 323; // Transformation headline drop
  const isShake8 = frame >= 390 && frame <= 400; // Final Brand Climax Drop

  let shakeX = 0;
  let shakeY = 0;
  if (
    isShake1 ||
    isShake2 ||
    isShake3 ||
    isShake4 ||
    isShake5 ||
    isShake6 ||
    isShake7 ||
    isShake8
  ) {
    shakeX = Math.sin(frame * 2.8) * 7;
    shakeY = Math.cos(frame * 3.1) * 5;
  }

  // Soft breathing ambient lighting pulse
  const ambientPulse = Math.sin(frame / 14) * 0.08 + 0.92;

  return (
    <div
      style={{
        position: 'relative',
        width,
        height,
        backgroundColor: '#FAFAFC',
        overflow: 'hidden',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        color: '#0F172A',
        transform: `translate(${shakeX}px, ${shakeY}px)`,
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        `}
      </style>

      {/* Subtle Precision Architectural Grid (Axiom Website Aesthetic) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          opacity: 0.85,
        }}
      />

      {/* Soft Luminous Electric Indigo & Opal Ambient Glows */}
      <div
        style={{
          position: 'absolute',
          top: -160,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 900,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.09) 0%, rgba(99, 102, 241, 0.02) 50%, transparent 70%)',
          filter: 'blur(90px)',
          opacity: ambientPulse,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: -180,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 950,
          height: 650,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, rgba(99, 102, 241, 0.03) 50%, transparent 70%)',
          filter: 'blur(90px)',
          opacity: ambientPulse,
          pointerEvents: 'none',
        }}
      />

      {/* Minimalist Top Identity HUD Coordinates */}
      <div
        style={{
          position: 'absolute',
          top: 48,
          left: 56,
          right: 56,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 14,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: '0.14em',
          color: '#64748B',
          zIndex: 100,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 18, color: '#0F172A', fontWeight: 900 }}>✦</span>
          <span style={{ fontWeight: 800, color: '#0F172A', letterSpacing: '0.04em' }}>AXIOM</span>
          <span style={{ color: '#94A3B8' }}>by Rusan</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              backgroundColor: '#10B981',
              boxShadow: '0 0 8px rgba(16, 185, 129, 0.7)',
            }}
          />
          <span style={{ fontSize: 12, fontWeight: 700, color: '#0F172A' }}>
            SYSTEMS OPERATIONAL
          </span>
        </div>
      </div>

      {/* Minimalist Bottom HUD Telemetry */}
      <div
        style={{
          position: 'absolute',
          bottom: 48,
          left: 56,
          right: 56,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 13,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: '0.12em',
          color: '#64748B',
          zIndex: 100,
        }}
      >
        <div>AI AUTOMATION & DIGITAL PRESENCE ADVISORY</div>
        <div style={{ color: '#6366F1', fontWeight: 700 }}>axiombyrusan.vercel.app</div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 6 DISTINCT COHESIVE NARRATIVE ACTS (0.0s to 15.0s / 450 frames) */}
      {/* ------------------------------------------------------------- */}

      {/* ACT 1: THE HOOK (0.0s – 2.0s | Frames 0 – 60) */}
      {frame >= 0 && frame < 60 && <Act1Hook frame={frame} fps={fps} />}

      {/* ACT 2: THE PROBLEM (2.0s – 4.5s | Frames 60 – 135) */}
      {frame >= 60 && frame < 135 && <Act2Problem frame={frame - 60} fps={fps} />}

      {/* ACT 3: THE AXIOM SHIFT (4.5s – 7.0s | Frames 135 – 210) */}
      {frame >= 135 && frame < 210 && <Act3AxiomShift frame={frame - 135} fps={fps} />}

      {/* ACT 4: SHOW THE SYSTEM (7.0s – 10.5s | Frames 210 – 315) */}
      {frame >= 210 && frame < 315 && <Act4ShowSystem frame={frame - 210} fps={fps} />}

      {/* ACT 5: TRANSFORMATION (10.5s – 13.0s | Frames 315 – 390) */}
      {frame >= 315 && frame < 390 && <Act5Transformation frame={frame - 315} fps={fps} />}

      {/* ACT 6: BRAND REVEAL (13.0s – 15.0s | Frames 390 – 450) */}
      {frame >= 390 && <Act6BrandReveal frame={frame - 390} fps={fps} />}

      {/* Synchronized Master Audio Track */}
      <Audio src={staticFile('axiom_15s_soundtrack.wav')} />
    </div>
  );
};

// =========================================================================
// ACT 1: THE HOOK (0.0s – 2.0s | Frames 0 – 60)
// "Your business doesn't need more tools."
// Immediate, large, authoritative typography. Confident & intelligent.
// =========================================================================
const Act1Hook: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  // Staggered springs for individual lines
  const spring1 = spring({ frame, fps, config: { damping: 14, stiffness: 140 } });
  const spring2 = spring({ frame: Math.max(0, frame - 8), fps, config: { damping: 14, stiffness: 140 } });
  const spring3 = spring({ frame: Math.max(0, frame - 16), fps, config: { damping: 14, stiffness: 140 } });

  // Glitch cut transition out at frames 48-60
  const isGlitch = frame >= 48;
  const glitchOffset = isGlitch ? Math.sin(frame * 4) * 16 : 0;
  const glitchOpacity = isGlitch ? (frame % 2 === 0 ? 0.8 : 0.4) : 1;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 64px',
        textAlign: 'center',
        opacity: glitchOpacity,
        transform: `translateX(${glitchOffset}px)`,
      }}
    >
      {/* Directive Eyebrow */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          padding: '8px 20px',
          borderRadius: 40,
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(15, 23, 42, 0.08)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
          marginBottom: 36,
          opacity: spring1,
          transform: `translateY(${(1 - spring1) * 20}px)`,
        }}
      >
        <span style={{ color: '#6366F1', fontSize: 13 }}>✦</span>
        <span
          style={{
            fontSize: 12,
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            letterSpacing: '0.16em',
            color: '#64748B',
            textTransform: 'uppercase',
          }}
        >
          Operational Memorandum
        </span>
      </div>

      {/* Massive Editorial Headline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxWidth: 960 }}>
        {/* Line 1 */}
        <div
          style={{
            fontSize: 78,
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1.02,
            color: '#0F172A',
            opacity: spring1,
            transform: `translateY(${(1 - spring1) * 40}px)`,
          }}
        >
          YOUR BUSINESS
        </div>

        {/* Line 2 */}
        <div
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontSize: 104,
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: 0.98,
            color: '#0F172A',
            opacity: spring2,
            transform: `translateY(${(1 - spring2) * 40}px)`,
          }}
        >
          doesn't need
        </div>

        {/* Line 3 */}
        <div
          style={{
            fontSize: 92,
            fontWeight: 900,
            letterSpacing: '-0.045em',
            lineHeight: 1.0,
            color: '#6366F1',
            textShadow: '0 10px 40px rgba(99, 102, 241, 0.25)',
            opacity: spring3,
            transform: `translateY(${(1 - spring3) * 40}px) scale(${0.95 + spring3 * 0.05})`,
          }}
        >
          MORE TOOLS.
        </div>
      </div>

      {/* Supporting Subtext */}
      <div
        style={{
          marginTop: 40,
          fontSize: 22,
          color: '#64748B',
          maxWidth: 720,
          lineHeight: 1.5,
          fontWeight: 400,
          opacity: spring3,
          transform: `translateY(${(1 - spring3) * 20}px)`,
        }}
      >
        Adding another subscription won't fix disconnected operations.
      </div>
    </div>
  );
};

// =========================================================================
// ACT 2: THE PROBLEM (2.0s – 4.5s | Frames 60 – 135)
// "Too many tools. Disconnected systems. Silent failures."
// Visual metaphor: Disorganization, overlapping cards, severed conduits.
// =========================================================================
const Act2Problem: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  // Word 1: 0 – 22 (frame 60 – 82)
  const spWord1 = spring({ frame, fps, config: { damping: 13, stiffness: 160 } });
  // Word 2: 22 – 44 (frame 82 – 104)
  const spWord2 = spring({ frame: Math.max(0, frame - 22), fps, config: { damping: 13, stiffness: 160 } });
  // Word 3: 44 – 65 (frame 104 – 125)
  const spWord3 = spring({ frame: Math.max(0, frame - 44), fps, config: { damping: 13, stiffness: 160 } });

  // Chaotic floating drift physics
  const drift = frame * 0.8;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 56px',
      }}
    >
      {/* Overhead Problem Label */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 18px',
          borderRadius: 30,
          backgroundColor: '#FEE2E2',
          border: '1px solid #FECACA',
          color: '#DC2626',
          fontSize: 12,
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 700,
          letterSpacing: '0.14em',
          marginBottom: 28,
          textTransform: 'uppercase',
          opacity: spWord1,
        }}
      >
        <span>⚠</span>
        <span>The Operational Reality</span>
      </div>

      {/* Kinetic Problem Typography */}
      <div style={{ textAlign: 'center', marginBottom: 50, zIndex: 20 }}>
        {frame < 22 && (
          <div
            style={{
              fontSize: 82,
              fontWeight: 900,
              letterSpacing: '-0.04em',
              color: '#0F172A',
              opacity: spWord1,
              transform: `scale(${0.9 + spWord1 * 0.1})`,
            }}
          >
            TOO MANY TOOLS.
          </div>
        )}

        {frame >= 22 && frame < 44 && (
          <div
            style={{
              fontSize: 78,
              fontWeight: 900,
              letterSpacing: '-0.04em',
              color: '#DC2626',
              opacity: spWord2,
              transform: `scale(${0.9 + spWord2 * 0.1})`,
            }}
          >
            DISCONNECTED SCRIPTS.
          </div>
        )}

        {frame >= 44 && (
          <div
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
              fontSize: 98,
              fontWeight: 400,
              letterSpacing: '-0.02em',
              color: '#B91C1C',
              opacity: spWord3,
              transform: `scale(${0.9 + spWord3 * 0.1})`,
            }}
          >
            Nothing connected.
          </div>
        )}
      </div>

      {/* Chaotic Fragmented UI Cards (Overlapping, Tilted, Drifting) */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 680,
          zIndex: 10,
        }}
      >
        {/* Card 1: Airtable Rate Limit */}
        <div
          style={{
            position: 'absolute',
            top: 40 + Math.sin(drift * 0.05) * 12,
            left: 10 - drift * 0.3,
            width: 440,
            padding: '20px 24px',
            borderRadius: 20,
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #FCA5A5',
            boxShadow: '0 20px 50px rgba(220, 38, 38, 0.12)',
            transform: 'rotate(-9deg)',
            opacity: spWord1,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ fontWeight: 700, fontSize: 14, color: '#0F172A' }}>Airtable Sync</span>
            <span style={{ fontSize: 11, backgroundColor: '#FEE2E2', color: '#B91C1C', padding: '3px 8px', borderRadius: 8, fontWeight: 700 }}>
              429 RATE LIMIT
            </span>
          </div>
          <div style={{ fontSize: 13, color: '#64748B' }}>148 leads dropped in queue. Retries exhausted.</div>
        </div>

        {/* Card 2: Zapier Webhook Timeout */}
        <div
          style={{
            position: 'absolute',
            top: 180 + Math.cos(drift * 0.04) * 15,
            right: 0 + drift * 0.2,
            width: 460,
            padding: '20px 24px',
            borderRadius: 20,
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #FCD34D',
            boxShadow: '0 20px 50px rgba(217, 119, 6, 0.12)',
            transform: 'rotate(11deg)',
            opacity: spWord2,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ fontWeight: 700, fontSize: 14, color: '#0F172A' }}>Zapier Automation</span>
            <span style={{ fontSize: 11, backgroundColor: '#FEF3C7', color: '#B45309', padding: '3px 8px', borderRadius: 8, fontWeight: 700 }}>
              504 GATEWAY TIMEOUT
            </span>
          </div>
          <div style={{ fontSize: 13, color: '#64748B' }}>API response stalled. Data unrouted.</div>
        </div>

        {/* Card 3: Slack notification failure */}
        <div
          style={{
            position: 'absolute',
            top: 340 + Math.sin(drift * 0.06) * 10,
            left: 20 + drift * 0.2,
            width: 420,
            padding: '20px 24px',
            borderRadius: 20,
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #FCA5A5',
            boxShadow: '0 20px 50px rgba(220, 38, 38, 0.1)',
            transform: 'rotate(-5deg)',
            opacity: spWord2,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ fontWeight: 700, fontSize: 14, color: '#0F172A' }}>Slack Webhook</span>
            <span style={{ fontSize: 11, backgroundColor: '#FEE2E2', color: '#B91C1C', padding: '3px 8px', borderRadius: 8, fontWeight: 700 }}>
              SILENT FAILURE
            </span>
          </div>
          <div style={{ fontSize: 13, color: '#64748B' }}>Payload discarded. Founder left uninformed.</div>
        </div>

        {/* Card 4: Stripe Invoice Unmatched */}
        <div
          style={{
            position: 'absolute',
            top: 490 - Math.cos(drift * 0.05) * 12,
            right: 15 - drift * 0.3,
            width: 450,
            padding: '20px 24px',
            borderRadius: 20,
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.06)',
            transform: 'rotate(7deg)',
            opacity: spWord3,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ fontWeight: 700, fontSize: 14, color: '#0F172A' }}>CRM Deal Sync</span>
            <span style={{ fontSize: 11, backgroundColor: '#F1F5F9', color: '#64748B', padding: '3px 8px', borderRadius: 8, fontWeight: 700 }}>
              DISCONNECTED
            </span>
          </div>
          <div style={{ fontSize: 13, color: '#64748B' }}>Client setup waiting on manual copy-pasting.</div>
        </div>

        {/* Severed connecting lines with error sparks */}
        <svg
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
        >
          <path
            d="M 120 120 L 260 220 L 160 380 L 320 540"
            fill="none"
            stroke="#EF4444"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            opacity="0.45"
          />
        </svg>
      </div>

      {/* Warning Impact Callout */}
      <div
        style={{
          marginTop: 20,
          padding: '12px 28px',
          borderRadius: 30,
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(15, 23, 42, 0.08)',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
          fontSize: 14,
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 700,
          color: '#64748B',
          opacity: spWord3,
          zIndex: 30,
        }}
      >
        <span style={{ color: '#DC2626' }}>OPERATIONAL DRAG:</span> +18 HRS / WEEK LOST
      </div>
    </div>
  );
};

// =========================================================================
// ACT 3: THE AXIOM SHIFT (CHAOS → SYSTEM) (4.5s – 7.0s | Frames 135 – 210)
// Central Visual Metaphor: Everything previously fragmented accelerates,
// snaps into an engineering grid, connects with glowing conduits!
// =========================================================================
const Act3AxiomShift: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  // Magnetic reorganization spring
  const snapProgress = spring({
    frame,
    fps,
    config: { damping: 16, stiffness: 130 },
  });

  // Vertical laser pulse sweep
  const sweepY = interpolate(frame, [0, 25], [-200, 1920], { extrapolateRight: 'clamp' });

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 56px',
      }}
    >
      {/* Traveling Laser Sweep Line */}
      <div
        style={{
          position: 'absolute',
          top: sweepY,
          left: 0,
          right: 0,
          height: 4,
          background: 'linear-gradient(90deg, transparent 0%, #6366F1 50%, transparent 100%)',
          boxShadow: '0 0 35px 8px rgba(99, 102, 241, 0.8)',
          zIndex: 50,
          pointerEvents: 'none',
        }}
      />

      {/* Overhead Shift Banner */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          padding: '10px 24px',
          borderRadius: 40,
          backgroundColor: '#EEF2FF',
          border: '1.5px solid rgba(99, 102, 241, 0.3)',
          boxShadow: '0 8px 30px rgba(99, 102, 241, 0.18)',
          marginBottom: 32,
          transform: `scale(${0.9 + snapProgress * 0.1})`,
        }}
      >
        <span style={{ fontSize: 16, color: '#6366F1' }}>✦</span>
        <span
          style={{
            fontSize: 13,
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 800,
            letterSpacing: '0.14em',
            color: '#4F46E5',
            textTransform: 'uppercase',
          }}
        >
          Deterministic Architecture
        </span>
      </div>

      {/* Main Title Lock */}
      <div style={{ textAlign: 'center', marginBottom: 44 }}>
        <div
          style={{
            fontSize: 68,
            fontWeight: 900,
            letterSpacing: '-0.04em',
            color: '#0F172A',
            lineHeight: 1.05,
          }}
        >
          CHAOS COLLAPSES
        </div>
        <div
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontSize: 88,
            fontWeight: 400,
            color: '#6366F1',
            lineHeight: 1.0,
            marginTop: 4,
          }}
        >
          into connected systems.
        </div>
      </div>

      {/* The 4 Reorganized Modular Cards Snapping into a Perfect Bento Grid */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          width: '100%',
          maxWidth: 960,
          position: 'relative',
        }}
      >
        {/* Glow conduit backbone */}
        <div
          style={{
            position: 'absolute',
            left: 42,
            top: 30,
            bottom: 30,
            width: 3,
            background: 'linear-gradient(180deg, #6366F1 0%, #38BDF8 50%, #10B981 100%)',
            boxShadow: '0 0 16px rgba(99, 102, 241, 0.6)',
            opacity: snapProgress,
            zIndex: 1,
          }}
        />

        {/* Card 1: Lead Qualification */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '22px 28px',
            borderRadius: 22,
            backgroundColor: '#FFFFFF',
            border: '1.5px solid rgba(99, 102, 241, 0.25)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.05)',
            transform: `translateX(${(1 - snapProgress) * -120}px) rotate(${(1 - snapProgress) * -8}deg)`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                backgroundColor: '#EEF2FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6366F1',
                fontWeight: 800,
                fontSize: 16,
              }}
            >
              01
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#0F172A' }}>Autonomous Lead Qualification</div>
              <div style={{ fontSize: 13, color: '#64748B', marginTop: 2 }}>Make + Claude 3.5 + HubSpot CRM</div>
            </div>
          </div>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#059669', backgroundColor: '#ECFDF5', padding: '6px 14px', borderRadius: 20 }}>
            ✓ &lt; 90s TRIAGE
          </span>
        </div>

        {/* Card 2: Client Onboarding */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '22px 28px',
            borderRadius: 22,
            backgroundColor: '#FFFFFF',
            border: '1.5px solid rgba(99, 102, 241, 0.25)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.05)',
            transform: `translateX(${(1 - snapProgress) * 120}px) rotate(${(1 - snapProgress) * 8}deg)`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                backgroundColor: '#EEF2FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6366F1',
                fontWeight: 800,
                fontSize: 16,
              }}
            >
              02
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#0F172A' }}>Zero-Friction Client Onboarding</div>
              <div style={{ fontSize: 13, color: '#64748B', marginTop: 2 }}>Stripe + Drive + Slack Private Channels</div>
            </div>
          </div>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#059669', backgroundColor: '#ECFDF5', padding: '6px 14px', borderRadius: 20 }}>
            ✓ 0 MANUAL STEPS
          </span>
        </div>

        {/* Card 3: Content Repurposing */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '22px 28px',
            borderRadius: 22,
            backgroundColor: '#FFFFFF',
            border: '1.5px solid rgba(99, 102, 241, 0.25)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.05)',
            transform: `translateX(${(1 - snapProgress) * -100}px) rotate(${(1 - snapProgress) * -6}deg)`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                backgroundColor: '#EEF2FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6366F1',
                fontWeight: 800,
                fontSize: 16,
              }}
            >
              03
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#0F172A' }}>Content Repurposing Engine</div>
              <div style={{ fontSize: 13, color: '#64748B', marginTop: 2 }}>Whisper AI + Gemini 1.5 Pro + Notion</div>
            </div>
          </div>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#059669', backgroundColor: '#ECFDF5', padding: '6px 14px', borderRadius: 20 }}>
            ✓ 6X ASSETS
          </span>
        </div>

        {/* Card 4: Knowledge Copilot */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '22px 28px',
            borderRadius: 22,
            backgroundColor: '#FFFFFF',
            border: '1.5px solid rgba(99, 102, 241, 0.25)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.05)',
            transform: `translateX(${(1 - snapProgress) * 100}px) rotate(${(1 - snapProgress) * 6}deg)`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                backgroundColor: '#EEF2FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6366F1',
                fontWeight: 800,
                fontSize: 16,
              }}
            >
              04
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#0F172A' }}>Internal Knowledge SOP Copilot</div>
              <div style={{ fontSize: 13, color: '#64748B', marginTop: 2 }}>Slack Assistant + Private Vector Database</div>
            </div>
          </div>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#059669', backgroundColor: '#ECFDF5', padding: '6px 14px', borderRadius: 20 }}>
            ✓ -80% INTERRUPTIONS
          </span>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// ACT 4: SHOW THE SYSTEM (7.0s – 10.5s | Frames 210 – 315)
// Real Axiom Core Dashboard, living telemetry counters, animated Bézier curve,
// interactive translucent pointer cursor glide and click.
// =========================================================================
const Act4ShowSystem: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const enterSpring = spring({ frame, fps, config: { damping: 15, stiffness: 120 } });

  // Live counter rolling up from 1220 to 1248
  const counterVal = Math.min(1248, Math.floor(1220 + (frame / 85) * 28));

  // Pointer cursor animation
  // Glides in at frame 35, clicks at frame 54 (8.8s)
  const cursorProgress = spring({ frame: Math.max(0, frame - 30), fps, config: { damping: 14, stiffness: 100 } });
  const cursorX = interpolate(cursorProgress, [0, 1], [850, 480]);
  const cursorY = interpolate(cursorProgress, [0, 1], [980, 520]);

  const isClicked = frame >= 54;
  const clickRipple = spring({ frame: Math.max(0, frame - 54), fps, config: { damping: 12, stiffness: 180 } });

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 48px',
      }}
    >
      {/* Section Eyebrow */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          padding: '8px 22px',
          borderRadius: 30,
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(15, 23, 42, 0.08)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
          marginBottom: 24,
          opacity: enterSpring,
        }}
      >
        <span style={{ color: '#6366F1', fontSize: 13 }}>✦</span>
        <span
          style={{
            fontSize: 12,
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            letterSpacing: '0.16em',
            color: '#64748B',
            textTransform: 'uppercase',
          }}
        >
          Live Telemetry & Execution Pipeline
        </span>
      </div>

      {/* Main Axiom Dashboard Window Chassis (Vertical 9:16 Optimized) */}
      <div
        style={{
          width: '100%',
          maxWidth: 980,
          borderRadius: 28,
          backgroundColor: '#FFFFFF',
          border: '1.5px solid rgba(15, 23, 42, 0.1)',
          boxShadow: '0 30px 80px -15px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
          opacity: enterSpring,
          transform: `scale(${0.96 + enterSpring * 0.04}) translateY(${(1 - enterSpring) * 30}px)`,
        }}
      >
        {/* Top Window Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 28px',
            borderBottom: '1px solid #E2E8F0',
            backgroundColor: '#FAFAFC',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                backgroundColor: '#0F172A',
                color: '#FFFFFF',
                fontWeight: 900,
                fontSize: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              AX
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#0F172A' }}>Axiom</div>
              <div style={{ fontSize: 10, color: '#64748B' }}>by Rusan</div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 14px',
              borderRadius: 10,
              backgroundColor: '#F1F5F9',
              fontSize: 12,
              color: '#64748B',
            }}
          >
            <span>Search automations...</span>
            <span style={{ fontSize: 10, fontWeight: 700, backgroundColor: '#FFFFFF', padding: '2px 6px', borderRadius: 4, border: '1px solid #CBD5E1' }}>
              ⌘K
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#10B981',
                boxShadow: '0 0 8px rgba(16, 185, 129, 0.8)',
              }}
            />
            <span style={{ fontSize: 12, fontWeight: 700, color: '#0F172A' }}>Core Active</span>
          </div>
        </div>

        {/* Greeting Banner */}
        <div
          style={{
            padding: '24px 28px',
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid #F1F5F9',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#0F172A' }}>Good evening, Rusan</div>
            <div style={{ fontSize: 13, color: '#64748B', marginTop: 3 }}>Your automation systems are running smoothly.</div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div
              style={{
                padding: '8px 16px',
                borderRadius: 20,
                backgroundColor: '#6366F1',
                color: '#FFFFFF',
                fontSize: 12,
                fontWeight: 700,
                boxShadow: '0 4px 14px rgba(99, 102, 241, 0.3)',
              }}
            >
              + New Automation
            </div>
          </div>
        </div>

        {/* 3 Live Telemetry Stat Boxes */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            padding: '20px 28px',
            backgroundColor: '#F8FAFC',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          <div style={{ backgroundColor: '#FFFFFF', padding: '16px 20px', borderRadius: 16, border: '1px solid #E2E8F0' }}>
            <div style={{ fontSize: 11, color: '#64748B', fontWeight: 600 }}>Active Pipelines</div>
            <div style={{ fontSize: 26, fontWeight: 800, color: '#0F172A', marginTop: 4 }}>07 Systems</div>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '16px 20px', borderRadius: 16, border: '1px solid rgba(99, 102, 241, 0.3)' }}>
            <div style={{ fontSize: 11, color: '#6366F1', fontWeight: 600 }}>Tasks Completed</div>
            <div style={{ fontSize: 26, fontWeight: 900, color: '#6366F1', marginTop: 4 }}>
              {counterVal.toLocaleString()}
            </div>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '16px 20px', borderRadius: 16, border: '1px solid #E2E8F0' }}>
            <div style={{ fontSize: 11, color: '#10B981', fontWeight: 600 }}>System Health</div>
            <div style={{ fontSize: 26, fontWeight: 800, color: '#059669', marginTop: 4 }}>99.9% Uptime</div>
          </div>
        </div>

        {/* Dynamic Bézier Wave & Workflows */}
        <div style={{ padding: '24px 28px' }}>
          {/* Bézier SVG Activity Wave */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#64748B', marginBottom: 8 }}>
              <span style={{ fontWeight: 600 }}>Automation Activity Over Time</span>
              <span style={{ color: '#0F172A', fontWeight: 700 }}>Real-Time Throughput</span>
            </div>
            <div style={{ height: 64, width: '100%' }}>
              <svg viewBox="0 0 600 70" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="act4Grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366F1" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 55 C 60 50, 120 25, 180 30 C 240 35, 300 12, 360 14 C 420 16, 480 38, 540 18 L 600 12 L 600 70 L 0 70 Z"
                  fill="url(#act4Grad)"
                />
                <path
                  d="M 0 55 C 60 50, 120 25, 180 30 C 240 35, 300 12, 360 14 C 420 16, 480 38, 540 18 L 600 12"
                  fill="none"
                  stroke="#6366F1"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="540" cy="18" r="4" fill="#6366F1" />
                <circle cx="540" cy="18" r="8" fill="none" stroke="#6366F1" strokeWidth="1.5" opacity="0.5" />
              </svg>
            </div>
          </div>

          {/* Workflow Item (The one that gets clicked) */}
          <div
            style={{
              position: 'relative',
              padding: '18px 22px',
              borderRadius: 16,
              backgroundColor: isClicked ? '#EEF2FF' : '#F8FAFC',
              border: isClicked ? '1.5px solid #6366F1' : '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 0.2s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6366F1',
                  fontWeight: 800,
                  fontSize: 13,
                }}
              >
                ⚡
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#0F172A' }}>Lead Qualification & CRM Sync</div>
                <div style={{ fontSize: 12, color: '#64748B' }}>Claude 3.5 AI Analysis • Real-time Airtable / HubSpot</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: isClicked ? '#4F46E5' : '#059669',
                  backgroundColor: isClicked ? '#E0E7FF' : '#ECFDF5',
                  padding: '5px 12px',
                  borderRadius: 20,
                }}
              >
                {isClicked ? '✓ DISPATCHED' : 'RUNNING ●'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Translucent Apple Glass Pointer Cursor */}
      {frame >= 30 && (
        <div
          style={{
            position: 'absolute',
            left: cursorX,
            top: cursorY,
            zIndex: 100,
            pointerEvents: 'none',
          }}
        >
          {/* Mouse pointer SVG */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
              fill="#0F172A"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>

          {/* Click Shockwave */}
          {isClicked && (
            <div
              style={{
                position: 'absolute',
                top: 4,
                left: 4,
                width: 24,
                height: 24,
                borderRadius: '50%',
                border: '2px solid #6366F1',
                transform: `scale(${clickRipple * 3.5})`,
                opacity: 1 - clickRipple,
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

// =========================================================================
// ACT 5: TRANSFORMATION (10.5s – 13.0s | Frames 315 – 390)
// Serene editorial clarity.
// "Automate the Work. Amplify the Business."
// Coexistence of typography and core brand guarantees.
// =========================================================================
const Act5Transformation: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const tSpring1 = spring({ frame, fps, config: { damping: 14, stiffness: 130 } });
  const tSpring2 = spring({ frame: Math.max(0, frame - 10), fps, config: { damping: 14, stiffness: 130 } });
  const tSpring3 = spring({ frame: Math.max(0, frame - 20), fps, config: { damping: 14, stiffness: 130 } });

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 64px',
        textAlign: 'center',
      }}
    >
      {/* Eyebrow Pill */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          padding: '8px 22px',
          borderRadius: 40,
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(15, 23, 42, 0.08)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
          marginBottom: 32,
          opacity: tSpring1,
          transform: `translateY(${(1 - tSpring1) * 20}px)`,
        }}
      >
        <span style={{ color: '#6366F1', fontSize: 14 }}>✦</span>
        <span
          style={{
            fontSize: 12,
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            letterSpacing: '0.16em',
            color: '#64748B',
            textTransform: 'uppercase',
          }}
        >
          The Outcome
        </span>
      </div>

      {/* Main Brand Statement (Instrument Serif & Inter) */}
      <div style={{ maxWidth: 960, marginBottom: 40 }}>
        <div
          style={{
            fontSize: 82,
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1.02,
            color: '#0F172A',
            opacity: tSpring1,
            transform: `translateY(${(1 - tSpring1) * 30}px)`,
          }}
        >
          Automate the Work.
        </div>

        <div
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontSize: 102,
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: 0.98,
            color: '#6366F1',
            textShadow: '0 10px 40px rgba(99, 102, 241, 0.25)',
            marginTop: 6,
            opacity: tSpring2,
            transform: `translateY(${(1 - tSpring2) * 30}px)`,
          }}
        >
          Amplify the Business.
        </div>
      </div>

      {/* Narrative Subhead */}
      <div
        style={{
          fontSize: 22,
          color: '#64748B',
          maxWidth: 780,
          lineHeight: 1.55,
          fontWeight: 400,
          marginBottom: 50,
          opacity: tSpring2,
          transform: `translateY(${(1 - tSpring2) * 20}px)`,
        }}
      >
        Practical AI automations that eliminate repetitive friction and give your team time to focus on what actually matters.
      </div>

      {/* 3 Core Value Pillar Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
          width: '100%',
          maxWidth: 960,
          opacity: tSpring3,
          transform: `translateY(${(1 - tSpring3) * 30}px)`,
        }}
      >
        <div
          style={{
            padding: '24px 20px',
            borderRadius: 20,
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(15, 23, 42, 0.08)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
            textAlign: 'left',
          }}
        >
          <div style={{ fontSize: 24, marginBottom: 8 }}>⚡</div>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#0F172A' }}>7–14 Day Delivery</div>
          <div style={{ fontSize: 12, color: '#64748B', marginTop: 4 }}>Fast engineering sprints. No corporate bloat.</div>
        </div>

        <div
          style={{
            padding: '24px 20px',
            borderRadius: 20,
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            boxShadow: '0 10px 30px rgba(99, 102, 241, 0.08)',
            textAlign: 'left',
          }}
        >
          <div style={{ fontSize: 24, marginBottom: 8 }}>🔒</div>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#6366F1' }}>100% Client Ownership</div>
          <div style={{ fontSize: 12, color: '#64748B', marginTop: 4 }}>All code & pipelines live in your accounts.</div>
        </div>

        <div
          style={{
            padding: '24px 20px',
            borderRadius: 20,
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(15, 23, 42, 0.08)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
            textAlign: 'left',
          }}
        >
          <div style={{ fontSize: 24, marginBottom: 8 }}>🛡</div>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#0F172A' }}>Private API Endpoints</div>
          <div style={{ fontSize: 12, color: '#64748B', marginTop: 4 }}>Zero training on your confidential data.</div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// ACT 6: BRAND REVEAL & CTA (13.0s – 15.0s | Frames 390 – 450)
// Minimal, pristine composition.
// ✦ AXIOM by Rusan
// Holds long enough to read and remember.
// =========================================================================
const Act6BrandReveal: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const brandSpring = spring({ frame, fps, config: { damping: 14, stiffness: 120 } });
  const subSpring = spring({ frame: Math.max(0, frame - 12), fps, config: { damping: 14, stiffness: 120 } });

  // Sparkle icon gentle rotation
  const sparkleRotate = interpolate(frame, [0, 60], [0, 14], { extrapolateRight: 'clamp' });

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 64px',
        textAlign: 'center',
      }}
    >
      {/* Central Brand Lockup */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          opacity: brandSpring,
          transform: `scale(${0.92 + brandSpring * 0.08})`,
        }}
      >
        {/* The Iconic Sparkle Star ✦ */}
        <div
          style={{
            fontSize: 72,
            color: '#0F172A',
            lineHeight: 1,
            marginBottom: 16,
            transform: `rotate(${sparkleRotate}deg)`,
            filter: 'drop-shadow(0 4px 20px rgba(99, 102, 241, 0.3))',
          }}
        >
          ✦
        </div>

        {/* Wordmark: AXIOM */}
        <div
          style={{
            fontSize: 120,
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            color: '#0F172A',
          }}
        >
          AXIOM
        </div>

        {/* by Rusan */}
        <div
          style={{
            fontSize: 26,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            color: '#64748B',
            letterSpacing: '0.04em',
            marginTop: 6,
          }}
        >
          by Rusan
        </div>

        {/* Brand Positioning Line */}
        <div
          style={{
            fontSize: 13,
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            letterSpacing: '0.22em',
            color: '#6366F1',
            textTransform: 'uppercase',
            marginTop: 24,
            padding: '8px 24px',
            borderRadius: 30,
            backgroundColor: '#EEF2FF',
            border: '1px solid rgba(99, 102, 241, 0.25)',
          }}
        >
          AI Automation & Digital Presence Advisory
        </div>
      </div>

      {/* Final Call to Action */}
      <div
        style={{
          marginTop: 64,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
          opacity: subSpring,
          transform: `translateY(${(1 - subSpring) * 20}px)`,
        }}
      >
        {/* Pill Button */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            padding: '18px 42px',
            borderRadius: 50,
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            fontSize: 18,
            fontWeight: 700,
            boxShadow: '0 15px 40px rgba(15, 23, 42, 0.2)',
          }}
        >
          <span>Book a 20-Min Discovery Session</span>
          <span style={{ color: '#818CF8' }}>➔</span>
        </div>

        {/* Verification Guarantee */}
        <div style={{ fontSize: 13, color: '#64748B' }}>
          Direct founder diagnostic with Rusan • Typically responds within 24 hours
        </div>

        {/* Live Operational Status */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 12,
            fontFamily: "'JetBrains Mono', monospace",
            color: '#059669',
            marginTop: 8,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#10B981',
              boxShadow: '0 0 10px rgba(16, 185, 129, 0.8)',
            }}
          />
          <span>SYSTEMS OPERATIONAL</span>
        </div>
      </div>
    </div>
  );
};
