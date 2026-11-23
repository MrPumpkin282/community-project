import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HelpCircle, ArrowRight, RotateCcw, Check, Sparkles } from 'lucide-react';
import { TricolorCardTop, TricolorBadge } from './TricolorElements';

const QUESTIONS = [
  {
    id: 1,
    title: 'Who is looking for legal assistance or rights information?',
    options: [
      { label: 'A farmer or agricultural family', next: 'section:/farmers' },
      { label: 'A woman or for a child’s safety', next: 'section:/women-and-children' },
      { label: 'A senior citizen (60+ years old)', next: 'section:/senior-citizens' },
      { label: 'An informal, contract, or unorganized worker', next: 'section:/workers' },
      { label: 'A student or parent with school/college issues', next: 'section:/students' },
      { label: 'A person with a physical, sensory, or mental disability', next: 'section:/disability-rights' },
      { label: 'A member of SC/ST or tribal community', next: 'section:/sc-st-tribal' },
      { label: 'Someone dealing with cyber scam or fraud', next: 'section:/cyber-safety' },
      { label: 'Someone with rent, tenancy, or consumer issues', next: 'section:/consumer-rights' },
      { label: 'Someone needing government records / filing RTI', next: 'section:/rti-guide' },
      { label: 'Someone from an economically weaker background', next: 2 },
    ],
  },
  {
    id: 2,
    title: 'What kind of help are you specifically looking for?',
    options: [
      { label: 'I need a free court lawyer for a civil or criminal case', next: 'section:/how-to-apply' },
      { label: 'I want to know if my family qualifies under state income limits', next: 'section:/poor-and-marginalized' },
      { label: 'I want to find the nearest DLSA in my district court', next: 'section:/find-dlsa' },
      { label: 'I am affected by a natural calamity or crime', next: 'section:/disaster-and-victims' },
    ],
  },
];

export default function GuidedQuiz() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const question = QUESTIONS.find((q) => q.id === currentStep);

  const handleSelect = (option) => {
    setSelectedOption(option);
    if (typeof option.next === 'string' && option.next.startsWith('section:')) {
      const path = option.next.replace('section:', '');
      setTimeout(() => {
        navigate(path);
      }, 250);
    } else if (typeof option.next === 'number') {
      setCurrentStep(option.next);
      setSelectedOption(null);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(1);
    setSelectedOption(null);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-saffron-50/50 via-white to-navy-50/40 p-6 sm:p-8 shadow-sm">
      {/* Decorative Tricolor Top Accent Strip */}
      <TricolorCardTop height="h-[3.5px]" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-saffron-500 text-white flex items-center justify-center shadow-sm">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <h3 className="text-xl font-bold text-navy-900 leading-tight">
                Which Category Fits Your Need?
              </h3>
            </div>
            <p className="text-xs text-gray-500">
              Quick 30-second guided finder to take you directly to your rights & schemes
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <TricolorBadge>Constitutional Rights Finder</TricolorBadge>

          {currentStep > 1 && (
            <button
              onClick={resetQuiz}
              className="inline-flex items-center gap-1.5 text-xs text-navy-600 hover:text-navy-800 font-medium px-2 py-1 rounded hover:bg-navy-50 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Start Over
            </button>
          )}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-semibold text-navy-800 mb-3">{question.title}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {question.options.map((opt, idx) => {
            const isSelected = selectedOption === opt;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelect(opt)}
                className={`text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all duration-150 flex items-center justify-between group ${
                  isSelected
                    ? 'bg-navy-800 text-white border-navy-900 border-l-4 border-l-[#FF9933] shadow-md'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-navy-300 hover:border-l-4 hover:border-l-[#138808] hover:bg-navy-50/50'
                }`}
              >
                <span>{opt.label}</span>
                <ArrowRight
                  className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'text-saffron-400' : 'text-gray-300 group-hover:text-navy-600 group-hover:translate-x-0.5'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
