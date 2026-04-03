import { motion } from "framer-motion";
import { TrendingUp, Calculator, Star } from "lucide-react";

const HeroCards = () => (
  <div className="hidden lg:flex flex-col gap-4 relative">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.7 }}
      className="animate-float bg-gradient-navy-card border border-gold-500/30 rounded-xl p-5 shadow-navy-lg"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <TrendingUp size={18} className="text-gold-500" />
          <span className="font-display font-bold text-sm text-white">NIFTY 50</span>
        </div>
        <span className="bg-positive/20 text-positive text-xs font-mono font-bold px-2 py-0.5 rounded">
          🟢 MARKET OPEN
        </span>
      </div>
      <p className="font-mono text-2xl font-bold text-white">24,856.15</p>
      <p className="font-mono text-sm text-positive">+182.30 (+0.74%)</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.7 }}
      className="animate-float-delay bg-white rounded-xl p-5 shadow-navy-lg"
    >
      <div className="flex items-center gap-2 mb-3">
        <Calculator size={18} className="text-gold-500" />
        <span className="font-display font-bold text-sm text-navy-800">SIP Calculator</span>
      </div>
      <p className="font-sans text-sm text-navy-600 mb-2">₹5,000/mo × 10yr @ 12% = <span className="font-mono font-bold text-navy-800">₹11.6L*</span></p>
      <a href="/tools" className="text-gold-600 text-sm font-display font-bold hover:text-gold-700 inline-flex items-center gap-1">
        Calculate → 
      </a>
      <p className="text-[10px] text-muted-foreground mt-1">*Illustration only. Not guaranteed.</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.7 }}
      className="animate-float-delay-2 bg-gradient-cta rounded-xl p-5 shadow-gold"
    >
      <div className="flex items-center gap-3">
        <Star size={20} className="text-navy-800" fill="#0B1F4A" />
        <div>
          <p className="font-display font-bold text-navy-800">★ 5.0 | Client Satisfaction</p>
          <p className="font-mono text-xs text-navy-700">ARN-345665 Verified</p>
        </div>
      </div>
    </motion.div>
  </div>
);

export default HeroCards;
