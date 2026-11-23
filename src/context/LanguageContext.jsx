import React, { createContext, useContext, useState, useEffect } from 'react';

const TRANSLATIONS = {
  en: {
    // Nav
    nav_home: 'Home',
    nav_farmers: 'Farmers',
    nav_poor: 'Poor & Marginalized',
    nav_women: 'Women & Children',
    nav_seniors: 'Senior Citizens',
    nav_workers: 'Workers',
    nav_sc_st: 'SC/ST & Tribal',
    nav_disaster: 'Disaster & Victims',
    nav_students: 'Students',
    nav_disability: 'Disability Rights',
    nav_lgbtq: 'LGBTQ+ Rights',
    nav_cyber: 'Cyber Safety',
    nav_consumer: 'Consumer Rights',
    nav_rti: 'RTI Guide',
    nav_find_dlsa: 'Find DLSA',
    nav_how_to_apply: 'How to Apply',
    nav_resources: 'Resources',
    nav_stories: 'Stories',

    // Top strip
    strip_helpline: 'NALSA Legal Aid Helpline:',
    strip_pm_kisan: 'PM-KISAN:',
    strip_cyber: 'Cyber Fraud:',

    // Hero
    hero_badge: 'Your Right Under Article 39A',
    hero_title: 'Know Your Rights.',
    hero_title_highlight: 'Get Free Legal Help.',
    hero_desc:
      'Every Indian has the right to free legal aid under Article 39A of the Constitution and the Legal Services Authorities Act, 1987. This portal helps you understand which government scheme applies to your situation and how to access it — completely free of charge.',
    hero_btn_apply: 'How to Get Legal Aid',
    hero_btn_call: 'Call 15100',
    hero_btn_find_dlsa: 'Find Nearest DLSA',

    // Helpline banner
    banner_title: 'Free Legal Aid — Call Now!',
    banner_nalsa: 'NALSA Helpline:',
    banner_badge: 'Available 24×7 • Toll-Free',

    // Common
    last_verified: 'Last verified:',
    print_checklist: 'Print this checklist',
    download_rights_card: 'Download Rights Card',
    view_official_doc: 'View Official Document',
    how_to_apply_ready: 'Ready to get free legal help?',
    how_to_apply_cta: 'Learn how to apply at your District Legal Services Authority (DLSA) or online via NALSA.',
    hindi_coming_soon: 'English content • Hindi translation coming soon',
    report_issue: 'Report Broken Link / Issue',
    search_placeholder: 'Search schemes, helplines, rights…',
  },

  hi: {
    // Nav
    nav_home: 'मुखपृष्ठ',
    nav_farmers: 'किसान',
    nav_poor: 'गरीब और वंचित वर्ग',
    nav_women: 'महिलाएं और बच्चे',
    nav_seniors: 'वरिष्ठ नागरिक',
    nav_workers: 'श्रमिक और असंगठित क्षेत्र',
    nav_sc_st: 'अनुसूचित जाति/जनजाति',
    nav_disaster: 'आपदा और पीड़ित सहायता',
    nav_students: 'छात्र व शिक्षा अधिकार',
    nav_disability: 'दिव्यांगजन अधिकार',
    nav_lgbtq: 'एलजीबीटीक्यू+ अधिकार',
    nav_cyber: 'साइबर सुरक्षा व डिजिटल अरेस्ट',
    nav_consumer: 'उपभोक्ता व किरायेदार अधिकार',
    nav_rti: 'सूचना का अधिकार (RTI)',
    nav_find_dlsa: 'निकटतम DLSA खोजें',
    nav_how_to_apply: 'कानूनी सहायता कैसे पाएं',
    nav_resources: 'संसाधन व आधिकारिक स्रोत',
    nav_stories: 'प्रेरक उदाहरण',

    // Top strip
    strip_helpline: 'नालसा निःशुल्क कानूनी सहायता हेल्पलाइन:',
    strip_pm_kisan: 'पीएम-किसान:',
    strip_cyber: 'साइबर धोखाधड़ी:',

    // Hero
    hero_badge: 'अनुच्छेद 39A के तहत आपका संवैधानिक अधिकार',
    hero_title: 'अपने अधिकार जानें।',
    hero_title_highlight: 'निःशुल्क कानूनी सहायता पाएं।',
    hero_desc:
      'भारतीय संविधान के अनुच्छेद 39A और विधिक सेवा प्राधिकरण अधिनियम, 1987 के तहत प्रत्येक नागरिक को निःशुल्क कानूनी सहायता पाने का अधिकार है। यह पोर्टल आपको अपनी परिस्थिति के अनुसार सही सरकारी योजना और आधिकारिक माध्यम से जोड़ने में मदद करता है — पूरी तरह निःशुल्क।',
    hero_btn_apply: 'कानूनी सहायता कैसे प्राप्त करें',
    hero_btn_call: '15100 पर कॉल करें',
    hero_btn_find_dlsa: 'निकटतम DLSA खोजें',

    // Helpline banner
    banner_title: 'निःशुल्क कानूनी सहायता — अभी संपर्क करें!',
    banner_nalsa: 'नालसा हेल्पलाइन:',
    banner_badge: '24×7 उपलब्ध • टोल-फ्री',

    // Common
    last_verified: 'अंतिम सत्यापन:',
    print_checklist: 'चेकलिस्ट प्रिंट करें',
    download_rights_card: 'राइट्स कार्ड डाउनलोड करें',
    view_official_doc: 'आधिकारिक दस्तावेज़ देखें',
    how_to_apply_ready: 'निःशुल्क कानूनी मदद पाने के लिए तैयार हैं?',
    how_to_apply_cta: 'अपने जिला विधिक सेवा प्राधिकरण (DLSA) में या नालसा के माध्यम से ऑनलाइन आवेदन करने की विधि जानें।',
    hindi_coming_soon: 'अंग्रेजी सामग्री • हिंदी अनुवाद शीघ्र आ रहा है',
    report_issue: 'गलत जानकारी या टूटे लिंक की रिपोर्ट करें',
    search_placeholder: 'योजनाएं, हेल्पलाइन, अधिकार खोजें…',
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('nyaya_sathi_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('nyaya_sathi_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const t = (key) => {
    return TRANSLATIONS[lang]?.[key] || TRANSLATIONS.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
