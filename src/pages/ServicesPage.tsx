import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BarChart3, Shield, Briefcase, Globe, Target,
  FileText, Building, ArrowRight,
  TrendingUp, Landmark, Calculator,
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
    description: "We assist investors in building diversified portfolios aligned with their goals, time horizon, and risk profile. Whether you are starting your investment journey or looking to optimise an existing portfolio, we help you select the right mutual fund schemes across categories — equity, debt, hybrid, index, and tax-saving funds. Our approach is systematic, goal-driven, and based on objective fund selection criteria.",
    details: [
      "Equity Funds — Large Cap, Mid Cap, Small Cap, Multi Cap, Flexi Cap",
      "Debt Funds — Liquid, Short Duration, Corporate Bond, Gilt",
      "Hybrid Funds — Balanced Advantage, Aggressive Hybrid, Conservative",
      "Index Funds & ETFs — Nifty 50, Sensex, Nifty Next 50",
      "ELSS — Tax-saving mutual funds under Section 80C",
      "SIP, STP, SWP — Systematic investment, transfer & withdrawal plans",
    ],
    href: "/services/mutual-funds",
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
    description: "Before you invest, you must protect. Comprehensive insurance solutions safeguard your family, health, and assets against life's uncertainties. We help you evaluate coverage gaps and choose the right insurance products to ensure complete financial protection — so your investments remain intact when the unexpected happens.",
    details: [
      "Life Insurance — Term Plans, Endowment, ULIPs, Retirement Plans",
      "Health Insurance — Individual, Family Floater, Critical Illness, Top-Up",
      "Personal Accident Insurance — Coverage for accidental death & disability",
      "Motor Insurance — Car, Two-Wheeler, Commercial Vehicle",
      "Group Insurance — Employee health & life cover for businesses",
    ],
    href: "/services/insurance",
    calculators: [
      { label: "Life Insurance Coverage Calculator", tab: "insurance" },
    ],
  },
  {
    id: "goal-planning",
    icon: Target,
    title: "Goal-Based Investing",
    description: "Every investment should have a purpose. We help you map your life goals to specific investment strategies — whether it's your child's education, your retirement, buying a home, or building long-term wealth. By aligning your investments to time horizons and risk profiles, goal-based investing brings discipline and clarity to your financial journey.",
    details: [
      "Children's Education — Build a corpus for school, college & higher studies",
      "Retirement Planning — Ensure financial independence post-retirement",
      "Wealth Creation — Long-term capital appreciation strategies",
      "Financial Independence (FIRE) — Achieve early financial freedom",
      "Home Purchase — Save systematically for your dream home down payment",
      "Marriage & Life Events — Plan for weddings and major celebrations",
    ],
    href: "/services/goal-planning",
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
    description: "For qualified investors seeking exposure beyond traditional mutual funds, we provide access to Portfolio Management Services (PMS), Alternative Investment Funds (AIF), and Specialized Investment Funds (SIF). These products offer professional portfolio construction with higher minimum thresholds, and are suitable for investors with a longer time horizon and higher risk appetite.",
    details: [
      "Portfolio Management Services (PMS) — Min. ₹50L, professional management",
      "Alternative Investment Funds (AIF) — Min. ₹1Cr, Cat I/II/III funds",
      "Specialized Investment Funds (SIF) — Thematic & sector-specific strategies",
    ],
    href: "/services/pms-aif",
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
    description: "Diversify beyond Indian markets with international mutual funds and GIFT City investment opportunities. Global investing helps reduce country-specific concentration risk and gives you access to high-growth economies and sectors not available in India. We help eligible investors navigate regulatory requirements and choose suitable global allocation strategies.",
    details: [
      "International Mutual Funds — US, Europe, Emerging Markets exposure",
      "GIFT City Investments — Tax-efficient global investing from India",
      "Global Diversification — Reduce country-specific concentration risk",
    ],
    href: "/services/global-investments",
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
    description: "Wealth creation without wealth transfer planning is incomplete. We offer estate planning solutions including professionally drafted wills, succession planning, and legacy planning. Ensuring your nominees are correctly updated and your assets are distributed as per your wishes gives your family peace of mind and avoids legal complications.",
    details: [
      "Will Drafting — Legally sound will writing assistance",
      "Succession Planning — Smooth transfer of assets to beneficiaries",
      "Legacy Planning — Long-term wealth preservation strategies",
      "Nomination Review — Ensure all investments have correct nominees",
    ],
    href: "/services/estate-planning",
    calculators: [],
  },
  {
    id: "loans",
    icon: Building,
    title: "Loan & Financing Solutions",
    description: "Whether you need a home loan, a loan against your investment portfolio, or project funding for your business, we provide comprehensive financing support. We help you evaluate options, compare interest rates, and choose the right loan structure to meet your personal and business funding requirements without unnecessarily liquidating your investments.",
    details: [
      "Home Loans — Competitive rates for residential property purchase",
      "Loan Against Securities — Leverage your portfolio without liquidating",
      "Secured Loans — Property-backed financing options",
      "Unsecured Loans — Personal loans and business loans",
      "Project Funding — Capital for business expansion & projects",
    ],
    href: "/services/loans",
    calculators: [
      { label: "Home Loan EMI Calculator", tab: "homeloan" },
      { label: "Loan Eligibility Calculator", tab: "loaneligibility" },
    ],
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

            {/* Calculator buttons */}
            {svc.calculators && svc.calculators.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-6">
                {svc.calculators.map((calc) => (
                  <Link
                    key={calc.tab}
                    to={`/tools?tab=${calc.tab}`}
                    className="inline-flex items-center gap-2 bg-navy-800 text-gold-400 font-display font-bold text-xs px-5 py-2.5 rounded-lg hover:bg-navy-700 transition-colors"
                  >
                    <Calculator size={14} />
                    {calc.label}
                    <ArrowRight size={12} />
                  </Link>
                ))}
              </div>
            )}
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
          Calculator results are illustrative and do not guarantee returns.
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
