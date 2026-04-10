import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BarChart3, Shield, Target, Briefcase, Globe, ScrollText, Building,
  ArrowRight, Calculator, CheckCircle,
} from "lucide-react";

import mutualFundsImg from "@/assets/services/mutual-funds-page.jpg";
import insuranceImg from "@/assets/services/insurance-page.jpg";
import goalsImg from "@/assets/services/goals-page.jpg";
import pmsImg from "@/assets/services/pms-page.jpg";
import globalImg from "@/assets/services/global-page.jpg";
import estateImg from "@/assets/services/estate-page.jpg";
import loanImg from "@/assets/services/loan-page.jpg";

const services = [
  {
    id: "mutual-funds",
    icon: BarChart3,
    title: "Mutual Fund Investments",
    image: mutualFundsImg,
    description:
      "We distribute mutual fund products as permitted under SEBI and AMFI regulations. We assist investors in building diversified portfolios aligned with their goals, time horizon, and risk profile across equity, debt, hybrid, index, and tax-saving funds.",
    features: [
      "Equity, Debt, Hybrid & Index Fund distribution",
      "SIP, STP, SWP — Systematic investment plans",
      "ELSS — Tax-saving mutual funds under Section 80C",
      "Periodic portfolio review and rebalancing support",
    ],
    benefits: [
      "Disciplined, goal-oriented investing approach",
      "Access to 40+ AMC product range",
      "Transparent commission disclosure",
      "Structured long-term wealth creation support",
    ],
    calculator: { label: "SIP Calculator", tab: "sip" },
  },
  {
    id: "insurance",
    icon: Shield,
    title: "Insurance & Risk Protection",
    image: insuranceImg,
    description:
      "We facilitate access to insurance products that help protect your family and assets against unforeseen events. Our approach focuses on adequate coverage aligned with your life stage and financial responsibilities.",
    features: [
      "Term Life Insurance facilitation",
      "Health Insurance planning support",
      "Critical Illness & Accident coverage",
      "Comprehensive family protection assessment",
    ],
    benefits: [
      "Need-based coverage assessment",
      "Multiple insurer options for comparison",
      "Claims assistance and support",
      "Regular review of coverage adequacy",
    ],
    calculator: { label: "Insurance Calculator", tab: "insurance" },
  },
  {
    id: "goal-planning",
    icon: Target,
    title: "Goal-Based Financial Planning",
    image: goalsImg,
    description:
      "We assist clients in identifying and structuring their investments around specific life goals — whether it's buying a home, funding education, or building a retirement corpus.",
    features: [
      "Goal identification and timeline mapping",
      "Risk-appropriate asset allocation",
      "Milestone tracking and review",
      "Systematic investment structuring",
    ],
    benefits: [
      "Clear roadmap for each financial goal",
      "Disciplined investment approach",
      "Regular progress monitoring",
      "Flexibility to adjust as goals evolve",
    ],
    calculator: { label: "Goal Calculator", tab: "goal" },
  },
  {
    id: "pms-aif",
    icon: Briefcase,
    title: "PMS, AIF & SIF",
    image: pmsImg,
    description:
      "For high net-worth individuals, we facilitate access to Portfolio Management Services (PMS), Alternative Investment Funds (AIF), and Specialized Investment Funds (SIF) through registered intermediaries.",
    features: [
      "Access to SEBI-registered PMS providers",
      "AIF Category I, II & III facilitation",
      "Specialized Investment Fund access",
      "Due diligence support on fund managers",
    ],
    benefits: [
      "Professional portfolio management access",
      "Diversification beyond traditional mutual funds",
      "Access to institutional-grade strategies",
      "Structured risk assessment before onboarding",
    ],
  },
  {
    id: "global",
    icon: Globe,
    title: "Global Investment Opportunities",
    image: globalImg,
    description:
      "We assist investors in accessing international markets through mutual fund schemes that invest in global equities, bonds, and thematic strategies.",
    features: [
      "International mutual fund scheme distribution",
      "US, Europe & emerging market fund access",
      "Global thematic and sectoral strategies",
      "Currency diversification benefits",
    ],
    benefits: [
      "Portfolio diversification across geographies",
      "Access to global growth opportunities",
      "Reduced single-market concentration risk",
      "Structured approach to international investing",
    ],
  },
  {
    id: "estate",
    icon: ScrollText,
    title: "Will Writing & Estate Planning",
    image: estateImg,
    description:
      "We facilitate access to will writing and estate planning services through qualified professionals. Proper estate planning helps ensure smooth wealth transfer.",
    features: [
      "Will drafting facilitation",
      "Nomination and succession guidance",
      "Trust structuring awareness",
      "Estate documentation support",
    ],
    benefits: [
      "Clarity on wealth transfer process",
      "Protection of family interests",
      "Reduced legal complications",
      "Peace of mind for the future",
    ],
  },
  {
    id: "loans",
    icon: Building,
    title: "Loan & Financing Solutions",
    image: loanImg,
    description:
      "We provide facilitation support for various financing needs — home loans, loan against mutual fund portfolios, and project funding.",
    features: [
      "Home Loan facilitation with competitive rates",
      "Loan Against Securities — without liquidating investments",
      "Secured Loans — property-backed financing",
      "Project Funding — capital for business expansion",
    ],
    benefits: [
      "Multiple lender comparison support",
      "Preserve investments while meeting liquidity needs",
      "Structured repayment planning",
      "End-to-end documentation assistance",
    ],
    calculator: { label: "EMI Calculator", tab: "homeloan" },
  },
];

