"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function AnimatedOrb() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={sphereRef} args={[1, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="#CC5500" // Burnt Orange
          speed={3}
          distort={0.4}
          radius={1}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
    </Float>
  );
}

export function FloatingOrb() {
  return (
    <div className="fixed bottom-10 right-10 z-[100] h-40 w-40 cursor-pointer transition-transform hover:scale-110 active:scale-95 sm:h-56 sm:w-56">
      {/* Vapi.ai / AI Agent Integration Placeholder */}
      <div className="absolute -top-4 -left-4 z-10 rounded-full bg-foreground/10 px-3 py-1 text-[10px] font-bold tracking-widest text-foreground/50 backdrop-blur-md uppercase">
        AI Core Active
      </div>
      
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <AnimatedOrb />
      </Canvas>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 -z-10 rounded-full bg-burnt-orange/20 blur-[60px]" />
    </div>
  );
}
