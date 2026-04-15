"use client";

import React from "react";
import { motion } from "framer-motion";
import { trackChatStart } from "@/lib/track";

interface FloatingOrbProps {
  onClick: () => void;
  isActive: boolean;
}

export function FloatingOrb({ onClick, isActive }: FloatingOrbProps) {
  const handleActivate = () => {
    if (!isActive) {
      trackChatStart("floating_orb");
    }
    onClick();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleActivate();
    }
  };

  return (
    <div
      className="fixed bottom-8 right-8 z-[100] flex flex-col items-center"
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={isActive ? "Close assistant" : "Open assistant"}
    >
      <motion.div
        animate={isActive ? { scale: 0.75, opacity: 0.7 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative cursor-pointer"
      >
        {/* Outer pulse ring */}
        <motion.div
          animate={
            isActive
              ? { scale: 1, opacity: 0.2 }
              : { scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }
          }
          transition={
            isActive
              ? { duration: 0.3 }
              : { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(204,85,0,0.3) 0%, transparent 70%)",
            margin: -20,
          }}
        />

        {/* Inner pulse ring */}
        <motion.div
          animate={
            isActive
              ? { scale: 1, opacity: 0.2 }
              : { scale: [1, 1.25, 1], opacity: [0.4, 0.1, 0.4] }
          }
          transition={
            isActive
              ? { duration: 0.3 }
              : { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }
          className="absolute inset-0 rounded-full border-2 border-burnt-orange/30"
          style={{ margin: -8 }}
        />

        {/* Main orb */}
        <div
          className="relative w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] rounded-full flex items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #CC5500 0%, #E2725B 50%, #CC5500 100%)",
            boxShadow:
              "0 0 30px rgba(204,85,0,0.4), 0 0 60px rgba(204,85,0,0.15), inset 0 0 20px rgba(255,255,255,0.1)",
          }}
        >
          {isActive ? (
            // X icon when panel is open
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="drop-shadow-lg"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            // Logo when panel is closed
            <img
              src="https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/GLBjK33zIX9uoJqAHz4c8kGhtn0mXn1bNtVzpUNU.png"
              alt="OrenGen"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-lg"
              style={{ filter: "brightness(10)" }}
            />
          )}

          {/* Shimmer overlay */}
          {!isActive && (
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)",
              }}
            />
          )}
        </div>

        {/* Rotating dashed ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ margin: -4, border: "1.5px dashed rgba(204,85,0,0.25)" }}
        />
      </motion.div>

      {/* LIVE AI AGENT label — hidden when panel is open */}
      <AnimatedLabel isActive={isActive} />
    </div>
  );
}

function AnimatedLabel({ isActive }: { isActive: boolean }) {
  return (
    <motion.div
      animate={
        isActive
          ? { y: 0, opacity: 0, scale: 0.8 }
          : { y: [0, -5, 0], opacity: 1, scale: 1 }
      }
      transition={
        isActive
          ? { duration: 0.2 }
          : { duration: 3, repeat: Infinity, ease: "easeInOut" }
      }
      className="mt-4 rounded-full border border-burnt-orange/40 bg-burnt-orange/20 px-6 py-2 backdrop-blur-xl"
      style={{ boxShadow: "0 0 20px rgba(204,85,0,0.2)" }}
    >
      <span className="text-[12px] sm:text-[13px] font-black tracking-[0.3em] text-white uppercase drop-shadow-lg">
        LIVE AI AGENT
      </span>
    </motion.div>
  );
}