const ServicesPage = () => {
  const [activeId, setActiveId] = useState(services[0].id);
  const activeSvc = services.find((s) => s.id === activeId)!;

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
            AMFI REGISTERED MFD · ARN-345665
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-4xl md:text-5xl text-white mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-white/70 max-w-2xl mx-auto"
          >
            Comprehensive financial solutions designed to help individuals,
            families, and businesses manage, grow, and protect their wealth.
          </motion.p>
        </div>
      </section>

      {/* Service selector tabs */}
      <section className="bg-background border-b border-border sticky top-[72px] z-40">
        <div className="container py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {services.map((svc) => (
              <button
                key={svc.id}
                onClick={() => setActiveId(svc.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-display font-semibold text-sm transition-all whitespace-nowrap ${
                  activeId === svc.id
                    ? "bg-navy-800 text-white shadow-navy"
                    : "bg-muted text-navy-700 hover:bg-navy-100"
                }`}
              >
                <svc.icon size={16} />
                {svc.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active service detail */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            key={activeSvc.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-2xl group">
              <img
                src={activeSvc.image}
                alt={activeSvc.title}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-gold-100 flex items-center justify-center">
                  <activeSvc.icon size={22} className="text-gold-600" />
                </div>
                <h2 className="font-display font-black text-2xl md:text-3xl text-navy-800">
                  {activeSvc.title}
                </h2>
              </div>
              <div className="w-16 h-1 bg-gold-500 rounded-full mb-6" />

              <p className="font-sans text-navy-700 leading-relaxed mb-8">
                {activeSvc.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-display font-bold text-sm text-navy-800 mb-3 uppercase tracking-wider">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {activeSvc.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 font-sans text-sm text-navy-700">
                      <CheckCircle size={16} className="text-gold-500 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h4 className="font-display font-bold text-sm text-navy-800 mb-3 uppercase tracking-wider">
                  Benefits
                </h4>
                <ul className="space-y-2">
                  {activeSvc.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 font-sans text-sm text-navy-700">
                      <CheckCircle size={16} className="text-gold-500 shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-hero text-white font-display font-bold text-sm px-6 py-3 rounded-lg hover:shadow-navy-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  Get in Touch <ArrowRight size={16} />
                </Link>
                {activeSvc.calculator && (
                  <Link
                    to={`/tools?tab=${activeSvc.calculator.tab}`}
                    className="inline-flex items-center gap-2 border-2 border-navy-800 text-navy-800 font-display font-bold text-sm px-6 py-3 rounded-lg hover:bg-navy-800 hover:text-white transition-all duration-300"
                  >
                    <Calculator size={16} />
                    {activeSvc.calculator.label}
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Disclaimer */}
      <section className="py-8 bg-background">
        <div className="container max-w-4xl">
          <div className="border-l-4 border-gold-500/60 bg-gold-50 rounded-r-lg p-4">
            <p className="font-sans text-sm text-navy-700 leading-relaxed">
              Mutual fund investments are subject to market risks. Read all
              scheme-related documents carefully before investing. Past performance
              is not indicative of future results. NKS Investment Services Pvt.
              Ltd. (ARN-345665) is an AMFI Registered Mutual Fund Distributor. We
              are NOT a SEBI-Registered Investment Adviser.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
