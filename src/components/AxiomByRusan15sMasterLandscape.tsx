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

export const AxiomByRusan15sMasterLandscape: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Subtle organic camera recoil on key narrative impact beats
  const isShake1 = frame >= 12 && frame <= 22;
  const isShake2 = frame >= 72 && frame <= 80;
  const isShake3 = frame >= 145 && frame <= 153;
  const isShake4 = frame >= 220 && frame <= 228;
  const isShake5 = frame >= 336 && frame <= 344;
  const isShake6 = frame >= 352 && frame <= 360;
  const isShake7 = frame >= 368 && frame <= 376;
  const isShake8 = frame >= 384 && frame <= 396;

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

      {/* Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          opacity: 0.9,
        }}
      />

      {/* Soft Ambient Blobs */}
      <div
        style={{
          position: 'absolute',
          top: -120,
          left: '15%',
          width: 900,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
          filter: 'blur(90px)',
          opacity: ambientPulse,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -120,
          right: '15%',
          width: 900,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.07) 0%, transparent 70%)',
          filter: 'blur(90px)',
          opacity: ambientPulse,
        }}
      />

      {/* Top HUD Frame */}
      <div
        style={{
          position: 'absolute',
          top: 36,
          left: 60,
          right: 60,
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 18, color: '#0F172A', fontWeight: 900 }}>✦</span>
          <span style={{ fontWeight: 800, color: '#0F172A', letterSpacing: '0.05em' }}>AXIOM</span>
          <span style={{ color: '#94A3B8' }}>by Rusan</span>
          <span style={{ color: '#CBD5E1' }}>|</span>
           <span style={{ color: '#6366F1', fontWeight: 600 }}>AI AUTOMATION & DIGITAL PRESENCE</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
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

      {/* Bottom HUD */}
      <div
        style={{
          position: 'absolute',
          bottom: 36,
          left: 60,
          right: 60,
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#10B981' }} />
          <span style={{ fontWeight: 600, color: '#0F172A' }}>SYSTEMS OPERATIONAL</span>
          <span style={{ color: '#CBD5E1' }}>•</span>
          <span>TURNKEY: 7–14 DAYS</span>
        </div>
        <div style={{ display: 'flex', gap: 20, color: '#64748B' }}>
          <span>ZERO MIDDLEMEN</span>
          <span>•</span>
          <span>DETERMINISTIC CODE</span>
          <span>•</span>
          <span style={{ color: '#6366F1', fontWeight: 700 }}>axiombyrusan.vercel.app</span>
        </div>
      </div>

      {/* ACTS */}
      {frame >= 0 && frame < 72 && (
        <LandscapeAct1 frame={frame} fps={fps} />
      )}
      {frame >= 72 && frame < 145 && (
        <LandscapeAct2 frame={frame - 72} fps={fps} />
      )}
      {frame >= 145 && frame < 220 && (
        <LandscapeAct3 frame={frame - 145} fps={fps} />
      )}
      {frame >= 220 && frame < 336 && (
        <LandscapeAct4 frame={frame - 220} fps={fps} />
      )}
      {frame >= 336 && frame < 384 && (
        <LandscapeAct5 frame={frame - 336} fps={fps} />
      )}
      {frame >= 384 && (
        <LandscapeAct6 frame={frame - 384} fps={fps} />
      )}

      {/* Master Audio Track */}
      <LandscapeAudioTrack />
    </div>
  );
};

