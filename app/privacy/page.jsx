"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../../components/shared/Footer";
import VaarsaAtmosphericBackground from "../../components/shared/VaarsaAtmosphericBackground";

export default function PrivacyPolicyPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "overview", label: "01. Definitions", icon: "menu_book" },
    { id: "collection", label: "02. Data Collected", icon: "folder_shared" },
    { id: "cookies", label: "03. Cookies & Tracking", icon: "cookie" },
    { id: "usage", label: "04. Data Usage", icon: "insights" },
    { id: "sms", label: "05. SMS & Messages", icon: "sms" },
    { id: "retention", label: "06. Retention & Rights", icon: "verified_user" },
    { id: "contact", label: "07. Contact Us", icon: "mail" },
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen flex flex-col relative isolate font-sans selection:bg-[#c1121f] selection:text-white">
      <VaarsaAtmosphericBackground fixed={true} />

      {/* Theatrical Ambient Stage Spotlights */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[80vw] h-[400px] bg-gradient-to-b from-[#c1121f]/15 via-[#c1121f]/5 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-[35%] right-[-10%] w-[45vw] h-[45vw] bg-[#c1121f]/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-[20%] left-[-10%] w-[40vw] h-[40vw] bg-[#820a13]/10 blur-[150px] rounded-full" />
      </div>

      <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-32 sm:pt-36 md:pt-44 pb-24">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-white/50 mb-6 uppercase tracking-widest font-mono">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#c1121f]">Privacy Policy</span>
        </nav>

        {/* ── HERO BANNER ── */}
        <div className="relative mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c1121f]/15 border border-[#c1121f]/30 text-[#c1121f] text-xs font-mono uppercase tracking-wider mb-5 shadow-[0_0_20px_rgba(193,18,31,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#c1121f] animate-pulse" />
            Legal &amp; Data Ethics
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 font-serif">
            Privacy Policy
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 font-mono">
            <span>Last updated: <strong className="text-white font-medium">October 10, 2026</strong></span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-white/60">Entity: <strong className="text-white">Myriad Arts</strong></span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-white/60">Jurisdiction: <strong className="text-white">Maharashtra, India</strong></span>
          </div>
        </div>

        {/* ── KEY COMMITMENTS STRIP ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {[
            {
              title: "Zero Data Sale",
              desc: "We never sell, rent, or trade your phone numbers or personal records to any third parties.",
              icon: "verified",
            },
            {
              title: "24-Month Retention",
              desc: "Analytical and support data is capped at 24 months, with routine anonymization schedules.",
              icon: "timer",
            },
            {
              title: "User Rights & Deletion",
              desc: "Request full extraction, update, or complete deletion of your data with a simple email request.",
              icon: "delete_forever",
            },
            {
              title: "Encrypted & Secure",
              desc: "Encrypted communications, SSL/TLS, and secure access controls for all artistic and user assets.",
              icon: "lock",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#c1121f]/40 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <span className="material-symbols-outlined text-[#c1121f] text-2xl mb-3 group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <h3 className="text-white font-bold text-base mb-1.5">{item.title}</h3>
                <p className="text-xs text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── MOBILE JUMP-TO ACCORDION BAR (Clean, No Horizontal Scrollbar) ── */}
        <div className="lg:hidden mb-10">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-full py-3.5 px-5 rounded-2xl bg-[#0a0a0a] border border-white/15 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-white shadow-xl cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-base text-[#c1121f]">list_alt</span>
              <span>Jump to Section</span>
            </div>
            <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${mobileMenuOpen ? "rotate-180" : ""}`}>
              expand_more
            </span>
          </button>

          {mobileMenuOpen && (
            <div className="mt-2 p-3 rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left py-2.5 px-3.5 rounded-xl text-xs font-mono text-white/75 hover:text-white hover:bg-[#c1121f]/10 transition-colors flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-xs text-[#c1121f]">{item.icon}</span>
                    {item.label}
                  </span>
                  <span className="material-symbols-outlined text-xs text-white/40">arrow_forward</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── TWO-COLUMN DESKTOP LAYOUT (Sticky Luxury Sidebar) ── */}
        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12 xl:gap-16 items-start">

          {/* Left Column: Fixed Sticky Table of Contents (Desktop) */}
          <aside className="hidden lg:block sticky top-28 space-y-6">
            <div className="p-6 rounded-3xl bg-[#0a0a0a]/90 border border-white/10 backdrop-blur-2xl shadow-2xl">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c1121f] animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/60">
                  Contents
                </span>
              </div>

              <nav className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left py-2.5 px-3 rounded-xl text-xs font-mono text-white/65 hover:text-white hover:bg-white/[0.04] transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <span className="group-hover:translate-x-1 transition-transform flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-[#c1121f] transition-colors" />
                      {item.label}
                    </span>
                    <span className="material-symbols-outlined text-[13px] text-[#c1121f] opacity-0 group-hover:opacity-100 transition-opacity">
                      arrow_forward
                    </span>
                  </button>
                ))}
              </nav>

              <div className="pt-5 mt-5 border-t border-white/10">
                <Link
                  href="/contact"
                  className="w-full py-2.5 px-3.5 rounded-xl bg-[#c1121f]/10 border border-[#c1121f]/30 hover:bg-[#c1121f]/20 text-[#c1121f] text-xs font-mono flex items-center justify-between transition-colors"
                >
                  <span className="font-medium">Have Questions?</span>
                  <span className="material-symbols-outlined text-sm">support_agent</span>
                </Link>
              </div>
            </div>
          </aside>

          {/* Right Column: Policy Content */}
          <div className="min-w-0 space-y-12">

            {/* INTRO SUMMARY CARD */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.04] via-white/[0.01] to-black border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#c1121f]" />
              <p className="text-base sm:text-lg text-white/95 leading-relaxed mb-4">
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                We use Your Personal Data to provide and improve the Service. We collect, use, and disclose Your information as described in this Privacy Policy and, where required by applicable law, only where We have a valid legal basis to do so, including Your consent (where consent is required). This Privacy Policy has been created with the help of the{" "}
                <a
                  href="https://www.termsfeed.com/privacy-policy-generator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c1121f] underline hover:text-white transition-colors"
                >
                  Privacy Policy Generator
                </a>.
              </p>
            </div>

            {/* ═════════ 01. DEFINITIONS ═════════ */}
            <section id="overview" className="scroll-mt-36 p-6 sm:p-10 rounded-3xl bg-[#0a0a0a]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-[#c1121f] uppercase tracking-widest px-2.5 py-1 rounded bg-[#c1121f]/10 border border-[#c1121f]/30">
                  Section 01
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide font-serif">
                  Interpretation and Definitions
                </h2>
              </div>

              <div className="space-y-6 text-sm text-white/80 leading-relaxed">
                <div>
                  <h3 className="text-white font-semibold text-base mb-2">Interpretation</h3>
                  <p>
                    The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-4">Definitions</h3>
                  <p className="mb-4 text-white/70">For the purposes of this Privacy Policy:</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { term: "Account", desc: "means a unique account created for You to access Our Service or parts of Our Service." },
                      { term: "Affiliate", desc: "means an entity that controls, is controlled by, or is under common control with a party, where \"control\" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority." },
                      { term: "Company", desc: "refers to Myriad Arts, Laxmi Nagar, Balkum Pada, Majiwada, Thane, Maharashtra 400608 (referred to as either \"the Company\", \"We\", \"Us\" or \"Our\" in this Privacy Policy)." },
                      { term: "Cookies", desc: "are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website, among its many uses." },
                      { term: "Country/State", desc: "refers to: Maharashtra, India." },
                      { term: "Device", desc: "means any device that can access the Service, such as a computer, a cell phone or a digital tablet." },
                      { term: "Personal Data", desc: "is any information that relates to an identified or identifiable individual. We use \"Personal Data\" and \"Personal Information\" interchangeably unless a law uses a specific term." },
                      { term: "Service", desc: "refers to the Website." },
                      { term: "Service Provider", desc: "means any natural or legal person who processes the data on behalf of the Company to facilitate, provide, or analyze the Service." },
                      { term: "Usage Data", desc: "refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit)." },
                      { term: "User", desc: "means any individual who accesses or uses the Service." },
                      { 
                        term: "Website", 
                        desc: "refers to Myriad Arts, accessible from https://www.myriadarts.in/",
                        link: "https://www.myriadarts.in/"
                      },
                      { term: "You", desc: "means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable." }
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all">
                        <span className="text-white font-semibold text-sm block mb-1 text-[#c1121f]">
                          {item.term}
                        </span>
                        {item.link ? (
                          <p className="text-xs text-white/70">
                            refers to Myriad Arts, accessible from{" "}
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[#c1121f] underline hover:text-white">
                              {item.link}
                            </a>.
                          </p>
                        ) : (
                          <p className="text-xs text-white/70">{item.desc}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ═════════ 02. DATA COLLECTION ═════════ */}
            <section id="collection" className="scroll-mt-36 p-6 sm:p-10 rounded-3xl bg-[#0a0a0a]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-[#c1121f] uppercase tracking-widest px-2.5 py-1 rounded bg-[#c1121f]/10 border border-[#c1121f]/30">
                  Section 02
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide font-serif">
                  Collecting and Using Your Personal Information
                </h2>
              </div>

              <div className="space-y-8 text-sm text-white/80 leading-relaxed">
                <div>
                  <h3 className="text-white font-semibold text-base mb-2">Personal Data</h3>
                  <p className="mb-3">
                    While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {["Email address", "First name and last name", "Phone number"].map((item, idx) => (
                      <span key={idx} className="px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-white text-xs font-mono">
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-2">Usage Data</h3>
                  <p className="mb-3">Usage Data is collected automatically when using the Service.</p>
                  <p className="mb-3 text-white/70">
                    Usage Data may include information such as Your Device\'s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of Our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                  </p>
                  <p className="text-white/70">
                    When You access the Service by or through a mobile device, We may collect certain information automatically, including the type of mobile device You use, Your mobile device\'s unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                  </p>
                </div>
              </div>
            </section>

            {/* ═════════ 03. COOKIES & TRACKING ═════════ */}
            <section id="cookies" className="scroll-mt-36 p-6 sm:p-10 rounded-3xl bg-[#0a0a0a]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-[#c1121f] uppercase tracking-widest px-2.5 py-1 rounded bg-[#c1121f]/10 border border-[#c1121f]/30">
                  Section 03
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide font-serif">
                  Tracking Technologies and Cookies
                </h2>
              </div>

              <div className="space-y-6 text-sm text-white/80 leading-relaxed">
                <p>
                  We use tracking technologies (such as cookies) to track the activity and to improve Our Service. The technologies We use may include:
                </p>
                
                <ul className="space-y-3">
                  <li className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <strong className="text-white block mb-1">Cookies or Browser Cookies</strong>
                    <span className="text-xs text-white/70">A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of Our Service.</span>
                  </li>
                  <li className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <strong className="text-white block mb-1">Web Beacons</strong>
                    <span className="text-xs text-white/70">Certain sections of Our Service may contain small electronic files known as web beacons (clear gifs, pixel tags) permitting the Company, for example, to count users who have visited those pages and for system integrity.</span>
                  </li>
                </ul>

                <p className="text-xs text-white/70">
                  Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.
                </p>
                <p className="text-xs text-white/70">
                  Where required by law, We use non-essential cookies only with Your consent. You can withdraw or change Your consent at any time using browser/device settings.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  {[
                    {
                      category: "Essential",
                      title: "Necessary / Essential Cookies",
                      meta: "Session Cookies • Administered by: Us",
                      desc: "Essential to provide You with services available through the Website and prevent fraudulent use of user accounts.",
                    },
                    {
                      category: "Consent",
                      title: "Notice Acceptance Cookies",
                      meta: "Persistent Cookies • Administered by: Us",
                      desc: "Identify whether users have accepted cookies and record consent choices so We honor them on future visits.",
                    },
                    {
                      category: "Preferences",
                      title: "Functionality Cookies",
                      meta: "Persistent Cookies • Administered by: Us",
                      desc: "Remember choices You make (e.g. language preferences) to provide You with a personalized experience.",
                    },
                  ].map((cookie, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#c1121f] px-2 py-0.5 rounded bg-[#c1121f]/10 border border-[#c1121f]/30">
                          {cookie.category}
                        </span>
                        <h4 className="font-semibold text-white text-sm mt-3 mb-1">{cookie.title}</h4>
                        <p className="text-[11px] font-mono text-white/50 mb-2">{cookie.meta}</p>
                        <p className="text-xs text-white/70">{cookie.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ═════════ 04. DATA USAGE & SHARING ═════════ */}
            <section id="usage" className="scroll-mt-36 p-6 sm:p-10 rounded-3xl bg-[#0a0a0a]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-[#c1121f] uppercase tracking-widest px-2.5 py-1 rounded bg-[#c1121f]/10 border border-[#c1121f]/30">
                  Section 04
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide font-serif">
                  Use &amp; Sharing of Your Personal Data
                </h2>
              </div>

              <div className="space-y-6 text-sm text-white/80 leading-relaxed">
                <div>
                  <h3 className="text-white font-semibold text-base mb-3">Purposes for Processing</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "To provide and maintain Our Service, including monitoring usage",
                      "To manage Your Account registration and user functionalities",
                      "For the performance of a purchase or service contract with Us",
                      "To contact You via email, phone, SMS, or mobile push notifications",
                      "To provide news, special cultural offers, and similar event updates",
                      "To attend to and manage Your inquiries or requests",
                      "For business evaluations, restructuring, or asset transfers",
                      "For data analysis, usage trends, and promotional campaign efficacy",
                    ].map((purpose, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                        <span className="text-[#c1121f] font-mono text-xs">→</span>
                        <span className="text-xs text-white/80">{purpose}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-3">Sharing Situations</h3>
                  <ul className="space-y-2 text-xs text-white/70">
                    <li><strong className="text-white">With Service Providers:</strong> To monitor and analyze the use of Our Service, and to contact You.</li>
                    <li><strong className="text-white">For Business Transfers:</strong> In connection with negotiations of any merger, sale of Company assets, or acquisition.</li>
                    <li><strong className="text-white">With Affiliates:</strong> Requiring those affiliates to honor this Privacy Policy.</li>
                    <li><strong className="text-white">With Other Users:</strong> When You interact in public areas, data may be viewed by all users and distributed.</li>
                    <li><strong className="text-white">With Your Consent:</strong> We may disclose Your Personal Data for any other purpose with Your explicit consent.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ═════════ 05. TEXT MESSAGES (SMS) NOTICE ═════════ */}
            <section id="sms" className="scroll-mt-36 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#c1121f]/15 via-[#0a0a0a] to-[#050505] border border-[#c1121f]/30 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#c1121f]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-[#c1121f] uppercase tracking-widest px-2.5 py-1 rounded bg-[#c1121f]/20 border border-[#c1121f]/40">
                  Section 05
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide font-serif">
                  Text Messages (SMS) Privacy Notice
                </h2>
              </div>

              <div className="space-y-5 text-sm text-white/80 leading-relaxed">
                <p>
                  You have the option to receive text (SMS) messages from Us. If You opt in to text messages, We will send You updates, notifications, and other communications as described below. When You opt in, We will collect and store the information You provide in connection with text messaging, such as Your phone number, the date and method of Your consent, and message delivery and read information.
                </p>
                
                <div className="p-4 rounded-xl bg-black/50 border border-[#c1121f]/30 text-white font-medium text-xs sm:text-sm">
                  🛡️ <strong>Zero Commercial Sharing:</strong> No mobile information will be shared with or sold to third parties or affiliates for marketing or promotional purposes. The phone numbers and consent records We collect for texting are never shared with anyone for any purpose, except the Service Providers that technically have to handle them to deliver the texts.
                </div>

                <p className="text-xs text-white/70">
                  Consent to receive text messages is not a condition of any purchase or use of Our Service. If You consent to receive SMS from Us, You agree to receive text messages related to:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Customer care and support",
                    "Account notifications (activity, status, renewals)",
                    "Delivery notifications and status updates",
                    "Authentication messages (OTPs, passcodes)",
                    "Security alerts (suspicious logins, account activity)",
                    "Marketing and cultural promotional offers",
                  ].map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-white/85 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c1121f]" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-white/70">
                  Reply <strong className="text-white">STOP</strong> to opt-out. Reply <strong className="text-white">HELP</strong> for support. Message &amp; data rates may apply. Messaging frequency may vary. Carriers are not liable for delayed or undelivered messages.
                </div>
              </div>
            </section>

            {/* ═════════ 06. RETENTION, TRANSFER & RIGHTS ═════════ */}
            <section id="retention" className="scroll-mt-36 p-6 sm:p-10 rounded-3xl bg-[#0a0a0a]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-[#c1121f] uppercase tracking-widest px-2.5 py-1 rounded bg-[#c1121f]/10 border border-[#c1121f]/30">
                  Section 06
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide font-serif">
                  Retention, Transfer &amp; Your Legal Rights
                </h2>
              </div>

              <div className="space-y-6 text-sm text-white/80 leading-relaxed">
                <div>
                  <h3 className="text-white font-semibold text-base mb-2">Retention Schedule</h3>
                  <p className="mb-4 text-xs text-white/70">
                    The Company retains Your Personal Data only as long as necessary. Maximum retention periods (&quot;up to&quot;) apply:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <span className="text-xs font-mono text-[#c1121f]">Account Data</span>
                      <h4 className="text-white font-semibold text-sm mt-1 mb-1">User Accounts</h4>
                      <p className="text-xs text-white/70">Duration of relationship + up to 24 months post-closure.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <span className="text-xs font-mono text-[#c1121f]">Support Data</span>
                      <h4 className="text-white font-semibold text-sm mt-1 mb-1">Tickets &amp; Chats</h4>
                      <p className="text-xs text-white/70">Retained up to 24 months for quality and legal defense.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <span className="text-xs font-mono text-[#c1121f]">Usage Data</span>
                      <h4 className="text-white font-semibold text-sm mt-1 mb-1">Analytics &amp; Logs</h4>
                      <p className="text-xs text-white/70">Retained up to 24 months for trend analysis &amp; security.</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                    <h4 className="text-white font-semibold text-sm mb-2">Transfer of Data</h4>
                    <p className="text-xs text-white/70">
                      Your data is processed at the Company\'s operating offices in India. International transfers are subject to appropriate safeguards to ensure your data is treated securely.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                    <h4 className="text-white font-semibold text-sm mb-2">Right to Delete</h4>
                    <p className="text-xs text-white/70">
                      You have the right to delete or request deletion of Personal Data We hold about You. Contact Us at any time to request data access, correction, or permanent removal.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-2">Children\'s and Minors\' Privacy</h3>
                  <p className="text-xs text-white/70">
                    Our Service is not directed to anyone under the age of 16. If We become aware that We have collected data from anyone under 16 without parental consent, We take prompt steps to delete that information.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-2">Policy Updates</h3>
                  <p className="text-xs text-white/70">
                    We may update Our Privacy Policy from time to time. We notify You of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                  </p>
                </div>
              </div>
            </section>

            {/* ═════════ 07. CONTACT US ═════════ */}
            <section id="contact" className="scroll-mt-36 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.05] via-[#0a0a0a] to-black border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-[#c1121f] uppercase tracking-widest px-2.5 py-1 rounded bg-[#c1121f]/10 border border-[#c1121f]/30">
                  Section 07
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide font-serif">
                  Contact &amp; Governance
                </h2>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <p className="text-sm text-white mb-2">Have questions regarding this Privacy Policy or Your data rights?</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs text-white/80 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-[#c1121f]">Email:</span>
                      <a href="mailto:contactus.myriadarts@gmail.com" className="text-white underline hover:text-[#c1121f] transition-colors">
                        contactus.myriadarts@gmail.com
                      </a>
                    </div>
                    <span className="hidden sm:inline text-white/20">•</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[#c1121f]">Address:</span>
                      <span>Majiwada, Thane, Maharashtra 400608</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="bg-[#c1121f] hover:bg-[#a10e18] text-white px-6 py-3 rounded-xl text-xs uppercase tracking-widest font-mono font-bold transition-all duration-300 shadow-[0_0_25px_rgba(193,18,31,0.35)] flex items-center gap-2 whitespace-nowrap cursor-pointer hover:scale-105"
                >
                  <span>Contact Desk</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
