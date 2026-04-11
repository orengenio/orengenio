'use client';

import React, { useEffect, useRef } from 'react';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import webpagePlugin from 'grapesjs-preset-webpage';

export default function GrapesEditor() {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (!editorRef.current) {
      editorRef.current = grapesjs.init({
        container: '#gjs',
        height: '100vh',
        width: '100%',
        plugins: [webpagePlugin],
        storageManager: false, 
      });
    }

    return () => {
      if (editorRef.current) {
        try {
          editorRef.current.destroy();
        } catch (e) {
          console.error("Error destroying GrapesJS instance:", e);
        }
        editorRef.current = null;
      }
    };
  }, []);

  return (
    <div style={{ margin: 0, padding: 0, height: '100vh', overflow: 'hidden' }}>
      <div id="gjs">
        <h1>Welcome to your AI Web Builder</h1>
        <p>Start dragging and dropping components.</p>
      </div>
    </div>
  );
}
