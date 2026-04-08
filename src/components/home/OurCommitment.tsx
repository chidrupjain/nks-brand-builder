import { motion } from "framer-motion";
import {
  MessageSquare,
  Eye,
  ShieldCheck,
  Target,
  Lightbulb,
  Handshake,
} from "lucide-react";
import commitmentImg from "@/assets/commitment.jpg";

const commitments = [
  {
    icon: MessageSquare,
    title: "Clarity in Communication",
    desc: "We aim to simplify financial concepts and keep you informed at every stage.",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    desc: "Clear disclosures on products, commissions, and structures.",
  },
  {
    icon: ShieldCheck,
    title: "No Misrepresentation",
    desc: "We facilitate access to suitable products without misleading claims.",
  },
  {
    icon: Target,
    title: "Goal-Oriented Approach",
    desc: "Focus on aligning investments with long-term financial objectives.",
  },
  {
    icon: Lightbulb,
    title: "Informed Decision Support",
    desc: "Encouraging awareness of risks, features, and suitability.",
  },
  {
    icon: Handshake,
    title: "Long-Term Relationship Focus",
    desc: "Building trust through consistency and responsible engagement.",
  },
];

const OurCommitment = () => (
  <section className="py-20 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-gold-500 font-display font-bold text-xs tracking-[0.15em] uppercase">
          NKS Investment Services
        </span>
        <h2 className="font-display font-black text-3xl md:text-4xl text-navy-800 mt-2">
          Our Commitment to You
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left — Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={commitmentImg}
            alt="Professional financial consultation"
            loading="lazy"
            width={640}
            height={800}
            className="rounded-2xl w-full h-auto object-cover shadow-lg"
          />
        </motion.div>

        {/* Right — Points */}
        <div className="space-y-6">
          {commitments.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 group cursor-default"
            >
              <div className="w-10 h-10 shrink-0 rounded-lg bg-muted/60 border border-border flex items-center justify-center">
                <item.icon size={18} className="text-gold-500" />
              </div>
              <div>
                <h3 className="font-display font-bold text-navy-800 transition-colors duration-300 group-hover:text-gold-500">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground mt-0.5">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default OurCommitment;
