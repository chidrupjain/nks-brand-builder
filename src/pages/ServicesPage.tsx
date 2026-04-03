import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BarChart3, Shield, Heart, Briefcase, Globe, Target,
  FileText, Building, Search, ArrowRight, BookOpen,
  Car, Users, Umbrella, GraduationCap, Home, Flame,
  TrendingUp, Landmark, Lock, Unlock, HardHat,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    id: "mutual-funds",
    icon: BarChart3,
    title: "Mutual Fund Investments",
    description: "Assist investors in building diversified portfolios aligned with their goals, time horizon, and risk profile.",
    details: [
      "Equity Funds — Large Cap, Mid Cap, Small Cap, Multi Cap, Flexi Cap",
      "Debt Funds — Liquid, Short Duration, Corporate Bond, Gilt",
      "Hybrid Funds — Balanced Advantage, Aggressive Hybrid, Conservative",
      "Index Funds & ETFs — Nifty 50, Sensex, Nifty Next 50",
      "ELSS — Tax-saving mutual funds under Section 80C",
      "SIP, STP, SWP — Systematic investment, transfer & withdrawal plans",
    ],
    href: "/services/mutual-funds",
    color: "from-blue-500/10 to-blue-600/5",
  },
  {
    id: "insurance",
    icon: Shield,
    title: "Insurance & Risk Protection",
    description: "Comprehensive insurance solutions to protect your family, health, and assets against life's uncertainties.",
    details: [
      "Life Insurance — Term Plans, Endowment, ULIPs, Retirement Plans",
      "Health Insurance — Individual, Family Floater, Critical Illness, Top-Up",
      "Personal Accident Insurance — Coverage for accidental death & disability",
      "Motor Insurance — Car, Two-Wheeler, Commercial Vehicle",
      "Group Insurance — Employee health & life cover for businesses",
    ],
    href: "/services/insurance",
    color: "from-emerald-500/10 to-emerald-600/5",
  },
  {
    id: "goal-planning",
    icon: Target,
    title: "Goal-Based Investing",
    description: "Planning investments aligned with your life's most important milestones and financial objectives.",
    details: [
      "Children's Education — Build a corpus for school, college & higher studies",
      "Retirement Planning — Ensure financial independence post-retirement",
      "Wealth Creation — Long-term capital appreciation strategies",
      "Financial Independence (FIRE) — Achieve early financial freedom",
      "Home Purchase — Save systematically for your dream home down payment",
      "Marriage & Life Events — Plan for weddings and major celebrations",
    ],
    href: "/services/goal-planning",
    color: "from-amber-500/10 to-amber-600/5",
  },
  {
    id: "pms-aif",
    icon: Briefcase,
    title: "Portfolio Management & Alternative Investments",
    description: "Access sophisticated investment vehicles for qualified investors seeking diversified portfolio strategies.",
    details: [
      "Portfolio Management Services (PMS) — Min. ₹50L, professional management",
      "Alternative Investment Funds (AIF) — Min. ₹1Cr, Cat I/II/III funds",
      "Specialized Investment Funds (SIF) — Thematic & sector-specific strategies",
    ],
    href: "/services/pms-aif",
    disclaimer: "PMS minimum investment: ₹50 Lakhs. AIF minimum: ₹1 Crore as per SEBI regulations.",
    color: "from-purple-500/10 to-purple-600/5",
  },
  {
    id: "global-investments",
    icon: Globe,
    title: "Global Investment Opportunities",
    description: "Access to global allocation funds and GIFT City investment opportunities for eligible investors.",
    details: [
      "International Mutual Funds — US, Europe, Emerging Markets exposure",
      "GIFT City Investments — Tax-efficient global investing from India",
      "Global Diversification — Reduce country-specific concentration risk",
    ],
    href: "/services/global-investments",
    disclaimer: "International investments subject to FEMA regulations and currency risk.",
    color: "from-cyan-500/10 to-cyan-600/5",
  },
  {
    id: "estate-planning",
    icon: FileText,
    title: "Will Writing & Estate Planning",
    description: "Estate planning solutions including will writing and legacy planning to secure your family's future.",
    details: [
      "Will Drafting — Legally sound will writing assistance",
      "Succession Planning — Smooth transfer of assets to beneficiaries",
      "Legacy Planning — Long-term wealth preservation strategies",
      "Nomination Review — Ensure all investments have correct nominees",
    ],
    href: "/services/estate-planning",
    color: "from-rose-500/10 to-rose-600/5",
  },
  {
    id: "loans",
    icon: Building,
    title: "Loan & Financing Solutions",
    description: "Comprehensive financing support to meet your personal and business funding requirements.",
    details: [
      "Home Loans — Competitive rates for residential property purchase",
      "Loan Against Securities — Leverage your portfolio without liquidating",
      "Secured Loans — Property-backed financing options",
      "Unsecured Loans — Personal loans and business loans",
      "Project Funding — Capital for business expansion & projects",
    ],
    href: "/services/loans",
    color: "from-orange-500/10 to-orange-600/5",
  },
];

