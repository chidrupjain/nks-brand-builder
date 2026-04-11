import { motion } from "framer-motion";
import { Calculator, Shield } from "lucide-react";

const HeroCards = () => (
  <div className="hidden lg:flex flex-col gap-5 relative">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.7 }}
      className="animate-float bg-white/95 backdrop-blur rounded-xl p-6 shadow-navy-lg"
    >
      <div className="flex items-center gap-2 mb-3">
        <Calculator size={18} className="text-gold-500" />
        <span className="font-display font-bold text-sm text-navy-800">SIP Calculator</span>
      </div>
      <p className="font-sans text-sm text-navy-600 mb-2">
        ₹5,000/mo × 10yr @ 12% = <span className="font-mono font-bold text-navy-800">₹11.6L*</span>
      </p>
      <a href="/calculator?tab=sip" className="text-gold-600 text-sm font-display font-bold hover:text-gold-700 inline-flex items-center gap-1">
        Calculate →
      </a>
      <p className="text-[10px] text-muted-foreground mt-1">*Illustration only. Not guaranteed.</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.7 }}
      className="animate-float-delay bg-gradient-navy-card rounded-xl p-5 border border-gold-500/20"
    >
      <div className="flex items-center gap-3">
        <Shield size={22} className="text-gold-400" />
        <div>
          <p className="font-display font-bold text-white text-sm">AMFI Registered</p>
          <p className="font-mono text-xs text-gold-400/80">ARN-345665 · Verified</p>
        </div>
      </div>
    </motion.div>
  </div>
);

export default HeroCards;
