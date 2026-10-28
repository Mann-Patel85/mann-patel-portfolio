"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface StarfieldProps {
  count?: number;
}

export function Starfield({ count = 1500 }: StarfieldProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sz = new Float32Array(count);

    const colorPalette = [
      new THREE.Color("#ffffff"),
      new THREE.Color("#00f5ff"),
      new THREE.Color("#b794f4"),
      new THREE.Color("#e0e7ff"),
      new THREE.Color("#7000ff"),
    ];

    for (let i = 0; i < count; i++) {
      const radius = 25 + Math.random() * 45;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;

      const baseColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i * 3] = baseColor.r;
      col[i * 3 + 1] = baseColor.g;
      col[i * 3 + 2] = baseColor.b;

      sz[i] = Math.random() * 2.2 + 0.4;
    }

    return [pos, col, sz];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.02;
    pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.05;

    // Mouse subtle parallax
    const targetX = state.pointer.x * 0.4;
    const targetY = state.pointer.y * 0.4;
    pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.03;
    pointsRef.current.position.y += (targetY - pointsRef.current.position.y) * 0.03;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
