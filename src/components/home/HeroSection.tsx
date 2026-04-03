import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import HeroCards from "./HeroCards";

const serviceTags = [
  "Mutual Fund", "General Insurance", "Life Insurance",
  "SIF", "AIF", "PMS", "Gift City",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.15, duration: 0.6 } }),
};

const HeroSection = () => (
  <section className="relative min-h-[90vh] bg-gradient-hero overflow-hidden">
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 200'%3E%3Crect x='50' y='80' width='30' height='120' fill='white'/%3E%3Crect x='100' y='40' width='25' height='160' fill='white'/%3E%3Crect x='140' y='100' width='35' height='100' fill='white'/%3E%3Crect x='200' y='20' width='20' height='180' fill='white'/%3E%3Crect x='250' y='60' width='40' height='140' fill='white'/%3E%3Crect x='320' y='30' width='22' height='170' fill='white'/%3E%3Crect x='380' y='70' width='30' height='130' fill='white'/%3E%3Crect x='440' y='50' width='28' height='150' fill='white'/%3E%3Crect x='500' y='90' width='35' height='110' fill='white'/%3E%3Crect x='560' y='40' width='20' height='160' fill='white'/%3E%3Crect x='620' y='60' width='32' height='140' fill='white'/%3E%3Crect x='680' y='80' width='25' height='120' fill='white'/%3E%3Crect x='730' y='50' width='30' height='150' fill='white'/%3E%3C/svg%3E")`,
      backgroundRepeat: "repeat-x",
      backgroundPosition: "bottom",
      backgroundSize: "800px 200px",
    }} />
    <div className="absolute inset-0" style={{
      background: "linear-gradient(135deg, transparent 48%, rgba(200,169,78,0.15) 49%, rgba(200,169,78,0.15) 50%, transparent 51%)",
    }} />

    <div className="container relative z-10 py-20 lg:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 items-center">
        <div>
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-400 font-display font-bold text-[11px] tracking-[0.1em] px-4 py-1.5 rounded-pill mb-6"
          >
            AMFI REGISTERED · ARN-345665
          </motion.div>

          <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="font-display font-black text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-4"
          >
            Growing Wealth.<br />
            Securing <span className="text-gold-500">Futures.</span>
          </motion.h1>

          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="font-serif italic text-xl text-gold-300/80 mb-4"
          >
            Disciplined investing. Goal-based strategy. Lifelong partnerships.
          </motion.p>

          <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="font-sans text-[17px] text-white/70 max-w-[520px] mb-6 leading-relaxed"
          >
            NKS Investment Services Private Limited is your trusted AMFI-registered
            mutual fund distributor in Jaipur — guiding individuals and families
            toward financial freedom through transparent, personalised wealth management.
          </motion.p>

          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-wrap gap-2 mb-8"
          >
            {serviceTags.map((tag) => (
              <span key={tag} className="bg-gold-500/15 border border-gold-500/30 text-gold-400 font-display font-bold text-[11px] tracking-[0.08em] px-3 py-1 rounded-pill">
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-wrap gap-4 mb-8"
          >
            <Link to="/contact" className="bg-gradient-cta text-navy-800 font-display font-bold text-sm px-8 py-4 rounded-lg shadow-gold hover:shadow-lg hover:scale-[1.02] transition-all inline-flex items-center gap-2">
              Start Investing Today <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="border-2 border-white/40 text-white font-display font-bold text-sm px-8 py-4 rounded-lg hover:bg-white/10 transition-all">
              Book Free Consultation
            </Link>
          </motion.div>

          <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-wrap gap-4 text-[13px] font-sans text-gold-300/80"
          >
            <span className="flex items-center gap-1"><CheckCircle size={14} className="text-gold-500" /> AMFI Registered ARN-345665</span>
            <span className="flex items-center gap-1"><CheckCircle size={14} className="text-gold-500" /> Est. Sep 2025</span>
            <span className="flex items-center gap-1"><CheckCircle size={14} className="text-gold-500" /> Jaipur, RJ</span>
          </motion.div>
        </div>

        <HeroCards />
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold-400/60">
      <span className="text-xs font-sans">Scroll to explore</span>
      <ChevronDown size={20} className="animate-bounce" />
    </div>
  </section>
);

export default HeroSection;
