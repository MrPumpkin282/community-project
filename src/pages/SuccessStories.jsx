import React from 'react';
import { BookOpenCheck, AlertCircle, ArrowRight, CheckCircle2, Phone, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SUCCESS_STORIES } from '../data/stories';
import { TricolorCardTop } from '../components/TricolorElements';

export default function SuccessStories() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-navy-700 to-navy-900 text-white">
        <div className="section-container pb-8 sm:pb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center">
              <BookOpenCheck className="w-6 h-6 text-saffron-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold">How Legal Aid Works in Practice</h1>
          </div>
          <p className="text-lg text-navy-200 max-w-3xl">
            Anonymized illustrative scenarios showing how ordinary citizens resolve disputes and access
            justice through District Legal Services Authorities and Lok Adalats.
          </p>
        </div>
      </div>

      <div className="section-container">
        {/* Prominent Educational Notice */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-5 mb-10 flex items-start gap-3.5">
          <AlertCircle className="w-6 h-6 text-blue-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-blue-900 leading-relaxed">
            <p className="font-bold mb-1">Notice: Illustrative Scenarios</p>
            <p>
              The scenarios below are <strong>anonymized illustrative examples, not real case records</strong>,
              designed to explain standard legal aid procedures under the Legal Services Authorities Act, 1987.
              Every individual case depends on its own unique facts and applicable legal provisions.
            </p>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="space-y-8 mb-14">
          {SUCCESS_STORIES.map((story) => (
            <div
              key={story.id}
              className="card border-navy-100 hover:border-navy-300 p-6 sm:p-8 transition-shadow shadow-sm relative overflow-hidden"
            >
              <TricolorCardTop height="h-[3px]" />
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs px-3 py-1 rounded-full bg-navy-50 text-navy-700 font-bold border border-navy-200">
                  {story.category}
                </span>
                <span className="text-xs text-forest-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest-600" />
                  Resolved via Official Legal Services
                </span>
              </div>

              <h2 className="text-xl font-bold text-navy-900 mb-4">{story.title}</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6 text-xs sm:text-sm">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <p className="font-bold text-gray-800 mb-1 text-xs uppercase tracking-wider">
                    The Situation:
                  </p>
                  <p className="text-gray-600 leading-relaxed">{story.scenario}</p>
                </div>

                <div className="p-4 bg-navy-50/50 rounded-xl border border-navy-100">
                  <p className="font-bold text-navy-800 mb-1 text-xs uppercase tracking-wider">
                    The Route Taken:
                  </p>
                  <p className="text-navy-950 font-medium mb-2">{story.routeTaken}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{story.process}</p>
                </div>

                <div className="p-4 bg-forest-50/50 rounded-xl border border-forest-100">
                  <p className="font-bold text-forest-800 mb-1 text-xs uppercase tracking-wider">
                    The Outcome:
                  </p>
                  <p className="text-gray-700 leading-relaxed">{story.outcome}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-navy-800 bg-navy-50/40 p-3 rounded-lg">
                <Scale className="w-4 h-4 text-navy-600 shrink-0" />
                <span>
                  <strong>Key Legal Principle:</strong> {story.keyTakeaway}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="card-accent bg-gradient-to-r from-navy-800 to-navy-900 text-white p-8 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Facing a similar situation?</h3>
            <p className="text-xs sm:text-sm text-navy-200 max-w-xl">
              Free legal aid is available to all eligible citizens. Visit your local District Court DLSA or dial 15100.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/how-to-apply" className="btn-saffron text-xs py-2.5 px-4 font-bold">
              How to Apply
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a href="tel:15100" className="btn-secondary border-white/30 text-white hover:bg-white/10 text-xs py-2.5 px-4">
              <Phone className="w-3.5 h-3.5" />
              Call 15100
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
