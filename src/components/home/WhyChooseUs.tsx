import { motion } from "framer-motion";

const leftPoints = [
  "Proactive Communication & Updates",
  "Disciplined Investment Approach",
  "Long-Term Relationship Focus",
  "Structured Investment Support",
];

const rightPoints = [
  "Goal-Oriented Investment Approach",
  "Transparent Process",
  "Client-Centric Approach",
  "Continuous Learning & Awareness",
];

const WhyChooseUs = () => (
  <section className="py-20 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display font-black text-3xl md:text-4xl text-navy-800">
          Why Choose Us
        </h2>
        <p className="font-sans text-muted-foreground mt-3 max-w-lg mx-auto">
          A disciplined, transparent and client-focused approach.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center max-w-5xl mx-auto">
        {/* Left points */}
        <div className="space-y-6">
          {leftPoints.map((point, i) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-right group cursor-default"
            >
              <p className="font-display font-semibold text-navy-800 transition-colors duration-300 group-hover:text-gold-500">
                {point}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Center trust box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-48 h-48 rounded-2xl bg-muted/50 border border-border flex flex-col items-center justify-center shadow-sm">
            <span className="font-mono text-5xl font-bold text-gold-500">
              15+
            </span>
            <span className="font-sans text-sm text-muted-foreground mt-2 text-center leading-tight">
              Years of
              <br />
              Experience
            </span>
          </div>
        </motion.div>

        {/* Right points */}
        <div className="space-y-6">
          {rightPoints.map((point, i) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-left group cursor-default"
            >
              <p className="font-display font-semibold text-navy-800 transition-colors duration-300 group-hover:text-gold-500">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
