"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Vapi from "@vapi-ai/web";

type CallStatus = "idle" | "connecting" | "active";

export function FloatingOrb() {
  const vapiRef = useRef<Vapi | null>(null);
  const [callStatus, setCallStatus] = useState<CallStatus>("idle");
  const [volumeLevel, setVolumeLevel] = useState(0);

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;
    if (!publicKey) {
      console.warn("NEXT_PUBLIC_VAPI_PUBLIC_KEY is not set — voice calls disabled.");
      return;
    }

    const vapi = new Vapi(publicKey);
    vapiRef.current = vapi;

    vapi.on("call-start", () => setCallStatus("active"));
    vapi.on("call-end", () => {
      setCallStatus("idle");
      setVolumeLevel(0);
    });
    vapi.on("volume-level", (level: number) => setVolumeLevel(level));
    vapi.on("error", (err: unknown) => {
      console.error("Vapi error:", err);
      setCallStatus("idle");
      setVolumeLevel(0);
    });

    return () => {
      vapi.stop();
      vapiRef.current = null;
    };
  }, []);

  const toggleCall = useCallback(() => {
    const vapi = vapiRef.current;
    if (!vapi) return;

    if (callStatus === "idle") {
      const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID;
      if (!assistantId) {
        console.warn("NEXT_PUBLIC_VAPI_ASSISTANT_ID is not set.");
        return;
      }
      setCallStatus("connecting");
      vapi.start(assistantId);
    } else {
      vapi.stop();
    }
  }, [callStatus]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleCall();
    }
  };

  const isActive = callStatus === "active";
  const isConnecting = callStatus === "connecting";
  const pulseScale = 1 + volumeLevel * 0.4;

  const label = isConnecting
    ? "CONNECTING..."
    : isActive
      ? "LISTENING..."
      : "TALK TO ME";

  return (
    <div
      className="fixed bottom-8 right-8 z-[100] flex flex-col items-center"
      onClick={toggleCall}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={isActive ? "End voice call" : "Start voice call"}
    >
      <motion.div
        animate={
          isConnecting
            ? { scale: 0.9, opacity: 0.7 }
            : { scale: 1, opacity: 1 }
        }
        transition={{ duration: 0.3 }}
        className="relative cursor-pointer"
      >
        {/* Outer pulse ring — reacts to voice volume when active */}
        <motion.div
          animate={
            isActive
              ? { scale: [1, pulseScale, 1], opacity: [0.4, 0.1, 0.4] }
              : { scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }
          }
          transition={
            isActive
              ? { duration: 0.3 }
              : { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }
          className="absolute inset-0 rounded-full"
          style={{
            background: isActive
              ? "radial-gradient(circle, rgba(34,197,94,0.4) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(204,85,0,0.3) 0%, transparent 70%)",
            margin: -20,
          }}
        />

        {/* Inner pulse ring */}
        <motion.div
          animate={
            isActive
              ? { scale: [1, 1 + volumeLevel * 0.2, 1], opacity: [0.5, 0.2, 0.5] }
              : { scale: [1, 1.25, 1], opacity: [0.4, 0.1, 0.4] }
          }
          transition={
            isActive
              ? { duration: 0.3 }
              : { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }
          className="absolute inset-0 rounded-full border-2"
          style={{
            margin: -8,
            borderColor: isActive
              ? "rgba(34,197,94,0.4)"
              : "rgba(204,85,0,0.3)",
          }}
        />

        {/* Main orb */}
        <div
          className="relative w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] rounded-full flex items-center justify-center overflow-hidden"
          style={{
            background: isActive
              ? "linear-gradient(135deg, #16a34a 0%, #22c55e 50%, #16a34a 100%)"
              : "linear-gradient(135deg, #CC5500 0%, #E2725B 50%, #CC5500 100%)",
            boxShadow: isActive
              ? "0 0 30px rgba(34,197,94,0.4), 0 0 60px rgba(34,197,94,0.15), inset 0 0 20px rgba(255,255,255,0.1)"
              : "0 0 30px rgba(204,85,0,0.4), 0 0 60px rgba(204,85,0,0.15), inset 0 0 20px rgba(255,255,255,0.1)",
          }}
        >
          {/* Logo */}
          <img
            src="https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/GLBjK33zIX9uoJqAHz4c8kGhtn0mXn1bNtVzpUNU.png"
            alt="OrenGen"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-lg"
            style={{ filter: "brightness(10)" }}
          />

          {/* Shimmer overlay */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)",
            }}
          />
        </div>

        {/* Rotating dashed ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: isActive ? 5 : 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            margin: -4,
            border: isActive
              ? "1.5px dashed rgba(34,197,94,0.4)"
              : "1.5px dashed rgba(204,85,0,0.25)",
          }}
        />
      </motion.div>

      {/* Label */}
      <motion.div
        animate={{
          y: isActive ? 0 : [0, -5, 0],
          opacity: 1,
          scale: 1,
        }}
        transition={
          isActive
            ? { duration: 0.3 }
            : { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }
        className="mt-4 rounded-full border px-6 py-2 backdrop-blur-xl"
        style={{
          borderColor: isActive ? "rgba(34,197,94,0.4)" : "rgba(204,85,0,0.4)",
          backgroundColor: isActive ? "rgba(34,197,94,0.2)" : "rgba(204,85,0,0.2)",
          boxShadow: isActive
            ? "0 0 20px rgba(34,197,94,0.2)"
            : "0 0 20px rgba(204,85,0,0.2)",
        }}
      >
        <span className="text-[12px] sm:text-[13px] font-black tracking-[0.3em] text-white uppercase drop-shadow-lg">
          {label}
        </span>
      </motion.div>
    </div>
  );
}
