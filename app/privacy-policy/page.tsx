import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-300 selection:bg-cyan-500/30">
      {/* Subtle ambient gradient background for a clean reading experience */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
      
      <div className="relative z-20">
        <Navbar />

        <div className="mx-auto w-full max-w-[1920px] px-6 py-32 md:px-12 lg:px-24 xl:px-32">
          {/* HEADER */}
          <header className="mb-20 border-b border-white/5 pb-16 text-center lg:text-left">
            <h1 className="brand-font mb-6 text-5xl font-bold uppercase tracking-widest text-white md:text-7xl lg:text-8xl drop-shadow-lg">
              Privacy Policy
            </h1>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400/80 md:text-base font-semibold">
              Last updated: 04/30/2026
            </p>
          </header>

          <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
            
            {/* SIDEBAR NAVIGATION */}
            <aside className="hidden w-1/4 shrink-0 lg:block">
              <div className="sticky top-40 rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl">
                <h3 className="brand-font mb-8 text-xl font-bold uppercase tracking-widest text-white">
                  Contents
                </h3>
                <nav className="flex flex-col gap-5 text-sm uppercase tracking-wider text-slate-400">
                  <a href="#intro" className="transition hover:text-cyan-400">1. Introduction</a>
                  <a href="#collection" className="transition hover:text-cyan-400">2. Information Collection</a>
                  <a href="#usage" className="transition hover:text-cyan-400">3. How We Use Info</a>
                  <a href="#handling" className="transition hover:text-cyan-400">4. Data Handling</a>
                  <a href="#additional" className="transition hover:text-cyan-400">5. Additional Info</a>
                  <a href="#rights" className="transition hover:text-cyan-400">6. Rights & Contact</a>
                </nav>
              </div>
            </aside>

            {/* MAIN CONTENT */}
            <div className="w-full max-w-4xl lg:w-3/4">
              
              {/* INTRO BLOCKS */}
              <div className="mb-20 space-y-8 text-lg font-light leading-relaxed text-slate-300 md:text-xl md:leading-loose">
                <p>
                  We understand that your privacy is important to you and that you care about how your personal data is used and shared. OneLight Interactive (“we”, “us”, “our”) respects and values the privacy of everyone who uses our game <strong className="font-medium text-white">Cleaning Simulator</strong> (the “Game”) and our related website and services.
                </p>
                <p>
                  This Privacy Policy explains how we handle personal data, what information may be collected, how and why it is used, and your rights in relation to that information.
                </p>
                <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 font-medium text-cyan-50">
                  <p>By downloading, accessing, or using the Game or our website, you agree to this Privacy Policy.</p>
                </div>
              </div>

              {/* 1. INTRODUCTION */}
              <section id="intro" className="mb-24 scroll-mt-40">
                <h2 className="brand-font mb-10 border-b border-white/10 pb-6 text-3xl font-bold uppercase tracking-wide text-cyan-400 md:text-5xl">
                  1. Introduction & Company Info
                </h2>
                <div className="space-y-8 text-base font-light leading-relaxed text-slate-300 md:text-lg">
                  <p>
                    For the purposes of applicable data protection legislation, OneLight Interactive acts as the data controller where we determine how and why personal data is processed.
                  </p>
                  <p>
                    When we refer to “personal data”, we mean any information relating to an identifiable individual.
                  </p>
                  
                  <div className="my-10 rounded-2xl bg-white/[0.03] p-8 border border-white/5 md:p-10">
                    <h4 className="mb-6 text-sm font-semibold uppercase tracking-widest text-cyan-500">Company Details</h4>
                    <p className="text-xl font-medium text-white">OneLight Interactive</p>
                    <p className="mt-4 text-slate-400">
                      AP B11 1ER ETAGE IMMEUBLE SALMA AV HABIB BOURGUIBA<br />
                      Cité El Ghazala 1, Raoued, Ariana, 2083<br />
                      Tunis, Tunisia
                    </p>
                    <p className="mt-6">
                      Email: <a href="mailto:admin@onelightinteractive.com" className="text-cyan-400 transition hover:text-cyan-300">admin@onelightinteractive.com</a>
                    </p>
                  </div>
                  
                  <p>
                    This Policy describes what information we collect or receive, how we use it, and your rights in relation to that information.
                  </p>
                </div>
              </section>

              {/* 2. COLLECTION */}
              <section id="collection" className="mb-24 scroll-mt-40">
                <h2 className="brand-font mb-10 border-b border-white/10 pb-6 text-3xl font-bold uppercase tracking-wide text-cyan-400 md:text-5xl">
                  2. Information We Collect or Receive
                </h2>
                
                <div className="mb-16">
                  <h3 className="mb-8 text-2xl font-semibold text-white md:text-3xl">2.1 Game Data (Cleaning Simulator)</h3>
                  <div className="space-y-6 text-base font-light leading-relaxed text-slate-300 md:text-lg">
                    <p>We do not collect or transmit personal data through the Game itself.</p>
                    <p>All gameplay-related data (including progress, preferences, and settings):</p>
                    <ul className="ml-4 space-y-4">
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-cyan-500">is stored locally on your device,</li>
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-cyan-500">is encrypted in a binary format, and</li>
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-cyan-500">is not accessible to us.</li>
                    </ul>
                    <p className="pt-4">We do not directly collect any:</p>
                    <ul className="ml-4 space-y-4">
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-red-500/80">player identifiers,</li>
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-red-500/80">IP addresses,</li>
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-red-500/80">device information,</li>
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-red-500/80">gameplay telemetry, or</li>
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-red-500/80">analytics data through the Game.</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-16">
                  <h3 className="mb-8 text-2xl font-semibold text-white md:text-3xl">2.2 Information You Provide to Us</h3>
                  <div className="space-y-6 text-base font-light leading-relaxed text-slate-300 md:text-lg">
                    <p>We may collect limited personal data when you voluntarily provide it, including:</p>
                    <ul className="ml-4 space-y-4">
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-4 before:rounded-sm before:bg-cyan-500/60">your email address when subscribing to updates or newsletters;</li>
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-4 before:rounded-sm before:bg-cyan-500/60">your name, email address, and message content when contacting us.</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="mb-8 text-2xl font-semibold text-white md:text-3xl">2.3 Information from Third-Party Platforms</h3>
                  <div className="space-y-6 text-base font-light leading-relaxed text-slate-300 md:text-lg">
                    <p>The Game may be distributed through third-party platforms such as Meta Quest, Steam, or other digital storefronts.</p>
                    <p>These platforms may collect and process data about you independently. We may receive limited information from them, such as:</p>
                    <ul className="ml-4 space-y-4">
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rotate-45 before:bg-cyan-400">purchase confirmations or transaction status;</li>
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rotate-45 before:bg-cyan-400">entitlement information (e.g., ownership of the Game);</li>
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rotate-45 before:bg-cyan-400">anonymized or aggregated identifiers;</li>
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rotate-45 before:bg-cyan-400">high-level usage or engagement metrics available through platform dashboards.</li>
                    </ul>
                    <div className="mt-8 rounded-2xl bg-white/[0.02] border border-white/5 p-6 italic text-slate-400">
                      <p>We do not control how these platforms collect or process your data. Their practices are governed by their own privacy policies.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. HOW WE USE INFO */}
              <section id="usage" className="mb-24 scroll-mt-40">
                <h2 className="brand-font mb-10 border-b border-white/10 pb-6 text-3xl font-bold uppercase tracking-wide text-cyan-400 md:text-5xl">
                  3. How We Use Information
                </h2>
                <div className="space-y-16 text-base font-light leading-relaxed text-slate-300 md:text-lg">
                  <p>We use personal data only where necessary and for limited purposes.</p>

                  <div>
                    <h3 className="mb-6 text-2xl font-semibold text-white">3.1 Use of Provided Information</h3>
                    <p className="mb-6">Where you provide personal data directly, we may use it to:</p>
                    <ul className="ml-4 space-y-4">
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-sm before:bg-cyan-500">respond to enquiries or support requests;</li>
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-sm before:bg-cyan-500">communicate with you;</li>
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-sm before:bg-cyan-500">send updates where you have subscribed to receive them.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-6 text-2xl font-semibold text-white">3.2 Platform-Derived Information</h3>
                    <p className="mb-6">Where limited information is received from third-party platforms, it may be used:</p>
                    <ul className="ml-4 space-y-4">
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-sm before:bg-cyan-500">to confirm purchases or access rights;</li>
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-sm before:bg-cyan-500">to understand general engagement trends;</li>
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-sm before:bg-cyan-500">to support the operation and improvement of the Game.</li>
                    </ul>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-6 rounded-2xl border border-cyan-500/20 bg-cyan-950/30 p-8">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="text-xl font-medium text-cyan-50">
                      We do not use personal data for advertising, profiling, or behavioural tracking.
                    </p>
                  </div>
                </div>
              </section>

              {/* 4. HANDLING */}
              <section id="handling" className="mb-24 scroll-mt-40">
                <h2 className="brand-font mb-10 border-b border-white/10 pb-6 text-3xl font-bold uppercase tracking-wide text-cyan-400 md:text-5xl">
                  4. Legal Basis, Sharing & Data Handling
                </h2>

                <div className="grid gap-16 md:grid-cols-2">
                  <div>
                    <h3 className="mb-6 text-2xl font-semibold text-white">4.1 Legal Basis</h3>
                    <p className="mb-6 text-slate-300">We process personal data based on:</p>
                    <ul className="ml-4 space-y-4 text-slate-400">
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-white/30">your consent, where you provide information voluntarily;</li>
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-white/30">our legitimate interests in responding to communications and operating our services;</li>
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-white/30">compliance with legal obligations where applicable.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-6 text-2xl font-semibold text-white">4.2 Data Sharing</h3>
                    <p className="mb-6 font-medium text-cyan-300">We do not sell, rent, or trade personal data.</p>
                    <p className="mb-6 text-slate-300">The limited personal data we may hold may be shared only:</p>
                    <ul className="ml-4 space-y-4 text-slate-400">
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-white/30">with service providers (such as Firebase) for secure storage and processing;</li>
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-white/30">where required by law or legal process;</li>
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-white/30">where necessary to protect our rights or users.</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-16 space-y-16">
                  <div>
                    <h3 className="mb-6 text-2xl font-semibold text-white">4.3 Data Storage and Security</h3>
                    <div className="space-y-4 text-base font-light leading-relaxed text-slate-300 md:text-lg">
                      <p>Personal data is stored using secure third-party infrastructure, including Firebase (Google Cloud).</p>
                      <p>We implement appropriate technical and organisational safeguards to protect personal data against unauthorised access, disclosure, or misuse.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-6 text-2xl font-semibold text-white">4.4 Data Retention</h3>
                    <p className="mb-6 text-base font-light leading-relaxed text-slate-300 md:text-lg">We retain personal data only for as long as necessary:</p>
                    <ul className="ml-4 space-y-4 text-base font-light leading-relaxed text-slate-300 md:text-lg">
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-4 before:rounded-sm before:bg-slate-700"><strong className="text-white font-semibold">email subscription data</strong> is retained until you unsubscribe or request deletion;</li>
                      <li className="relative pl-8 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-4 before:rounded-sm before:bg-slate-700"><strong className="text-white font-semibold">contact form data</strong> is retained only as long as necessary to respond and maintain appropriate records.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-6 text-2xl font-semibold text-white">4.5 International Transfers</h3>
                    <p className="text-base font-light leading-relaxed text-slate-300 md:text-lg">Personal data may be processed in countries outside your own through our service providers. We take reasonable steps to ensure appropriate safeguards are in place.</p>
                  </div>
                </div>
              </section>

              {/* 5. ADDITIONAL */}
              <section id="additional" className="mb-24 scroll-mt-40">
                <h2 className="brand-font mb-10 border-b border-white/10 pb-6 text-3xl font-bold uppercase tracking-wide text-cyan-400 md:text-5xl">
                  5. Additional Information
                </h2>
                
                <div className="space-y-16 text-base font-light leading-relaxed text-slate-300 md:text-lg">
                  <div>
                    <h3 className="mb-6 text-2xl font-semibold text-white">5.1 Third-Party Platforms</h3>
                    <p className="mb-4">Third-party platforms such as Meta Quest or Steam may collect and process personal data independently when you access or purchase the Game.</p>
                    <p className="font-medium text-slate-400">We do not control these platforms and are not responsible for their data practices.</p>
                  </div>

                  <div>
                    <h3 className="mb-6 text-2xl font-semibold text-white">5.2 Cookies and Website Technologies</h3>
                    <p className="mb-4">Our website may use cookies or similar technologies to ensure proper functionality and improve user experience.</p>
                    <p>You can manage or disable cookies through your browser settings.</p>
                  </div>

                  <div>
                    <h3 className="mb-6 text-2xl font-semibold text-white">5.3 Children</h3>
                    <p className="mb-4 font-medium text-white">Cleaning Simulator is suitable for a general audience.</p>
                    <p className="mb-6">Where personal data is collected (such as through email subscriptions or contact forms), children under 13 should only provide such information with the consent of a parent or guardian.</p>
                    <p className="rounded-xl border border-white/5 bg-white/[0.02] p-6 text-sm text-slate-400 md:text-base">If we become aware that personal data has been provided without appropriate consent, we will delete it.</p>
                  </div>
                </div>
              </section>

              {/* 6. RIGHTS & CONTACT */}
              <section id="rights" className="mb-24 scroll-mt-40">
                <h2 className="brand-font mb-10 border-b border-white/10 pb-6 text-3xl font-bold uppercase tracking-wide text-cyan-400 md:text-5xl">
                  6. Your Rights and Contact
                </h2>

                <div className="space-y-16 text-base font-light leading-relaxed text-slate-300 md:text-lg">
                  <div>
                    <h3 className="mb-6 text-2xl font-semibold text-white">6.1 Your Rights</h3>
                    <p className="mb-6">Depending on your jurisdiction, you may have the right to:</p>
                    <div className="flex flex-wrap gap-4">
                      <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2.5 text-sm font-medium text-cyan-100">Access your data</span>
                      <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2.5 text-sm font-medium text-cyan-100">Request correction</span>
                      <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2.5 text-sm font-medium text-cyan-100">Request deletion</span>
                      <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2.5 text-sm font-medium text-cyan-100">Withdraw consent</span>
                      <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2.5 text-sm font-medium text-cyan-100">Restrict processing</span>
                    </div>
                    <p className="mt-8">To exercise these rights, please contact us.</p>
                  </div>

                  <div>
                    <h3 className="mb-6 text-2xl font-semibold text-white">6.2 Changes to this Policy</h3>
                    <p>We may update this Privacy Policy from time to time. Updates will be posted with a revised “Last updated” date.</p>
                  </div>

                  <div className="rounded-[32px] border border-white/10 bg-slate-900/50 p-8 shadow-2xl md:p-14">
                    <h3 className="brand-font mb-6 text-3xl font-bold text-white md:text-4xl">6.3 Contact Us</h3>
                    <p className="mb-8">If you have any questions or requests regarding this Privacy Policy, you can contact us at:</p>
                    <a href="mailto:admin@onelightinteractive.com" className="group flex flex-wrap items-center gap-4 text-xl font-medium text-cyan-400 transition hover:text-cyan-300 md:text-2xl">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 md:h-10 md:w-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      admin@onelightinteractive.com
                    </a>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}