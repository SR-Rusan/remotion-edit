import React from 'react';
import { OffthreadVideo, staticFile, useCurrentFrame, interpolate } from 'remotion';
import { HookHero } from './components/HookHero';
import { VisualIdeaCloud } from './components/VisualIdeaCloud';
import { VibeCodingTerminal } from './components/VibeCodingTerminal';
import { AutomationsWorkflowSplit } from './components/AutomationsWorkflowSplit';
import { AnimatedWebsitesShowcase } from './components/AnimatedWebsitesShowcase';
import { RevenueCliff } from './components/RevenueCliff';
import { CalendarSketchAnchor } from './components/CalendarSketchAnchor';
import { ConsultantDossier } from './components/ConsultantDossier';
import { DualRoiEngine } from './components/DualRoiEngine';
import { IdentityShift3D } from './components/IdentityShift3D';
import { OutroTeaser } from './components/OutroTeaser';
import { Captions } from './components/Captions';
import { AudioMixer } from './components/AudioMixer';

export const MainComposition: React.FC = () => {
  const frame = useCurrentFrame();

  // Dynamic camera scale with intentional editorial multi-cam punch at talking-head cut (frame 1544)
  let cameraScale = 1.0;
  if (frame < 240) {
    cameraScale = interpolate(frame, [0, 240], [1.0, 1.04], { extrapolateRight: 'clamp' });
  } else if (frame < 940) {
    cameraScale = interpolate(frame, [715, 940], [1.01, 1.05], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  } else if (frame < 1544) {
    cameraScale = interpolate(frame, [1440, 1543], [1.01, 1.03], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  } else if (frame < 1820) {
    // Intentional multi-cam punch-in at frame 1544 (+6% punch to disguise cut seamlessly)
    cameraScale = interpolate(frame, [1544, 1820], [1.08, 1.11], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  } else {
    cameraScale = 1.05;
  }

  // Dynamic Y translation during split-screen (frames 455-535) to frame speaker in lower 45%
  const baseVideoTop = interpolate(
    frame,
    [450, 468, 520, 536],
    [0, 380, 380, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <div
      style={{
        flex: 1,
        width: 1080,
        height: 1920,
        backgroundColor: '#000000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 1. Base Layer: Centered High-Res Vertical Portrait Talking Head */}
      <div
        style={{
          position: 'absolute',
          top: baseVideoTop,
          left: 0,
          width: 1080,
          height: 1920,
          transform: `scale(${cameraScale})`,
          transformOrigin: '50% 40%',
          transition: 'top 0.2s ease',
        }}
      >
        <OffthreadVideo
          src={staticFile('cleaned_source.mp4')}
          style={{
            width: 3413,
            height: 1920,
            position: 'absolute',
            left: -1166.5,
            top: 0,
            objectFit: 'cover',
          }}
        />
        {/* Subtle cinematic gradient vignette at top & bottom */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 20%, transparent 70%, rgba(0,0,0,0.75) 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* 2. Visual Storytelling & Metaphor Layers */}
      <HookHero />
      <VisualIdeaCloud />
      <VibeCodingTerminal />
      <AutomationsWorkflowSplit />
      <AnimatedWebsitesShowcase />
      <RevenueCliff />
      <CalendarSketchAnchor />
      <ConsultantDossier />
      <DualRoiEngine />
      <IdentityShift3D />
      <OutroTeaser />

      {/* 3. Word-Level Dynamic Highlighted Captions */}
      <Captions />

      {/* 4. Complete Audio Mixing Layer (Ducked Music + Synchronized SFX) */}
      <AudioMixer />
    </div>
  );
};
