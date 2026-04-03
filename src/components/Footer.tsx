import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";

const services = [
  { label: "Mutual Fund", href: "/services/mutual-funds" },
  { label: "General Insurance", href: "/services/insurance" },
  { label: "Life Insurance", href: "/services/insurance" },
  { label: "PMS & AIF & SIF", href: "/services/pms-aif" },
  { label: "GIFT City", href: "/services/global-investments" },
  { label: "Goal Planning", href: "/services/goal-planning" },
  { label: "Loans", href: "/services/loans" },
];

const legal = [
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Commission Disclosure", href: "/commission-disclosure" },
  { label: "Fund Selection Policy", href: "/fund-selection-policy" },
  { label: "Investor Grievance", href: "/investor-grievance" },
  { label: "Rights & Obligations", href: "/rights-and-obligations" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Important Links", href: "/important-links" },
];

const Footer = () => (
  <footer className="bg-navy-800 text-white">
    {/* Gold wave SVG */}
    <div className="w-full overflow-hidden leading-[0]">
      <svg viewBox="0 0 1440 60" className="w-full h-[60px]" preserveAspectRatio="none">
        <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,30 1440,30 L1440,60 L0,60Z" fill="#0B1F4A" />
        <path d="M0,35 C360,60 720,5 1080,35 C1260,48 1380,35 1440,35" fill="none" stroke="#C8A94E" strokeWidth="1.5" strokeOpacity="0.4" />
      </svg>
    </div>

    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <img src="/assets/nks-logo.png" alt="NKS Investment Services" className="h-14 w-auto brightness-0 invert" />
          <p className="font-serif italic text-gold-300 text-lg">"Growing Wealth. Securing Futures."</p>
          <div className="space-y-1 text-xs font-mono text-white/60">
            <p>CIN: U66190RJ2025PTC106533</p>
            <p>PAN: AAKCN8571C | TAN: JPRN10231E</p>
            <p>ARN: 345665 | Valid: 17-Nov-2025 to 16-Nov-2028</p>
            <p>EUIN: E658208 | Valid: 17-Nov-2025 to 06-Jun-2028</p>
          </div>
          <div className="flex gap-3 pt-2">
            <a href="https://wa.me/919694067366" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 transition-colors"><Phone size={18} /></a>
            <a href="#" className="text-gold-400 hover:text-gold-300 transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="text-gold-400 hover:text-gold-300 transition-colors"><Instagram size={18} /></a>
            <a href="#" className="text-gold-400 hover:text-gold-300 transition-colors"><Facebook size={18} /></a>
            <a href="#" className="text-gold-400 hover:text-gold-300 transition-colors"><Youtube size={18} /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-bold text-gold-400 mb-4 text-sm tracking-wider uppercase">Services</h4>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.href + s.label}><Link to={s.href} className="text-sm text-white/70 hover:text-gold-300 transition-colors">{s.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-display font-bold text-gold-400 mb-4 text-sm tracking-wider uppercase">Legal</h4>
          <ul className="space-y-2">
            {legal.map((l) => (
              <li key={l.href}><Link to={l.href} className="text-sm text-white/70 hover:text-gold-300 transition-colors">{l.label}</Link></li>
            ))}
            <li><a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-gold-300 transition-colors">SEBI SCORES ↗</a></li>
            <li><a href="https://www.amfiindia.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-gold-300 transition-colors">AMFI ↗</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-bold text-gold-400 mb-4 text-sm tracking-wider uppercase">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2"><MapPin size={16} className="text-gold-500 shrink-0 mt-0.5" /> Plot No.40, Flat No.201, Prem Nagar Vistar, Durgapura, Jaipur-302018 RJ India</li>
            <li className="flex gap-2"><Phone size={16} className="text-gold-500 shrink-0" /> <a href="tel:+919694067366" className="hover:text-gold-300">+91 96940 67366</a></li>
            <li className="flex gap-2"><Mail size={16} className="text-gold-500 shrink-0" /> <a href="mailto:nksinvestmentservices@gmail.com" className="hover:text-gold-300">nksinvestmentservices@gmail.com</a></li>
            <li className="flex gap-2"><Mail size={16} className="text-gold-500 shrink-0" /> <span className="text-xs">nikhilshahcfp@gmail.com<br/>karnikajain1208@gmail.com</span></li>
            <li className="flex gap-2"><Clock size={16} className="text-gold-500 shrink-0" /> Mon-Fri 9:30AM-6:30PM<br/>Sat 10AM-2PM IST</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Service tags strip - NO emojis */}
    <div className="border-t border-gold-500/20 bg-gold-500/[0.06]">
      <div className="container py-3 flex flex-wrap justify-center gap-3 text-xs font-display font-bold text-gold-400 tracking-wider">
        <span>Mutual Fund</span><span className="text-gold-500/30">|</span>
        <span>General Insurance</span><span className="text-gold-500/30">|</span>
        <span>Life Insurance</span><span className="text-gold-500/30">|</span>
        <span>SIF</span><span className="text-gold-500/30">|</span>
        <span>AIF</span><span className="text-gold-500/30">|</span>
        <span>PMS</span><span className="text-gold-500/30">|</span>
        <span>Gift City</span>
      </div>
    </div>

    {/* Compliance disclaimer */}
    <div className="border-t border-navy-700">
      <div className="container py-4">
        <p className="text-[11px] font-sans text-white/40 text-center max-w-4xl mx-auto leading-relaxed">
          AMFI Registered Mutual Fund Distributor (ARN-345665). NKS Investment Services Private Limited is NOT a SEBI-Registered Investment Adviser. Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future results. This website is for informational purposes only.
        </p>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="bg-navy-900 border-t border-navy-700">
      <div className="container py-3 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-[11px] font-mono text-white/50">
          © 2025 NKS Investment Services Pvt. Ltd.
        </p>
        <p className="text-[11px] font-mono text-white/40">
          CIN: U66190RJ2025PTC106533 | ARN: 345665
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
