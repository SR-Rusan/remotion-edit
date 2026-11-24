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

export const RusanAxiom15s: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Screen shake on key narrative impact beats
  const isShake1 = frame >= 12 && frame <= 22;   // Hook laser slash
  const isShake2 = frame >= 75 && frame <= 83;   // Phase 01 transition
  const isShake3 = frame >= 165 && frame <= 173; // Phase 02 transition
  const isShake4 = frame >= 245 && frame <= 253; // Phase 03 transition
  const isShake5 = frame >= 325 && frame <= 333; // Sprint Beat 1
  const isShake6 = frame >= 343 && frame <= 351; // Sprint Beat 2
  const isShake7 = frame >= 361 && frame <= 372; // Sprint Beat 3
  const isShake8 = frame >= 380 && frame <= 394; // Grand Climax Drop

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
    shakeX = Math.sin(frame * 2.8) * 14;
    shakeY = Math.cos(frame * 3.1) * 10;
  }

  // Master ambient glow oscillation
  const pulse = Math.sin(frame / 9) * 0.16 + 0.84;

  return (
    <div
      style={{
        position: 'relative',
        width,
        height,
        backgroundColor: '#0C0C0C',
        overflow: 'hidden',
        fontFamily: "'Kanit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        color: '#D7E2EA',
        transform: `translate(${shakeX}px, ${shakeY}px)`,
      }}
    >
      {/* Dynamic Background Matrix Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(215, 226, 234, 0.045) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(215, 226, 234, 0.045) 1px, transparent 1px)
          `,
          backgroundSize: '54px 54px',
          opacity: 0.85,
        }}
      />

      {/* Cyber Cyan and Neon Magenta Volumetric Glow Spots */}
      <div
        style={{
          position: 'absolute',
          top: -160,
          left: -120,
          width: 950,
          height: 950,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.24) 0%, transparent 68%)',
          filter: 'blur(90px)',
          opacity: pulse,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -220,
          right: -160,
          width: 1000,
          height: 1000,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(182, 0, 168, 0.28) 0%, transparent 68%)',
          filter: 'blur(100px)',
          opacity: pulse,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 750,
          height: 750,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.09) 0%, rgba(182, 0, 168, 0.09) 50%, transparent 70%)',
          filter: 'blur(75px)',
        }}
      />

      {/* Floating Ambient Stardust Particles */}
      {[...Array(14)].map((_, i) => {
        const pX = (i * 77 + frame * 1.2) % 1080;
        const pY = (i * 143 + Math.sin((frame + i * 20) / 14) * 45) % 1920;
        const pSize = (i % 3) * 2 + 2;
        const pColor = i % 2 === 0 ? '#00F0FF' : '#B600A8';
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: pX,
              top: pY,
              width: pSize,
              height: pSize,
              borderRadius: '50%',
              backgroundColor: pColor,
              boxShadow: `0 0 12px ${pColor}`,
              opacity: 0.45 + (i % 4) * 0.15,
            }}
          />
        );
      })}

      {/* Top HUD Frame */}
      <div
        style={{
          position: 'absolute',
          top: 36,
          left: 44,
          right: 44,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 14,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: '0.22em',
          color: 'rgba(215, 226, 234, 0.75)',
          zIndex: 100,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: '#00F0FF',
              boxShadow: '0 0 12px #00F0FF',
            }}
          />
          <span style={{ fontWeight: 700 }}>AXIOM // AUTONOMOUS SYSTEMS ARCHITECTURE</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {/* Animated Equalizer Visualizer */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 16 }}>
            {[0.5, 1.0, 0.7, 0.9, 0.4, 1.0, 0.6].map((h, i) => (
              <div
                key={i}
                style={{
                  width: 3,
                  height: `${Math.max(4, Math.sin(frame / 3.5 + i) * 8 + 8) * h}px`,
                  backgroundColor: '#00F0FF',
                  borderRadius: 1,
                }}
              />
            ))}
          </div>
          <span style={{ fontWeight: 700 }}>{Math.floor(frame / 30)}s / 15s</span>
        </div>
      </div>

      {/* Bottom HUD Frame */}
      <div
        style={{
          position: 'absolute',
          bottom: 36,
          left: 44,
          right: 44,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 13,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: '0.2em',
          color: 'rgba(215, 226, 234, 0.55)',
          zIndex: 100,
          borderTop: '1px solid rgba(215, 226, 234, 0.12)',
          paddingTop: 16,
        }}
      >
        <div style={{ display: 'flex', gap: 20 }}>
          <span>FOUNDER: RUSAN</span>
          <span style={{ color: '#00F0FF' }}>● 132 BPM MASTER SYNC</span>
        </div>
        <span>AUTOMATE • CONVERT • UNIFY • ACCELERATE</span>
      </div>

      {/* Corner Crop Crosshairs */}
      <div style={{ position: 'absolute', top: 30, left: 30, color: 'rgba(0, 240, 255, 0.4)', fontSize: 18, fontFamily: 'monospace' }}>┌</div>
      <div style={{ position: 'absolute', top: 30, right: 30, color: 'rgba(0, 240, 255, 0.4)', fontSize: 18, fontFamily: 'monospace' }}>┐</div>
      <div style={{ position: 'absolute', bottom: 30, left: 30, color: 'rgba(182, 0, 168, 0.4)', fontSize: 18, fontFamily: 'monospace' }}>└</div>
      <div style={{ position: 'absolute', bottom: 30, right: 30, color: 'rgba(182, 0, 168, 0.4)', fontSize: 18, fontFamily: 'monospace' }}>┘</div>

      {/* =========================================================================
          ACT 1: THE BEGINNING — THE PROBLEM & THE ARCHITECT (Frames 0 - 75)
          ========================================================================= */}
      {frame >= 0 && frame < 75 && <Scene1 frame={frame} fps={fps} />}

      {/* =========================================================================
          ACT 2: PROGRESSION STEP 1 — ELIMINATE INTERNAL BOTTLENECKS (Frames 75 - 165)
          ========================================================================= */}
      {frame >= 75 && frame < 165 && <Scene2 frame={frame - 75} fps={fps} />}

      {/* =========================================================================
          ACT 3: PROGRESSION STEP 2 — CAPTURE HIGH-CONVERTING DEMAND (Frames 165 - 245)
          ========================================================================= */}
      {frame >= 165 && frame < 245 && <Scene3 frame={frame - 165} fps={fps} />}

      {/* =========================================================================
          ACT 4: PROGRESSION STEP 3 — UNIFY REVENUE & INTELLIGENCE (Frames 245 - 325)
          ========================================================================= */}
      {frame >= 245 && frame < 325 && <Scene4 frame={frame - 245} fps={fps} />}

      {/* =========================================================================
          ACT 5: PROGRESSION STEP 4 — THE KINETIC ACCELERATION (Frames 325 - 380)
          ========================================================================= */}
      {frame >= 325 && frame < 380 && <Scene5 frame={frame - 325} fps={fps} />}

      {/* =========================================================================
          ACT 6: THE ENDING & CLIMAX — THE AUTONOMOUS ENTERPRISE (Frames 380 - 450)
          ========================================================================= */}
      {frame >= 380 && frame <= 450 && <Scene6 frame={frame - 380} fps={fps} />}

      {/* MASTER HIGH-ENERGY AUDIO ENGINE */}
      <AudioTrack />
    </div>
  );
};

