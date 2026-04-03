import { motion } from "framer-motion";

const steps = [
  { step: "Step 1", action: "Identify Investment Category", details: "Based on client's goal, investment horizon, and assessed risk profile, identify the suitable MF category (Large Cap, Mid Cap, Small Cap, Flexi Cap, Hybrid, Debt, ELSS, Index, etc.)." },
  { step: "Step 2", action: "AMC Screening", details: "Evaluate AMC reputation, total AUM size, regulatory track record (no SEBI action), fund management team stability, and operational efficiency." },
  { step: "Step 3", action: "Scheme Performance Analysis", details: "Compare rolling returns across 1-year, 3-year, and 5-year periods against the scheme's benchmark index and category average." },
  { step: "Step 4", action: "Risk-Adjusted Return Analysis", details: "Evaluate Sharpe Ratio, Sortino Ratio, Standard Deviation, and Maximum Drawdown to assess risk-reward balance." },
  { step: "Step 5", action: "Expense Ratio Comparison", details: "Compare expense ratios within the peer category. Lower expense ratio is preferred for long-term wealth creation." },
  { step: "Step 6", action: "Fund Manager Review", details: "Assess fund manager's tenure, track record across market cycles, and investment style consistency. Flag schemes with more than 2 fund manager changes in 3 years." },
  { step: "Step 7", action: "Portfolio Quality Check", details: "For equity funds: check sector concentration, single-stock exposure, and market-cap allocation. For debt funds: check credit quality (minimum AA-), maturity profile, and concentration risk." },
  { step: "Step 8", action: "SEBI Riskometer Mapping", details: "Map each scheme to its SEBI Riskometer category and match to client risk profiles (Conservative / Moderate / Aggressive)." },
  { step: "Step 9", action: "Director Approval", details: "Final recommended scheme list reviewed and approved by Director before being used for client distribution." },
  { step: "Step 10", action: "Yearly Review", details: "Recommended list reviewed every year. Underperforming schemes replaced based on the same objective criteria." },
];

const FundSelectionPolicyPage = () => (
  <div>
    <section className="bg-gradient-hero py-16">
      <div className="container text-center">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex bg-gold-500/20 border border-gold-500/40 text-gold-400 font-display font-bold text-[11px] tracking-[0.1em] px-4 py-1.5 rounded-pill mb-4">LEGAL</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display font-black text-4xl md:text-5xl text-white">Fund Selection Policy</motion.h1>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container max-w-4xl">
        <div className="space-y-8 font-sans text-navy-700 leading-relaxed">
          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Objective</h2>
            <p className="text-sm">This document outlines the structured, documented, and repeatable process followed by NKS Investment Services Private Limited (ARN-345665) for identifying, evaluating, and shortlisting mutual fund schemes for client distribution. Our selection process is based entirely on objective analysis, risk-category mapping, and compliance requirements. Scheme selection is never driven by commission incentives.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Fund Selection Process Flow</h2>
            <div className="space-y-3">
              {steps.map((s) => (
                <div key={s.step} className="bg-gold-50 border border-gold-200/50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="bg-navy-800 text-gold-400 font-display font-bold text-xs px-3 py-1 rounded-pill">{s.step}</span>
                    <h3 className="font-display font-bold text-sm text-navy-800">{s.action}</h3>
                  </div>
                  <p className="text-xs text-navy-700 ml-[72px]">{s.details}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Exclusion Criteria</h2>
            <p className="text-sm">The following are automatically excluded from our recommended list:</p>
            <ul className="list-disc list-inside text-sm space-y-1 mt-2">
              <li>Schemes from AMCs under SEBI regulatory action or warning</li>
              <li>Schemes with high portfolio concentration in a single stock or sector beyond category norms</li>
              <li>Debt schemes with significant exposure to below-investment-grade (below AA-) securities</li>
              <li>Schemes with more than 2 fund manager changes in the last 3 years</li>
              <li>Close-ended or interval schemes unless specifically required for a client's goal</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Data Sources</h2>
            <p className="text-sm">AMC factsheets and monthly portfolio disclosures; Value Research and Morningstar India for performance data and fund ratings; AMFI website for NAV and AUM data; SEBI Riskometer classification for risk categorization; SEBI Mutual Fund filings portal for SID/SAI/KIM documents.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Suitability Mapping</h2>
            <p className="text-sm">Every shortlisted scheme is mapped to one of three client risk categories: Conservative (score 0-30), Moderate (score 31-60), or Aggressive (score 61-100). No scheme whose SEBI Riskometer category exceeds the client's assessed risk level is recommended.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Conflict of Interest Declaration</h2>
            <p className="text-sm">NKS Investment Services Private Limited is fully independent with no AMC shareholding, employment, directorship, or financial affiliation with any Asset Management Company. Our fund selection is based solely on the objective criteria described above and is never influenced by commission rates, incentive trips, gifts, or any non-monetary benefits from AMCs.</p>
          </div>

          <div className="border-t border-border pt-4">
            <p className="text-xs text-muted-foreground">NKS Investment Services Private Limited | AMFI Registered Mutual Fund Distributor (ARN-345665) | CIN: U66190RJ2025PTC106533</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default FundSelectionPolicyPage;
