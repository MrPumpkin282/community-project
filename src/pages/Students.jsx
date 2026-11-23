import React from 'react';
import { GraduationCap, ExternalLink, ShieldAlert, Award, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionLayout from '../components/SectionLayout';
import SchemeCard from '../components/SchemeCard';
import DocumentChecklist from '../components/DocumentChecklist';
import FAQAccordion from '../components/FAQAccordion';
import { FAQS_BY_SECTION } from '../data/faqs';
import { SCHEMES } from '../data/schemes';

export default function Students() {
  return (
    <SectionLayout
      icon={GraduationCap}
      title="Students & Education Rights"
      subtitle="Know your constitutional right to education, anti-ragging protections, scholarship dispute routes, and EWS quota entitlements."
      helplines={[
        { label: 'UGC Anti-Ragging Helpline', number: '1800-180-5522' },
        { label: 'NALSA Helpline', number: '15100' },
      ]}
    >
      {/* Rights Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-4">Your Educational Rights Under Indian Law</h2>
        <div className="prose prose-gray max-w-none">
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0" />
              <span>
                <strong>Right to Education (RTE) Act, 2009:</strong> Guarantees free and compulsory elementary education to every child aged 6 to 14 years under Article 21A. Section 12(1)(c) mandates private unaided schools to reserve at least <strong>25% of seats</strong> in Grade 1/pre-school for children from Economically Weaker Sections (EWS) and disadvantaged groups.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0" />
              <span>
                <strong>Zero Tolerance to Ragging:</strong> Ragging is a cognizable criminal offence. Under UGC regulations, institutions must maintain active anti-ragging committees. Victims or witnesses can contact the 24x7 toll-free helpline at <strong>1800-180-5522</strong> or register complaints online at{' '}
                <a href="https://www.antiragging.in" target="_blank" rel="noopener noreferrer" className="link-external font-semibold">
                  antiragging.in
                </a>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0" />
              <span>
                <strong>UGC Student Grievance Redressal:</strong> Every university and college must maintain an online Student Grievance Redressal Committee (SGRC) and appoint an Ombudsperson for fee disputes, examination grievances, discrimination, or unlawful certificate retention.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0" />
              <span>
                <strong>Scholarship Escalation (NSP):</strong> If your central or state government scholarship is delayed or rejected arbitrarily, lodge a formal escalation with the National Scholarship Portal Grievance Cell or file a grievance via{' '}
                <a href="https://pgportal.gov.in" target="_blank" rel="noopener noreferrer" className="link-external font-semibold">
                  pgportal.gov.in
                </a>.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Schemes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-6">Relevant Schemes & Legal Aid</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <SchemeCard
            title={SCHEMES.rteLegalAid.title}
            description={SCHEMES.rteLegalAid.description}
            link={SCHEMES.rteLegalAid.link}
            linkLabel={SCHEMES.rteLegalAid.linkLabel}
            lastVerified={SCHEMES.rteLegalAid.lastVerified}
          />
          <SchemeCard
            title={SCHEMES.childFriendly.title}
            description={SCHEMES.childFriendly.description}
            link={SCHEMES.childFriendly.link}
            linkLabel={SCHEMES.childFriendly.linkLabel}
            lastVerified={SCHEMES.childFriendly.lastVerified}
          />
        </div>
      </section>

      {/* Anti-Ragging & Portals */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-6">Official Grievance Portals & Anti-Ragging</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="https://www.antiragging.in"
            target="_blank"
            rel="noopener noreferrer"
            className="card group hover:border-red-300 flex items-start gap-3"
          >
            <ShieldAlert className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-navy-800 group-hover:text-red-700 transition-colors text-sm">
                National Anti-Ragging Portal
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                File confidential complaints, track status, and view UGC compliance
              </p>
              <span className="text-[11px] text-red-600 font-bold mt-1 inline-block">Helpline: 1800-180-5522</span>
            </div>
          </a>

          <a
            href="https://www.ugc.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="card group hover:border-blue-300 flex items-start gap-3"
          >
            <Award className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-navy-800 group-hover:text-blue-700 transition-colors text-sm">
                UGC Portal & Student Grievances
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Official UGC guidelines, Ombudsperson regulations, and higher education grievance mechanisms
              </p>
            </div>
          </a>

          <a
            href="https://scholarships.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="card group hover:border-forest-300 flex items-start gap-3"
          >
            <FileText className="w-5 h-5 text-forest-600 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-navy-800 group-hover:text-forest-700 transition-colors text-sm">
                National Scholarship Portal (NSP)
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Centralized platform for pre-matric, post-matric, and merit-cum-means scholarships
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* Printable Rights Card Quick Link */}
      <div className="bg-navy-50 border border-navy-200 rounded-xl p-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h4 className="font-bold text-navy-800 text-sm">Download Student Rights Card</h4>
          <p className="text-xs text-gray-600">Get a 1-page printable summary with emergency numbers and anti-ragging procedures.</p>
        </div>
        <Link to="/rights-card/students" className="btn-secondary text-xs py-2 px-3 shrink-0">
          Print Rights Card
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Document Checklist */}
      <DocumentChecklist sectionKey="students" />

      {/* FAQs */}
      <FAQAccordion faqs={FAQS_BY_SECTION.students} />
    </SectionLayout>
  );
}
