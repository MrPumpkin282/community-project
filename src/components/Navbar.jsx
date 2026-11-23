import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Scale,
  ChevronDown,
  MapPin,
  Sparkles,
  BookOpen,
  FileSearch,
  ShieldAlert,
  Users,
  Briefcase,
  Heart,
  GraduationCap,
  Accessibility,
  Eye,
  ShoppingBag,
  ExternalLink,
  Phone,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';
import SearchBar from './SearchBar';
import AshokaChakra from './AshokaChakra';
import TopUtilityBar from './TopUtilityBar';
import { TricolorHeaderBar } from './TricolorElements';
import { useLanguage } from '../context/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null); // 'rights' | 'guides' | 'tools' | 'directory' | null
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null);
  const navRef = useRef(null);
  const { pathname } = useLocation();
  const { lang, t } = useLanguage();

  // Close menus on route change
  useEffect(() => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close menu on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMegaMenu(null);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveMegaMenu(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleMegaMenu = (menuKey) => {
    setActiveMegaMenu((prev) => (prev === menuKey ? null : menuKey));
  };

  const toggleMobileSection = (key) => {
    setMobileExpandedSection((prev) => (prev === key ? null : key));
  };

  return (
    <header ref={navRef} className="sticky top-0 z-40 bg-white shadow-xs border-b border-gray-200">
      {/* Decorative Tricolor Accent Stripe (Saffron - White - India Green) */}
      <TricolorHeaderBar />

      {/* Top Utility Bar (Skip to Content, Accessibility A-/A/A+, Contrast, Helplines, Language) */}
      <TopUtilityBar />

      {/* Main Header / Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-4">
          {/* Logo & Portal Branding (Strictly Nyaya Sathi - No Govt Seal/Logo) */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus:ring-2 focus:ring-navy-500 rounded-lg p-1"
          >
            <div className="w-11 h-11 rounded-xl bg-navy-800 text-white flex items-center justify-center shadow-md border border-navy-700 group-hover:bg-navy-900 transition-colors">
              <Scale className="w-6 h-6 text-saffron-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl text-navy-950 tracking-tight leading-none">
                  Nyaya Sathi
                </span>
                <span className="text-[10px] font-bold text-navy-800 bg-navy-50 border border-navy-200 px-1.5 py-0.5 rounded-full flex items-center gap-1">
                  <AshokaChakra className="w-2.5 h-2.5" color="#000080" />
                  न्याय साथी
                </span>
              </div>
              <p className="text-[11px] text-gray-500 font-medium tracking-tight mt-0.5">
                Legal Aid &amp; Rights Awareness Portal
              </p>
            </div>
          </Link>

          {/* Desktop Mega-Menu Nav Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Main Navigation"
          >
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                pathname === '/'
                  ? 'text-navy-900 bg-navy-50 font-bold border-b-2 border-saffron-500'
                  : 'text-gray-700 hover:text-navy-900 hover:bg-gray-50'
              }`}
            >
              {t('nav_home')}
            </Link>

            {/* Menu 1: Know Your Rights (Mega-Menu) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleMegaMenu('rights')}
                aria-expanded={activeMegaMenu === 'rights'}
                aria-haspopup="true"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold transition-colors focus:outline-none focus:ring-1 focus:ring-navy-400 ${
                  activeMegaMenu === 'rights'
                    ? 'bg-navy-100/70 text-navy-900'
                    : 'text-gray-700 hover:text-navy-900 hover:bg-gray-50'
                }`}
              >
                <span>Know Your Rights</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMegaMenu === 'rights' ? 'rotate-180 text-saffron-600' : 'text-gray-400'
                  }`}
                />
              </button>

              {/* Mega-Menu Panel: Know Your Rights */}
              {activeMegaMenu === 'rights' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[820px] bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
                    <div>
                      <h3 className="font-bold text-sm text-navy-900">
                        Citizen Beneficiary Rights Directory
                      </h3>
                      <p className="text-xs text-gray-500">
                        Constitutional legal aid and statutory welfare protections under Article 39A
                      </p>
                    </div>
                    <Badge variant="outline" className="bg-navy-50 text-navy-800 border-navy-200 text-[11px]">
                      16 Beneficiary Categories
                    </Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    {/* Column 1: Marginalized & Vulnerable */}
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-saffron-700 mb-2.5 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-saffron-600" />
                        Marginalized &amp; Relief
                      </p>
                      <ul className="space-y-1.5">
                        <li>
                          <Link
                            to="/poor-and-marginalized"
                            className="block p-2 rounded-lg hover:bg-navy-50/70 transition-colors group"
                          >
                            <p className="font-semibold text-xs text-navy-900 group-hover:text-navy-700">
                              Poor &amp; Marginalized
                            </p>
                            <p className="text-[11px] text-gray-500 leading-tight">
                              Income ceiling limits &amp; DLSA waivers
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/sc-st-tribal"
                            className="block p-2 rounded-lg hover:bg-navy-50/70 transition-colors group"
                          >
                            <p className="font-semibold text-xs text-navy-900 group-hover:text-navy-700">
                              SC/ST &amp; Tribal Rights
                            </p>
                            <p className="text-[11px] text-gray-500 leading-tight">
                              SAMVAD 2025, PoA Act &amp; forest land
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/disaster-and-victims"
                            className="block p-2 rounded-lg hover:bg-navy-50/70 transition-colors group"
                          >
                            <p className="font-semibold text-xs text-navy-900 group-hover:text-navy-700">
                              Disaster &amp; Calamity Victims
                            </p>
                            <p className="text-[11px] text-gray-500 leading-tight">
                              Statutory compensation &amp; rehabilitation
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 2: Work, Agriculture & Livelihood */}
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-forest-700 mb-2.5 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-forest-600" />
                        Work &amp; Livelihood
                      </p>
                      <ul className="space-y-1.5">
                        <li>
                          <Link
                            to="/farmers"
                            className="block p-2 rounded-lg hover:bg-navy-50/70 transition-colors group"
                          >
                            <p className="font-semibold text-xs text-navy-900 group-hover:text-navy-700">
                              Farmers &amp; Agriculture
                            </p>
                            <p className="text-[11px] text-gray-500 leading-tight">
                              PM-KISAN, crop debt &amp; Lok Adalats
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/workers"
                            className="block p-2 rounded-lg hover:bg-navy-50/70 transition-colors group"
                          >
                            <p className="font-semibold text-xs text-navy-900 group-hover:text-navy-700">
                              Workers &amp; Unorganized
                            </p>
                            <p className="text-[11px] text-gray-500 leading-tight">
                              e-Shram card, minimum wages &amp; BOCW
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/consumer-rights"
                            className="block p-2 rounded-lg hover:bg-navy-50/70 transition-colors group"
                          >
                            <p className="font-semibold text-xs text-navy-900 group-hover:text-navy-700">
                              Consumer &amp; Tenant Rights
                            </p>
                            <p className="text-[11px] text-gray-500 leading-tight">
                              e-Jagriti filing &amp; rental security
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 3: Family, Youth & Inclusion */}
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-navy-800 mb-2.5 flex items-center gap-1.5">
                        <Heart className="w-3.5 h-3.5 text-navy-600" />
                        Family &amp; Inclusion
                      </p>
                      <ul className="space-y-1.5">
                        <li>
                          <Link
                            to="/women-and-children"
                            className="block p-2 rounded-lg hover:bg-navy-50/70 transition-colors group"
                          >
                            <p className="font-semibold text-xs text-navy-900 group-hover:text-navy-700">
                              Women &amp; Children
                            </p>
                            <p className="text-[11px] text-gray-500 leading-tight">
                              Section 12(c) no-ceiling legal aid
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/senior-citizens"
                            className="block p-2 rounded-lg hover:bg-navy-50/70 transition-colors group"
                          >
                            <p className="font-semibold text-xs text-navy-900 group-hover:text-navy-700">
                              Senior Citizens Rights
                            </p>
                            <p className="text-[11px] text-gray-500 leading-tight">
                              Maintenance Act &amp; elder abuse relief
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/students"
                            className="block p-2 rounded-lg hover:bg-navy-50/70 transition-colors group"
                          >
                            <p className="font-semibold text-xs text-navy-900 group-hover:text-navy-700">
                              Students &amp; Education
                            </p>
                            <p className="text-[11px] text-gray-500 leading-tight">
                              RTE quota &amp; 1800-180-5522 anti-ragging
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/disability-rights"
                            className="block p-2 rounded-lg hover:bg-navy-50/70 transition-colors group"
                          >
                            <p className="font-semibold text-xs text-navy-900 group-hover:text-navy-700">
                              Persons with Disabilities
                            </p>
                            <p className="text-[11px] text-gray-500 leading-tight">
                              RPwD Act 2016, UDID &amp; mental illness aid
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/lgbtq-rights"
                            className="block p-2 rounded-lg hover:bg-navy-50/70 transition-colors group"
                          >
                            <p className="font-semibold text-xs text-navy-900 group-hover:text-navy-700">
                              LGBTQ+ Rights
                            </p>
                            <p className="text-[11px] text-gray-500 leading-tight">
                              NALSA 2014 &amp; Navtej Johar 2018 rulings
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between bg-navy-50/50 p-2.5 rounded-xl">
                    <span className="text-xs text-navy-800 font-medium">
                      Need help determining your category?
                    </span>
                    <Link
                      to="/#guided-quiz"
                      onClick={() => setActiveMegaMenu(null)}
                      className="text-xs font-bold text-saffron-700 hover:text-saffron-800 inline-flex items-center gap-1"
                    >
                      Take 30-Second Rights Finder
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Menu 2: How to Get Help (Guides) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleMegaMenu('guides')}
                aria-expanded={activeMegaMenu === 'guides'}
                aria-haspopup="true"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold transition-colors focus:outline-none focus:ring-1 focus:ring-navy-400 ${
                  activeMegaMenu === 'guides'
                    ? 'bg-navy-100/70 text-navy-900'
                    : 'text-gray-700 hover:text-navy-900 hover:bg-gray-50'
                }`}
              >
                <span>How to Get Help</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMegaMenu === 'guides' ? 'rotate-180 text-saffron-600' : 'text-gray-400'
                  }`}
                />
              </button>

              {/* Mega-Menu Panel: How to Get Help */}
              {activeMegaMenu === 'guides' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[620px] bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-navy-900 mb-3 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-navy-600" />
                        Court Legal Aid &amp; Defense
                      </p>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/how-to-apply"
                            className="block p-2.5 rounded-xl hover:bg-navy-50/70 border border-transparent hover:border-navy-100 transition-colors group"
                          >
                            <p className="font-semibold text-xs text-navy-900 group-hover:text-navy-700">
                              7-Step Court DLSA Guide
                            </p>
                            <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                              Walk into district court for a free appointed panel lawyer &amp; fee waivers.
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/how-to-apply"
                            className="block p-2.5 rounded-xl hover:bg-navy-50/70 border border-transparent hover:border-navy-100 transition-colors group"
                          >
                            <p className="font-semibold text-xs text-navy-900 group-hover:text-navy-700">
                              Criminal Defense (LADCS)
                            </p>
                            <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                              Dedicated public defenders for arrested &amp; accused persons.
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-navy-900 mb-3 flex items-center gap-1.5">
                        <ShieldAlert className="w-3.5 h-3.5 text-navy-600" />
                        Citizen Safety &amp; RTI
                      </p>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/cyber-safety"
                            className="block p-2.5 rounded-xl hover:bg-navy-50/70 border border-transparent hover:border-navy-100 transition-colors group"
                          >
                            <div className="flex items-center gap-1.5">
                              <p className="font-semibold text-xs text-navy-900 group-hover:text-navy-700">
                                Cyber Fraud &amp; Digital Arrest
                              </p>
                              <Badge className="bg-rose-600 text-white text-[9px] px-1 py-0 font-bold">
                                1930
                              </Badge>
                            </div>
                            <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                              Red flags of fake arrest calls &amp; urgent financial freezing.
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/rti-guide"
                            className="block p-2.5 rounded-xl hover:bg-navy-50/70 border border-transparent hover:border-navy-100 transition-colors group"
                          >
                            <p className="font-semibold text-xs text-navy-900 group-hover:text-navy-700">
                              Right to Information (RTI) Guide
                            </p>
                            <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                              Standard ₹10 fee / BPL exemption, 30-day timeline &amp; format.
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Menu 3: Citizen Tools */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleMegaMenu('tools')}
                aria-expanded={activeMegaMenu === 'tools'}
                aria-haspopup="true"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold transition-colors focus:outline-none focus:ring-1 focus:ring-navy-400 ${
                  activeMegaMenu === 'tools'
                    ? 'bg-navy-100/70 text-navy-900'
                    : 'text-gray-700 hover:text-navy-900 hover:bg-gray-50'
                }`}
              >
                <span>Citizen Tools</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMegaMenu === 'tools' ? 'rotate-180 text-saffron-600' : 'text-gray-400'
                  }`}
                />
              </button>

              {/* Mega-Menu Panel: Citizen Tools */}
              {activeMegaMenu === 'tools' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[580px] bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="grid grid-cols-2 gap-4">
                    <Link
                      to="/find-dlsa"
                      className="p-3.5 rounded-xl border border-navy-200 bg-gradient-to-br from-navy-50/80 to-white hover:border-navy-400 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-8 h-8 rounded-lg bg-navy-600 text-white flex items-center justify-center shadow-xs">
                          <MapPin className="w-4 h-4 text-saffron-400" />
                        </div>
                        <Badge className="bg-navy-900 text-white text-[9px] uppercase tracking-wider">
                          Official Tool
                        </Badge>
                      </div>
                      <h4 className="font-bold text-xs text-navy-900 group-hover:text-navy-700">
                        Find Nearest DLSA Court
                      </h4>
                      <p className="text-[11px] text-gray-500 mt-1 leading-snug">
                        Locate your District Legal Services Authority across all 28 states &amp; 8 UTs.
                      </p>
                    </Link>

                    <Link
                      to="/rights-card"
                      className="p-3.5 rounded-xl border border-gray-200 bg-gradient-to-br from-saffron-50/40 to-white hover:border-saffron-300 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-8 h-8 rounded-lg bg-saffron-500 text-white flex items-center justify-center shadow-xs">
                          <FileCheck className="w-4 h-4" />
                        </div>
                        <Badge variant="outline" className="border-saffron-300 text-saffron-800 text-[9px] bg-white">
                          Printable PDF
                        </Badge>
                      </div>
                      <h4 className="font-bold text-xs text-navy-900 group-hover:text-navy-700">
                        Pocket Rights Cards
                      </h4>
                      <p className="text-[11px] text-gray-500 mt-1 leading-snug">
                        Pocket legal cards summarizing statutory rights for police or court visits.
                      </p>
                    </Link>

                    <Link
                      to="/stories"
                      className="p-3.5 rounded-xl border border-gray-200 bg-white hover:border-navy-300 hover:shadow-md transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-navy-100 text-navy-700 flex items-center justify-center mb-2">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-xs text-navy-900 group-hover:text-navy-700">
                        Case Scenarios in Practice
                      </h4>
                      <p className="text-[11px] text-gray-500 mt-1 leading-snug">
                        Anonymized illustrative examples of how citizens navigate legal aid.
                      </p>
                    </Link>

                    <Link
                      to="/resources"
                      className="p-3.5 rounded-xl border border-gray-200 bg-white hover:border-navy-300 hover:shadow-md transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-xs text-navy-900 group-hover:text-navy-700">
                        Official Directory &amp; Sources
                      </h4>
                      <p className="text-[11px] text-gray-500 mt-1 leading-snug">
                        Direct links to NALSA, PM-KISAN, e-Shram &amp; government helplines.
                      </p>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Menu 4: Direct Links */}
            <Link
              to="/find-dlsa"
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors inline-flex items-center gap-1.5 ${
                pathname === '/find-dlsa'
                  ? 'bg-saffron-500 text-white'
                  : 'bg-navy-50 text-navy-900 hover:bg-navy-100 border border-navy-200/80'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-saffron-600" />
              <span>Find DLSA</span>
            </Link>
          </nav>

          {/* Right Header Search Bar & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <SearchBar />

            {/* Direct CTA Button */}
            <Button
              asChild
              size="sm"
              className="hidden md:inline-flex bg-saffron-500 hover:bg-saffron-600 text-white font-bold text-xs gap-1.5 shadow-xs"
            >
              <Link to="/how-to-apply">
                <span>{t('hero_btn_apply')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 rounded-xl text-navy-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-navy-500"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto px-4 py-5 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-4">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-sm text-navy-900 py-1 border-b border-gray-100"
            >
              Home / मुख्य पृष्ठ
            </Link>

            {/* Mobile Section 1: Know Your Rights */}
            <div className="border-b border-gray-100 pb-3">
              <button
                type="button"
                onClick={() => toggleMobileSection('rights')}
                className="w-full flex items-center justify-between font-bold text-sm text-navy-900 py-1"
              >
                <span>Know Your Rights (16 Categories)</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileExpandedSection === 'rights' ? 'rotate-180 text-saffron-600' : 'text-gray-400'
                  }`}
                />
              </button>
              {mobileExpandedSection === 'rights' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 pt-2 pl-2 text-xs">
                  <Link to="/farmers" onClick={() => setMobileMenuOpen(false)} className="py-1 text-gray-700 hover:text-navy-900 font-medium">
                    • Farmers Rights &amp; PM-KISAN
                  </Link>
                  <Link to="/poor-and-marginalized" onClick={() => setMobileMenuOpen(false)} className="py-1 text-gray-700 hover:text-navy-900 font-medium">
                    • Poor &amp; Marginalized (Income Criteria)
                  </Link>
                  <Link to="/women-and-children" onClick={() => setMobileMenuOpen(false)} className="py-1 text-gray-700 hover:text-navy-900 font-medium">
                    • Women &amp; Children Protection
                  </Link>
                  <Link to="/senior-citizens" onClick={() => setMobileMenuOpen(false)} className="py-1 text-gray-700 hover:text-navy-900 font-medium">
                    • Senior Citizens Rights &amp; 14567
                  </Link>
                  <Link to="/workers" onClick={() => setMobileMenuOpen(false)} className="py-1 text-gray-700 hover:text-navy-900 font-medium">
                    • Workers &amp; e-Shram Portal
                  </Link>
                  <Link to="/sc-st-tribal" onClick={() => setMobileMenuOpen(false)} className="py-1 text-gray-700 hover:text-navy-900 font-medium">
                    • SC/ST &amp; Tribal Rights (SAMVAD 2025)
                  </Link>
                  <Link to="/students" onClick={() => setMobileMenuOpen(false)} className="py-1 text-gray-700 hover:text-navy-900 font-medium">
                    • Students &amp; Anti-Ragging
                  </Link>
                  <Link to="/disability-rights" onClick={() => setMobileMenuOpen(false)} className="py-1 text-gray-700 hover:text-navy-900 font-medium">
                    • Persons with Disabilities &amp; UDID
                  </Link>
                  <Link to="/lgbtq-rights" onClick={() => setMobileMenuOpen(false)} className="py-1 text-gray-700 hover:text-navy-900 font-medium">
                    • LGBTQ+ Rights &amp; Judgments
                  </Link>
                  <Link to="/consumer-rights" onClick={() => setMobileMenuOpen(false)} className="py-1 text-gray-700 hover:text-navy-900 font-medium">
                    • Consumer Protection &amp; Tenants
                  </Link>
                  <Link to="/disaster-and-victims" onClick={() => setMobileMenuOpen(false)} className="py-1 text-gray-700 hover:text-navy-900 font-medium">
                    • Disaster &amp; Crime Victims
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Section 2: How to Get Help */}
            <div className="border-b border-gray-100 pb-3">
              <button
                type="button"
                onClick={() => toggleMobileSection('guides')}
                className="w-full flex items-center justify-between font-bold text-sm text-navy-900 py-1"
              >
                <span>How to Get Legal Help</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileExpandedSection === 'guides' ? 'rotate-180 text-saffron-600' : 'text-gray-400'
                  }`}
                />
              </button>
              {mobileExpandedSection === 'guides' && (
                <div className="space-y-2 mt-2 pt-2 pl-2 text-xs">
                  <Link to="/how-to-apply" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-gray-700 hover:text-navy-900 font-medium">
                    • 7-Step Court DLSA Application Guide
                  </Link>
                  <Link to="/cyber-safety" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-gray-700 hover:text-navy-900 font-medium">
                    • Cyber Fraud Defense &amp; 1930 Helpline
                  </Link>
                  <Link to="/rti-guide" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-gray-700 hover:text-navy-900 font-medium">
                    • Right to Information (RTI) Step-by-Step
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Section 3: Tools & Direct Access */}
            <div className="border-b border-gray-100 pb-3">
              <button
                type="button"
                onClick={() => toggleMobileSection('tools')}
                className="w-full flex items-center justify-between font-bold text-sm text-navy-900 py-1"
              >
                <span>Citizen Tools &amp; Directories</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileExpandedSection === 'tools' ? 'rotate-180 text-saffron-600' : 'text-gray-400'
                  }`}
                />
              </button>
              {mobileExpandedSection === 'tools' && (
                <div className="space-y-2 mt-2 pt-2 pl-2 text-xs">
                  <Link to="/find-dlsa" onClick={() => setMobileMenuOpen(false)} className="block py-1 font-bold text-navy-900">
                    • Find My Nearest DLSA Court Locator
                  </Link>
                  <Link to="/rights-card" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-gray-700 hover:text-navy-900 font-medium">
                    • Printable Pocket Rights Cards
                  </Link>
                  <Link to="/stories" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-gray-700 hover:text-navy-900 font-medium">
                    • Illustrative Legal Aid Scenarios
                  </Link>
                  <Link to="/resources" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-gray-700 hover:text-navy-900 font-medium">
                    • Official Government Schemes &amp; Helplines Directory
                  </Link>
                </div>
              )}
            </div>

            <div className="pt-2">
              <Button asChild className="w-full bg-saffron-500 hover:bg-saffron-600 text-white font-bold">
                <Link to="/how-to-apply" onClick={() => setMobileMenuOpen(false)}>
                  How to Apply for Free Legal Aid
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
