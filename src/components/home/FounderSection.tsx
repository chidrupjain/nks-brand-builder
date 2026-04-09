import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Users, Clock, TrendingUp, Award } from "lucide-react";
import founderImg from "@/assets/founder-nikhil.png";

function RollingCounter({
  end,
  suffix = "",
  duration = 2,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = (Date.now() - start) / (duration * 1000);
            if (elapsed >= 1) {
              setCount(end);
              return;
            }
            const eased = 1 - Math.pow(1 - elapsed, 3);
            setCount(Math.floor(end * eased));
            requestAnimationFrame(tick);
          };
          tick();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { icon: Clock, value: 15, suffix: "+", label: "Years of Experience" },
  { icon: Users, value: 500, suffix: "+", label: "Clients Assisted" },
  { icon: TrendingUp, value: 100, suffix: "+", label: "Crore AUM Facilitated" },
  { icon: Award, value: 95, suffix: "%", label: "Client Satisfaction" },
];

const FounderSection = () => (
  <section className="py-24 bg-navy-900 relative overflow-hidden">
    {/* Subtle background pattern */}
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
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
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 flex items-center justify-center">
              <span className="font-mono text-gold-400 text-xs text-center leading-tight">
                ARN
                <br />
                345665
              </span>
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

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(200,169,78,0.15)",
            }}
          >
            <stat.icon size={24} className="text-gold-400 mx-auto mb-3" />
            <p className="font-mono text-3xl md:text-4xl font-bold text-white mb-1">
              <RollingCounter end={stat.value} suffix={stat.suffix} />
            </p>
            <p className="font-sans text-xs text-white/50">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-[11px] font-sans text-white/30 mt-6">
        AUM figures indicative. Past performance is not indicative of future
        returns.
      </p>
    </div>
  </section>
);

export default FounderSection;
