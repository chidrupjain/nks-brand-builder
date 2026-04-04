import { motion } from "framer-motion";

const TermsOfUsePage = () => (
  <div>
    <section className="bg-gradient-hero py-20">
      <div className="container text-center">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex bg-gold-500/20 border border-gold-500/40 text-gold-400 font-display font-bold text-[11px] tracking-[0.1em] px-4 py-1.5 rounded-pill mb-4">
          LEGAL
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display font-black text-4xl md:text-5xl text-white mb-3">
          Terms of Use
        </motion.h1>
        <p className="font-sans text-white/70">NKS Investment Services Private Limited (ARN-345665) | Last Updated: April 2026</p>
      </div>
    </section>

    <section className="py-16">
      <div className="container max-w-4xl prose prose-lg max-w-none font-sans text-navy-700 space-y-8">

        <div>
          <h2 className="font-display font-bold text-xl text-navy-800">1. Acceptance of These Terms</h2>
          <p>By accessing or using this website, you agree to these Terms of Use. If you do not agree, please stop using this website immediately.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl text-navy-800">2. What We Are and What We Are Not</h2>
          <p>NKS Investment Services Private Limited (ARN-345665) is an AMFI Registered Mutual Fund Distributor. We facilitate distribution of mutual fund products on behalf of Asset Management Companies.</p>
          <p className="font-semibold">We are NOT a SEBI-Registered Investment Adviser under the SEBI (Investment Advisers) Regulations, 2013. We do not provide personalised investment advice.</p>
          <p>All information on this website is for general educational and awareness purposes only. It does not constitute investment advice. Before investing, please assess your own situation or consult a SEBI-registered Investment Adviser.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl text-navy-800">3. No Guaranteed or Assured Returns</h2>
          <p>Nothing on this website is a promise, guarantee, or assurance of returns. Mutual fund investments are subject to market risks. Past performance is not indicative of future returns. All return figures shown are assumed rates for illustration only.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl text-navy-800">4. Prohibited Designations</h2>
          <p>NKS Investment Services Private Limited is a Mutual Fund Distributor only. We do not claim to be: Financial Adviser, Investment Adviser, Wealth Manager, Financial Planner, Portfolio Manager, Asset Manager, or Financial Consultant.</p>
          <p>These are restricted under SEBI (IA) Regulations 2013, Regulation 3(3). If you see any such term on this website, report it immediately to: <a href="mailto:nksinvestmentservices@gmail.com" className="text-gold-600 hover:underline">nksinvestmentservices@gmail.com</a></p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl text-navy-800">5. Commission Disclosure</h2>
          <p>NKS Investment Services Private Limited receives distribution commission from AMCs for Regular Plan mutual fund products. This is permitted under SEBI and AMFI regulations and is paid by the AMC. No commission is charged directly to investors. Regular Plans have higher expense ratios than Direct Plans due to distributor commission.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl text-navy-800">6. Website Content</h2>
          <p>All content is owned by NKS Investment Services Private Limited. Do not reproduce or use our content commercially without written permission. We try to keep information accurate but do not guarantee completeness. Regulatory requirements change — always verify with SEBI/AMFI.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl text-navy-800">7. Limitation of Liability</h2>
          <p>NKS Investment Services Private Limited is not liable for:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Investment losses or market risks from mutual fund investments.</li>
            <li>Decisions made based on information on this website.</li>
            <li>Third-party websites linked from this website.</li>
          </ul>
          <p>Please read all Scheme Information Documents carefully before investing.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl text-navy-800">8. Governing Law</h2>
          <p>These Terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of courts in Jaipur, Rajasthan. These Terms were last updated in April 2026.</p>
        </div>

      </div>
    </section>
  </div>
);

export default TermsOfUsePage;
