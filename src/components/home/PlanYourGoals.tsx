import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import childImg from "@/assets/goals/child-planning.jpg";
import retirementImg from "@/assets/goals/retirement.jpg";

const calculators = [
  { label: "SIP Calculator", href: "/tools" },
  { label: "Lumpsum Calculator", href: "/tools" },
  { label: "Step-Up SIP", href: "/tools" },
  { label: "Goal Planner", href: "/tools" },
  { label: "Retirement Planner", href: "/tools" },
];

interface GoalCardProps {
  image: string;
  title: string;
  desc: string;
  cta: string;
}

const GoalCard = ({ image, title, desc, cta }: GoalCardProps) => (
  <div className="relative rounded-[20px] overflow-hidden h-80 group">
    <div
      className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-40 group-hover:opacity-55"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/40" />
    <div className="relative z-10 flex flex-col justify-end h-full p-6">
      <h3 className="font-display font-bold text-xl text-navy-800 mb-2">
        {title}
      </h3>
      <p className="font-sans text-sm text-muted-foreground mb-4">{desc}</p>
      <Link
        to="/tools"
        className="inline-flex items-center gap-2 font-display font-bold text-sm text-navy-800 bg-gold-100 hover:bg-gold-300 px-5 py-2.5 rounded-lg transition-colors w-fit"
      >
        {cta} <ArrowRight size={14} />
      </Link>
    </div>
  </div>
);

const PlanYourGoals = () => (
  <section className="py-20 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display font-black text-3xl md:text-4xl text-navy-800">
          Plan Your Goals
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Left — Child Planning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GoalCard
            image={childImg}
            title="Child Future Planning"
            desc="Plan systematically for your child's future with goal-based strategies."
            cta="Plan Your Goal"
          />
        </motion.div>

        {/* Center — Calculators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-3"
        >
          {calculators.map((calc) => (
            <Link
              key={calc.label}
              to={calc.href}
              className="group flex items-center justify-between px-5 py-3.5 rounded-full bg-muted/50 border border-border font-display font-semibold text-sm text-navy-800 transition-all duration-300 hover:bg-navy-800 hover:text-white hover:border-navy-800"
            >
              {calc.label}
              <ArrowRight
                size={14}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </Link>
          ))}

          <Link
            to="/tools"
            className="mt-3 flex items-center justify-center gap-2 px-5 py-3 rounded-full border-2 border-navy-800 font-display font-bold text-sm text-navy-800 transition-all duration-300 hover:bg-navy-800 hover:text-white"
          >
            View All Calculators <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Right — Retirement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <GoalCard
            image={retirementImg}
            title="Retirement Planning"
            desc="Build a structured plan to support long-term financial independence."
            cta="Explore Options"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default PlanYourGoals;
