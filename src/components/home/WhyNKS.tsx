import { motion } from "framer-motion";
import { CheckCircle, Shield } from "lucide-react";

const points = [
  "AMFI Registered Distributor (ARN-345665)",
  "Transparent commission-based model",
  "No hidden charges",
  "SEBI-compliant processes",
  "Long-term wealth approach",
];

const WhyNKS = () => (
  <section className="py-20 bg-gold-50">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-gold-500 font-display font-bold text-xs tracking-[0.15em] uppercase">Why Trust Us</span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-navy-800 mt-2 mb-8">
            Trusted. Transparent.<br />AMFI Registered.
          </h2>
          <ul className="space-y-4">
            {points.map((p) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <CheckCircle size={20} className="text-gold-500 shrink-0 mt-0.5" />
                <span className="font-sans text-navy-700">{p}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-navy-card rounded-2xl p-10 text-center"
        >
          <div className="w-20 h-20 mx-auto bg-gold-500/20 rounded-full flex items-center justify-center mb-5">
            <Shield size={36} className="text-gold-400" />
          </div>
          <h3 className="font-display font-bold text-xl text-white mb-3">Your Trust, Our Priority</h3>
          <div className="w-16 h-0.5 bg-gradient-gold mx-auto my-4" />
          <p className="font-sans text-sm text-white/60 leading-relaxed">
            We earn commission from Asset Management Companies (AMCs). No advisory fees are charged to investors.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyNKS;
