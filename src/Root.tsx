import React from 'react';
import { Composition } from 'remotion';
import { MainComposition } from './MainComposition';
import { RusanAxiom15s } from './components/RusanAxiom15s';
import { RusanAxiom15sLandscape } from './components/RusanAxiom15sLandscape';
import { AxiomByRusan15sMaster } from './components/AxiomByRusan15sMaster';
import { AxiomByRusan15sMasterLandscape } from './components/AxiomByRusan15sMasterLandscape';
import { AxiomByRusan18sMaster } from './components/AxiomByRusan18sMaster';
import { AxiomByRusan18sMasterLandscape } from './components/AxiomByRusan18sMasterLandscape';
import { Axiom15sFilm } from './components/Axiom15sFilm';
import { Axiom15sFilmLandscape } from './components/Axiom15sFilmLandscape';

export const Root: React.FC = () => {
  return (
    <>
      {/* AXIOM 15-SECOND VERTICAL MOTION DESIGN FILM (AUTHENTIC WEBSITE DIRECTIVE) */}
      <Composition
        id="Axiom-15s-Vertical-Film"
        component={Axiom15sFilm}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="Axiom-15s-Landscape-Film"
        component={Axiom15sFilmLandscape}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* 18.0-SECOND MASTER REELS (BENCHMARK: EV ASTAPOV VIRAL PROMPT 3) */}
      <Composition
        id="Axiom-by-Rusan-18s-Master"
        component={AxiomByRusan18sMaster}
        durationInFrames={540}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="Axiom-by-Rusan-18s-Master-Landscape"
        component={AxiomByRusan18sMasterLandscape}
        durationInFrames={540}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* 15.0-SECOND COMPOSITIONS */}
      <Composition
        id="Axiom-by-Rusan-15s-Master"
        component={AxiomByRusan15sMaster}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="Axiom-by-Rusan-15s-Master-Landscape"
        component={AxiomByRusan15sMasterLandscape}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Rusan-Axiom-15s-Reel"
        component={RusanAxiom15s}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="Rusan-Axiom-15s-Landscape"
        component={RusanAxiom15sLandscape}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="IMG-2079-Edit"
        component={MainComposition}
        durationInFrames={2700}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
