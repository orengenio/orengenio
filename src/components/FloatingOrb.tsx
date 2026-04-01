"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

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
          speed={4}
          distort={0.5}
          radius={1}
          metalness={0.9}
          roughness={0.1}
        />
      </Sphere>
    </Float>
  );
}

export function FloatingOrb() {
  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-center group">
      <div className="relative h-40 w-40 cursor-pointer transition-transform hover:scale-110 active:scale-95 sm:h-56 sm:w-56">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={3} />
          <pointLight position={[-10, -10, -10]} intensity={2} />
          <AnimatedOrb />
        </Canvas>
        
        {/* Stronger Pulsating Glow */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute inset-0 -z-10 rounded-full bg-burnt-orange/40 blur-[80px]" 
        />
      </div>

      {/* Label Moved Under Orb */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="mt-4 rounded-full border border-burnt-orange/30 bg-burnt-orange/10 px-6 py-2 backdrop-blur-md"
      >
        <span className="text-[12px] font-black tracking-[0.3em] text-burnt-orange uppercase">
          TALK TO ME
        </span>
      </motion.div>
    </div>
  );
}
