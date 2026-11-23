import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Printer, Scale, Phone, CheckCircle, ArrowLeft, Shield, ExternalLink } from 'lucide-react';
import { TricolorCardTop } from '../components/TricolorElements';

const RIGHTS_CARDS = {
  farmers: {
    category: 'Farmers Rights',
    tagline: 'Agricultural Rights, PM-KISAN, and Debt Settlement',
    rights: [
      'Right to PM-KISAN income support of ₹6,000/yr for eligible landholding families.',
      'Right to zero-court-fee resolution of loan and debt disputes through National Lok Adalats.',
      'Right to free DLSA legal representation against coercive private moneylender harassment.',
      'Right to lodge grievances regarding crop insurance and land records on pgportal.gov.in.',
    ],
    helplines: [
      { name: 'NALSA Legal Aid Helpline', num: '15100' },
      { name: 'PM-KISAN Toll-Free', num: '155261 / 1800-115-526' },
      { name: 'PM-KISAN Landline', num: '011-24300606' },
    ],
    whereToGo: 'Visit the DLSA office inside your District Court complex or contact the local Taluk Legal Services Committee (TLSC).',
    portalUrl: 'https://pmkisan.gov.in',
  },

  workers: {
    category: 'Workers & Unorganized Sector',
    tagline: 'Labour Rights, e-Shram Social Security & Wage Protection',
    rights: [
      'Right to statutory minimum wages under the Code on Wages without unlawful deductions.',
      'Right to registration on e-Shram portal with ₹2 Lakh accidental death/disability coverage.',
      'Right to 100% free legal aid for wage recovery and compensation for occupational injuries.',
      'Right to safety equipment and welfare board benefits for registered construction workers (BOCW).',
    ],
    helplines: [
      { name: 'NALSA Legal Aid Helpline', num: '15100' },
      { name: 'e-Shram Helpdesk', num: '14434' },
      { name: 'National Emergency', num: '112' },
    ],
    whereToGo: 'Visit the DLSA front office at the District Court with your e-Shram card or employment proof.',
    portalUrl: 'https://eshram.gov.in',
  },

  women: {
    category: 'Women & Children Rights',
    tagline: 'Safety, Protection Orders, and Statutory Victim Compensation',
    rights: [
      'Automatic statutory entitlement to free legal aid under Section 12(c) with NO income ceiling.',
      'Right to ex-parte protection orders, residence orders, and interim maintenance under PWDVA 2005.',
      'Right to financial compensation under NALSA Scheme 2018 for sexual assault and violence survivors.',
      'Right to age-appropriate, trauma-informed child-friendly legal assistance for minors.',
    ],
    helplines: [
      { name: 'NALSA Legal Aid Helpline', num: '15100' },
      { name: 'Women in Distress Helpline', num: '181' },
      { name: 'Childline / Emergency', num: '112 / 1098' },
    ],
    whereToGo: 'Visit the DLSA office at the District Court complex or approach any police station / Protection Officer.',
    portalUrl: 'https://nalsa.gov.in/home',
  },

  'senior-citizens': {
    category: 'Senior Citizens Rights',
    tagline: 'Maintenance Rights, Dignity, and Property Protection',
    rights: [
      'Right to claim monthly maintenance from children/heirs before the SDM Maintenance Tribunal.',
      'Right to revoke conditional property gifts under Section 23 if children fail to provide basic care.',
      'Right to free DLSA legal representation across all civil, criminal, and tribunal disputes.',
      'Protection against elder abandonment, domestic violence, and financial coercion.',
    ],
    helplines: [
      { name: 'NALSA Legal Aid Helpline', num: '15100' },
      { name: 'Elder Line (Toll-Free)', num: '14567' },
      { name: 'National Emergency', num: '112' },
    ],
    whereToGo: 'Visit the DLSA clinic inside your District Court complex or submit an application to the Sub-Divisional Magistrate.',
    portalUrl: 'https://nalsa.gov.in/home',
  },

  'disability-rights': {
    category: 'Persons with Disabilities',
    tagline: 'RPwD Act 2016 Rights, Accessibility & UDID Card',
    rights: [
      'Right to non-discrimination and reasonable accommodation under Section 3 of RPwD Act 2016.',
      '4% reservation in government employment and 5% reservation in higher education institutions.',
      'Right to a digital Unique Disability ID (UDID) via swavlambancard.gov.in.',
      'Right to free legal aid and representation before Mental Health Review Boards under NALSA 2024 scheme.',
    ],
    helplines: [
      { name: 'NALSA Legal Aid Helpline', num: '15100' },
      { name: 'DEPwD Grievances', num: 'disabilityaffairs.gov.in' },
    ],
    whereToGo: 'Visit your District Court DLSA front office. Wheelchair ramps and assistance are mandated.',
    portalUrl: 'https://www.swavlambancard.gov.in/',
  },

  'sc-st': {
    category: 'SC/ST & Tribal Rights',
    tagline: 'PoA Act Protections, Forest Land Rights & SAMVAD Scheme',
    rights: [
      'Automatic statutory entitlement to free legal aid with zero income qualification required.',
      'Legal representation and mandatory statutory relief under SC/ST (Prevention of Atrocities) Act.',
      'Right to individual and community forest rights under the Forest Rights Act (FRA) 2006.',
      'Legal protection against stereotyping and identity denial for Nomadic Tribes under SAMVAD 2025.',
    ],
    helplines: [
      { name: 'NALSA Legal Aid Helpline', num: '15100' },
      { name: 'National Emergency', num: '112' },
    ],
    whereToGo: 'Visit the DLSA office at the District Court or consult your Gram Sabha / Tribal Welfare Officer.',
    portalUrl: 'https://nalsa.gov.in/home',
  },

  students: {
    category: 'Students & Education Rights',
    tagline: 'RTE Quota, Zero Ragging & Grievance Redressal',
    rights: [
      'Free and compulsory schooling for ages 6–14; 25% EWS quota in private unaided schools.',
      'Zero tolerance for ragging — 24x7 criminal complaints via 1800-180-5522 or antiragging.in.',
      'Right to non-retention of original certificates by universities for fee disputes.',
      'Right to escalate delayed scholarships via NSP Grievance Cell or UGC Ombudsperson.',
    ],
    helplines: [
      { name: 'Anti-Ragging Toll-Free Helpline', num: '1800-180-5522' },
      { name: 'NALSA Legal Aid Helpline', num: '15100' },
    ],
    whereToGo: 'File online on antiragging.in or visit DLSA for school/college legal intervention.',
    portalUrl: 'https://www.antiragging.in',
  },

  cyber: {
    category: 'Cyber Fraud & Digital Safety',
    tagline: 'Digital Arrest Warning & Emergency Financial Freezing',
    rights: [
      'No real police agency ever conducts digital arrests or judicial trials over WhatsApp/video calls.',
      'Right to financial transaction freeze within the Golden Hour by calling 1930 immediately.',
      'Right to free legal representation at DLSA to defreeze legitimate collateral bank accounts.',
      'Protection against extortion under Bharatiya Nyaya Sanhita (BNS) and IT Act.',
    ],
    helplines: [
      { name: 'National Cybercrime Helpline', num: '1930' },
      { name: 'NALSA Legal Aid Helpline', num: '15100' },
      { name: 'National Emergency', num: '112' },
    ],
    whereToGo: 'Report immediately on cybercrime.gov.in, dial 1930, and visit DLSA if accounts are frozen.',
    portalUrl: 'https://cybercrime.gov.in',
  },
};

