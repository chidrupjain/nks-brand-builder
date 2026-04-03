import { motion } from "framer-motion";

const TermsConditionsPage = () => (
  <div>
    <section className="bg-gradient-hero py-16">
      <div className="container text-center">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex bg-gold-500/20 border border-gold-500/40 text-gold-400 font-display font-bold text-[11px] tracking-[0.1em] px-4 py-1.5 rounded-pill mb-4">LEGAL</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display font-black text-4xl md:text-5xl text-white">Terms & Conditions</motion.h1>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container max-w-4xl">
        <div className="space-y-8 font-sans text-navy-700 leading-relaxed">
          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">1. Acceptance of Terms</h2>
            <p className="text-sm">By accessing and using this website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use this website. NKS Investment Services Private Limited (ARN-345665), AMFI Registered Mutual Fund Distributor, reserves the right to modify these terms at any time without prior notice.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">2. Nature of Services</h2>
            <p className="text-sm">NKS Investment Services Private Limited is an AMFI Registered Mutual Fund Distributor (ARN-345665). We facilitate mutual fund distribution services. We are NOT a SEBI-registered Investment Adviser. We do not provide investment advice. We provide incidental advisory services only as permitted for mutual fund distributors under SEBI regulations.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">3. Your Responsibilities</h2>
            <p className="text-sm mb-2">You are responsible for:</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Providing accurate and complete information for KYC and transactions</li>
              <li>Reading all scheme-related documents (SID, SAI, KIM) before investing</li>
              <li>Understanding that all investments are subject to market risks</li>
              <li>Making your own informed investment decisions</li>
              <li>Keeping your account credentials and OTPs confidential</li>
              <li>Updating us about any changes in your personal or financial information</li>
              <li>Reviewing your CAS and transaction confirmations regularly</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">4. No Guaranteed Returns</h2>
            <p className="text-sm">NKS Investment Services Private Limited does not guarantee any specific returns, minimum returns, or capital protection on mutual fund or PMS investments. Past performance of any scheme or product is not indicative of future results. All investments are subject to market risks including the possible loss of principal.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">5. Commission & Fees</h2>
            <p className="text-sm">We receive trail commission from AMCs for distributing Regular Plan mutual fund schemes. This commission is part of the scheme's Total Expense Ratio (TER) and does not increase your investment cost. Detailed commission disclosure is available on our <a href="/commission-disclosure" className="text-gold-600 underline">Commission Disclosure page</a>. You may choose to invest in Direct Plans directly with AMCs without distributor involvement.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">6. Privacy & Data Protection</h2>
            <p className="text-sm">Your personal information is handled as per our <a href="/privacy-policy" className="text-gold-600 underline">Privacy Policy</a>, which is aligned with the Digital Personal Data Protection Act, 2023 (DPDPA) and applicable SEBI/AMFI data handling guidelines.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">7. Intellectual Property</h2>
            <p className="text-sm">All content, logos, graphics, text, and materials on this website are the property of NKS Investment Services Private Limited. Unauthorized reproduction, distribution, modification, or use of any content is strictly prohibited without prior written consent.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">8. Third-Party Links</h2>
            <p className="text-sm">This website may contain links to third-party websites (AMC portals, SEBI, AMFI, etc.) provided for your convenience. We do not control or endorse these sites and are not responsible for their content, accuracy, or privacy practices.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">9. Limitation of Liability</h2>
            <p className="text-sm mb-2">NKS Investment Services Private Limited shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from:</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Use of or inability to use this website</li>
              <li>Reliance on information provided on this website</li>
              <li>Investment decisions made based on information obtained through this website</li>
              <li>Technical failures, server errors, interruptions, or data transmission errors</li>
              <li>Unauthorized access to your account or personal information</li>
              <li>Any action or inaction of AMCs, RTAs, or third-party service providers</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">10. Grievance Redressal</h2>
            <p className="text-sm">If you have any grievance regarding these terms or our services, please contact us at nksinvestmentservices@gmail.com or visit our <a href="/investor-grievance" className="text-gold-600 underline">Investor Grievance Redressal page</a>. You may also lodge a complaint on <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-gold-600 underline">SEBI SCORES</a> or <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-gold-600 underline">SMART ODR</a>.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">11. Governing Law & Jurisdiction</h2>
            <p className="text-sm">These Terms & Conditions are governed by the laws of India. Any disputes arising from the use of this website or our services shall be subject to the exclusive jurisdiction of courts located in Jaipur, Rajasthan.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">12. Amendments</h2>
            <p className="text-sm">We reserve the right to update, modify, or replace these Terms & Conditions at any time without prior notice. The latest version will always be available on this page. Continued use of the website after changes are posted constitutes your acceptance of the updated terms.</p>
          </div>

          <div className="border-t border-border pt-4">
            <p className="text-xs text-muted-foreground">Last Updated: March 2026</p>
            <p className="text-xs text-muted-foreground mt-1">NKS Investment Services Private Limited | AMFI Registered Mutual Fund Distributor (ARN-345665) | CIN: U66190RJ2025PTC106533</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default TermsConditionsPage;