const ServicesPage = () => (
  <div>
    {/* Hero */}
    <section className="bg-gradient-hero py-20">
      <div className="container text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex bg-gold-500/20 border border-gold-500/40 text-gold-400 font-display font-bold text-[11px] tracking-[0.1em] px-4 py-1.5 rounded-pill mb-4"
        >
          ARN-345665 · 7 SERVICES
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-4"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-serif italic text-xl text-gold-300/80 max-w-2xl mx-auto"
        >
          Comprehensive financial solutions under one roof — from mutual funds to estate planning.
        </motion.p>
      </div>
    </section>

    {/* Services Grid Overview */}
    <section className="py-16 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`#${svc.id}`}
                className="group block bg-white border border-border rounded-xl p-5 shadow-navy hover:border-gold-500 hover:shadow-gold hover:-translate-y-1 transition-all duration-300 h-full relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <div className="w-11 h-11 rounded-full bg-gold-100 flex items-center justify-center mb-3">
                  <svc.icon size={22} className="text-gold-600" />
                </div>
                <h3 className="font-display font-bold text-sm text-navy-800 mb-1">{svc.title}</h3>
                <p className="font-sans text-xs text-muted-foreground line-clamp-2">{svc.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Detailed Service Sections */}
    {services.map((svc, i) => (
      <section
        key={svc.id}
        id={svc.id}
        className={`py-16 ${i % 2 === 0 ? "bg-gold-50" : "bg-white"}`}
      >
        <div className="container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gold-100 flex items-center justify-center">
                <svc.icon size={28} className="text-gold-600" />
              </div>
              <div>
                <h2 className="font-display font-black text-2xl md:text-3xl text-navy-800">{svc.title}</h2>
              </div>
            </div>

            <p className="font-sans text-lg text-navy-700 mb-6 leading-relaxed">{svc.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {svc.details.map((detail) => (
                <div
                  key={detail}
                  className="flex items-start gap-3 bg-white border border-border rounded-lg p-4 hover:border-gold-400 transition-colors"
                >
                  <span className="text-gold-500 mt-0.5">•</span>
                  <span className="font-sans text-sm text-navy-700">{detail}</span>
                </div>
              ))}
            </div>

            {svc.disclaimer && (
              <div className="bg-gold-100/50 border border-gold-300/40 rounded-lg p-3 mb-4">
                <p className="font-sans text-xs text-navy-700">{svc.disclaimer}</p>
              </div>
            )}

            <Link
              to={svc.href}
              className="inline-flex items-center gap-2 text-gold-600 font-display font-bold text-sm hover:text-gold-700 hover:gap-3 transition-all"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    ))}

    {/* Financial Tools Preview */}
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "linear-gradient(135deg, transparent 48%, rgba(200,169,78,0.08) 49%, rgba(200,169,78,0.08) 50%, transparent 51%)",
      }} />
      <div className="container relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
          <span className="text-gold-400 font-display font-bold text-xs tracking-[0.15em] uppercase">Financial Tools</span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-white mt-2">Plan Your Investments</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {[
            { icon: BarChart3, title: "SIP Calculator", desc: "Calculate future value of monthly investments" },
            { icon: TrendingUp, title: "Lumpsum Calculator", desc: "Estimate growth of one-time investments" },
            { icon: Target, title: "Goal Planning", desc: "Plan for education, retirement & more" },
            { icon: Landmark, title: "Retirement Calculator", desc: "Estimate your retirement corpus needs" },
          ].map((tool, i) => (
            <motion.div
              key={tool.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to="/tools"
                className="block bg-white/[0.08] backdrop-blur border border-gold-500/30 rounded-xl p-6 hover:bg-white/[0.15] transition-all"
              >
                <tool.icon size={28} className="text-gold-400 mb-3" />
                <h3 className="font-display font-bold text-white text-sm mb-1">{tool.title}</h3>
                <p className="font-sans text-xs text-white/60">{tool.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[11px] font-sans text-white/40 mb-6">
          Calculator results are illustrative and do not guarantee returns. Maximum return assumption: 12% p.a.
        </p>

        <div className="text-center">
          <Link to="/tools" className="bg-gradient-cta text-navy-800 font-display font-bold text-sm px-8 py-4 rounded-lg shadow-gold hover:shadow-lg transition-all inline-flex items-center gap-2">
            Open All Financial Tools <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* Compliance Disclaimer */}
    <section className="py-8 bg-white">
      <div className="container max-w-4xl">
        <div className="border-l-4 border-negative/60 bg-negative/5 rounded-r-lg p-4">
          <p className="font-sans text-sm text-navy-700 leading-relaxed">
            Mutual fund investments are subject to market risks. Read all scheme-related documents carefully before investing.
            Past performance is not indicative of future results. ARN-345665 | NOT a SEBI-Registered Investment Adviser.
            Distribution commissions earned from AMCs. PMS minimum investment: ₹50 Lakhs. AIF minimum: ₹1 Crore as per SEBI regulations.
            International investments subject to FEMA regulations and currency risk.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default ServicesPage;
