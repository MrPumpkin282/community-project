import React from 'react';
import { BookMarked, ExternalLink, Phone, ShieldCheck, CheckCircle } from 'lucide-react';
import { SLSA_DIRECTORY } from '../data/slsaDirectory';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TricolorCardTop } from '../components/TricolorElements';

const NATIONAL_BODIES = [
  {
    name: 'National Legal Services Authority (NALSA)',
    url: 'https://nalsa.gov.in/home',
    desc: 'The apex body for free legal aid in India — apply online, find your DLSA, and access all schemes.',
    verified: 'November 2026',
  },
  {
    name: 'NALSA Schemes & Programmes',
    url: 'https://nalsa.gov.in/preventive-strategic-legal-services-schemes/',
    desc: 'Directory of all NALSA preventive and strategic legal services schemes — download official PDFs.',
    verified: 'November 2026',
  },
  {
    name: 'NALSA FAQs',
    url: 'https://nalsa.gov.in/faqs/',
    desc: 'Frequently asked questions about legal aid eligibility, process, and rights.',
    verified: 'November 2026',
  },
  {
    name: 'Legal Services Authorities Act, 1987 (Wikipedia)',
    url: 'https://en.wikipedia.org/wiki/Legal_Services_Authorities_Act_1987',
    desc: 'Background and overview of the foundational legislation for legal aid in India.',
    verified: 'November 2026',
  },
  {
    name: 'Lok Adalat Overview (Wikipedia)',
    url: 'https://en.wikipedia.org/wiki/Lok_Adalat',
    desc: "Learn about Lok Adalats — the People's Courts for fast, free dispute resolution.",
    verified: 'November 2026',
  },
];

const GOVERNMENT_PORTALS = [
  {
    name: 'National Cybercrime Reporting Portal (MHA / I4C)',
    url: 'https://cybercrime.gov.in',
    desc: 'Central portal to report financial cyber fraud, digital arrest scams, and cyber extortion. Dial 1930.',
    verified: 'November 2026',
  },
  {
    name: 'PM-KISAN Official Portal',
    url: 'https://pmkisan.gov.in',
    desc: 'Pradhan Mantri Kisan Samman Nidhi — direct income support for farmers.',
    verified: 'November 2026',
  },
  {
    name: 'e-Shram (Unorganized Workers)',
    url: 'https://eshram.gov.in',
    desc: 'Register as an unorganized worker for a Universal Account Number (UAN) and accidental insurance.',
    verified: 'November 2026',
  },
  {
    name: 'e-Jagriti Consumer Grievance Portal (formerly e-Daakhil)',
    url: 'https://e-jagriti.gov.in',
    desc: 'Unified national online portal for filing consumer complaints before District, State, and National Consumer Commissions.',
    verified: 'November 2026',
  },
  {
    name: 'RTI Online (Central Government)',
    url: 'https://rtionline.gov.in',
    desc: 'File RTI requests and first appeals online for all Central ministries and departments.',
    verified: 'November 2026',
  },
  {
    name: 'UDID Swavlamban Portal (Disability ID)',
    url: 'https://www.swavlambancard.gov.in/',
    desc: 'Unique Disability ID card issuance by Department of Empowerment of Persons with Disabilities.',
    verified: 'November 2026',
  },
  {
    name: 'National Anti-Ragging Portal (UGC)',
    url: 'https://www.antiragging.in',
    desc: 'Confidential online ragging reporting and 24x7 monitoring under Supreme Court / UGC guidelines.',
    verified: 'November 2026',
  },
  {
    name: 'National Scholarship Portal',
    url: 'https://scholarships.gov.in',
    desc: 'Central grievance escalation and application tracking for pre- and post-matric government scholarships.',
    verified: 'November 2026',
  },
  {
    name: 'Department of Social Justice and Empowerment (Transgender Persons Portal)',
    url: 'https://socialjustice.gov.in/',
    desc: 'National portal for Transgender Certificates, identity cards, and SMILE welfare scheme assistance.',
    verified: 'November 2026',
  },
  {
    name: 'Centralised Public Grievance Redress and Monitoring System (CPGRAMS)',
    url: 'https://pgportal.gov.in',
    desc: 'Central government grievance redressal platform connecting citizens with all union ministries and departments.',
    verified: 'November 2026',
  },
  {
    name: 'National Consumer Helpline',
    url: 'https://consumerhelpline.gov.in',
    desc: 'Department of Consumer Affairs online grievance registration. Call toll-free 1915.',
    verified: 'November 2026',
  },
  {
    name: 'India.gov.in — National Portal of India',
    url: 'https://www.india.gov.in',
    desc: 'Single-entry portal for access to information and services provided by various Indian government entities.',
    verified: 'November 2026',
  },
];

