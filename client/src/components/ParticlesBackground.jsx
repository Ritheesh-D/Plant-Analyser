import { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
    const container = document.getElementById('leaf-bg');
    if (!container) return;

    const createLeaf = () => {
      const shades = [
        'rgba(0,180,80,0.15)',   // dark green
        'rgba(0,255,153,0.12)',  // neon green light
        'rgba(34,139,34,0.18)',  // forest green
        'rgba(0,200,100,0.10)',  // medium green
      ];
      const randomShade = shades[Math.floor(Math.random() * shades.length)];
      
      const leafSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2z" 
                fill="${randomShade}" stroke="rgba(0,255,153,0.25)" stroke-width="0.5"/>
        </svg>
      `;

      const leaf = document.createElement('div');
      const size = Math.random() * 20 + 10;
      const startX = Math.random() * window.innerWidth;
      const duration = Math.random() * 8 + 6;
      const delay = Math.random() * 5;
      const drift = (Math.random() - 0.5) * 150;

      leaf.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        left: ${startX}px;
        top: -30px;
        opacity: 0;
        pointer-events: none;
        z-index: 0;
        animation: leafFall ${duration}s ${delay}s linear forwards;
        transform: rotate(${Math.random() * 360}deg);
      `;
      leaf.innerHTML = leafSVG;

      leaf.style.setProperty('--drift', `${drift}px`);
      container.appendChild(leaf);

      setTimeout(() => leaf.remove(), (duration + delay) * 1000);
    };

    // Inject keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes leafFall {
        0%   { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
        10%  { opacity: 1; }
        90%  { opacity: 0.6; }
        100% { transform: translateY(110vh) translateX(var(--drift)) rotate(720deg); opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    // Create leaves continuously
    const interval = setInterval(createLeaf, 600);
    // Initial burst
    for (let i = 0; i < 15; i++) setTimeout(createLeaf, i * 200);

    return () => {
      clearInterval(interval);
      style.remove();
    };
  }, []);

  return (
    <div
      id="leaf-bg"
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
    />
  );
};

export default ParticlesBackground;
