import React from 'react';
import AshokaChakra from './AshokaChakra';

/**
 * Thin 3-layer decorative Tricolor accent bar (Saffron - White - India Green)
 * Placed at the very top of the page above navigation.
 */
export function TricolorHeaderBar({ className = '' }) {
  return (
    <div className={`w-full flex flex-col h-[6px] shrink-0 ${className}`} aria-hidden="true">
      <div className="h-[2px] w-full bg-[#FF9933]" />
      <div className="h-[2px] w-full bg-white" />
      <div className="h-[2px] w-full bg-[#138808]" />
    </div>
  );
}

/**
 * Thin 3-segmented Tricolor stripe (Saffron - White - Green)
 * Attached to the top border of cards and interactive panels.
 */
export function TricolorCardTop({ className = '', height = 'h-[3px]' }) {
  return (
    <div
      className={`absolute top-0 left-0 right-0 ${height} flex z-10 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <div className="w-1/3 h-full bg-[#FF9933]" />
      <div className="w-1/3 h-full bg-white" />
      <div className="w-1/3 h-full bg-[#138808]" />
    </div>
  );
}

/**
 * Small pill badge with 3 circular tricolor dots and label
 */
export function TricolorBadge({ children, className = '' }) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-gray-200 shadow-xs text-xs font-semibold text-navy-800 ${className}`}
    >
      <span className="w-2 h-2 rounded-full bg-[#FF9933] shrink-0" />
      <span className="w-2 h-2 rounded-full bg-white border border-gray-300 shrink-0" />
      <span className="w-2 h-2 rounded-full bg-[#138808] shrink-0" />
      <span>{children}</span>
    </div>
  );
}

/**
 * Reusable decorative section divider featuring subtle saffron-green gradient lines
 * and a standalone central 24-spoke Ashoka Chakra wheel motif.
 */
export function TricolorDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center my-8 ${className}`} aria-hidden="true">
      <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#FF9933] to-[#FF9933] opacity-80" />
      <div className="mx-3 text-[#000080] shrink-0">
        <AshokaChakra className="w-5 h-5" color="#000080" />
      </div>
      <div className="h-[2px] flex-1 bg-gradient-to-r from-[#138808] via-[#138808] to-transparent opacity-80" />
    </div>
  );
}
