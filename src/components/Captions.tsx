import React from 'react';
import { useCurrentFrame } from 'remotion';
import { CLEANED_PHRASES } from '../cleanedTranscriptData';

export const Captions: React.FC = () => {
  const frame = useCurrentFrame();

  // Find active phrase
  const activePhrase = CLEANED_PHRASES.find(
    (p) => frame >= p.startFrame && frame <= p.endFrame
  );

  if (!activePhrase) return null;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 260,
        left: 0,
        width: 1080,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 45,
        pointerEvents: 'none',
        padding: '0 40px',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.82)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: 24,
          padding: '16px 36px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.7)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 12,
          maxWidth: 920,
        }}
      >
        {activePhrase.words.map((w, i) => {
          const isCurrentWord = frame >= w.startFrame && frame <= w.endFrame;

          return (
            <span
              key={`${w.word}-${i}`}
              style={{
                fontSize: 38,
                fontWeight: 900,
                fontFamily: 'Inter, system-ui, sans-serif',
                letterSpacing: '-0.01em',
                color: isCurrentWord ? '#FDE047' : '#FFFFFF',
                textShadow: isCurrentWord ? '0 0 20px rgba(253, 224, 71, 0.8)' : '0 2px 10px rgba(0,0,0,0.5)',
                transform: isCurrentWord ? 'scale(1.08)' : 'scale(1.0)',
                transition: 'transform 0.08s ease, color 0.08s ease',
                display: 'inline-block',
              }}
            >
              {w.word}
            </span>
          );
        })}
      </div>
    </div>
  );
};
