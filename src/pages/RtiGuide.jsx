import React, { useState } from 'react';
import { FileSearch, Copy, Check, ExternalLink, Clock, Send, Scale, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionLayout from '../components/SectionLayout';
import DocumentChecklist from '../components/DocumentChecklist';
import FAQAccordion from '../components/FAQAccordion';
import { FAQS_BY_SECTION } from '../data/faqs';

const SAMPLE_RTI_TEMPLATE = `To,
The Central Public Information Officer (CPIO) / State PIO,
Department / Ministry of: [Name of Department/Office],
Government of [India / Name of State],
Address: [Office Address of the Department]

1. Full Name of the Applicant: [Your Full Name]
2. Address for Communication: [Your Complete Postal Address with PIN code]
3. Phone / Mobile Number: [Your Contact Number]
4. Email Address: [Your Email ID]
5. Citizenship: Citizen of India

6. Particulars of Information Sought under Section 6(1) of the RTI Act, 2005:
   a) Subject Matter: [E.g., Status of scholarship disbursement / road construction tenders]
   b) Specific Points of Information Required:
      1. Certified copies of the file notings regarding [Subject] between [Date] and [Date].
      2. The sanctioned budget and actual expenditure incurred on [Project Name].
      3. The official designated authority responsible for the delay and reason for non-disbursement.
   c) Period to which the information relates: [From Month/Year to Month/Year]

7. Application Fee Details:
   Enclosed Postal Order / Demand Draft No.: [Number] dated [Date] for Rs. 10/-
   (OR: The applicant belongs to the Below Poverty Line (BPL) category. Attested copy of BPL card enclosed herewith for fee exemption).

Place: [Your City/Village]
Date: [DD/MM/YYYY]

Yours faithfully,
(Signature of Applicant)
[Your Name]`;

export default function RtiGuide() {
  const [copied, setCopied] = useState(false);

  const copyTemplate = () => {
    navigator.clipboard.writeText(SAMPLE_RTI_TEMPLATE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadTemplate = () => {
    const element = document.createElement('a');
    const file = new Blob([SAMPLE_RTI_TEMPLATE], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Sample_RTI_Application_Template.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <SectionLayout
      icon={FileSearch}
      title="Right to Information (RTI) Guide"
      subtitle="How any Indian citizen can hold public authorities accountable under the RTI Act, 2005 — step-by-step procedure, timelines, and template."
      helplines={[{ label: 'NALSA Legal Aid Helpline', number: '15100' }]}
    >
      {/* Overview & Eligibility */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-4">What Is RTI & Who Can File?</h2>
        <div className="prose prose-gray max-w-none">
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-navy-600 shrink-0" />
              <span>
                <strong>Universal Right for All Citizens:</strong> Any Indian citizen has the fundamental right under the RTI Act, 2005 to inspect government work, request certified copies of documents/records, and obtain information from central, state, and local public bodies.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-navy-600 shrink-0" />
              <span>
                <strong>Fee Structure:</strong> Standard application fee is <strong>₹10</strong> for central government bodies (payable via Indian Postal Order, Court Fee Stamp, DD, or online). Applicants from Below Poverty Line (BPL) categories are <strong>completely exempt from paying any fees</strong>. (Note: State rules may vary slightly from ₹10 to ₹50).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-navy-600 shrink-0" />
              <span>
                <strong>No Reason Needed:</strong> Under Section 6(2), you are <em>not required</em> to give any reason for requesting the information or provide any personal details other than contact details necessary for contacting you.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-6">Step-by-Step Filing Workflow</h2>
        <div className="space-y-4">
          {[
            {
              step: 'Step 1',
              title: 'Draft Your Specific Questions',
              desc: 'Keep questions clear, factual, and specific. Ask for records, copies, file notings, or logs rather than asking opinions like "Why did you do this?".',
            },
            {
              step: 'Step 2',
              title: 'Identify the PIO (Public Information Officer)',
              desc: 'Every public department has designated Central/State Public Information Officers (CPIO/SPIO). Address the application to the CPIO of that ministry or office.',
            },
            {
              step: 'Step 3',
              title: 'Submit Online or Offline',
              desc: 'For Central Government departments, file directly on rtionline.gov.in. For state bodies, file via the state RTI portal or send via Speed Post / Registered Post with ₹10 fee.',
            },
            {
              step: 'Step 4',
              title: 'Wait 30 Days (48 Hours for Life & Liberty)',
              desc: 'By law, the PIO must reply within 30 days. If the information concerns life or personal liberty, it must be provided within 48 hours under Section 7(1).',
            },
            {
              step: 'Step 5',
              title: 'First Appeal & Second Appeal if Denied',
              desc: 'If you receive no reply or misleading information, file a First Appeal within 30 days to the First Appellate Authority (FAA). If still unresolved, file a Second Appeal to the Central/State Information Commission.',
            },
          ].map((item, idx) => (
            <div key={idx} className="card flex items-start gap-4">
              <div className="w-16 h-8 rounded-lg bg-navy-100 text-navy-800 font-bold text-xs flex items-center justify-center shrink-0">
                {item.step}
              </div>
              <div>
                <h3 className="font-bold text-navy-800 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sample RTI Template */}
      <section className="mb-12">
        <div className="card-accent border-navy-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-navy-100">
            <div>
              <h3 className="text-lg font-bold text-navy-800">Sample RTI Application Template</h3>
              <p className="text-xs text-gray-500">Copy or download this standard format for your application</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={copyTemplate}
                className="btn-secondary text-xs py-1.5 px-3 flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-forest-600" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied!' : 'Copy Template'}
              </button>
              <button
                onClick={downloadTemplate}
                className="btn-primary text-xs py-1.5 px-3 flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                Download .txt
              </button>
            </div>
          </div>
          <pre className="bg-white p-4 rounded-xl border border-gray-200 text-xs text-gray-700 font-mono whitespace-pre-wrap overflow-x-auto leading-relaxed max-h-80 overflow-y-auto">
            {SAMPLE_RTI_TEMPLATE}
          </pre>
        </div>
      </section>

      {/* Official Links */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-6">Official RTI Portals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://rtionline.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="card group hover:border-navy-300 flex items-start gap-3"
          >
            <ExternalLink className="w-5 h-5 text-navy-600 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-navy-800 group-hover:text-navy-600 text-sm">
                RTI Online (Central Government)
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Official portal for filing RTI applications and first appeals for all Central ministries and departments.
              </p>
              <p className="text-[11px] text-navy-500 mt-1">rtionline.gov.in</p>
            </div>
          </a>

          <div className="card bg-gray-50 border-gray-200">
            <p className="font-semibold text-navy-800 text-sm mb-1">State RTI Portals Notice</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              States have independent portals (e.g., Maharti in Maharashtra, RTI Online Karnataka, UP RTI Online). If your state lacks an online portal, submit physical applications by Speed Post with an Indian Postal Order.
            </p>
          </div>
        </div>
      </section>

      {/* Document Checklist */}
      <DocumentChecklist sectionKey="rtiGuide" />

      {/* FAQs */}
      <FAQAccordion faqs={FAQS_BY_SECTION.rtiGuide} />
    </SectionLayout>
  );
}
