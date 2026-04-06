import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="py-24 bg-gradient-cta relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.04]" style={{
      background: "radial-gradient(circle at 20% 50%, #0B1F4A, transparent 60%)",
    }} />
    <div className="container relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-navy-800 mb-4">
          Start Your Investment Journey Today
        </h2>
        <p className="font-sans text-lg text-navy-700/70 max-w-xl mx-auto mb-10">
          Take the first step towards financial independence through disciplined investing.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-navy-800 text-white font-display font-bold text-sm px-10 py-5 rounded-lg shadow-navy-lg hover:bg-navy-700 hover:scale-[1.03] hover:shadow-gold transition-all duration-300"
        >
          Contact Us <ArrowRight size={16} />
        </Link>
        <p className="text-[11px] font-sans text-navy-700/50 mt-6">
          Mutual Fund investments are subject to market risks. Read all scheme related documents carefully.
        </p>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
