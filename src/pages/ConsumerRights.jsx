import React from 'react';
import { ShoppingBag, ExternalLink, Home, ShieldCheck, Scale, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionLayout from '../components/SectionLayout';
import SchemeCard from '../components/SchemeCard';
import DocumentChecklist from '../components/DocumentChecklist';
import FAQAccordion from '../components/FAQAccordion';
import { FAQS_BY_SECTION } from '../data/faqs';
import { SCHEMES } from '../data/schemes';

export default function ConsumerRights() {
  return (
    <SectionLayout
      icon={ShoppingBag}
      title="Tenant, Landlord & Consumer Rights"
      subtitle="Defend your rights against defective products, deficiency in services, unlawful landlord eviction, and file complaints via e-Daakhil."
      helplines={[
        { label: 'National Consumer Helpline', number: '1915' },
        { label: 'NALSA Legal Aid Helpline', number: '15100' },
      ]}
    >
      {/* Consumer Protection Act 2019 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-4 flex flex-wrap items-center gap-2">
          <span>Consumer Protection Act, 2019 Basics</span>
          <a
            href="https://www.indiacode.nic.in/handle/123456789/15256"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-normal text-navy-600 hover:text-navy-900 underline inline-flex items-center gap-1"
          >
            (Act No. 35 of 2019 on India Code <ExternalLink className="w-3 h-3" />)
          </a>
        </h2>
        <div className="prose prose-gray max-w-none">
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-forest-500 shrink-0" />
              <span>
                <strong>Right to Safety, Information & Choice:</strong> You are protected against hazardous products, misleading advertisements, unfair trade practices, and deficient services by e-commerce platforms, airlines, hospitals, banks, and builders.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-forest-500 shrink-0" />
              <span>
                <strong>Three-Tier Quasi-Judicial Commissions:</strong> District Consumer Disputes Redressal Commission (claims up to ₹50 Lakh), State Commission (claims up to ₹2 Crore), and National Commission (NCDRC for claims above ₹2 Crore).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-forest-500 shrink-0" />
              <span>
                <strong>Zero Court Fees up to ₹5 Lakh:</strong> Filing a consumer complaint before the District Commission for claim values up to ₹5,00,000 requires <strong>zero court fee</strong>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-forest-500 shrink-0" />
              <span>
                <strong>e-Jagriti (e-Daakhil) Online Filing:</strong> File consumer cases from your home via{' '}
                <a href="https://e-jagriti.gov.in" target="_blank" rel="noopener noreferrer" className="link-external font-semibold">
                  e-jagriti.gov.in
                </a>{' '}
                without hiring a private advocate.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Tenant & Landlord Rights */}
      <section className="mb-12">
        <div className="card-accent border-amber-200 bg-gradient-to-br from-amber-50/60 via-white to-navy-50/40 p-6 rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0">
              <Home className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Tenant & Landlord Rights</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Tenancy regulations in India are governed by <strong>State Rent Control Acts</strong> and the{' '}
                <a
                  href="https://mohua.gov.in/upload/uploadfiles/files/Model_Tenancy_Act_English.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-external font-semibold inline-flex items-center gap-1 text-navy-700 hover:text-navy-900 underline"
                >
                  Model Tenancy Act (MoHUA)
                  <ExternalLink className="w-3.5 h-3.5 inline" />
                </a>{' '}
                (where adopted by state legislatures).
              </p>
              <div className="p-3.5 bg-white rounded-xl border border-amber-200 text-xs text-gray-700 mb-3 space-y-2">
                <p>
                  <strong>⚠️ State Variation Disclaimer:</strong> Specific rules regarding security deposit caps (commonly 1–2 months rent for residential premises), standard rent revision, and eviction procedures <em>vary significantly from state to state</em>. Always consult your state&apos;s specific Rent Control Act or speak to your DLSA before taking legal steps.
                </p>
                <ul className="list-disc pl-4 space-y-1 text-gray-600">
                  <li>Landlords cannot arbitrarily cut off essential supplies (water, electricity) under any circumstance.</li>
                  <li>Landlords must give reasonable prior written notice (usually 24 hours) before entering rented premises for repairs.</li>
                  <li>Evictions must follow due legal process through the Rent Controller or Civil Court; self-help eviction is unlawful.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portals & Schemes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-6">Official Portals & Schemes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <SchemeCard
            title={SCHEMES.consumerProtection.title}
            description={SCHEMES.consumerProtection.description}
            link={SCHEMES.consumerProtection.link}
            linkLabel={SCHEMES.consumerProtection.linkLabel}
            lastVerified={SCHEMES.consumerProtection.lastVerified}
          />
          <SchemeCard
            title="National Consumer Helpline (NCH / INGRAM Portal)"
            description="Pre-litigation grievance redressal operated by the Department of Consumer Affairs. Call 1915 or file complaints online against registered companies."
            link="https://consumerhelpline.gov.in"
            linkLabel="Visit consumerhelpline.gov.in"
            lastVerified="November 2026"
          />
          <SchemeCard
            title={SCHEMES.modelTenancyAct.title}
            description={SCHEMES.modelTenancyAct.description}
            link={SCHEMES.modelTenancyAct.link}
            linkLabel={SCHEMES.modelTenancyAct.linkLabel}
            lastVerified={SCHEMES.modelTenancyAct.lastVerified}
          />
        </div>
      </section>

      {/* Document Checklist */}
      <DocumentChecklist sectionKey="consumerRights" />

      {/* FAQs */}
      <FAQAccordion faqs={FAQS_BY_SECTION.consumerRights} />
    </SectionLayout>
  );
}
