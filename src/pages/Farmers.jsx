import React from 'react';
import { Sprout, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionLayout from '../components/SectionLayout';
import SchemeCard from '../components/SchemeCard';
import DocumentChecklist from '../components/DocumentChecklist';
import FAQAccordion from '../components/FAQAccordion';
import { FAQS_BY_SECTION } from '../data/faqs';
import { SCHEMES } from '../data/schemes';

export default function Farmers() {
  return (
    <SectionLayout
      icon={Sprout}
      title="Farmers"
      subtitle="Know your rights to income support, loan relief, and free legal aid for agricultural grievances."
      helplines={[
        { label: 'PM-KISAN Toll-Free', number: '155261' },
        { label: 'PM-KISAN Alternate', number: '1800-115-526' },
        { label: 'PM-KISAN Landline', number: '011-24300606' },
        { label: 'NALSA Helpline', number: '15100' },
      ]}
    >
      {/* Rights Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-4">Your Rights as a Farmer</h2>
        <div className="prose prose-gray max-w-none">
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-green-500 shrink-0" />
              <span>
                <strong>PM-KISAN Income Support:</strong> Eligible farmer families receive ₹6,000 per year
                (in three instalments of ₹2,000 each) directly into their bank accounts under the{' '}
                <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="link-external">
                  PM-KISAN scheme
                </a>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-green-500 shrink-0" />
              <span>
                <strong>Grievance Redressal:</strong> If you face issues with PM-KISAN payments, land records,
                or government scheme entitlements, you can file a complaint on the{' '}
                <a href="https://pgportal.gov.in" target="_blank" rel="noopener noreferrer" className="link-external">
                  PGPORTAL (Public Grievances Portal)
                </a>{' '}
                or the{' '}
                <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="link-external">
                  Farmers Corner on pmkisan.gov.in
                </a>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-green-500 shrink-0" />
              <span>
                <strong>Debt &amp; Loan Relief:</strong> If you are facing harassment by lenders, wrongful
                recovery proceedings, or need help understanding loan waiver schemes, NALSA&apos;s legal aid
                scheme for poverty alleviation covers agricultural debt issues. Contact your nearest DLSA.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-green-500 shrink-0" />
              <span>
                <strong>Free Legal Aid:</strong> Farmers who qualify under income criteria are eligible for free
                legal representation through the District Legal Services Authority (DLSA). Walk in to any DLSA
                at your district court complex or call <strong>15100</strong>.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Schemes */}
      <section className="mb-12">
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
            title={SCHEMES.pmKisan.title}
            description={SCHEMES.pmKisan.description}
            link={SCHEMES.pmKisan.link}
            linkLabel={SCHEMES.pmKisan.linkLabel}
            lastVerified={SCHEMES.pmKisan.lastVerified}
          />
        </div>
      </section>

      {/* Printable Rights Card Quick Link */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h4 className="font-bold text-navy-800 text-sm">Download Farmer Rights Card</h4>
          <p className="text-xs text-gray-600">Get a 1-page printable summary with PM-KISAN helpline numbers and debt relief guidance.</p>
        </div>
        <Link to="/rights-card/farmers" className="btn-saffron text-xs py-2 px-3.5 shrink-0 bg-[#FF9933] hover:bg-[#e07000] text-white">
          Print Rights Card
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Key Contacts */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-navy-800 mb-6">Key Contacts &amp; Portals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              label: 'PM-KISAN Portal',
              desc: 'Check status, register, or raise issues',
              href: 'https://pmkisan.gov.in',
            },
            {
              label: 'PGPORTAL',
              desc: 'File public grievances including PM-KISAN',
              href: 'https://pgportal.gov.in',
            },
            {
              label: 'PM-KISAN (NIC Project Page)',
              desc: 'Technical details and project information',
              href: 'https://www.nic.gov.in/project/pm-kisan/',
            },
            {
              label: 'NALSA Schemes',
              desc: 'All NALSA legal aid scheme documents',
              href: 'https://nalsa.gov.in/preventive-strategic-legal-services-schemes/',
            },
            {
              label: 'NALSA FAQs',
              desc: 'Frequently asked questions about legal aid',
              href: 'https://nalsa.gov.in/faqs/',
            },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex items-start gap-3 hover:border-green-300"
            >
              <ExternalLink className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-navy-800 group-hover:text-green-700 transition-colors text-sm">
                  {item.label}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                <span className="text-[10px] text-gray-400 mt-1 block">Last verified: November 2026</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Document Checklist */}
      <DocumentChecklist sectionKey="farmers" />

      {/* FAQs */}
      <FAQAccordion faqs={FAQS_BY_SECTION.farmers} />
    </SectionLayout>
  );
}
