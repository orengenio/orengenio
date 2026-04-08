"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "OpenAI", logo: "https://svgl.app/library/openai.svg", brand: "openai" },
  { name: "Anthropic", logo: "https://cdn.simpleicons.org/claude/CC5500", brand: "anthropic" },
  { name: "ElevenLabs", logo: "https://cdn.simpleicons.org/elevenlabs/white", brand: "elevenlabs" },
  { name: "Google Cloud", logo: "https://cdn.simpleicons.org/googlecloud/4285F4", brand: "googlecloud" },
  { name: "NVIDIA", logo: "https://cdn.simpleicons.org/nvidia/76B900", brand: "nvidia" },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github/white", brand: "github" },
  { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED", brand: "docker" },
  { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E", brand: "figma" },
  { name: "Webflow", logo: "https://cdn.simpleicons.org/webflow/4353FF", brand: "webflow" },
  { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase/3FCF8E", brand: "supabase" },
  { name: "n8n", logo: "https://cdn.simpleicons.org/n8n/EA4B71", brand: "n8n" },
  { name: "Cloudflare", logo: "https://cdn.simpleicons.org/cloudflare/F38020", brand: "cloudflare" },
  { name: "Twilio", logo: "https://svgl.app/library/twilio.svg", brand: "twilio" },
  { name: "WordPress", logo: "https://cdn.simpleicons.org/wordpress/21759B", brand: "wordpress" },
  { name: "Clawbot", logo: "https://cdn.simpleicons.org/claude/CC5500", brand: "clawbot" },
];

export function TechBar() {
  return (
    <section className="og-partners" aria-label="Technology Partners">
      <div className="og-partners-label">Powered by World-Class Technology</div>
      <div className="og-partners-wrapper">
        <motion.div 
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          className="og-partners-track"
        >
          {[...partners, ...partners].map((partner, i) => (
            <div key={i} className="og-partner-set">
              <div className="og-partner-item" data-brand={partner.brand}>
                <img src={partner.logo} alt={partner.name} width="20" height="20" loading="lazy" />
                <span>{partner.name}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
