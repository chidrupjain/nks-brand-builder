import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BarChart3, Shield, Target, Briefcase, Globe, ScrollText } from "lucide-react";

import mutualFundsImg from "@/assets/services/mutual-funds.jpg";
import insuranceImg from "@/assets/services/insurance.jpg";
import goalsImg from "@/assets/services/goals.jpg";
import advancedImg from "@/assets/services/advanced.jpg";
import globalImg from "@/assets/services/global.jpg";
import estateImg from "@/assets/services/estate.jpg";

const services = [
  {
    icon: BarChart3,
    title: "Mutual Fund Investments",
    image: mutualFundsImg,
    href: "/services",
  },
  {
    icon: Shield,
    title: "Insurance & Risk Protection",
    image: insuranceImg,
    href: "/services",
  },
  {
    icon: Target,
    title: "Goal-Based Investing",
    image: goalsImg,
    href: "/services",
  },
  {
    icon: Briefcase,
    title: "PMS, AIF & SIF",
    image: advancedImg,
    href: "/services",
  },
  {
    icon: Globe,
    title: "Global Investments",
    image: globalImg,
    href: "/services",
  },
  {
    icon: ScrollText,
    title: "Estate Planning",
    image: estateImg,
    href: "/services",
  },
];

const ServicesGrid = () => (
  <section className="py-20 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-4"
      >
        <span className="text-gold-500 font-display font-bold text-xs tracking-[0.15em] uppercase">
          What We Offer
        </span>
        <h2 className="font-display font-black text-3xl md:text-4xl text-navy-800 mt-2">
          Our Services
        </h2>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center font-sans text-muted-foreground max-w-2xl mx-auto mb-14"
      >
        Explore financial solutions designed for long-term growth.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <Link
              to={svc.href}
              className="group relative block h-64 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-0"
                style={{ backgroundImage: `url(${svc.image})` }}
              />
              {/* Dark overlay (default) */}
              <div className="absolute inset-0 bg-navy-900/70 transition-opacity duration-500 group-hover:opacity-0" />
              {/* White overlay (hover) */}
              <div className="absolute inset-0 bg-background opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-border rounded-2xl" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4 px-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-500 bg-white group-hover:bg-navy-800">
                  <svc.icon
                    size={28}
                    className="transition-colors duration-500 text-navy-800 group-hover:text-white"
                  />
                </div>
                {/* Title */}
                <h3 className="font-display font-bold text-lg text-center transition-colors duration-500 text-white group-hover:text-navy-800">
                  {svc.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
