'use client';

import { useEffect } from 'react';

/**
 * Aminos AI Chatbot Component      
 * Integrates the Aminos AI Sales Agent directly into the Next.js app
 * Bot ID: 58852 (OrenGen AI Assistant)
 * 
 * The bot is configured as a tech-savvy sales consultant for OrenGen
 * with AI solutions and consulting expertise, designed to close deals.
 */

export function AmeinosChatBot() {
    useEffect(() => {
          // Load the Aminos chatbot script
                  const script = document.createElement('script');
          script.src = 'https://app.aminos.ai/js/chat_plugin.js';
          script.setAttribute('data-bot-id', '58852');
          script.async = true;

                  document.body.appendChild(script);

                  // Cleanup
                  return () => {
                          const existingScript = document.querySelector(
                                    'script[src="https://app.aminos.ai/js/chat_plugin.js"]'
                                  );
                          if (existingScript) {
                                    existingScript.remove();
                          }
                  };
    }, []);

  // Component returns null - the Aminos script handles all UI
  return null;
}
