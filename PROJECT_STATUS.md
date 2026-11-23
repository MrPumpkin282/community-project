# Nyaya Sathi — Full Project Status Report

*Report Generated: November 23, 2026*  
*Repository: [MrPumpkin282/community-project](https://github.com/MrPumpkin282/community-project)*  
*Target Environment: Vercel (Production) / Node.js + Express (Local Development)*

---

## SECTION 1 — PROJECT OVERVIEW

### Project Name & Purpose
**Nyaya Sathi (न्याय साथी) — Legal Aid & Rights Awareness Portal (India)** is an independent, public-good civic portal designed to educate ordinary Indian citizens — especially farmers, the rural and urban poor, informal/unorganized workers, women, senior citizens, students, persons with disabilities, marginalized communities (SC/ST/DNT), and cyber fraud victims — regarding their constitutional rights under Article 39A of the Constitution of India. The portal serves as an informational directory and navigator to official statutory channels for free legal aid, including the National Legal Services Authority (NALSA), State Legal Services Authorities (SLSAs), District Legal Services Authorities (DLSAs), Taluk Legal Services Committees (TLSCs), Lok Adalats, Tele-Law services, and verified government portals. It explicitly never poses as a law firm, never drafts pleadings, and never provides case-specific legal advice.

### Current Project Status
- **Status:** **Feature-Complete & Deployed on Vercel**
- **Production URL:** Deployed via GitHub integration on [Vercel](https://vercel.com/)
- **Repository Visibility:** Clean Git repository with all code and assets tracked on `main` branch.
- **Statutory Compliance:** Strict compliance with the *State Emblem of India (Prohibition of Improper Use) Act, 2005* — **zero** Lion Capital imagery; standalone 24-spoke Ashoka Chakra wheel SVG and decorative tricolor palette only.

### Top-Level Folder Layout
```text
community_project/
├── .env.example                  # Template environment variables (GROQ_API_KEY placeholder)
├── .gitignore                    # Excludes .env, node_modules, dist, logs, and OS caches
├── api/                          # Vercel Serverless Functions
│   ├── chat.js                   # Serverless Groq AI chatbot proxy
│   └── report-issue.js           # Serverless issue/broken-link logger
├── components.json               # shadcn/ui configuration file (New York style)
├── dist/                         # Compiled production bundle output
├── index.html                    # Root HTML document (Inter, Noto Sans, Favicon)
├── jsconfig.json                 # Path aliases (@/ -> ./src)
├── link-table.md                 # Link audit documentation
├── link-verification-final.json  # Link crawl audit raw output
├── link-verification-report.json # Link crawl initial verification report
├── package.json                  # Dependencies, scripts, and build configuration
├── package-lock.json             # Exact dependency lockfile
├── postcss.config.js             # PostCSS plugins (Tailwind, Autoprefixer)
├── public/                       # Static public assets (standalone 24-spoke favicon.svg)
├── QA_REPORT.md                  # Comprehensive verification & link-audit log
├── README.md                     # Public documentation with Vercel deploy instructions
├── scripts/                      # Automated audit, test, and verification scripts
│   ├── audit-accessibility.js    # Automated WCAG 2.1 JSX accessibility checker
│   ├── extract-schemes-and-links.js # Domain extraction utility
│   ├── generate-table.js         # Link table markdown generator
│   ├── inventory-pages.js        # Codebase content & scheme parser
│   ├── recheck-links.js          # HTTP URL connectivity verifier
│   ├── test-chat.js              # Chatbot proxy resilience & Groq API test
│   ├── test-search.js            # Fuzzy search query regression test
│   ├── verify-internal-links.js  # React Router internal route auditor
│   └── verify-links.js           # External link status checker
├── server.js                     # Local Express proxy server for dev (port 3001)
├── src/                          # React application source code
│   ├── App.jsx                   # React Router route registry (20 routes)
│   ├── main.jsx                  # React 18 DOM root mount
│   ├── index.css                 # Tailwind base, CSS variables, high-contrast tokens
│   ├── components/               # UI components & interactive tools
│   │   ├── AccessibilityToggles.jsx # Font-size & contrast toggle controls
│   │   ├── AcronymTooltip.jsx    # Accessible expansion tooltips for legal acronyms
│   │   ├── AshokaChakra.jsx      # Standalone 24-spoke SVG chakra wheel
│   │   ├── ChatBot.jsx           # Floating legal aid assistant (Groq powered)
│   │   ├── DocumentChecklist.jsx # Interactive print-ready court document checklists
│   │   ├── FAQAccordion.jsx      # Accordion Q&A component
│   │   ├── Footer.jsx            # 5-column institutional grouped footer
│   │   ├── GuidedQuiz.jsx        # 30-second guided category matcher
│   │   ├── HelplineBanner.jsx    # 24x7 NALSA 15100 emergency banner
│   │   ├── Layout.jsx            # Master layout wrapper with #main-content
│   │   ├── Navbar.jsx            # MyGov-inspired Mega-Menu navigation bar
│   │   ├── ReportIssueModal.jsx  # Broken link & content error report dialog
│   │   ├── SchemeCard.jsx        # Standardized welfare scheme card
│   │   ├── ScrollToTop.jsx       # Route change scroll-restoration
│   │   ├── SearchBar.jsx         # Site-wide header search modal/dropdown
│   │   ├── SectionLayout.jsx     # Reusable layout for citizen rights pages
│   │   ├── TopUtilityBar.jsx     # Skip-link, accessibility A-/A+, contrast, i18n
│   │   ├── TricolorElements.jsx  # Tricolor top ribbons, badges, and dividers
│   │   └── ui/                   # 16 installed shadcn/ui primitive components
│   ├── context/                  # React Context providers
│   │   ├── AccessibilityContext.jsx # Font-size ('sm'|'normal'|'lg') & contrast state
│   │   └── LanguageContext.jsx   # Bilingual i18n state ('en'|'hi')
│   ├── data/                     # Content databases & registries
│   │   ├── documents.js          # Document checklist items per citizen category
│   │   ├── faqs.js               # Practical questions & answers per section
│   │   ├── schemes.js            # Central registry of 16 official welfare schemes
│   │   ├── searchIndex.js        # Fuzzy search index items (24 indexed entries)
│   │   ├── slsaDirectory.js      # Directory of 36 State Legal Services Authorities
│   │   └── stories.js            # Anonymized illustrative real-world case stories
│   ├── lib/
│   │   └── utils.js              # clsx & tailwind-merge helper (cn)
│   └── pages/                    # 19 Page views
│       ├── ConsumerRights.jsx
│       ├── CyberSafety.jsx
│       ├── DisabilityRights.jsx
│       ├── DisasterAndVictims.jsx
│       ├── Farmers.jsx
│       ├── FindDlsa.jsx
│       ├── Home.jsx
│       ├── HowToApply.jsx
│       ├── LgbtqRights.jsx
│       ├── PoorAndMarginalized.jsx
│       ├── Resources.jsx
│       ├── RightsCard.jsx
│       ├── RtiGuide.jsx
│       ├── ScStTribal.jsx
│       ├── SeniorCitizens.jsx
│       ├── Students.jsx
│       ├── SuccessStories.jsx
│       ├── WomenAndChildren.jsx
│       └── Workers.jsx
├── tailwind.config.js            # Extended color tokens (navy-50 to 950, saffron, forest, india)
├── vercel.json                   # Vercel SPA client rewrite rules & API routes
└── vite.config.js                # Vite build config with path alias (@) & dev proxy
```

---

## SECTION 2 — TECH STACK

All versions and packages verified directly against `package.json`, configuration files, and filesystem:

| Category | Technology / Library | Version | File Location |
|---|---|---|---|
| **Frontend Framework** | React | `^18.3.1` | `package.json`, `src/main.jsx` |
| **DOM Renderer** | React DOM | `^18.3.1` | `package.json` |
| **Build Tool & Dev Server** | Vite | `^6.0.5` | `package.json`, `vite.config.js` |
| **Client-Side Routing** | React Router DOM | `^7.1.1` | `package.json`, `src/App.jsx` |
| **CSS Framework** | Tailwind CSS | `^3.4.17` | `package.json`, `tailwind.config.js` |
| **PostCSS Processor** | PostCSS / Autoprefixer | `^8.4.49` / `^10.4.20` | `postcss.config.js` |
| **Animation Plugin** | `tailwindcss-animate` | `^1.0.7` | `tailwind.config.js` |
| **Iconography** | Lucide React | `^0.468.0` | `package.json` |
| **Local API Server** | Express.js | `^4.21.1` | `server.js` |
| **Local CORS** | CORS | `^2.8.5` | `server.js` |
| **Local Env Loader** | Dotenv | `^16.4.7` | `server.js` |
| **Toast Notifications** | Sonner | `^2.0.8` | `src/components/ui/sonner.jsx` |
| **Form Management** | React Hook Form | `^7.92.0` | `src/components/ui/form.jsx` |
| **Schema Validation** | Zod | `^4.6.7` | `package.json` |
| **Form Resolvers** | `@hookform/resolvers` | `^7.0.8` | `package.json` |
| **CSS Utilities** | `clsx` + `tailwind-merge` | `^2.1.1` + `^3.7.1` | `src/lib/utils.js` |
| **Style Variance** | `class-variance-authority` | `^0.7.1` | `package.json` |
| **Theme Helpers** | `next-themes` | `^0.4.6` | `package.json` |
| **Deployment Targets** | Vercel (Production) | Serverless | `vercel.json`, `api/` |
| **Node Version Req.** | Unspecified (>= 18 recommended) | N/A | None defined in `"engines"` |

### Installed shadcn/ui Components (16 Total)
Verified inside `src/components/ui/`:
1. `accordion.jsx` (`@radix-ui/react-accordion`)
2. `badge.jsx`
3. `button.jsx` (`@radix-ui/react-slot`)
4. `card.jsx`
5. `dialog.jsx` (`@radix-ui/react-dialog`)
6. `dropdown-menu.jsx` (`@radix-ui/react-dropdown-menu`)
7. `form.jsx` (`react-hook-form`, `@radix-ui/react-label`)
8. `input.jsx`
9. `label.jsx` (`@radix-ui/react-label`)
10. `select.jsx` (`@radix-ui/react-select`)
11. `sheet.jsx` (`@radix-ui/react-dialog`)
12. `skeleton.jsx`
13. `sonner.jsx` (`sonner`, `next-themes`)
14. `tabs.jsx` (`@radix-ui/react-tabs`)
15. `textarea.jsx`
16. `tooltip.jsx` (`@radix-ui/react-tooltip`)

### Backend & API Layer Architecture
- **Production (Vercel Serverless):**
  - Location: `api/chat.js` and `api/report-issue.js`
  - Deployed automatically as serverless functions by Vercel when routing to `/api/chat` and `/api/report-issue`.
- **Local Development (Express):**
  - Location: `server.js` (runs on port 3001 via `npm run dev` with `concurrently`).
  - Proxied from Vite dev server (port 5173) via `vite.config.js`.

### Chatbot Integration & Security Verification
- **Upstream Provider:** Groq Cloud API (`https://api.groq.com/openai/v1/chat/completions`)
- **Configured Model String:** `qwen/qwen3.8-27b`
- **Server-Side API Key Verification:** The API key is read strictly server-side using `process.env.GROQ_API_KEY`. It is never delivered to the client bundle.
- **Code Pattern in `api/chat.js` and `server.js`:**
  ```javascript
  // api/chat.js (lines 8-14)
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return res.status(503).json({
      error: 'Chat is temporarily unavailable. Please call the NALSA helpline at 15100.',
    });
  }
  ```
  ```javascript
  // api/chat.js (lines 24-37)
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'qwen/qwen3.8-27b',
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      temperature: 0.7,
      max_tokens: 1024,
    }),
  });
  ```
- **Client Implementation (`src/components/ChatBot.jsx`):**
  ```javascript
  // Line 51: Calls relative server endpoint only
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages: updatedMessages }),
  });
  ```

### Internationalization (i18n) Setup
- **Architecture:** Custom React Context in `src/context/LanguageContext.jsx` with `localStorage` key `nyaya_sathi_lang`.
- **Supported Languages:** English (`en`) and Hindi (`hi`).
- **Fully Translated in Hindi:**
  - Navigation links and mega-menu dropdowns (`Navbar.jsx`)
  - Top utility bar and emergency numbers (`TopUtilityBar.jsx`)
  - Homepage Hero, badges, and action buttons (`Home.jsx`)
  - Helpline banner (`HelplineBanner.jsx`)
  - Common CTAs, print labels, and footer disclaimers
  - The complete 7-Step Court Legal Aid guide in `HowToApply.jsx` (`STEPS_HI`)
- **Partially Translated / Placeholder:**
  - Detailed body text, document checklists, and scheme paragraphs on the 12 individual beneficiary pages (Farmers, Poor, Women, Seniors, Workers, SC/ST, Students, Disabilities, LGBTQ+, Cyber, Consumer, Disaster) display an explicit notice: `hindi_coming_soon` (*"अंग्रेजी सामग्री • हिंदी अनुवाद शीघ्र आ रहा है"*).

---

## SECTION 3 — PAGES & SECTIONS IMPLEMENTED

All 20 routes configured in `src/App.jsx` inspected and verified:

### 1. Core & Institutional
| Route | Page / Component | Title / Primary Purpose | Build Status |
|---|---|---|---|
| `/` | `Home.jsx` | Portal homepage: Article 39A Hero, Emergency Helplines, Category Finder Quiz, Beneficiary Grid, Guides, FAQs, Portals | **Fully Built** |
| `/resources` | `Resources.jsx` | Master directory of official central bodies, government portals, 36 SLSAs, and national helplines | **Fully Built** |

### 2. Functional Citizen Tools & Flow Guides
| Route | Page / Component | Title / Primary Purpose | Build Status |
|---|---|---|---|
| `/find-dlsa` | `FindDlsa.jsx` | Interactive District Legal Services Authority locator across all 28 states & 8 UTs with court walk-in guide | **Fully Built** |
| `/how-to-apply` | `HowToApply.jsx` | 4-tab actionable guide: 7-Step DLSA walk-in, Lok Adalats, Tele-Law via CSCs, and LADCS public defense | **Fully Built** |
| `/rights-card` | `RightsCard.jsx` | Pocket Rights Cards generator with category selector and `@media print` / Save as PDF formatting | **Fully Built** |
| `/rights-card/:section` | `RightsCard.jsx` | Direct permalink to category-specific printable rights cards (farmers, workers, women, etc.) | **Fully Built** |
| `/stories` | `SuccessStories.jsx` | Anonymized illustrative case scenarios showing how ordinary citizens navigate legal aid in practice | **Fully Built** |

### 3. Beneficiary Rights Sections (12 Dedicated Pages)
| Route | Page / Component | Title / Primary Purpose | Build Status |
|---|---|---|---|
| `/farmers` | `Farmers.jsx` | Farmers Rights: PM-KISAN, crop debt relief, Lok Adalats, land dispute checklists & FAQs | **Fully Built** |
| `/poor-and-marginalized` | `PoorAndMarginalized.jsx` | Urban & Rural Poor: Section 12 income limits, DLSA court fee waivers, BPL aid | **Fully Built** |
| `/women-and-children` | `WomenAndChildren.jsx` | Women & Children: Automatic Section 12(c) aid, PWDVA 2005 orders, 2018 compensation, 2024 scheme | **Fully Built** |
| `/senior-citizens` | `SeniorCitizens.jsx` | Senior Citizens: Maintenance & Welfare of Parents Act 2007, SDM tribunals, 14567 Elder Line | **Fully Built** |
| `/workers` | `Workers.jsx` | Workers & Unorganized Sector: e-Shram portal, Code on Wages, BOCW welfare board rights | **Fully Built** |
| `/sc-st-tribal` | `ScStTribal.jsx` | SC/ST & Tribal Communities: PoA Act legal assistance, Forest Rights Act 2006, SAMVAD 2025 scheme | **Fully Built** |
| `/students` | `Students.jsx` | Students & Education: RTE 25% EWS quota, 1800-180-5522 UGC Anti-Ragging helpline, NSP disputes | **Fully Built** |
| `/disability-rights` | `DisabilityRights.jsx` | Persons with Disabilities: RPwD Act 2016 rights, UDID Swavlamban card, NALSA 2024 mental illness scheme | **Fully Built** |
| `/lgbtq-rights` | `LgbtqRights.jsx` | LGBTQ+ Rights: NALSA (2014) self-identification, Navtej Johar (2018) decriminalization, Transgender Act 2019 | **Fully Built** |
| `/cyber-safety` | `CyberSafety.jsx` | Cyber Fraud & Digital Arrest: Fake police call red flags, 1930 Golden Hour freezing, DLSA defreezing | **Fully Built** |
| `/consumer-rights` | `ConsumerRights.jsx` | Consumer & Tenant Rights: Consumer Protection Act 2019, e-Jagriti filing, 1915 helpline, rent control | **Fully Built** |
| `/rti-guide` | `RtiGuide.jsx` | Right to Information Guide: Step-by-step filing, ₹10 fee / BPL exemption, 30-day timeline, copyable template | **Fully Built** |
| `/disaster-and-victims` | `DisasterAndVictims.jsx` | Disaster & Crime Victims: Calamity rehabilitation, acid attack compensation 2016, human trafficking aid 2015 | **Fully Built** |

---

## SECTION 4 — RIGHTS, SCHEMES & SOURCES DOCUMENTED (WITH LINKS)

The following table is populated by scanning every legal right, scheme, Act, and helpline present in the codebase:

| Section/Page | Right or Scheme Name | Description (1 line) | Official Source Link | Last Verified Date |
|---|---|---|---|---|
| Farmers | NALSA Poverty Alleviation Scheme, 2015 | Ensures benefits of government poverty schemes reach farmers and rural poor | [nalsa.gov.in Schemes](https://nalsa.gov.in/preventive-strategic-legal-services-schemes/) | November 2026 |
| Farmers | PM-KISAN (Pradhan Mantri Kisan Samman Nidhi) | ₹6,000/yr direct income support for eligible landholder farmer families | [pmkisan.gov.in](https://pmkisan.gov.in) | November 2026 |
| Farmers | Lok Adalat Debt Dispute Resolution | Pre-litigation amicable loan settlement with zero court fees | [Wikipedia - Lok Adalat](https://en.wikipedia.org/wiki/Lok_Adalat) | November 2026 |
| Farmers | CPGRAMS Farmers Grievance Redressal | Central portal for escalating agricultural scheme and land record grievances | [pgportal.gov.in](https://pgportal.gov.in) | November 2026 |
| Poor & Marginalized | Legal Services Authorities Act, 1987 (Sec. 12) | Foundational statute guaranteeing free court lawyers to citizens below income limits | [Wikipedia - LSA Act](https://en.wikipedia.org/wiki/Legal_Services_Authorities_Act_1987) | November 2026 |
| Poor & Marginalized | NALSA Poverty Alleviation Scheme, 2015 | Free legal representation for administrative scheme denial and social security | [nalsa.gov.in Schemes](https://nalsa.gov.in/preventive-strategic-legal-services-schemes/) | November 2026 |
| Poor & Marginalized | NALSA Legal Aid FAQs | Official guidance on eligibility criteria, affidavit requirements, and process | [nalsa.gov.in FAQs](https://nalsa.gov.in/faqs/) | November 2026 |
| Women & Children | Compensation Scheme for Women Victims, 2018 | Financial compensation and rehabilitation for survivors of sexual assault and violence | [nalsa.gov.in Schemes](https://nalsa.gov.in/preventive-strategic-legal-services-schemes/) | November 2026 |
| Women & Children | NALSA Child Friendly Legal Services Scheme, 2024 | Age-appropriate, trauma-informed legal aid for children in conflict or victims | [nalsa.gov.in Schemes](https://nalsa.gov.in/preventive-strategic-legal-services-schemes/) | November 2026 |
| Senior Citizens | NALSA Legal Services to Senior Citizens Scheme, 2016 | Representation before SDM Maintenance Tribunals, old-age pensions, and property protection | [nalsa.gov.in Schemes](https://nalsa.gov.in/preventive-strategic-legal-services-schemes/) | November 2026 |
| Workers | e-Shram National Database for Unorganized Workers | Registration portal issuing 12-digit UAN with accidental death and disability cover | [eshram.gov.in](https://eshram.gov.in) | November 2026 |
| Workers | NALSA Unorganized Sector Workers Scheme, 2015 | Legal aid for wage theft recovery, hazardous conditions, and BOCW welfare claims | [nalsa.gov.in Schemes](https://nalsa.gov.in/preventive-strategic-legal-services-schemes/) | November 2026 |
| SC/ST & Tribal | NALSA Protection & Enforcement of Tribal Rights, 2015 | Defends tribal land rights, Forest Rights Act 2006 claims, and prevents displacement | [nalsa.gov.in Schemes](https://nalsa.gov.in/preventive-strategic-legal-services-schemes/) | November 2026 |
| SC/ST & Tribal | NALSA SAMVAD Scheme, 2025 | Dedicated legal outreach and defense for Adivasis, Nomadic Tribes, and DNTs | [nalsa.gov.in Schemes](https://nalsa.gov.in/preventive-strategic-legal-services-schemes/) | November 2026 |
| Disaster & Victims | NALSA Legal Services to Disaster Victims Scheme, 2010 | Insurance claim assistance and relief restoration for calamity survivors | [nalsa.gov.in Schemes](https://nalsa.gov.in/preventive-strategic-legal-services-schemes/) | November 2026 |
| Disaster & Victims | NALSA Acid Attack Victims Legal Services Scheme, 2016 | Free trial representation and statutory compensation processing for acid attack survivors | [nalsa.gov.in Schemes](https://nalsa.gov.in/preventive-strategic-legal-services-schemes/) | November 2026 |
| Disaster & Victims | NALSA Victims of Trafficking Scheme, 2015 | Rescue, safe repatriation, witness protection, and rehabilitation for trafficking survivors | [nalsa.gov.in Schemes](https://nalsa.gov.in/preventive-strategic-legal-services-schemes/) | November 2026 |
| Students | Right to Education (RTE) Section 12(1)(c) Assistance | Legal aid for denial of 25% private school admission quota for EWS children | [nalsa.gov.in Schemes](https://nalsa.gov.in/preventive-strategic-legal-services-schemes/) | November 2026 |
| Students | National Anti-Ragging Monitoring Portal | 24×7 confidential reporting and tracking of college ragging under Supreme Court orders | [antiragging.in](https://www.antiragging.in) | November 2026 |
| Students | National Scholarship Portal (NSP) | Central portal for tracking pre- and post-matric government scholarships and disputes | [scholarships.gov.in](https://scholarships.gov.in) | November 2026 |
| Students | UGC Anti-Ragging Regulatory Framework | University Grants Commission statutory regulations on curbing college ragging | [ugc.gov.in](https://www.ugc.gov.in) | November 2026 |
| Disability Rights | NALSA Mental Illness & Intellectual Disability Scheme, 2024 | Representation at Mental Health Review Boards and safeguards under RPwD Act 2016 | [nalsa.gov.in Schemes](https://nalsa.gov.in/preventive-strategic-legal-services-schemes/) | November 2026 |
| Disability Rights | UDID Swavlamban Card Portal | Unique Disability Identity card issuance and national database portal | [swavlambancard.gov.in](https://www.swavlambancard.gov.in/) | November 2026 |
| Disability Rights | Department of Empowerment of Persons with Disabilities | Central ministry portal for disability welfare schemes and accessible India guidelines | [disabilityaffairs.gov.in](https://disabilityaffairs.gov.in) | November 2026 |
| LGBTQ+ Rights | NALSA Transgender Rights & Legal Aid Framework | Legal counsel for third-gender recognition and challenging workplace/housing bias | [nalsa.gov.in Schemes](https://nalsa.gov.in/preventive-strategic-legal-services-schemes/) | November 2026 |
| LGBTQ+ Rights | National Portal for Transgender Persons (MSJE) | National portal for Transgender Certificates, identity cards, and SMILE assistance | [socialjustice.gov.in](https://socialjustice.gov.in/) | November 2026 |
| Cyber Safety | National Cybercrime Reporting Portal (MHA / I4C) | Central portal to report financial fraud, digital arrest extortion, and cyber crimes | [cybercrime.gov.in](https://cybercrime.gov.in) | November 2026 |
| Cyber Safety | Model Victim Assistance Scheme in Cyber-Fraud (HP Model 2026) | State protocol for bank account defreezing and cyber-fraud victim legal aid | [himachalpradesh.nalsa.gov.in](https://himachalpradesh.nalsa.gov.in/) | November 2026 |
| Consumer Rights | e-Jagriti Consumer Grievance Portal | Central filing portal for District, State, and National Consumer Disputes Commissions | [e-jagriti.gov.in](https://e-jagriti.gov.in) | November 2026 |
| Consumer Rights | National Consumer Helpline (NCH) | Department of Consumer Affairs guidance portal for pre-litigation consumer complaints | [consumerhelpline.gov.in](https://consumerhelpline.gov.in) | November 2026 |
| RTI Guide | RTI Online Central Portal | Central portal for filing RTI requests and first appeals across all Union Ministries | [rtionline.gov.in](https://rtionline.gov.in) | November 2026 |
| How to Apply | NALSA Official Portal & Online Application | Apex portal to apply online for free legal aid and check application status | [nalsa.gov.in](https://nalsa.gov.in/home) | November 2026 |
| How to Apply | Lok Adalat Dispute Settlement Overview | Procedural explainer on fast amicable dispute settlement with status of Civil Decree | [Wikipedia - Lok Adalat](https://en.wikipedia.org/wiki/Lok_Adalat) | November 2026 |
| Find DLSA | 36 State Legal Services Authorities Directory | Verified official websites, helplines, and court guides for all 28 states & 8 UTs | [slsaDirectory.js](file:///d:/community_project/src/data/slsaDirectory.js) | November 2026 |
| Resources | National Portal of India | Single-entry portal for accessing information and services of Indian Government | [india.gov.in](https://www.india.gov.in) | November 2026 |
| Women & Children | Protection of Women from Domestic Violence Act, 2005 | Ex-parte protection orders, residence orders, and free DLSA legal defense | [India Code (Act No. 43 of 2005)](https://www.indiacode.nic.in/handle/123456789/2021) | November 2026 |
| Senior Citizens | Maintenance & Welfare of Parents & Senior Citizens Act, 2007 | Monthly maintenance tribunal orders and Sec 23 conditional property revocation | [India Code (Act No. 56 of 2007)](https://www.indiacode.nic.in/handle/123456789/2028) | November 2026 |
| Workers | Code on Wages, 2019 / Minimum Wages Framework | Universal statutory minimum wages and wage recovery claims before Labour Commissioner | [India Code (Act No. 29 of 2019)](https://www.indiacode.nic.in/handle/123456789/15456) | November 2026 |
| Workers | Building and Other Construction Workers (BOCW) Act, 1996 | State welfare board registration, tool grants, health aid, and accident relief | [India Code (Act No. 27 of 1996)](https://www.indiacode.nic.in/handle/123456789/1987) | November 2026 |
| SC/ST & Tribal | SC & ST (Prevention of Atrocities) Act, 1989 | Special Court prosecution, mandatory monetary relief, and free legal counsel | [India Code (Act No. 33 of 1989)](https://www.indiacode.nic.in/handle/123456789/1944) | November 2026 |
| SC/ST & Tribal | Scheduled Tribes & Traditional Forest Dwellers (FRA) Act, 2006 | Vesting individual & community forest land titles and eviction protection | [India Code (Act No. 2 of 2007)](https://www.indiacode.nic.in/handle/123456789/2056) | November 2026 |
| Disaster & Victims | Section 357A CrPC / Sec 396 BNSS Victim Compensation | Statutory state victim compensation funds for crime survivor medical rehabilitation | [India Code (Sec 357A)](https://www.indiacode.nic.in/handle/123456789/16225) / [NALSA Framework](https://nalsa.gov.in/acts-rules/schemes/nalsa-s-compensation-scheme-for-women-victims-survivors-of-sexual-assault-other-crimes-2018) | November 2026 |
| Consumer Rights | Model Tenancy Act & State Rent Control Regulations | Ministry of Housing & Urban Affairs framework on Rent Courts, deposit caps, and eviction protection | [MoHUA Model Tenancy Act](https://mohua.gov.in/upload/uploadfiles/files/Model_Tenancy_Act_English.pdf) | November 2026 |

---

### ✅ Statutory Claims Verification Status — All Claims Directly Linked
All 8 previously identified statutory protections and provisions now have direct, verified outbound hyperlinks attached to their official legislative text and central ministry portals in code:

1. **Protection of Women from Domestic Violence Act (PWDVA), 2005** (`src/pages/WomenAndChildren.jsx`, `src/data/schemes.js`, `src/pages/Resources.jsx`):
   - *Official Link:* [India Code Act No. 43 of 2005](https://www.indiacode.nic.in/handle/123456789/2021)
   - *Status:* **LINKED & VERIFIED**
2. **Maintenance and Welfare of Parents and Senior Citizens Act, 2007** (`src/pages/SeniorCitizens.jsx`, `src/data/schemes.js`, `src/pages/Resources.jsx`):
   - *Official Link:* [India Code Act No. 56 of 2007](https://www.indiacode.nic.in/handle/123456789/2028)
   - *Status:* **LINKED & VERIFIED**
3. **Code on Wages, 2019 / Minimum Wages Act, 1948** (`src/pages/Workers.jsx`, `src/data/schemes.js`, `src/pages/Resources.jsx`):
   - *Official Link:* [India Code Act No. 29 of 2019](https://www.indiacode.nic.in/handle/123456789/15456)
   - *Status:* **LINKED & VERIFIED**
4. **Building and Other Construction Workers (BOCW) Act, 1996** (`src/pages/Workers.jsx`, `src/data/schemes.js`, `src/pages/Resources.jsx`):
   - *Official Link:* [India Code Act No. 27 of 1996](https://www.indiacode.nic.in/handle/123456789/1987)
   - *Status:* **LINKED & VERIFIED**
5. **Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989** (`src/pages/ScStTribal.jsx`, `src/data/schemes.js`, `src/pages/Resources.jsx`):
   - *Official Link:* [India Code Act No. 33 of 1989](https://www.indiacode.nic.in/handle/123456789/1944)
   - *Status:* **LINKED & VERIFIED**
6. **Forest Rights Act (FRA), 2006** (`src/pages/ScStTribal.jsx`, `src/data/schemes.js`, `src/pages/Resources.jsx`):
   - *Official Link:* [India Code Act No. 2 of 2007](https://www.indiacode.nic.in/handle/123456789/2056)
   - *Status:* **LINKED & VERIFIED**
7. **Section 357A CrPC / Sec 396 BNSS Victim Compensation** (`src/pages/DisasterAndVictims.jsx`, `src/data/schemes.js`, `src/pages/Resources.jsx`):
   - *Official Link:* [India Code CrPC Sec 357A](https://www.indiacode.nic.in/handle/123456789/16225) & [NALSA Scheme](https://nalsa.gov.in/acts-rules/schemes/nalsa-s-compensation-scheme-for-women-victims-survivors-of-sexual-assault-other-crimes-2018)
   - *Status:* **LINKED & VERIFIED**
8. **State Rent Control Acts & Model Tenancy Act** (`src/pages/ConsumerRights.jsx`, `src/data/schemes.js`, `src/pages/Resources.jsx`):
   - *Official Link:* [MoHUA Model Tenancy Act Publication](https://mohua.gov.in/upload/uploadfiles/files/Model_Tenancy_Act_English.pdf)
   - *Status:* **LINKED & VERIFIED**

---

### Flat List of Distinct External Domains Linked Across the Site (36 Domains)
Verified via `scripts/extract-schemes-and-links.js`:

1. `arunachalpradesh.nalsa.gov.in`
2. `aslsa.assam.gov.in`
3. `chandigarh.nalsa.gov.in`
4. `consumerhelpline.gov.in`
5. `cybercrime.gov.in`
6. `daman.nic.in`
7. `disabilityaffairs.gov.in`
8. `dslsa.org`
9. `e-jagriti.gov.in`
10. `en.wikipedia.org`
11. `eshram.gov.in`
12. `gujarat.nalsa.gov.in`
13. `himachalpradesh.nalsa.gov.in`
14. `jhalsa.org`
15. `karnataka.nalsa.gov.in`
16. `ladakh.nalsa.gov.in`
17. `lakshadweep.gov.in`
18. `maharashtra.nalsa.gov.in`
19. `maslsa.nic.in`
20. `mizoram.nalsa.gov.in`
21. `mohua.gov.in`
22. `nalsa.gov.in`
23. `pgportal.gov.in`
24. `pmkisan.gov.in`
25. `puducherry.nalsa.gov.in`
26. `pulsa.punjab.gov.in`
27. `rtionline.gov.in`
28. `scholarships.gov.in`
29. `socialjustice.gov.in`
30. `telangana.nalsa.gov.in`
31. `www.antiragging.in`
32. `www.india.gov.in`
33. `www.indiacode.nic.in`
34. `www.nic.gov.in`
35. `www.swavlambancard.gov.in`
36. `www.ugc.gov.in`

---

## SECTION 5 — INTERACTIVE FEATURES & TOOLS

| Feature / Tool | Location | Description | Functional Status |
|---|---|---|---|
| **Chatbot Widget** | `src/components/ChatBot.jsx` | Floating bottom-right assistant; communicates via `/api/chat` with Groq model `qwen/qwen3.8-27b`; enforces strict disclaimer and DLSA referral | **Fully Functional** (Serverless on Vercel / Express locally; falls back gracefully to 15100 when key absent) |
| **Find My Nearest DLSA** | `src/pages/FindDlsa.jsx` | State/UT dropdown with instant details, official SLSA website link, physical district court complex locator notices | **Fully Functional** |
| **Document Checklist Generator** | `src/components/DocumentChecklist.jsx` | Interactive checkbox tracker with real-time progress count ("X of Y prepared") and `window.print()` print handler | **Fully Functional** |
| **FAQ Accordions** | `src/components/FAQAccordion.jsx` | Accessible shadcn/Radix accordion component rendering practical Q&As across pages | **Fully Functional** |
| **Site-Wide Instant Search** | `src/components/SearchBar.jsx` | Client-side fuzzy search indexing 24 schemes, Acts, and helplines with modal results dropdown | **Fully Functional** |
| **Printable Pocket Rights Cards** | `src/pages/RightsCard.jsx` | 1-page high-contrast printable summary per citizen group with "Print / Save as PDF" trigger | **Fully Functional** |
| **Report a Broken Link / Issue Form** | `src/components/ReportIssueModal.jsx` | Accessible dialog form in footer submitting issue reports to `/api/report-issue` with toast notification | **Fully Functional** |
| **Top Utility & Accessibility Toolbar** | `src/components/TopUtilityBar.jsx` | Skip to content, font-size adjustments (`A-`, `A`, `A+`), contrast mode toggle, screen reader info modal | **Fully Functional** |
| **Language Toggle (i18n)** | `src/context/LanguageContext.jsx` | Bilingual switcher toggling `en` and `hi`, persisting in `localStorage`, updating document `lang` attribute | **Fully Functional** (Nav, Hero, HowToApply translated; sub-pages show localized badge) |
| **Guided Category Finder Quiz** | `src/components/GuidedQuiz.jsx` | 30-second multi-step guided finder with tricolor hover indicators routing citizens directly to their category | **Fully Functional** |
| **Interactive Pathway Tabs** | `src/pages/HowToApply.jsx` | 4-tab switcher between Court DLSA 7-steps, Lok Adalat, Tele-Law, and LADCS public defense | **Fully Functional** |

---

## SECTION 6 — DESIGN SYSTEM

### Color Palette (Tailwind Tokens & Hex Values)
Verified in `tailwind.config.js`:
- **Navy Palette (Base Trust):**
  - `navy-50`: `#eef2f7`
  - `navy-100`: `#d4dce8`
  - `navy-200`: `#a9b9d1`
  - `navy-300`: `#7e96ba`
  - `navy-400`: `#5373a3`
  - `navy-500`: `#2d4a7a`
  - `navy-600`: `#1e3a5f` (Brand Primary)
  - `navy-700`: `#162d4a`
  - `navy-800`: `#0f2035`
  - `navy-900`: `#081420` (Footer Backdrop)
  - `navy-950`: `#040a12` (Card Dark Surface)
- **Saffron Palette (National Identity & CTAs):**
  - `saffron-50`: `#fff8f0`
  - `saffron-100`: `#ffecd4`
  - `saffron-200`: `#ffd5a0`
  - `saffron-300`: `#ffbe6d`
  - `saffron-400`: `#ffa733`
  - `saffron-500`: `#ff8c00` (Primary Accent)
  - `saffron-600`: `#e07000`
  - `saffron-700`: `#b85800`
  - `saffron-800`: `#8f4400`
  - `saffron-900`: `#663100`
- **Forest Green Palette (Success & Verification):**
  - `forest-50` to `forest-900` (`#f0f7f4` to `#081e14`)
  - `forest-600`: `#1e6e4a`
- **India National Flag Colors:**
  - `india.saffron`: `#FF9933`
  - `india.green`: `#138808`
  - `india.navy`: `#000080`

### Typography Scale & Fonts
Verified in `index.html` and `tailwind.config.js`:
- **Font Families:** `"Inter"`, `"Noto Sans"`, `system-ui`, `sans-serif` loaded from Google Fonts.
- **Root Sizing (`index.css`):**
  - Standard (`font-size-normal`): `16px`
  - Small (`font-size-sm`): `14px`
  - Large (`font-size-lg`): `18px`

### Tricolor & Ashoka Chakra Visual Elements
Implemented across the following components:
1. `TricolorHeaderBar.jsx`: 3-layer decorative strip (Saffron, White, India Green) at top of page.
2. `TricolorCardTop.jsx`: Horizontal 3-part accent stripe along the upper rim of all cards (Homepage quick-access grid, Guided Quiz container, Scheme cards, Document Checklists, Find DLSA cards, and Footer).
3. `TricolorBadge.jsx`: Pill badge with 3 circular tricolor dots and category labels.
4. `TricolorDivider.jsx`: Saffron-to-green gradient divider featuring a central standalone 24-spoke Ashoka Chakra wheel.
5. `AshokaChakra.jsx`: Clean mathematical vector SVG with exact 24 spokes at 15° angles in navy blue `#000080`.
6. `favicon.svg`: Standalone 24-spoke Ashoka Chakra SVG in navy `#000080`.

### Mandatory Independent Disclaimer
Verified in `src/components/Footer.jsx` (lines 224-228):
> *"Disclaimer: This portal provides general information about government legal aid schemes and is not a substitute for professional legal advice. For case-specific help, contact your District Legal Services Authority (DLSA) or call the NALSA helpline at 15100. This is an independent informational project and is not an official Government of India website. The tricolor and Ashoka Chakra motif used on this site are decorative design elements reflecting national identity and do not imply any government affiliation, authorization, or endorsement. This site does not use the State Emblem of India."*

---

## SECTION 7 — KNOWN GAPS / NOT YET IMPLEMENTED

1. **Incomplete Hindi Translation Coverage on Sub-Pages:**
   - While the site navigation, hero, helpline banners, common CTAs, and the complete "How to Apply" (`HowToApply.jsx`) guide are translated into Hindi, the detailed paragraphs, document checklists, and FAQ answers on the 12 individual category pages (Farmers, Workers, Women, Seniors, etc.) currently show English text accompanied by the localized notice badge: `"अंग्रेजी सामग्री • हिंदी अनुवाद शीघ्र आ रहा है"`.
2. **Database Persistence for Issue Reports:**
   - `/api/report-issue` appends submissions to `issue-reports.log` locally and logs them in Vercel serverless execution logs, returning a receipt ID. However, there is no persistent cloud database (e.g., PostgreSQL or MongoDB) connected to store reports permanently.
3. **Offline Heuristic Rule-Based Fallback for Chat:**
   - If the Groq API key is omitted or the upstream service fails, the chatbot immediately renders the graceful error directing users to call 15100. A local offline decision tree / rule-based FAQ responder is not implemented.
4. **Taluk / Court-Room Granular Directory:**
   - While `/find-dlsa` provides verified state authority portals, phone numbers, and physical court complex instructions for all 36 States & UTs, it does not include individual phone extensions for every local Taluk Legal Services Committee (TLSC) or sub-divisional magistrate office. Citizens are directed to the district court complex front office.

---

## SECTION 8 — ENVIRONMENT & SECURITY CHECKLIST

| Verification Item | Requirement | Verification Result |
|---|---|---|
| **`.env` File** | Present locally with secret keys | **PASS** — Present at project root; contains `GROQ_API_KEY` |
| **`.env.example` File** | Present with empty placeholders | **PASS** — Contains `GROQ_API_KEY=` without secret values |
| **`.gitignore` Configuration** | Explicitly excludes `.env` and variants | **PASS** — `.gitignore` excludes `.env`, `node_modules`, `dist`, logs |
| **Git Tracking Check** | `.env` never staged or tracked | **PASS** — Verified via `git status` and `git ls-files .env` (untracked) |
| **Git History Leak Audit** | Secret key never committed | **PASS** — `git log -S "gsk_igyi" --all` returned zero commits |
| **Server-Side API Isolation** | Key never delivered to client | **PASS** — Chat calls `/api/chat` relative URL; key remains in server/Vercel env |
| **State Emblem Act Compliance** | No Lion Capital imagery | **PASS** — Zero State Emblem of India images; 24-spoke wheel SVG only |
| **Automated Build Audit** | Vite production compilation | **PASS** — 1,829 modules compiled with 0 errors in 4.28s |
| **Accessibility Audit** | Automated WCAG 2.1 checks | **PASS** — 57 JSX files audited with 0 violations |
| **Route Integrity Audit** | No broken internal routing | **PASS** — 23 internal links verified across 20 routes with 0 dead links |
