import { motion } from "framer-motion";

const PrivacyPolicyPage = () => (
  <div>
    <section className="bg-gradient-hero py-16">
      <div className="container text-center">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex bg-gold-500/20 border border-gold-500/40 text-gold-400 font-display font-bold text-[11px] tracking-[0.1em] px-4 py-1.5 rounded-pill mb-4">LEGAL</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display font-black text-4xl md:text-5xl text-white">Privacy Policy</motion.h1>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container max-w-4xl prose prose-navy">
        <div className="space-y-8 font-sans text-navy-700 leading-relaxed">
          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">1. Privacy Commitment</h2>
            <p className="text-sm">NKS Investment Services Private Limited (ARN-345665), AMFI Registered Mutual Fund Distributor, is committed to maintaining the privacy, confidentiality, and security of personal information collected from investors, employees, and website visitors. This Privacy Policy explains how we collect, use, store, share, and protect personal data in accordance with the Digital Personal Data Protection Act, 2023 (DPDPA), Information Technology Act 2000, SEBI Master Circulars for Mutual Funds, and AMFI Data Sharing Principles.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">2. Scope & Applicability</h2>
            <p className="text-sm">This policy applies to all individuals interacting with NKS Investment Services Private Limited through our website, during client onboarding, Know Your Customer (KYC) verification, risk profiling, and mutual fund / PMS transaction processing. It extends to all employees, sub-distributors, service providers, and vendors authorized to access or process client information on our behalf. By engaging with NKS Investment Services Private Limited or accessing our website, you consent to the collection and use of your personal information as described in this policy.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">3. Information We Collect</h2>
            <div className="space-y-2 text-sm">
              <p><strong>Personal Details:</strong> Name, address, date of birth, PAN, Aadhaar (for KYC), contact details (mobile number, email ID), bank account information, nomination details, and investment preferences.</p>
              <p><strong>Financial Details:</strong> Annual income range, net worth, existing investments, risk profile assessment responses, investment horizon, goals, and transaction history.</p>
              <p><strong>KYC Documents:</strong> PAN card copy, Aadhaar copy, address proof, photograph, bank statement or cancelled cheque, FATCA/CRS self-declaration, and UBO details (for non-individual investors).</p>
              <p><strong>Technical Data:</strong> IP address, browser type, device information, operating system, and cookies when you visit our website.</p>
              <p>We do NOT collect unnecessary personal data such as religion, caste, political affiliation, or any data not required for mutual fund distribution services and regulatory compliance.</p>
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">4. Purpose of Data Collection</h2>
            <p className="text-sm">Your data is used strictly for: (a) Processing mutual fund and PMS distribution transactions; (b) Completing KYC and meeting SEBI/AMFI/PMLA regulatory obligations; (c) Conducting risk profiling and investment suitability assessment; (d) Sending transaction confirmations, account statements, NAV updates, and service-related communications; (e) Responding to your queries, service requests, and complaints; (f) Meeting regulatory reporting requirements to SEBI, AMFI, and other authorities; (g) Improving our website functionality and user experience. We do NOT use your data for any purpose other than what is stated above.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">5. Data Sharing Rules</h2>
            <p className="text-sm mb-2">We share your data only in these specific situations, and never beyond what is necessary:</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li><strong>With AMCs and RTAs:</strong> For processing your mutual fund transactions. This is a regulatory requirement and covers CAMS, KFintech, and respective Asset Management Companies.</li>
              <li><strong>With SEBI, AMFI:</strong> Upon official request or regulatory order. This is mandatory compliance.</li>
              <li><strong>With AMC/AMFI-appointed auditors:</strong> During due diligence or compliance audits. This is a regulatory obligation.</li>
              <li><strong>With KYC Registration Agencies (KRAs):</strong> CAMS KRA, CVL KRA, NDML KRA, and CKYC for KYC verification purposes.</li>
              <li><strong>With any other third party:</strong> Only with your explicit written consent, obtained before any sharing occurs.</li>
            </ul>
            <p className="text-sm mt-2">We do NOT sell, rent, lease, or share your personal or financial data with any external marketing agency, advertising platform, or unrelated third party under any circumstances.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">6. Data Storage & Security Measures</h2>
            <p className="text-sm">Digital records are stored on encrypted cloud storage with mandatory two-factor authentication (2FA) and role-based access controls. Physical documents (KYC forms, signed applications) are kept in secure locked cabinets at our registered office in Jaipur, Rajasthan, with key access restricted to Directors and authorized administrative staff only. All employees sign a confidentiality undertaking at the time of joining. We implement industry-standard security measures including licensed antivirus software, firewall protection on office networks, strong password policies, and regular security audits.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">7. Data Retention & Disposal</h2>
            <p className="text-sm">Client records are retained for the period prescribed under applicable SEBI (Mutual Funds) Regulations, AMFI guidelines, PMLA Rules, and Income Tax Act. After the mandatory regulatory retention period expires, physical records are securely shredded with a disposal log maintained, and digital records are permanently deleted from all storage locations including backups. Director approval is required before any record disposal.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">8. Your Rights Under DPDPA 2023</h2>
            <p className="text-sm">Under the Digital Personal Data Protection Act, 2023, you have the right to: (a) Access your personal data held by us; (b) Request correction of inaccurate or incomplete data; (c) Request erasure/deletion of your data (subject to regulatory retention requirements); (d) Withdraw your consent for data processing at any time; (e) Lodge a complaint with the Data Protection Board of India if you believe your data rights have been violated. To exercise any of these rights, please write to nksinvestmentservices@gmail.com.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">9. Cookies</h2>
            <p className="text-sm">Our website uses cookies to enhance your browsing experience, remember your preferences, and analyze website traffic. You can control cookie settings through your browser preferences. Disabling cookies may affect certain website functionalities such as calculators and login features.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">10. Third-Party Links</h2>
            <p className="text-sm">Our website contains links to external websites (AMC websites, SEBI, AMFI, SCORES, etc.) provided for your convenience. NKS Investment Services Private Limited does not control, endorse, or assume responsibility for the content, privacy policies, or security practices of these external sites.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">11. Changes to This Policy</h2>
            <p className="text-sm">We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. The latest version will always be available on this page.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">12. Contact for Privacy Concerns</h2>
            <div className="text-sm space-y-1">
              <p>Email: nksinvestmentservices@gmail.com</p>
              <p>Phone: +91 96940 67366</p>
              <p>Office: Plot No.40, Flat No.201, Prem Nagar Vistar, Durgapura, Jaipur-302018, Rajasthan, India</p>
              <p>Business Hours: Monday to Friday, 9:30 AM to 6:30 PM (IST); Saturday 10:00 AM to 2:00 PM IST</p>
            </div>
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

export default PrivacyPolicyPage;