// ==========================================
// LANDSCAPE ACT 1
// ==========================================
const LandscapeAct1: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const hookSpring = spring({ frame, fps, config: { damping: 13, stiffness: 140 } });
  const slashProgress = interpolate(frame, [10, 18], [0, 100], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const founderSpring = spring({ frame: Math.max(0, frame - 24), fps, config: { damping: 16, stiffness: 100 } });

  if (frame < 24) {
    return (
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 20 }}>
        <div style={{ fontSize: 14, fontFamily: "'JetBrains Mono', monospace", color: '#6366F1', fontWeight: 700, letterSpacing: '0.22em', marginBottom: 16, opacity: hookSpring }}>
          // THE OPERATIONAL BOTTLENECK
        </div>
        <div style={{ fontSize: 32, fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#64748B', marginBottom: 12, opacity: hookSpring }}>
          Growing businesses don’t lack ambition.
        </div>
        <div style={{ position: 'relative', fontSize: 92, fontWeight: 900, textTransform: 'uppercase', color: '#0F172A', transform: `scale(${hookSpring})` }}>
          THEY DROWN IN DRAG.
          <div style={{ position: 'absolute', top: '50%', left: '-5%', width: `${slashProgress * 1.1}%`, height: 10, background: 'linear-gradient(90deg, #6366F1, #38BDF8)', borderRadius: 5, boxShadow: '0 0 25px rgba(99, 102, 241, 0.8)' }} />
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 120px', gap: 70, zIndex: 20, opacity: founderSpring }}>
      <div style={{ position: 'relative', width: 260, height: 260 }}>
        <div style={{ position: 'absolute', inset: -14, borderRadius: '50%', border: '1.5px dashed rgba(99, 102, 241, 0.45)', transform: `rotate(${frame * 1.5}deg)` }} />
        <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', border: '4px solid #FFFFFF', boxShadow: '0 20px 50px rgba(15, 23, 42, 0.15)' }}>
          <Img src={staticFile('rusan-avatar.png')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
      <div style={{ maxWidth: 880 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 18px', borderRadius: 20, backgroundColor: '#FFFFFF', border: '1px solid rgba(15, 23, 42, 0.08)', color: '#6366F1', fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5, fontWeight: 700, letterSpacing: '0.14em', marginBottom: 12 }}>
          <span style={{ color: '#10B981' }}>●</span>
          <span>FOUNDER & LEAD AUTOMATION ENGINEER</span>
        </div>
        <div style={{ fontSize: 88, fontWeight: 900, lineHeight: 0.95, color: '#0F172A', marginBottom: 8 }}>
          RUSAN
        </div>
        <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 44, fontStyle: 'italic', color: '#4F46E5', marginBottom: 14 }}>
          Built by an Engineer, Not a Middleman.
        </div>
        <div style={{ fontSize: 20, color: '#475569', lineHeight: 1.45, marginBottom: 20 }}>
          “I eliminate repetitive operational drag and engineer deterministic AI engines that scale revenue.”
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#6366F1', letterSpacing: '0.1em' }}>
          THE 3-STEP TRANSFORMATION ➔ [01] AUTOMATE • [02] CAPTURE • [03] SCALE
        </div>
      </div>
    </div>
  );
};

// ==========================================
// LANDSCAPE ACT 2
// ==========================================
const LandscapeAct2: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const enterSpring = spring({ frame, fps, config: { damping: 15, stiffness: 120 } });
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 90px', zIndex: 20, opacity: enterSpring }}>
      <div style={{ fontSize: 12.5, fontFamily: "'JetBrains Mono', monospace", color: '#6366F1', fontWeight: 800, letterSpacing: '0.18em', marginBottom: 8 }}>
        PHASE 01 // INTERNAL OPERATIONS
      </div>
      <div style={{ fontSize: 58, fontWeight: 900, textTransform: 'uppercase', color: '#0F172A', marginBottom: 24 }}>
        FIRST: WE ELIMINATE{' '}
        <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#6366F1' }}>
          The Grind.
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, width: '100%', maxWidth: 1400, marginBottom: 24 }}>
        {[
          { step: '01', title: 'INBOUND LEAD QUALIFICATION', desc: 'LLM intent scoring & instant firmographic enrichment.' },
          { step: '02', title: 'ZERO-FRICTION ONBOARDING', desc: 'Instant contracts, shared Drive & client Slack spaces.' },
          { step: '03', title: 'SOP & KNOWLEDGE COPILOT', desc: 'Query company docs & tickets directly from Slack.' },
        ].map((item, idx) => (
          <div key={idx} style={{ padding: '24px', borderRadius: 20, backgroundColor: '#FFFFFF', border: '1px solid rgba(15, 23, 42, 0.08)', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)' }}>
            <div style={{ fontSize: 14, fontFamily: "'JetBrains Mono', monospace", color: '#6366F1', fontWeight: 800, marginBottom: 6 }}>
              {item.step} // AUTOMATION
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: '#0F172A', marginBottom: 6 }}>{item.title}</div>
            <div style={{ fontSize: 13.5, color: '#64748B', lineHeight: 1.4 }}>{item.desc}</div>
          </div>
        ))}
      </div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13.5, color: '#10B981', fontWeight: 700 }}>
        ● SAVED: 40+ HOURS / WEEK • ERROR RATE: 0.00% • TURNKEY IN 7–14 DAYS
      </div>
    </div>
  );
};

