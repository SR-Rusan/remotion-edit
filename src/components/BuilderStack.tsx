import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

const FONT_FAMILY = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Helvetica, Arial, sans-serif';

export const BuilderStack: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active window: frame 425 to 680 (~14.1s to 22.6s)
  const startFrame = 425;
  const endFrame = 680;

  if (frame < startFrame || frame > endFrame) {
    return null;
  }

  const exitFrames = 15;
  const isExiting = frame > endFrame - exitFrames;
  const exitProgress = isExiting
    ? interpolate(frame, [endFrame - exitFrames, endFrame], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      })
    : 0;

  // Stagger cues
  // Item 1: Vibe coding (frame 425)
  const spring1 = spring({
    frame: Math.max(0, frame - 425),
    fps,
    config: { damping: 13, stiffness: 130 },
  });

  // Item 2: Automations (frame 485)
  const hasItem2 = frame >= 485;
  const spring2 = hasItem2
    ? spring({
        frame: frame - 485,
        fps,
        config: { damping: 13, stiffness: 130 },
      })
    : 0;

  // Item 3: Animated Websites (frame 595)
  const hasItem3 = frame >= 595;
  const spring3 = hasItem3
    ? spring({
        frame: frame - 595,
        fps,
        config: { damping: 13, stiffness: 130 },
      })
    : 0;

  const cardOpacity = (1 - exitProgress);
  const cardTranslateX = -exitProgress * 80;

  return (
    <div
      style={{
        position: 'absolute',
        left: 90,
        top: 200,
        width: 480,
        opacity: cardOpacity,
        transform: `translateX(${cardTranslateX}px)`,
        fontFamily: FONT_FAMILY,
        zIndex: 40,
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(11, 18, 34, 0.90)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: 20,
          border: '1px solid rgba(255, 255, 255, 0.14)',
          boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.6), 0 0 25px rgba(6, 182, 212, 0.15)',
          padding: '24px 26px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#06B6D4' }} />
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.6)' }}>
              Skills in Your Arsenal
            </span>
          </div>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#38BDF8', backgroundColor: 'rgba(56, 189, 248, 0.12)', padding: '3px 8px', borderRadius: 10 }}>
            Trained Capabilities
          </span>
        </div>

        {/* Skill 1 */}
        <div
          style={{
            backgroundColor: 'rgba(6, 182, 212, 0.10)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            borderRadius: 12,
            padding: '12px 16px',
            marginBottom: 10,
            opacity: spring1,
            transform: `translateX(${interpolate(spring1, [0, 1], [-30, 0])}px)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22 }}>⚡</span>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#FFFFFF' }}>Vibe Coding</div>
              <div style={{ fontSize: 13, color: 'rgba(255, 255, 255, 0.6)', fontWeight: 400 }}>Cursor, Claude & Rapid Prototyping</div>
            </div>
          </div>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#22D3EE' }}>LEARNED</span>
        </div>

        {/* Skill 2 */}
        {hasItem2 && (
          <div
            style={{
              backgroundColor: 'rgba(168, 85, 247, 0.10)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              borderRadius: 12,
              padding: '12px 16px',
              marginBottom: 10,
              opacity: spring2,
              transform: `translateX(${interpolate(spring2, [0, 1], [-30, 0])}px)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 22 }}>⚙️</span>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: '#FFFFFF' }}>AI Automations</div>
                <div style={{ fontSize: 13, color: 'rgba(255, 255, 255, 0.6)', fontWeight: 400 }}>n8n, Make & Autonomous Agents</div>
              </div>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#C084FC' }}>LEARNED</span>
          </div>
        )}

        {/* Skill 3 */}
        {hasItem3 && (
          <div
            style={{
              backgroundColor: 'rgba(236, 72, 153, 0.10)',
              border: '1px solid rgba(236, 72, 153, 0.3)',
              borderRadius: 12,
              padding: '12px 16px',
              opacity: spring3,
              transform: `translateX(${interpolate(spring3, [0, 1], [-30, 0])}px)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 22 }}>✨</span>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: '#FFFFFF' }}>Animated Websites</div>
                <div style={{ fontSize: 13, color: 'rgba(255, 255, 255, 0.6)', fontWeight: 400 }}>High-Converting Motion UI</div>
              </div>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#F472B6' }}>LEARNED</span>
          </div>
        )}
      </div>
    </div>
  );
};
