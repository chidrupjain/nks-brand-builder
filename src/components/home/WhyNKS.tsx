import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const points = [
  "AMFI Registered Distributor — ARN-345665",
  "Goal-Based Financial Planning",
  "Full Fee & Commission Transparency",
  "Multi-Asset Expertise (MF, Insurance, PMS, AIF)",
  "Regular Portfolio Monitoring & Reviews",
  "Dedicated Relationship Manager",
];

const WhyNKS = () => (
  <section className="py-20 bg-gold-50">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-gold-500 font-display font-bold text-xs tracking-[0.15em] uppercase">Why Choose Us</span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-navy-800 mt-2 mb-8">
            Trusted. Transparent.<br />AMFI Registered.
          </h2>
          <ul className="space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-gold-500 shrink-0 mt-0.5" />
                <span className="font-sans text-navy-700">{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="bg-gradient-navy-card rounded-2xl p-8 text-center"
        >
          <div className="w-20 h-20 mx-auto bg-gold-500/20 rounded-full flex items-center justify-center mb-4">
            <span className="font-display font-black text-3xl text-gold-400">NKS</span>
          </div>
          <h3 className="font-display font-bold text-xl text-white mb-2">7 Services Under One Roof</h3>
          <div className="w-16 h-0.5 bg-gradient-gold mx-auto my-4" />
          <p className="font-sans text-sm text-white/60">
            Mutual Funds · Insurance · PMS · AIF · SIF · GIFT City · Loans
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyNKS;
