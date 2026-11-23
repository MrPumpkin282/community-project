import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { TricolorDivider } from './TricolorElements';

export default function SectionLayout({
  icon: Icon,
  title,
  subtitle,
  accentColor = 'navy',
  helplines = [],
  children,
}) {
  const { lang, t } = useLanguage();
  const isHindi = lang === 'hi';

  return (
    <div>
      {/* Section Hero */}
      <div className="bg-gradient-to-br from-navy-700 to-navy-900 text-white">
        <div className="section-container pb-8 sm:pb-12">
          {/* Untranslated page notice when Hindi is active */}
          {isHindi && (
            <Badge
              variant="outline"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-500/20 text-saffron-300 border-saffron-400/30 text-xs font-medium mb-4"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{t('hindi_coming_soon')}</span>
            </Badge>
          )}

          <div className="flex items-center gap-3 mb-4">
            {Icon && (
              <div className={`w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center`}>
                <Icon className="w-6 h-6 text-saffron-400" />
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
          </div>
          <p className="text-lg text-navy-200 max-w-3xl">{subtitle}</p>

          {helplines.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-6">
              {helplines.map((h, i) => (
                <a
                  key={i}
                  href={`tel:${h.number.replace(/[\s\-\/]/g, '')}`}
                  className="helpline-badge bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {h.label}: {h.number}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="section-container pb-4">{children}</div>

      {/* Decorative Tricolor Divider */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <TricolorDivider />
      </div>

      {/* Next Steps CTA */}
      <div className="bg-gradient-to-r from-saffron-50 to-saffron-100 border-t border-saffron-200">
        <div className="section-container py-8 sm:py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-navy-800 mb-1">{t('how_to_apply_ready')}</h3>
            <p className="text-gray-600 text-sm">
              {t('how_to_apply_cta')}
            </p>
          </div>
          <Link to="/how-to-apply" className="btn-primary whitespace-nowrap">
            {isHindi ? 'आवेदन कैसे करें' : 'How to Apply'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
