import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

export const VibeCodingTerminal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active from frame 405 to 465 (13.5s to 15.5s) — Synchronized with "how to do vibe coding"
  const startFrame = 405;
  const endFrame = 465;

  if (frame < startFrame || frame > endFrame) return null;

  const localFrame = frame - startFrame;
  const enterSpring = spring({
    frame: localFrame,
    fps,
    config: { damping: 24, stiffness: 65 },
  });

  const exitProgress = interpolate(localFrame, [48, 60], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Streaming code lines reveal — 4 punchy, instantly readable lines
  const codeLines = [
    { text: 'import { createAgent } from "@ai/pipeline";', color: '#C084FC' },
    { text: 'const clientOps = await createAgent({ model: "sonnet" });', color: '#60A5FA' },
    { text: 'await clientOps.attachTools([crmSync, autoInvoice]);', color: '#34D399' },
    { text: 'await clientOps.deployProduction(); // ⚡ Live in 420ms', color: '#10B981' },
  ];

  // Steady, readable typing speed (9 frames / line = 0.3s per line)
  const revealedCount = Math.min(codeLines.length, Math.floor(localFrame / 9) + 1);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        backgroundColor: '#030712',
        zIndex: 25,
        opacity: enterSpring * exitProgress,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 50px',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      {/* Top Category Tag */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginBottom: 30,
        }}
      >
        <span
          style={{
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#38BDF8',
            backgroundColor: 'rgba(56, 189, 248, 0.12)',
            padding: '8px 20px',
            borderRadius: 30,
            border: '1px solid rgba(56, 189, 248, 0.3)',
          }}
        >
          ⚡ Technique 01: Vibe Coding
        </span>
      </div>

      {/* Modern IDE Window */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#0F172A',
          borderRadius: 24,
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(56, 189, 248, 0.15)',
          overflow: 'hidden',
        }}
      >
        {/* IDE Window Title Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 24px',
            backgroundColor: '#1E293B',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div style={{ display: 'flex', gap: 10 }}>
            <span style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: '#EF4444' }} />
            <span style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: '#F59E0B' }} />
            <span style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: '#10B981' }} />
          </div>
          <span style={{ fontSize: 16, color: '#94A3B8', fontWeight: 600, fontFamily: 'monospace' }}>
            agent_deployment.ts — Cursor Pro
          </span>
          <span style={{ fontSize: 14, color: '#38BDF8', fontWeight: 700 }}>AI SYNTHESIS ACTIVE</span>
        </div>

        {/* Code Body with Syntax Highlighting */}
        <div
          style={{
            padding: '36px 32px',
            fontFamily: '"SF Mono", "Fira Code", monospace',
            fontSize: 26,
            lineHeight: 1.8,
            backgroundColor: '#090D16',
          }}
        >
          {codeLines.slice(0, revealedCount).map((line, idx) => (
            <div key={idx} style={{ display: 'flex', gap: 20 }}>
              <span style={{ color: '#475569', userSelect: 'none', width: 30, textAlign: 'right' }}>
                {idx + 1}
              </span>
              <span style={{ color: line.color, fontWeight: 500 }}>
                {line.text}
              </span>
            </div>
          ))}
          {/* Blinking Cursor */}
          {localFrame % 10 < 6 && (
            <span
              style={{
                display: 'inline-block',
                width: 12,
                height: 24,
                backgroundColor: '#38BDF8',
                marginLeft: 50,
                marginTop: 8,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
