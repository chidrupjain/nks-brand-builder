import { motion } from "framer-motion";

const commissionData = [
  { amc: "ICICI Prudential MF", equity: "0.50-1.50%", passive: "0.10-0.60%", hybrid: "0.40-1.00%", debt: "0.15-0.60%", liquid: "0.03-0.15%" },
  { amc: "HDFC MF", equity: "0.50-1.50%", passive: "0.10-0.50%", hybrid: "0.40-1.00%", debt: "0.15-0.55%", liquid: "0.03-0.12%" },
  { amc: "SBI MF", equity: "0.45-1.40%", passive: "0.10-0.55%", hybrid: "0.35-0.95%", debt: "0.10-0.50%", liquid: "0.03-0.10%" },
  { amc: "Kotak MF", equity: "0.50-1.45%", passive: "0.10-0.55%", hybrid: "0.40-0.95%", debt: "0.15-0.55%", liquid: "0.03-0.12%" },
  { amc: "Nippon India MF", equity: "0.50-1.50%", passive: "0.10-0.60%", hybrid: "0.40-1.00%", debt: "0.15-0.60%", liquid: "0.03-0.15%" },
  { amc: "Aditya Birla SL MF", equity: "0.50-1.50%", passive: "0.10-0.60%", hybrid: "0.40-1.00%", debt: "0.15-0.60%", liquid: "0.03-0.15%" },
  { amc: "Axis MF", equity: "0.45-1.40%", passive: "0.10-0.55%", hybrid: "0.35-0.90%", debt: "0.10-0.50%", liquid: "0.03-0.10%" },
  { amc: "DSP MF", equity: "0.50-1.45%", passive: "0.10-0.55%", hybrid: "0.40-0.95%", debt: "0.15-0.55%", liquid: "0.03-0.12%" },
  { amc: "Tata MF", equity: "0.50-1.50%", passive: "0.10-0.60%", hybrid: "0.40-1.00%", debt: "0.15-0.60%", liquid: "0.03-0.15%" },
  { amc: "Mirae Asset MF", equity: "0.45-1.35%", passive: "0.10-0.50%", hybrid: "0.35-0.85%", debt: "0.10-0.45%", liquid: "0.03-0.10%" },
  { amc: "Motilal Oswal MF", equity: "0.50-1.50%", passive: "0.10-0.60%", hybrid: "0.40-1.00%", debt: "0.15-0.60%", liquid: "0.03-0.15%" },
  { amc: "PPFAS MF", equity: "0.40-1.20%", passive: "0.10-0.40%", hybrid: "0.35-0.80%", debt: "N/A", liquid: "N/A" },
  { amc: "WhiteOak Capital MF", equity: "0.55-1.50%", passive: "0.10-0.60%", hybrid: "0.40-1.00%", debt: "0.15-0.55%", liquid: "0.03-0.12%" },
  { amc: "Quant MF", equity: "0.55-1.60%", passive: "0.10-0.65%", hybrid: "0.45-1.10%", debt: "0.20-0.65%", liquid: "0.05-0.18%" },
  { amc: "Other AMCs", equity: "0.40-1.60%", passive: "0.10-0.65%", hybrid: "0.35-1.10%", debt: "0.10-0.65%", liquid: "0.03-0.18%" },
];

const CommissionDisclosurePage = () => (
  <div>
    <section className="bg-gradient-hero py-16">
      <div className="container text-center">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex bg-gold-500/20 border border-gold-500/40 text-gold-400 font-display font-bold text-[11px] tracking-[0.1em] px-4 py-1.5 rounded-pill mb-4">LEGAL</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display font-black text-4xl md:text-5xl text-white">Commission Disclosure Policy</motion.h1>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container max-w-5xl">
        <div className="space-y-8 font-sans text-navy-700 leading-relaxed">
          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Objective</h2>
            <p className="text-sm">This Commission Disclosure Policy is prepared in accordance with SEBI and AMFI guidelines requiring Mutual Fund Distributors to disclose commission structures received from Asset Management Companies (AMCs). It ensures complete transparency for investors and complies with SEBI Circulars on commission disclosures at the point of sale and on distributor websites.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">How Commission Works</h2>
            <p className="text-sm">When you invest in a Regular Plan mutual fund through NKS Investment Services Private Limited, the AMC pays us a trail commission. This commission is a percentage of your invested amount, paid by the AMC from the scheme's Base Expense Ratio (BER). This commission does NOT increase your investment cost — it is already included in the scheme's NAV. Direct Plans of the same scheme have a lower expense ratio because they do not include distributor commission. You may choose to invest in Direct Plans directly through AMC websites or apps without any distributor involvement.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Base Expense Ratio (Indicative Range)</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-navy-800 text-gold-400">
                    <th className="text-left p-3 font-display">AMC Name</th>
                    <th className="text-center p-3 font-display">Equity</th>
                    <th className="text-center p-3 font-display">Passive</th>
                    <th className="text-center p-3 font-display">Hybrid</th>
                    <th className="text-center p-3 font-display">Debt</th>
                    <th className="text-center p-3 font-display">Liquid</th>
                  </tr>
                </thead>
                <tbody>
                  {commissionData.map((row, i) => (
                    <tr key={row.amc} className={i % 2 === 0 ? "bg-gold-50" : "bg-white"}>
                      <td className="p-3 font-semibold text-navy-800">{row.amc}</td>
                      <td className="p-3 text-center">{row.equity}</td>
                      <td className="p-3 text-center">{row.passive}</td>
                      <td className="p-3 text-center">{row.hybrid}</td>
                      <td className="p-3 text-center">{row.debt}</td>
                      <td className="p-3 text-center">{row.liquid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Last Updated: March 2026. Updated quarterly as per AMFI guidelines.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Key Disclosures</h2>
            <ol className="list-decimal list-inside text-sm space-y-2">
              <li>NKS Investment Services Private Limited receives only trail commission from AMCs. We do not accept any upfront commission, incentive commission, or one-time payments from any AMC.</li>
              <li>Investors may refer to their Consolidated Account Statement (CAS) issued by CAMS or KFintech, which displays the actual total commission paid to distributors for the investor's investments.</li>
              <li>Commissions are paid directly by the respective AMCs and are included in the Base Expense Ratio (BER) of the scheme. The commission does not increase the investor's cost — it comes from the AMC's expense ratio.</li>
              <li>NKS Investment Services Private Limited does not receive any remuneration, gift, incentive trip, or non-cash benefit from any AMC or associate that could result in a conflict of interest.</li>
              <li>Investors may choose to invest in Direct Plans directly through AMC websites or apps without distributor involvement. Direct Plans have lower expense ratios as they do not include distributor commission.</li>
              <li>Our scheme recommendations are based on objective criteria (performance, risk, suitability) as documented in our Fund Selection Policy, and are never influenced by commission rates.</li>
            </ol>
          </div>

          <div className="border-t border-border pt-4">
            <p className="text-xs text-muted-foreground">NKS Investment Services Private Limited | AMFI Registered Mutual Fund Distributor (ARN-345665) | CIN: U66190RJ2025PTC106533</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default CommissionDisclosurePage;
