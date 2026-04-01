"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

function AnimatedOrb() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    }
    
    // Dynamic Color Shifting Logic
    if (materialRef.current) {
      const time = state.clock.getElapsedTime();
      const color1 = new THREE.Color("#CC5500"); // Burnt Orange
      const color2 = new THREE.Color("#E2725B"); // Terracotta
      const color3 = new THREE.Color("#FFFFFF"); // Active White
      
      // Smoothly interpolate between colors based on time
      const phase = (Math.sin(time * 0.5) + 1) / 2;
      const finalColor = phase > 0.5 
        ? color1.clone().lerp(color3, (phase - 0.5) * 2)
        : color2.clone().lerp(color1, phase * 2);
        
      materialRef.current.color.copy(finalColor);
    }
  });

  return (
    <Float speed={5} rotationIntensity={2} floatIntensity={3}>
      <Sphere ref={sphereRef} args={[1, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          ref={materialRef}
          speed={4}
          distort={0.6}
          radius={1}
          metalness={0.9}
          roughness={0.05}
          emissiveIntensity={0.5}
        />
      </Sphere>
    </Float>
  );
}

export function FloatingOrb() {
  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-center group">
      <div className="relative h-44 w-44 cursor-pointer transition-transform hover:scale-110 active:scale-95 sm:h-64 sm:w-64">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={4} />
          <pointLight position={[-10, -10, -10]} intensity={3} />
          <AnimatedOrb />
        </Canvas>
        
        {/* Multi-layered attention-grabbing glow */}
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute inset-0 -z-10 rounded-full bg-burnt-orange/30 blur-[80px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            delay: 1,
            ease: "easeInOut" 
          }}
          className="absolute inset-0 -z-20 rounded-full bg-terracotta/20 blur-[120px]" 
        />
      </div>

      {/* Label Under Orb */}
      <motion.div
        animate={{ 
          y: [0, -8, 0],
          boxShadow: ["0 0 10px rgba(204,85,0,0.2)", "0 0 30px rgba(204,85,0,0.5)", "0 0 10px rgba(204,85,0,0.2)"]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="mt-6 rounded-full border border-burnt-orange/40 bg-burnt-orange/20 px-8 py-3 backdrop-blur-xl shadow-2xl"
      >
        <span className="text-[14px] font-black tracking-[0.4em] text-white uppercase drop-shadow-lg">
          TALK TO ME
        </span>
      </motion.div>
    </div>
  );
}
