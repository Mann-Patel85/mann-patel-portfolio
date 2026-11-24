"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useNeural } from "@/context/NeuralContext";

type NeuralCategory = "ml" | "generative" | "backend" | "languages" | "databases" | "tools";

interface NodeData {
  basePos: THREE.Vector3;
  currentPos: THREE.Vector3;
  velocity: THREE.Vector3;
  layer: number;
  category: NeuralCategory;
  pulsePhase: number;
  size: number;
}

export function NeuralConstellation({ count = 120 }: { count?: number }) {
  const { activeCategory } = useNeural();
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Generate neural nodes in layered 3D clusters
  const { nodes } = useMemo(() => {
    const nodeList: NodeData[] = [];
    const catList: NeuralCategory[] = ["ml", "generative", "backend", "languages", "databases", "tools"];
    const sample = (index: number, salt: number) => {
      const value = Math.sin((index + 1) * 127.1 + salt * 311.7) * 43758.5453;
      return value - Math.floor(value);
    };

    for (let i = 0; i < count; i++) {
      const layer = Math.floor((i / count) * catList.length);
      const cat = catList[layer % catList.length];

      // Cluster nodes in a curved 3D manifold
      const u = sample(i, 1) * Math.PI * 2;
      const v = (sample(i, 2) - 0.5) * Math.PI;
      const radius = 6 + sample(i, 3) * 8;

      const x = radius * Math.cos(v) * Math.cos(u) + (layer - 1.5) * 3;
      const y = radius * Math.sin(v) * 0.8 + (sample(i, 4) - 0.5) * 4;
      const z = radius * Math.cos(v) * Math.sin(u) * 0.6 - 2;

      nodeList.push({
        basePos: new THREE.Vector3(x, y, z),
        currentPos: new THREE.Vector3(x, y, z),
        velocity: new THREE.Vector3(0, 0, 0),
        layer,
        category: cat,
        pulsePhase: sample(i, 5) * Math.PI * 2,
        size: 0.15 + sample(i, 6) * 0.25,
      });
    }

    return { nodes: nodeList };
  }, [count]);

  // Buffer geometries for points & lines
  const maxConnections = count * 6;
  const linePositions = useMemo(() => new Float32Array(maxConnections * 2 * 3), [maxConnections]);
  const lineColors = useMemo(() => new Float32Array(maxConnections * 2 * 3), [maxConnections]);
  const pointPositions = useMemo(() => new Float32Array(count * 3), [count]);
  const pointColors = useMemo(() => new Float32Array(count * 3), [count]);

  // Category color mapping
  const categoryColorMap = useMemo<Record<NeuralCategory, THREE.Color>>(
    () => ({
      generative: new THREE.Color("#00f5ff"), // Cyan
      ml: new THREE.Color("#a855f7"), // Purple / Violet
      backend: new THREE.Color("#10b981"), // Emerald
      languages: new THREE.Color("#f59e0b"), // Amber
      databases: new THREE.Color("#38bdf8"),
      tools: new THREE.Color("#fb923c"),
    }),
    []
  );

  const defaultNodeColor = useMemo(() => new THREE.Color("#6366f1"), []);
  const highlightColor = useMemo(() => new THREE.Color("#00ffff"), []);

  // Three.js buffers and node vectors are intentionally updated in-place per frame.
  /* eslint-disable react-hooks/immutability */
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const mouseX = (state.pointer.x * state.viewport.width) / 2;
    const mouseY = (state.pointer.y * state.viewport.height) / 2;
    const mouseVec = new THREE.Vector3(mouseX, mouseY, 0);

    // 1. Update node positions with gentle floating & mouse gravity
    nodes.forEach((node, i) => {
      // Floating oscillation
      const floatX = Math.sin(time * 0.5 + node.pulsePhase) * 0.35;
      const floatY = Math.cos(time * 0.6 + node.pulsePhase) * 0.35;
      const floatZ = Math.sin(time * 0.4 + node.pulsePhase * 1.5) * 0.25;

      const targetPos = new THREE.Vector3(
        node.basePos.x + floatX,
        node.basePos.y + floatY,
        node.basePos.z + floatZ
      );

      // Mouse interaction pull
      const distToMouse = node.currentPos.distanceTo(mouseVec);
      if (distToMouse < 6) {
        const force = (1 - distToMouse / 6) * 0.8;
        targetPos.x += (mouseX - node.currentPos.x) * force * 0.2;
        targetPos.y += (mouseY - node.currentPos.y) * force * 0.2;
      }

      node.currentPos.lerp(targetPos, 0.05);

      // Write to point positions buffer
      pointPositions[i * 3] = node.currentPos.x;
      pointPositions[i * 3 + 1] = node.currentPos.y;
      pointPositions[i * 3 + 2] = node.currentPos.z;

      // Determine color based on activeCategory
      const isHighlighted = activeCategory ? node.category === activeCategory : false;
      const baseCol = categoryColorMap[node.category] || defaultNodeColor;
      
      const r = isHighlighted ? highlightColor.r * 1.3 : baseCol.r * (0.6 + Math.sin(time * 2 + node.pulsePhase) * 0.3);
      const g = isHighlighted ? highlightColor.g * 1.3 : baseCol.g * (0.6 + Math.sin(time * 2 + node.pulsePhase) * 0.3);
      const b = isHighlighted ? highlightColor.b * 1.3 : baseCol.b * (0.6 + Math.sin(time * 2 + node.pulsePhase) * 0.3);

      pointColors[i * 3] = r;
      pointColors[i * 3 + 1] = g;
      pointColors[i * 3 + 2] = b;
    });

    // 2. Compute dynamic synapses (lines) between near nodes
    let lineIdx = 0;
    const maxDist = 4.2;

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (lineIdx >= maxConnections) break;

        const nodeA = nodes[i];
        const nodeB = nodes[j];
        const dist = nodeA.currentPos.distanceTo(nodeB.currentPos);

        if (dist < maxDist) {
          const alpha = 1 - dist / maxDist;
          const isLineActive =
            activeCategory && (nodeA.category === activeCategory || nodeB.category === activeCategory);

          const signalPulse = (Math.sin(time * 3 - dist * 2) + 1) * 0.5;
          const intensity = (isLineActive ? 0.9 : 0.25) * alpha * (0.4 + signalPulse * 0.6);

          const colA = categoryColorMap[nodeA.category];
          const colB = categoryColorMap[nodeB.category];

          // Point A
          linePositions[lineIdx * 6] = nodeA.currentPos.x;
          linePositions[lineIdx * 6 + 1] = nodeA.currentPos.y;
          linePositions[lineIdx * 6 + 2] = nodeA.currentPos.z;

          lineColors[lineIdx * 6] = colA.r * intensity;
          lineColors[lineIdx * 6 + 1] = colA.g * intensity;
          lineColors[lineIdx * 6 + 2] = colA.b * intensity;

          // Point B
          linePositions[lineIdx * 6 + 3] = nodeB.currentPos.x;
          linePositions[lineIdx * 6 + 4] = nodeB.currentPos.y;
          linePositions[lineIdx * 6 + 5] = nodeB.currentPos.z;

          lineColors[lineIdx * 6 + 3] = colB.r * intensity;
          lineColors[lineIdx * 6 + 4] = colB.g * intensity;
          lineColors[lineIdx * 6 + 5] = colB.b * intensity;

          lineIdx++;
        }
      }
    }

    // Zero out unused lines
    for (let i = lineIdx; i < maxConnections; i++) {
      linePositions[i * 6] = 0;
      linePositions[i * 6 + 1] = 0;
      linePositions[i * 6 + 2] = 0;
      linePositions[i * 6 + 3] = 0;
      linePositions[i * 6 + 4] = 0;
      linePositions[i * 6 + 5] = 0;
    }

    if (pointsRef.current) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      pointsRef.current.geometry.attributes.color.needsUpdate = true;
    }
    if (linesRef.current) {
      linesRef.current.geometry.attributes.position.needsUpdate = true;
      linesRef.current.geometry.attributes.color.needsUpdate = true;
    }
  });
  /* eslint-enable react-hooks/immutability */

  return (
    <group position={[0, 0, -2]}>
      {/* Synapse Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[lineColors, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      {/* Neuron Nodes */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[pointPositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[pointColors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.22}
          vertexColors
          transparent
          opacity={0.95}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
}