const HELPLINES = [
  {
    number: '15100',
    name: 'NALSA National Legal Aid Helpline',
    desc: 'Free, toll-free, 24×7 guidance on legal aid eligibility and DLSA contacts.',
  },
  {
    number: '1930',
    name: 'National Cybercrime Reporting Helpline',
    desc: 'Immediate reporting of financial fraud, UPI scams, and digital arrest threats.',
  },
  {
    number: '1915',
    name: 'National Consumer Helpline',
    desc: 'Consumer disputes, defective goods, and unfair trade practice grievances.',
  },
  {
    number: '1800-180-5522',
    name: 'UGC Anti-Ragging Toll-Free Helpline',
    desc: '24×7 confidential reporting of ragging in higher educational institutions.',
  },
  {
    number: '14567',
    name: 'Elder Line — Senior Citizens Helpline',
    desc: 'Support, rescue, and legal awareness for senior citizens.',
  },
  {
    number: '181',
    name: "Women's Helpline",
    desc: '24×7 emergency response for women facing domestic violence or distress.',
  },
  {
    number: '155261 / 1800-115-526',
    name: 'PM-KISAN Helpline',
    desc: 'Inquiries and grievance redressal for farmer income support.',
  },
  {
    number: '14434',
    name: 'e-Shram Labour Helpline',
    desc: 'Assistance for unorganized workers registering on the e-Shram portal.',
  },
];

export default function Resources() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-navy-700 to-navy-900 text-white">
        <div className="section-container pb-8 sm:pb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center">
              <BookMarked className="w-6 h-6 text-saffron-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold">Resources &amp; Official Links</h1>
          </div>
          <p className="text-lg text-navy-200 max-w-3xl">
            A verified directory of official government portals, statutory schemes, national helplines,
            and legal aid authorities. All links are verified against official government sources.
          </p>
        </div>
      </div>

      <div className="section-container">
        {/* Helplines Grid */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-navy-800 mb-6">Key National Helplines</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HELPLINES.map((h) => (
              <a
                key={h.number}
                href={`tel:${h.number.replace(/[\s\-\/]/g, '')}`}
                className="group"
              >
                <Card className="h-full border-gray-200 group-hover:border-saffron-300 bg-gradient-to-br from-saffron-50/50 to-white transition-all shadow-sm group-hover:shadow p-4 relative overflow-hidden">
                  <TricolorCardTop height="h-[2.5px]" className="opacity-80 group-hover:opacity-100" />
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-saffron-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-bold text-navy-900 text-base">{h.number}</p>
                      <p className="font-semibold text-xs text-navy-700">{h.name}</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">{h.desc}</p>
                      <Badge variant="outline" className="text-[10px] text-gray-500 mt-2 font-normal bg-white">
                        Verified: November 2026
                      </Badge>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </section>

        {/* National Bodies */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-navy-800 mb-6">National Legal Aid Bodies &amp; Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {NATIONAL_BODIES.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full border-gray-200 group-hover:border-navy-300 p-4 transition-all shadow-sm group-hover:shadow flex items-start gap-3 bg-white relative overflow-hidden">
                  <TricolorCardTop height="h-[2px]" className="opacity-70 group-hover:opacity-100" />
                  <ExternalLink className="w-5 h-5 text-navy-500 mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-navy-800 group-hover:text-navy-600 transition-colors text-sm">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="text-[10px] text-navy-500 break-all">{item.url}</span>
                      <Badge variant="secondary" className="text-[10px] font-normal py-0">
                        Verified: {item.verified}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </section>

        {/* Government Portals */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-navy-800 mb-6">Official Government Portals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GOVERNMENT_PORTALS.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full border-gray-200 group-hover:border-forest-300 p-4 transition-all shadow-sm group-hover:shadow flex items-start gap-3 bg-white relative overflow-hidden">
                  <TricolorCardTop height="h-[2px]" className="opacity-70 group-hover:opacity-100" />
                  <ExternalLink className="w-5 h-5 text-forest-500 mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-navy-800 group-hover:text-forest-700 transition-colors text-sm">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="text-[10px] text-forest-600 break-all">{item.url}</span>
                      <Badge variant="secondary" className="text-[10px] font-normal py-0">
                        Verified: {item.verified}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </section>

        {/* State Authorities Directory Link */}
        <section className="mb-8">
          <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-white p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div>
              <h3 className="font-bold text-navy-800 text-base mb-1">
                State Legal Services Authorities (SLSAs)
              </h3>
              <p className="text-xs text-gray-600">
                Explore the complete verified directory for all 28 States and 8 Union Territories with court complex locations.
              </p>
            </div>
            <Button asChild size="sm" className="bg-purple-700 hover:bg-purple-800 text-white text-xs shrink-0">
              <a href="/find-dlsa">
                Browse All 36 SLSAs
              </a>
            </Button>
          </Card>
        </section>
      </div>
    </div>
  );
}
