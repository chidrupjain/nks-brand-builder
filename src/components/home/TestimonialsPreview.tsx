import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  { quote: "NKS helped me plan my daughter's education fund with a systematic SIP approach. Their transparency is commendable.", initials: "R.S.", city: "Jaipur", service: "Mutual Fund SIP", year: "2025" },
  { quote: "The team provided excellent guidance on diversifying my portfolio across mutual funds and insurance. Very professional.", initials: "A.K.", city: "Jaipur", service: "Portfolio Review", year: "2025" },
  { quote: "I was impressed by the clear explanation of commission structures and fund selection. Truly client-first approach.", initials: "P.M.", city: "Jaipur", service: "Goal Planning", year: "2025" },
  { quote: "Nikhil and the team helped me start my first SIP investment. The process was smooth and very well explained.", initials: "S.G.", city: "Jaipur", service: "SIP Investment", year: "2025" },
  { quote: "Their disciplined approach to financial planning gave me confidence in my retirement goals. Highly recommended.", initials: "V.T.", city: "Jodhpur", service: "Retirement Planning", year: "2025" },
  { quote: "NKS made insurance planning simple and stress-free. I now have proper coverage for my family.", initials: "D.P.", city: "Jaipur", service: "Insurance Planning", year: "2025" },
  { quote: "I appreciate the transparency in commission disclosure. It's rare to find such honest financial distributors.", initials: "M.K.", city: "Udaipur", service: "Mutual Fund Distribution", year: "2025" },
  { quote: "The goal-based investing approach helped me structure my investments for my children's future. Very grateful.", initials: "N.J.", city: "Jaipur", service: "Goal-Based Investing", year: "2025" },
  { quote: "Professional, knowledgeable, and always available. NKS is my go-to for all mutual fund investments.", initials: "R.B.", city: "Ajmer", service: "Mutual Fund SIP", year: "2025" },
  { quote: "They explained every detail of the fund selection process. I felt informed and confident in my choices.", initials: "K.S.", city: "Jaipur", service: "Fund Selection", year: "2025" },
  { quote: "Excellent service! The team helped me understand risk profiling and choose funds suited to my needs.", initials: "H.M.", city: "Kota", service: "Risk Assessment", year: "2025" },
  { quote: "NKS Investment Services is building a trustworthy brand. Their systematic approach is truly commendable.", initials: "A.R.", city: "Jaipur", service: "Wealth Building", year: "2025" },
];

const TestimonialsPreview = () => {
  const [isPaused, setIsPaused] = useState(false);
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-gold-50 overflow-hidden">
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
      </div>

      {/* Marquee container */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gold-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gold-50 to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-6"
          style={{
            animation: `marquee 60s linear infinite`,
            animationPlayState: isPaused ? "paused" : "running",
            width: "max-content",
          }}
        >
          {doubled.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[340px] bg-white rounded-xl p-6 border-l-[3px] border-l-gold-500 shadow-navy transition-transform duration-300 hover:scale-[1.02]"
            >
              <p className="font-serif italic text-navy-700 mb-4 leading-relaxed text-sm">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center">
                  <span className="font-display font-bold text-xs text-gold-400">{t.initials}</span>
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-navy-800">{t.initials}</p>
                  <p className="font-sans text-xs text-muted-foreground">{t.city} · {t.service} · {t.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
