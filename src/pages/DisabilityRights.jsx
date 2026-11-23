import React from 'react';
import { Accessibility, ExternalLink, IdCard, Building2, Brain, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionLayout from '../components/SectionLayout';
import SchemeCard from '../components/SchemeCard';
import DocumentChecklist from '../components/DocumentChecklist';
import FAQAccordion from '../components/FAQAccordion';
import { FAQS_BY_SECTION } from '../data/faqs';
import { SCHEMES } from '../data/schemes';

export default function DisabilityRights() {
  return (
    <SectionLayout
      icon={Accessibility}
      title="Persons with Disabilities"
      subtitle="Statutory protections under the RPwD Act 2016, UDID card access, and dedicated NALSA legal aid for mental health and intellectual disabilities."
      helplines={[{ label: 'NALSA Legal Aid Helpline', number: '15100' }]}
    >
      {/* Key Rights Under RPwD Act 2016 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-4">Rights of Persons with Disabilities Act, 2016</h2>
        <div className="prose prose-gray max-w-none">
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0" />
              <span>
                <strong>Equal Opportunities & Non-Discrimination:</strong> Section 3 mandates that no person with disability shall be discriminated against on the ground of disability. Establishments must provide reasonable accommodation to enable independent living.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0" />
              <span>
                <strong>Reservation in Education & Employment:</strong> At least <strong>5% seats</strong> in government and government-aided higher educational institutions and at least <strong>4% vacancies</strong> in government posts are reserved for persons with benchmark disabilities.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0" />
              <span>
                <strong>Accessibility Standards:</strong> All public buildings, public transport, websites, consumer products, and government communication must conform to mandatory accessibility norms under Sections 40 to 46.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0" />
              <span>
                <strong>Automatic Right to Free Legal Aid:</strong> Under Section 12 of the Legal Services Authorities Act, 1987, persons with disabilities and persons with mental illness are entitled to free legal aid without income ceilings in most states.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* UDID Card Card */}
      <section className="mb-12">
        <div className="card-accent border-purple-200 bg-gradient-to-br from-purple-50/50 via-white to-navy-50/50">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
              <IdCard className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-navy-800 mb-2">
                Unique Disability ID (UDID) Card — Swavlamban
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                The UDID card is the unified identification document for persons with disabilities issued by the Department of Empowerment of Persons with Disabilities (DEPwD). It removes the need for carrying multiple paper disability certificates across hospitals and states.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700 mb-4">
                <div className="p-3 bg-white rounded-lg border border-purple-100">
                  <p className="font-semibold text-purple-900 mb-1">How to Apply:</p>
                  <p>Register online on swavlambancard.gov.in with Aadhaar, photo, and medical records, followed by assessment at your District Hospital.</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-purple-100">
                  <p className="font-semibold text-purple-900 mb-1">Common Issues & DLSA Assistance:</p>
                  <p>Delays in medical board assessment or renewal rejections can be addressed through DLSA legal representations to the Chief Medical Officer.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.swavlambancard.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-2 px-3.5 bg-purple-700 hover:bg-purple-800"
                >
                  Apply on UDID Portal
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://disabilityaffairs.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-2 px-3.5"
                >
                  DEPwD Ministry Portal
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Schemes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-6">Relevant Schemes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <SchemeCard
            title={SCHEMES.mentalHealth.title}
            description={SCHEMES.mentalHealth.description}
            link={SCHEMES.mentalHealth.link}
            linkLabel={SCHEMES.mentalHealth.linkLabel}
            lastVerified={SCHEMES.mentalHealth.lastVerified}
          />
          <SchemeCard
            title="Assistance to Disabled Persons for Purchase/Fitting of Aids and Appliances (ADIP)"
            description="Government scheme providing modern aids, motorized tricycles, braille kits, and cochlear implants to eligible persons with disabilities free of cost."
            link="https://disabilityaffairs.gov.in/"
            linkLabel="View DEPwD Schemes"
            lastVerified="November 2026"
          />
        </div>
      </section>

      {/* Printable Rights Card Quick Link */}
      <div className="bg-navy-50 border border-navy-200 rounded-xl p-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h4 className="font-bold text-navy-800 text-sm">Download Disability Rights Card</h4>
          <p className="text-xs text-gray-600">Get a 1-page printable summary with RPwD rights, reservation percentages, and helpline info.</p>
        </div>
        <Link to="/rights-card/disability-rights" className="btn-secondary text-xs py-2 px-3 shrink-0">
          Print Rights Card
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Document Checklist */}
      <DocumentChecklist sectionKey="disabilityRights" />

      {/* FAQs */}
      <FAQAccordion faqs={FAQS_BY_SECTION.disabilityRights} />
    </SectionLayout>
  );
}
