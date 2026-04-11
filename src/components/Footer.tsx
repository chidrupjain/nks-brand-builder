import { Link, useNavigate } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
  { label: "Disclaimer", to: "/disclaimer" },
  { label: "Grievance Redressal", to: "/grievance" },
  { label: "Investor Charter", to: "/investor-grievance" },
  { label: "Commission Disclosure", to: "/commission-disclosure" },
  { label: "Important Links", to: "/important-links" },
  { label: "About Us", to: "/about-us" },
  { label: "Fund Selection & Suitability Policy", to: "/fund-selection-policy" },
  { label: "Rights & Obligations", to: "/rights-and-obligations" },
];

const externalLinks = [
  { label: "Complete Your KYC", href: "https://www.camsonline.com/Investors/Service-requests/KYC" },
  { label: "Download Complaint Form", href: "/NKS_Investor_Complaint_Form.pdf" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleLinkClick = (to: string) => {
    navigate(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="text-white" style={{ backgroundColor: "#0B1F4A" }}>
      {/* 3-Column Grid */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Column 1 — About */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-base uppercase tracking-wider text-white">About</h4>
            <p className="text-sm text-white/60 leading-relaxed">
              Welcome to NKS Investment Services Private Limited, where we understand the importance of securing your financial future.
            </p>
            <div>
              <h5 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-3">Contact Info</h5>
              <div className="space-y-2 text-sm text-white/60">
                <p className="flex items-center gap-2">
                  <Phone size={14} style={{ color: "#C8A94E" }} />
                  <a href="tel:+919694067366" className="hover:text-white transition-colors">+91 96940 67366</a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={14} style={{ color: "#C8A94E" }} />
                  <a href="mailto:nksinvestmentservices@gmail.com" className="hover:text-white transition-colors">nksinvestmentservices@gmail.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-display font-bold text-base uppercase tracking-wider text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <button
                    onClick={() => handleLinkClick(link.to)}
                    className="text-sm text-white/60 hover:text-gold-400 hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              {externalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-gold-400 hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Address */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-base uppercase tracking-wider text-white mb-4">Address</h4>
            <p className="flex gap-2 text-sm text-white/60">
              <MapPin size={16} className="shrink-0 mt-0.5" style={{ color: "#C8A94E" }} />
              Plot No.40, Flat No.201, Prem Nagar Vistar, Durgapura, Jaipur - 302018, Rajasthan
            </p>
            <p className="flex gap-2 text-sm text-white/60">
              <Clock size={16} className="shrink-0" style={{ color: "#C8A94E" }} />
              Mon–Fri: 9:30AM–6:30PM | Sat: 10AM–2PM
            </p>
            <div className="pt-3 border-t border-white/10 text-sm text-white/60">
              <p><strong className="text-white/80">Grievance Officer:</strong> Nikhil Shah</p>
              <p><strong className="text-white/80">Email:</strong> nksinvestmentservices@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="container"><div className="border-t border-white/10" /></div>

      {/* Company Registration Details */}
      <div className="container py-6 text-center space-y-1">
        <p className="font-display font-bold text-sm text-white/80">NKS Investment Services Pvt. Ltd.</p>
        <p className="text-xs text-white/60">AMFI Registered Mutual Fund Distributor</p>
        <p className="text-xs text-white/60 font-semibold">CIN: U66190RJ2025PTC106533</p>
        <p className="text-xs text-white/50">
          <strong className="text-white/70">ARN-345665</strong> — Date of Registration: 17-Nov-2025 | Validity: 17-Nov-2025 to 16-Nov-2028
        </p>
      </div>

      {/* Divider */}
      <div className="container"><div className="border-t border-white/10" /></div>

      {/* Merged Disclaimer */}
      <div className="container py-6 space-y-3 text-xs text-white/50 text-center max-w-5xl mx-auto leading-relaxed">
        <p className="font-semibold text-white/60">Disclaimer</p>
        <p>
          Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future results. Investors should consider their specific investment requirements, risk tolerance, and financial goals before making any investment decisions.
        </p>
        <p>
          NKS Investment Services Private Limited is an AMFI Registered Mutual Fund Distributor (ARN-345665). The company acts as a distributor of financial products and does not provide investment advisory services.
        </p>
        <p>
          Investments in market-linked products are subject to risks including market volatility, liquidity risk, and potential loss of capital. Returns are not guaranteed or assured.
        </p>
        <p>
          NKS Investment Services Private Limited is NOT a SEBI Registered Investment Adviser. The information on this website is for general informational purposes and should not be construed as investment advice.
        </p>
        <p>
          For any Grievance, contact: Nikhil Shah (Grievance Officer) | Phone: +91 96940 67366 | Email: nksinvestmentservices@gmail.com | SEBI SCORES: <a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">scores.sebi.gov.in</a> | SMART ODR: <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">smartodr.in</a>
        </p>
        <p className="font-semibold text-white/60">
          NKS Investment Services Private Limited operates in compliance with <strong className="text-white/80">SEBI</strong>, <strong className="text-white/80">AMFI</strong>, and applicable regulations.
        </p>
      </div>

      {/* Regulatory Links */}
      <div className="container pb-4">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
          <a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" style={{ color: "#C8A94E" }}>SEBI SCORES Portal</a>
          <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" style={{ color: "#C8A94E" }}>SMART ODR</a>
          <a href="https://www.amfiindia.com/check-arn" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" style={{ color: "#C8A94E" }}>Verify Our ARN</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container py-4 text-center">
          <p className="text-[11px] font-mono text-white/40">
            &copy; {currentYear} NKS Investment Services Private Limited — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
