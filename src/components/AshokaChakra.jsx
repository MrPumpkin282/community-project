import React from 'react';

/**
 * Ashoka Chakra Component
 * 24-spoke Dharmachakra wheel motif in navy blue (#000080 / currentColor).
 * Note: This is solely the decorative 24-spoke wheel motif and does NOT contain
 * or resemble the protected State Emblem of India (Lion Capital).
 */
export default function AshokaChakra({ className = 'w-6 h-6', color = '#000080', ...props }) {
  const spokes = Array.from({ length: 24 }, (_, i) => i * 15);

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ashoka Chakra 24-spoke wheel motif"
      style={{ color }}
      {...props}
    >
      {/* Outer double rim */}
      <circle cx="50" cy="50" r="46.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="43.5" stroke="currentColor" strokeWidth="2.5" />

      {/* Central hub and center axle */}
      <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="2" fill="white" />
      <circle cx="50" cy="50" r="3.5" fill="currentColor" />

      {/* 24 spokes + rim pips */}
      {spokes.map((deg) => (
        <g key={deg} transform={`rotate(${deg} 50 50)`}>
          {/* Spoke line */}
          <line
            x1="50"
            y1="12"
            x2="50"
            y2="42"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Subtle rim node/pip between spokes */}
          <circle cx="50" cy="9.2" r="1.1" fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}
