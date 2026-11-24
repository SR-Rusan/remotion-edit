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

export const RusanAxiom15sLandscape: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Screen shake on key narrative impact beats
  const isShake1 = frame >= 12 && frame <= 22;   // Hook laser cut
  const isShake2 = frame >= 75 && frame <= 83;   // Phase 01 entry
  const isShake3 = frame >= 165 && frame <= 173; // Phase 02 entry
  const isShake4 = frame >= 245 && frame <= 253; // Phase 03 entry
  const isShake5 = frame >= 325 && frame <= 333; // Sprint Beat 1
  const isShake6 = frame >= 343 && frame <= 351; // Sprint Beat 2
  const isShake7 = frame >= 361 && frame <= 372; // Sprint Beat 3
  const isShake8 = frame >= 380 && frame <= 394; // Climax Drop

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
    shakeX = Math.sin(frame * 2.8) * 12;
    shakeY = Math.cos(frame * 3.1) * 8;
  }

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
      {/* Background Matrix Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(215, 226, 234, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(215, 226, 234, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.85,
        }}
      />

      {/* Cyber Ambient Spotlights */}
      <div
        style={{
          position: 'absolute',
          top: -120,
          left: '10%',
          width: 950,
          height: 650,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.22) 0%, transparent 70%)',
          filter: 'blur(95px)',
          opacity: pulse,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -120,
          right: '10%',
          width: 950,
          height: 650,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(182, 0, 168, 0.25) 0%, transparent 70%)',
          filter: 'blur(100px)',
          opacity: pulse,
        }}
      />

      {/* Top Header HUD */}
      <div
        style={{
          position: 'absolute',
          top: 36,
          left: 60,
          right: 60,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 15,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: '0.2em',
          color: 'rgba(215, 226, 234, 0.75)',
          zIndex: 100,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#00F0FF', boxShadow: '0 0 12px #00F0FF' }} />
          <span style={{ fontWeight: 700 }}>AXIOM // AUTONOMOUS ENTERPRISE ARCHITECTURE</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {/* Audio Bars */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 14 }}>
            {[0.5, 1.0, 0.7, 0.9, 0.4, 1.0, 0.6].map((h, i) => (
              <div
                key={i}
                style={{
                  width: 3,
                  height: `${Math.max(4, Math.sin(frame / 3.5 + i) * 7 + 7) * h}px`,
                  backgroundColor: '#00F0FF',
                  borderRadius: 1,
                }}
              />
            ))}
          </div>
          <span>FOUNDER: RUSAN</span>
          <span style={{ color: '#00F0FF', fontWeight: 800 }}>{Math.floor(frame / 30)}s / 15s</span>
        </div>
      </div>

      {/* Corner Brackets */}
      <div style={{ position: 'absolute', top: 30, left: 30, color: 'rgba(0, 240, 255, 0.4)', fontSize: 20, fontFamily: 'monospace' }}>┌</div>
      <div style={{ position: 'absolute', top: 30, right: 30, color: 'rgba(0, 240, 255, 0.4)', fontSize: 20, fontFamily: 'monospace' }}>┐</div>
      <div style={{ position: 'absolute', bottom: 30, left: 30, color: 'rgba(182, 0, 168, 0.4)', fontSize: 20, fontFamily: 'monospace' }}>└</div>
      <div style={{ position: 'absolute', bottom: 30, right: 30, color: 'rgba(182, 0, 168, 0.4)', fontSize: 20, fontFamily: 'monospace' }}>┘</div>

      {/* =========================================================================
          ACT 1: THE BEGINNING — THE PROBLEM & THE ARCHITECT (0 - 75)
          ========================================================================= */}
      {frame >= 0 && frame < 75 && <Scene1Landscape frame={frame} fps={fps} />}

      {/* =========================================================================
          ACT 2: PROGRESSION STEP 1 — ELIMINATE INTERNAL BOTTLENECKS (75 - 165)
          ========================================================================= */}
      {frame >= 75 && frame < 165 && <Scene2Landscape frame={frame - 75} fps={fps} />}

      {/* =========================================================================
          ACT 3: PROGRESSION STEP 2 — CAPTURE HIGH-CONVERTING DEMAND (165 - 245)
          ========================================================================= */}
      {frame >= 165 && frame < 245 && <Scene3Landscape frame={frame - 165} fps={fps} />}

      {/* =========================================================================
          ACT 4: PROGRESSION STEP 3 — UNIFY REVENUE & INTELLIGENCE (245 - 325)
          ========================================================================= */}
      {frame >= 245 && frame < 325 && <Scene4Landscape frame={frame - 245} fps={fps} />}

      {/* =========================================================================
          ACT 5: PROGRESSION STEP 4 — THE KINETIC VELOCITY SPRINT (325 - 380)
          ========================================================================= */}
      {frame >= 325 && frame < 380 && <Scene5Landscape frame={frame - 325} fps={fps} />}

      {/* =========================================================================
          ACT 6: THE ENDING & CLIMAX — THE NEW REALITY & BRAND REVEAL (380 - 450)
          ========================================================================= */}
      {frame >= 380 && frame <= 450 && <Scene6Landscape frame={frame - 380} fps={fps} />}

      {/* HIGH-ENERGY AUDIO ENGINE */}
      <AudioTrack />
    </div>
  );
};

