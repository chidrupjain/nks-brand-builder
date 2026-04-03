import { motion } from "framer-motion";

const DisclaimerPage = () => (
  <div>
    <section className="bg-gradient-hero py-16">
      <div className="container text-center">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex bg-gold-500/20 border border-gold-500/40 text-gold-400 font-display font-bold text-[11px] tracking-[0.1em] px-4 py-1.5 rounded-pill mb-4">LEGAL</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display font-black text-4xl md:text-5xl text-white">Disclaimer</motion.h1>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container max-w-4xl">
        <div className="space-y-8 font-sans text-navy-700 leading-relaxed">
          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">General Disclaimer</h2>
            <p className="text-sm">The information provided on this website is for general informational purposes only and should not be construed as investment, legal, accounting, or tax advice. NKS Investment Services Private Limited (ARN-345665) is an AMFI Registered Mutual Fund Distributor and is NOT a SEBI-registered Investment Adviser. We do not provide investment advice, portfolio management, or any form of financial planning advice. Investors are advised to consult a SEBI-registered Investment Adviser for personalized recommendations.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Investment Risk Disclaimer</h2>
            <p className="text-sm">Mutual fund investments are subject to market risks. Please read the scheme information and other related documents carefully before investing. Past performance is not indicative of future returns. Please consider your specific investment requirements before choosing a fund, or designing a portfolio that suits your needs. NKS Investment Services Private Limited, its directors, employees, or affiliates do not guarantee or assure any returns on investments made through mutual fund schemes or PMS products. We do not guarantee any specific returns, minimum returns, or capital protection on any investment. The company shall not be responsible for any direct, indirect, incidental, or consequential losses arising from the use of information provided on this website or linked portals.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Commission Disclosure</h2>
            <p className="text-sm">We receive trail commission from AMCs for distributing Regular Plan mutual fund schemes. This commission is included in the scheme's Total Expense Ratio (TER) and does not increase your investment cost. Investors may invest in Direct Plans directly with AMCs without distributor involvement. Direct Plans have lower expense ratios. Detailed commission disclosure is available on our <a href="/commission-disclosure" className="text-gold-600 underline">Commission Disclosure page</a>.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Scheme Documents</h2>
            <p className="text-sm">Investors are requested to read the Scheme Information Document (SID), Statement of Additional Information (SAI), and Key Information Memorandum (KIM) of the respective mutual fund schemes before investing. These documents are available on the respective AMC websites and on the <a href="https://www.sebi.gov.in/filings/mutual-funds.html" target="_blank" rel="noopener noreferrer" className="text-gold-600 underline">SEBI Mutual Fund filings portal</a>.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Data & Privacy</h2>
            <p className="text-sm">We make reasonable efforts to ensure accuracy of information on this website. However, we do not warrant completeness or correctness. NAV data, fund performance, and other market data are sourced from publicly available sources and AMCs, and may be subject to time lags. By using this website, you agree to terms outlined in our <a href="/privacy-policy" className="text-gold-600 underline">Privacy Policy</a>.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Third-Party Links</h2>
            <p className="text-sm">This website may contain links to external websites provided for user convenience. NKS Investment Services Private Limited does not endorse, control, or assume responsibility for the content, privacy policies, or reliability of such external sites. Users access these links at their own discretion and risk.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Jurisdiction</h2>
            <p className="text-sm">NKS Investment Services Private Limited operates in accordance with applicable Indian laws and regulations including SEBI (Mutual Funds) Regulations, AMFI Code of Conduct, and SEBI Master Circulars. All communications and representations are subject to the exclusive jurisdiction of courts located in Jaipur, Rajasthan.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Copyright</h2>
            <p className="text-sm">All content on this website, including text, graphics, logos, and documents, is the intellectual property of NKS Investment Services Private Limited. Reproduction or distribution without prior written consent is strictly prohibited.</p>
          </div>

          <div className="border-t border-border pt-4">
            <p className="text-xs text-muted-foreground">NKS Investment Services Private Limited | AMFI Registered Mutual Fund Distributor (ARN-345665) | CIN: U66190RJ2025PTC106533</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default DisclaimerPage;
