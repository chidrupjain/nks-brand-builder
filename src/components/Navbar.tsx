import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Tools", href: "/tools" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const INVESTWELL_URL = "https://nikhilshah.investwell.app/app/#/broker/dashboard";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`sticky top-0 z-[100] transition-all duration-300 ${scrolled ? "bg-white shadow-navy" : "bg-white"} border-b border-navy-100`}>
      <div className="container flex items-center justify-between h-[72px]">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img
            src="/assets/nks-logo.png"
            alt="NKS Investment Services Private Limited — AMFI Registered ARN-345665"
            className={`w-auto transition-all ${scrolled ? "h-[46px]" : "h-[52px]"} ${isMobile ? "h-[40px]" : ""}`}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className={`px-3 py-2 font-display text-[13px] font-semibold transition-colors relative ${
                location.pathname === link.href ? "text-gold-500" : "text-navy-800 hover:text-gold-600"
              }`}
            >
              {link.label}
              {location.pathname === link.href && (
                <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-500" />
              )}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={INVESTWELL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-navy-800 text-navy-800 font-display font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-navy-800 hover:text-white transition-all"
          >
            <LogIn size={16} /> Login
          </a>
          <button
            onClick={() => handleNavClick("/contact")}
            className="bg-gradient-cta text-navy-800 font-display font-bold text-sm px-6 py-3 rounded-lg shadow-gold hover:shadow-lg transition-all"
          >
            Reach Us
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-navy-800 p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-navy-800 z-50 overflow-y-auto p-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left py-3 text-lg font-display font-bold text-gold-400 border-b border-navy-700"
            >
              {link.label}
            </button>
          ))}
          <a
            href={INVESTWELL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-6 text-center border-2 border-gold-400 text-gold-400 font-display font-bold py-3 rounded-lg"
          >
            Login to InvestWell
          </a>
          <button
            onClick={() => handleNavClick("/contact")}
            className="block w-full mt-3 text-center bg-gradient-cta text-navy-800 font-display font-bold py-4 rounded-lg shadow-gold"
          >
            Reach Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
