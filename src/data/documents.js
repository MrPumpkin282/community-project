// Common document checklists for legal aid applications across sections
export const DOCUMENT_CHECKLISTS = {
  farmers: {
    category: 'Farmers',
    items: [
      { id: 'f-1', name: 'Aadhaar Card or Voter ID (Identity Proof)', required: true },
      { id: 'f-2', name: 'Land Ownership Document / Record of Rights (7/12, Patta, or Khatiyan)', required: true },
      { id: 'f-3', name: 'PM-KISAN Registration / Beneficiary Status printout', required: false },
      { id: 'f-4', name: 'Bank Passbook copy showing recent transactions or debt notices', required: true },
      { id: 'f-5', name: 'Loan Sanction letter, Kisan Credit Card (KCC) passbook, or recovery notice', required: false },
      { id: 'f-6', name: 'Income Certificate or Self-declaration of agricultural income', required: false },
    ],
  },
  poorAndMarginalized: {
    category: 'Urban & Rural Poor',
    items: [
      { id: 'p-1', name: 'Aadhaar Card, Voter ID, or Ration Card (Identity & Address)', required: true },
      { id: 'p-2', name: 'Income Certificate issued by Tehsildar/SDM or BPL / Antyodaya Card', required: true },
      { id: 'p-3', name: 'Affidavit/Self-declaration of income (if formal certificate is unavailable)', required: false },
      { id: 'p-4', name: 'Dispute-related documents (eviction notice, loan notice, police complaint)', required: true },
      { id: 'p-5', name: 'Bank Account Passbook (first page with IFSC and account number)', required: false },
    ],
  },
  womenAndChildren: {
    category: 'Women & Children',
    items: [
      { id: 'w-1', name: 'Identity Proof of applicant or guardian (Aadhaar / Voter ID)', required: true },
      { id: 'w-2', name: 'Copy of Marriage Certificate or Wedding Card / Photos (for matrimonial cases)', required: false },
      { id: 'w-3', name: 'Police complaint / Domestic Incident Report (DIR) / FIR copy (if filed)', required: false },
      { id: 'w-4', name: 'Medical examination reports / Injury receipts (if domestic violence or assault)', required: false },
      { id: 'w-5', name: 'Birth Certificate or school certificate of minor children', required: false },
      { id: 'w-6', name: 'Income certificate is NOT required (free legal aid is statutory for all women)', required: false },
    ],
  },
  seniorCitizens: {
    category: 'Senior Citizens',
    items: [
      { id: 's-1', name: 'Proof of Age showing 60+ years (Aadhaar, Voter ID, PAN, or Pension Card)', required: true },
      { id: 's-2', name: 'Residential address proof', required: true },
      { id: 's-3', name: 'Property documents (gift deed, sale deed, will) if facing property transfer dispute', required: false },
      { id: 's-4', name: 'Medical records / prescription slips showing regular healthcare expenses', required: false },
      { id: 's-5', name: 'Names, addresses, and employment details of children/heirs for Maintenance Tribunal', required: true },
    ],
  },
  workers: {
    category: 'Workers & Unorganized Sector',
    items: [
      { id: 'wo-1', name: 'Aadhaar Card', required: true },
      { id: 'wo-2', name: 'e-Shram Card or Universal Account Number (UAN)', required: false },
      { id: 'wo-3', name: 'Building & Other Construction Workers (BOCW) welfare board card (if registered)', required: false },
      { id: 'wo-4', name: 'Proof of employment: Wage slips, attendance card, gate pass, or coworker affidavits', required: false },
      { id: 'wo-5', name: 'Bank passbook copy showing salary credits or cessation of payments', required: true },
      { id: 'wo-6', name: 'Written communication, termination memo, or employer details', required: false },
    ],
  },
  scStTribal: {
    category: 'SC/ST & Tribal Rights',
    items: [
      { id: 'st-1', name: 'Aadhaar Card or Voter ID', required: true },
      { id: 'st-2', name: 'Caste Certificate issued by competent revenue authority', required: true },
      { id: 'st-3', name: 'Forest Rights Act (FRA) title or individual/community claim application copy', required: false },
      { id: 'st-4', name: 'Complaint copy or FIR if filing under SC/ST (Prevention of Atrocities) Act', required: false },
      { id: 'st-5', name: 'Income certificate is NOT required (automatic eligibility for SC/ST)', required: false },
    ],
  },
  disasterAndVictims: {
    category: 'Disaster & Victims',
    items: [
      { id: 'd-1', name: 'Any available identity proof (if originals were lost, self-affidavit is accepted)', required: true },
      { id: 'd-2', name: 'FIR copy or Police Station Dairy (GD) entry for crime victims', required: false },
      { id: 'd-3', name: 'Disaster assessment receipt or village panchayat / patwari certificate of loss', required: false },
      { id: 'd-4', name: 'Hospital discharge summary, disability certificate, or medico-legal certificate (MLC)', required: false },
      { id: 'd-5', name: 'Bank passbook copy for direct benefit transfer of statutory compensation', required: true },
    ],
  },
  students: {
    category: 'Students & Education',
    items: [
      { id: 'stu-1', name: 'Student Identity Card and College/School Admission Letter', required: true },
      { id: 'stu-2', name: 'Aadhaar Card of student (or parent/guardian for minors)', required: true },
      { id: 'stu-3', name: 'Fee receipts or fee structure prospectus', required: true },
      { id: 'stu-4', name: 'Income Certificate (for RTE 25% quota or scholarship disputes)', required: false },
      { id: 'stu-5', name: 'Written complaint submitted to anti-ragging cell / college grievance committee', required: false },
      { id: 'stu-6', name: 'National Scholarship Portal (NSP) Application ID and status screenshots', required: false },
    ],
  },
  disabilityRights: {
    category: 'Persons with Disabilities',
    items: [
      { id: 'dis-1', name: 'Unique Disability ID (UDID) Card or Disability Certificate (40%+ benchmark disability)', required: true },
      { id: 'dis-2', name: 'Aadhaar Card / Age proof', required: true },
      { id: 'dis-3', name: 'Income Certificate (if applying under specific state welfare scheme)', required: false },
      { id: 'dis-4', name: 'Medical prescriptions or diagnosis reports (especially for mental illness / intellectual disability)', required: false },
      { id: 'dis-5', name: 'Employment rejection letter, accessibility denial notice, or grievance record', required: false },
    ],
  },
  lgbtqRights: {
    category: 'LGBTQ+ Rights',
    items: [
      { id: 'lg-1', name: 'Transgender Identity Certificate / Card (issued under 2019 Act) or Aadhaar Card', required: true },
      { id: 'lg-2', name: 'Residential address proof (rent agreement or self-affidavit if facing eviction)', required: false },
      { id: 'lg-3', name: 'Police complaint copy or diary entry (in case of harassment or extortion)', required: false },
      { id: 'lg-4', name: 'Application copy submitted to District Magistrate for gender recognition (if pending)', required: false },
    ],
  },
  cyberSafety: {
    category: 'Cyber Fraud & Digital Scams',
    items: [
      { id: 'cy-1', name: 'Acknowledgement number / PDF receipt from cybercrime.gov.in (Helpline 1930)', required: true },
      { id: 'cy-2', name: 'Bank account statement showing fraudulent debits with transaction IDs (UTR/RRN)', required: true },
      { id: 'cy-3', name: 'Screenshots of fraudulent chats, WhatsApp profiles, payment requests, or video call logs', required: true },
      { id: 'cy-4', name: 'Fake notices / letters shown by scammers (e.g. fake CBI/ED/Supreme Court seals)', required: false },
      { id: 'cy-5', name: 'Aadhaar Card and contact details of the victim', required: true },
    ],
  },
  consumerRights: {
    category: 'Consumer & Tenant Rights',
    items: [
      { id: 'co-1', name: 'Purchase Invoice / Cash memo / E-commerce order confirmation', required: true },
      { id: 'co-2', name: 'Warranty card, guarantee terms, or service contract', required: false },
      { id: 'co-3', name: 'Photos / videos of the defective product or deficient service evidence', required: true },
      { id: 'co-4', name: 'Written communications: emails, customer care tickets, legal notice sent to seller', required: true },
      { id: 'co-5', name: 'Registered Rent Agreement or rent payment receipts (for tenancy disputes)', required: false },
    ],
  },
  rtiGuide: {
    category: 'Right to Information (RTI)',
    items: [
      { id: 'rt-1', name: 'Draft RTI Application (typed or legibly handwritten in English, Hindi, or official state language)', required: true },
      { id: 'rt-2', name: '₹10 Application Fee proof (Postal Order, Court Fee Stamp, Demand Draft, or online payment receipt)', required: true },
      { id: 'rt-3', name: 'BPL Ration Card / Certificate (if claiming exemption from the ₹10 fee)', required: false },
      { id: 'rt-4', name: 'Applicant contact details: Full Name, Address, and Email/Phone for response delivery', required: true },
      { id: 'rt-5', name: 'Postal Speed Post delivery tracking receipt (for offline applications)', required: false },
    ],
  },
};
