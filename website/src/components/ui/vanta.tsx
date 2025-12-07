'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    VANTA: {
      DOTS: (options: any) => any;
    };
  }
}

export const Vanta = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  const initVanta = () => {
    if (vantaRef.current && window.VANTA) {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
      vantaEffect.current = window.VANTA.DOTS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xffffff,
        backgroundColor: 0x0f172a,
        showLines: false,
        size: 1.60,
  spacing: 65.00,
      });
    }
  };

  useEffect(() => {
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js"
        strategy="lazyOnload"
        onLoad={initVanta}
      />
      <div className="absolute inset-0 z-0 w-full h-full">
        <div ref={vantaRef} className="w-full h-full" />
      </div>
    </>
  );
};