// =============================================================================
// SCENE 1: THE BEGINNING — PROBLEM HOOK & ARCHITECT REVEAL (0 - 75)
// =============================================================================
const Scene1: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const hookSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 140 },
  });

  const slashProgress = interpolate(frame, [10, 18], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Founder entrance
  const founderSpring = spring({
    frame: Math.max(0, frame - 24),
    fps,
    config: { damping: 15, stiffness: 95 },
  });

  const floatY = Math.sin(frame / 7) * 10;

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
          padding: '0 40px',
          textAlign: 'center',
          zIndex: 20,
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 800,
            color: '#00F0FF',
            letterSpacing: '0.25em',
            marginBottom: 24,
            padding: '6px 22px',
            borderRadius: 20,
            border: '1px solid rgba(0, 240, 255, 0.4)',
            backgroundColor: 'rgba(0, 240, 255, 0.12)',
            opacity: hookSpring,
          }}
        >
          // THE BOTTLENECK PARADOX
        </div>

        <div
          style={{
            position: 'relative',
            fontSize: 88,
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            transform: `scale(${hookSpring})`,
          }}
        >
          MANUAL GRIND
          {/* Neon Magenta Laser Slash Bar */}
          <div
            style={{
              position: 'absolute',
              top: '52%',
              left: '-8%',
              width: `${slashProgress * 1.16}%`,
              height: 12,
              backgroundColor: '#B600A8',
              boxShadow: '0 0 35px #B600A8, 0 0 70px #B600A8',
              transform: 'rotate(-5deg)',
              transformOrigin: 'left center',
              borderRadius: 6,
            }}
          />
        </div>

        <div
          style={{
            fontSize: 94,
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
            textTransform: 'uppercase',
            color: '#B600A8',
            marginTop: 18,
            opacity: interpolate(frame, [12, 18], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
            transform: `scale(${interpolate(frame, [12, 20], [0.8, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            })})`,
            textShadow: '0 0 40px rgba(182, 0, 168, 0.85)',
          }}
        >
          KILLS MOMENTUM.
        </div>

        <div
          style={{
            marginTop: 24,
            fontSize: 18,
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: '0.2em',
            color: 'rgba(215, 226, 234, 0.65)',
            opacity: interpolate(frame, [15, 22], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
          }}
        >
          EVERY FOUNDER DROWNS IN REPETITIVE WORK.
        </div>
      </div>
    );
  }

  // Founder Reveal: Frames 24 - 75
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
        zIndex: 20,
      }}
    >
      {/* 3D Floating Assets (Lego & Brain) */}
      <div
        style={{
          position: 'absolute',
          top: 320,
          left: 60,
          width: 170,
          transform: `translateY(${floatY * -1}px) rotate(-18deg) scale(${founderSpring})`,
          zIndex: 5,
          filter: 'drop-shadow(0 20px 40px rgba(0, 240, 255, 0.3))',
        }}
      >
        <Img src={staticFile('about-3d-lego.png')} style={{ width: '100%' }} />
      </div>

      <div
        style={{
          position: 'absolute',
          top: 340,
          right: 60,
          width: 180,
          transform: `translateY(${floatY}px) rotate(16deg) scale(${founderSpring})`,
          zIndex: 5,
          filter: 'drop-shadow(0 20px 40px rgba(182, 0, 168, 0.35))',
        }}
      >
        <Img src={staticFile('about-3d-ai-brain.png')} style={{ width: '100%' }} />
      </div>

      {/* Main Avatar Stage */}
      <div
        style={{
          position: 'relative',
          width: 500,
          height: 500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: `scale(${founderSpring}) translateY(${interpolate(founderSpring, [0, 1], [90, 0])}px)`,
        }}
      >
        {/* Pulsing Back Halo */}
        <div
          style={{
            position: 'absolute',
            width: 460,
            height: 460,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.4) 0%, rgba(182, 0, 168, 0.3) 50%, transparent 72%)',
            filter: 'blur(35px)',
          }}
        />

        {/* Orbiting Neon Ring 1 */}
        <div
          style={{
            position: 'absolute',
            width: 440,
            height: 440,
            borderRadius: '50%',
            border: '2px solid rgba(0, 240, 255, 0.5)',
            boxShadow: '0 0 35px rgba(0, 240, 255, 0.3)',
            transform: `rotate(${frame * 1.5}deg)`,
          }}
        />

        {/* Orbiting Neon Ring 2 (Dashed) */}
        <div
          style={{
            position: 'absolute',
            width: 470,
            height: 470,
            borderRadius: '50%',
            border: '2px dashed rgba(182, 0, 168, 0.45)',
            transform: `rotate(${-frame * 1.1}deg)`,
          }}
        />

        {/* Rusan 3D Avatar */}
        <div
          style={{
            position: 'relative',
            width: 400,
            zIndex: 10,
            transform: `translateY(${floatY}px)`,
          }}
        >
          <Img
            src={staticFile('rusan-avatar.png')}
            style={{
              width: '100%',
              height: 'auto',
              filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.95))',
            }}
          />
        </div>
      </div>

      {/* Typography Stagger: Unified Story Beginning */}
      <div
        style={{
          marginTop: 24,
          textAlign: 'center',
          transform: `translateY(${interpolate(founderSpring, [0, 1], [50, 0])}px)`,
          opacity: founderSpring,
          zIndex: 20,
        }}
      >
        <div
          style={{
            display: 'inline-block',
            padding: '8px 28px',
            borderRadius: 30,
            backgroundColor: 'rgba(182, 0, 168, 0.22)',
            border: '2px solid #B600A8',
            color: '#FFFFFF',
            fontSize: 18,
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 800,
            letterSpacing: '0.22em',
            marginBottom: 14,
            boxShadow: '0 0 25px rgba(182, 0, 168, 0.5)',
          }}
        >
          SYSTEMS ARCHITECT // FOUNDER OF AXIOM
        </div>

        <h1
          style={{
            fontSize: 115,
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            margin: 0,
            textShadow: '0 10px 50px rgba(0,0,0,0.9)',
          }}
        >
          RUSAN
        </h1>

        <p
          style={{
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#00F0FF',
            maxWidth: 720,
            margin: '18px auto 0',
            lineHeight: 1.35,
          }}
        >
          "I TURN OPERATIONAL CHAOS INTO AUTONOMOUS REVENUE ENGINES."
        </p>

        {/* Story Roadmap Progression Arrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            marginTop: 22,
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 800,
              color: 'rgba(215, 226, 234, 0.8)',
              letterSpacing: '0.18em',
            }}
          >
            THE 3-STAGE TRANSFORMATION ➔
          </span>
          {['[01] AUTOMATE', '[02] CONVERT', '[03] SCALE'].map((stage, idx) => (
            <span
              key={stage}
              style={{
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '0.12em',
                padding: '4px 12px',
                borderRadius: 12,
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                color: idx === 0 ? '#00F0FF' : idx === 1 ? '#B600A8' : '#FFFFFF',
              }}
            >
              {stage}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// =============================================================================
// SCENE 2: PROGRESSION STEP 1 — ELIMINATE INTERNAL BOTTLENECKS (75 - 165)
// =============================================================================
const Scene2: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  const floatY = Math.sin(frame / 6) * 6;

  const workflows = [
    {
      step: '01',
      title: 'INBOUND LEAD QUALIFICATION',
      desc: 'Instant webhook trigger & automated prospect scoring',
      tool: 'OpenAI + Claude',
      logo: 'logo-openai-white.png',
      color: '#00F0FF',
    },
    {
      step: '02',
      title: 'MULTI-BRANCH DECISION TREES',
      desc: 'Zero-touch normalization & complex logic routing',
      tool: 'n8n + Make',
      logo: 'logo-n8n-white.png',
      color: '#B600A8',
    },
    {
      step: '03',
      title: 'REAL-TIME CRM SYNCHRONIZATION',
      desc: 'Seamless database dispatch & omnichannel client alerts',
      tool: 'Zapier + CRM Core',
      logo: 'logo-zapier-white.png',
      color: '#00F0FF',
    },
  ];

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
        zIndex: 20,
        opacity: enterSpring,
        transform: `scale(${interpolate(enterSpring, [0, 1], [0.92, 1])})`,
      }}
    >
      {/* Chapter Indicator */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginBottom: 10,
        }}
      >
        <span
          style={{
            fontSize: 15,
            fontWeight: 800,
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: '0.25em',
            color: '#00F0FF',
            backgroundColor: 'rgba(0, 240, 255, 0.12)',
            padding: '6px 20px',
            borderRadius: 20,
            border: '1.5px solid rgba(0, 240, 255, 0.4)',
          }}
        >
          PHASE 01 // OPERATIONS
        </span>
      </div>

      {/* Narrative Headline */}
      <h2
        style={{
          fontSize: 74,
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-0.03em',
          color: '#FFFFFF',
          textAlign: 'center',
          margin: 0,
          lineHeight: 1.05,
        }}
      >
        FIRST: WE AUTOMATE
        <br />
        <span style={{ color: '#00F0FF', textShadow: '0 0 40px rgba(0, 240, 255, 0.65)' }}>
          THE GRIND.
        </span>
      </h2>

      {/* Story Progression Lead-in */}
      <p
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: '#D7E2EA',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginTop: 8,
          marginBottom: 30,
          textAlign: 'center',
        }}
      >
        AI WORKFLOWS RUNNING 24/7 WITHOUT HUMAN FRICTION
      </p>

      {/* Vertical Connected Workflow Stack */}
      <div
        style={{
          position: 'relative',
          width: 860,
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
        }}
      >
        {/* Animated Connecting Vertical Laser Wire */}
        <div
          style={{
            position: 'absolute',
            left: 70,
            top: 40,
            bottom: 40,
            width: 3,
            backgroundColor: 'rgba(0, 240, 255, 0.3)',
            zIndex: 1,
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: -3,
              top: `${(frame * 4.5) % 100}%`,
              width: 9,
              height: 60,
              borderRadius: 4,
              backgroundColor: '#00F0FF',
              boxShadow: '0 0 20px #00F0FF, 0 0 40px #00F0FF',
            }}
          />
        </div>

        {workflows.map((wf, i) => {
          const cardSpring = spring({
            frame: Math.max(0, frame - i * 6),
            fps,
            config: { damping: 14, stiffness: 120 },
          });

          return (
            <div
              key={wf.step}
              style={{
                position: 'relative',
                zIndex: 10,
                backgroundColor: 'rgba(18, 18, 20, 0.94)',
                border: `2px solid ${i === 1 ? 'rgba(182, 0, 168, 0.45)' : 'rgba(0, 240, 255, 0.4)'}`,
                borderRadius: 26,
                padding: '22px 30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
                transform: `scale(${cardSpring}) translateY(${floatY * (i % 2 === 0 ? 1 : -1)}px)`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                {/* Step Circle */}
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 18,
                    backgroundColor: i === 1 ? 'rgba(182, 0, 168, 0.25)' : 'rgba(0, 240, 255, 0.2)',
                    border: `1.5px solid ${wf.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 22,
                    fontWeight: 800,
                    color: '#FFFFFF',
                    boxShadow: `0 0 15px ${wf.color}`,
                  }}
                >
                  {wf.step}
                </div>

                <div>
                  <div
                    style={{
                      fontSize: 23,
                      fontWeight: 800,
                      color: '#FFFFFF',
                      letterSpacing: '-0.02em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {wf.title}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      color: 'rgba(215, 226, 234, 0.72)',
                      marginTop: 4,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {wf.desc}
                  </div>
                </div>
              </div>

              {/* Tool Tag */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '8px 18px',
                  borderRadius: 16,
                  backgroundColor: '#161618',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                <div style={{ width: 28, height: 28 }}>
                  <Img src={staticFile(wf.logo)} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    fontFamily: "'JetBrains Mono', monospace",
                    color: '#FFFFFF',
                  }}
                >
                  {wf.tool}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Story Bridge & Telemetry Metric Badges */}
      <div
        style={{
          marginTop: 28,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 14,
        }}
      >
        <div style={{ display: 'flex', gap: 20 }}>
          <div
            style={{
              padding: '12px 26px',
              borderRadius: 20,
              backgroundColor: 'rgba(0, 240, 255, 0.1)',
              border: '1px solid rgba(0, 240, 255, 0.4)',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 15,
              fontWeight: 800,
              color: '#00F0FF',
              boxShadow: '0 0 25px rgba(0, 240, 255, 0.2)',
            }}
          >
            SAVED: 40+ HOURS / WEEK
          </div>
          <div
            style={{
              padding: '12px 26px',
              borderRadius: 20,
              backgroundColor: 'rgba(182, 0, 168, 0.12)',
              border: '1px solid rgba(182, 0, 168, 0.45)',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 15,
              fontWeight: 800,
              color: '#B600A8',
              boxShadow: '0 0 25px rgba(182, 0, 168, 0.25)',
            }}
          >
            ERROR RATE: 0.00%
          </div>
        </div>

        {/* Narrative transition link */}
        <div
          style={{
            fontSize: 14,
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: '0.18em',
            color: 'rgba(215, 226, 234, 0.65)',
            fontWeight: 700,
          }}
        >
          ➔ OPERATIONS ARE AUTOMATED. NOW WE CAPTURE DEMAND:
        </div>
      </div>
    </div>
  );
};

// =============================================================================
// SCENE 3: PROGRESSION STEP 2 — CAPTURE HIGH-CONVERTING DEMAND (165 - 245)
// =============================================================================
const Scene3: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 95 },
  });

  const tiltY = Math.sin(frame / 9) * 10;
  const tiltX = Math.cos(frame / 11) * 6;

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
        zIndex: 20,
        opacity: enterSpring,
        perspective: 1200,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginBottom: 10,
        }}
      >
        <span
          style={{
            fontSize: 15,
            fontWeight: 800,
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: '0.25em',
            color: '#B600A8',
            backgroundColor: 'rgba(182, 0, 168, 0.15)',
            padding: '6px 20px',
            borderRadius: 20,
            border: '1.5px solid rgba(182, 0, 168, 0.5)',
          }}
        >
          PHASE 02 // FRONT DOOR
        </span>
      </div>

      <h2
        style={{
          fontSize: 74,
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-0.03em',
          color: '#FFFFFF',
          textAlign: 'center',
          margin: 0,
          lineHeight: 1.05,
        }}
      >
        NEXT: WE BUILD
        <br />
        <span style={{ color: '#B600A8', textShadow: '0 0 40px rgba(182, 0, 168, 0.75)' }}>
          THE CONVERSION FRONT.
        </span>
      </h2>

      <p
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: '#D7E2EA',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginTop: 8,
          marginBottom: 30,
        }}
      >
        HIGH-IMPACT 3D WEBSITES THAT TURN TRAFFIC INTO REVENUE
      </p>

      {/* Two Overlapping 3D Showcase Windows */}
      <div
        style={{
          position: 'relative',
          width: 860,
          height: 520,
          transform: `scale(${enterSpring}) rotateY(${tiltY}deg) rotateX(${tiltX}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Background Card: Wealth Whisper Tracker */}
        <div
          style={{
            position: 'absolute',
            top: -30,
            right: -20,
            width: 720,
            height: 420,
            borderRadius: 32,
            backgroundColor: '#111113',
            border: '2px solid rgba(0, 240, 255, 0.3)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85), 0 0 35px rgba(0, 240, 255, 0.15)',
            overflow: 'hidden',
            opacity: 0.6,
            transform: 'translateZ(-60px) rotate(-3deg)',
          }}
        >
          <Img
            src={staticFile('proj-wealth-1.png')}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Foreground Main Card: Automation Hub */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: 820,
            height: 480,
            borderRadius: 34,
            backgroundColor: '#161618',
            border: '2.5px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 40px 100px rgba(0, 0, 0, 0.95), 0 0 60px rgba(182, 0, 168, 0.3)',
            overflow: 'hidden',
            transform: 'translateZ(40px)',
          }}
        >
          {/* Browser Bar */}
          <div
            style={{
              height: 48,
              backgroundColor: '#0C0C0C',
              borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              alignItems: 'center',
              padding: '0 22px',
              gap: 10,
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FF5F56' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#27C93F' }} />
            <div
              style={{
                marginLeft: 20,
                padding: '4px 22px',
                borderRadius: 12,
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#D7E2EA',
                fontSize: 13,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              https://axiom.ai/conversion-front
            </div>
          </div>

          {/* Screenshot Content */}
          <div style={{ position: 'relative', width: '100%', height: 'calc(100% - 48px)' }}>
            <Img
              src={staticFile('proj-automation-hub-1.png')}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />

            {/* Gloss Reflection Sweep */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(${120 + frame * 0.9}deg, transparent 40%, rgba(255,255,255,0.22) 50%, transparent 60%)`,
                pointerEvents: 'none',
              }}
            />

            {/* Floating Tags */}
            <div
              style={{
                position: 'absolute',
                bottom: 24,
                left: 24,
                right: 24,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  padding: '12px 24px',
                  borderRadius: 18,
                  backgroundColor: 'rgba(12, 12, 12, 0.92)',
                  backdropFilter: 'blur(20px)',
                  border: '1.5px solid rgba(0, 240, 255, 0.45)',
                  fontSize: 15,
                  fontWeight: 800,
                  color: '#00F0FF',
                  fontFamily: "'JetBrains Mono', monospace",
                  boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)',
                }}
              >
                ● 3D INTERACTION & MOTION
              </div>
              <div
                style={{
                  padding: '12px 24px',
                  borderRadius: 18,
                  backgroundColor: 'rgba(182, 0, 168, 0.92)',
                  backdropFilter: 'blur(20px)',
                  border: '1.5px solid rgba(255, 255, 255, 0.35)',
                  fontSize: 15,
                  fontWeight: 800,
                  color: '#FFFFFF',
                  fontFamily: "'JetBrains Mono', monospace",
                  boxShadow: '0 0 25px rgba(182, 0, 168, 0.55)',
                }}
              >
                CONVERSION: +280%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Badges & Narrative Bridge */}
      <div
        style={{
          marginTop: 32,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 14,
        }}
      >
        <div style={{ display: 'flex', gap: 18 }}>
          {['SUB-SECOND LOADS', 'IMMERSIVE 3D MOTION', 'MAXIMUM CONVERSION'].map((b) => (
            <span
              key={b}
              style={{
                padding: '8px 20px',
                borderRadius: 16,
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                fontSize: 14,
                fontWeight: 800,
                fontFamily: "'JetBrains Mono', monospace",
                color: '#FFFFFF',
              }}
            >
              {b}
            </span>
          ))}
        </div>

        <div
          style={{
            fontSize: 14,
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: '0.18em',
            color: 'rgba(215, 226, 234, 0.65)',
            fontWeight: 700,
          }}
        >
          ➔ DEMAND IS FLOWING. NOW WE CENTRALIZE YOUR REVENUE:
        </div>
      </div>
    </div>
  );
};

// =============================================================================
// SCENE 4: PROGRESSION STEP 3 — UNIFY REVENUE & INTELLIGENCE (245 - 325)
// =============================================================================
const Scene4: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  const floatY = Math.sin(frame / 7) * 8;

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
        zIndex: 20,
        opacity: enterSpring,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginBottom: 10,
        }}
      >
        <span
          style={{
            fontSize: 15,
            fontWeight: 800,
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: '0.25em',
            color: '#00F0FF',
            backgroundColor: 'rgba(0, 240, 255, 0.12)',
            padding: '6px 20px',
            borderRadius: 20,
            border: '1.5px solid rgba(0, 240, 255, 0.4)',
          }}
        >
          PHASE 03 // INTELLIGENCE
        </span>
      </div>

      <h2
        style={{
          fontSize: 72,
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-0.03em',
          color: '#FFFFFF',
          textAlign: 'center',
          margin: 0,
          lineHeight: 1.05,
        }}
      >
        THEN: WE LOCK IN
        <br />
        <span style={{ color: '#00F0FF', textShadow: '0 0 40px rgba(0, 240, 255, 0.65)' }}>
          YOUR REVENUE BRAIN.
        </span>
      </h2>

      <p
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: '#D7E2EA',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginTop: 8,
          marginBottom: 30,
        }}
      >
        BESPOKE CRM HUBS & HIGH-ROI STRATEGIC AI CONSULTANCY
      </p>

      {/* Two Large Stacked Vertical Showcase Cards */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 22,
          width: 860,
        }}
      >
        {/* Card 1: Custom CRM Building */}
        <div
          style={{
            backgroundColor: 'rgba(18, 18, 20, 0.94)',
            borderRadius: 30,
            border: '2px solid rgba(0, 240, 255, 0.45)',
            padding: '26px 34px',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.85), 0 0 35px rgba(0, 240, 255, 0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: 30,
            transform: `translateY(${floatY}px)`,
          }}
        >
          <div style={{ width: 130, height: 130, flexShrink: 0 }}>
            <Img
              src={staticFile('about-3d-data-cube.png')}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                style={{
                  fontSize: 14,
                  fontFamily: "'JetBrains Mono', monospace",
                  color: '#00F0FF',
                  fontWeight: 800,
                  letterSpacing: '0.2em',
                }}
              >
                03 // CUSTOM CRM ARCHITECTURE
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: '#00F0FF',
                  padding: '4px 14px',
                  borderRadius: 12,
                  backgroundColor: 'rgba(0, 240, 255, 0.15)',
                  border: '1px solid rgba(0, 240, 255, 0.3)',
                }}
              >
                ZERO PIPELINE LEAKS
              </span>
            </div>

            <h3 style={{ fontSize: 32, fontWeight: 900, color: '#FFFFFF', margin: '6px 0 6px', letterSpacing: '-0.02em' }}>
              BESPOKE CLIENT PORTALS
            </h3>
            <p style={{ fontSize: 16, color: 'rgba(215, 226, 234, 0.82)', lineHeight: 1.4, margin: 0 }}>
              Custom data architecture, real-time deal telemetry, and automated lead tracking that prevents valuable revenue from slipping away.
            </p>
          </div>
        </div>

        {/* Card 2: AI Consultancy */}
        <div
          style={{
            backgroundColor: 'rgba(18, 18, 20, 0.94)',
            borderRadius: 30,
            border: '2px solid rgba(182, 0, 168, 0.5)',
            padding: '26px 34px',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.85), 0 0 35px rgba(182, 0, 168, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: 30,
            transform: `translateY(${-floatY}px)`,
          }}
        >
          <div style={{ width: 130, height: 130, flexShrink: 0 }}>
            <Img
              src={staticFile('about-3d-ai-orb.png')}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                style={{
                  fontSize: 14,
                  fontFamily: "'JetBrains Mono', monospace",
                  color: '#B600A8',
                  fontWeight: 800,
                  letterSpacing: '0.2em',
                }}
              >
                04 // STRATEGIC AI CONSULTANCY
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: '#B600A8',
                  padding: '4px 14px',
                  borderRadius: 12,
                  backgroundColor: 'rgba(182, 0, 168, 0.15)',
                  border: '1px solid rgba(182, 0, 168, 0.3)',
                }}
              >
                HIGH ROI ROADMAPS
              </span>
            </div>

            <h3 style={{ fontSize: 32, fontWeight: 900, color: '#FFFFFF', margin: '6px 0 6px', letterSpacing: '-0.02em' }}>
              COMPOUND STRATEGY
            </h3>
            <p style={{ fontSize: 16, color: 'rgba(215, 226, 234, 0.82)', lineHeight: 1.4, margin: 0 }}>
              Practical AI adoption without the hype: stack selection, custom model integrations, and scalable infrastructure blueprints.
            </p>
          </div>
        </div>
      </div>

      {/* Narrative Bridge to Velocity Sprint */}
      <div
        style={{
          marginTop: 26,
          fontSize: 14,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: '0.18em',
          color: 'rgba(215, 226, 234, 0.65)',
          fontWeight: 700,
        }}
      >
        ➔ ALL SYSTEMS ARE CONNECTED. NOW WE ACCELERATE:
      </div>
    </div>
  );
};

// =============================================================================
// SCENE 5: PROGRESSION STEP 4 — THE KINETIC VELOCITY SPRINT (325 - 380)
// =============================================================================
const Scene5: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  // Beat 1: CUT FRICTION (Frames 0 - 18)
  if (frame < 18) {
    const s1 = spring({ frame, fps, config: { damping: 9, stiffness: 220 } });
    return (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 20,
          backgroundColor: '#0C0C0C',
        }}
      >
        <div
          style={{
            fontSize: 145,
            fontWeight: 900,
            letterSpacing: '-0.04em',
            textTransform: 'uppercase',
            color: '#00F0FF',
            transform: `scale(${s1})`,
            textShadow: '0 0 80px rgba(0, 240, 255, 0.95)',
          }}
        >
          CUT FRICTION.
        </div>
        <div
          style={{
            fontSize: 26,
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: '0.3em',
            color: '#D7E2EA',
            marginTop: 10,
            fontWeight: 700,
          }}
        >
          // 01: ZERO WASTED HOURS
        </div>
      </div>
    );
  }

  // Beat 2: SCALE SYSTEMS (Frames 18 - 36)
  if (frame < 36) {
    const s2 = spring({ frame: frame - 18, fps, config: { damping: 9, stiffness: 220 } });
    return (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 20,
          backgroundColor: '#0C0C0C',
        }}
      >
        <div
          style={{
            fontSize: 145,
            fontWeight: 900,
            letterSpacing: '-0.04em',
            textTransform: 'uppercase',
            color: '#B600A8',
            transform: `scale(${s2}) rotate(-3deg)`,
            textShadow: '0 0 80px rgba(182, 0, 168, 0.95)',
          }}
        >
          SCALE SYSTEMS.
        </div>
        <div
          style={{
            fontSize: 26,
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: '0.3em',
            color: '#D7E2EA',
            marginTop: 10,
            fontWeight: 700,
          }}
        >
          // 02: 100% AUTOPILOT OPERATIONS
        </div>
      </div>
    );
  }

  // Beat 3: OUTRUN EVERYONE (Frames 36 - 55)
  const s3 = spring({ frame: frame - 36, fps, config: { damping: 9, stiffness: 220 } });
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 20,
        backgroundColor: '#0C0C0C',
      }}
    >
      <div
        style={{
          fontSize: 155,
          fontWeight: 900,
          letterSpacing: '-0.05em',
          textTransform: 'uppercase',
          color: '#FFFFFF',
          transform: `scale(${s3})`,
          textShadow: '0 0 100px rgba(255, 255, 255, 1)',
        }}
      >
        OUTRUN EVERYONE.
      </div>
      <div
        style={{
          marginTop: 18,
          fontSize: 28,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: '0.25em',
          color: '#00F0FF',
          fontWeight: 800,
        }}
      >
        // 03: 10X REVENUE VELOCITY
      </div>
    </div>
  );
};

// =============================================================================
// SCENE 6: THE ENDING & CLIMAX — THE NEW REALITY & BRAND REVEAL (380 - 450)
// =============================================================================
const Scene6: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  const floatY = Math.sin(frame / 7) * 8;

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
        zIndex: 20,
        opacity: enterSpring,
        transform: `scale(${interpolate(enterSpring, [0, 1], [0.88, 1])})`,
      }}
    >
      {/* 3D Rusan Avatar Center Hero */}
      <div
        style={{
          width: 250,
          height: 250,
          marginBottom: 8,
          transform: `translateY(${floatY}px)`,
          filter: 'drop-shadow(0 25px 50px rgba(0, 240, 255, 0.45))',
        }}
      >
        <Img src={staticFile('rusan-avatar.png')} style={{ width: '100%', height: 'auto' }} />
      </div>

      <div
        style={{
          display: 'inline-block',
          padding: '8px 24px',
          borderRadius: 20,
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          border: '1.5px solid rgba(255, 255, 255, 0.25)',
          fontSize: 16,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: '0.25em',
          color: '#00F0FF',
          marginBottom: 10,
        }}
      >
        THE AUTONOMOUS ADVANTAGE
      </div>

      {/* Giant AXIOM Logo */}
      <h1
        style={{
          fontSize: 155,
          fontWeight: 900,
          letterSpacing: '0.08em',
          lineHeight: 0.9,
          textTransform: 'uppercase',
          margin: 0,
          background: 'linear-gradient(135deg, #FFFFFF 0%, #00F0FF 45%, #B600A8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 20px 50px rgba(0, 240, 255, 0.55))',
        }}
      >
        AXIOM
      </h1>

      <div
        style={{
          fontSize: 24,
          fontWeight: 800,
          letterSpacing: '0.35em',
          color: '#D7E2EA',
          marginTop: 10,
          textTransform: 'uppercase',
        }}
      >
        ENGINEERED BY RUSAN
      </div>

      <div
        style={{
          marginTop: 16,
          fontSize: 20,
          fontWeight: 600,
          color: '#00F0FF',
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        STOP RUNNING YOUR BUSINESS MANUALLY.
      </div>

      {/* URL CTA Box */}
      <div
        style={{
          marginTop: 28,
          padding: '18px 50px',
          borderRadius: 60,
          backgroundColor: '#FFFFFF',
          color: '#0C0C0C',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          boxShadow: '0 0 60px rgba(255, 255, 255, 0.55), 0 0 120px rgba(0, 240, 255, 0.4)',
          transform: `scale(${1 + Math.sin(frame / 6) * 0.025})`,
        }}
      >
        <span
          style={{
            fontSize: 26,
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          rusan-portfolio.vercel.app
        </span>
      </div>

      <div
        style={{
          marginTop: 22,
          fontSize: 17,
          color: 'rgba(215, 226, 234, 0.85)',
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: '0.18em',
        }}
      >
        LET'S ARCHITECT YOUR AI ADVANTAGE ➔
      </div>

      <div
        style={{
          marginTop: 14,
          fontSize: 13,
          color: 'rgba(215, 226, 234, 0.5)',
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: '0.22em',
        }}
      >
        AUTOMATION • WEBSITES • CRM • CONSULTANCY
      </div>
    </div>
  );
};

// =============================================================================
// PRO AUDIO MIXER & SFX CHOREOGRAPHY (HIGH-ENERGY & TACTILE)
// =============================================================================
const AudioTrack: React.FC = () => {
  return (
    <>
      {/* 132 BPM Master Soundtrack */}
      <Audio
        src={staticFile('bg_music_fast.wav')}
        volume={(f) => {
          if (f < 10) return interpolate(f, [0, 10], [0, 0.22]);
          if (f > 425) return interpolate(f, [425, 450], [0.22, 0]);
          return 0.22;
        }}
      />

      {/* SFX: Intro Laser Slash (Frame 10) */}
      <Sequence from={10} durationInFrames={30}>
        <Audio src={staticFile('sfx/sfx_laser_cut.wav')} volume={0.65} />
      </Sequence>

      {/* SFX: Founder Reveal Punch (Frame 24) */}
      <Sequence from={24} durationInFrames={30}>
        <Audio src={staticFile('sfx/sfx_sub_impact.wav')} volume={0.7} />
      </Sequence>

      {/* SFX: Phase 01 Whip-in (Frame 75) */}
      <Sequence from={75} durationInFrames={30}>
        <Audio src={staticFile('sfx/sfx_whoosh_pro.wav')} volume={0.5} />
      </Sequence>

      {/* SFX: Workflow Step Snaps (Tactile shutter clicks) */}
      <Sequence from={84} durationInFrames={20}>
        <Audio src={staticFile('sfx/sfx_snap.wav')} volume={0.45} />
      </Sequence>
      <Sequence from={96} durationInFrames={20}>
        <Audio src={staticFile('sfx/sfx_snap.wav')} volume={0.45} />
      </Sequence>
      <Sequence from={108} durationInFrames={20}>
        <Audio src={staticFile('sfx/sfx_snap.wav')} volume={0.45} />
      </Sequence>

      {/* SFX: Phase 02 High-Impact 3D Fold (Frame 165) */}
      <Sequence from={165} durationInFrames={35}>
        <Audio src={staticFile('sfx/sfx_whoosh_pro.wav')} volume={0.55} />
      </Sequence>
      <Sequence from={170} durationInFrames={40}>
        <Audio src={staticFile('sfx/sfx_shimmer_pro.wav')} volume={0.45} />
      </Sequence>

      {/* SFX: Phase 03 Revenue Brain Lock-in (Frame 245) */}
      <Sequence from={245} durationInFrames={30}>
        <Audio src={staticFile('sfx/sfx_whoosh_soft.wav')} volume={0.5} />
      </Sequence>
      <Sequence from={250} durationInFrames={20}>
        <Audio src={staticFile('sfx/sfx_snap.wav')} volume={0.5} />
      </Sequence>

      {/* SFX: Triple Velocity Sprint Hits (Frames 325, 343, 361) */}
      <Sequence from={325} durationInFrames={20}>
        <Audio src={staticFile('sfx/sfx_glitch_hit.wav')} volume={0.65} />
      </Sequence>
      <Sequence from={343} durationInFrames={20}>
        <Audio src={staticFile('sfx/sfx_glitch_hit.wav')} volume={0.7} />
      </Sequence>
      <Sequence from={361} durationInFrames={25}>
        <Audio src={staticFile('sfx/sfx_sub_impact.wav')} volume={0.8} />
      </Sequence>

      {/* SFX: Grand Climax & AXIOM Brand Drop (Frame 380) */}
      <Sequence from={380} durationInFrames={55}>
        <Audio src={staticFile('sfx/sfx_sub_impact.wav')} volume={0.85} />
      </Sequence>
      <Sequence from={380} durationInFrames={55}>
        <Audio src={staticFile('sfx/sfx_whoosh_pro.wav')} volume={0.65} />
      </Sequence>
      <Sequence from={385} durationInFrames={60}>
        <Audio src={staticFile('sfx/sfx_shimmer_pro.wav')} volume={0.6} />
      </Sequence>
    </>
  );
};
