import React from 'react';
import { ShieldCheck, AlertTriangle, Phone, ExternalLink, ShieldAlert, CheckCircle, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionLayout from '../components/SectionLayout';
import SchemeCard from '../components/SchemeCard';
import DocumentChecklist from '../components/DocumentChecklist';
import FAQAccordion from '../components/FAQAccordion';
import { FAQS_BY_SECTION } from '../data/faqs';
import { SCHEMES } from '../data/schemes';

export default function CyberSafety() {
  return (
    <SectionLayout
      icon={ShieldCheck}
      title="Cyber Fraud & Digital Arrest Scams"
      subtitle="Recognize fraudulent video interrogation scams, protect your finances, and take immediate action through Helpline 1930 and DLSA."
      helplines={[
        { label: 'National Cybercrime Helpline', number: '1930' },
        { label: 'NALSA Legal Aid Helpline', number: '15100' },
      ]}
    >
      {/* What is Digital Arrest */}
      <section className="mb-12">
        <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-red-950 mb-3">
                CRITICAL WARNING: &ldquo;Digital Arrest&rdquo; Is a 100% Fake Scam
              </h2>
              <p className="text-sm text-red-900 leading-relaxed mb-4">
                In India, <strong>there is NO legal concept of &ldquo;Digital Arrest&rdquo;</strong> under the Bharatiya Nagarik Suraksha Sanhita (BNSS) or the Information Technology Act.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-red-900">
                <div className="bg-white p-4 rounded-xl border border-red-200">
                  <p className="font-bold text-red-800 text-sm mb-1.5">What Scammers Do:</p>
                  <ul className="space-y-1.5 list-disc pl-4">
                    <li>Call via WhatsApp/Skype in police, CBI, ED, or Customs uniforms.</li>
                    <li>Claim your Aadhaar/SIM card was used in drug trafficking, money laundering, or illegal parcels.</li>
                    <li>Show fake arrest warrants, court logos, or police station studio backgrounds.</li>
                    <li>Forbid you from disconnecting video calls or calling family members.</li>
                    <li>Demand transferring all your savings to a &ldquo;secret RBI clearing account&rdquo; for verification.</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-xl border border-red-200">
                  <p className="font-bold text-green-800 text-sm mb-1.5">What Actual Law Enforcement Does:</p>
                  <ul className="space-y-1.5 list-disc pl-4">
                    <li>Never interrogates or issues judicial arrest warrants over Skype or WhatsApp.</li>
                    <li>Never demands money or RTGS transfers to &ldquo;verify funds&rdquo; or avoid arrest.</li>
                    <li>Must serve formal written summons under Section 35 of BNSS (Section 41A CrPC) requiring physical appearance.</li>
                    <li>Officers must clearly display their physical name tags and official jurisdiction.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Red Flags Checklist */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-6">Red Flags Checklist: Spot a Scam Instantly</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: 'Artificial Urgency',
              desc: '&ldquo;Pay within 15 minutes or police will raid your house immediately.&rdquo;',
            },
            {
              title: 'Isolation Tactics',
              desc: '&ldquo;Do not tell anyone, keep the camera turned on continuously overnight.&rdquo;',
            },
            {
              title: 'Fund Transfer to Safe Account',
              desc: 'Asking to transfer money to personal bank accounts labeled &ldquo;Government Reserve&rdquo;.',
            },
            {
              title: 'Fake Badges & Virtual Courts',
              desc: 'Scammers posing as Chief Justice, CBI Director, or Telecom Regulatory Authority.',
            },
          ].map((item, i) => (
            <div key={i} className="card border-red-100 hover:border-red-300">
              <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mb-3">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-navy-800 mb-1">{item.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Immediate Steps in Golden Hour */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-6">What to Do in the First &ldquo;Golden Hour&rdquo;</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="card-accent border-navy-200">
            <span className="text-2xl font-black text-navy-700">1</span>
            <h3 className="font-bold text-navy-800 text-base mt-2 mb-2">Dial 1930 Immediately</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              The National Cybercrime Helpline operates 24x7. Reporting within the first 2-3 hours enables police to instruct banks to freeze fraudulent money in transit before fraudsters withdraw it.
            </p>
          </div>
          <div className="card-accent border-navy-200">
            <span className="text-2xl font-black text-navy-700">2</span>
            <h3 className="font-bold text-navy-800 text-base mt-2 mb-2">File at cybercrime.gov.in</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Submit your formal complaint on the official portal with transaction IDs, bank statements, screenshots of chats, and caller mobile numbers. Save the acknowledgement number.
            </p>
          </div>
          <div className="card-accent border-navy-200">
            <span className="text-2xl font-black text-navy-700">3</span>
            <h3 className="font-bold text-navy-800 text-base mt-2 mb-2">Approach DLSA for Bank Unfreezing</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              If your bank account was frozen because money passed through it or you were duped into becoming a mule, visit your DLSA for free representation before the judicial magistrate.
            </p>
          </div>
        </div>
      </section>

      {/* Relevant Schemes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-6">Relevant Schemes & Model Protocols</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <SchemeCard
            title={SCHEMES.cyberFraudAssistance.title}
            description={SCHEMES.cyberFraudAssistance.description}
            link={SCHEMES.cyberFraudAssistance.link}
            linkLabel={SCHEMES.cyberFraudAssistance.linkLabel}
            lastVerified={SCHEMES.cyberFraudAssistance.lastVerified}
          />
          <SchemeCard
            title="National Cybercrime Reporting Portal (MHA / I4C)"
            description="The central government platform for reporting financial cyber fraud, cyber stalking, and extortion scams with direct integration to national banks."
            link="https://cybercrime.gov.in"
            linkLabel="Visit cybercrime.gov.in"
            lastVerified="November 2026"
          />
        </div>
      </section>

      {/* Document Checklist */}
      <DocumentChecklist sectionKey="cyberSafety" />

      {/* FAQs */}
      <FAQAccordion faqs={FAQS_BY_SECTION.cyberSafety} />
    </SectionLayout>
  );
}
