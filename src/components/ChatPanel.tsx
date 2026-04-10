"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Vapi from "@vapi-ai/web";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type VoiceStatus = "idle" | "connecting" | "active";

interface ChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatPanel({ isOpen, onClose }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState<VoiceStatus>("idle");
  const [voiceTranscript, setVoiceTranscript] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const vapiRef = useRef<Vapi | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize Vapi
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;
    if (!publicKey) return;

    const vapi = new Vapi(publicKey);
    vapiRef.current = vapi;

    vapi.on("call-start", () => setVoiceStatus("active"));
    vapi.on("call-end", () => {
      setVoiceStatus("idle");
      setVoiceTranscript("");
    });
    vapi.on("message", (msg: Record<string, unknown>) => {
      if (msg.type === "transcript") {
        const transcript = msg as { transcriptType?: string; transcript?: string; role?: string };
        if (transcript.transcriptType === "final" && transcript.transcript) {
          const role = transcript.role === "assistant" ? "assistant" : "user";
          setMessages((prev) => [...prev, { role, content: transcript.transcript as string }]);
          setVoiceTranscript("");
        } else if (transcript.transcriptType === "partial" && transcript.transcript) {
          setVoiceTranscript(transcript.transcript as string);
        }
      }
    });
    vapi.on("error", () => {
      setVoiceStatus("idle");
      setVoiceTranscript("");
    });

    return () => {
      vapi.stop();
      vapiRef.current = null;
    };
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, voiceTranscript]);

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Stop voice call when panel closes
  useEffect(() => {
    if (!isOpen && voiceStatus !== "idle") {
      vapiRef.current?.stop();
    }
  }, [isOpen, voiceStatus]);

  const toggleVoice = useCallback(() => {
    const vapi = vapiRef.current;
    if (!vapi) return;

    if (voiceStatus === "idle") {
      const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID;
      if (!assistantId) return;
      setVoiceStatus("connecting");
      vapi.start(assistantId);
    } else {
      vapi.stop();
    }
  }, [voiceStatus]);

  const sendMessage = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed || isStreaming) return;

    const userMessage: Message = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsStreaming(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!res.ok) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Sorry, something went wrong. Please try again." },
        ]);
        setIsStreaming(false);
        return;
      }

      const reader = res.body?.getReader();
      if (!reader) {
        setIsStreaming(false);
        return;
      }

      const decoder = new TextDecoder();
      let assistantContent = "";
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      let buffer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          const trimmedLine = line.trim();
          if (!trimmedLine || !trimmedLine.startsWith("data: ")) continue;
          const data = trimmedLine.slice(6);
          if (data === "[DONE]") continue;
          try {
            const parsed = JSON.parse(data);
            if (parsed.content) {
              assistantContent += parsed.content;
              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                  role: "assistant",
                  content: assistantContent,
                };
                return updated;
              });
            }
          } catch {
            // skip malformed chunks
          }
        }
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Connection error. Please try again." },
      ]);
    }

    setIsStreaming(false);
  }, [input, messages, isStreaming]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const isVoiceActive = voiceStatus === "active";
  const isVoiceConnecting = voiceStatus === "connecting";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-32 right-4 sm:right-8 z-[99] w-[340px] sm:w-[380px] max-h-[70vh] flex flex-col rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{
                  backgroundColor: isVoiceActive ? "#22c55e" : "#CC5500",
                  boxShadow: isVoiceActive
                    ? "0 0 8px rgba(34,197,94,0.6)"
                    : "0 0 8px rgba(204,85,0,0.4)",
                }}
              />
              <span className="text-sm font-semibold text-white tracking-wide">
                {isVoiceActive ? "Voice Active" : "OrenGen AI"}
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-white/50 hover:text-white transition-colors p-1"
              aria-label="Close chat"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-[200px] max-h-[50vh] scrollbar-thin">
            {messages.length === 0 && !isVoiceActive && (
              <div className="text-center text-white/40 text-sm py-8">
                <p className="mb-1">Hi! I&apos;m your OrenGen AI assistant.</p>
                <p>Type a message or tap the mic to talk.</p>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#CC5500] text-white rounded-br-md"
                      : "bg-white/10 text-white/90 rounded-bl-md"
                  }`}
                >
                  {msg.content || (
                    <span className="inline-flex gap-1">
                      <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Live voice transcript */}
            {voiceTranscript && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed bg-white/5 text-white/50 rounded-bl-md italic border border-white/5">
                  {voiceTranscript}...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="px-3 py-3 border-t border-white/10 bg-white/5">
            <div className="flex items-center gap-2">
              {/* Mic button */}
              <button
                onClick={toggleVoice}
                disabled={isVoiceConnecting}
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  isVoiceActive
                    ? "bg-green-500/20 text-green-400 border border-green-500/40 shadow-[0_0_12px_rgba(34,197,94,0.3)]"
                    : isVoiceConnecting
                      ? "bg-white/5 text-white/30 border border-white/10 animate-pulse"
                      : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white"
                }`}
                aria-label={isVoiceActive ? "End voice call" : "Start voice call"}
              >
                {isVoiceActive ? (
                  // Waveform icon when active
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 3v18M8 8v8M4 11v2M16 8v8M20 11v2" />
                  </svg>
                ) : (
                  // Mic icon
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="2" width="6" height="11" rx="3" />
                    <path d="M5 10a7 7 0 0 0 14 0" />
                    <line x1="12" y1="19" x2="12" y2="22" />
                  </svg>
                )}
              </button>

              {/* Text input */}
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isVoiceActive ? "Voice call active..." : "Type a message..."}
                disabled={isVoiceActive}
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-[#CC5500]/50 focus:ring-1 focus:ring-[#CC5500]/30 transition-all disabled:opacity-40"
              />

              {/* Send button */}
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isStreaming || isVoiceActive}
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-[#CC5500] text-white transition-all hover:bg-[#E2725B] disabled:opacity-30 disabled:hover:bg-[#CC5500]"
                aria-label="Send message"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
