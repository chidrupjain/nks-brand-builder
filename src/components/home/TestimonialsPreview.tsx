import { motion } from "framer-motion";

const testimonials = [
  { quote: "NKS helped me plan my daughter's education fund with a systematic SIP approach. Their transparency is commendable.", initials: "R.S.", city: "Jaipur", service: "Mutual Fund SIP", year: "2025" },
  { quote: "The team provided excellent guidance on diversifying my portfolio across mutual funds and insurance. Very professional.", initials: "A.K.", city: "Jaipur", service: "Portfolio Review", year: "2025" },
  { quote: "I was impressed by the clear explanation of commission structures and fund selection. Truly client-first approach.", initials: "P.M.", city: "Jaipur", service: "Goal Planning", year: "2025" },
];

const TestimonialsPreview = () => (
  <section className="py-20 bg-gold-50">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
        <span className="text-gold-500 font-display font-bold text-xs tracking-[0.15em] uppercase">What Clients Say</span>
        <h2 className="font-display font-black text-3xl md:text-4xl text-navy-800 mt-2">Testimonials</h2>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="bg-navy-50 border border-navy-100 rounded-lg p-4 mb-10 max-w-3xl mx-auto"
      >
        <p className="font-sans text-xs text-navy-700 text-center">
          Client testimonials represent individual experiences. Results are not guaranteed. Mutual fund investments are subject to market risks. These are not investment advice.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-xl p-6 border-l-[3px] border-l-gold-500 shadow-navy"
          >
            <p className="font-serif italic text-navy-700 mb-4 leading-relaxed">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center">
                <span className="font-display font-bold text-xs text-gold-400">{t.initials}</span>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-navy-800">{t.initials}</p>
                <p className="font-sans text-xs text-muted-foreground">{t.city} · {t.service} · {t.year}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsPreview;
