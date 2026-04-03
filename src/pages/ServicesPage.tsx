import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BarChart3, Shield, Briefcase, Globe, Target,
  FileText, Building, ArrowRight, X,
  Calculator,
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
    shortDesc: "SIP, STP, SWP across equity, debt, hybrid and more.",
    description: "We assist investors in building diversified portfolios aligned with their goals, time horizon, and risk profile. Whether you are starting your investment journey or looking to optimise an existing portfolio, we help you select the right mutual fund schemes across categories — equity, debt, hybrid, index, and tax-saving funds. Our approach is systematic, goal-driven, and based on objective fund selection criteria.",
    details: [
      "Equity Funds — Large Cap, Mid Cap, Small Cap, Multi Cap, Flexi Cap",
      "Debt Funds — Liquid, Short Duration, Corporate Bond, Gilt",
      "Hybrid Funds — Balanced Advantage, Aggressive Hybrid, Conservative",
      "Index Funds & ETFs — Nifty 50, Sensex, Nifty Next 50",
      "ELSS — Tax-saving mutual funds under Section 80C",
      "SIP, STP, SWP — Systematic investment, transfer & withdrawal plans",
    ],
    calculators: [
      { label: "SIP Calculator", tab: "sip" },
      { label: "Lumpsum Calculator", tab: "lumpsum" },
      { label: "Step-Up SIP Calculator", tab: "stepup" },
      { label: "SWP Calculator", tab: "swp" },
    ],
  },
  {
    id: "insurance",
    icon: Shield,
    title: "Insurance & Risk Protection",
    shortDesc: "Life, health, motor, and commercial insurance solutions.",
    description: "Before you invest, you must protect. Comprehensive insurance solutions safeguard your family, health, and assets against life's uncertainties. We help you evaluate coverage gaps and choose the right insurance products to ensure complete financial protection — so your investments remain intact when the unexpected happens.",
    details: [
      "Life Insurance — Term Plans, Endowment, ULIPs, Retirement Plans",
      "Health Insurance — Individual, Family Floater, Critical Illness, Top-Up",
      "Personal Accident Insurance — Coverage for accidental death & disability",
      "Motor Insurance — Car, Two-Wheeler, Commercial Vehicle",
      "Group Insurance — Employee health & life cover for businesses",
    ],
    calculators: [
      { label: "Life Insurance Coverage Calculator", tab: "insurance" },
    ],
  },
  {
    id: "goal-planning",
    icon: Target,
    title: "Goal-Based Investing",
    shortDesc: "Plan for education, retirement, home purchase and more.",
    description: "Every investment should have a purpose. We help you map your life goals to specific investment strategies — whether it's your child's education, your retirement, buying a home, or building long-term wealth. By aligning your investments to time horizons and risk profiles, goal-based investing brings discipline and clarity to your financial journey.",
    details: [
      "Children's Education — Build a corpus for school, college & higher studies",
      "Retirement Planning — Ensure financial independence post-retirement",
      "Wealth Creation — Long-term capital appreciation strategies",
      "Financial Independence (FIRE) — Achieve early financial freedom",
      "Home Purchase — Save systematically for your dream home down payment",
      "Marriage & Life Events — Plan for weddings and major celebrations",
    ],
    calculators: [
      { label: "Goal Planning Calculator", tab: "goal" },
      { label: "Retirement Calculator", tab: "retirement" },
      { label: "Child Education Calculator", tab: "education" },
    ],
  },
  {
    id: "pms-aif",
    icon: Briefcase,
    title: "Portfolio Management & Alternative Investments",
    shortDesc: "PMS, AIF, and Specialized Investment Funds access.",
    description: "For qualified investors seeking exposure beyond traditional mutual funds, we provide access to Portfolio Management Services (PMS), Alternative Investment Funds (AIF), and Specialized Investment Funds (SIF). These products offer professional portfolio construction with higher minimum thresholds, and are suitable for investors with a longer time horizon and higher risk appetite.",
    details: [
      "Portfolio Management Services (PMS) — Min. ₹50L, professional management",
      "Alternative Investment Funds (AIF) — Min. ₹1Cr, Cat I/II/III funds",
      "Specialized Investment Funds (SIF) — Thematic & sector-specific strategies",
    ],
    disclaimer: "PMS minimum investment: ₹50 Lakhs. AIF minimum: ₹1 Crore as per SEBI regulations. SIF involves relatively higher risk including potential loss of capital, liquidity risk and market volatility.",
    calculators: [
      { label: "Lumpsum Calculator", tab: "lumpsum" },
      { label: "Goal Planning Calculator", tab: "goal" },
    ],
  },
  {
    id: "global-investments",
    icon: Globe,
    title: "Global Investment Opportunities",
    shortDesc: "International funds and GIFT City investment access.",
    description: "Diversify beyond Indian markets with international mutual funds and GIFT City investment opportunities. Global investing helps reduce country-specific concentration risk and gives you access to high-growth economies and sectors not available in India. We help eligible investors navigate regulatory requirements and choose suitable global allocation strategies.",
    details: [
      "International Mutual Funds — US, Europe, Emerging Markets exposure",
      "GIFT City Investments — Tax-efficient global investing from India",
      "Global Diversification — Reduce country-specific concentration risk",
    ],
    disclaimer: "International investments subject to FEMA regulations and currency risk.",
    calculators: [
      { label: "Lumpsum Calculator", tab: "lumpsum" },
      { label: "Goal Planning Calculator", tab: "goal" },
    ],
  },
  {
    id: "estate-planning",
    icon: FileText,
    title: "Will Writing & Estate Planning",
    shortDesc: "Will writing, succession and legacy planning.",
    description: "Wealth creation without wealth transfer planning is incomplete. We offer estate planning solutions including professionally drafted wills, succession planning, and legacy planning. Ensuring your nominees are correctly updated and your assets are distributed as per your wishes gives your family peace of mind and avoids legal complications.",
    details: [
      "Will Drafting — Legally sound will writing assistance",
      "Succession Planning — Smooth transfer of assets to beneficiaries",
      "Legacy Planning — Long-term wealth preservation strategies",
      "Nomination Review — Ensure all investments have correct nominees",
    ],
    calculators: [],
  },
  {
    id: "loans",
    icon: Building,
    title: "Loan & Financing Solutions",
    shortDesc: "Home loans, loan against securities, project funding.",
    description: "Whether you need a home loan, a loan against your investment portfolio, or project funding for your business, we provide comprehensive financing support. We help you evaluate options, compare interest rates, and choose the right loan structure to meet your personal and business funding requirements without unnecessarily liquidating your investments.",
    details: [
      "Home Loans — Competitive rates for residential property purchase",
      "Loan Against Securities — Leverage your portfolio without liquidating",
      "Secured Loans — Property-backed financing options",
      "Unsecured Loans — Personal loans and business loans",
      "Project Funding — Capital for business expansion & projects",
    ],
    calculators: [
      { label: "Home Loan EMI Calculator", tab: "homeloan" },
      { label: "Loan Eligibility Calculator", tab: "loaneligibility" },
    ],
  },
];

