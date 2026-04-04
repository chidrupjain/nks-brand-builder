import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BarChart3, Shield, Target, FileText, Building, ArrowRight, X,
  Calculator, ClipboardCheck, BookOpen,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    id: "mutual-funds",
    icon: BarChart3,
    title: "Mutual Fund Distribution",
    shortDesc: "SIP, STP, SWP across equity, debt, hybrid and more.",
    description: "We distribute mutual fund products as permitted under SEBI and AMFI regulations. We assist investors in building diversified portfolios aligned with their goals, time horizon, and risk profile. Whether you are starting your investment journey or looking to optimise an existing portfolio, we help you select the right mutual fund schemes across categories — equity, debt, hybrid, index, and tax-saving funds.",
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
    id: "risk-profiling",
    icon: ClipboardCheck,
    title: "Client Risk Profiling",
    shortDesc: "Assess your risk appetite before investing.",
    description: "Understanding your risk profile is the first step to smart investing. We conduct a thorough risk assessment considering your income, financial goals, investment horizon, and comfort with market volatility. This ensures every mutual fund recommendation is aligned with your personal risk capacity.",
    details: [
      "Structured risk assessment questionnaire",
      "Risk categorisation — Conservative, Moderate, Aggressive",
      "Periodic reassessment as life circumstances change",
      "Alignment of fund category with risk profile",
    ],
    calculators: [
      { label: "Goal Planning Calculator", tab: "goal" },
      { label: "Retirement Calculator", tab: "retirement" },
    ],
  },
  {
    id: "scheme-recommendation",
    icon: Target,
    title: "Mutual Fund Scheme Recommendation",
    shortDesc: "Objective scheme selection based on data-driven criteria.",
    description: "Based on your risk profile and financial goals, we recommend suitable mutual fund schemes using our objective fund selection process. Our recommendations are driven by quantitative analysis, track record, fund manager experience, and expense ratios — not by commission incentives.",
    details: [
      "Fund selection based on rolling returns, risk-adjusted metrics",
      "Category-wise shortlisting with consistent performers",
      "Expense ratio and exit load comparison",
      "Regular review and rebalancing suggestions",
    ],
    disclaimer: "All return figures shown are assumed rates for illustration only. Past performance is not indicative of future returns.",
    calculators: [
      { label: "SIP Calculator", tab: "sip" },
      { label: "Lumpsum Calculator", tab: "lumpsum" },
    ],
  },
  {
    id: "portfolio-review",
    icon: Shield,
    title: "Portfolio Review",
    shortDesc: "Periodic review of your existing mutual fund investments.",
    description: "We offer periodic portfolio reviews to help you stay on track with your financial goals. Our review process covers fund performance evaluation, asset allocation drift, rebalancing needs, and tax-efficiency of your portfolio — ensuring your investments remain aligned with changing market conditions and life goals.",
    details: [
      "Annual / semi-annual portfolio health check",
      "Asset allocation review and rebalancing",
      "Underperformer identification and switch suggestions",
      "Tax harvesting opportunities assessment",
    ],
    calculators: [
      { label: "Goal Planning Calculator", tab: "goal" },
      { label: "SWP Calculator", tab: "swp" },
    ],
  },
  {
    id: "investor-education",
    icon: BookOpen,
    title: "Investor Education & Awareness",
    shortDesc: "Empowering investors with knowledge and awareness.",
    description: "We believe informed investors make better decisions. Through one-on-one meetings, educational content, and awareness sessions, we help investors understand mutual fund basics, market risks, and the importance of long-term disciplined investing. Our goal is to build financial literacy alongside financial portfolios.",
    details: [
      "Basics of mutual funds and how they work",
      "Understanding SIP, STP, and SWP",
      "Risk vs return — setting realistic expectations",
      "Importance of reading scheme documents",
    ],
    calculators: [],
  },
  {
    id: "loans",
    icon: Building,
    title: "Loan Facilitation Support",
    shortDesc: "Home loans, loan against securities, project funding.",
    description: "We provide facilitation support for various financing needs — home loans, loan against mutual fund portfolios, and project funding. We help you evaluate options and choose the right loan structure without unnecessarily liquidating your investments.",
    details: [
      "Home Loans — Competitive rates for residential property purchase",
      "Loan Against Securities — Leverage your portfolio without liquidating",
      "Secured Loans — Property-backed financing options",
      "Project Funding — Capital for business expansion",
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
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex bg-gold-500/20 border border-gold-500/40 text-gold-400 font-display font-bold text-[11px] tracking-[0.1em] px-4 py-1.5 rounded-pill mb-4">
            AMFI REGISTERED MFD · ARN-345665
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Our Services
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-sans text-white/70 max-w-2xl mx-auto">
            AMFI Registered Mutual Fund Distributor (ARN-345665)
          </motion.p>
        </div>
      </section>

      {/* Regulatory note */}
      <section className="py-6 bg-gold-50">
        <div className="container max-w-4xl text-center">
          <p className="font-sans text-sm text-navy-700">
            NKS Investment Services Private Limited is an AMFI Registered Mutual Fund Distributor (ARN-345665). We distribute mutual fund products as permitted under SEBI and AMFI regulations. We do not provide personalised investment advice. <strong>We are NOT a SEBI-Registered Investment Adviser.</strong>
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <motion.div key={svc.id} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
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

      {/* Service Detail Modal */}
      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setActiveService(null)}>
            <motion.div initial={{ opacity: 0, y: 40, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 40, scale: 0.95 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-white border-b border-border rounded-t-2xl p-6 flex items-center justify-between z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center">
                    <active.icon size={24} className="text-gold-600" />
                  </div>
                  <h2 className="font-display font-black text-xl md:text-2xl text-navy-800">{active.title}</h2>
                </div>
                <button onClick={() => setActiveService(null)} className="w-9 h-9 rounded-full bg-navy-100 hover:bg-navy-200 flex items-center justify-center transition-colors">
                  <X size={18} className="text-navy-700" />
                </button>
              </div>
              <div className="p-6">
                <p className="font-sans text-base text-navy-700 mb-6 leading-relaxed">{active.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {active.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-3 bg-gold-50 border border-gold-200/50 rounded-lg p-4">
                      <span className="text-gold-500 mt-0.5 font-bold">&#8226;</span>
                      <span className="font-sans text-sm text-navy-700">{detail}</span>
                    </div>
                  ))}
                </div>
                {active.disclaimer && (
                  <div className="bg-gold-100/50 border border-gold-300/40 rounded-lg p-3 mb-6">
                    <p className="font-sans text-xs text-navy-700">{active.disclaimer}</p>
                  </div>
                )}
                {active.calculators && active.calculators.length > 0 && (
                  <div>
                    <p className="font-display font-bold text-sm text-navy-800 mb-3">Related Financial Tools</p>
                    <div className="flex flex-wrap gap-3">
                      {active.calculators.map((calc) => (
                        <Link key={calc.tab} to={`/tools?tab=${calc.tab}`} onClick={() => setActiveService(null)} className="inline-flex items-center gap-2 bg-navy-800 text-gold-400 font-display font-bold text-xs px-5 py-2.5 rounded-lg hover:bg-navy-700 transition-colors">
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
              Past performance is not indicative of future results. All return figures shown are assumed rates for illustration only.
              ARN-345665 | NOT a SEBI-Registered Investment Adviser.
              Distribution commissions earned from AMCs. No commission is charged directly to investors.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
