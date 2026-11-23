import React from 'react';
import { AlertTriangle, ExternalLink } from 'lucide-react';
import SectionLayout from '../components/SectionLayout';
import SchemeCard from '../components/SchemeCard';
import DocumentChecklist from '../components/DocumentChecklist';
import FAQAccordion from '../components/FAQAccordion';
import { FAQS_BY_SECTION } from '../data/faqs';
import { SCHEMES } from '../data/schemes';

export default function DisasterAndVictims() {
  return (
    <SectionLayout
      icon={AlertTriangle}
      title="Disaster & Victim Support"
      subtitle="Free legal aid for survivors of natural disasters, acid attacks, trafficking, and other crimes — because recovery includes justice."
      helplines={[
        { label: 'NALSA Helpline', number: '15100' },
        { label: 'Emergency', number: '112' },
      ]}
    >
      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-4">Who Is Covered</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-red-500 shrink-0" />
            <span>
              <strong>Disaster Victims:</strong> Persons affected by floods, earthquakes, cyclones,
              droughts, industrial disasters, and other mass calamities are eligible for free legal
              services under Section 12(e) — including help with relief claims, insurance, land/property disputes, missing
              documents, and government compensation.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-red-500 shrink-0" />
            <span>
              <strong>Acid Attack Survivors:</strong> NALSA provides dedicated legal services to victims
              of acid attacks, including statutory compensation claims, medical expense coverage, and criminal
              prosecution support.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-red-500 shrink-0" />
            <span>
              <strong>Trafficking Victims:</strong> Persons rescued from human trafficking, forced
              labour, or commercial sexual exploitation receive free legal representation, rehabilitation
              assistance, and help with compensation and identity restoration.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-red-500 shrink-0" />
            <span>
              <strong>Victims of Ethnic Violence &amp; Caste Atrocity:</strong> Persons affected by communal
              violence, ethnic conflict, or caste-based atrocities are automatically eligible for free
              legal aid under the Act.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-red-500 shrink-0" />
            <span>
              <strong>Statutory Victim Compensation:</strong> Under{' '}
              <a
                href="https://www.indiacode.nic.in/handle/123456789/16225"
                target="_blank"
                rel="noopener noreferrer"
                className="link-external font-semibold inline-flex items-center gap-1 text-navy-700 hover:text-navy-900 underline"
              >
                Section 357A CrPC / Sec 396 BNSS
                <ExternalLink className="w-3.5 h-3.5 inline" />
              </a>{' '}
              and the{' '}
              <a
                href="https://nalsa.gov.in/acts-rules/schemes/nalsa-s-compensation-scheme-for-women-victims-survivors-of-sexual-assault-other-crimes-2018"
                target="_blank"
                rel="noopener noreferrer"
                className="link-external font-semibold inline-flex items-center gap-1 text-navy-700 hover:text-navy-900 underline"
              >
                NALSA Victim Compensation Schemes
                <ExternalLink className="w-3.5 h-3.5 inline" />
              </a>
              , state governments are legally mandated to maintain victim compensation funds providing emergency interim relief and long-term rehabilitation for survivors of grievous crimes.
            </span>
          </li>
        </ul>
      </section>

      {/* Schemes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-6">Relevant Schemes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <SchemeCard
            title={SCHEMES.disasterVictims.title}
            description={SCHEMES.disasterVictims.description}
            link={SCHEMES.disasterVictims.link}
            linkLabel={SCHEMES.disasterVictims.linkLabel}
            lastVerified={SCHEMES.disasterVictims.lastVerified}
          />
          <SchemeCard
            title={SCHEMES.acidAttacks.title}
            description={SCHEMES.acidAttacks.description}
            link={SCHEMES.acidAttacks.link}
            linkLabel={SCHEMES.acidAttacks.linkLabel}
            lastVerified={SCHEMES.acidAttacks.lastVerified}
          />
          <SchemeCard
            title={SCHEMES.trafficking.title}
            description={SCHEMES.trafficking.description}
            link={SCHEMES.trafficking.link}
            linkLabel={SCHEMES.trafficking.linkLabel}
            lastVerified={SCHEMES.trafficking.lastVerified}
          />
          <SchemeCard
            title={SCHEMES.victimCompensation.title}
            description={SCHEMES.victimCompensation.description}
            link={SCHEMES.victimCompensation.link}
            linkLabel={SCHEMES.victimCompensation.linkLabel}
            lastVerified={SCHEMES.victimCompensation.lastVerified}
          />
        </div>
      </section>

      {/* Immediate Help */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-navy-800 mb-4">If You Need Immediate Help</h2>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <ol className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-red-500 text-white text-sm font-bold flex items-center justify-center shrink-0">1</span>
              <span>
                <strong>In an emergency</strong>, call <strong>112</strong> (National Emergency Number)
                or <strong>100</strong> (Police).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-red-500 text-white text-sm font-bold flex items-center justify-center shrink-0">2</span>
              <span>
                <strong>For legal aid</strong>, call <strong>15100</strong> (NALSA helpline) or visit your
                nearest DLSA at the district court complex.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-red-500 text-white text-sm font-bold flex items-center justify-center shrink-0">3</span>
              <span>
                NALSA will assign a panel lawyer who will represent you free of cost — including filing
                FIRs, compensation applications, and court proceedings.
              </span>
            </li>
          </ol>
        </div>
      </section>

      {/* Document Checklist */}
      <DocumentChecklist sectionKey="disasterAndVictims" />

      {/* FAQs */}
      <FAQAccordion faqs={FAQS_BY_SECTION.disasterAndVictims} />
    </SectionLayout>
  );
}