// ==========================================
// LANDSCAPE ACT 3
// ==========================================
const LandscapeAct3: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const enterSpring = spring({ frame, fps, config: { damping: 15, stiffness: 120 } });
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 90px', gap: 60, zIndex: 20, opacity: enterSpring }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 12.5, fontFamily: "'JetBrains Mono', monospace", color: '#0284C7', fontWeight: 800, letterSpacing: '0.18em', marginBottom: 8 }}>
          PHASE 02 // INBOUND DEMAND
        </div>
        <div style={{ fontSize: 58, fontWeight: 900, textTransform: 'uppercase', color: '#0F172A', lineHeight: 1.05, marginBottom: 14 }}>
          NEXT: WE BUILD{' '}
          <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#0284C7' }}>
            The Front Door.
          </span>
        </div>
        <div style={{ fontSize: 18, color: '#64748B', lineHeight: 1.5, marginBottom: 20 }}>
          High-converting modern websites with interactive AI concierges and ROI calculators—optimized for AI search (GEO).
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13.5, color: '#0284C7', fontWeight: 700 }}>
          ● CITED BY CHATGPT & PERPLEXITY • +280% CONVERSION LIFT
        </div>
      </div>
      <div style={{ flex: 1.2, height: 420, borderRadius: 24, overflow: 'hidden', border: '2px solid rgba(99, 102, 241, 0.25)', boxShadow: '0 25px 60px rgba(0, 0, 0, 0.08)' }}>
        <Img src={staticFile('proj-automation-hub-1.png')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </div>
  );
};

// ==========================================
// LANDSCAPE ACT 4
// ==========================================
const LandscapeAct4: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const enterSpring = spring({ frame, fps, config: { damping: 15, stiffness: 120 } });
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 90px', zIndex: 20, opacity: enterSpring }}>
      <div style={{ fontSize: 12.5, fontFamily: "'JetBrains Mono', monospace", color: '#6366F1', fontWeight: 800, letterSpacing: '0.18em', marginBottom: 8 }}>
        PHASE 03 & 04 // DATA & STRATEGY
      </div>
      <div style={{ fontSize: 58, fontWeight: 900, textTransform: 'uppercase', color: '#0F172A', marginBottom: 24 }}>
        THEN: WE LOCK IN{' '}
        <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#6366F1' }}>
          Your Revenue Brain.
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, width: '100%', maxWidth: 1200, marginBottom: 24 }}>
        <div style={{ padding: '28px', borderRadius: 24, backgroundColor: '#FFFFFF', border: '1px solid rgba(15, 23, 42, 0.08)', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)', display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 75, height: 75 }}><Img src={staticFile('about-3d-data-cube.png')} style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
          <div>
            <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: '#6366F1', fontWeight: 800 }}>PILLAR 03 // CRM HUBS</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#0F172A', margin: '4px 0' }}>BESPOKE CRM HUBS</div>
            <div style={{ fontSize: 13.5, color: '#64748B' }}>Zero dropped leads. Real-time enrichment & Slack sync.</div>
          </div>
        </div>
        <div style={{ padding: '28px', borderRadius: 24, backgroundColor: '#FFFFFF', border: '1px solid rgba(15, 23, 42, 0.08)', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)', display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 75, height: 75 }}><Img src={staticFile('about-3d-ai-brain.png')} style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
          <div>
            <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: '#4F46E5', fontWeight: 800 }}>PILLAR 04 // 1-ON-1 STRATEGY</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#0F172A', margin: '4px 0' }}>EXECUTIVE ADVISORY</div>
            <div style={{ fontSize: 13.5, color: '#64748B' }}>Direct architecture with Rusan. Stop SaaS waste.</div>
          </div>
        </div>
      </div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13.5, color: '#10B981', fontWeight: 700 }}>
        ● DIRECT FOUNDER ACCESS • NO THEORETICAL FLUFF • PRODUCTION CODE
      </div>
    </div>
  );
};

// ==========================================
// LANDSCAPE ACT 5
// ==========================================
const LandscapeAct5: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
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
  const beatSpring = spring({ frame: frame % 16, fps, config: { damping: 10, stiffness: 220 } });
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 30, transform: `scale(${0.92 + beatSpring * 0.08})` }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 22, fontWeight: 800, color, letterSpacing: '0.22em', marginBottom: 14 }}>{sub}</div>
      <div style={{ fontSize: 105, fontWeight: 900, textTransform: 'uppercase', color }}>{word}</div>
      <div style={{ marginTop: 18, fontFamily: "'Instrument Serif', serif", fontSize: 36, fontStyle: 'italic', color: '#475569' }}>“Stop running your business manually.”</div>
    </div>
  );
};

