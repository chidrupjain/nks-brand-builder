import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PrivacyPolicyPage = () => (
  <div>
    <section className="bg-gradient-hero py-20">
      <div className="container text-center">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex bg-gold-500/20 border border-gold-500/40 text-gold-400 font-display font-bold text-[11px] tracking-[0.1em] px-4 py-1.5 rounded-pill mb-4">
          LEGAL
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display font-black text-4xl md:text-5xl text-white mb-3">
          Privacy Policy
        </motion.h1>
        <p className="font-sans text-white/70">NKS Investment Services Private Limited (ARN-345665) | Last Updated: April 2026</p>
      </div>
    </section>

    <section className="py-16">
      <div className="container max-w-4xl prose prose-lg max-w-none font-sans text-navy-700 space-y-8">

        <div>
          <h2 className="font-display font-bold text-xl text-navy-800">1. Our Commitment to Your Privacy</h2>
          <p>NKS Investment Services Private Limited (ARN-345665), AMFI Registered Mutual Fund Distributor, is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, store, and protect your data in accordance with the Digital Personal Data Protection Act, 2023 (DPDPA), the Information Technology Act 2000, SEBI Master Circulars for Mutual Funds, and AMFI guidelines under the AMFI Master Circular (Jan 2026).</p>
          <p>By using our website or engaging with our services, you agree to the collection and use of your information as described here.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl text-navy-800">2. What Information We Collect</h2>
          <p><strong>Personal Details:</strong> Name, date of birth, address, PAN number, Aadhaar number, mobile number, email, bank account details, nomination details.</p>
          <p><strong>Financial Details:</strong> Annual income, net worth, existing investments, investment goals, risk profile responses, transaction history.</p>
          <p><strong>KYC Documents:</strong> PAN card, Aadhaar, address proof, photograph, bank statement or cancelled cheque, FATCA/CRS declaration.</p>
          <p><strong>Website Data:</strong> IP address, browser type, device information, and cookies — collected only with your consent via our cookie banner.</p>
          <p>We do NOT collect religion, caste, political views, or any data not needed for mutual fund distribution and regulatory compliance.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl text-navy-800">3. Why We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To complete your KYC and open your investment account.</li>
            <li>To process your mutual fund transactions.</li>
            <li>To assess your risk profile and suggest suitable fund categories.</li>
            <li>To send you account statements and transaction confirmations.</li>
            <li>To respond to your complaints and queries.</li>
            <li>To comply with SEBI, AMFI, Income Tax, and PMLA requirements.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl text-navy-800">4. Who We Share Your Information With</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Asset Management Companies (AMCs)</strong> — for processing your investments.</li>
            <li><strong>Registrar and Transfer Agents (CAMS, KFintech)</strong> — for folio records.</li>
            <li><strong>Transaction Platforms</strong> — BSE STAR MF, NSE MF Invest, MFU.</li>
            <li><strong>KYC Registration Agencies (KRAs)</strong> — for KYC compliance.</li>
            <li><strong>Regulatory authorities (SEBI, AMFI, Income Tax)</strong> — only when legally required.</li>
          </ul>
          <p className="mt-2">We do NOT sell your data to any third party.</p>
          <p>We do NOT share your data for marketing without your explicit consent.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl text-navy-800">5. How Long We Keep Your Data</h2>
          <p>KYC and transaction records are kept for minimum 5 years as required by SEBI regulations and PMLA 2002.</p>
          <p>Website cookies are kept per your browser settings or until you withdraw consent.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl text-navy-800">6. Your Rights Under DPDPA 2023</h2>
          <p><strong>Right to Access:</strong> Request a copy of your personal data we hold.</p>
          <p><strong>Right to Correction:</strong> Request correction of inaccurate information.</p>
          <p><strong>Right to Erasure:</strong> Request deletion of data, subject to regulatory retention obligations.</p>
          <p><strong>Right to Withdraw Consent:</strong> Withdraw cookie consent anytime by clicking Reject on our cookie banner.</p>
          <p className="mt-2">To exercise any right, contact: <a href="mailto:nksinvestmentservices@gmail.com" className="text-gold-600 hover:underline">nksinvestmentservices@gmail.com</a> or call <a href="tel:+919694067366" className="text-gold-600 hover:underline">+91 96940 67366</a></p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl text-navy-800">7. Cookies</h2>
          <p>Our website uses cookies to analyse visitor traffic and improve user experience. We ask for your consent via our cookie banner. Click Accept to allow cookies. Click Reject to decline. You can change your preference anytime by clearing browser cookies.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl text-navy-800">8. Contact for Privacy Questions</h2>
          <p><strong>Name:</strong> Nikhil Shah</p>
          <p><strong>Role:</strong> Grievance Redressal Officer</p>
          <p><strong>Email:</strong> <a href="mailto:nksinvestmentservices@gmail.com" className="text-gold-600 hover:underline">nksinvestmentservices@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+919694067366" className="text-gold-600 hover:underline">+91 96940 67366</a></p>
          <p><strong>Address:</strong> Plot No.40, Flat No.201, Prem Nagar Vistar, Durgapura, Jaipur - 302018, Rajasthan</p>
        </div>

      </div>
    </section>
  </div>
);

export default PrivacyPolicyPage;
