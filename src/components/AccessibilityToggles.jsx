import React from 'react';
import { SunMoon } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';

export default function AccessibilityToggles() {
  const {
    fontSize,
    decreaseFontSize,
    resetFontSize,
    increaseFontSize,
    highContrast,
    toggleHighContrast,
  } = useAccessibility();

  return (
    <div className="flex items-center gap-1 border border-gray-300 rounded-lg p-0.5 bg-gray-50/80 text-xs text-gray-700">
      <button
        onClick={decreaseFontSize}
        className={`px-1.5 py-0.5 rounded font-bold hover:bg-gray-200 transition-colors ${
          fontSize === 'sm' ? 'bg-navy-600 text-white hover:bg-navy-700' : ''
        }`}
        title="Decrease font size"
        aria-label="Decrease font size"
      >
        A-
      </button>
      <button
        onClick={resetFontSize}
        className={`px-1.5 py-0.5 rounded font-bold hover:bg-gray-200 transition-colors ${
          fontSize === 'normal' ? 'bg-navy-600 text-white hover:bg-navy-700' : ''
        }`}
        title="Default font size"
        aria-label="Default font size"
      >
        A
      </button>
      <button
        onClick={increaseFontSize}
        className={`px-1.5 py-0.5 rounded font-bold hover:bg-gray-200 transition-colors ${
          fontSize === 'lg' ? 'bg-navy-600 text-white hover:bg-navy-700' : ''
        }`}
        title="Increase font size"
        aria-label="Increase font size"
      >
        A+
      </button>

      <span className="w-px h-3.5 bg-gray-300 mx-0.5" />

      <button
        onClick={toggleHighContrast}
        className={`p-1 rounded hover:bg-gray-200 transition-colors flex items-center justify-center ${
          highContrast ? 'bg-navy-800 text-saffron-400' : 'text-gray-600'
        }`}
        title={highContrast ? 'Switch to Standard Contrast' : 'Switch to High Contrast'}
        aria-label={highContrast ? 'Switch to Standard Contrast' : 'Switch to High Contrast'}
      >
        <SunMoon className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
