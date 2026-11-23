import React from 'react';
import { Heart, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionLayout from '../components/SectionLayout';
import SchemeCard from '../components/SchemeCard';
import DocumentChecklist from '../components/DocumentChecklist';
import FAQAccordion from '../components/FAQAccordion';
import { FAQS_BY_SECTION } from '../data/faqs';
import { SCHEMES } from '../data/schemes';

export default function WomenAndChildren() {
  return (
    <SectionLayout
      icon={Heart}
      title="Women & Children"
      subtitle="Dedicated legal aid schemes for women survivors of violence and child-friendly legal services for every child in need."
      helplines={[
        { label: 'NALSA Helpline', number: '15100' },
        { label: 'Women Helpline', number: '181' },
      ]}
    >
      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-4">Your Rights</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-pink-500 shrink-0" />
            <span>
              <strong>Women are automatically eligible</strong> for free legal services under Section 12(c) of the Legal
              Services Authorities Act, 1987 — no income ceiling applies.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-pink-500 shrink-0" />
            <span>
              <strong>Domestic violence victims</strong> can seek immediate relief, protection orders,
              and legal representation through the DLSA. The{' '}
              <a
                href="https://www.indiacode.nic.in/handle/123456789/2021"
                target="_blank"
                rel="noopener noreferrer"
                className="link-external font-semibold inline-flex items-center gap-1 text-navy-700 hover:text-navy-900 underline"
              >
                Protection of Women from Domestic Violence Act, 2005
                <ExternalLink className="w-3.5 h-3.5 inline" />
              </a>{' '}
              guarantees your right to shelter, maintenance, and custody without legal fees.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-pink-500 shrink-0" />
            <span>
              <strong>Compensation for sexual assault survivors:</strong> NALSA's compensation scheme
              provides financial relief to women victims/survivors of sexual assault and other crimes
              through the DLSA.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-pink-500 shrink-0" />
            <span>
              <strong>Child-friendly legal services</strong> ensure that every child — whether a victim,
              witness, or in conflict with the law — receives age-appropriate, sensitive, and effective
              legal support.
            </span>
          </li>
        </ul>
      </section>

      {/* Schemes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-6">Relevant Schemes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <SchemeCard
            title={SCHEMES.childFriendly.title}
            description={SCHEMES.childFriendly.description}
            link={SCHEMES.childFriendly.link}
            linkLabel={SCHEMES.childFriendly.linkLabel}
            lastVerified={SCHEMES.childFriendly.lastVerified}
          />
          <SchemeCard
            title={SCHEMES.womenCompensation.title}
            description={SCHEMES.womenCompensation.description}
            link={SCHEMES.womenCompensation.link}
            linkLabel={SCHEMES.womenCompensation.linkLabel}
            lastVerified={SCHEMES.womenCompensation.lastVerified}
          />
          <SchemeCard
            title={SCHEMES.pwdva.title}
            description={SCHEMES.pwdva.description}
            link={SCHEMES.pwdva.link}
            linkLabel={SCHEMES.pwdva.linkLabel}
            lastVerified={SCHEMES.pwdva.lastVerified}
          />
        </div>
      </section>

      {/* Printable Rights Card Quick Link */}
      <div className="bg-pink-50 border border-pink-200 rounded-xl p-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h4 className="font-bold text-navy-800 text-sm">Download Women &amp; Children Rights Card</h4>
          <p className="text-xs text-gray-600">Get a 1-page printable summary with Women Helpline 181, 15100, and domestic protection steps.</p>
        </div>
        <Link to="/rights-card/women" className="btn-secondary text-xs py-2 px-3 shrink-0">
          Print Rights Card
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* What to do */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-navy-800 mb-4">What You Can Do Right Now</h2>
        <div className="bg-pink-50 border border-pink-200 rounded-xl p-6">
          <ol className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-pink-500 text-white text-sm font-bold flex items-center justify-center shrink-0">1</span>
              <span>
                <strong>Call the NALSA helpline at 15100</strong> (toll-free, 24×7) or the Women Helpline
                at <strong>181</strong> for immediate guidance.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-pink-500 text-white text-sm font-bold flex items-center justify-center shrink-0">2</span>
              <span>
                <strong>Visit your nearest DLSA</strong> at the district court complex — no appointment
                needed. Tell them your situation and they will assign a lawyer.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-pink-500 text-white text-sm font-bold flex items-center justify-center shrink-0">3</span>
              <span>
                <strong>If in immediate danger</strong>, call the police at <strong>112</strong> or <strong>100</strong>, or the
                Women Helpline at <strong>181</strong>. You can also approach the nearest police station
                for an FIR and protection.
              </span>
            </li>
          </ol>
        </div>
      </section>

      {/* Document Checklist */}
      <DocumentChecklist sectionKey="womenAndChildren" />

      {/* FAQs */}
      <FAQAccordion faqs={FAQS_BY_SECTION.womenAndChildren} />
    </SectionLayout>
  );
}
