import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

export const AutomationsWorkflowSplit: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active frames 455 to 535 (15.1s to 17.8s) — Synchronized with "how to do mild automation"
  const startFrame = 455;
  const endFrame = 535;

  if (frame < startFrame || frame > endFrame) return null;

  const localFrame = frame - startFrame;
  const enterSpring = spring({
    frame: localFrame,
    fps,
    config: { damping: 24, stiffness: 65 },
  });

  const exitProgress = interpolate(localFrame, [62, 78], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Staggered node entrance springs (Node 1 -> Node 2 -> Node 3 narrative flow)
  const node1Spring = spring({
    frame: Math.max(0, localFrame - 8),
    fps,
    config: { damping: 20, stiffness: 70 },
  });

  const node2Spring = spring({
    frame: Math.max(0, localFrame - 22),
    fps,
    config: { damping: 20, stiffness: 70 },
  });

  const node3Spring = spring({
    frame: Math.max(0, localFrame - 36),
    fps,
    config: { damping: 20, stiffness: 70 },
  });

  // Animated pulse progress along the pipeline
  const pulse1 = (localFrame * 4) % 100;
  const pulse2 = ((localFrame * 4) + 50) % 100;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1056,
        backgroundColor: '#0B132B',
        zIndex: 26,
        opacity: enterSpring * exitProgress,
        transform: `translateY(${interpolate(enterSpring, [0, 1], [-60, 0])}px)`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '80px 50px 40px',
        borderBottom: '4px solid #10B981',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(16, 185, 129, 0.3)',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: 18, color: '#10B981', fontWeight: 800, letterSpacing: '0.15em' }}>
            PIPELINE ARCHITECTURE
          </span>
          <h3 style={{ fontSize: 36, color: '#FFFFFF', fontWeight: 900, margin: '6px 0 0' }}>
            Autonomous Business Workflows
          </h3>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            padding: '8px 16px',
            borderRadius: 20,
            border: '1px solid #10B981',
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: '#10B981',
              boxShadow: '0 0 10px #10B981',
            }}
          />
          <span style={{ color: '#10B981', fontSize: 16, fontWeight: 700 }}>ACTIVE ENGINE</span>
        </div>
      </div>

      {/* Pipeline Nodes & SVG Connections */}
      <div style={{ position: 'relative', height: 620, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
        {/* SVG Connection Lines */}
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          <path d="M 490 85 L 490 225" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="4" strokeDasharray="8 8" />
          <path d="M 490 295 L 490 435" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="4" strokeDasharray="8 8" />

          {/* Animated Data Pulses */}
          <circle cx="490" cy={85 + (pulse1 / 100) * 140} r="7" fill="#34D399" filter="drop-shadow(0 0 8px #34D399)" />
          <circle cx="490" cy={295 + (pulse2 / 100) * 140} r="7" fill="#38BDF8" filter="drop-shadow(0 0 8px #38BDF8)" />
        </svg>

        {/* Node 1 */}
        <div
          style={{
            transform: `scale(${node1Spring}) translateY(${interpolate(node1Spring, [0, 1], [20, 0])}px)`,
            opacity: node1Spring,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            borderRadius: 20,
            padding: '20px 24px',
            zIndex: 2,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              backgroundColor: '#38BDF822',
              border: '1px solid #38BDF8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 26,
            }}
          >
            📥
          </div>
          <div>
            <div style={{ fontSize: 14, color: '#38BDF8', fontWeight: 800 }}>TRIGGER</div>
            <div style={{ fontSize: 24, color: '#FFFFFF', fontWeight: 800 }}>Stripe / Webhook Ingestion</div>
          </div>
        </div>

        {/* Node 2 */}
        <div
          style={{
            transform: `scale(${node2Spring}) translateY(${interpolate(node2Spring, [0, 1], [20, 0])}px)`,
            opacity: node2Spring,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '1.5px solid #10B98166',
            borderRadius: 20,
            padding: '20px 24px',
            zIndex: 2,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              backgroundColor: '#10B98122',
              border: '1px solid #10B981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 26,
            }}
          >
            🧠
          </div>
          <div>
            <div style={{ fontSize: 14, color: '#10B981', fontWeight: 800 }}>AGENTIC EXTRACTION</div>
            <div style={{ fontSize: 24, color: '#FFFFFF', fontWeight: 800 }}>LLM Structured Data Synthesis</div>
          </div>
        </div>

        {/* Node 3 */}
        <div
          style={{
            transform: `scale(${node3Spring}) translateY(${interpolate(node3Spring, [0, 1], [20, 0])}px)`,
            opacity: node3Spring,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            borderRadius: 20,
            padding: '20px 24px',
            zIndex: 2,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              backgroundColor: '#F59E0B22',
              border: '1px solid #F59E0B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 26,
            }}
          >
            🚀
          </div>
          <div>
            <div style={{ fontSize: 14, color: '#F59E0B', fontWeight: 800 }}>AUTOMATED ACTION</div>
            <div style={{ fontSize: 24, color: '#FFFFFF', fontWeight: 800 }}>CRM Sync & Client Provisioning</div>
          </div>
        </div>
      </div>
    </div>
  );
};
