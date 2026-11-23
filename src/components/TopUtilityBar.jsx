import React, { useState } from 'react';
import { Phone, Globe, SunMoon, ChevronDown, Check, Eye, HelpCircle } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';
import { useLanguage } from '../context/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export default function TopUtilityBar() {
  const {
    fontSize,
    decreaseFontSize,
    resetFontSize,
    increaseFontSize,
    highContrast,
    toggleHighContrast,
  } = useAccessibility();

  const { lang, setLang, t } = useLanguage();
  const [screenReaderDialogOpen, setScreenReaderDialogOpen] = useState(false);

  return (
    <>
      {/* Skip to Main Content Link for Keyboard and Screen Reader Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-saffron-600 focus:text-white focus:font-bold focus:shadow-xl focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-saffron-400"
      >
        Skip to main content / मुख्य सामग्री पर जाएं
      </a>

      {/* Top Utility Bar */}
      <div className="bg-navy-900 text-white text-xs border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-y-1.5">
          {/* Left: Emergency Helpline & Screen Reader Access */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 text-navy-200">
              <Phone className="w-3.5 h-3.5 text-saffron-400 shrink-0" />
              <span className="font-medium text-[11px] sm:text-xs">
                {t('strip_helpline') || 'NALSA Free Legal Aid:'}{' '}
                <a
                  href="tel:15100"
                  className="font-bold underline text-saffron-300 hover:text-saffron-200"
                  title="Call NALSA Helpline 15100"
                >
                  15100
                </a>
                <span className="hidden sm:inline text-navy-400 ml-1">(24×7 Toll-Free)</span>
              </span>
            </div>

            <span className="hidden md:inline text-navy-600">•</span>

            <div className="hidden md:flex items-center gap-2 text-[11px] text-navy-300">
              <span>Cyber Fraud:</span>
              <a
                href="tel:1930"
                className="font-bold underline text-white hover:text-saffron-200"
              >
                1930
              </a>
            </div>

            <span className="hidden lg:inline text-navy-600">•</span>

            <button
              onClick={() => setScreenReaderDialogOpen(true)}
              className="hidden lg:inline-flex items-center gap-1 text-[11px] text-navy-300 hover:text-white transition-colors underline decoration-dotted"
              title="Screen Reader Access information"
            >
              <Eye className="w-3 h-3 text-saffron-400" />
              <span>Screen Reader Access</span>
            </button>
          </div>

          {/* Right: Accessibility Controls (A- / A / A+ / Contrast) & Language Switcher */}
          <div className="flex items-center gap-2.5 sm:gap-4 ml-auto">
            {/* Text Resizing Controls */}
            <div
              className="flex items-center gap-0.5 bg-navy-800/90 border border-navy-700 rounded-md p-0.5"
              role="group"
              aria-label="Text size controls"
            >
              <button
                onClick={decreaseFontSize}
                className={`px-1.5 py-0.5 rounded text-[11px] font-bold transition-colors ${
                  fontSize === 'sm'
                    ? 'bg-saffron-500 text-white shadow-xs'
                    : 'text-navy-200 hover:text-white hover:bg-navy-700'
                }`}
                title="Decrease font size (A-)"
                aria-label="Decrease font size"
                aria-pressed={fontSize === 'sm'}
              >
                A-
              </button>
              <button
                onClick={resetFontSize}
                className={`px-1.5 py-0.5 rounded text-[11px] font-bold transition-colors ${
                  fontSize === 'normal'
                    ? 'bg-saffron-500 text-white shadow-xs'
                    : 'text-navy-200 hover:text-white hover:bg-navy-700'
                }`}
                title="Standard font size (A)"
                aria-label="Standard font size"
                aria-pressed={fontSize === 'normal'}
              >
                A
              </button>
              <button
                onClick={increaseFontSize}
                className={`px-1.5 py-0.5 rounded text-[11px] font-bold transition-colors ${
                  fontSize === 'lg'
                    ? 'bg-saffron-500 text-white shadow-xs'
                    : 'text-navy-200 hover:text-white hover:bg-navy-700'
                }`}
                title="Increase font size (A+)"
                aria-label="Increase font size"
                aria-pressed={fontSize === 'lg'}
              >
                A+
              </button>
            </div>

            {/* Contrast Toggle */}
            <button
              onClick={toggleHighContrast}
              className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold border transition-colors ${
                highContrast
                  ? 'bg-saffron-400 text-navy-950 border-saffron-300 font-bold'
                  : 'bg-navy-800/90 text-navy-200 border-navy-700 hover:text-white hover:bg-navy-700'
              }`}
              title={highContrast ? 'Switch to Standard Contrast' : 'Switch to High Contrast'}
              aria-label={highContrast ? 'Switch to Standard Contrast' : 'Switch to High Contrast'}
              aria-pressed={highContrast}
            >
              <SunMoon className="w-3 h-3 text-saffron-400" />
              <span className="hidden sm:inline">
                {highContrast ? 'Normal' : 'Contrast'}
              </span>
            </button>

            {/* Language Selector Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="flex items-center gap-1.5 bg-navy-800/90 text-white border border-navy-700 rounded-md px-2 py-0.5 text-[11px] font-semibold hover:bg-navy-700 transition-colors focus:outline-none focus:ring-1 focus:ring-saffron-400"
                  aria-label="Change Language / भाषा बदलें"
                >
                  <Globe className="w-3 h-3 text-saffron-400" />
                  <span>{lang === 'en' ? 'English' : 'हिन्दी'}</span>
                  <ChevronDown className="w-3 h-3 text-navy-300" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-white rounded-xl shadow-xl border border-gray-200 p-1 min-w-[140px] z-50 text-xs"
              >
                <DropdownMenuItem
                  onClick={() => setLang('en')}
                  className={`px-3 py-1.5 cursor-pointer flex items-center justify-between rounded-md ${
                    lang === 'en'
                      ? 'font-bold text-navy-900 bg-navy-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span>English</span>
                  {lang === 'en' && <Check className="w-3.5 h-3.5 text-saffron-600" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLang('hi')}
                  className={`px-3 py-1.5 cursor-pointer flex items-center justify-between rounded-md ${
                    lang === 'hi'
                      ? 'font-bold text-navy-900 bg-navy-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span>हिन्दी (Hindi)</span>
                  {lang === 'hi' && <Check className="w-3.5 h-3.5 text-saffron-600" />}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Screen Reader Access Information Dialog */}
      <Dialog open={screenReaderDialogOpen} onOpenChange={setScreenReaderDialogOpen}>
        <DialogContent className="max-w-md bg-white p-6 rounded-2xl shadow-2xl border border-gray-200">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-navy-900 flex items-center gap-2">
              <Eye className="w-5 h-5 text-saffron-600" />
              Screen Reader Access &amp; Accessibility
            </DialogTitle>
            <DialogDescription className="text-xs text-gray-500 mt-1">
              Accessibility standards implemented across Nyaya Sathi portal
            </DialogDescription>
          </DialogHeader>
          <div className="text-xs text-gray-700 space-y-3 mt-3 leading-relaxed">
            <p>
              Nyaya Sathi adheres to WCAG 2.1 Level AA accessibility guidelines to ensure equal access to legal aid information for all citizens, including persons with visual and motor impairments.
            </p>
            <ul className="list-disc pl-4 space-y-1.5 text-gray-600">
              <li>
                <strong>Skip to Content:</strong> Press <kbd className="px-1 py-0.5 bg-gray-100 border border-gray-300 rounded text-[10px]">Tab</kbd> upon loading any page to jump straight to main content.
              </li>
              <li>
                <strong>Text Resizing:</strong> Use the <code>A-</code>, <code>A</code>, and <code>A+</code> controls in the top bar to adjust type scale.
              </li>
              <li>
                <strong>High Contrast:</strong> Toggle the contrast button for heightened visual clarity and high-contrast color schemes.
              </li>
              <li>
                <strong>Compatible Screen Readers:</strong> NVDA, JAWS, VoiceOver (macOS/iOS), TalkBack (Android), and Windows Narrator.
              </li>
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