// ==========================================
// LANDSCAPE ACT 6
// ==========================================
const LandscapeAct6: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const climaxSpring = spring({ frame, fps, config: { damping: 14, stiffness: 110 } });
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 80px', textAlign: 'center', zIndex: 30, opacity: climaxSpring }}>
      <div style={{ fontSize: 40, color: '#0F172A', marginBottom: 4 }}>✦</div>
      <div style={{ fontSize: 125, fontWeight: 900, textTransform: 'uppercase', color: '#0F172A', lineHeight: 0.9 }}>
        AXIOM
      </div>
      <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 42, fontStyle: 'italic', color: '#6366F1', marginBottom: 14 }}>
        — by Rusan
      </div>
      <div style={{ fontSize: 25, fontWeight: 800, color: '#0F172A', marginBottom: 6 }}>
        Automate the Work.{' '}
        <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400, color: '#4F46E5' }}>
          Amplify the Business.
        </span>
      </div>
      <div style={{ fontSize: 16, color: '#64748B', maxWidth: 720, marginBottom: 22 }}>
         Practical AI automations, website design, CRM builds, and direct AI consultancy.
      </div>
      <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
        {['AI AUTOMATIONS', 'WEBSITE DESIGN', 'CRM BUILDS', 'AI CONSULTANCY'].map((svc) => (
          <div key={svc} style={{ padding: '6px 14px', borderRadius: 10, backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)', fontSize: 11, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: '#334155' }}>
            {svc}
          </div>
        ))}
      </div>
      <div style={{ padding: '15px 42px', borderRadius: 36, backgroundColor: '#0F172A', boxShadow: '0 12px 30px rgba(15, 23, 42, 0.2)', fontSize: 19, fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <span>axiombyrusan.vercel.app</span>
        <span style={{ color: '#818CF8' }}>➔</span>
      </div>
      <div style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: '#64748B', letterSpacing: '0.12em' }}>
        BOOK A COMPLIMENTARY 20-MIN WORKFLOW DISCOVERY WITH RUSAN
      </div>
    </div>
  );
};

// ==========================================
// LANDSCAPE AUDIO TRACK
// ==========================================
const LandscapeAudioTrack: React.FC = () => {
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
      <Sequence from={12} durationInFrames={30}><Audio src={staticFile('sfx/sfx_laser_cut.wav')} volume={0.6} /></Sequence>
      <Sequence from={24} durationInFrames={40}><Audio src={staticFile('sfx/sfx_sub_impact.wav')} volume={0.7} /></Sequence>
      <Sequence from={72} durationInFrames={35}><Audio src={staticFile('sfx/sfx_whoosh_pro.wav')} volume={0.5} /></Sequence>
      <Sequence from={74} durationInFrames={20}><Audio src={staticFile('sfx/sfx_snap.wav')} volume={0.4} /></Sequence>
      <Sequence from={145} durationInFrames={35}><Audio src={staticFile('sfx/sfx_whoosh_pro.wav')} volume={0.5} /><Audio src={staticFile('sfx/sfx_shimmer_pro.wav')} volume={0.45} /></Sequence>
      <Sequence from={220} durationInFrames={35}><Audio src={staticFile('sfx/sfx_whoosh_soft.wav')} volume={0.45} /><Audio src={staticFile('sfx/sfx_snap.wav')} volume={0.45} /></Sequence>
      <Sequence from={336} durationInFrames={20}><Audio src={staticFile('sfx/sfx_glitch_hit.wav')} volume={0.6} /></Sequence>
      <Sequence from={352} durationInFrames={20}><Audio src={staticFile('sfx/sfx_glitch_hit.wav')} volume={0.65} /></Sequence>
      <Sequence from={368} durationInFrames={20}><Audio src={staticFile('sfx/sfx_sub_impact.wav')} volume={0.75} /></Sequence>
      <Sequence from={384} durationInFrames={60}><Audio src={staticFile('sfx/sfx_sub_impact.wav')} volume={0.8} /><Audio src={staticFile('sfx/sfx_whoosh_pro.wav')} volume={0.6} /></Sequence>
    </>
  );
};
