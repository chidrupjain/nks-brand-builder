import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, PieChart, AlertTriangle, ArrowRight } from "lucide-react";

const topics = [
  {
    icon: TrendingUp,
    title: "What is SIP",
    desc: "Invest small amounts regularly and build wealth over time through disciplined investing.",
  },
  {
    icon: PieChart,
    title: "Benefits of Mutual Funds",
    desc: "Diversification, professional management, and flexibility — all in one investment vehicle.",
  },
  {
    icon: AlertTriangle,
    title: "Risk vs Return",
    desc: "Higher returns come with higher risk — choose wisely based on your financial goals and horizon.",
  },
];

const InvestorEducation = () => (
  <section className="py-20 bg-gradient-hero relative overflow-hidden">
    <div className="absolute inset-0" style={{
      background: "radial-gradient(ellipse 70% 50% at 30% 50%, rgba(200,169,78,0.06) 0%, transparent 70%)",
    }} />
    <div className="container relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="text-gold-400 font-display font-bold text-xs tracking-[0.15em] uppercase">Learn & Grow</span>
        <h2 className="font-display font-black text-3xl md:text-4xl text-white mt-2">Investor Education</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topics.map((topic, i) => (
          <motion.div
            key={topic.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="bg-white/[0.07] backdrop-blur border border-gold-500/20 rounded-xl p-7 hover:border-gold-500/50 hover:bg-white/[0.1] transition-all duration-300"
          >
            <topic.icon size={28} className="text-gold-400 mb-4" />
            <h3 className="font-display font-bold text-white text-lg mb-3">{topic.title}</h3>
            <p className="font-sans text-sm text-white/60 leading-relaxed">{topic.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Explore All Articles CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <Link
          to="/blog"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 font-display font-bold text-sm px-8 py-3.5 rounded-[10px] transition-all duration-300 hover:scale-105 hover:brightness-90"
          style={{ backgroundColor: "#C8A94E", color: "#0f172a" }}
        >
          Explore All Articles <ArrowRight size={16} />
        </Link>
      </motion.div>

      <p className="text-center text-[11px] font-sans text-white/40 mt-8">
        For educational purposes only. Not investment advice. Consult a SEBI-registered Investment Adviser for personalised guidance.
      </p>
    </div>
  </section>
);

export default InvestorEducation;
