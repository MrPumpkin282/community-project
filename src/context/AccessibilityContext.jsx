import React, { createContext, useContext, useState, useEffect } from 'react';

const AccessibilityContext = createContext();

export function AccessibilityProvider({ children }) {
  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem('nyaya_sathi_font_size') || 'normal'; // 'sm' | 'normal' | 'lg'
  });

  const [highContrast, setHighContrast] = useState(() => {
    return localStorage.getItem('nyaya_sathi_contrast') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('nyaya_sathi_font_size', fontSize);
    const root = document.documentElement;
    root.classList.remove('font-size-sm', 'font-size-normal', 'font-size-lg');
    root.classList.add(`font-size-${fontSize}`);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('nyaya_sathi_contrast', highContrast);
    const root = document.documentElement;
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
  }, [highContrast]);

  const decreaseFontSize = () => {
    if (fontSize === 'lg') setFontSize('normal');
    else if (fontSize === 'normal') setFontSize('sm');
  };

  const resetFontSize = () => {
    setFontSize('normal');
  };

  const increaseFontSize = () => {
    if (fontSize === 'sm') setFontSize('normal');
    else if (fontSize === 'normal') setFontSize('lg');
  };

  const toggleHighContrast = () => {
    setHighContrast((prev) => !prev);
  };

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        decreaseFontSize,
        resetFontSize,
        increaseFontSize,
        highContrast,
        toggleHighContrast,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}
