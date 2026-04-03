import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const sections = [
  {
    title: "Regulatory",
    links: [
      { name: "SEBI", desc: "Securities Board of India", url: "https://www.sebi.gov.in" },
      { name: "SEBI SCORES", desc: "Complaint Portal", url: "https://scores.sebi.gov.in" },
      { name: "SMART ODR", desc: "Dispute Resolution", url: "https://smartodr.in" },
      { name: "SEBI Investor Education", desc: "Education portal", url: "https://investor.sebi.gov.in" },
      { name: "SEBI MF Filings (SID/SAI/KIM)", desc: "Scheme documents", url: "https://www.sebi.gov.in/filings/mutual-funds.html" },
    ],
  },
  {
    title: "AMFI",
    links: [
      { name: "AMFI Website", desc: "Official portal", url: "https://www.amfiindia.com" },
      { name: "AMFI NAV", desc: "Daily NAVs", url: "https://www.amfiindia.com/net-asset-value/mutual-fund-scheme" },
      { name: "AMFI Stress Test", desc: "Risk parameters", url: "https://www.amfiindia.com/risk-parameters" },
      { name: "AMFI & AMC IAPs", desc: "Investor awareness programs", url: "https://www.amfiindia.com/investor/awareness-program" },
      { name: "MF Tools & Calculators", desc: "SIP, SWP, STP calculators", url: "https://www.mutualfundssahihai.com/hi/calculators" },
      { name: "MF Sahi Hai", desc: "Investor campaign", url: "https://www.mutualfundssahihai.com" },
    ],
  },
  {
    title: "Exchanges & Depositories",
    links: [
      { name: "NSE", desc: "National Stock Exchange", url: "https://www.nseindia.com" },
      { name: "BSE", desc: "Bombay Stock Exchange", url: "https://www.bseindia.com" },
      { name: "CDSL", desc: "Central Depository", url: "https://www.cdslindia.com" },
      { name: "NSDL", desc: "National Depository", url: "https://nsdl.co.in" },
    ],
  },
  {
    title: "MF Portals",
    links: [
      { name: "MF Central", desc: "Unified MF Portal", url: "https://www.mfcentral.com" },
      { name: "MF Utility (MFU)", desc: "Transaction platform", url: "https://www.mfuindia.com" },
      { name: "myCAMS", desc: "CAMS Investor Portal", url: "https://newmycams.camsonline.com" },
      { name: "KFintech IRIS", desc: "Investor Service", url: "https://mfs.kfintech.com/investor/" },
    ],
  },
  {
    title: "KYC",
    links: [
      { name: "CAMS KRA", desc: "KYC Registration", url: "https://www.camskra.com" },
      { name: "CVL KRA", desc: "CDSL Ventures", url: "https://www.cvlkra.com" },
      { name: "CKYC", desc: "Central KYC", url: "https://www.ckycindia.in" },
      { name: "NDML KRA", desc: "NSDL Database", url: "https://kra.ndml.in" },
    ],
  },
];

const ImportantLinksPage = () => (
  <div>
    <section className="bg-gradient-hero py-16">
      <div className="container text-center">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex bg-gold-500/20 border border-gold-500/40 text-gold-400 font-display font-bold text-[11px] tracking-[0.1em] px-4 py-1.5 rounded-pill mb-4">RESOURCES</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display font-black text-4xl md:text-5xl text-white">Important Links</motion.h1>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container max-w-4xl">
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display font-bold text-xl text-navy-800 mb-4">{section.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {section.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-gold-50 border border-gold-200/50 rounded-lg p-4 hover:border-gold-400 transition-colors group"
                  >
                    <div>
                      <p className="font-display font-bold text-sm text-navy-800">{link.name}</p>
                      <p className="font-sans text-xs text-muted-foreground">{link.desc}</p>
                    </div>
                    <ExternalLink size={16} className="text-gold-500 group-hover:text-gold-600 shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-4 mt-10">
          <p className="text-xs text-muted-foreground">NKS Investment Services Private Limited | AMFI Registered Mutual Fund Distributor (ARN-345665) | CIN: U66190RJ2025PTC106533</p>
        </div>
      </div>
    </section>
  </div>
);

export default ImportantLinksPage;
