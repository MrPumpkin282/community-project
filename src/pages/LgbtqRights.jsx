import React from 'react';
import { HeartHandshake, ExternalLink, Scale, ShieldCheck, FileCheck2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionLayout from '../components/SectionLayout';
import SchemeCard from '../components/SchemeCard';
import DocumentChecklist from '../components/DocumentChecklist';
import FAQAccordion from '../components/FAQAccordion';
import { FAQS_BY_SECTION } from '../data/faqs';
import { SCHEMES } from '../data/schemes';

export default function LgbtqRights() {
  return (
    <SectionLayout
      icon={HeartHandshake}
      title="LGBTQ+ Rights"
      subtitle="Plain-language summaries of landmark Supreme Court judgments, statutory protections under the Transgender Persons Act 2019, and access to free legal aid."
      helplines={[{ label: 'NALSA Legal Aid Helpline', number: '15100' }]}
    >
      {/* Landmark Supreme Court Precedents */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-4">Landmark Supreme Court Judgments (Plain-Language Summary)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card border-navy-200">
            <div className="flex items-center gap-2 mb-3 text-navy-700">
              <Scale className="w-5 h-5 text-saffron-500" />
              <h3 className="font-bold text-base">NALSA v. Union of India (2014)</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The Supreme Court of India recognized <strong>transgender persons as a third gender</strong> and affirmed their constitutional right to self-identify their gender identity under Articles 14, 15, 19, and 21. The Court directed governments to grant legal recognition of gender identity (male, female, or transgender) and extend welfare measures.
            </p>
            <a
              href="https://nalsa.gov.in/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-navy-600 hover:text-navy-800"
            >
              NALSA Official Portal
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="card border-navy-200">
            <div className="flex items-center gap-2 mb-3 text-navy-700">
              <Scale className="w-5 h-5 text-saffron-500" />
              <h3 className="font-bold text-base">Navtej Singh Johar v. Union of India (2018)</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              A five-judge Constitution Bench unanimously held that Section 377 of the Indian Penal Code, insofar as it criminalized <strong>consensual sexual acts of adults in private</strong>, violated the fundamental rights to equality, liberty, privacy, and non-discrimination. Consensual adult relationships between persons of the same sex are not an offence.
            </p>
            <a
              href="https://nalsa.gov.in/faqs/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-navy-600 hover:text-navy-800"
            >
              NALSA FAQs on Legal Rights
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Statutory Protections: Transgender Persons Act, 2019 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-4">Statutory Protections: Transgender Persons Act, 2019</h2>
        <div className="card-accent border-navy-200">
          <ul className="space-y-3 text-gray-700 text-sm">
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-saffron-500 shrink-0" />
              <span>
                <strong>Right to Certificate of Identity:</strong> A transgender person has the right to apply for a Certificate of Identity through the District Magistrate via the National Portal for Transgender Persons without invasive medical tests.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-saffron-500 shrink-0" />
              <span>
                <strong>Prohibition of Discrimination:</strong> Discrimination against transgender persons is strictly prohibited in education, employment, healthcare, housing, and access to public or private services.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-saffron-500 shrink-0" />
              <span>
                <strong>Equal Right to Legal Aid:</strong> Transgender persons facing police harassment, unlawful eviction, family violence, or denial of public services can approach their nearest DLSA for free representation.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Schemes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-6">Relevant Schemes & Official Portals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <SchemeCard
            title={SCHEMES.transgenderLegalAid.title}
            description={SCHEMES.transgenderLegalAid.description}
            link={SCHEMES.transgenderLegalAid.link}
            linkLabel={SCHEMES.transgenderLegalAid.linkLabel}
            lastVerified={SCHEMES.transgenderLegalAid.lastVerified}
          />
          <SchemeCard
            title="National Portal for Transgender Persons (Ministry of Social Justice)"
            description="Official portal of the Ministry of Social Justice and Empowerment for welfare schemes, legal protections, and guidelines on Certificate of Identity under the 2019 Act."
            link="https://socialjustice.gov.in/"
            linkLabel="Visit Ministry Portal"
            lastVerified="November 2026"
          />
        </div>
      </section>

      {/* Document Checklist */}
      <DocumentChecklist sectionKey="lgbtqRights" />

      {/* FAQs */}
      <FAQAccordion faqs={FAQS_BY_SECTION.lgbtqRights} />
    </SectionLayout>
  );
}
