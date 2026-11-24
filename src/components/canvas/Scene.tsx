"use client";

import React, { Suspense, useCallback, useSyncExternalStore } from "react";
import { Canvas } from "@react-three/fiber";
import { Starfield } from "./Starfield";
import { NeuralConstellation } from "./NeuralConstellation";
import { NebulaGlow } from "./NebulaGlow";

export function SpaceScene() {
  const subscribe = useCallback((callback: () => void) => {
    window.addEventListener("resize", callback);
    return () => window.removeEventListener("resize", callback);
  }, []);
  const getSnapshot = useCallback(() => window.innerWidth < 768, []);
  const isMobile = useSyncExternalStore(subscribe, getSnapshot, () => false);

  return (
    <div className="fixed inset-0 -z-10 bg-[#030611] pointer-events-none transition-opacity duration-1000">
      {/* Background Radial Glow Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-[#030611]/80 to-[#020308] opacity-90" />

      {/* Cyberpunk Grid Overlay (Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f5ff06_1px,transparent_1px),linear-gradient(to_bottom,#00f5ff06_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-30" />

      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        dpr={isMobile ? [1, 1] : [1, 1.5]}
        gl={{
          antialias: !isMobile,
          powerPreference: "high-performance",
          alpha: true,
        }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <NebulaGlow />
          <Starfield count={isMobile ? 600 : 1400} />
          <NeuralConstellation count={isMobile ? 50 : 110} />
        </Suspense>
      </Canvas>
    </div>
  );
}
