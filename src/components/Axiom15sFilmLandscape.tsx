import React from 'react';
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  staticFile,
  Audio,
} from 'remotion';

export const Axiom15sFilmLandscape: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const isShake =
    (frame >= 18 && frame <= 26) ||
    (frame >= 60 && frame <= 68) ||
    (frame >= 135 && frame <= 146) ||
    (frame >= 264 && frame <= 272) ||
    (frame >= 390 && frame <= 400);

  let shakeX = 0;
  let shakeY = 0;
  if (isShake) {
    shakeX = Math.sin(frame * 2.8) * 6;
    shakeY = Math.cos(frame * 3.1) * 4;
  }

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

      {/* Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '54px 54px',
          opacity: 0.85,
        }}
      />

      {/* Ambient Glows */}
      <div
        style={{
          position: 'absolute',
          top: -200,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 1400,
          height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
          filter: 'blur(100px)',
          opacity: ambientPulse,
          pointerEvents: 'none',
        }}
      />

      {/* Top Identity Coordinates */}
      <div
        style={{
          position: 'absolute',
          top: 36,
          left: 64,
          right: 64,
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
          <span style={{ fontWeight: 800, color: '#0F172A' }}>AXIOM</span>
          <span style={{ color: '#94A3B8' }}>by Rusan</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#10B981', boxShadow: '0 0 8px rgba(16, 185, 129, 0.8)' }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: '#0F172A' }}>SYSTEMS OPERATIONAL</span>
        </div>
      </div>

      {/* Bottom Identity Coordinates */}
      <div
        style={{
          position: 'absolute',
          bottom: 36,
          left: 64,
          right: 64,
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

      {/* ACT 1: THE HOOK (0.0s - 2.0s) */}
      {frame >= 0 && frame < 60 && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ fontSize: 72, fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', lineHeight: 1.05 }}>
            YOUR BUSINESS
          </div>
          <div style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 92, fontWeight: 400, color: '#0F172A', lineHeight: 1.0, margin: '8px 0' }}>
            doesn't need
          </div>
          <div style={{ fontSize: 84, fontWeight: 900, letterSpacing: '-0.04em', color: '#6366F1', textShadow: '0 10px 40px rgba(99, 102, 241, 0.25)' }}>
            MORE TOOLS.
          </div>
          <div style={{ marginTop: 24, fontSize: 20, color: '#64748B' }}>Adding another subscription won't fix disconnected operations.</div>
        </div>
      )}

      {/* ACT 2: THE PROBLEM (2.0s - 4.5s) */}
      {frame >= 60 && frame < 135 && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ fontSize: 68, fontWeight: 900, color: '#DC2626', marginBottom: 30 }}>
            {frame < 85 ? 'TOO MANY TOOLS.' : frame < 110 ? 'DISCONNECTED SCRIPTS.' : 'SILENT FAILURES.'}
          </div>
          <div style={{ display: 'flex', gap: 24, justifyContent: 'center' }}>
            <div style={{ width: 340, padding: 22, backgroundColor: '#FFFFFF', border: '1.5px solid #FCA5A5', borderRadius: 20, transform: 'rotate(-4deg)', boxShadow: '0 15px 40px rgba(220,38,38,0.1)' }}>
              <div style={{ fontWeight: 700, fontSize: 15 }}>Airtable Sync</div>
              <div style={{ color: '#DC2626', fontSize: 12, fontWeight: 700, marginTop: 4 }}>429 RATE LIMIT EXCEEDED</div>
            </div>
            <div style={{ width: 340, padding: 22, backgroundColor: '#FFFFFF', border: '1.5px solid #FCD34D', borderRadius: 20, transform: 'rotate(5deg)', boxShadow: '0 15px 40px rgba(217,119,6,0.1)' }}>
              <div style={{ fontWeight: 700, fontSize: 15 }}>Zapier Automation</div>
              <div style={{ color: '#D97706', fontSize: 12, fontWeight: 700, marginTop: 4 }}>504 GATEWAY TIMEOUT</div>
            </div>
            <div style={{ width: 340, padding: 22, backgroundColor: '#FFFFFF', border: '1.5px solid #FCA5A5', borderRadius: 20, transform: 'rotate(-2deg)', boxShadow: '0 15px 40px rgba(220,38,38,0.1)' }}>
              <div style={{ fontWeight: 700, fontSize: 15 }}>Slack Dispatch</div>
              <div style={{ color: '#DC2626', fontSize: 12, fontWeight: 700, marginTop: 4 }}>SILENT DATA DROP</div>
            </div>
          </div>
        </div>
      )}

      {/* ACT 3: THE AXIOM SHIFT (4.5s - 7.0s) */}
      {frame >= 135 && frame < 210 && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ fontSize: 62, fontWeight: 900, color: '#0F172A', marginBottom: 8 }}>CHAOS COLLAPSES</div>
          <div style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 78, color: '#6366F1', marginBottom: 36 }}>into connected systems.</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, maxWidth: 1400 }}>
            <div style={{ padding: 20, backgroundColor: '#FFFFFF', borderRadius: 18, border: '1px solid #E2E8F0', textAlign: 'left' }}>
              <div style={{ fontSize: 12, color: '#6366F1', fontWeight: 800 }}>01 // TRIAGE</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginTop: 4 }}>Lead Qualification</div>
              <div style={{ fontSize: 12, color: '#059669', fontWeight: 700, marginTop: 8 }}>✓ &lt; 90s Sync</div>
            </div>
            <div style={{ padding: 20, backgroundColor: '#FFFFFF', borderRadius: 18, border: '1px solid #E2E8F0', textAlign: 'left' }}>
              <div style={{ fontSize: 12, color: '#6366F1', fontWeight: 800 }}>02 // OPERATIONS</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginTop: 4 }}>Client Onboarding</div>
              <div style={{ fontSize: 12, color: '#059669', fontWeight: 700, marginTop: 8 }}>✓ 0 Manual Steps</div>
            </div>
            <div style={{ padding: 20, backgroundColor: '#FFFFFF', borderRadius: 18, border: '1px solid #E2E8F0', textAlign: 'left' }}>
              <div style={{ fontSize: 12, color: '#6366F1', fontWeight: 800 }}>03 // MARKETING</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginTop: 4 }}>Content Repurposing</div>
              <div style={{ fontSize: 12, color: '#059669', fontWeight: 700, marginTop: 8 }}>✓ 6x Assets</div>
            </div>
            <div style={{ padding: 20, backgroundColor: '#FFFFFF', borderRadius: 18, border: '1px solid #E2E8F0', textAlign: 'left' }}>
              <div style={{ fontSize: 12, color: '#6366F1', fontWeight: 800 }}>04 // INTELLIGENCE</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginTop: 4 }}>Internal Knowledge</div>
              <div style={{ fontSize: 12, color: '#059669', fontWeight: 700, marginTop: 8 }}>✓ -80% Friction</div>
            </div>
          </div>
        </div>
      )}

      {/* ACT 4: SHOW THE SYSTEM (7.0s - 10.5s) */}
      {frame >= 210 && frame < 315 && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: 1200, backgroundColor: '#FFFFFF', borderRadius: 24, border: '1px solid #E2E8F0', boxShadow: '0 30px 80px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 28px', backgroundColor: '#FAFAFC', borderBottom: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700 }}>
                <span style={{ backgroundColor: '#0F172A', color: '#FFF', padding: '2px 8px', borderRadius: 6, fontSize: 12 }}>AX</span>
                <span>Axiom Core Dashboard</span>
              </div>
              <div style={{ color: '#059669', fontWeight: 700, fontSize: 13 }}>● 1,248 Tasks Synced</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, padding: 24 }}>
              <div style={{ padding: 18, backgroundColor: '#F8FAFC', borderRadius: 16 }}>
                <div style={{ fontSize: 12, color: '#64748B' }}>Lead Qualification</div>
                <div style={{ fontSize: 22, fontWeight: 800, marginTop: 4 }}>Claude 3.5 AI</div>
                <div style={{ color: '#059669', fontWeight: 700, fontSize: 12, marginTop: 6 }}>✓ &lt; 90s Response</div>
              </div>
              <div style={{ padding: 18, backgroundColor: '#F8FAFC', borderRadius: 16 }}>
                <div style={{ fontSize: 12, color: '#64748B' }}>Client Onboarding</div>
                <div style={{ fontSize: 22, fontWeight: 800, marginTop: 4 }}>Drive + Slack Sync</div>
                <div style={{ color: '#059669', fontWeight: 700, fontSize: 12, marginTop: 6 }}>✓ 100% Automated</div>
              </div>
              <div style={{ padding: 18, backgroundColor: '#F8FAFC', borderRadius: 16 }}>
                <div style={{ fontSize: 12, color: '#64748B' }}>Knowledge Assistant</div>
                <div style={{ fontSize: 22, fontWeight: 800, marginTop: 4 }}>Vector DB Copilot</div>
                <div style={{ color: '#6366F1', fontWeight: 700, fontSize: 12, marginTop: 6 }}>● Active Telemetry</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ACT 5: TRANSFORMATION (10.5s - 13.0s) */}
      {frame >= 315 && frame < 390 && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ fontSize: 78, fontWeight: 900, color: '#0F172A', lineHeight: 1.05 }}>Automate the Work.</div>
          <div style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 94, color: '#6366F1', lineHeight: 1.0, margin: '8px 0 24px' }}>Amplify the Business.</div>
          <div style={{ display: 'flex', gap: 24, maxWidth: 1100 }}>
            <div style={{ flex: 1, padding: 22, backgroundColor: '#FFFFFF', borderRadius: 18, border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: 20 }}>⚡</div>
              <div style={{ fontSize: 16, fontWeight: 800, marginTop: 6 }}>7–14 Day Delivery</div>
              <div style={{ fontSize: 12, color: '#64748B', marginTop: 4 }}>Fast engineering sprints.</div>
            </div>
            <div style={{ flex: 1, padding: 22, backgroundColor: '#FFFFFF', borderRadius: 18, border: '1.5px solid #6366F1' }}>
              <div style={{ fontSize: 20 }}>🔒</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: '#6366F1', marginTop: 6 }}>100% Client Ownership</div>
              <div style={{ fontSize: 12, color: '#64748B', marginTop: 4 }}>Code lives in your accounts.</div>
            </div>
            <div style={{ flex: 1, padding: 22, backgroundColor: '#FFFFFF', borderRadius: 18, border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: 20 }}>🛡</div>
              <div style={{ fontSize: 16, fontWeight: 800, marginTop: 6 }}>Private API Endpoints</div>
              <div style={{ fontSize: 12, color: '#64748B', marginTop: 4 }}>Zero public model training.</div>
            </div>
          </div>
        </div>
      )}

      {/* ACT 6: BRAND REVEAL (13.0s - 15.0s) */}
      {frame >= 390 && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ fontSize: 64, color: '#0F172A', marginBottom: 12 }}>✦</div>
          <div style={{ fontSize: 110, fontWeight: 900, letterSpacing: '-0.04em', color: '#0F172A', lineHeight: 0.95 }}>AXIOM</div>
          <div style={{ fontSize: 24, color: '#64748B', marginTop: 8 }}>by Rusan</div>
          <div style={{ fontSize: 13, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, letterSpacing: '0.2em', color: '#6366F1', marginTop: 20, padding: '8px 24px', backgroundColor: '#EEF2FF', borderRadius: 30 }}>
            AI AUTOMATION & DIGITAL PRESENCE ADVISORY
          </div>
          <div style={{ marginTop: 36, padding: '16px 36px', backgroundColor: '#0F172A', color: '#FFF', borderRadius: 40, fontWeight: 700, fontSize: 16 }}>
            Book a 20-Min Discovery Session ➔
          </div>
        </div>
      )}

      <Audio src={staticFile('axiom_15s_soundtrack.wav')} />
    </div>
  );
};
