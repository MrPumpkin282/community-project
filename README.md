# Nyaya Sathi — Legal Aid & Rights Awareness Portal (India)

> **Know Your Rights. Get Free Legal Help.**  
> *भारतीय संविधान के अनुच्छेद 39A के तहत निःशुल्क कानूनी सहायता आपका संवैधानिक अधिकार है।*

A responsive, multi-page web portal that helps ordinary Indians — especially farmers, the urban/rural poor, labourers, women, senior citizens, students, persons with disabilities, marginalized communities, and cyber fraud victims — understand their legal rights and find the correct official channel for free legal aid.

> **⚠️ Disclaimer:** This portal provides general information about government legal aid schemes and is not a substitute for professional legal advice. For case-specific help, contact your District Legal Services Authority (DLSA) or call the NALSA helpline at **15100**. This is an independent informational project and is not an official Government of India website.

---

## Tech Stack

- **Frontend:** React 18 + Vite + Tailwind CSS
- **Routing:** React Router v7
- **Icons:** Lucide React
- **Internationalization (i18n):** React Context supporting English & Hindi (हिंदी) with persistence
- **Accessibility:** Font-size toggles (A- / A / A+), High-Contrast Mode, Keyboard navigation focus rings, and `@media print` layouts
- **Backend:** Express.js (proxy for Groq chatbot API and issue reports)
- **Chatbot:** Groq API (`qwen/qwen3.8-27b` model with server-side API key protection)

---

