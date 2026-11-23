import { Phone } from 'lucide-react';

export default function HelplineBanner() {
  return (
    <div className="bg-gradient-to-r from-saffron-500 to-saffron-600 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left">
        <Phone className="w-6 h-6 shrink-0 animate-pulse" />
        <div>
          <span className="font-bold text-lg">Free Legal Aid — Call Now!</span>
          <span className="block sm:inline sm:ml-2 text-saffron-100">
            NALSA Helpline:{' '}
            <a href="tel:15100" className="font-bold underline text-white">
              15100
            </a>
          </span>
        </div>
        <span className="text-xs text-saffron-200 sm:ml-auto">
          Available 24×7 • Toll-Free
        </span>
      </div>
      {/* Subtle bottom tricolor accent line */}
      <div className="h-[2px] w-full flex" aria-hidden="true">
        <div className="w-1/3 bg-[#FF9933]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#138808]" />
      </div>
    </div>
  );
}
