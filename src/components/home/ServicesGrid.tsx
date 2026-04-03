import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BarChart3, Shield, Heart, Briefcase, Globe, Target,
  FileText, Building, Search, ArrowRight,
} from "lucide-react";

const services = [
  { icon: BarChart3, title: "Mutual Fund Investments", desc: "SIP, STP, SWP across equity, debt, hybrid and more.", href: "/services/mutual-funds" },
  { icon: Shield, title: "General Insurance", desc: "Health, motor, travel, home and commercial insurance solutions.", href: "/services/insurance" },
  { icon: Heart, title: "Life Insurance", desc: "Term, endowment, ULIP and retirement insurance plans.", href: "/services/insurance" },
  { icon: Briefcase, title: "PMS & AIF & SIF", desc: "Portfolio Management, Alternative Investment Funds and Specialised Investment Funds.", href: "/services/pms-aif" },
  { icon: Globe, title: "GIFT City & Global", desc: "International fund investing and GIFT City opportunities.", href: "/services/global-investments" },
  { icon: Target, title: "Goal-Based Planning", desc: "Education, retirement, home purchase and life goal planning.", href: "/services/goal-planning" },
  { icon: FileText, title: "Will & Estate Planning", desc: "Will writing, succession planning and estate management.", href: "/services/estate-planning" },
  { icon: Building, title: "Loan & Financing", desc: "Home loans, loans against securities, project funding.", href: "/services/loans" },
  { icon: Search, title: "Free Portfolio Review", desc: "Complimentary review of your existing investment portfolio.", href: "/contact" },
];

const ServicesGrid = () => (
  <section className="py-20 bg-white">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="text-gold-500 font-display font-bold text-xs tracking-[0.15em] uppercase">What We Offer</span>
        <h2 className="font-display font-black text-3xl md:text-4xl text-navy-800 mt-2">Our Services</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              to={svc.href}
              className="group block bg-white border border-border rounded-xl p-6 shadow-navy hover:border-gold-500 hover:shadow-gold hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center mb-4">
                <svc.icon size={24} className="text-gold-600" />
              </div>
              <h3 className="font-display font-bold text-lg text-navy-800 mb-2">{svc.title}</h3>
              <p className="font-sans text-sm text-muted-foreground mb-3">{svc.desc}</p>
              <span className="text-gold-600 font-display font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Explore <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/services/mutual-funds" className="bg-gradient-cta text-navy-800 font-display font-bold text-sm px-8 py-4 rounded-lg shadow-gold hover:shadow-lg hover:scale-[1.02] transition-all inline-flex items-center gap-2">
          View All Services <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesGrid;
