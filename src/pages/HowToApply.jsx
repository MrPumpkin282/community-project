import React from 'react';
import { BookOpen, CheckCircle, ArrowRight, ExternalLink, Phone, MapPin, Scale, UserCheck, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TricolorCardTop } from '../components/TricolorElements';

export default function HowToApply() {
  const { lang } = useLanguage();
  const isHindi = lang === 'hi';

  const STEPS_EN = [
    {
      step: 1,
      title: 'Visit Your Nearest DLSA / TLSA',
      desc: 'Go to the District Legal Services Authority (DLSA) office located inside the district court complex in your district. Every district in India has one. If you are in a taluka/sub-division, look for the Taluk Legal Services Committee (TLSC). No appointment is needed — walk in during court working hours.',
    },
    {
      step: 2,
      title: 'OR Apply Online',
      desc: (
        <>
          You can also apply online through the{' '}
          <a href="https://nalsa.gov.in/home" target="_blank" rel="noopener noreferrer" className="link-external font-semibold">
            NALSA portal
          </a>{' '}
          or your State Legal Services Authority website. Call the toll-free helpline <strong>15100</strong> for guidance on the online process.
        </>
      ),
    },
    {
      step: 3,
      title: 'State Your Eligibility Category',
      desc: 'Tell the DLSA front office which category you fall under: income-based (below state threshold), woman, SC/ST member, person with disability, person in custody (undertrial), industrial workman, disaster victim, trafficking victim, or senior citizen.',
    },
    {
      step: 4,
      title: 'Submit Basic Supporting Documents',
      desc: 'Provide basic identity documents like Aadhaar card, income certificate (if applicable), caste certificate (if applicable), or any document related to your case. If you do not have documents, the DLSA front office will still assist in obtaining them.',
    },
    {
      step: 5,
      title: 'DLSA Verifies Your Eligibility',
      desc: 'The DLSA Secretary verifies your eligibility category. This is usually a quick process. In urgent cases (domestic violence, trafficking, arrest, illegal demolition), legal aid is provided immediately.',
    },
    {
      step: 6,
      title: 'Lawyer Assigned from the Panel',
      desc: 'Once approved, an advocate from the DLSA panel (or Legal Aid Defence Counsel System for criminal matters) is assigned to your case — completely free of charge. The lawyer handles consultations, pleadings, and court hearings.',
    },
    {
      step: 7,
      title: 'Court Fee & Stamp Duty Waiver',
      desc: 'All court fees, process fees, drafting charges, and stamp duties are waived or reimbursed. You will NEVER be asked to pay any money for the legal services provided.',
    },
  ];

  const STEPS_HI = [
    {
      step: 1,
      title: 'अपने निकटतम DLSA / TLSA कार्यालय जाएं',
      desc: 'अपने जिले के जिला न्यायालय (District Court) परिसर में स्थित जिला विधिक सेवा प्राधिकरण (DLSA) कार्यालय में जाएं। भारत के प्रत्येक जिले में यह कार्यालय मौजूद है। यदि आप तहसील स्तर पर हैं, तो तालुक विधिक सेवा समिति (TLSC) में जाएं। किसी पूर्व अपॉइंटमेंट की आवश्यकता नहीं है — कार्यदिवस में सीधे जाएं।',
    },
    {
      step: 2,
      title: 'या नालसा पोर्टल पर ऑनलाइन आवेदन करें',
      desc: (
        <>
          आप{' '}
          <a href="https://nalsa.gov.in/home" target="_blank" rel="noopener noreferrer" className="link-external font-semibold">
            नालसा की आधिकारिक वेबसाइट
          </a>{' '}
          या अपने राज्य विधिक सेवा प्राधिकरण (SLSA) की वेबसाइट पर भी ऑनलाइन आवेदन कर सकते हैं। ऑनलाइन सहायता हेतु टोल-फ्री हेल्पलाइन <strong>15100</strong> पर कॉल करें।
        </>
      ),
    },
    {
      step: 3,
      title: 'अपनी पात्रता श्रेणी बताएं',
      desc: 'DLSA के फ्रंट ऑफिस में बताएं कि आप किस श्रेणी में आते हैं: महिला, बच्चा, अनुसूचित जाति/जनजाति, दिव्यांगजन, वरिष्ठ नागरिक, असंगठित श्रमिक, हिरासत में विचाराधीन कैदी, आपदा/अपराध पीड़ित, या राज्य द्वारा निर्धारित आय सीमा से कम आय वाले नागरिक।',
    },
    {
      step: 4,
      title: 'सामान्य दस्तावेज़ प्रस्तुत करें',
      desc: 'आधार कार्ड, आय प्रमाण पत्र (यदि लागू हो), जाति प्रमाण पत्र (यदि लागू हो), या अपने विवाद से जुड़े कागज़ात प्रस्तुत करें। यदि आपके पास दस्तावेज़ नहीं हैं, तो भी DLSA के पैरा-लीगल वालंटियर उन्हें बनवाने में मदद करेंगे।',
    },
    {
      step: 5,
      title: 'DLSA द्वारा पात्रता सत्यापन',
      desc: 'DLSA के सचिव पात्रता की जांच करते हैं। यह प्रक्रिया अत्यंत त्वरित होती है। घरेलू हिंसा, मानव तस्करी, अनुचित गिरफ्तारी या बेदखली जैसे आपातकालीन मामलों में तत्काल कानूनी सहायता दी जाती है।',
    },
    {
      step: 6,
      title: 'पैनल अधिवक्ता का निःशुल्क आवंटन',
      desc: 'स्वीकृति के बाद, DLSA पैनल से एक अनुभवी अधिवक्ता (या आपराधिक मामलों में लीगल एड डिफेंस काउंसिल - LADCS) आपके केस के लिए नियुक्त किया जाता है — पूर्णतः निःशुल्क। वे आपकी तरफ से अदालत में पैरवी करेंगे।',
    },
    {
      step: 7,
      title: 'कोर्ट फीस व स्टांप शुल्क की पूर्ण छूट',
      desc: 'सभी अदालती शुल्क, प्रक्रिया शुल्क और स्टांप ड्यूटी माफ कर दी जाती है। आपको प्रदान की जाने वाली कानूनी सेवाओं के लिए कभी भी कोई पैसा नहीं देना होगा।',
    },
  ];

  const steps = isHindi ? STEPS_HI : STEPS_EN;

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-navy-700 to-navy-900 text-white">
        <div className="section-container pb-8 sm:pb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-saffron-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold">
              {isHindi ? 'निःशुल्क कानूनी सहायता कैसे प्राप्त करें' : 'How to Get Free Legal Aid'}
            </h1>
          </div>
          <p className="text-lg text-navy-200 max-w-3xl">
            {isHindi
              ? 'जिला विधिक सेवा प्राधिकरण (DLSA), नालसा ऑनलाइन पोर्टल या टेली-लॉ सेवा के माध्यम से निःशुल्क कानूनी वकील और सहायता पाने की चरणबद्ध मार्गदर्शिका।'
              : 'A step-by-step guide to applying for free legal help through the District Legal Services Authority (DLSA), online via NALSA, or through the Tele-Law service.'}
          </p>
        </div>
      </div>

      <div className="section-container">
        {/* Interactive Pathway Tabs */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-navy-800">
                {isHindi ? 'कानूनी सहायता प्राप्ति के 4 प्रमुख मार्ग' : 'Choose Your Legal Aid Pathway'}
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                {isHindi ? 'अपनी आवश्यकता के अनुसार आवेदन प्रक्रिया चुनें' : 'Select the route that best matches your situation'}
              </p>
            </div>
            <Badge variant="outline" className="self-start sm:self-auto bg-navy-50 text-navy-700 border-navy-200">
              Article 39A Protection
            </Badge>
          </div>

          <Tabs defaultValue="dlsa-steps" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto p-1 bg-navy-50 border border-navy-200 rounded-xl mb-8">
              <TabsTrigger value="dlsa-steps" className="text-xs py-2.5 font-semibold data-[state=active]:bg-navy-600 data-[state=active]:text-white">
                {isHindi ? '1. DLSA 7-चरण प्रक्रिया' : '1. Court DLSA Steps'}
              </TabsTrigger>
              <TabsTrigger value="lok-adalat" className="text-xs py-2.5 font-semibold data-[state=active]:bg-navy-600 data-[state=active]:text-white">
                {isHindi ? '2. लोक अदालत' : '2. Lok Adalat'}
              </TabsTrigger>
              <TabsTrigger value="tele-law" className="text-xs py-2.5 font-semibold data-[state=active]:bg-navy-600 data-[state=active]:text-white">
                {isHindi ? '3. टेली-लॉ (Tele-Law)' : '3. Tele-Law (CSCs)'}
              </TabsTrigger>
              <TabsTrigger value="ladcs" className="text-xs py-2.5 font-semibold data-[state=active]:bg-navy-600 data-[state=active]:text-white">
                {isHindi ? '4. आपराधिक बचाव (LADCS)' : '4. Criminal Defence'}
              </TabsTrigger>
            </TabsList>

            {/* TAB 1: 7 STEPS */}
            <TabsContent value="dlsa-steps" className="focus-visible:outline-none">
              <Card className="border-navy-100 p-6 sm:p-8 bg-white shadow-sm relative overflow-hidden">
                <TricolorCardTop height="h-[3px]" />
                <div className="space-y-6">
                  {steps.map(({ step, title, desc }) => (
                    <div key={step} className="flex gap-4 sm:gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-navy-600 text-white font-bold flex items-center justify-center shrink-0 shadow-sm">
                          {step}
                        </div>
                        {step < 7 && <div className="w-0.5 flex-1 bg-navy-200 mt-2" />}
                      </div>
                      <div className="pb-6">
                        <h3 className="font-semibold text-navy-800 text-lg mb-1">{title}</h3>
                        <div className="text-gray-600 text-sm leading-relaxed">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* TAB 2: LOK ADALAT */}
            <TabsContent value="lok-adalat" className="focus-visible:outline-none">
              <Card className="border-navy-100 p-6 sm:p-8 bg-gradient-to-br from-navy-50/50 to-white shadow-sm relative overflow-hidden">
                <TricolorCardTop height="h-[3px]" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-600 text-white flex items-center justify-center">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900">
                      {isHindi ? 'लोक अदालत — तीव्र एवं निःशुल्क विवाद समाधान' : 'Lok Adalat — Fast, Free Dispute Resolution'}
                    </h3>
                    <p className="text-xs text-gray-500">Amicable pre-litigation and pending case settlements</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                  {isHindi ? (
                    <>
                      <a href="https://en.wikipedia.org/wiki/Lok_Adalat" target="_blank" rel="noopener noreferrer" className="link-external font-semibold">
                        लोक अदालतें
                      </a>{' '}
                      (जनता की अदालत) वैकल्पिक विवाद समाधान का सशक्त माध्यम हैं जहां आपसी सहमति से मामले एक ही बैठक में सुलझाए जाते हैं। नालसा द्वारा नियमित रूप से राष्ट्रीय लोक अदालतें आयोजित की जाती हैं।
                    </>
                  ) : (
                    <>
                      <a href="https://en.wikipedia.org/wiki/Lok_Adalat" target="_blank" rel="noopener noreferrer" className="link-external font-semibold">
                        Lok Adalats
                      </a>{' '}
                      (People&apos;s Courts) are an alternative dispute resolution mechanism where cases are settled
                      amicably — often in a single sitting. They are organized by NALSA and the Legal Services Authorities.
                    </>
                  )}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {[
                    isHindi ? 'कोई अदालती शुल्क नहीं; पहले से जमा कोर्ट फीस वापस कर दी जाती है।' : 'No court fees. If pending cases are settled, paid court fees are refunded.',
                    isHindi ? 'फैसला अंतिम और बाध्यकारी होता है — इसके विरुद्ध कोई अपील नहीं होती।' : 'Awards are final, binding, and have the status of a Civil Court decree.',
                    isHindi ? 'मोटर दुर्घटना दावे, बैंक ऋण, वैवाहिक मतभेद, बिजली बिल और चेक बाउंस मामले आसानी से निपटाए जाते हैं।' : 'Covers motor accident claims, labour disputes, utility bills, bank recovery, and cheque bounce cases.',
                    isHindi ? 'राष्ट्रीय, राज्य, जिला और तालुक स्तर पर नियमित रूप से आयोजित।' : 'Available across National, State, District, and Taluk levels.',
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2.5 p-3 rounded-lg bg-white border border-gray-200 text-xs text-gray-700">
                      <CheckCircle className="w-4 h-4 text-forest-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* TAB 3: TELE-LAW */}
            <TabsContent value="tele-law" className="focus-visible:outline-none">
              <Card className="border-navy-100 p-6 sm:p-8 bg-white shadow-sm relative overflow-hidden">
                <TricolorCardTop height="h-[3px]" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-saffron-500 text-white flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900">
                      {isHindi ? 'टेली-लॉ (Tele-Law) सेवा — ग्राम स्तर पर कानूनी सलाह' : 'Tele-Law Service — Rural Legal Consultation'}
                    </h3>
                    <p className="text-xs text-gray-500">Direct video/audio consultations via Common Service Centres</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  {isHindi
                    ? 'टेली-लॉ सेवा ग्रामीण और दूरदराज के नागरिकों को उनके निकटतम कॉमन सर्विस सेंटर (CSC) या ग्राम पंचायत के माध्यम से वीडियो और फोन कॉल द्वारा पैनल अधिवक्ताओं से जोड़ती है।'
                    : 'The Tele-Law Service connects citizens in rural and remote areas with panel lawyers through video or telephone consultation at Common Service Centres (CSCs) and Gram Panchayats.'}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex gap-2.5 p-3 rounded-lg bg-navy-50/60 border border-navy-100 text-xs text-navy-900">
                    <ArrowRight className="w-4 h-4 text-navy-600 shrink-0 mt-0.5" />
                    <span>{isHindi ? 'यदि आप जिला मुख्यालय या अदालत से दूर रहते हैं।' : 'Ideal if you live in a remote village or far from the district court complex.'}</span>
                  </div>
                  <div className="flex gap-2.5 p-3 rounded-lg bg-navy-50/60 border border-navy-100 text-xs text-navy-900">
                    <ArrowRight className="w-4 h-4 text-navy-600 shrink-0 mt-0.5" />
                    <span>{isHindi ? 'DLSA जाने से पहले प्रारंभिक कानूनी राय लेना चाहते हैं।' : 'Provides preliminary legal advice before preparing a physical court filing.'}</span>
                  </div>
                  <div className="flex gap-2.5 p-3 rounded-lg bg-navy-50/60 border border-navy-100 text-xs text-navy-900">
                    <ArrowRight className="w-4 h-4 text-navy-600 shrink-0 mt-0.5" />
                    <span>{isHindi ? 'वरिष्ठ नागरिक या दिव्यांगजन जो लंबी यात्रा करने में असमर्थ हैं।' : 'Highly accessible for senior citizens and persons with disabilities unable to travel.'}</span>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* TAB 4: LADCS */}
            <TabsContent value="ladcs" className="focus-visible:outline-none">
              <Card className="border-navy-100 p-6 sm:p-8 bg-white shadow-sm relative overflow-hidden">
                <TricolorCardTop height="h-[3px]" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-navy-800 text-white flex items-center justify-center">
                    <ShieldAlert className="w-5 h-5 text-saffron-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900">
                      {isHindi ? 'लीगल एड डिफेंस काउंसिल सिस्टम (LADCS)' : 'Legal Aid Defence Counsel System (LADCS)'}
                    </h3>
                    <p className="text-xs text-gray-500">Dedicated public defense counsel for criminal proceedings</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-sm">
                  {isHindi
                    ? 'आपराधिक मामलों में, लीगल एड डिफेंस काउंसिल सिस्टम (LADCS) ऐसे गिरफ्तार व्यक्तियों और आरोपियों को पूर्णकालिक समर्पित बचाव वकील उपलब्ध कराता है जो निजी वकील रखने में असमर्थ हैं। यह एक संवैधानिक अधिकार है — आपराधिक मुकदमे में किसी भी नागरिक को वकील के बिना नहीं रखा जा सकता।'
                    : 'For criminal cases, the Legal Aid Defence Counsel System (LADCS) provides dedicated, full-time defense lawyers to persons accused of crimes who cannot afford legal representation. If you or someone you know is arrested and cannot hire a lawyer, the DLSA will assign a defense counsel from the LADCS panel immediately upon request. This is a constitutional right — no person shall be denied legal representation in a criminal proceeding.'}
                </p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Quick Reference Contacts */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">
            {isHindi ? 'त्वरित संदर्भ व संपर्क' : 'Quick Reference & Contacts'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/find-dlsa" className="card group hover:border-navy-300 relative overflow-hidden">
              <TricolorCardTop height="h-[2.5px]" className="opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-navy-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-navy-800 group-hover:text-navy-600 text-sm">
                    {isHindi ? 'निकटतम DLSA खोजें' : 'Find My Nearest DLSA'}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {isHindi ? 'सभी 28 राज्यों व 8 केंद्र शासित प्रदेशों की सूची' : 'State & UT authority directory'}
                  </p>
                </div>
              </div>
            </Link>

            <a
              href="https://nalsa.gov.in/home"
              target="_blank"
              rel="noopener noreferrer"
              className="card group hover:border-navy-300 relative overflow-hidden"
            >
              <TricolorCardTop height="h-[2.5px]" className="opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-3">
                <ExternalLink className="w-5 h-5 text-navy-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-navy-800 group-hover:text-navy-600 text-sm">
                    {isHindi ? 'नालसा आधिकारिक पोर्टल' : 'NALSA Official Portal'}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {isHindi ? 'ऑनलाइन आवेदन व योजनाएं' : 'Apply online or view schemes'}
                  </p>
                </div>
              </div>
            </a>

            <a
              href="tel:15100"
              className="card group hover:border-saffron-300 bg-saffron-50 border-saffron-200 relative overflow-hidden"
            >
              <TricolorCardTop height="h-[2.5px]" className="opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-saffron-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-navy-800 group-hover:text-saffron-700 text-sm">
                    {isHindi ? 'हेल्पलाइन 15100' : 'Call Helpline 15100'}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {isHindi ? '24×7 टोल-फ्री राष्ट्रीय हेल्पलाइन' : 'NALSA Helpline — Toll-Free, 24×7'}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
