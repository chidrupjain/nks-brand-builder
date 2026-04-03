import { motion } from "framer-motion";

const RightsObligationsPage = () => (
  <div>
    <section className="bg-gradient-hero py-16">
      <div className="container text-center">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex bg-gold-500/20 border border-gold-500/40 text-gold-400 font-display font-bold text-[11px] tracking-[0.1em] px-4 py-1.5 rounded-pill mb-4">LEGAL</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display font-black text-4xl md:text-5xl text-white">Rights & Obligations of Investors</motion.h1>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container max-w-4xl">
        <div className="space-y-8 font-sans text-navy-700 leading-relaxed">
          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Your Rights as an Investor</h2>
            <ol className="list-decimal list-inside text-sm space-y-2">
              <li>Receive complete, accurate, and updated information about mutual fund schemes including SID, SAI, KIM, factsheets, and performance reports.</li>
              <li>Know all commissions (trail or any other form) received by us for schemes recommended to you. This disclosure is available on our Commission Disclosure page and at the point of sale.</li>
              <li>Receive a proper risk assessment and suitability check before any scheme recommendation.</li>
              <li>Receive a written unsuitability communication if you choose to invest in a scheme that does not match your risk profile.</li>
              <li>Have your complaints acknowledged within 2 working days and resolved within 7 working days.</li>
              <li>Escalate unresolved complaints to AMC, <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-gold-600 underline">SEBI SCORES</a>, or <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-gold-600 underline">SMART ODR</a>.</li>
              <li>Choose Direct Plans through AMC websites without distributor involvement. Direct Plans have lower expense ratios.</li>
              <li>Have your personal and financial data treated with confidentiality as per our Privacy Policy and the DPDPA 2023.</li>
              <li>Receive periodic portfolio review communications and account statements.</li>
              <li>Switch distributors or go direct at any time without any penalty or restriction from our side.</li>
            </ol>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Your Obligations as an Investor</h2>
            <ol className="list-decimal list-inside text-sm space-y-2">
              <li>Provide accurate and complete information for KYC, risk profiling, and transaction processing.</li>
              <li>Read all scheme-related documents (SID, SAI, KIM) carefully before investing.</li>
              <li>Inform us promptly about any change in personal details, financial situation, or investment objectives.</li>
              <li>Review your Consolidated Account Statement (CAS) regularly and report discrepancies immediately.</li>
              <li>Understand and acknowledge that mutual fund investments are subject to market risks and past performance is not indicative of future returns.</li>
              <li>Not hold NKS Investment Services Private Limited responsible for investment losses arising from market movements.</li>
            </ol>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Do's for Investors</h2>
            <ul className="text-sm space-y-1">
              {[
                "Read the SID, SAI, and KIM of any scheme before investing.",
                "Complete your KYC and risk profiling before making your first investment.",
                "Invest based on your financial goals, risk appetite, and time horizon.",
                "Review your portfolio at least once a year with your distributor.",
                "Check your Consolidated Account Statement (CAS) regularly for accuracy.",
                "Inform us immediately if your contact details, bank account, or nominee details change.",
                "Keep your login credentials for MFU, AMC portals, and mobile app secure and confidential.",
                "Ask questions if you do not understand any product feature, risk, or fee structure.",
                "Report any suspicious communication claiming to be from NKS Investment Services Private Limited to us immediately.",
                "Use the SEBI SCORES portal if you are not satisfied with our complaint resolution.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2"><span className="text-green-600 font-bold">✔</span> {item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Don'ts for Investors</h2>
            <ul className="text-sm space-y-1">
              {[
                "Do NOT invest based on someone else's recommendation without understanding your own risk profile.",
                "Do NOT share your OTP, password, or login credentials with anyone including our staff.",
                "Do NOT expect guaranteed or assured returns from mutual fund investments.",
                "Do NOT invest in schemes that do not match your assessed risk profile without understanding the risks.",
                "Do NOT ignore unsuitability communications — they are issued for your protection.",
                "Do NOT make investment decisions based on past returns alone.",
                "Do NOT delay reporting discrepancies in your account statement or transaction confirmations.",
                "Do NOT share your personal financial data on unofficial WhatsApp groups, Telegram channels, or social media.",
                "Do NOT fall for fraudulent schemes promising unrealistic returns. Report such schemes to SEBI.",
                "Do NOT hesitate to escalate complaints if not resolved within the promised timelines.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2"><span className="text-red-600 font-bold">✘</span> {item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Our Obligations to You</h2>
            <p className="text-sm mb-2">NKS Investment Services Private Limited is committed to:</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Acting in your best interest at all times</li>
              <li>Not indulging in mis-selling, churning, or pushing products for commission</li>
              <li>Providing transparent commission disclosures on our website and at the point of sale</li>
              <li>Maintaining strict confidentiality of your personal and financial data</li>
              <li>Ensuring all our staff hold valid NISM certifications and active EUIN</li>
              <li>Following the AMFI Code of Conduct in letter and spirit</li>
              <li>Cooperating fully with any regulatory inquiry by SEBI, AMFI, or AMCs</li>
              <li>Resolving your complaints within promised timelines</li>
              <li>Providing you with accurate and updated scheme information</li>
              <li>Never making false promises about returns or guaranteeing any investment outcome</li>
            </ul>
          </div>

          <div className="border-t border-border pt-4">
            <p className="text-xs text-muted-foreground">NKS Investment Services Private Limited | AMFI Registered Mutual Fund Distributor (ARN-345665) | CIN: U66190RJ2025PTC106533</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default RightsObligationsPage;
