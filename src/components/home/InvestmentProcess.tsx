import { motion } from "framer-motion";
import { UserCheck, Target, Search, ClipboardCheck, Rocket } from "lucide-react";

const steps = [
  { icon: UserCheck, title: "Risk Profiling", desc: "Understand your risk appetite and investment capacity." },
  { icon: Target, title: "Goal Understanding", desc: "Define your short-term and long-term financial goals." },
  { icon: Search, title: "Scheme Selection", desc: "Identify suitable mutual fund schemes for your profile." },
  { icon: ClipboardCheck, title: "Suitability Check", desc: "Ensure every recommendation matches your risk profile." },
  { icon: Rocket, title: "Investment Execution", desc: "Complete KYC and start your investment journey." },
];

const InvestmentProcess = () => (
  <section className="py-20 bg-white">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="text-gold-500 font-display font-bold text-xs tracking-[0.15em] uppercase">How We Work</span>
        <h2 className="font-display font-black text-3xl md:text-4xl text-navy-800 mt-2">Investment Process</h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-border" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center relative"
            >
              <div className="relative z-10 w-16 h-16 mx-auto bg-white border-2 border-gold-500 rounded-full flex items-center justify-center mb-4 shadow-gold">
                <step.icon size={24} className="text-gold-600" />
              </div>
              <span className="font-mono text-xs text-gold-500 font-bold">Step {i + 1}</span>
              <h3 className="font-display font-bold text-navy-800 mt-1 mb-2">{step.title}</h3>
              <p className="font-sans text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default InvestmentProcess;
