import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Scale,
  Phone,
  ExternalLink,
  ShieldAlert,
  HelpCircle,
  FileText,
  AlertCircle,
  CheckCircle2,
  MapPin,
  Eye,
} from 'lucide-react';
import ReportIssueModal from './ReportIssueModal';
import AshokaChakra from './AshokaChakra';
import { TricolorCardTop } from './TricolorElements';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export default function Footer() {
  const [statementOpen, setStatementOpen] = useState(false);

  const CITIZEN_GROUPS = [
    { to: '/farmers', label: 'Farmers & PM-KISAN' },
    { to: '/poor-and-marginalized', label: 'Poor & Marginalized' },
    { to: '/women-and-children', label: 'Women & Children' },
    { to: '/senior-citizens', label: 'Senior Citizens (14567)' },
    { to: '/workers', label: 'Workers & e-Shram' },
    { to: '/sc-st-tribal', label: 'SC/ST & Tribal Rights' },
    { to: '/students', label: 'Students & Anti-Ragging' },
    { to: '/disability-rights', label: 'Persons with Disabilities' },
    { to: '/lgbtq-rights', label: 'LGBTQ+ Rights' },
  ];

  const GUIDES_AND_TOOLS = [
    { to: '/find-dlsa', label: 'Find Nearest DLSA Court' },
    { to: '/how-to-apply', label: '7-Step Court Legal Aid Guide' },
    { to: '/cyber-safety', label: 'Cyber Fraud & Digital Arrest' },
    { to: '/rti-guide', label: 'Right to Information (RTI)' },
    { to: '/consumer-rights', label: 'Consumer & Tenant Rights' },
    { to: '/rights-card', label: 'Printable Pocket Rights Cards' },
    { to: '/stories', label: 'Illustrative Case Stories' },
    { to: '/resources', label: 'All Resources & Sources' },
  ];

  const OFFICIAL_PORTALS = [
    { href: 'https://nalsa.gov.in/home', label: 'NALSA Apex Portal (nalsa.gov.in)' },
    { href: 'https://cybercrime.gov.in', label: 'National Cybercrime Portal' },
    { href: 'https://pmkisan.gov.in', label: 'PM-KISAN Farmers Portal' },
    { href: 'https://eshram.gov.in', label: 'e-Shram National Database' },
    { href: 'https://e-jagriti.gov.in', label: 'e-Jagriti Consumer Portal' },
    { href: 'https://rtionline.gov.in', label: 'RTI Online Central Portal' },
  ];

  const NATIONAL_HELPLINES = [
    { number: '15100', name: 'NALSA Legal Aid Helpline', desc: 'Toll-free 24×7 nationwide' },
    { number: '1930', name: 'National Cybercrime Helpline', desc: 'Financial fraud & fake arrest' },
    { number: '1915', name: 'National Consumer Helpline', desc: 'Defective products & services' },
    { number: '14567', name: 'Elder Line', desc: 'Senior citizen emergency support' },
    { number: '181', name: "Women's Distress Helpline", desc: '24×7 emergency safety response' },
    { number: '112', name: 'National Emergency Number', desc: 'Police, Fire, and Ambulance' },
  ];

  return (
    <footer className="bg-[#081420] text-slate-200 relative overflow-hidden border-t-2 border-navy-800">
      {/* Decorative Tricolor Top Accent Strip */}
      <TricolorCardTop height="h-[3px]" />

      {/* Subtle Ashoka Chakra decorative background watermark */}
      <div className="absolute -right-16 -bottom-16 opacity-[0.035] pointer-events-none text-white select-none">
        <AshokaChakra className="w-96 h-96" color="currentColor" />
      </div>

      {/* Main Multi-Column Institutional Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Column 1: About Nyaya Sathi */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-navy-800 rounded-xl border border-navy-700 flex items-center justify-center shadow-md">
                <Scale className="w-5 h-5 text-saffron-400" />
              </div>
              <div>
                <span className="text-base font-extrabold text-white tracking-tight">Nyaya Sathi</span>
                <span className="block text-[10px] text-saffron-400 font-bold tracking-wider">न्याय साथी</span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-300 mb-4">
              An independent civic rights awareness portal helping ordinary citizens understand their constitutional right to free legal aid under Article 39A and find official statutory channels.
            </p>
            <div className="text-[11px] text-slate-300 bg-[#0f2035] p-3 rounded-xl border border-navy-700 mb-4 space-y-1.5 shadow-xs">
              <div className="flex items-center gap-1.5 text-saffron-300 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-forest-400" />
                <span>100% Free Legal Help</span>
              </div>
              <p className="text-[10px] text-slate-300 leading-normal">
                Provided under the Legal Services Authorities Act, 1987 across 600+ District Courts.
              </p>
            </div>
            <ReportIssueModal />
          </div>

          {/* Column 2: Citizen Groups (Sections) */}
          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-saffron-400" />
              Citizen Rights
            </h3>
            <ul className="space-y-2">
              {CITIZEN_GROUPS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-xs text-slate-300 hover:text-white transition-colors block py-0.5 hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Guides & Citizen Tools */}
          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Guides &amp; Tools
            </h3>
            <ul className="space-y-2">
              {GUIDES_AND_TOOLS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-xs text-slate-300 hover:text-white transition-colors block py-0.5 hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Official Statutory Portals */}
          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-forest-400" />
              Official Portals
            </h3>
            <ul className="space-y-2">
              {OFFICIAL_PORTALS.map((portal) => (
                <li key={portal.href}>
                  <a
                    href={portal.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-300 hover:text-white transition-colors flex items-center justify-between gap-1 py-0.5 group hover:underline"
                  >
                    <span>{portal.label}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-white shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: National 24x7 Helplines (Help & Support) */}
          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-saffron-400" />
              National Helplines
            </h3>
            <ul className="space-y-2.5">
              {NATIONAL_HELPLINES.map((h) => (
                <li key={h.number} className="text-xs">
                  <a
                    href={`tel:${h.number}`}
                    className="hover:text-white transition-colors block group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-saffron-300 group-hover:text-saffron-200">
                        {h.number}
                      </span>
                      <span className="text-white font-semibold text-[11px] truncate">
                        {h.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 block">{h.desc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Institutional Secondary Row */}
        <div className="mt-12 pt-6 border-t border-navy-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px]">
            <span className="font-bold text-white">Quick Navigation:</span>
            <Link to="/" className="text-slate-300 hover:text-white transition-colors">Portal Home</Link>
            <span>•</span>
            <Link to="/find-dlsa" className="text-slate-300 hover:text-white transition-colors">DLSA Court Directory</Link>
            <span>•</span>
            <Link to="/how-to-apply" className="text-slate-300 hover:text-white transition-colors">How to Apply</Link>
            <span>•</span>
            <Link to="/rights-card" className="text-slate-300 hover:text-white transition-colors">Pocket Rights Cards</Link>
            <span>•</span>
            <button
              onClick={() => setStatementOpen(true)}
              className="text-saffron-400 hover:text-saffron-300 underline font-semibold transition-colors"
            >
              Accessibility &amp; Non-Affiliation Statement
            </button>
          </div>

          <div className="text-[11px] text-slate-400">
            Last structural review: November 2026
          </div>
        </div>

        {/* Mandatory Independent/Unofficial Legal Disclaimer (Kept Strictly Intact) */}
        <div className="mt-8 pt-6 border-t border-navy-800 bg-[#040a12] p-5 rounded-2xl border border-navy-800 shadow-inner">
          <p className="text-xs text-slate-200 leading-relaxed">
            <strong className="text-saffron-400 uppercase tracking-wide">Disclaimer:</strong> This portal provides general information about government legal aid schemes and is not a substitute for professional legal advice. For case-specific help, contact your District Legal Services Authority (DLSA) or call the NALSA helpline at{' '}
            <a href="tel:15100" className="text-saffron-400 font-bold underline hover:text-saffron-300">15100</a>. This is an independent informational project and is not an official Government of India website. The tricolor and Ashoka Chakra motif used on this site are decorative design elements reflecting national identity and do not imply any government affiliation, authorization, or endorsement. This site does not use the State Emblem of India.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-navy-900 text-[11px] text-slate-400">
            <p>© {new Date().getFullYear()} Nyaya Sathi — Legal Aid &amp; Rights Awareness Portal. Independent civic initiative.</p>
            <p>Empowering citizens under Article 39A of the Constitution of India.</p>
          </div>
        </div>
      </div>

      {/* Accessibility & Non-Affiliation Modal */}
      <Dialog open={statementOpen} onOpenChange={setStatementOpen}>
        <DialogContent className="max-w-md bg-white p-6 rounded-2xl shadow-2xl border border-gray-200">
          <DialogHeader>
            <DialogTitle className="text-base font-bold text-navy-900 flex items-center gap-2">
              <Eye className="w-5 h-5 text-saffron-600" />
              Institutional Statement &amp; Accessibility
            </DialogTitle>
            <DialogDescription className="text-xs text-gray-500">
              Governance, independence, and technical accessibility of Nyaya Sathi
            </DialogDescription>
          </DialogHeader>
          <div className="text-xs text-gray-700 space-y-3 mt-3 leading-relaxed">
            <div className="p-3 bg-navy-50 rounded-xl border border-navy-100">
              <h4 className="font-bold text-navy-900 mb-1">Non-Governmental Independence</h4>
              <p className="text-[11px] text-gray-600">
                Nyaya Sathi is an independent informational tool created for the public good. It is NOT operated by, affiliated with, or endorsed by the Government of India, NIC, or any ministry. Official portals can be accessed directly at <code>.gov.in</code> domains.
              </p>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="font-bold text-navy-900 mb-1">State Emblem Act Compliance</h4>
              <p className="text-[11px] text-gray-600">
                In strict compliance with the State Emblem of India (Prohibition of Improper Use) Act, 2005, this site does not display the State Emblem of India (the Lion Capital). The 24-spoke Ashoka Chakra wheel and tricolor accents are purely decorative national motifs.
              </p>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="font-bold text-navy-900 mb-1">GIGW &amp; WCAG 2.1 AA Standards</h4>
              <p className="text-[11px] text-gray-600">
                Features keyboard navigation, skip to content, high contrast mode, and text resizing (A-/A/A+) for full screen reader compatibility.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
}
