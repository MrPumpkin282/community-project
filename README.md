# Nyaya Sathi — Legal Aid & Rights Awareness Portal (India)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMrPumpkin282%2Fcommunity-project&env=GROQ_API_KEY)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/MrPumpkin282/community-project)
[![License: Unofficial/Public Good](https://img.shields.io/badge/License-Public_Informational-green.svg)](#license)

> **Know Your Rights. Get Free Legal Help.**  
> *भारतीय संविधान के अनुच्छेद 39A के तहत निःशुल्क कानूनी सहायता आपका संवैधानिक अधिकार है।*

**Nyaya Sathi (न्याय साथी)** is an independent, responsive, multi-page civic portal designed to help ordinary Indian citizens — especially farmers, the rural/urban poor, unorganized workers, women, senior citizens, students, persons with disabilities, marginalized communities, and victims of cyber fraud — understand their constitutional rights and connect directly with official statutory legal aid channels.

> **⚠️ Mandatory Legal Disclaimer:** This portal provides general informational guidance about government legal aid schemes and is not a substitute for professional legal advice. For case-specific help, visit your nearest District Legal Services Authority (DLSA) inside your District Court complex or call the national NALSA helpline at **15100**. This is an independent civic project and is not an official Government of India website. The tricolor and Ashoka Chakra motif used on this site are decorative design elements reflecting national identity and do not imply government affiliation, authorization, or endorsement. This portal does not use the State Emblem of India (Lion Capital).

---

## 🚀 Live Deployment on Vercel

The portal is optimized for production deployment on **Vercel**:
- **Automatic SPA Routing:** Pre-configured `vercel.json` rewrites all client-side routes (`/farmers`, `/find-dlsa`, etc.) to `/index.html`, eliminating 404s on page refresh.
- **Serverless API Handlers:** Native serverless functions in `api/chat.js` and `api/report-issue.js` handle backend requests without requiring an external server process.
- **Secure Server-Side AI:** The Groq API key is read securely server-side via Vercel Environment Variables (`GROQ_API_KEY`), never exposed to client browsers.

### Deploying Your Own Copy to Vercel
1. Import this repository in [Vercel](https://vercel.com/).
2. Framework Preset will auto-detect as **Vite** (Build: `npm run build`, Output: `dist`).
3. Under **Environment Variables**, add:
   - `GROQ_API_KEY`: Your Groq API key from [console.groq.com/keys](https://console.groq.com/keys).
4. Click **Deploy**.

---

## 🏛️ Architecture & UX Highlights

### 1. MyGov.in-Inspired Structural Patterns
- **Top Utility Bar (`TopUtilityBar.jsx`):** 
  - Direct *"Skip to main content"* keyboard anchor (`#main-content`).
  - GIGW-compliant text sizing controls (**A-** / **A** / **A+**).
  - High-Contrast mode toggle (`SunMoon`).
  - Screen Reader Access dialog with WCAG 2.1 AA specifications.
  - 24×7 Emergency Helpline callouts (`NALSA 15100`, `Cybercrime 1930`).
  - Bilingual switcher (**English** / **हिन्दी**).
- **Thematic Mega-Menu Navigation (`Navbar.jsx`):**
  - **Know Your Rights:** 3-column directory categorized into *Marginalized & Relief*, *Work & Livelihood*, and *Family & Inclusion*.
  - **How to Get Help:** Procedural walkthroughs for *Court Legal Aid (DLSA)*, *Criminal Defense (LADCS)*, *Cyber Fraud Defence*, and *RTI*.
  - **Citizen Tools:** Interactive cards for *Find DLSA*, *Rights Cards*, *Case Scenarios*, and *Official Sources*.
- **Card-Based Homepage Content Blocks:**
  - Distinct sections with clear headings, badges, descriptions, and "View All" actions.
  - Interactive 30-Second Category Finder Quiz.
  - Tabbed category filter pills (*Work & Farmers*, *Family & Inclusion*, *Marginalized & Vulnerable*).
  - Frequently Asked Questions accordion block.
  - Verified Official Government Portals directory.
- **Institutional 5-Column Grouped Footer (`Footer.jsx`):**
  - High-contrast typography with explicit deep navy backdrop (`#081420`).
  - Organized columns for *Citizen Rights*, *Guides & Tools*, *Official Portals*, *National Helplines*, and an interactive *Accessibility & Non-Affiliation Statement*.

### 2. Indian National Visual Identity
- **Tricolor Palette Accents:** Tasteful Saffron (`#FF9933`), White (`#FFFFFF`), and India Green (`#138808`) ribbon tops (`TricolorCardTop`) and section dividers (`TricolorDivider`).
- **Standalone 24-Spoke Ashoka Chakra (`AshokaChakra.jsx`):** Clean SVG wheel with 24 radiating spokes in navy blue (`#000080`).
- **Statutory Compliance:** In accordance with the *State Emblem of India (Prohibition of Improper Use) Act, 2005*, **zero** State Emblem (Lion Capital) imagery is used anywhere on the portal.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 + Vite
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (New York style, Radix UI primitives)
- **Styling:** Tailwind CSS + Tailwind Animate
- **Routing:** React Router v7
- **Icons:** Lucide React
- **Chatbot Backend:** 
  - **Production (Vercel):** Serverless Functions (`api/chat.js` & `api/report-issue.js`)
  - **Local Development:** Express.js (`server.js`)
- **AI Model:** Groq API (`qwen/qwen3.8-27b`)
- **Accessibility:** WCAG 2.1 AA compliant, screen reader tested, keyboard navigable

---

## 💻 Local Development Setup

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/MrPumpkin282/community-project.git
cd community-project
npm install
```

### 2. Configure Environment Variables
Create a `.env` file at the root:
```env
GROQ_API_KEY=gsk_your_groq_api_key_here
```
*(See `.env.example` for reference. The `.env` file is excluded in `.gitignore`.)*

### 3. Run Development Servers
```bash
npm run dev
```
Runs both the Vite development server (port `5173`) and the local Express server (port `3001`) concurrently.

- **Web Portal:** [http://localhost:5173](http://localhost:5173)
- **Local Chat API:** [http://localhost:3001/api/chat](http://localhost:3001/api/chat)

### 4. Build & Verify Locally
```bash
# Production bundle build
npm run build

# Automated accessibility audit
node scripts/audit-accessibility.js

# Internal links validation
node scripts/verify-internal-links.js

# Search query engine tests
node scripts/test-search.js
```

---

## 📖 Complete Directory of Pages & Routes

| Route | Section / Feature | Primary Legal Acts & Helplines |
|---|---|---|
| `/` | **Homepage** | Article 39A Hero, Guided Quiz, 16 Category Cards, FAQs, Verified Portals |
| `/find-dlsa` | **Find My Nearest DLSA** | State/UT directory covering all 28 States & 8 UTs with court complex location guide |
| `/how-to-apply` | **How to Apply for Legal Aid** | 7-step court guide, Lok Adalat settlements, Tele-Law via CSCs, LADCS criminal defense |
| `/farmers` | **Farmers & Agriculture** | PM-KISAN (155261), loan relief, land record disputes, crop insurance redressal |
| `/poor-and-marginalized` | **Urban & Rural Poor** | Section 12 income limits, DLSA court fee waiver, front-office legal counsel |
| `/women-and-children` | **Women & Children** | Automatic eligibility without income ceiling, PWDVA 2005 protection orders, 181 helpline |
| `/senior-citizens` | **Senior Citizens** | Maintenance & Welfare of Parents Act 2007, SDM tribunals, Elder Line 14567 |
| `/workers` | **Workers & Unorganized Sector** | e-Shram portal (14434), minimum wage claims, BOCW accident compensation |
| `/sc-st-tribal` | **SC/ST & Tribal Rights** | Prevention of Atrocities (PoA) Act, Forest Rights Act 2006, NALSA SAMVAD 2025 |
| `/students` | **Students & Education** | Right to Education (RTE) 25% EWS quota, UGC Anti-Ragging (1800-180-5522), scholarships |
| `/disability-rights` | **Persons with Disabilities** | RPwD Act 2016 rights, UDID Swavlamban card, NALSA 2024 mental illness scheme |
| `/lgbtq-rights` | **LGBTQ+ Rights** | NALSA v. UOI (2014) self-identification, Navtej Johar (2018), Transgender Act 2019 |
| `/cyber-safety` | **Cyber Fraud & Digital Arrest** | Spot fake police video calls, 1930 Golden Hour freeze, DLSA bank account defreezing |
| `/consumer-rights` | **Consumer & Tenant Rights** | Consumer Protection Act 2019, e-Jagriti filing, 1915 helpline, landlord security deposit rules |
| `/rti-guide` | **Right to Information (RTI)** | Standard ₹10 fee / BPL exemption, 30-day timeline, copyable RTI application template |
| `/disaster-and-victims` | **Disaster & Crime Victims** | Relief for calamity survivors, acid attack compensation, human trafficking legal aid |
| `/stories` | **Illustrative Case Scenarios** | Anonymized real-life walkthroughs of legal aid resolutions in practice |
| `/rights-card` | **Pocket Rights Cards** | 1-page printable cards with statutory rights and emergency numbers to carry to court |
| `/resources` | **Official Sources Directory** | Curated catalog of verified central portals, state authorities, and statutory links |

---

## 📞 Key National Helplines

| Service / Authority | Helpline Number | Availability |
|---|---|---|
| **NALSA National Legal Aid Helpline** | **15100** | 24×7 • Toll-Free • Nationwide |
| **National Cybercrime Reporting Helpline** | **1930** | 24×7 • Urgent Golden Hour Financial Freezing |
| **National Emergency (Police / Fire / Medical)** | **112** | 24×7 • All-India Emergency Response |
| **National Consumer Helpline (NCH)** | **1915** | Toll-Free • Consumer Dispute Redressal |
| **Elder Line (Senior Citizens Helpline)** | **14567** | Toll-Free • Elder Abuse & Maintenance Support |
| **Women in Distress Helpline** | **181** | 24×7 • Emergency Assistance & Domestic Violence |
| **PM-KISAN Farmers Helpdesk** | **155261 / 1800-115-526** | Toll-Free • Direct Income Support Enquiries |
| **National Anti-Ragging Helpline (UGC)** | **1800-180-5522** | 24×7 • Toll-Free • Student Safety |
| **e-Shram Workers Helpdesk** | **14434** | Toll-Free • Unorganized Labour Registration |

---

## 📄 License & Public Attribution

This portal is an independent, open-access public interest project. All informational materials are provided for public rights literacy in service of Indian citizens under **Article 39A of the Constitution of India**.
