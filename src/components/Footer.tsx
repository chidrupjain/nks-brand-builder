import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white" style={{ backgroundColor: "#0B1F4A" }}>
      {/* Gold wave */}
      <div className="w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 60" className="w-full h-[60px]" preserveAspectRatio="none">
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,30 1440,30 L1440,60 L0,60Z" fill="#0B1F4A" />
          <path d="M0,35 C360,60 720,5 1080,35 C1260,48 1380,35 1440,35" fill="none" stroke="#C8A94E" strokeWidth="1.5" strokeOpacity="0.4" />
        </svg>
      </div>

      {/* BLOCK 1: Company Registration Details */}
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-3">
            <img src="/assets/nks-logo.png" alt="NKS Investment Services" className="h-14 w-auto brightness-0 invert" />
            <p className="font-serif italic text-lg" style={{ color: "#C8A94E" }}>"Growing Wealth. Securing Futures."</p>
            <p className="font-display font-bold text-sm text-white/80">AMFI Registered Mutual Fund Distributor (ARN-345665)</p>
          </div>
          <div className="space-y-2 text-sm text-white/70">
            <p><strong className="text-white">Company:</strong> NKS Investment Services Private Limited</p>
            <p><strong className="text-white">CIN:</strong> U66190RJ2025PTC106533</p>
            <p><strong className="text-white">ARN:</strong> 345665 (Valid: 17-Nov-2025 to 16-Nov-2028)</p>
            <p><strong className="text-white">EUIN:</strong> E658208 (Valid: 17-Nov-2025 to 06-Jun-2028)</p>
            <p><strong className="text-white">PAN:</strong> AAKCN8571C | <strong className="text-white">TAN:</strong> JPRN10231E</p>
          </div>
          <div className="space-y-2 text-sm text-white/70">
            <p className="flex gap-2"><MapPin size={16} className="shrink-0 mt-0.5" style={{ color: "#C8A94E" }} /> Plot No.40, Flat No.201, Prem Nagar Vistar, Durgapura, Jaipur - 302018, Rajasthan</p>
            <p className="flex gap-2"><Mail size={16} className="shrink-0" style={{ color: "#C8A94E" }} /> <a href="mailto:nksinvestmentservices@gmail.com" className="hover:text-white">nksinvestmentservices@gmail.com</a></p>
            <p className="flex gap-2"><Phone size={16} className="shrink-0" style={{ color: "#C8A94E" }} /> <a href="tel:+919694067366" className="hover:text-white">+91 96940 67366</a></p>
            <p className="flex gap-2"><Clock size={16} className="shrink-0" style={{ color: "#C8A94E" }} /> Mon-Fri 9:30AM-6:30PM | Sat 10AM-2PM IST</p>
            <p><strong className="text-white">Grievance Redressal Officer:</strong> Nikhil Shah</p>
            <p><strong className="text-white">GRO Email:</strong> nksinvestmentservices@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="container"><div className="border-t border-white/10" /></div>

      {/* BLOCK 2: Mutual Fund Disclaimer */}
      <div className="container py-6">
        <p className="text-xs text-white/50 text-center max-w-4xl mx-auto leading-relaxed">
          Mutual fund investments are subject to market risks. Please read all scheme related documents carefully before investing. Past performance is not indicative of future returns.
        </p>
      </div>

      {/* Divider */}
      <div className="container"><div className="border-t border-white/10" /></div>

      {/* BLOCK 3: Commission Disclosure */}
      <div className="container py-6">
        <p className="text-xs text-white/50 text-center max-w-4xl mx-auto leading-relaxed">
          NKS Investment Services Private Limited receives commission from Asset Management Companies for distribution of Mutual Fund products in Regular Plans, as permitted under SEBI and AMFI regulations. No commission is charged directly to investors.
        </p>
      </div>

      {/* Divider */}
      <div className="container"><div className="border-t border-white/10" /></div>

      {/* BLOCK 4: Regulatory Identity Statement */}
      <div className="container py-6">
        <p className="text-xs text-white/60 text-center max-w-4xl mx-auto leading-relaxed font-semibold">
          We are NOT a SEBI-Registered Investment Adviser. For investment advice, please consult a SEBI-registered Investment Adviser. NKS Investment Services Private Limited is a Mutual Fund Distributor only.
        </p>
      </div>

      {/* Divider */}
      <div className="container"><div className="border-t border-white/10" /></div>

      {/* BLOCK 5: Regulatory Links */}
      <div className="container py-6">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
          <a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" style={{ color: "#C8A94E" }}>SEBI SCORES Portal</a>
          <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" style={{ color: "#C8A94E" }}>SMART ODR</a>
          <a href="https://www.amfiindia.com/check-arn" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" style={{ color: "#C8A94E" }}>Verify Our ARN</a>
          <Link to="/privacy-policy" className="hover:text-white transition-colors" style={{ color: "#C8A94E" }}>Privacy Policy</Link>
          <Link to="/terms-of-use" className="hover:text-white transition-colors" style={{ color: "#C8A94E" }}>Terms of Use</Link>
          <Link to="/grievance" className="hover:text-white transition-colors" style={{ color: "#C8A94E" }}>Grievance Redressal</Link>
          <Link to="/commission-disclosure" className="hover:text-white transition-colors" style={{ color: "#C8A94E" }}>Commission Disclosure</Link>
          <Link to="/disclaimer" className="hover:text-white transition-colors" style={{ color: "#C8A94E" }}>Disclaimer</Link>
          <Link to="/important-links" className="hover:text-white transition-colors" style={{ color: "#C8A94E" }}>Important Links</Link>
        </div>
      </div>

      {/* BLOCK 6: Copyright */}
      <div className="border-t border-white/10">
        <div className="container py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[11px] font-mono text-white/50">
            &copy; {currentYear} NKS Investment Services Private Limited. All rights reserved.
          </p>
          <p className="text-[11px] font-mono text-white/40">
            CIN: U66190RJ2025PTC106533 | ARN: 345665
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
