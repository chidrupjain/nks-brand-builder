import { motion } from "framer-motion";
import founderImg from "@/assets/founder-nikhil.png";

const FounderSection = () => (
  <section className="py-24 bg-navy-900 relative overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(200,169,78,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(200,169,78,0.1) 0%, transparent 40%)",
        }}
      />
    </div>

    <div className="container relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Founder visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative group">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-navy-800 ring-4 ring-gold-500/30 overflow-hidden transition-transform duration-500 group-hover:scale-105">
              <img src={founderImg} alt="Nikhil Shah — Director & Founder" className="w-full h-full object-cover object-top" loading="lazy" width={320} height={320} />
            </div>
          </div>
        </motion.div>

        {/* Right — Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gold-500 font-display font-bold text-xs tracking-[0.15em] uppercase">
            About the Founder
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-white mt-2 mb-2">
            Nikhil Shah
          </h2>
          <p className="text-gold-400 font-display font-semibold text-sm mb-6">
            Director & Founder
          </p>
          <p className="font-sans text-white/70 leading-relaxed mb-6">
            With over 15 years of industry exposure in mutual fund distribution
            and financial product facilitation, Nikhil Shah has been assisting
            individuals and families in structured, goal-oriented investing. His
            disciplined approach focuses on long-term wealth creation through
            systematic investment plans.
          </p>
          <blockquote className="border-l-2 border-gold-500 pl-4">
            <p className="font-serif italic text-gold-300/80 text-sm leading-relaxed">
              "Discipline and patience are the foundation of every successful
              investment journey. We are here to assist you at every step."
            </p>
          </blockquote>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FounderSection;
