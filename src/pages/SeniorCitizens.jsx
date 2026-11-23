import React from 'react';
import { UserCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionLayout from '../components/SectionLayout';
import SchemeCard from '../components/SchemeCard';
import DocumentChecklist from '../components/DocumentChecklist';
import FAQAccordion from '../components/FAQAccordion';
import { FAQS_BY_SECTION } from '../data/faqs';
import { SCHEMES } from '../data/schemes';

export default function SeniorCitizens() {
  return (
    <SectionLayout
      icon={UserCheck}
      title="Senior Citizens"
      subtitle="Dedicated legal protections and free legal aid for persons aged 60 and above — including maintenance rights and welfare guarantees."
      helplines={[
        { label: 'NALSA Helpline', number: '15100' },
        { label: 'Elder Line', number: '14567' },
      ]}
    >
      {/* Rights */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-4">Your Rights as a Senior Citizen</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-amber-500 shrink-0" />
            <span>
              <strong>Right to Maintenance:</strong> Under the{' '}
              <a
                href="https://www.indiacode.nic.in/handle/123456789/2028"
                target="_blank"
                rel="noopener noreferrer"
                className="link-external font-semibold inline-flex items-center gap-1 text-navy-700 hover:text-navy-900 underline"
              >
                Maintenance and Welfare of Parents and Senior Citizens Act, 2007
                <ExternalLink className="w-3.5 h-3.5 inline" />
              </a>
              , children and legal heirs are legally obligated to provide maintenance. If they fail,
              a Maintenance Tribunal (usually at the District Magistrate / SDM level) can order monthly
              maintenance payments.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-amber-500 shrink-0" />
            <span>
              <strong>Free Legal Aid:</strong> Senior citizens (aged 60+) are eligible for free legal
              representation and advice through NALSA. Visit any DLSA at the district court complex or
              call <strong>15100</strong>.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-amber-500 shrink-0" />
            <span>
              <strong>Protection from Abuse:</strong> The Act also protects senior citizens from
              abandonment, abuse, and neglect. Complaints can be filed at the police station or the
              Maintenance Tribunal.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-amber-500 shrink-0" />
            <span>
              <strong>Property Rights:</strong> Any transfer of property by a senior citizen obtained
              through fraud, coercion, or conditional promises of care can be declared void under Section 23. Legal aid is available
              for such disputes.
            </span>
          </li>
        </ul>
      </section>

      {/* Schemes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-6">Relevant Schemes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <SchemeCard
            title={SCHEMES.seniorCitizens.title}
            description={SCHEMES.seniorCitizens.description}
            link={SCHEMES.seniorCitizens.link}
            linkLabel={SCHEMES.seniorCitizens.linkLabel}
            lastVerified={SCHEMES.seniorCitizens.lastVerified}
          />
          <SchemeCard
            title={SCHEMES.seniorCitizensAct.title}
            description={SCHEMES.seniorCitizensAct.description}
            link={SCHEMES.seniorCitizensAct.link}
            linkLabel={SCHEMES.seniorCitizensAct.linkLabel}
            lastVerified={SCHEMES.seniorCitizensAct.lastVerified}
          />
        </div>
      </section>

      {/* Printable Rights Card Quick Link */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h4 className="font-bold text-navy-800 text-sm">Download Senior Citizens Rights Card</h4>
          <p className="text-xs text-gray-600">Get a 1-page printable summary with Elder Line 14567 and Maintenance Tribunal instructions.</p>
        </div>
        <Link to="/rights-card/senior-citizens" className="btn-secondary text-xs py-2 px-3 shrink-0">
          Print Rights Card
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* How to Get Help */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-navy-800 mb-4">How to Get Help</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <ol className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-sm font-bold flex items-center justify-center shrink-0">1</span>
              <span>
                Call <strong>15100</strong> (NALSA helpline) or <strong>14567</strong> (Elder Line) for immediate guidance and support.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-sm font-bold flex items-center justify-center shrink-0">2</span>
              <span>
                Visit your nearest <strong>District Legal Services Authority (DLSA)</strong> — present in every
                district court complex — to apply for free legal representation.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-sm font-bold flex items-center justify-center shrink-0">3</span>
              <span>
                For maintenance claims, file an application before the <strong>Maintenance Tribunal</strong>{' '}
                (usually the Sub-Divisional Magistrate or District Magistrate) in your district.
              </span>
            </li>
          </ol>
        </div>
      </section>

      {/* Document Checklist */}
      <DocumentChecklist sectionKey="seniorCitizens" />

      {/* FAQs */}
      <FAQAccordion faqs={FAQS_BY_SECTION.seniorCitizens} />
    </SectionLayout>
  );
}
