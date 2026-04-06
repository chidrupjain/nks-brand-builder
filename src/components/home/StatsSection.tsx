import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Briefcase, Users, CalendarDays, Layers } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "AUM Facilitated", value: "XX", suffix: " Cr+", prefix: "₹" },
  { icon: Users, label: "Happy Clients", value: "100", suffix: "+" },
  { icon: CalendarDays, label: "Established", value: "Sep 2025", isText: true },
  { icon: Layers, label: "Service Categories", value: "6", suffix: "" },
];

function CountUp({ end, duration = 1.5 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = Date.now();
        const tick = () => {
          const elapsed = (Date.now() - start) / (duration * 1000);
          if (elapsed >= 1) { setCount(end); return; }
          setCount(Math.floor(end * elapsed));
          requestAnimationFrame(tick);
        };
        tick();
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
}

const StatsSection = () => (
  <section className="py-16 bg-white">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-border rounded-xl p-6 text-center shadow-navy hover:border-gold-500 hover:shadow-gold hover:-translate-y-1 transition-all duration-300"
          >
            <stat.icon size={32} className="text-gold-500 mx-auto mb-3" />
            <p className="font-mono text-3xl font-bold text-navy-800">
              {stat.isText ? stat.value : (
                <>{stat.prefix}<CountUp end={parseInt(stat.value)} />{stat.suffix}</>
              )}
            </p>
            <p className="font-sans text-sm text-muted-foreground mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
      <p className="text-center text-[11px] font-sans text-muted-foreground mt-4">
        AUM figures indicative. Past performance is not indicative of future returns.
      </p>
    </div>
  </section>
);

export default StatsSection;
