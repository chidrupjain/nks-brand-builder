import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calculator, Target, TrendingUp } from "lucide-react";

const tools = [
  { icon: Calculator, title: "SIP Calculator", result: "₹5,000/mo × 10yr → ₹11.6L*" },
  { icon: TrendingUp, title: "Lumpsum Calculator", result: "₹1L × 10yr → ₹3.1L*" },
  { icon: Target, title: "Goal Planner", result: "Education · Retirement · Home" },
];

const ToolsPreview = () => (
  <section className="py-20 bg-gradient-hero relative overflow-hidden">
    <div className="absolute inset-0" style={{
      background: "linear-gradient(135deg, transparent 48%, rgba(200,169,78,0.08) 49%, rgba(200,169,78,0.08) 50%, transparent 51%)",
    }} />
    <div className="container relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="text-gold-400 font-display font-bold text-xs tracking-[0.15em] uppercase">Financial Tools</span>
        <h2 className="font-display font-black text-3xl md:text-4xl text-white mt-2">Plan Smart. Invest Smarter.</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-white/[0.08] backdrop-blur border border-gold-500/30 rounded-xl p-6"
          >
            <tool.icon size={28} className="text-gold-400 mb-3" />
            <h3 className="font-display font-bold text-white text-lg mb-2">{tool.title}</h3>
            <p className="font-mono text-gold-300 text-sm">{tool.result}</p>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-[11px] font-sans text-white/40 mb-6">
        *Illustration at 12% p.a. NOT guaranteed. Actual returns vary with market conditions.
      </p>

      <div className="text-center">
        <Link to="/calculator" className="bg-gradient-cta text-navy-800 font-display font-bold text-sm px-8 py-4 rounded-lg shadow-gold hover:shadow-lg transition-all inline-flex items-center gap-2">
          Open All Calculators <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </section>
);

export default ToolsPreview;