// =============================================================================
// SCENE 1 (LANDSCAPE): THE PROBLEM HOOK & ARCHITECT REVEAL
// =============================================================================
const Scene1Landscape: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const hookSpring = spring({ frame, fps, config: { damping: 12, stiffness: 140 } });
  const slashProgress = interpolate(frame, [10, 18], [0, 100], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const founderSpring = spring({ frame: Math.max(0, frame - 24), fps, config: { damping: 15, stiffness: 95 } });
  const floatY = Math.sin(frame / 7) * 8;

  if (frame < 24) {
    return (
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: 24, fontFamily: "'JetBrains Mono', monospace", color: '#00F0FF', letterSpacing: '0.25em', marginBottom: 20 }}>
          // THE BOTTLENECK PARADOX
        </div>
        <div style={{ position: 'relative', fontSize: 110, fontWeight: 900, textTransform: 'uppercase', color: '#FFFFFF', transform: `scale(${hookSpring})` }}>
          MANUAL GRIND
          <div style={{ position: 'absolute', top: '50%', left: '-5%', width: `${slashProgress * 1.1}%`, height: 14, backgroundColor: '#B600A8', boxShadow: '0 0 40px #B600A8', transform: 'rotate(-4deg)' }} />
        </div>
        <div style={{ fontSize: 125, fontWeight: 900, textTransform: 'uppercase', color: '#B600A8', marginTop: 15, textShadow: '0 0 50px rgba(182, 0, 168, 0.85)' }}>
          KILLS MOMENTUM.
        </div>
        <div style={{ fontSize: 20, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.2em', color: 'rgba(215, 226, 234, 0.65)', marginTop: 22 }}>
          EVERY FOUNDER DROWNS IN REPETITIVE WORK.
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 120px' }}>
      <div style={{ flex: 1.2, transform: `scale(${founderSpring})` }}>
        <div style={{ display: 'inline-block', padding: '10px 28px', borderRadius: 30, backgroundColor: 'rgba(182, 0, 168, 0.22)', border: '2px solid #B600A8', color: '#FFFFFF', fontSize: 18, fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, letterSpacing: '0.2em', marginBottom: 16 }}>
          SYSTEMS ARCHITECT // FOUNDER OF AXIOM
        </div>
        <h1 style={{ fontSize: 135, fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em', textTransform: 'uppercase', color: '#FFFFFF', margin: 0 }}>
          RUSAN
        </h1>
        <p style={{ fontSize: 26, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#00F0FF', maxWidth: 780, marginTop: 20, lineHeight: 1.4 }}>
          "I TURN OPERATIONAL CHAOS INTO AUTONOMOUS REVENUE ENGINES."
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 26 }}>
          <span style={{ fontSize: 14, fontFamily: "'JetBrains Mono', monospace", color: 'rgba(215, 226, 234, 0.8)', fontWeight: 800 }}>
            THE 3-STAGE TRANSFORMATION ➔
          </span>
          {['[01] AUTOMATE', '[02] CONVERT', '[03] SCALE'].map((stage, idx) => (
            <span
              key={stage}
              style={{
                fontSize: 13,
                fontWeight: 700,
                fontFamily: "'JetBrains Mono', monospace",
                padding: '6px 14px',
                borderRadius: 14,
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

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', transform: `scale(${founderSpring}) translateY(${floatY}px)` }}>
        <div style={{ position: 'absolute', width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0, 240, 255, 0.4) 0%, rgba(182, 0, 168, 0.3) 50%, transparent 70%)', filter: 'blur(35px)' }} />
        <div style={{ width: 400, zIndex: 10 }}>
          <Img src={staticFile('rusan-avatar.png')} style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.9))' }} />
        </div>
      </div>
    </div>
  );
};

// =============================================================================
// SCENE 2 (LANDSCAPE): PROGRESSION STEP 1 — ELIMINATE INTERNAL BOTTLENECKS
// =============================================================================
const Scene2Landscape: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const enterSpring = spring({ frame, fps, config: { damping: 15, stiffness: 100 } });
  const floatY = Math.sin(frame / 6) * 6;

  const apps = [
    { name: 'OpenAI', file: 'logo-openai-white.png', desc: 'LLM Qualification' },
    { name: 'Claude', file: 'logo-claude-white.png', desc: 'Nuanced Reasoning' },
    { name: 'n8n', file: 'logo-n8n-white.png', desc: 'Flow Orchestration' },
    { name: 'Make', file: 'logo-make-white.png', desc: 'Multi-Branch Logic' },
    { name: 'Zapier', file: 'logo-zapier-white.png', desc: 'Real-Time Sync' },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 80px', opacity: enterSpring }}>
      <span style={{ fontSize: 15, fontWeight: 800, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.25em', color: '#00F0FF', backgroundColor: 'rgba(0, 240, 255, 0.12)', padding: '6px 20px', borderRadius: 20, border: '1.5px solid rgba(0, 240, 255, 0.4)', marginBottom: 12 }}>
        PHASE 01 // OPERATIONS
      </span>
      <h2 style={{ fontSize: 78, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.03em', color: '#FFFFFF', textAlign: 'center', margin: 0 }}>
        FIRST: WE AUTOMATE <span style={{ color: '#00F0FF', textShadow: '0 0 40px rgba(0, 240, 255, 0.65)' }}>THE GRIND.</span>
      </h2>
      <p style={{ fontSize: 22, fontWeight: 600, color: '#D7E2EA', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 10, marginBottom: 38 }}>
        AI WORKFLOWS RUNNING 24/7 WITHOUT HUMAN FRICTION
      </p>

      {/* Horizontal Connected Pipeline */}
      <div style={{ position: 'relative', width: 1400, height: 250, backgroundColor: 'rgba(18, 18, 20, 0.94)', borderRadius: 36, border: '2px solid rgba(0, 240, 255, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '0 40px', boxShadow: '0 30px 80px rgba(0,0,0,0.85)' }}>
        {/* Animated Connecting Laser Beam */}
        <div style={{ position: 'absolute', top: '50%', left: 100, right: 100, height: 3, backgroundColor: 'rgba(0, 240, 255, 0.3)', zIndex: 1 }}>
          <div style={{ position: 'absolute', top: -3, left: `${(frame * 4.0) % 100}%`, width: 180, height: 9, borderRadius: 4, backgroundColor: '#00F0FF', boxShadow: '0 0 25px #00F0FF' }} />
        </div>

        {apps.map((app, i) => (
          <div key={app.name} style={{ zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', transform: `translateY(${floatY * (i % 2 === 0 ? 1 : -1)}px)` }}>
            <div style={{ width: 105, height: 105, borderRadius: 28, backgroundColor: '#161618', border: '2px solid rgba(255, 255, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, boxShadow: '0 15px 35px rgba(0,0,0,0.7)' }}>
              <Img src={staticFile(app.file)} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
            <span style={{ marginTop: 10, fontSize: 17, fontWeight: 800, color: '#FFFFFF' }}>{app.name}</span>
            <span style={{ fontSize: 13, color: 'rgba(215, 226, 234, 0.7)', fontFamily: "'JetBrains Mono', monospace" }}>{app.desc}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 26, fontSize: 14, fontFamily: "'JetBrains Mono', monospace", color: 'rgba(215, 226, 234, 0.65)', fontWeight: 700, letterSpacing: '0.18em' }}>
        ➔ OPERATIONS ARE AUTONOMOUS. NOW WE CAPTURE DEMAND:
      </div>
    </div>
  );
};

// =============================================================================
// SCENE 3 (LANDSCAPE): PROGRESSION STEP 2 — CAPTURE HIGH-CONVERTING DEMAND
// =============================================================================
const Scene3Landscape: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const enterSpring = spring({ frame, fps, config: { damping: 15, stiffness: 95 } });
  const tiltY = Math.sin(frame / 9) * 8;

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 100px', opacity: enterSpring }}>
      <div style={{ flex: 1 }}>
        <span style={{ fontSize: 15, fontWeight: 800, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.25em', color: '#B600A8', backgroundColor: 'rgba(182, 0, 168, 0.15)', padding: '6px 20px', borderRadius: 20, border: '1.5px solid rgba(182, 0, 168, 0.5)' }}>
          PHASE 02 // FRONT DOOR
        </span>
        <h2 style={{ fontSize: 76, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.03em', color: '#FFFFFF', margin: '14px 0 0', lineHeight: 1.05 }}>
          NEXT: WE BUILD
          <br />
          <span style={{ color: '#B600A8', textShadow: '0 0 40px rgba(182, 0, 168, 0.75)' }}>THE CONVERSION FRONT.</span>
        </h2>
        <p style={{ fontSize: 22, fontWeight: 600, color: '#D7E2EA', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 12 }}>
          HIGH-IMPACT 3D WEBSITES THAT TURN TRAFFIC INTO REVENUE
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 26 }}>
          {['3D INTERACTION', 'CONVERSION: +280%', 'SUB-SECOND LOADS'].map((b) => (
            <span key={b} style={{ padding: '8px 18px', borderRadius: 16, backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', fontSize: 14, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>
              {b}
            </span>
          ))}
        </div>
        <div style={{ marginTop: 24, fontSize: 13, fontFamily: "'JetBrains Mono', monospace", color: 'rgba(215, 226, 234, 0.65)', fontWeight: 700, letterSpacing: '0.15em' }}>
          ➔ DEMAND IS FLOWING. NOW WE CENTRALIZE YOUR REVENUE:
        </div>
      </div>

      <div style={{ flex: 1.2, height: 540, position: 'relative', transform: `rotateY(${tiltY}deg)`, transformStyle: 'preserve-3d' }}>
        <div style={{ width: '100%', height: '100%', borderRadius: 32, backgroundColor: '#161618', border: '2.5px solid rgba(255, 255, 255, 0.3)', boxShadow: '0 40px 100px rgba(0,0,0,0.95), 0 0 50px rgba(182, 0, 168, 0.3)', overflow: 'hidden' }}>
          <Img src={staticFile('proj-automation-hub-1.png')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  );
};

// =============================================================================
// SCENE 4 (LANDSCAPE): PROGRESSION STEP 3 — UNIFY REVENUE & INTELLIGENCE
// =============================================================================
const Scene4Landscape: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const enterSpring = spring({ frame, fps, config: { damping: 15, stiffness: 100 } });
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 100px', opacity: enterSpring }}>
      <span style={{ fontSize: 15, fontWeight: 800, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.25em', color: '#00F0FF', backgroundColor: 'rgba(0, 240, 255, 0.12)', padding: '6px 20px', borderRadius: 20, border: '1.5px solid rgba(0, 240, 255, 0.4)', marginBottom: 12 }}>
        PHASE 03 // INTELLIGENCE
      </span>
      <h2 style={{ fontSize: 74, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.03em', color: '#FFFFFF', margin: 0 }}>
        THEN: WE LOCK IN <span style={{ color: '#00F0FF' }}>YOUR REVENUE BRAIN.</span>
      </h2>
      <div style={{ display: 'flex', gap: 36, width: 1400, marginTop: 36 }}>
        <div style={{ flex: 1, backgroundColor: 'rgba(18, 18, 20, 0.94)', borderRadius: 32, border: '2px solid rgba(0, 240, 255, 0.4)', padding: '34px 40px', display: 'flex', alignItems: 'center', gap: 26, boxShadow: '0 25px 70px rgba(0,0,0,0.85)' }}>
          <div style={{ width: 130, height: 130, flexShrink: 0 }}>
            <Img src={staticFile('about-3d-data-cube.png')} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div>
            <span style={{ fontSize: 13, fontFamily: "'JetBrains Mono', monospace", color: '#00F0FF', fontWeight: 800 }}>03 // CUSTOM CRM ARCHITECTURE</span>
            <h3 style={{ fontSize: 30, fontWeight: 900, color: '#FFFFFF', margin: '4px 0 6px' }}>BESPOKE CLIENT PORTALS</h3>
            <p style={{ fontSize: 16, color: 'rgba(215, 226, 234, 0.8)', margin: 0 }}>Unified pipelines, automated lead scoring & zero leaks.</p>
          </div>
        </div>

        <div style={{ flex: 1, backgroundColor: 'rgba(18, 18, 20, 0.94)', borderRadius: 32, border: '2px solid rgba(182, 0, 168, 0.45)', padding: '34px 40px', display: 'flex', alignItems: 'center', gap: 26, boxShadow: '0 25px 70px rgba(0,0,0,0.85)' }}>
          <div style={{ width: 130, height: 130, flexShrink: 0 }}>
            <Img src={staticFile('about-3d-ai-orb.png')} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div>
            <span style={{ fontSize: 13, fontFamily: "'JetBrains Mono', monospace", color: '#B600A8', fontWeight: 800 }}>04 // STRATEGIC AI ADVISORY</span>
            <h3 style={{ fontSize: 30, fontWeight: 900, color: '#FFFFFF', margin: '4px 0 6px' }}>COMPOUND ROADMAPS</h3>
            <p style={{ fontSize: 16, color: 'rgba(215, 226, 234, 0.8)', margin: 0 }}>Stack selection, custom model integrations, and execution.</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 28, fontSize: 14, fontFamily: "'JetBrains Mono', monospace", color: 'rgba(215, 226, 234, 0.65)', fontWeight: 700, letterSpacing: '0.18em' }}>
        ➔ ALL SYSTEMS ARE CONNECTED. NOW WE ACCELERATE:
      </div>
    </div>
  );
};

// =============================================================================
// SCENE 5 (LANDSCAPE): PROGRESSION STEP 4 — THE KINETIC VELOCITY SPRINT
// =============================================================================
const Scene5Landscape: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  if (frame < 18) {
    const s1 = spring({ frame, fps, config: { damping: 9, stiffness: 220 } });
    return (
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: 170, fontWeight: 900, textTransform: 'uppercase', color: '#00F0FF', transform: `scale(${s1})`, textShadow: '0 0 90px rgba(0, 240, 255, 0.95)' }}>
          CUT FRICTION.
        </div>
        <div style={{ fontSize: 30, fontFamily: "'JetBrains Mono', monospace", color: '#D7E2EA', letterSpacing: '0.25em', fontWeight: 700, marginTop: 14 }}>
          // 01: ZERO WASTED HOURS
        </div>
      </div>
    );
  }
  if (frame < 36) {
    const s2 = spring({ frame: frame - 18, fps, config: { damping: 9, stiffness: 220 } });
    return (
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: 170, fontWeight: 900, textTransform: 'uppercase', color: '#B600A8', transform: `scale(${s2}) rotate(-2deg)`, textShadow: '0 0 90px rgba(182, 0, 168, 0.95)' }}>
          SCALE SYSTEMS.
        </div>
        <div style={{ fontSize: 30, fontFamily: "'JetBrains Mono', monospace", color: '#D7E2EA', letterSpacing: '0.25em', fontWeight: 700, marginTop: 14 }}>
          // 02: 100% AUTOPILOT OPERATIONS
        </div>
      </div>
    );
  }
  const s3 = spring({ frame: frame - 36, fps, config: { damping: 9, stiffness: 220 } });
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ fontSize: 190, fontWeight: 900, textTransform: 'uppercase', color: '#FFFFFF', transform: `scale(${s3})`, textShadow: '0 0 100px rgba(255, 255, 255, 1)' }}>
        OUTRUN EVERYONE.
      </div>
      <div style={{ fontSize: 32, fontFamily: "'JetBrains Mono', monospace", color: '#00F0FF', letterSpacing: '0.25em', fontWeight: 800, marginTop: 16 }}>
        // 03: 10X REVENUE VELOCITY
      </div>
    </div>
  );
};

// =============================================================================
// SCENE 6 (LANDSCAPE): THE CLIMAX & BRAND FINALE
// =============================================================================
const Scene6Landscape: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const enterSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const floatY = Math.sin(frame / 7) * 8;

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 140px', opacity: enterSpring }}>
      <div style={{ flex: 1.2 }}>
        <div style={{ display: 'inline-block', padding: '8px 24px', borderRadius: 20, backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1.5px solid rgba(255, 255, 255, 0.25)', fontSize: 15, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.25em', color: '#00F0FF', marginBottom: 12 }}>
          THE AUTONOMOUS ADVANTAGE
        </div>
        <h1 style={{ fontSize: 150, fontWeight: 900, letterSpacing: '0.08em', lineHeight: 0.9, textTransform: 'uppercase', margin: 0, background: 'linear-gradient(135deg, #FFFFFF 0%, #00F0FF 45%, #B600A8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 20px 50px rgba(0, 240, 255, 0.55))' }}>
          AXIOM
        </h1>
        <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '0.35em', color: '#D7E2EA', marginTop: 10, textTransform: 'uppercase' }}>
          ENGINEERED BY RUSAN
        </div>
        <div style={{ marginTop: 14, fontSize: 20, fontWeight: 600, color: '#00F0FF', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.12em' }}>
          STOP RUNNING YOUR BUSINESS MANUALLY.
        </div>
        <div style={{ marginTop: 28, display: 'inline-block', padding: '18px 46px', borderRadius: 60, backgroundColor: '#FFFFFF', color: '#0C0C0C', boxShadow: '0 0 60px rgba(255, 255, 255, 0.55)' }}>
          <span style={{ fontSize: 24, fontWeight: 900, letterSpacing: '0.05em' }}>rusan-portfolio.vercel.app</span>
        </div>
        <div style={{ marginTop: 20, fontSize: 16, color: 'rgba(215, 226, 234, 0.85)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.18em' }}>
          LET'S ARCHITECT YOUR AI ADVANTAGE ➔
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', transform: `translateY(${floatY}px)` }}>
        <div style={{ width: 420, filter: 'drop-shadow(0 30px 60px rgba(0, 240, 255, 0.45))' }}>
          <Img src={staticFile('rusan-avatar.png')} style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

// =============================================================================
// PRO AUDIO MIXER (LANDSCAPE)
// =============================================================================
const AudioTrack: React.FC = () => {
  return (
    <>
      <Audio
        src={staticFile('bg_music_fast.wav')}
        volume={(f) => {
          if (f < 10) return interpolate(f, [0, 10], [0, 0.22]);
          if (f > 425) return interpolate(f, [425, 450], [0.22, 0]);
          return 0.22;
        }}
      />
      <Sequence from={10} durationInFrames={30}><Audio src={staticFile('sfx/sfx_laser_cut.wav')} volume={0.65} /></Sequence>
      <Sequence from={24} durationInFrames={30}><Audio src={staticFile('sfx/sfx_sub_impact.wav')} volume={0.7} /></Sequence>
      <Sequence from={75} durationInFrames={30}><Audio src={staticFile('sfx/sfx_whoosh_pro.wav')} volume={0.5} /></Sequence>
      <Sequence from={84} durationInFrames={20}><Audio src={staticFile('sfx/sfx_snap.wav')} volume={0.45} /></Sequence>
      <Sequence from={96} durationInFrames={20}><Audio src={staticFile('sfx/sfx_snap.wav')} volume={0.45} /></Sequence>
      <Sequence from={108} durationInFrames={20}><Audio src={staticFile('sfx/sfx_snap.wav')} volume={0.45} /></Sequence>
      <Sequence from={165} durationInFrames={35}><Audio src={staticFile('sfx/sfx_whoosh_pro.wav')} volume={0.55} /></Sequence>
      <Sequence from={170} durationInFrames={40}><Audio src={staticFile('sfx/sfx_shimmer_pro.wav')} volume={0.45} /></Sequence>
      <Sequence from={245} durationInFrames={30}><Audio src={staticFile('sfx/sfx_whoosh_soft.wav')} volume={0.5} /></Sequence>
      <Sequence from={250} durationInFrames={20}><Audio src={staticFile('sfx/sfx_snap.wav')} volume={0.5} /></Sequence>
      <Sequence from={325} durationInFrames={20}><Audio src={staticFile('sfx/sfx_glitch_hit.wav')} volume={0.65} /></Sequence>
      <Sequence from={343} durationInFrames={20}><Audio src={staticFile('sfx/sfx_glitch_hit.wav')} volume={0.7} /></Sequence>
      <Sequence from={361} durationInFrames={25}><Audio src={staticFile('sfx/sfx_sub_impact.wav')} volume={0.8} /></Sequence>
      <Sequence from={380} durationInFrames={55}><Audio src={staticFile('sfx/sfx_sub_impact.wav')} volume={0.85} /></Sequence>
      <Sequence from={380} durationInFrames={55}><Audio src={staticFile('sfx/sfx_whoosh_pro.wav')} volume={0.65} /></Sequence>
      <Sequence from={385} durationInFrames={60}><Audio src={staticFile('sfx/sfx_shimmer_pro.wav')} volume={0.6} /></Sequence>
    </>
  );
};
