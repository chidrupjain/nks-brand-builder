import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import aboutImg from "@/assets/about-office.jpg";

const values = [
  { title: "Client First", desc: "Prioritizing client needs and outcomes" },
  { title: "Integrity", desc: "Acting with transparency and honesty" },
  { title: "Discipline", desc: "Structured and consistent approach" },
  { title: "Continuous Learning", desc: "Evolving with market knowledge" },
  { title: "Responsibility", desc: "Focus on investor protection" },
];

const AboutPage = () => (
  <>
    {/* Hero */}
    <section className="bg-gradient-hero py-20">
      <div className="container text-center">
        <span className="inline-flex bg-gold-500/20 border border-gold-500/40 text-gold-400 font-display font-bold text-[11px] tracking-[0.1em] px-4 py-1.5 rounded-pill mb-4">
          ARN-345665
        </span>
        <h1 className="font-display font-black text-4xl md:text-5xl text-white mb-3">
          About Us
        </h1>
        <p className="font-display font-bold text-lg text-gold-300">
          AMFI Registered Mutual Fund Distributor (ARN-345665)
        </p>
      </div>
    </section>

    {/* Section 1 — About Company */}
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={aboutImg}
              alt="NKS Investment Services office"
              loading="lazy"
              width={640}
              height={640}
              className="rounded-2xl w-full h-auto object-cover shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h2 className="font-display font-black text-3xl md:text-4xl text-navy-800">
              About Us
            </h2>
            <div className="w-16 h-1 bg-gold-500 rounded-full" />
            <p className="font-sans text-navy-700 leading-relaxed">
              NKS Investment Services Private Limited is a client-focused
              financial services firm assisting individuals and families in
              managing, protecting, and growing their financial resources through
              a structured and disciplined approach.
            </p>
            <p className="font-sans text-navy-700 leading-relaxed">
              Operating as an AMFI Registered Mutual Fund Distributor
              (ARN-345665), the firm facilitates access to mutual funds and other
              financial products in alignment with regulatory guidelines.
            </p>
            <p className="font-sans text-navy-700 leading-relaxed">
              Our approach emphasizes goal-based planning, transparency, and
              long-term discipline rather than short-term market movements.
            </p>
            <p className="font-sans text-navy-700 leading-relaxed">
              We work closely with clients to understand their financial
              objectives and assist them in selecting suitable financial
              solutions accordingly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Section 2 — Mission & Vision */}
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-background border border-border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            <h3 className="font-display font-bold text-xl text-navy-800 mb-4">
              Our Mission
            </h3>
            <p className="font-sans text-muted-foreground leading-relaxed mb-5">
              To support individuals and families in making informed financial
              decisions through structured planning, transparency, and
              disciplined investing.
            </p>
            <ul className="space-y-2.5">
              {["Client-first approach", "Focus on long-term financial goals", "Encouraging informed decisions"].map((item) => (
                <li key={item} className="flex items-center gap-2 font-sans text-sm text-navy-700">
                  <CheckCircle size={16} className="text-gold-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative bg-background border border-border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            <h3 className="font-display font-bold text-xl text-navy-800 mb-4">
              Our Vision
            </h3>
            <p className="font-sans text-muted-foreground leading-relaxed mb-5">
              To be recognized as a trusted financial services firm known for
              responsible practices, transparency, and long-term relationships.
            </p>
            <ul className="space-y-2.5">
              {["Promote financial awareness", "Build long-term trust", "Maintain ethical standards"].map((item) => (
                <li key={item} className="flex items-center gap-2 font-sans text-sm text-navy-700">
                  <CheckCircle size={16} className="text-gold-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Section 3 — Core Values */}
    <section className="py-20 bg-background">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-black text-3xl md:text-4xl text-navy-800">
            Our Core Values
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative bg-background border border-border rounded-2xl p-8 md:p-10 overflow-hidden transition-all duration-300 hover:shadow-lg"
        >
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          <div className="space-y-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 group/item cursor-default"
              >
                <div className="w-3 h-3 mt-1.5 shrink-0 rounded-full bg-gold-500 transition-transform duration-300 group-hover/item:translate-x-1" />
                <div>
                  <h4 className="font-display font-bold text-navy-800 transition-colors duration-300 group-hover/item:text-gold-500">
                    {v.title}
                  </h4>
                  <p className="font-sans text-sm text-muted-foreground">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default AboutPage;
