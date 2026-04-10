"use client";

import { useState } from "react";
import { FloatingOrb } from "./FloatingOrb";
import { ChatPanel } from "./ChatPanel";

export function OrbChatWrapper() {
  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <>
      <ChatPanel isOpen={panelOpen} onClose={() => setPanelOpen(false)} />
      <FloatingOrb onClick={() => setPanelOpen((prev) => !prev)} isActive={panelOpen} />
    </>
  );
}