const ServicesPage = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const active = services.find((s) => s.id === activeService);

  return (
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

      {/* Clickable Service Cards */}
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
                <button
                  onClick={() => setActiveService(svc.id)}
                  className="group text-left w-full bg-white border border-border rounded-xl p-5 shadow-navy hover:border-gold-500 hover:shadow-gold hover:-translate-y-1 transition-all duration-300 h-full relative overflow-hidden cursor-pointer"
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  <div className="w-11 h-11 rounded-full bg-gold-100 flex items-center justify-center mb-3">
                    <svc.icon size={22} className="text-gold-600" />
                  </div>
                  <h3 className="font-display font-bold text-sm text-navy-800 mb-1">{svc.title}</h3>
                  <p className="font-sans text-xs text-muted-foreground line-clamp-2">{svc.shortDesc}</p>
                  <span className="text-gold-600 font-display font-bold text-xs inline-flex items-center gap-1 mt-3 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={12} />
                  </span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal/Panel */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveService(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-border rounded-t-2xl p-6 flex items-center justify-between z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center">
                    <active.icon size={24} className="text-gold-600" />
                  </div>
                  <h2 className="font-display font-black text-xl md:text-2xl text-navy-800">{active.title}</h2>
                </div>
                <button
                  onClick={() => setActiveService(null)}
                  className="w-9 h-9 rounded-full bg-navy-100 hover:bg-navy-200 flex items-center justify-center transition-colors"
                >
                  <X size={18} className="text-navy-700" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="font-sans text-base text-navy-700 mb-6 leading-relaxed">{active.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {active.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-start gap-3 bg-gold-50 border border-gold-200/50 rounded-lg p-4"
                    >
                      <span className="text-gold-500 mt-0.5 font-bold">•</span>
                      <span className="font-sans text-sm text-navy-700">{detail}</span>
                    </div>
                  ))}
                </div>

                {active.disclaimer && (
                  <div className="bg-gold-100/50 border border-gold-300/40 rounded-lg p-3 mb-6">
                    <p className="font-sans text-xs text-navy-700">{active.disclaimer}</p>
                  </div>
                )}

                {/* Calculator buttons */}
                {active.calculators && active.calculators.length > 0 && (
                  <div>
                    <p className="font-display font-bold text-sm text-navy-800 mb-3">Related Financial Tools</p>
                    <div className="flex flex-wrap gap-3">
                      {active.calculators.map((calc) => (
                        <Link
                          key={calc.tab}
                          to={`/tools?tab=${calc.tab}`}
                          onClick={() => setActiveService(null)}
                          className="inline-flex items-center gap-2 bg-navy-800 text-gold-400 font-display font-bold text-xs px-5 py-2.5 rounded-lg hover:bg-navy-700 transition-colors"
                        >
                          <Calculator size={14} />
                          {calc.label}
                          <ArrowRight size={12} />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
};

export default ServicesPage;
