import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Services", href: "/services",
    children: [
      { label: "Mutual Fund Investments", href: "/services/mutual-funds" },
      { label: "General Insurance", href: "/services/insurance" },
      { label: "Life Insurance", href: "/services/insurance" },
      { label: "Goal-Based Planning", href: "/services/goal-planning" },
      { label: "PMS & AIF & SIF", href: "/services/pms-aif" },
      { label: "Global Investments & GIFT City", href: "/services/global-investments" },
      { label: "Will Writing & Estate Planning", href: "/services/estate-planning" },
      { label: "Loan & Financing", href: "/services/loans" },
      { label: "Free Portfolio Review", href: "/contact" },
    ],
  },
  {
    label: "Tools", href: "/tools",
    children: [
      { label: "SIP Calculator", href: "/tools?tab=sip" },
      { label: "Lumpsum Calculator", href: "/tools?tab=lumpsum" },
      { label: "Goal Planner", href: "/tools?tab=goal" },
      { label: "Retirement Calculator", href: "/tools?tab=retirement" },
      { label: "Step-Up SIP", href: "/tools?tab=stepup" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Grievance", href: "/grievance" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <nav className={`sticky top-9 z-[100] transition-all duration-300 ${scrolled ? "bg-white shadow-navy" : "bg-white/97 backdrop-blur"} border-b border-navy-100`}>
      <div className="container flex items-center justify-between h-[72px]">
        <Link to="/">
          <img
            src="/assets/nks-logo.png"
            alt="NKS Investment Services Private Limited — AMFI Registered ARN-345665"
            className={`w-auto transition-all ${scrolled ? "h-[46px]" : "h-[52px]"} ${isMobile ? "h-[40px]" : ""}`}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={link.href}
                className={`px-3 py-2 font-display text-[13px] font-semibold transition-colors flex items-center gap-1 ${
                  location.pathname === link.href ? "text-gold-500" : "text-navy-800 hover:text-gold-600"
                }`}
              >
                {link.label}
                {link.children && <ChevronDown className="w-3 h-3" />}
              </Link>
              {location.pathname === link.href && (
                <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-500" />
              )}
              {link.children && openDropdown === link.label && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-navy-lg border border-navy-100 border-t-[3px] border-t-gold-500 p-2 z-50">
                  {link.children.map((child) => (
                    <Link
                      key={child.href + child.label}
                      to={child.href}
                      className="block px-3 py-2 text-sm font-sans text-navy-800 hover:bg-gold-50 hover:text-gold-700 rounded-md transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden lg:inline-flex bg-gradient-cta text-navy-800 font-display font-bold text-sm px-6 py-3 rounded-pill shadow-gold hover:shadow-lg transition-all"
        >
          Book Free Consultation
        </Link>

        {/* Mobile toggle */}
        <button className="lg:hidden text-navy-800 p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[108px] bg-navy-800 z-50 overflow-y-auto p-6">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                to={link.href}
                className="block py-3 text-lg font-display font-bold text-gold-400 border-b border-navy-700"
              >
                {link.label}
              </Link>
              {link.children?.map((child) => (
                <Link
                  key={child.href + child.label}
                  to={child.href}
                  className="block py-2 pl-4 text-sm font-sans text-white/80"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            to="/contact"
            className="block mt-6 text-center bg-gradient-cta text-navy-800 font-display font-bold py-4 rounded-pill shadow-gold"
          >
            Book Free Consultation
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
