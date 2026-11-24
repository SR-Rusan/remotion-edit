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

export const AxiomByRusan15sMaster: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Gentle organic recoil on key narrative impact beats
  const isShake1 = frame >= 12 && frame <= 22;   // Hook laser cut
  const isShake2 = frame >= 72 && frame <= 80;   // Phase 01: Automate The Core
  const isShake3 = frame >= 145 && frame <= 153; // Phase 02: Inbound Demand
  const isShake4 = frame >= 220 && frame <= 228; // Phase 03: Revenue Brain
  const isShake5 = frame >= 336 && frame <= 344; // Sprint 1
  const isShake6 = frame >= 352 && frame <= 360; // Sprint 2
  const isShake7 = frame >= 368 && frame <= 376; // Sprint 3
  const isShake8 = frame >= 384 && frame <= 396; // Climax Drop

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
    shakeX = Math.sin(frame * 2.8) * 8;
    shakeY = Math.cos(frame * 3.1) * 6;
  }

  // Ambient luxury glow pulse
  const ambientPulse = Math.sin(frame / 12) * 0.08 + 0.92;

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
          @font-face {
            font-family: 'Instrument Serif';
            src: url('${staticFile('fonts/InstrumentSerif-Regular.ttf')}') format('truetype');
            font-weight: 400;
            font-style: normal;
          }
          @font-face {
            font-family: 'Instrument Serif';
            src: url('${staticFile('fonts/InstrumentSerif-Italic.ttf')}') format('truetype');
            font-weight: 400;
            font-style: italic;
          }
          @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap');
        `}
      </style>

      {/* Subtle Precision Architectural Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '54px 54px',
          opacity: 0.9,
        }}
      />

      {/* Luminous Soft Royal Iris & Pearl Ambient Blobs */}
      <div
        style={{
          position: 'absolute',
          top: -120,
          left: -80,
          width: 850,
          height: 850,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.09) 0%, rgba(99, 102, 241, 0.02) 50%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: ambientPulse,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -150,
          right: -100,
          width: 900,
          height: 900,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(99, 102, 241, 0.03) 50%, transparent 70%)',
          filter: 'blur(90px)',
          opacity: ambientPulse,
        }}
      />

      {/* Top Precision HUD Frame */}
      <div
        style={{
          position: 'absolute',
          top: 40,
          left: 48,
          right: 48,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 13,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: '0.14em',
          color: '#64748B',
          zIndex: 100,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 16, color: '#0F172A', fontWeight: 900 }}>✦</span>
          <span style={{ fontWeight: 800, color: '#0F172A', letterSpacing: '0.05em' }}>AXIOM</span>
          <span style={{ color: '#94A3B8' }}>by Rusan</span>
          <span style={{ color: '#CBD5E1' }}>//</span>
           <span style={{ color: '#6366F1', fontWeight: 600 }}>AI AUTOMATION & DIGITAL PRESENCE</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {/* Animated Equalizer Visualizer */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 16 }}>
            {[0.4, 0.9, 0.6, 1.0, 0.5, 0.8, 0.6].map((h, i) => (
              <div
                key={i}
                style={{
                  width: 3,
                  height: `${Math.max(4, Math.sin(frame / 3.5 + i) * 8 + 8) * h}px`,
                  backgroundColor: '#6366F1',
                  borderRadius: 1.5,
                }}
              />
            ))}
          </div>
          <span style={{ fontWeight: 700, color: '#0F172A' }}>
            {(frame / 30).toFixed(1)}s / 15.0s
          </span>
        </div>
      </div>

      {/* Bottom Precision Telemetry Bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 40,
          left: 48,
          right: 48,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 12,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: '0.12em',
          color: '#64748B',
          zIndex: 100,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#10B981',
              boxShadow: '0 0 8px rgba(16, 185, 129, 0.6)',
            }}
          />
          <span style={{ fontWeight: 600, color: '#0F172A' }}>SYSTEMS OPERATIONAL</span>
        </div>
        <div style={{ display: 'flex', gap: 16, color: '#64748B' }}>
          <span>TURNKEY: 7–14 DAYS</span>
          <span>•</span>
          <span>ZERO MIDDLEMEN</span>
          <span>•</span>
          <span style={{ color: '#6366F1', fontWeight: 700 }}>axiombyrusan.vercel.app</span>
        </div>
      </div>

      {/* ----------------- COHESIVE STORYLINE ACTS ----------------- */}

      {/* ACT 1: THE BEGINNING — THE BOTTLENECK & THE ARCHITECT (0.0s – 2.4s | Frames 0 – 72) */}
      {frame >= 0 && frame < 72 && (
        <StoryAct1 frame={frame} fps={fps} />
      )}

      {/* ACT 2: PROGRESSION 01 — AUTOMATE THE CORE (2.4s – 4.8s | Frames 72 – 145) */}
      {frame >= 72 && frame < 145 && (
        <StoryAct2 frame={frame - 72} fps={fps} />
      )}

      {/* ACT 3: PROGRESSION 02 — CAPTURE HIGH-INTENT DEMAND (4.8s – 7.3s | Frames 145 – 220) */}
      {frame >= 145 && frame < 220 && (
        <StoryAct3 frame={frame - 145} fps={fps} />
      )}

      {/* ACT 4: PROGRESSION 03 — LOCK IN THE REVENUE BRAIN (7.3s – 11.2s | Frames 220 – 336) */}
      {frame >= 220 && frame < 336 && (
        <StoryAct4 frame={frame - 220} fps={fps} />
      )}

      {/* ACT 5: THE ACCELERATION SPRINT (11.2s – 12.8s | Frames 336 – 384) */}
      {frame >= 336 && frame < 384 && (
        <StoryAct5 frame={frame - 336} fps={fps} />
      )}

      {/* ACT 6: THE RESOLUTION & CLIMAX (12.8s – 15.0s | Frames 384 – 450) */}
      {frame >= 384 && (
        <StoryAct6 frame={frame - 384} fps={fps} />
      )}

      {/* Master Audio Track */}
      <AudioTrack />
    </div>
  );
};

// ==========================================
// ACT 1: THE BEGINNING (0.0s – 2.4s | Frames 0 – 72)
// "Growing businesses don't fail from lack of ambition. They drown in manual drag."
// ➔ "Enter Rusan: Built by an Engineer, Not a Middleman."
// ==========================================
const StoryAct1: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const hookSpring = spring({
    frame,
    fps,
    config: { damping: 13, stiffness: 140 },
  });

  const slashProgress = interpolate(frame, [10, 18], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const founderSpring = spring({
    frame: Math.max(0, frame - 24),
    fps,
    config: { damping: 16, stiffness: 100 },
  });

  const floatY = Math.sin(frame / 7) * 6;

  // Scene 1A: The Problem (Frames 0 to 24)
  if (frame < 24) {
    return (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 50px',
          textAlign: 'center',
          zIndex: 20,
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            color: '#6366F1',
            letterSpacing: '0.22em',
            marginBottom: 20,
            padding: '6px 20px',
            borderRadius: 30,
            border: '1px solid rgba(99, 102, 241, 0.3)',
            backgroundColor: 'rgba(99, 102, 241, 0.08)',
            opacity: hookSpring,
          }}
        >
          // THE OPERATIONAL BOTTLENECK
        </div>

        <div
          style={{
            fontSize: 28,
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            color: '#64748B',
            marginBottom: 12,
            opacity: hookSpring,
          }}
        >
          Growing businesses don’t lack ambition.
        </div>

        <div
          style={{
            position: 'relative',
            fontSize: 78,
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
            textTransform: 'uppercase',
            color: '#0F172A',
            transform: `scale(${hookSpring})`,
          }}
        >
          THEY DROWN IN DRAG.
          {/* Electric Iris Laser Slice */}
          <div
            style={{
              position: 'absolute',
              top: '52%',
              left: '-6%',
              width: `${slashProgress * 1.12}%`,
              height: 8,
              background: 'linear-gradient(90deg, #6366F1, #4F46E5, #38BDF8)',
              borderRadius: 4,
              boxShadow: '0 0 25px rgba(99, 102, 241, 0.8)',
              transform: 'rotate(-3deg)',
              pointerEvents: 'none',
            }}
          />
        </div>

        {frame >= 14 && (
          <div
            style={{
              marginTop: 24,
              padding: '8px 24px',
              borderRadius: 20,
              backgroundColor: '#FEF2F2',
              border: '1px solid #FECACA',
              fontSize: 14,
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              color: '#EF4444',
            }}
          >
            MANUAL PROCESSES KILL MOMENTUM
          </div>
        )}
      </div>
    );
  }

  // Scene 1B: The Solution Catalyst — Rusan Revealed (Frames 24 to 72)
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 50px',
        textAlign: 'center',
        zIndex: 20,
        opacity: founderSpring,
        transform: `translateY(${floatY}px) scale(${0.92 + founderSpring * 0.08})`,
      }}
    >
      {/* Pristine Founder Avatar with Subtle Orbiting Accent Rings */}
      <div
        style={{
          position: 'relative',
          width: 230,
          height: 230,
          marginBottom: 32,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: -14,
            borderRadius: '50%',
            border: '1.5px dashed rgba(99, 102, 241, 0.45)',
            transform: `rotate(${frame * 1.5}deg)`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: -6,
            borderRadius: '50%',
            border: '2px solid rgba(99, 102, 241, 0.25)',
            transform: `rotate(-${frame * 1.0}deg)`,
          }}
        />
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid #FFFFFF',
            boxShadow: '0 20px 50px -10px rgba(15, 23, 42, 0.18), 0 0 0 1px rgba(99, 102, 241, 0.2)',
            backgroundColor: '#F8FAFC',
          }}
        >
          <Img
            src={staticFile('rusan-avatar.png')}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* 3D Floating Accents */}
        <div
          style={{
            position: 'absolute',
            top: -16,
            left: -48,
            width: 72,
            height: 72,
            transform: `translateY(${Math.sin(frame / 6) * 10}px) rotate(${frame * 0.8}deg)`,
          }}
        >
          <Img
            src={staticFile('about-3d-lego.png')}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: -16,
            right: -48,
            width: 74,
            height: 74,
            transform: `translateY(${Math.cos(frame / 6) * 10}px) rotate(-${frame * 0.8}deg)`,
          }}
        >
          <Img
            src={staticFile('about-3d-ai-brain.png')}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* Pill Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 20px',
          borderRadius: 24,
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(15, 23, 42, 0.08)',
          boxShadow: '0 4px 16px -2px rgba(15, 23, 42, 0.06)',
          color: '#6366F1',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          marginBottom: 14,
        }}
      >
        <span style={{ color: '#10B981' }}>●</span>
        <span>FOUNDER & LEAD AUTOMATION ENGINEER</span>
      </div>

      {/* Founder Name */}
      <div
        style={{
          fontSize: 92,
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 0.95,
          color: '#0F172A',
          textTransform: 'uppercase',
          marginBottom: 8,
        }}
      >
        RUSAN
      </div>

      {/* Manifesto Headline in Instrument Serif Italic */}
      <div
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 42,
          fontStyle: 'italic',
          color: '#4F46E5',
          marginBottom: 18,
        }}
      >
        Built by an Engineer, Not a Middleman.
      </div>

      {/* Narrative Premise */}
      <div
        style={{
          fontSize: 19,
          color: '#475569',
          maxWidth: 680,
          lineHeight: 1.5,
          fontWeight: 500,
          marginBottom: 24,
        }}
      >
        “I eliminate repetitive work and engineer deterministic AI engines that scale growing businesses.”
      </div>

      {/* Narrative Bridge Indicator */}
      <div
        style={{
          padding: '10px 24px',
          borderRadius: 16,
          backgroundColor: '#FFFFFF',
          border: '1px solid #E2E8F0',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12,
          fontWeight: 700,
          color: '#6366F1',
          letterSpacing: '0.12em',
        }}
      >
        THE 3-STEP TRANSFORMATION ➔ [01] AUTOMATE • [02] CAPTURE • [03] SCALE
      </div>
    </div>
  );
};

// ==========================================
// ACT 2: PROGRESSION 01 — AUTOMATE THE CORE (2.4s – 4.8s | Frames 72 – 145)
// "First: We eliminate the grind."
// Narrative: Before scaling demand, remove internal friction.
// ==========================================
const StoryAct2: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 120 },
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
        padding: '0 50px',
        zIndex: 20,
        opacity: enterSpring,
        transform: `scale(${0.94 + enterSpring * 0.06})`,
      }}
    >
      {/* Step Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 18px',
          borderRadius: 20,
          backgroundColor: 'rgba(99, 102, 241, 0.08)',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          color: '#6366F1',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          marginBottom: 12,
        }}
      >
        <span>PHASE 01 // INTERNAL OPERATIONS</span>
      </div>

      <div
        style={{
          fontSize: 58,
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-0.03em',
          color: '#0F172A',
          textAlign: 'center',
          lineHeight: 1.05,
          marginBottom: 8,
        }}
      >
        FIRST: WE ELIMINATE{' '}
        <span
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontWeight: 400,
            color: '#6366F1',
          }}
        >
          The Grind.
        </span>
      </div>

      <div
        style={{
          fontSize: 17,
          color: '#64748B',
          textAlign: 'center',
          fontFamily: "'Inter', sans-serif",
          maxWidth: 650,
          lineHeight: 1.45,
          marginBottom: 32,
        }}
      >
        Before you can scale, eliminate manual operational friction with practical AI pipelines.
      </div>

      {/* 3 Connected Operational Pipeline Cards */}
      <div
        style={{
          width: '100%',
          maxWidth: 820,
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          marginBottom: 32,
        }}
      >
        {[
          {
            step: '01',
            title: 'INBOUND LEAD QUALIFICATION & SCORING',
            desc: 'Reads inquiries, extracts firmographic data via AI, scores buying intent.',
            badge: 'OpenAI + Claude API',
            icon: 'logo-openai-white.png',
            accent: '#6366F1',
          },
          {
            step: '02',
            title: 'ZERO-FRICTION CLIENT ONBOARDING',
            desc: 'Auto-generates contracts, provisions Drive folders & private Slack channels.',
            badge: 'Turnkey n8n Webhooks',
            icon: 'logo-n8n-white.png',
            accent: '#0284C7',
          },
          {
            step: '03',
            title: 'INTERNAL KNOWLEDGE & SOP COPILOT',
            desc: 'Indexes Notion & tickets so teams query company answers directly from Slack.',
            badge: 'Deterministic JSON',
            icon: 'logo-claude-white.png',
            accent: '#10B981',
          },
        ].map((item, idx) => {
          const itemSpring = spring({
            frame: Math.max(0, frame - idx * 7),
            fps,
            config: { damping: 14, stiffness: 130 },
          });

          return (
            <div
              key={idx}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: 18,
                padding: '18px 22px',
                borderRadius: 20,
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(15, 23, 42, 0.08)',
                boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.05), 0 0 0 1px rgba(15, 23, 42, 0.03)',
                opacity: itemSpring,
                transform: `translateX(${(1 - itemSpring) * 45}px)`,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor: 'rgba(99, 102, 241, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 800,
                  fontSize: 15,
                  color: item.accent,
                }}
              >
                {item.step}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                  <span style={{ fontWeight: 800, fontSize: 16, color: '#0F172A', letterSpacing: '-0.01em' }}>
                    {item.title}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      fontFamily: "'JetBrains Mono', monospace",
                      padding: '2px 8px',
                      borderRadius: 8,
                      backgroundColor: '#F1F5F9',
                      color: item.accent,
                      fontWeight: 600,
                    }}
                  >
                    {item.badge}
                  </span>
                </div>
                <div style={{ fontSize: 13.5, color: '#64748B', lineHeight: 1.35 }}>
                  {item.desc}
                </div>
              </div>

              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  backgroundColor: '#0F172A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 6,
                }}
              >
                <Img src={staticFile(item.icon)} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Metrics Footer */}
      <div
        style={{
          display: 'flex',
          gap: 20,
          padding: '12px 28px',
          borderRadius: 20,
          backgroundColor: '#FFFFFF',
          border: '1px solid #E2E8F0',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13,
        }}
      >
        <span style={{ color: '#10B981', fontWeight: 700 }}>● SAVED: 40+ HOURS / WEEK</span>
        <span style={{ color: '#CBD5E1' }}>|</span>
        <span style={{ color: '#0284C7', fontWeight: 700 }}>ERROR RATE: 0.00%</span>
        <span style={{ color: '#CBD5E1' }}>|</span>
        <span style={{ color: '#6366F1', fontWeight: 700 }}>7–14 DAYS TURNKEY</span>
      </div>
    </div>
  );
};

// ==========================================
// ACT 3: PROGRESSION 02 — CAPTURE HIGH-INTENT DEMAND (4.8s – 7.3s | Frames 145 – 220)
// "Next: We build the conversion front."
// Narrative: With operations automated, capture inbound demand 24/7.
// ==========================================
const StoryAct3: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 120 },
  });

  const cardTilt = Math.sin(frame / 9) * 2.5;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 50px',
        zIndex: 20,
        opacity: enterSpring,
        transform: `scale(${0.94 + enterSpring * 0.06})`,
      }}
    >
      {/* Step Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 18px',
          borderRadius: 20,
          backgroundColor: 'rgba(2, 132, 199, 0.08)',
          border: '1px solid rgba(2, 132, 199, 0.25)',
          color: '#0284C7',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          marginBottom: 12,
        }}
      >
        <span>PHASE 02 // INBOUND DEMAND</span>
      </div>

      <div
        style={{
          fontSize: 58,
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-0.03em',
          color: '#0F172A',
          textAlign: 'center',
          lineHeight: 1.05,
          marginBottom: 8,
        }}
      >
        NEXT: WE BUILD{' '}
        <span
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontWeight: 400,
            color: '#0284C7',
          }}
        >
          The Front Door.
        </span>
      </div>

      <div
        style={{
          fontSize: 17,
          color: '#64748B',
          textAlign: 'center',
          fontFamily: "'Inter', sans-serif",
          maxWidth: 650,
          lineHeight: 1.45,
          marginBottom: 32,
        }}
      >
        With operations automated, high-converting websites and interactive AI concierges capture buyers 24/7.
      </div>

      {/* High-End Browser Window Mockup */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 820,
          height: 380,
          perspective: 1000,
          marginBottom: 32,
        }}
      >
        {/* Layer 1: Background Dashboard Preview */}
        <div
          style={{
            position: 'absolute',
            top: 24,
            left: 35,
            right: 35,
            height: 330,
            borderRadius: 24,
            overflow: 'hidden',
            border: '1px solid #E2E8F0',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.06)',
            transform: `rotateX(6deg) rotateY(-5deg) scale(0.94)`,
            opacity: 0.6,
          }}
        >
          <Img src={staticFile('proj-wealth-1.png')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Layer 2: Flagship Axiom Studio Website */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 10,
            right: 10,
            height: 350,
            borderRadius: 24,
            overflow: 'hidden',
            backgroundColor: '#FFFFFF',
            border: '2px solid rgba(99, 102, 241, 0.35)',
            boxShadow: '0 30px 70px -10px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(99, 102, 241, 0.1)',
            transform: `rotateX(4deg) rotateY(-2deg) rotateZ(${cardTilt}deg)`,
          }}
        >
          {/* Browser Header Bar */}
          <div
            style={{
              height: 40,
              backgroundColor: '#FFFFFF',
              borderBottom: '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              padding: '0 16px',
              gap: 8,
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#EF4444' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#F59E0B' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#10B981' }} />
            <div
              style={{
                marginLeft: 16,
                padding: '4px 20px',
                borderRadius: 8,
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                fontSize: 11,
                fontFamily: "'JetBrains Mono', monospace",
                color: '#64748B',
                fontWeight: 600,
              }}
            >
              https://axiombyrusan.vercel.app
            </div>
          </div>

          <Img
            src={staticFile('proj-automation-hub-1.png')}
            style={{ width: '100%', height: 'calc(100% - 40px)', objectFit: 'cover' }}
          />

          {/* Floating Pill: Generative Engine Optimization */}
          <div
            style={{
              position: 'absolute',
              bottom: 24,
              right: 24,
              padding: '10px 20px',
              borderRadius: 16,
              backgroundColor: '#FFFFFF',
              border: '1px solid #6366F1',
              boxShadow: '0 10px 30px rgba(99, 102, 241, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <span style={{ color: '#6366F1', fontSize: 16 }}>✦</span>
            <span style={{ fontSize: 12.5, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: '#0F172A' }}>
              CITED BY CHATGPT & PERPLEXITY (GEO)
            </span>
          </div>
        </div>
      </div>

      {/* Metrics Footer */}
      <div
        style={{
          display: 'flex',
          gap: 20,
          padding: '12px 28px',
          borderRadius: 20,
          backgroundColor: '#FFFFFF',
          border: '1px solid #E2E8F0',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13,
        }}
      >
        <span style={{ color: '#0284C7', fontWeight: 700 }}>● CONVERSION LIFT: +280%</span>
        <span style={{ color: '#CBD5E1' }}>|</span>
        <span style={{ color: '#10B981', fontWeight: 700 }}>AI CONCIERGE: 24/7 ACTIVE</span>
        <span style={{ color: '#CBD5E1' }}>|</span>
        <span style={{ color: '#6366F1', fontWeight: 700 }}>SUB-SECOND LOADS</span>
      </div>
    </div>
  );
};

// ==========================================
// ACT 4: PROGRESSION 03 — LOCK IN THE REVENUE BRAIN (7.3s – 11.2s | Frames 220 – 336)
// "Then: We lock in your revenue brain."
// Narrative: As demand flows, prevent leaks with bespoke CRM architecture & 1-on-1 advisory.
// ==========================================
const StoryAct4: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 120 },
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
        padding: '0 50px',
        zIndex: 20,
        opacity: enterSpring,
        transform: `scale(${0.94 + enterSpring * 0.06})`,
      }}
    >
      {/* Step Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 18px',
          borderRadius: 20,
          backgroundColor: 'rgba(99, 102, 241, 0.08)',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          color: '#6366F1',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          marginBottom: 12,
        }}
      >
        <span>PHASE 03 & 04 // DATA & STRATEGY</span>
      </div>

      <div
        style={{
          fontSize: 58,
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-0.03em',
          color: '#0F172A',
          textAlign: 'center',
          lineHeight: 1.05,
          marginBottom: 8,
        }}
      >
        THEN: WE LOCK IN{' '}
        <span
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontWeight: 400,
            color: '#6366F1',
          }}
        >
          Your Revenue Brain.
        </span>
      </div>

      <div
        style={{
          fontSize: 17,
          color: '#64748B',
          textAlign: 'center',
          fontFamily: "'Inter', sans-serif",
          maxWidth: 660,
          lineHeight: 1.45,
          marginBottom: 32,
        }}
      >
        Prevent pipeline leaks and scale without technical debt through custom CRM hubs and 1-on-1 strategy.
      </div>

      {/* Side-by-Side Dual Engine Cards */}
      <div
        style={{
          width: '100%',
          maxWidth: 820,
          display: 'flex',
          gap: 20,
          marginBottom: 32,
        }}
      >
        {/* Left: Bespoke CRM Architecture */}
        <div
          style={{
            flex: 1,
            padding: '28px 24px',
            borderRadius: 24,
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(15, 23, 42, 0.08)',
            boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div style={{ width: 84, height: 84, marginBottom: 18 }}>
            <Img src={staticFile('about-3d-data-cube.png')} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: '#6366F1', fontWeight: 800, marginBottom: 6 }}>
            // PILLAR 03
          </div>
          <div style={{ fontSize: 22, fontWeight: 900, color: '#0F172A', marginBottom: 10 }}>
            BESPOKE CRM HUBS
          </div>
          <div style={{ fontSize: 13.5, color: '#64748B', lineHeight: 1.4, marginBottom: 16 }}>
            Zero dropped leads. Real-time firmographic enrichment and multi-channel synchronization.
          </div>
          <div
            style={{
              padding: '6px 16px',
              borderRadius: 12,
              backgroundColor: '#EEF2FF',
              fontSize: 11.5,
              fontFamily: "'JetBrains Mono', monospace",
              color: '#4F46E5',
              fontWeight: 700,
            }}
          >
            ZERO PIPELINE LEAKS
          </div>
        </div>

        {/* Right: 1-on-1 Strategic AI Advisory */}
        <div
          style={{
            flex: 1,
            padding: '28px 24px',
            borderRadius: 24,
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(15, 23, 42, 0.08)',
            boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div style={{ width: 84, height: 84, marginBottom: 18 }}>
            <Img src={staticFile('about-3d-ai-brain.png')} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: '#4F46E5', fontWeight: 800, marginBottom: 6 }}>
            // PILLAR 04
          </div>
          <div style={{ fontSize: 22, fontWeight: 900, color: '#0F172A', marginBottom: 10 }}>
            EXECUTIVE ADVISORY
          </div>
          <div style={{ fontSize: 13.5, color: '#64748B', lineHeight: 1.4, marginBottom: 16 }}>
            Direct 1-on-1 roadmap with Rusan. Eliminate redundant SaaS subscriptions and tool fatigue.
          </div>
          <div
            style={{
              padding: '6px 16px',
              borderRadius: 12,
              backgroundColor: '#F0FDF4',
              fontSize: 11.5,
              fontFamily: "'JetBrains Mono', monospace",
              color: '#15803D',
              fontWeight: 700,
            }}
          >
            NO THEORETICAL FLUFF
          </div>
        </div>
      </div>

      {/* Metrics Footer */}
      <div
        style={{
          display: 'flex',
          gap: 20,
          padding: '12px 28px',
          borderRadius: 20,
          backgroundColor: '#FFFFFF',
          border: '1px solid #E2E8F0',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13,
        }}
      >
        <span style={{ color: '#6366F1', fontWeight: 700 }}>● DIRECT FOUNDER ACCESS</span>
        <span style={{ color: '#CBD5E1' }}>|</span>
        <span style={{ color: '#10B981', fontWeight: 700 }}>SAAS WASTE: CUT BY $10K+</span>
        <span style={{ color: '#CBD5E1' }}>|</span>
        <span style={{ color: '#0F172A', fontWeight: 700 }}>TURNKEY HANDOVER</span>
      </div>
    </div>
  );
};

// ==========================================
// ACT 5: THE ACCELERATION SPRINT (11.2s – 12.8s | Frames 336 – 384)
// High-velocity kinetic typographic punch on 132 BPM kick hits
// ==========================================
const StoryAct5: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  let word = 'NO COMMITTEES.';
  let sub = '// 01: DIRECT FOUNDER ACCESS';
  let color = '#4F46E5';

  if (frame >= 16 && frame < 32) {
    word = 'DETERMINISTIC CODE.';
    sub = '// 02: ZERO FRAGILE PROMPT CHAINS';
    color = '#0F172A';
  } else if (frame >= 32) {
    word = 'AMPLIFY REVENUE.';
    sub = '// 03: 10X OPERATIONAL VELOCITY';
    color = '#10B981';
  }

  const beatSpring = spring({
    frame: frame % 16,
    fps,
    config: { damping: 10, stiffness: 220 },
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
        transform: `scale(${0.92 + beatSpring * 0.08})`,
      }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 20,
          fontWeight: 800,
          color,
          letterSpacing: '0.22em',
          marginBottom: 16,
        }}
      >
        {sub}
      </div>

      <div
        style={{
          fontSize: 92,
          fontWeight: 900,
          letterSpacing: '-0.04em',
          textTransform: 'uppercase',
          color,
          lineHeight: 1.0,
        }}
      >
        {word}
      </div>

      <div
        style={{
          marginTop: 24,
          fontFamily: "'Instrument Serif', serif",
          fontSize: 36,
          fontStyle: 'italic',
          color: '#475569',
        }}
      >
        “Stop running your business manually.”
      </div>
    </div>
  );
};

// ==========================================
// ACT 6: THE RESOLUTION & CLIMAX (12.8s – 15.0s | Frames 384 – 450)
// Definitive Brand Lockup: ✦ Axiom — by Rusan
// "Automate the Work. Amplify the Business."
// ==========================================
const StoryAct6: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const climaxSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 110 },
  });

  const floatY = Math.sin(frame / 6) * 5;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 50px',
        textAlign: 'center',
        zIndex: 30,
        opacity: climaxSpring,
        transform: `translateY(${floatY}px) scale(${0.92 + climaxSpring * 0.08})`,
      }}
    >
      {/* Brand Icon */}
      <div
        style={{
          fontSize: 48,
          color: '#0F172A',
          marginBottom: 4,
          transform: `rotate(${frame * 1.5}deg)`,
        }}
      >
        ✦
      </div>

      {/* Pill Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 20px',
          borderRadius: 24,
          backgroundColor: '#FFFFFF',
          border: '1px solid #E2E8F0',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
          color: '#6366F1',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12.5,
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          marginBottom: 14,
        }}
      >
        <span>THE AUTONOMOUS ADVANTAGE</span>
      </div>

      {/* Master Brand Typography */}
      <div
        style={{
          fontSize: 135,
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 0.9,
          color: '#0F172A',
          textTransform: 'uppercase',
          marginBottom: 8,
        }}
      >
        AXIOM
      </div>

      {/* Founder Signature in Instrument Serif Italic */}
      <div
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 42,
          fontStyle: 'italic',
          color: '#6366F1',
          marginBottom: 16,
        }}
      >
        — by Rusan
      </div>

      {/* Axiom Core Ethos */}
      <div
        style={{
          fontSize: 26,
          fontWeight: 800,
          color: '#0F172A',
          marginBottom: 6,
          letterSpacing: '-0.01em',
        }}
      >
        Automate the Work.{' '}
        <span
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontWeight: 400,
            color: '#4F46E5',
          }}
        >
          Amplify the Business.
        </span>
      </div>

      <div
        style={{
          fontSize: 15.5,
          color: '#64748B',
          maxWidth: 680,
          lineHeight: 1.45,
          marginBottom: 24,
        }}
      >
         Practical AI automations, high-converting website design, CRM builds, and direct AI consultancy.
      </div>

      {/* Services Pills Row */}
      <div
        style={{
          display: 'flex',
          gap: 10,
          marginBottom: 28,
        }}
      >
        {['AI AUTOMATIONS', 'WEBSITE DESIGN', 'CRM BUILDS', 'AI CONSULTANCY'].map((svc, i) => (
          <div
            key={i}
            style={{
              padding: '6px 14px',
              borderRadius: 10,
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
              fontSize: 11,
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              color: '#334155',
            }}
          >
            {svc}
          </div>
        ))}
      </div>

      {/* Glowing High-Conversion CTA Button */}
      <div
        style={{
          padding: '16px 42px',
          borderRadius: 36,
          backgroundColor: '#0F172A',
          boxShadow: '0 12px 30px -5px rgba(15, 23, 42, 0.25), 0 0 0 1px #0F172A',
          fontSize: 19,
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 800,
          color: '#FFFFFF',
          letterSpacing: '0.08em',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginBottom: 14,
        }}
      >
        <span>axiombyrusan.vercel.app</span>
        <span style={{ fontSize: 20, color: '#818CF8' }}>➔</span>
      </div>

      <div
        style={{
          fontSize: 12,
          fontFamily: "'JetBrains Mono', monospace",
          color: '#64748B',
          letterSpacing: '0.12em',
        }}
      >
        BOOK A COMPLIMENTARY 20-MIN WORKFLOW DISCOVERY WITH RUSAN
      </div>
    </div>
  );
};

// ==========================================
// MASTER AUDIO TRACK (Synchronized to Keyframes)
// ==========================================
const AudioTrack: React.FC = () => {
  return (
    <>
      <Audio
        src={staticFile('bg_music_fast.wav')}
        volume={(f) =>
          interpolate(f, [0, 20, 420, 450], [0, 0.85, 0.85, 0], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          })
        }
      />
      {/* Frame 12: Laser Cut */}
      <Sequence from={12} durationInFrames={30}>
        <Audio src={staticFile('sfx/sfx_laser_cut.wav')} volume={0.6} />
      </Sequence>
      {/* Frame 24: Sub Impact on Rusan Founder Reveal */}
      <Sequence from={24} durationInFrames={40}>
        <Audio src={staticFile('sfx/sfx_sub_impact.wav')} volume={0.7} />
      </Sequence>
      {/* Frame 72: Snap into Phase 01: Automate The Core */}
      <Sequence from={72} durationInFrames={35}>
        <Audio src={staticFile('sfx/sfx_whoosh_pro.wav')} volume={0.5} />
      </Sequence>
      <Sequence from={74} durationInFrames={20}>
        <Audio src={staticFile('sfx/sfx_snap.wav')} volume={0.4} />
      </Sequence>
      <Sequence from={81} durationInFrames={20}>
        <Audio src={staticFile('sfx/sfx_snap.wav')} volume={0.4} />
      </Sequence>
      <Sequence from={88} durationInFrames={20}>
        <Audio src={staticFile('sfx/sfx_snap.wav')} volume={0.4} />
      </Sequence>
      {/* Frame 145: Shimmer & Whoosh into Phase 02: Inbound Demand */}
      <Sequence from={145} durationInFrames={35}>
        <Audio src={staticFile('sfx/sfx_whoosh_pro.wav')} volume={0.5} />
        <Audio src={staticFile('sfx/sfx_shimmer_pro.wav')} volume={0.45} />
      </Sequence>
      {/* Frame 220: Lock-on into Phase 03: Revenue Brain */}
      <Sequence from={220} durationInFrames={35}>
        <Audio src={staticFile('sfx/sfx_whoosh_soft.wav')} volume={0.45} />
        <Audio src={staticFile('sfx/sfx_snap.wav')} volume={0.45} />
      </Sequence>
      {/* Frames 336, 352, 368: 132 BPM Kinetic Sprint Triple Hits */}
      <Sequence from={336} durationInFrames={20}>
        <Audio src={staticFile('sfx/sfx_glitch_hit.wav')} volume={0.6} />
      </Sequence>
      <Sequence from={352} durationInFrames={20}>
        <Audio src={staticFile('sfx/sfx_glitch_hit.wav')} volume={0.65} />
      </Sequence>
      <Sequence from={368} durationInFrames={20}>
        <Audio src={staticFile('sfx/sfx_sub_impact.wav')} volume={0.75} />
      </Sequence>
      {/* Frame 384: Grand Climax Sub-Bass Explosion */}
      <Sequence from={384} durationInFrames={60}>
        <Audio src={staticFile('sfx/sfx_sub_impact.wav')} volume={0.8} />
        <Audio src={staticFile('sfx/sfx_whoosh_pro.wav')} volume={0.6} />
        <Audio src={staticFile('sfx/sfx_shimmer_pro.wav')} volume={0.55} />
      </Sequence>
    </>
  );
};
