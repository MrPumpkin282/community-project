import React from 'react';
import { Users } from 'lucide-react';
import SectionLayout from '../components/SectionLayout';
import SchemeCard from '../components/SchemeCard';
import DocumentChecklist from '../components/DocumentChecklist';
import FAQAccordion from '../components/FAQAccordion';
import { FAQS_BY_SECTION } from '../data/faqs';
import { SCHEMES } from '../data/schemes';

export default function PoorAndMarginalized() {
  return (
    <SectionLayout
      icon={Users}
      title="Urban & Rural Poor"
      subtitle="Free legal aid is a fundamental right for economically weaker sections — learn who qualifies and how to apply."
      helplines={[{ label: 'NALSA Helpline', number: '15100' }]}
    >
      {/* Eligibility */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-4">Who Is Eligible for Free Legal Aid?</h2>
        <div className="card-accent mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Under the{' '}
            <a
              href="https://en.wikipedia.org/wiki/Legal_Services_Authorities_Act_1987"
              target="_blank"
              rel="noopener noreferrer"
              className="link-external"
            >
              Legal Services Authorities Act, 1987
            </a>
            , free legal services are provided to persons who fall below the income threshold prescribed
            by the respective State Legal Services Authority. While many states use a threshold around
            ₹3,00,000 per annum, <strong>this varies by state</strong>.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
            <strong>⚠️ Important:</strong> The exact income limit varies from state to state. Please
            check with your{' '}
            <a href="https://nalsa.gov.in/home" target="_blank" rel="noopener noreferrer" className="link-external font-semibold">
              State Legal Services Authority
            </a>{' '}
            or visit your nearest DLSA for the applicable threshold in your state.
          </div>
        </div>

        <h3 className="text-lg font-semibold text-navy-700 mb-3">Other categories automatically eligible (regardless of income):</h3>
        <ul className="space-y-2 text-gray-700">
          {[
            'Members of Scheduled Castes or Scheduled Tribes',
            'Victims of trafficking or bonded labour',
            'Women and children',
            'Persons with disabilities (as defined under relevant Acts)',
            'Persons in custody (undertrial prisoners)',
            'Victims of mass disaster, ethnic violence, caste atrocity, flood, drought, earthquake, or industrial disaster',
            'Industrial workmen',
            'Persons with mental illness',
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* How to Apply */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-4">How to Apply</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="card">
            <h3 className="font-semibold text-navy-800 mb-2">🏛️ In Person</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Visit the <strong>District Legal Services Authority (DLSA)</strong> located at the
              district court complex in your district. You can walk in without an appointment. DLSA
              offices are present in every district across India.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-navy-800 mb-2">🌐 Online</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Apply online through the{' '}
              <a href="https://nalsa.gov.in/home" target="_blank" rel="noopener noreferrer" className="link-external">
                NALSA website
              </a>
              . You can also call the toll-free helpline <strong>15100</strong> for guidance on the
              application process.
            </p>
          </div>
        </div>
      </section>

      {/* Schemes */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-navy-800 mb-6">Relevant Schemes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <SchemeCard
            title={SCHEMES.povertyAlleviation.title}
            description={SCHEMES.povertyAlleviation.description}
            link={SCHEMES.povertyAlleviation.link}
            linkLabel={SCHEMES.povertyAlleviation.linkLabel}
            lastVerified={SCHEMES.povertyAlleviation.lastVerified}
          />
          <SchemeCard
            title="Free Legal Aid under the Legal Services Authorities Act, 1987"
            description="Provides free legal representation, advice, and assistance to eligible persons including payment of court fees, waiver of stamp duty, and access to Lok Adalat for settlement."
            link="https://nalsa.gov.in/faqs/"
            linkLabel="Read NALSA FAQs"
            lastVerified="November 2026"
          />
        </div>
      </section>

      {/* Document Checklist */}
      <DocumentChecklist sectionKey="poorAndMarginalized" />

      {/* FAQs */}
      <FAQAccordion faqs={FAQS_BY_SECTION.poorAndMarginalized} />
    </SectionLayout>
  );
}
