"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function NebulaGlow() {
  const meshRef1 = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);
  const meshRef3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef1.current) {
      meshRef1.current.rotation.z = t * 0.03;
      meshRef1.current.position.x = Math.sin(t * 0.1) * 2;
      meshRef1.current.position.y = Math.cos(t * 0.15) * 1.5;
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.z = -t * 0.025;
      meshRef2.current.position.x = -Math.cos(t * 0.08) * 3;
      meshRef2.current.position.y = Math.sin(t * 0.12) * 2;
    }
    if (meshRef3.current) {
      meshRef3.current.rotation.z = t * 0.015;
    }
  });

  return (
    <group position={[0, 0, -18]}>
      {/* Cyan Nebula Cluster */}
      <mesh ref={meshRef1} position={[-6, 4, -4]}>
        <planeGeometry args={[26, 26]} />
        <meshBasicMaterial
          color="#00e5ff"
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Electric Violet Nebula Cluster */}
      <mesh ref={meshRef2} position={[7, -3, -6]}>
        <planeGeometry args={[30, 30]} />
        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.14}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Deep Magenta Core Glow */}
      <mesh ref={meshRef3} position={[0, 0, -10]}>
        <planeGeometry args={[38, 38]} />
        <meshBasicMaterial
          color="#3b0764"
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
