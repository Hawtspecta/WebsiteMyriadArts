"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../../components/shared/Footer";
import VaarsaAtmosphericBackground from "../../components/shared/VaarsaAtmosphericBackground";

export default function TermsOfUsePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "acceptance", label: "01. Acceptance", icon: "check_circle" },
    { id: "ip", label: "02. Intellectual Property", icon: "copyright" },
    { id: "conduct", label: "03. Code of Conduct", icon: "gavel" },
    { id: "events", label: "04. Events & Workshops", icon: "theater_comedy" },
    { id: "media", label: "05. Digital Media", icon: "smart_display" },
    { id: "liability", label: "06. Liability & Law", icon: "balance" },
    { id: "contact", label: "07. Contact", icon: "mail" },
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen flex flex-col relative isolate font-sans selection:bg-[#c1121f] selection:text-white">
      <VaarsaAtmosphericBackground fixed={true} />

      {/* Theatrical Ambient Stage Spotlights */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[80vw] h-[400px] bg-gradient-to-b from-[#c1121f]/15 via-[#c1121f]/5 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-[35%] left-[-10%] w-[45vw] h-[45vw] bg-[#c1121f]/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40vw] h-[40vw] bg-[#820a13]/10 blur-[150px] rounded-full" />
      </div>

      <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-32 sm:pt-36 md:pt-44 pb-24">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-white/50 mb-6 uppercase tracking-widest font-mono">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#c1121f]">Terms of Use</span>
        </nav>

        {/* ── HERO BANNER ── */}
        <div className="relative mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c1121f]/15 border border-[#c1121f]/30 text-[#c1121f] text-xs font-mono uppercase tracking-wider mb-5 shadow-[0_0_20px_rgba(193,18,31,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#c1121f] animate-pulse" />
            Terms of Service
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 font-serif">
            Terms of Use
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 font-mono">
            <span>Last revised: <strong className="text-white font-medium">October 10, 2026</strong></span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-white/60">Entity: <strong className="text-white">Myriad Arts</strong></span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-white/60">Governing Law: <strong className="text-white">Maharashtra, India</strong></span>
          </div>
        </div>

        {/* ── KEY PRINCIPLES STRIP ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {[
            {
              title: "Creative Integrity",
              desc: "All theatrical choreographies, scripts, musical compositions, and media are copyrighted by Myriad Arts.",
              icon: "palette",
            },
            {
              title: "Fair Cultural Access",
              desc: "Streaming and viewing access is granted for personal, non-commercial cultural appreciation.",
              icon: "verified",
            },
            {
              title: "Community Respect",
              desc: "Strict zero-tolerance policy against disruptive behavior, hate speech, or event disturbance.",
              icon: "group",
            },
            {
              title: "Indian Jurisdiction",
              desc: "Governed in accordance with the laws of India, under the exclusive courts of Thane / Mumbai.",
              icon: "balance",
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

          {/* Right Column: Terms Content */}
          <div className="min-w-0 space-y-12">

            {/* INTRO SUMMARY CARD */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.04] via-white/[0.01] to-black border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#c1121f]" />
              <p className="text-base sm:text-lg text-white/95 leading-relaxed mb-4">
                Welcome to Myriad Arts. These Terms of Use constitute a legally binding agreement made between you and Myriad Arts (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), concerning your access to and use of the{" "}
                <a href="https://www.myriadarts.in/" className="text-[#c1121f] underline">https://www.myriadarts.in/</a> website and related cultural services, performances, workshops, and media streams.
              </p>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                By accessing or using our Service, you agree that you have read, understood, and agreed to be bound by all of these Terms of Use. If you do not agree with all of these terms, you are expressly prohibited from using the Service and you must discontinue use immediately.
              </p>
            </div>

            {/* ═════════ 01. ACCEPTANCE & ELIGIBILITY ═════════ */}
            <section id="acceptance" className="scroll-mt-36 p-6 sm:p-10 rounded-3xl bg-[#0a0a0a]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-[#c1121f] uppercase tracking-widest px-2.5 py-1 rounded bg-[#c1121f]/10 border border-[#c1121f]/30">
                  Section 01
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide font-serif">
                  Agreement to Terms &amp; Eligibility
                </h2>
              </div>

              <div className="space-y-4 text-sm text-white/80 leading-relaxed">
                <p>
                  The information provided on the Service is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation.
                </p>
                <p>
                  The Service is intended for users who are at least 18 years old or minors who have obtained permission from a parent or legal guardian. By using our website or booking cultural workshops and performances, you represent and warrant that you possess the legal capacity to enter into these Terms.
                </p>
              </div>
            </section>

            {/* ═════════ 02. INTELLECTUAL PROPERTY ═════════ */}
            <section id="ip" className="scroll-mt-36 p-6 sm:p-10 rounded-3xl bg-[#0a0a0a]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-[#c1121f] uppercase tracking-widest px-2.5 py-1 rounded bg-[#c1121f]/10 border border-[#c1121f]/30">
                  Section 02
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide font-serif">
                  Intellectual Property Rights
                </h2>
              </div>

              <div className="space-y-4 text-sm text-white/80 leading-relaxed">
                <p>
                  Unless otherwise indicated, the Service, including all source code, databases, website designs, audio, video, text, photographs, graphics, theatrical choreographies, scripts, podcasts, and musical compositions (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein (&quot;Marks&quot;), are owned or controlled by us or licensed to us, and are protected by copyright, trademark, and unfair competition laws.
                </p>
                
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-white font-semibold text-sm mb-1 text-[#c1121f]">Limited License</h4>
                  <p className="text-xs text-white/70">
                    Provided that you are eligible to use the Service, you are granted a limited license to access and use the Service and to download or stream a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use.
                  </p>
                </div>

                <p className="text-xs text-white/70">
                  No part of the Service and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                </p>
              </div>
            </section>

            {/* ═════════ 03. CODE OF CONDUCT ═════════ */}
            <section id="conduct" className="scroll-mt-36 p-6 sm:p-10 rounded-3xl bg-[#0a0a0a]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-[#c1121f] uppercase tracking-widest px-2.5 py-1 rounded bg-[#c1121f]/10 border border-[#c1121f]/30">
                  Section 03
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide font-serif">
                  User Representations &amp; Prohibited Activities
                </h2>
              </div>

              <div className="space-y-4 text-sm text-white/80 leading-relaxed">
                <p>As a user of the Service, you agree not to:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  {[
                    "Systematically retrieve data or other content from the Service to create a collection or database without written permission.",
                    "Circumvent, disable, or interfere with security-related features of the Service or media streaming controls.",
                    "Engage in unauthorized framing of or linking to the Service.",
                    "Use the Service to advertise or offer to sell goods and services without authorization.",
                    "Upload or transmit viruses, Trojan horses, or other harmful materials that interfere with server integrity.",
                    "Disparage, tarnish, or otherwise harm, in our opinion, us and/or the artists, performers, and community of Myriad Arts.",
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                      <span className="text-[#c1121f] font-mono text-xs font-bold">✕</span>
                      <span className="text-white/75">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ═════════ 04. EVENTS & WORKSHOPS ═════════ */}
            <section id="events" className="scroll-mt-36 p-6 sm:p-10 rounded-3xl bg-[#0a0a0a]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-[#c1121f] uppercase tracking-widest px-2.5 py-1 rounded bg-[#c1121f]/10 border border-[#c1121f]/30">
                  Section 04
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide font-serif">
                  Cultural Events, Bookings &amp; Workshops
                </h2>
              </div>

              <div className="space-y-4 text-sm text-white/80 leading-relaxed">
                <p>
                  Myriad Arts organizes live theatrical performances, classical concerts, cultural festivals, and artistic workshops. When attending or registering for an event:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-xs text-white/75">
                  <li><strong className="text-white">Event Scheduling:</strong> Dates, timings, venues, and artist lineups are subject to operational conditions. We reserve the right to make necessary adjustments to ensure performance quality and artist safety.</li>
                  <li><strong className="text-white">Audience Decorum:</strong> Attendees are expected to respect fellow patrons, artists, and staff. Disruptive conduct may result in refusal of admission without refund.</li>
                  <li><strong className="text-white">Recording &amp; Photography:</strong> Unauthorized commercial audio/video recording of live stage performances is strictly prohibited unless explicit media credentials are issued.</li>
                </ul>
              </div>
            </section>

            {/* ═════════ 05. DIGITAL MEDIA LIBRARY ═════════ */}
            <section id="media" className="scroll-mt-36 p-6 sm:p-10 rounded-3xl bg-[#0a0a0a]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-[#c1121f] uppercase tracking-widest px-2.5 py-1 rounded bg-[#c1121f]/10 border border-[#c1121f]/30">
                  Section 05
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide font-serif">
                  Digital Media Library &amp; Video Streaming
                </h2>
              </div>

              <div className="space-y-4 text-sm text-white/80 leading-relaxed">
                <p>
                  Our media showcase, video library, and podcast directory are provided for cultural education and entertainment. All rights in the video streams, podcast episodes, and cover art remain with Myriad Arts and the featured artists.
                </p>
                <p className="text-xs text-white/70">
                  You agree not to rip, capture, redistribute, or monetize any video streams or podcast content from our platform.
                </p>
              </div>
            </section>

            {/* ═════════ 06. DISCLAIMERS & GOVERNING LAW ═════════ */}
            <section id="liability" className="scroll-mt-36 p-6 sm:p-10 rounded-3xl bg-[#0a0a0a]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-[#c1121f] uppercase tracking-widest px-2.5 py-1 rounded bg-[#c1121f]/10 border border-[#c1121f]/30">
                  Section 06
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide font-serif">
                  Disclaimers, Liability &amp; Governing Law
                </h2>
              </div>

              <div className="space-y-6 text-sm text-white/80 leading-relaxed">
                <div>
                  <h3 className="text-white font-semibold text-base mb-1">Disclaimer of Warranties</h3>
                  <p className="text-xs text-white/70">
                    The Service is provided on an &quot;AS-IS&quot; and &quot;AS-AVAILABLE&quot; basis. You agree that your use of the website and our services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the Service and your use thereof.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-1">Limitation of Liability</h3>
                  <p className="text-xs text-white/70">
                    In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the Service.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h3 className="text-white font-semibold text-sm mb-1 text-[#c1121f]">Governing Law &amp; Jurisdiction</h3>
                  <p className="text-xs text-white/75">
                    These Terms shall be governed by and defined following the laws of India. Myriad Arts and yourself irrevocably consent that the courts of Thane / Mumbai, Maharashtra, India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                  </p>
                </div>
              </div>
            </section>

            {/* ═════════ 07. CONTACT ═════════ */}
            <section id="contact" className="scroll-mt-36 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.05] via-[#0a0a0a] to-black border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-[#c1121f] uppercase tracking-widest px-2.5 py-1 rounded bg-[#c1121f]/10 border border-[#c1121f]/30">
                  Section 07
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide font-serif">
                  Contact Us
                </h2>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <p className="text-sm text-white mb-2">Have inquiries regarding our Terms of Use or cultural collaborations?</p>
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
