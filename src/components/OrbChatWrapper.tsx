"use client";

import { useState } from "react";
import { FloatingOrb } from "./FloatingOrb";
import { AmeinosChatBot } from "./ChatBot";
export function OrbChatWrapper() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <FloatingOrb onToggleChat={() => setChatOpen((prev) => !prev)} isChatOpen={chatOpen} />
          <AmeinosChatBot isOpen={chatOpen} onClose={() => setChatOpen(false)} />    </>
  );
}
