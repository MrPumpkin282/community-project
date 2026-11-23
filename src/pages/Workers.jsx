import React from 'react';
import { HardHat, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionLayout from '../components/SectionLayout';
import SchemeCard from '../components/SchemeCard';
import DocumentChecklist from '../components/DocumentChecklist';
import FAQAccordion from '../components/FAQAccordion';
import { FAQS_BY_SECTION } from '../data/faqs';
import { SCHEMES } from '../data/schemes';

export default function Workers() {
  return (
    <SectionLayout
      icon={HardHat}
      title="Workers & Unorganized Sector"
      subtitle="Legal rights, welfare schemes, and e-Shram registration for India's informal and unorganized workforce."
      helplines={[
        { label: 'NALSA Helpline', number: '15100' },
        { label: 'e-Shram Helpdesk', number: '14434' },
      ]}
    >
      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-4">Your Rights as a Worker</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-orange-500 shrink-0" />
            <span>
              <strong>e-Shram Registration:</strong> All unorganized workers (construction workers,
              street vendors, domestic workers, agricultural labourers, gig workers, etc.) can register
              on the{' '}
              <a href="https://eshram.gov.in" target="_blank" rel="noopener noreferrer" className="link-external font-semibold">
                e-Shram portal
              </a>{' '}
              to receive a Universal Account Number (UAN) and access to social security benefits.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-orange-500 shrink-0" />
            <span>
              <strong>Accident Insurance:</strong> Registered e-Shram workers are entitled to accidental
              insurance coverage of ₹2 lakh (death/permanent disability) and ₹1 lakh (partial disability)
              under the Pradhan Mantri Suraksha Bima Yojana framework.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-orange-500 shrink-0" />
            <span>
              <strong>Free Legal Aid:</strong> Industrial workers and unorganized sector workers are
              specifically listed as eligible for free legal services under Section 12 of the Legal Services Authorities
              Act, 1987.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-orange-500 shrink-0" />
            <span>
              <strong>Wage &amp; Employment Disputes:</strong> If you face wage theft, wrongful termination,
              unsafe working conditions, or non-payment of minimum wages under the{' '}
              <a
                href="https://www.indiacode.nic.in/handle/123456789/15456"
                target="_blank"
                rel="noopener noreferrer"
                className="link-external font-semibold inline-flex items-center gap-1 text-navy-700 hover:text-navy-900 underline"
              >
                Code on Wages, 2019
                <ExternalLink className="w-3.5 h-3.5 inline" />
              </a>
              , the DLSA can provide free legal representation and help you file recovery petitions with the Labour Commissioner.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-orange-500 shrink-0" />
            <span>
              <strong>Construction Worker Rights:</strong> Construction laborers are safeguarded by the{' '}
              <a
                href="https://www.indiacode.nic.in/handle/123456789/1987"
                target="_blank"
                rel="noopener noreferrer"
                className="link-external font-semibold inline-flex items-center gap-1 text-navy-700 hover:text-navy-900 underline"
              >
                Building and Other Construction Workers (BOCW) Act, 1996
                <ExternalLink className="w-3.5 h-3.5 inline" />
              </a>
              , giving you statutory claims to state welfare board benefits, safety standards, accident compensations, and maternity relief.
            </span>
          </li>
        </ul>
      </section>

      {/* Schemes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-6">Relevant Schemes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <SchemeCard
            title={SCHEMES.unorganizedWorkers.title}
            description={SCHEMES.unorganizedWorkers.description}
            link={SCHEMES.unorganizedWorkers.link}
            linkLabel={SCHEMES.unorganizedWorkers.linkLabel}
            lastVerified={SCHEMES.unorganizedWorkers.lastVerified}
          />
          <SchemeCard
            title="e-Shram (Unorganized Workers Portal)"
            description="National database for unorganized workers. Register to get a Universal Account Number (UAN) and access social security schemes, insurance, and welfare benefits."
            link="https://eshram.gov.in"
            linkLabel="Visit e-Shram Portal"
            lastVerified="November 2026"
          />
          <SchemeCard
            title={SCHEMES.bocwAct.title}
            description={SCHEMES.bocwAct.description}
            link={SCHEMES.bocwAct.link}
            linkLabel={SCHEMES.bocwAct.linkLabel}
            lastVerified={SCHEMES.bocwAct.lastVerified}
          />
        </div>
      </section>

      {/* Printable Rights Card Quick Link */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h4 className="font-bold text-navy-800 text-sm">Download Unorganized Workers Rights Card</h4>
          <p className="text-xs text-gray-600">Get a 1-page printable summary with e-Shram registration details and wage recovery instructions.</p>
        </div>
        <Link to="/rights-card/workers" className="btn-saffron text-xs py-2 px-3.5 shrink-0 bg-[#FF9933] hover:bg-[#e07000] text-white">
          Print Rights Card
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* e-Shram CTA */}
      <section className="mb-8">
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
          <h3 className="font-bold text-navy-800 mb-3 text-lg">Register on e-Shram Today</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            If you are a construction worker, domestic worker, street vendor, rickshaw puller,
            agricultural labourer, or any other unorganized sector worker, register on e-Shram to get
            your UAN and start receiving benefits.
          </p>
          <a
            href="https://eshram.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-saffron bg-[#FF9933] hover:bg-[#e07000] text-white"
          >
            Register on e-Shram
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Document Checklist */}
      <DocumentChecklist sectionKey="workers" />

      {/* FAQs */}
      <FAQAccordion faqs={FAQS_BY_SECTION.workers} />
    </SectionLayout>
  );
}