export default function RightsCard() {
  const { section } = useParams();
  const defaultKey = section && RIGHTS_CARDS[section] ? section : 'farmers';
  const [activeKey, setActiveKey] = useState(defaultKey);

  const card = RIGHTS_CARDS[activeKey] || RIGHTS_CARDS.farmers;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Navigation & Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 no-print">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-700 hover:text-navy-900"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portal
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <select
              value={activeKey}
              onChange={(e) => setActiveKey(e.target.value)}
              className="text-xs border border-gray-300 rounded-lg p-2 bg-white font-medium focus:ring-2 focus:ring-navy-400 focus:outline-none"
            >
              <option value="farmers">Farmers</option>
              <option value="workers">Workers</option>
              <option value="women">Women & Children</option>
              <option value="senior-citizens">Senior Citizens</option>
              <option value="disability-rights">Disability Rights</option>
              <option value="sc-st">SC/ST & Tribal</option>
              <option value="students">Students</option>
              <option value="cyber">Cyber Safety</option>
            </select>

            <button
              onClick={handlePrint}
              className="btn-primary text-xs py-2 px-4 shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save as PDF
            </button>
          </div>
        </div>

        {/* The Printable Rights Card (Single Page) */}
        <div className="bg-white rounded-2xl border-2 border-navy-800 p-8 sm:p-10 shadow-lg print:border-2 print:border-black print:p-6 print:shadow-none relative overflow-hidden">
          {/* Decorative Tricolor Top Accent Strip */}
          <TricolorCardTop height="h-[4px]" />
          {/* Card Header */}
          <div className="border-b-2 border-navy-800 pb-5 mb-6 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-lg bg-navy-800 text-white flex items-center justify-center font-bold">
                  <Scale className="w-4 h-4 text-saffron-400" />
                </div>
                <h1 className="text-2xl font-black text-navy-950 uppercase tracking-tight">
                  NYAYA SATHI RIGHTS CARD
                </h1>
              </div>
              <p className="text-sm font-bold text-navy-800">{card.category} — {card.tagline}</p>
              <p className="text-xs text-gray-500 mt-0.5">
                Constitutional Legal Aid under Article 39A & Legal Services Authorities Act, 1987
              </p>
            </div>
            <div className="text-right hidden sm:block">
              <span className="text-[10px] font-bold px-2 py-1 rounded bg-saffron-100 text-saffron-900 border border-saffron-300 uppercase">
                100% Free Legal Aid
              </span>
            </div>
          </div>

          {/* Key Rights */}
          <div className="mb-6">
            <h2 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-3">
              Your Essential Legal Rights
            </h2>
            <div className="space-y-2.5">
              {card.rights.map((r, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-gray-800 leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
                  <span>{r}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Helplines Box */}
          <div className="bg-gradient-to-r from-saffron-50 to-navy-50 border border-navy-200 rounded-xl p-4 mb-6">
            <h2 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-saffron-600" />
              Emergency & Legal Helplines (24x7 / Toll-Free)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {card.helplines.map((h, i) => (
                <div key={i} className="bg-white/80 p-2 rounded-lg border border-gray-200">
                  <span className="font-semibold text-gray-700">{h.name}: </span>
                  <span className="font-bold text-navy-900">{h.num}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Where to Go */}
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 mb-6 text-xs text-gray-700">
            <p className="font-bold text-navy-900 mb-1 uppercase tracking-wider">
              Where to Go for Free Court Representation:
            </p>
            <p className="leading-relaxed">{card.whereToGo}</p>
          </div>

          {/* Card Footer */}
          <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[10px] text-gray-500">
            <div>
              <p>
                <strong>Independent Public Service:</strong> Nyaya Sathi — Legal Aid & Rights Awareness Portal (India)
              </p>
              <p>Official portal: {card.portalUrl} • Helpline: 15100</p>
            </div>
            <div className="text-right">
              <span>Verified: November 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
