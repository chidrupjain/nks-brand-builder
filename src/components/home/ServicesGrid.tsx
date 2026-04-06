import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BarChart3, Shield, Target, Briefcase, Globe, Building, ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Mutual Fund Investments",
    desc: "Invest in mutual funds aligned with your goals, risk profile, and time horizon.",
    href: "/services",
  },
  {
    icon: Shield,
    title: "Insurance & Risk Protection",
    desc: "Facilitate insurance solutions to help manage financial risks and provide protection.",
    href: "/services",
  },
  {
    icon: Target,
    title: "Goal-Based Investing Support",
    desc: "Align investments with life goals such as retirement, education, and wealth creation.",
    href: "/services",
  },
  {
    icon: Briefcase,
    title: "PMS, AIF & Specialized Investments",
    desc: "Facilitate access to advanced investment products for eligible investors. Higher risk products.",
    href: "/services",
  },
  {
    icon: Globe,
    title: "Global Investment Opportunities",
    desc: "Access international investments and GIFT City opportunities (subject to eligibility).",
    href: "/services",
  },
  {
    icon: Building,
    title: "Loan & Financing Solutions",
    desc: "Assist in exploring financing options through lending partners.",
    href: "/services",
  },
];

const ServicesGrid = () => (
  <section className="py-20 bg-white">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-4">
        <span className="text-gold-500 font-display font-bold text-xs tracking-[0.15em] uppercase">What We Offer</span>
        <h2 className="font-display font-black text-3xl md:text-4xl text-navy-800 mt-2">Our Services</h2>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="text-center font-sans text-muted-foreground max-w-2xl mx-auto mb-12"
      >
        We assist individuals, families, and businesses in accessing suitable financial products and investment opportunities.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <Link
              to={svc.href}
              className="group block bg-white border border-border rounded-xl p-6 shadow-navy hover:border-gold-500 hover:shadow-gold hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svc.icon size={24} className="text-gold-600" />
              </div>
              <h3 className="font-display font-bold text-lg text-navy-800 mb-2">{svc.title}</h3>
              <p className="font-sans text-sm text-muted-foreground mb-3">{svc.desc}</p>
              <span className="text-gold-600 font-display font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/services" className="bg-gradient-cta text-navy-800 font-display font-bold text-sm px-8 py-4 rounded-lg shadow-gold hover:shadow-lg hover:scale-[1.02] transition-all inline-flex items-center gap-2">
          View All Services <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesGrid;
