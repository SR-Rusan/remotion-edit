import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

interface IdeaNode {
  title: string;
  category: string;
  color: string;
  icon: string;
  x: number;
  y: number;
  delay: number;
}

const NODES: IdeaNode[] = [
  // Wave 1: Development & Systems
  { title: 'Vibe Coding', category: 'DEV', color: '#38BDF8', icon: '⚡', x: 120, y: 420, delay: 15 },
  { title: 'AI Agents', category: 'SYSTEM', color: '#A855F7', icon: '🤖', x: 620, y: 380, delay: 15 },
  // Wave 2: Operations & Interfaces
  { title: 'Mild Automations', category: 'OPS', color: '#10B981', icon: '⚙️', x: 200, y: 720, delay: 45 },
  { title: 'Animated Websites', category: 'UI/UX', color: '#F59E0B', icon: '✨', x: 580, y: 840, delay: 45 },
  // Wave 3: Data & Product Architecture
  { title: 'RAG Pipelines', category: 'DATA', color: '#EC4899', icon: '🧠', x: 160, y: 1140, delay: 75 },
  { title: 'Micro SaaS Ideas', category: 'PRODUCT', color: '#6366F1', icon: '💡', x: 600, y: 1200, delay: 75 },
];

export const VisualIdeaCloud: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active from frame 240 to 410 (8.0s to 13.6s)
  const startFrame = 240;
  const endFrame = 410;

  if (frame < startFrame || frame > endFrame) return null;

  const localFrame = frame - startFrame;
  const enterProgress = interpolate(localFrame, [0, 25], [0, 1], { extrapolateRight: 'clamp' });
  const exitProgress = interpolate(localFrame, [endFrame - startFrame - 25, endFrame - startFrame], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        backgroundColor: 'rgba(5, 8, 22, 0.94)',
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        zIndex: 25,
        opacity: enterProgress * exitProgress,
        overflow: 'hidden',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      {/* Background Grid Pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Section Header */}
      <div
        style={{
          position: 'absolute',
          top: 160,
          left: 60,
          right: 60,
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#94A3B8',
          }}
        >
          The Knowledge Trap
        </span>
        <h2
          style={{
            fontSize: 48,
            fontWeight: 900,
            color: '#FFFFFF',
            marginTop: 8,
            letterSpacing: '-0.02em',
          }}
        >
          Overloaded with Ideas
        </h2>
      </div>

      {/* SVG Connecting Web of Fibers */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 1080,
          height: 1920,
          pointerEvents: 'none',
        }}
      >
        <line x1="280" y1="480" x2="720" y2="440" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="3" strokeDasharray="6 6" />
        <line x1="280" y1="480" x2="350" y2="780" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="3" strokeDasharray="6 6" />
        <line x1="720" y1="440" x2="700" y2="900" stroke="rgba(245, 158, 11, 0.25)" strokeWidth="3" strokeDasharray="6 6" />
        <line x1="350" y1="780" x2="700" y2="900" stroke="rgba(236, 72, 153, 0.25)" strokeWidth="3" strokeDasharray="6 6" />
        <line x1="350" y1="780" x2="300" y2="1200" stroke="rgba(168, 85, 247, 0.25)" strokeWidth="3" strokeDasharray="6 6" />
        <line x1="700" y1="900" x2="720" y2="1260" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="3" strokeDasharray="6 6" />
      </svg>

      {/* Interactive Glowing Idea Nodes */}
      {NODES.map((node, i) => {
        const s = spring({
          frame: Math.max(0, localFrame - node.delay),
          fps,
          config: { damping: 22, stiffness: 50 },
        });

        // Floating hover motion
        const floatY = Math.sin((localFrame + i * 20) / 15) * 8;

        return (
          <div
            key={node.title}
            style={{
              position: 'absolute',
              left: node.x,
              top: node.y,
              transform: `scale(${s}) translateY(${floatY}px)`,
              opacity: s,
              width: 360,
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              border: `1.5px solid ${node.color}55`,
              borderRadius: 24,
              padding: '20px 24px',
              boxShadow: `0 15px 35px rgba(0, 0, 0, 0.5), 0 0 30px ${node.color}22`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ fontSize: 32 }}>{node.icon}</span>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  color: node.color,
                  backgroundColor: `${node.color}18`,
                  padding: '4px 10px',
                  borderRadius: 12,
                }}
              >
                {node.category}
              </span>
            </div>
            <div
              style={{
                fontSize: 26,
                fontWeight: 800,
                color: '#FFFFFF',
              }}
            >
              {node.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};
