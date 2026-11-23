import React from 'react';
import { Shield, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionLayout from '../components/SectionLayout';
import SchemeCard from '../components/SchemeCard';
import DocumentChecklist from '../components/DocumentChecklist';
import FAQAccordion from '../components/FAQAccordion';
import { FAQS_BY_SECTION } from '../data/faqs';
import { SCHEMES } from '../data/schemes';

export default function ScStTribal() {
  return (
    <SectionLayout
      icon={Shield}
      title="SC/ST & Tribal Rights"
      subtitle="Legal protection, enforcement of tribal rights, and dedicated NALSA schemes for Scheduled Castes, Scheduled Tribes, and Denotified/Nomadic communities."
      helplines={[{ label: 'NALSA Helpline', number: '15100' }]}
    >
      {/* Rights Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-4">Your Rights</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-purple-500 shrink-0" />
            <span>
              <strong>Automatic Eligibility:</strong> Members of Scheduled Castes (SC) and Scheduled
              Tribes (ST) are automatically eligible for free legal aid under Section 12(a) of the Legal Services
              Authorities Act, 1987 — no income ceiling applies.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-purple-500 shrink-0" />
            <span>
              <strong>Protection Against Atrocities:</strong> The{' '}
              <a
                href="https://www.indiacode.nic.in/handle/123456789/1944"
                target="_blank"
                rel="noopener noreferrer"
                className="link-external font-semibold inline-flex items-center gap-1 text-navy-700 hover:text-navy-900 underline"
              >
                Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989
                <ExternalLink className="w-3.5 h-3.5 inline" />
              </a>{' '}
              provides stringent legal protection against caste-based discrimination, social boycotts, physical violence, and harassment.
              Victims are entitled to Special Court prosecution, automatic free DLSA counsel, and mandatory statutory monetary relief.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-purple-500 shrink-0" />
            <span>
              <strong>Forest &amp; Land Rights:</strong> The{' '}
              <a
                href="https://www.indiacode.nic.in/handle/123456789/2056"
                target="_blank"
                rel="noopener noreferrer"
                className="link-external font-semibold inline-flex items-center gap-1 text-navy-700 hover:text-navy-900 underline"
              >
                Forest Rights Act, 2006 (FRA)
                <ExternalLink className="w-3.5 h-3.5 inline" />
              </a>{' '}
              (Scheduled Tribes and Other Traditional Forest Dwellers Act) recognizes individual and community rights of tribal communities to
              forest land, minor forest produce, and traditional habitat against unlawful eviction. NALSA's tribal rights scheme supports enforcement
              and defense of these rights.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-purple-500 shrink-0" />
            <span>
              <strong>Denotified &amp; Nomadic Tribes:</strong> The NALSA SAMVAD Scheme, 2025 specifically
              addresses the legal needs of Adivasi communities, Denotified Tribes (DNTs), and
              Semi-Nomadic/Nomadic Tribes — groups that often face systemic marginalization and
              criminalization.
            </span>
          </li>
        </ul>
      </section>

      {/* Schemes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-6">Relevant Schemes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <SchemeCard
            title={SCHEMES.tribalRights.title}
            description={SCHEMES.tribalRights.description}
            link={SCHEMES.tribalRights.link}
            linkLabel={SCHEMES.tribalRights.linkLabel}
            lastVerified={SCHEMES.tribalRights.lastVerified}
          />
          <SchemeCard
            title={SCHEMES.samvadScheme.title}
            description={SCHEMES.samvadScheme.description}
            link={SCHEMES.samvadScheme.link}
            linkLabel={SCHEMES.samvadScheme.linkLabel}
            lastVerified={SCHEMES.samvadScheme.lastVerified}
          />
          <SchemeCard
            title={SCHEMES.scStPoaAct.title}
            description={SCHEMES.scStPoaAct.description}
            link={SCHEMES.scStPoaAct.link}
            linkLabel={SCHEMES.scStPoaAct.linkLabel}
            lastVerified={SCHEMES.scStPoaAct.lastVerified}
          />
        </div>
      </section>

      {/* Printable Rights Card Quick Link */}
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h4 className="font-bold text-navy-800 text-sm">Download SC/ST &amp; Tribal Rights Card</h4>
          <p className="text-xs text-gray-600">Get a 1-page printable summary with PoA Act rights, Forest Rights Act guidance, and SAMVAD scheme info.</p>
        </div>
        <Link to="/rights-card/sc-st" className="btn-secondary text-xs py-2 px-3 shrink-0">
          Print Rights Card
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Key Issues */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-navy-800 mb-4">Common Issues We Can Help With</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: 'Caste Discrimination', desc: 'Filing complaints under the SC/ST (Prevention of Atrocities) Act' },
            { title: 'Forest & Land Rights', desc: 'Claims under the Forest Rights Act, 2006' },
            { title: 'Identity Documents', desc: 'Help obtaining caste certificates, Aadhaar, ration cards' },
            { title: 'Government Scheme Access', desc: 'Ensuring benefits of reservation and welfare schemes reach you' },
            { title: 'False Cases & Stereotyping', desc: 'Legal defence for communities facing habitual offender laws' },
            { title: 'Bonded Labour', desc: 'Liberation and rehabilitation under bonded labour abolition laws' },
          ].map((item, i) => (
            <div key={i} className="card">
              <h3 className="font-semibold text-navy-800 text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Document Checklist */}
      <DocumentChecklist sectionKey="scStTribal" />

      {/* FAQs */}
      <FAQAccordion faqs={FAQS_BY_SECTION.scStTribal} />
    </SectionLayout>
  );
}
