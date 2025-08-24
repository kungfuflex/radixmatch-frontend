import React from 'react';

const RadixLogo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <path 
        id="fractal-branch" 
        d="M20 38 L20 28 L24 24 L20 20 L20 10 M20 20 L12 12 M20 20 L28 12 M12 12 L8 8 M12 12 L16 16 M28 12 L24 16 M28 12 L32 8" 
        strokeWidth="2"
        strokeLinecap="square" 
        strokeLinejoin="miter"
      />
      <pattern id="electric-grid" patternUnits="userSpaceOnUse" width="3" height="3">
        <path d="M 0 1.5 L 3 1.5 M 1.5 0 L 1.5 3" stroke="#ffA500" strokeWidth="0.7" />
      </pattern>
      <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
      </filter>
      <style>
        {`
          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .rotating-logo {
            transform-origin: center;
            animation: rotate 20s linear infinite;
          }
        `}
      </style>
    </defs>
    <circle cx="20" cy="20" r="19" stroke="#ff4500" strokeWidth="1" fill="none" filter="url(#neon-glow)"/>
    <g className="rotating-logo">
      <g style={{ transform: 'translate(1px, 1px)' }}>
        <use href="#fractal-branch" stroke="#ff8c00" transform="rotate(0, 20, 20)"/>
        <use href="#fractal-branch" stroke="#ff8c00" transform="rotate(45, 20, 20)"/>
        <use href="#fractal-branch" stroke="#ff8c00" transform="rotate(90, 20, 20)"/>
        <use href="#fractal-branch" stroke="#ff8c00" transform="rotate(135, 20, 20)"/>
        <use href="#fractal-branch" stroke="#ff8c00" transform="rotate(180, 20, 20)"/>
        <use href="#fractal-branch" stroke="#ff8c00" transform="rotate(225, 20, 20)"/>
        <use href="#fractal-branch" stroke="#ff8c00" transform="rotate(270, 20, 20)"/>
        <use href="#fractal-branch" stroke="#ff8c00" transform="rotate(315, 20, 20)"/>
      </g>
      <g>
        <use href="#fractal-branch" stroke="url(#electric-grid)" transform="rotate(0, 20, 20)"/>
        <use href="#fractal-branch" stroke="url(#electric-grid)" transform="rotate(45, 20, 20)"/>
        <use href="#fractal-branch" stroke="url(#electric-grid)" transform="rotate(90, 20, 20)"/>
        <use href="#fractal-branch" stroke="url(#electric-grid)" transform="rotate(135, 20, 20)"/>
        <use href="#fractal-branch" stroke="url(#electric-grid)" transform="rotate(180, 20, 20)"/>
        <use href="#fractal-branch" stroke="url(#electric-grid)" transform="rotate(225, 20, 20)"/>
        <use href="#fractal-branch" stroke="url(#electric-grid)" transform="rotate(270, 20, 20)"/>
        <use href="#fractal-branch" stroke="url(#electric-grid)" transform="rotate(315, 20, 20)"/>
      </g>
    </g>
  </svg>
);

export default RadixLogo;