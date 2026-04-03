import { motion } from "framer-motion";

const processSteps = [
  { step: "Step 1", action: "Complaint Received", details: "Your complaint reaches us via email, phone, WhatsApp, walk-in, or letter." },
  { step: "Step 2", action: "Logged in Register", details: "We assign a unique complaint number, record the date, your details, nature of complaint, and channel." },
  { step: "Step 3", action: "Acknowledgment Sent", details: "Written acknowledgment sent to you within 2 working days of receipt, with your complaint reference number." },
  { step: "Step 4", action: "Investigation", details: "We investigate the complaint, collect relevant documents and transaction records, identify the root cause, and coordinate with AMC/RTA if needed." },
  { step: "Step 5", action: "Resolution", details: "We aim to resolve within 7 working days. You receive a written resolution with a detailed explanation of steps taken." },
  { step: "Step 6", action: "Escalation (if needed)", details: "If unresolved at Level 1, it escalates per the escalation matrix below. We keep you informed at every stage." },
  { step: "Step 7", action: "Closure & Feedback", details: "We obtain your confirmation of satisfaction, close the complaint in our register, and record learnings for future improvement." },
];

const escalation = [
  { level: "1", contact: "Client Service / Operations Desk", channel: "Email: nksinvestmentservices@gmail.com | Phone: +91 96940 67366", when: "At first instance. Target: 7 working days." },
  { level: "2", contact: "Director", channel: "Email: nikhilshahcfp@gmail.com | Phone: +91 96940 67366", when: "If Level 1 does not resolve within 7 days." },
  { level: "3", contact: "AMC / RTA Grievance Cell", channel: "Contact respective AMC or Registrar directly", when: "If product-side action is required." },
  { level: "4", contact: "SEBI SCORES", channel: "https://scores.sebi.gov.in", when: "If AMC/RTA response is unsatisfactory." },
  { level: "5", contact: "SMART ODR", channel: "https://smartodr.in", when: "Alternative online dispute resolution platform." },
];

const InvestorGrievancePage = () => (
  <div>
    <section className="bg-gradient-hero py-16">
      <div className="container text-center">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex bg-gold-500/20 border border-gold-500/40 text-gold-400 font-display font-bold text-[11px] tracking-[0.1em] px-4 py-1.5 rounded-pill mb-4">LEGAL</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display font-black text-4xl md:text-5xl text-white">Investor Grievance Redressal</motion.h1>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container max-w-4xl">
        <div className="space-y-8 font-sans text-navy-700 leading-relaxed">
          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Our Commitment</h2>
            <p className="text-sm">NKS Investment Services Private Limited (ARN-345665), AMFI Registered Mutual Fund Distributor, is committed to fair, timely, and transparent resolution of all investor complaints in line with SEBI and AMFI guidelines. We treat every complaint seriously and work to resolve it as quickly as possible.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">How to Lodge a Complaint</h2>
            <div className="bg-gold-50 border border-gold-200/50 rounded-lg p-5 space-y-2 text-sm">
              <p><strong>Email:</strong> nksinvestmentservices@gmail.com</p>
              <p><strong>Phone:</strong> +91 96940 67366</p>
              <p><strong>Office:</strong> Plot No.40, Flat No.201, Prem Nagar Vistar, Durgapura, Jaipur-302018, Rajasthan</p>
              <p><strong>Hours:</strong> Monday to Friday, 9:30 AM to 6:30 PM (IST); Saturday 10:00 AM to 2:00 PM IST</p>
              <p className="text-xs text-muted-foreground mt-2">Please include: Full name, Mobile number, Email ID, PAN or Folio number (if available), Brief description of the issue, Date of incident, and any supporting documents.</p>
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Complaint Resolution Process</h2>
            <div className="space-y-3">
              {processSteps.map((s) => (
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
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Escalation Matrix</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-navy-800 text-gold-400">
                    <th className="text-left p-3 font-display">Level</th>
                    <th className="text-left p-3 font-display">Contact</th>
                    <th className="text-left p-3 font-display">Channel</th>
                    <th className="text-left p-3 font-display">When</th>
                  </tr>
                </thead>
                <tbody>
                  {escalation.map((row, i) => (
                    <tr key={row.level} className={i % 2 === 0 ? "bg-gold-50" : "bg-white"}>
                      <td className="p-3 font-bold">{row.level}</td>
                      <td className="p-3">{row.contact}</td>
                      <td className="p-3">{row.channel}</td>
                      <td className="p-3">{row.when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-800 mb-3">Timelines</h2>
            <p className="text-sm">Acknowledgment: Within 2 working days of receipt. Resolution: Within 7 working days of receipt. All complaints are recorded in our Complaint Register and tracked until closure.</p>
          </div>

          <div className="border-t border-border pt-4">
            <p className="text-xs text-muted-foreground">NKS Investment Services Private Limited | AMFI Registered Mutual Fund Distributor (ARN-345665) | CIN: U66190RJ2025PTC106533</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default InvestorGrievancePage;
