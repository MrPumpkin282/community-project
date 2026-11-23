import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sprout,
  Users,
  Heart,
  UserCheck,
  Briefcase,
  Shield,
  Phone,
  ArrowRight,
  Scale,
  GraduationCap,
  Accessibility,
  Eye,
  ShieldCheck,
  ShoppingBag,
  BookOpen,
  FileSearch,
  MapPin,
  BookOpenCheck,
  AlertTriangle as AlertTriangleIcon,
  HelpCircle,
  ExternalLink,
  FileCheck,
  CheckCircle2,
  Clock,
  ShieldAlert,
} from 'lucide-react';
import HelplineBanner from '../components/HelplineBanner';
import GuidedQuiz from '../components/GuidedQuiz';
import AcronymTooltip from '../components/AcronymTooltip';
import { TricolorDivider, TricolorCardTop, TricolorBadge } from '../components/TricolorElements';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Home() {
  const { t, lang } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState('all');

  const SECTIONS = [
    {
      to: '/find-dlsa',
      icon: MapPin,
      title: t('nav_find_dlsa'),
      desc: 'Locate your District Legal Services Authority across all 28 states & 8 UTs.',
      color: 'from-amber-50 to-amber-100 border-amber-300',
      iconColor: 'text-amber-700',
      badge: 'Official Tool',
      category: 'tools',
    },
    {
      to: '/farmers',
      icon: Sprout,
      title: t('nav_farmers'),
      desc: 'PM-KISAN support, loan relief, and grievance redressal for agricultural workers.',
      color: 'from-green-50 to-green-100 border-green-200',
      iconColor: 'text-green-600',
      category: 'work',
    },
    {
      to: '/poor-and-marginalized',
      icon: Users,
      title: t('nav_poor'),
      desc: 'Free legal aid eligibility for those below the income threshold — apply at any DLSA.',
      color: 'from-blue-50 to-blue-100 border-blue-200',
      iconColor: 'text-blue-600',
      category: 'marginalized',
    },
    {
      to: '/women-and-children',
      icon: Heart,
      title: t('nav_women'),
      desc: 'Legal aid for women & children, domestic violence redressal, and victim compensation.',
      color: 'from-rose-50 to-rose-100 border-rose-200',
      iconColor: 'text-rose-600',
      category: 'family',
    },
    {
      to: '/senior-citizens',
      icon: UserCheck,
      title: t('nav_seniors'),
      desc: 'Maintenance & Welfare of Parents Act, 14567 helpline, and elder care rights.',
      color: 'from-purple-50 to-purple-100 border-purple-200',
      iconColor: 'text-purple-600',
      category: 'family',
    },
    {
      to: '/workers',
      icon: Briefcase,
      title: t('nav_workers'),
      desc: 'Unorganized sector workers, e-Shram portal, minimum wages, and safety entitlements.',
      color: 'from-amber-50 to-amber-100 border-amber-200',
      iconColor: 'text-amber-600',
      category: 'work',
    },
    {
      to: '/sc-st-tribal',
      icon: Shield,
      title: t('nav_sc_st'),
      desc: 'NALSA SAMVAD Scheme 2025, prevention of atrocities, and forest & land rights.',
      color: 'from-emerald-50 to-emerald-100 border-emerald-200',
      iconColor: 'text-emerald-600',
      category: 'marginalized',
    },
    {
      to: '/students',
      icon: GraduationCap,
      title: t('nav_students'),
      desc: 'Right to Education (RTE), Anti-Ragging helpline 1800-180-5522, and scholarship disputes.',
      color: 'from-cyan-50 to-cyan-100 border-cyan-200',
      iconColor: 'text-cyan-600',
      category: 'family',
    },
    {
      to: '/disability-rights',
      icon: Accessibility,
      title: t('nav_disability'),
      desc: 'RPwD Act 2016 rights, UDID card portal, and NALSA Mental Illness & Disability Scheme 2024.',
      color: 'from-indigo-50 to-indigo-100 border-indigo-200',
      iconColor: 'text-indigo-600',
      category: 'family',
    },
    {
      to: '/lgbtq-rights',
      icon: Eye,
      title: t('nav_lgbtq'),
      desc: 'Plain-language summaries of landmark judgments (NALSA 2014, Navtej Johar 2018) & welfare schemes.',
      color: 'from-violet-50 to-violet-100 border-violet-200',
      iconColor: 'text-violet-600',
      category: 'family',
    },
    {
      to: '/cyber-safety',
      icon: ShieldCheck,
      title: t('nav_cyber'),
      desc: 'Digital arrest fraud awareness, red flags checklist, and reporting via 1930 / cybercrime.gov.in.',
      color: 'from-teal-50 to-teal-100 border-teal-200',
      iconColor: 'text-teal-600',
      category: 'tools',
    },
    {
      to: '/consumer-rights',
      icon: ShoppingBag,
      title: t('nav_consumer'),
      desc: 'Consumer Protection Act 2019, 1915 helpline, e-Daakhil / e-Jagriti filing, and tenant rights.',
      color: 'from-emerald-50 to-emerald-100 border-emerald-200',
      iconColor: 'text-emerald-600',
      category: 'work',
    },
    {
      to: '/rti-guide',
      icon: FileSearch,
      title: t('nav_rti'),
      desc: 'How to file an RTI, standard ₹10 fee / BPL exemption, 30-day timeline, and template.',
      color: 'from-slate-50 to-slate-100 border-slate-300',
      iconColor: 'text-slate-700',
      category: 'tools',
    },
    {
      to: '/disaster-and-victims',
      icon: AlertTriangleIcon,
      title: t('nav_disaster'),
      desc: 'Legal aid for disaster survivors, acid attack victims, and trafficking survivors.',
      color: 'from-rose-50 to-rose-100 border-rose-200',
      iconColor: 'text-rose-600',
      category: 'marginalized',
    },
    {
      to: '/how-to-apply',
      icon: BookOpen,
      title: t('nav_how_to_apply'),
      desc: 'Step-by-step guide to applying for free legal help through DLSA, NALSA, or Tele-Law.',
      color: 'from-navy-50 to-indigo-100 border-navy-200',
      iconColor: 'text-navy-600',
      category: 'tools',
    },
    {
      to: '/stories',
      icon: BookOpenCheck,
      title: t('nav_stories'),
      desc: 'Illustrative real-world scenarios showing how Lok Adalats and DLSAs resolve citizen grievances.',
      color: 'from-blue-50 to-white border-blue-200',
      iconColor: 'text-blue-600',
      category: 'tools',
    },
  ];

  const filteredSections =
    selectedFilter === 'all'
      ? SECTIONS
      : SECTIONS.filter((s) => s.category === selectedFilter);

  const HOMEPAGE_FAQS = [
    {
      q: 'Who is entitled to 100% free legal aid in India?',
      a: 'Under Section 12 of the Legal Services Authorities Act, 1987, free legal aid is guaranteed to: women and children (with NO income limit), members of Scheduled Castes and Scheduled Tribes, persons with disabilities, victims of human trafficking or disaster, industrial workers, persons in custody/jail, and all citizens whose annual family income falls below the state-specified limit (typically ₹1 Lakh to ₹3 Lakhs depending on the state).',
    },
    {
      q: 'Do I have to pay anything to the lawyer assigned by DLSA?',
      a: 'ABSOLUTELY NOTHING. Free legal aid means 100% free. The assigned panel lawyer receives honorarium directly from the Legal Services Authority. In addition, court fees, process fees, translation charges, and typing fees are borne or waived by the government. If any person or lawyer asks for money under the scheme, report it immediately to the DLSA Secretary.',
    },
    {
      q: 'Where do I physically go to apply for free legal help?',
      a: 'You can walk directly into the District Legal Services Authority (DLSA) Front Office located inside your District Court complex in any district in India during court working hours (Monday to Friday, 10:00 AM – 5:00 PM). No prior appointment is required. If you reside at the taluka level, visit the Taluk Legal Services Committee (TLSC).',
    },
    {
      q: 'What should I do immediately if I receive a fake "digital arrest" video call?',
      a: 'Stay calm. No authentic law enforcement agency (Police, CBI, ED, Court) ever arrests citizens, holds trials, or demands money transfers over Skype, WhatsApp, or video calls. Hang up immediately, do NOT transfer any funds, and report the fraud within the Golden Hour to the National Cybercrime Helpline by dialing 1930 or online at cybercrime.gov.in.',
    },
    {
      q: 'Is Nyaya Sathi an official Government of India website?',
      a: 'No. Nyaya Sathi is an independent, non-governmental civic awareness initiative built to help Indian citizens understand their legal rights and find the correct official channels (NALSA, State Legal Services Authorities, District Courts, and official government portals). It does not provide case-specific legal advice and has no government affiliation.',
    },
  ];

  const OFFICIAL_PORTALS = [
    {
      name: 'National Legal Services Authority (NALSA)',
      url: 'https://nalsa.gov.in/home',
      desc: 'The apex statutory body for free legal aid, Lok Adalats, and DLSA network in India.',
      tag: 'Apex Legal Authority',
    },
    {
      name: 'National Cybercrime Reporting Portal',
      url: 'https://cybercrime.gov.in',
      desc: 'Central Ministry of Home Affairs portal to report financial fraud & digital arrest threats. Dial 1930.',
      tag: 'Cyber Fraud & 1930',
    },
    {
      name: 'PM-KISAN Samman Nidhi Portal',
      url: 'https://pmkisan.gov.in',
      desc: 'Official direct income support portal for landholding agricultural families across India.',
      tag: 'Farmers Portal',
    },
    {
      name: 'e-Shram National Database',
      url: 'https://eshram.gov.in',
      desc: 'Ministry of Labour & Employment portal for unorganized worker registration and social security.',
      tag: 'Labour & Workers',
    },
  ];

  return (
    <div>
      {/* 1. Hero Section (Article 39A Constitutional Mandate) */}
      <section className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgOHYyaC0ydi0yaDJ6bTIwLTEydjJoLTJ2LTJoMnptLTIgNHYyaC0ydi0yaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />
        <div className="section-container relative z-10 py-14 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-saffron-500/20 border border-saffron-400/30 rounded-full px-3.5 py-1 mb-5">
              <Scale className="w-4 h-4 text-saffron-400" />
              <span className="text-xs sm:text-sm font-semibold text-saffron-300">
                {t('hero_badge')}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight mb-5 tracking-tight">
              {t('hero_title')}{' '}
              <span className="text-saffron-400">{t('hero_title_highlight')}</span>
            </h1>
            <p className="text-base sm:text-lg text-navy-200 leading-relaxed mb-8 max-w-2xl font-normal">
              {t('hero_desc')}
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Button
                asChild
                size="lg"
                className="bg-saffron-500 hover:bg-saffron-600 text-white font-bold text-sm gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                <Link to="/how-to-apply">
                  {t('hero_btn_apply')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white font-semibold text-sm gap-2"
              >
                <Link to="/find-dlsa">
                  <MapPin className="w-4 h-4 text-saffron-400" />
                  {t('hero_btn_find_dlsa')}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white font-semibold text-sm gap-2"
              >
                <a href="tel:15100">
                  <Phone className="w-4 h-4 text-saffron-300" />
                  {t('hero_btn_call')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 24x7 Emergency Helplines Strip */}
      <HelplineBanner />

      {/* 3. Block 1: Guided Rights Finder (Interactive Card Block) */}
      <section id="guided-quiz" className="section-container pb-0 pt-8 sm:pt-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <TricolorBadge>Self-Service Rights Matcher</TricolorBadge>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
              Not Sure Where to Begin?
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
              Answer one quick question to find your exact legal rights, statutory schemes, and DLSA route.
            </p>
          </div>
          <Link
            to="/how-to-apply"
            className="text-xs font-bold text-navy-700 hover:text-navy-900 inline-flex items-center gap-1 shrink-0"
          >
            How Court DLSA Works
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <GuidedQuiz />
      </section>

      {/* Decorative Divider */}
      <div className="section-container py-0 my-6">
        <TricolorDivider />
      </div>

      {/* 4. Block 2: Know Your Rights (Card-based Beneficiary Content Block) */}
      <section className="section-container py-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-4 border-b border-gray-200 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <TricolorBadge>Article 39A Protected Groups</TricolorBadge>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
              Know Your Rights &amp; Legal Schemes
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mt-1">
              Under Section 12 of the Legal Services Authorities Act, 1987, free legal representation,
              court fee waivers, and official advice are statutory rights for the following categories:
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/resources"
              className="text-xs font-bold text-saffron-700 hover:text-saffron-800 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-saffron-50 border border-saffron-200/80 transition-colors"
            >
              <span>View All 16 Categories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Category Filter Pills (MyGov-style tabbed filtering) */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-xs font-bold text-gray-500 mr-1">Filter By:</span>
          {[
            { id: 'all', label: 'All Categories' },
            { id: 'work', label: 'Work & Farmers' },
            { id: 'marginalized', label: 'Marginalized & Vulnerable' },
            { id: 'family', label: 'Family, Youth & Inclusion' },
            { id: 'tools', label: 'Citizen Tools & Guides' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                selectedFilter === tab.id
                  ? 'bg-navy-800 text-white shadow-xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSections.map(({ to, icon: Icon, title, desc, color, iconColor, badge }) => (
            <Link
              key={to}
              to={to}
              className={`group rounded-xl border p-5 bg-gradient-to-br ${color} hover:shadow-lg transition-all duration-200 flex flex-col justify-between relative overflow-hidden`}
            >
              <TricolorCardTop height="h-[2.5px]" className="opacity-80 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-3 mt-1">
                  <div className={`w-10 h-10 rounded-lg bg-white/95 flex items-center justify-center ${iconColor} shadow-xs`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {badge && (
                    <Badge className="bg-navy-800 text-white uppercase tracking-wider text-[10px]">
                      {badge}
                    </Badge>
                  )}
                </div>
                <h3 className="font-bold text-navy-900 mb-1.5 group-hover:text-navy-700 transition-colors text-sm sm:text-base">
                  {title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs font-bold text-navy-700 pt-3 border-t border-black/5">
                <span className="group-hover:text-navy-950 transition-colors">Explore rights</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 text-[#FF9933] group-hover:text-[#138808] transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Block 3: Essential Citizen Guides (Card-based Content Block) */}
      <section className="section-container mt-12 sm:mt-16 bg-navy-50/50 py-12 rounded-3xl border border-navy-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-navy-200/60 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <TricolorBadge>Step-by-Step Action Procedures</TricolorBadge>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
              Essential Citizen Guides
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mt-1">
              Clear, practical walkthroughs to claim your constitutional protections and state remedies without expensive private lawyers.
            </p>
          </div>

          <Link
            to="/how-to-apply"
            className="text-xs font-bold text-navy-800 hover:text-navy-950 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-300 shadow-xs hover:bg-gray-50 transition-colors shrink-0"
          >
            <span>View All Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Guide 1 */}
          <Link
            to="/how-to-apply"
            className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs hover:shadow-md hover:border-navy-300 transition-all flex flex-col justify-between relative overflow-hidden group"
          >
            <TricolorCardTop height="h-[2.5px]" />
            <div>
              <div className="w-10 h-10 rounded-xl bg-navy-600 text-white flex items-center justify-center mb-3 shadow-xs">
                <BookOpen className="w-5 h-5" />
              </div>
              <Badge variant="outline" className="text-[10px] text-navy-700 bg-navy-50 mb-2 font-semibold">
                Court Representation
              </Badge>
              <h3 className="font-bold text-sm text-navy-900 group-hover:text-navy-700">
                7-Step Court DLSA Guide
              </h3>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                How to walk into your district court, apply at the DLSA Front Office, and get an advocate assigned for civil or criminal matters.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-navy-700">
              <span>Read guide</span>
              <ArrowRight className="w-3.5 h-3.5 text-saffron-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Guide 2 */}
          <Link
            to="/rti-guide"
            className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs hover:shadow-md hover:border-navy-300 transition-all flex flex-col justify-between relative overflow-hidden group"
          >
            <TricolorCardTop height="h-[2.5px]" />
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-700 text-white flex items-center justify-center mb-3 shadow-xs">
                <FileSearch className="w-5 h-5" />
              </div>
              <Badge variant="outline" className="text-[10px] text-slate-700 bg-slate-50 mb-2 font-semibold">
                Transparency &amp; Records
              </Badge>
              <h3 className="font-bold text-sm text-navy-900 group-hover:text-navy-700">
                Right to Information (RTI)
              </h3>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                Step-by-step RTI filing instructions: standard ₹10 fee, zero fee for BPL ration cardholders, 30-day timeline, and appeal format.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-navy-700">
              <span>Read guide</span>
              <ArrowRight className="w-3.5 h-3.5 text-saffron-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Guide 3 */}
          <Link
            to="/cyber-safety"
            className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs hover:shadow-md hover:border-navy-300 transition-all flex flex-col justify-between relative overflow-hidden group"
          >
            <TricolorCardTop height="h-[2.5px]" />
            <div>
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center mb-3 shadow-xs">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <Badge variant="outline" className="text-[10px] text-rose-700 bg-rose-50 border-rose-200 mb-2 font-semibold">
                Emergency 1930
              </Badge>
              <h3 className="font-bold text-sm text-navy-900 group-hover:text-navy-700">
                Cyber Fraud &amp; Digital Arrest
              </h3>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                Recognize fake police video calls, protect bank accounts during the Golden Hour, and report fraud immediately to 1930.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-navy-700">
              <span>Read guide</span>
              <ArrowRight className="w-3.5 h-3.5 text-saffron-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Guide 4 */}
          <Link
            to="/consumer-rights"
            className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs hover:shadow-md hover:border-navy-300 transition-all flex flex-col justify-between relative overflow-hidden group"
          >
            <TricolorCardTop height="h-[2.5px]" />
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-3 shadow-xs">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <Badge variant="outline" className="text-[10px] text-emerald-700 bg-emerald-50 mb-2 font-semibold">
                Dispute Redressal
              </Badge>
              <h3 className="font-bold text-sm text-navy-900 group-hover:text-navy-700">
                Consumer &amp; Tenant Rights
              </h3>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                File online before Consumer Commissions via e-Jagriti, call National Helpline 1915, and resolve landlord security deposit withholding.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-navy-700">
              <span>Read guide</span>
              <ArrowRight className="w-3.5 h-3.5 text-saffron-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* 6. Block 4: Direct Citizen Assistance Tools (Card-based Content Block) */}
      <section className="section-container mt-12 sm:mt-16 py-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-gray-200 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <TricolorBadge>Direct Citizen Utilities</TricolorBadge>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
              Direct Citizen Assistance Tools
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mt-1">
              Interactive directories, document tools, and printable cards to navigate the justice system with confidence.
            </p>
          </div>

          <Link
            to="/find-dlsa"
            className="text-xs font-bold text-navy-800 hover:text-navy-950 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-300 shadow-xs hover:bg-gray-50 transition-colors shrink-0"
          >
            <span>All Tools Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tool 1 */}
          <Card className="p-6 border-navy-200 bg-gradient-to-br from-amber-50/50 via-white to-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <TricolorCardTop height="h-[3px]" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-xs">
                  <MapPin className="w-5 h-5 text-amber-100" />
                </div>
                <Badge className="bg-navy-900 text-white text-[10px] uppercase font-bold">
                  Official Directory
                </Badge>
              </div>
              <h3 className="font-bold text-base text-navy-950 mb-1.5">
                Find My Nearest DLSA Court
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Locate the District Legal Services Authority inside your local district court complex. Verified links and contact information across all 28 States and 8 Union Territories.
              </p>
            </div>
            <Button asChild size="sm" className="w-full bg-navy-800 hover:bg-navy-900 text-white font-semibold text-xs mt-auto">
              <Link to="/find-dlsa">
                Launch DLSA Locator
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </Button>
          </Card>

          {/* Tool 2 */}
          <Card className="p-6 border-navy-200 bg-gradient-to-br from-saffron-50/40 via-white to-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <TricolorCardTop height="h-[3px]" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-saffron-500 text-white flex items-center justify-center shadow-xs">
                  <FileCheck className="w-5 h-5 text-white" />
                </div>
                <Badge variant="outline" className="border-saffron-300 text-saffron-800 bg-white text-[10px] font-bold">
                  Printable Cards
                </Badge>
              </div>
              <h3 className="font-bold text-base text-navy-950 mb-1.5">
                Printable Pocket Rights Cards
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Download or print pocket-sized citizen rights reference cards. Contains statutory rights, DLSA entitlements, and emergency numbers to carry to police stations or government offices.
              </p>
            </div>
            <Button asChild size="sm" variant="outline" className="w-full border-navy-300 text-navy-900 hover:bg-navy-50 font-semibold text-xs mt-auto">
              <Link to="/rights-card">
                View &amp; Print Rights Cards
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </Button>
          </Card>

          {/* Tool 3 */}
          <Card className="p-6 border-navy-200 bg-gradient-to-br from-blue-50/40 via-white to-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <TricolorCardTop height="h-[3px]" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-navy-600 text-white flex items-center justify-center shadow-xs">
                  <BookOpenCheck className="w-5 h-5 text-white" />
                </div>
                <Badge variant="outline" className="border-blue-300 text-navy-800 bg-white text-[10px] font-bold">
                  Real Cases
                </Badge>
              </div>
              <h3 className="font-bold text-base text-navy-950 mb-1.5">
                How Legal Aid Works in Practice
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Explore anonymized real-life dispute scenarios showing how farmers, domestic workers, senior citizens, and accident victims accessed free justice via Lok Adalats and DLSAs.
              </p>
            </div>
            <Button asChild size="sm" variant="outline" className="w-full border-navy-300 text-navy-900 hover:bg-navy-50 font-semibold text-xs mt-auto">
              <Link to="/stories">
                Read Illustrative Stories
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* 7. Block 5: Most Asked Questions (FAQs) */}
      <section className="section-container mt-12 sm:mt-16 py-0">
        <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <TricolorCardTop height="h-[3.5px]" />
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-gray-100 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <TricolorBadge>Clarifications &amp; Facts</TricolorBadge>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mt-1">
                Common questions answered in plain language regarding free legal aid eligibility, court procedures, and official helplines.
              </p>
            </div>

            <Link
              to="/how-to-apply"
              className="text-xs font-bold text-saffron-700 hover:text-saffron-800 inline-flex items-center gap-1.5 shrink-0"
            >
              <span>Read DLSA Application Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <Accordion type="single" collapsible defaultValue="faq-0" className="w-full space-y-3">
            {HOMEPAGE_FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-gray-200 bg-gray-50/50 px-4 sm:px-5 data-[state=open]:bg-white data-[state=open]:border-navy-300 data-[state=open]:shadow-xs transition-all"
              >
                <AccordionTrigger className="text-xs sm:text-sm font-bold text-navy-900 hover:no-underline py-4 text-left">
                  <span>{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-xs sm:text-sm leading-relaxed pt-1 pb-4">
                  <p>{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 8. Block 6: Official Government Portals & Directory */}
      <section className="section-container mt-12 sm:mt-16 py-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-gray-200 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <TricolorBadge>Direct Official Channels</TricolorBadge>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
              Official Government Portals &amp; Directory
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mt-1">
              Nyaya Sathi routes citizens directly to official statutory portals. Always verify that government portals end in <code>.gov.in</code> or <code>.nic.in</code>.
            </p>
          </div>

          <Link
            to="/resources"
            className="text-xs font-bold text-navy-800 hover:text-navy-950 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-300 shadow-xs hover:bg-gray-50 transition-colors shrink-0"
          >
            <span>Full Sources Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {OFFICIAL_PORTALS.map((portal) => (
            <a
              key={portal.url}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl border border-gray-200 p-4 shadow-xs hover:shadow-md hover:border-navy-300 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <TricolorCardTop height="h-[2px]" className="opacity-80 group-hover:opacity-100" />
              <div>
                <div className="flex items-center justify-between mb-2 mt-1">
                  <Badge variant="outline" className="text-[10px] text-navy-700 bg-navy-50/70 border-navy-200 font-semibold">
                    {portal.tag}
                  </Badge>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-navy-700 transition-colors" />
                </div>
                <h4 className="font-bold text-xs text-navy-950 group-hover:text-navy-700 leading-snug">
                  {portal.name}
                </h4>
                <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                  {portal.desc}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-gray-100 text-[10px] text-navy-600 font-medium break-all">
                {portal.url.replace('https://', '')}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 9. Factual Statutory Baseline (Article 39A & NALSA Act) */}
      <section className="section-container mt-12 sm:mt-16 mb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          {[
            {
              value: 'Article 39A',
              title: 'Constitutional Right',
              label: 'Mandates equal justice & free legal aid by the State',
            },
            {
              value: '15100',
              title: 'National Toll-Free',
              label: '24×7 NALSA Legal Aid helpline across India',
            },
            {
              value: '600+ DLSAs',
              title: 'District Courts',
              label: 'Front offices located in every district court complex',
            },
            {
              value: '100% Free',
              title: 'Zero Fees',
              label: 'All legal aid advocates & court fees fully waived',
            },
          ].map((stat, i) => (
            <Card key={i} className="p-5 text-center border-gray-200 bg-white shadow-xs relative overflow-hidden">
              <TricolorCardTop height="h-[2px]" />
              <div className="text-xl sm:text-2xl font-black text-navy-900 mb-0.5">{stat.value}</div>
              <div className="text-xs font-bold text-saffron-700 mb-1">{stat.title}</div>
              <p className="text-[11px] text-gray-500 leading-tight">{stat.label}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