## Getting Started

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd community_project
npm install
```

### 2. Add Your Groq API Key

Open the `.env` file at the project root and add your Groq API key:

```env
GROQ_API_KEY=gsk_your_key_here
```

Get a free API key at [console.groq.com/keys](https://console.groq.com/keys).

> The `.env` file is git-ignored. See `.env.example` for reference.

### 3. Run the Dev Server

```bash
npm run dev
```

Starts **both** the Vite client (port 5173) and the Express API server (port 3001) concurrently.

- **Frontend:** [http://localhost:5173](http://localhost:5173)
- **Chat Proxy:** [http://localhost:3001/api/chat](http://localhost:3001/api/chat)
- **Report Issue API:** [http://localhost:3001/api/report-issue](http://localhost:3001/api/report-issue)

### 4. Build for Production

```bash
npm run build
```

Generates an optimized bundle in `dist/`.

---

## Pages & Routes

| Route | Page / Feature | Key Highlights |
|---|---|---|
| `/` | **Home** | Hero, Guided Category Quiz, Quick-Access Cards, NALSA 39A explainer, 15100 helpline banner |
| `/find-dlsa` | **Find My Nearest DLSA** | State dropdown covering all 28 States & 8 UTs with verified SLSA portals & court complex guides |
| `/farmers` | **Farmers** | PM-KISAN (155261 / 1800-115-526), loan/debt relief, grievance redressal, document checklist |
| `/poor-and-marginalized` | **Urban & Rural Poor** | Free legal aid under Section 12, state income thresholds (~₹3 Lakh), DLSA walk-in guidance |
| `/women-and-children` | **Women & Children** | Automatic statutory eligibility, PWDVA 2005 protection orders, 2018 compensation scheme, 2024 child-friendly scheme |
| `/senior-citizens` | **Senior Citizens** | Maintenance & Welfare of Parents Act 2007, SDM Maintenance Tribunals, Elder Line 14567 |
| `/workers` | **Workers & Unorganized Sector** | e-Shram portal registration (UAN), wage theft recovery, BOCW welfare, 14434 helpdesk |
| `/sc-st-tribal` | **SC/ST & Tribal Rights** | PoA Act protection against atrocities, Forest Rights Act 2006, NALSA SAMVAD 2025 scheme |
| `/students` | **Students & Education Rights** | RTE Act 2009 25% EWS reservation, 24x7 UGC Anti-Ragging helpline (1800-180-5522), NSP scholarship disputes |
| `/disability-rights` | **Persons with Disabilities** | RPwD Act 2016 (4% job / 5% education reservation), UDID Swavlamban card, NALSA 2024 mental health scheme |
| `/lgbtq-rights` | **LGBTQ+ Rights** | NALSA v. UOI (2014) 3rd gender recognition, Navtej Johar (2018) decriminalization, Transgender Act 2019 |
| `/cyber-safety` | **Cyber Fraud & Digital Arrest** | Spot fake "Digital Arrest" scams, National Cybercrime Helpline 1930, Golden Hour fund freezing, DLSA defreezing |
| `/consumer-rights` | **Tenant & Consumer Rights** | Consumer Protection Act 2019 (zero fee up to ₹5L), e-Daakhil filing, NCH 1915, state Rent Control basics |
| `/rti-guide` | **Right to Information (RTI)** | Step-by-step filing guide, ₹10 fee / BPL exemption, 30-day timeline, copyable/downloadable sample RTI template |
| `/disaster-and-victims` | **Disaster & Crime Victims** | Aid for flood/earthquake victims, acid attack compensation 2016, human trafficking rescue 2015 |
| `/how-to-apply` | **How to Get Legal Aid** | 7-step DLSA guide, Lok Adalat dispute resolution, Tele-Law at CSCs, LADCS defense counsel |
| `/stories` | **Illustrative Case Stories** | 5 anonymized real-world examples (debt settlement, maintenance order, wage recovery, account defreezing) |
| `/rights-card` / `/rights-card/:section` | **Printable Rights Cards** | 1-page printable summary for each citizen group with emergency numbers and print-to-PDF layout |
| `/resources` | **Resources & Directory** | Verified directory of national bodies, state authorities, and government portals |

---

## Functional Features & Components

1. **Find My Nearest DLSA (`/find-dlsa`)**: Dropdown covering all 28 states & 8 UTs with court complex notices and verified SLSA website links.
2. **Document Checklist Generator (`DocumentChecklist.jsx`)**: Interactive checkbox list per section with a dedicated "Print this checklist" button (`window.print()`).
3. **FAQ Accordion (`FAQAccordion.jsx`)**: 4 to 6 practical Q&As per section answering real-world legal aid questions.
4. **Site-Wide Instant Search (`SearchBar.jsx`)**: Client-side fuzzy search in header indexing section titles, schemes, and helplines.
5. **Downloadable Rights Cards (`RightsCard.jsx`)**: High-contrast, clean 1-page printable cards with "Print / Save as PDF" button.
6. **Hindi Language Support (i18n)**: One-click toggle (EN / हिं) in header, translating navigation, hero, helplines, and the complete "How to Get Legal Aid" guide into Hindi.
7. **Accessibility Toggles (`AccessibilityToggles.jsx`)**: Font-size adjustments (A- / A / A+) and High-Contrast Mode toggle.
8. **"Last Verified" Date Tags**: Every scheme card and external portal link displays a verification tag (`Last verified: November 2026`).
9. **"Report a Broken Link / Issue" (`ReportIssueModal.jsx`)**: Persistent footer button opening a modal that logs user reports to `/api/report-issue`.
10. **"Which Category Am I?" Guided Quiz (`GuidedQuiz.jsx`)**: 30-second guided quiz on the homepage routing users directly to their relevant section.

---

## Key Official Helplines Sitewide

| Service / Authority | Helpline Number | Availability |
|---|---|---|
| **NALSA Free Legal Aid** | **15100** | 24×7 • Toll-Free |
| **National Cybercrime Helpline** | **1930** | 24×7 • Immediate Golden Hour |
| **National Consumer Helpline** | **1915** | Toll-Free |
| **UGC National Anti-Ragging Helpline** | **1800-180-5522** | 24×7 • Toll-Free |
| **Elder Line (Senior Citizens)** | **14567** | Toll-Free |
| **Women Helpline** | **181** | 24×7 • Emergency |
| **PM-KISAN Farmers Helpline** | **155261 / 1800-115-526** | Toll-Free |
| **National Emergency (Police/Fire/Ambulance)** | **112** | 24×7 • All India |
| **e-Shram Workers Helpdesk** | **14434** | Toll-Free |

---

## License

This is an independent open-access public informational project and is **not** an official Government of India website.
