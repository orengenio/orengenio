"use client";

import { useState, useEffect } from "react";
import { FloatingOrb } from "./FloatingOrb";
import { ChatPanel } from "./ChatPanel";

export function OrbChatWrapper() {
  const [panelOpen, setPanelOpen] = useState(false);

  // Open chat panel when any #demo link is clicked
  useEffect(() => {
    function handleHash() {
      if (window.location.hash === "#demo") {
        setPanelOpen(true);
        // Clear hash so it can be clicked again
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    }
    handleHash(); // Check on mount
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <>
      <ChatPanel isOpen={panelOpen} onClose={() => setPanelOpen(false)} />
      <FloatingOrb onClick={() => setPanelOpen((prev) => !prev)} isActive={panelOpen} />
    </>
  );
}
