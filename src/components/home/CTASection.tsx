import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-gradient-cta relative">
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="font-display font-black text-3xl md:text-4xl text-navy-800">
            Ready to Start Your Wealth Journey?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-navy-lg p-8 max-w-2xl mx-auto"
        >
          {submitted ? (
            <div className="text-center py-8">
              <p className="font-display font-bold text-xl text-navy-800 mb-2">✓ Thank You!</p>
              <p className="font-sans text-muted-foreground">We'll respond within 24 business hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required placeholder="Name *" className="w-full px-4 py-3 rounded-lg border border-border font-sans text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors" />
                <input required placeholder="Mobile *" type="tel" pattern="[0-9]{10}" className="w-full px-4 py-3 rounded-lg border border-border font-sans text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required placeholder="Email *" type="email" className="w-full px-4 py-3 rounded-lg border border-border font-sans text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors" />
                <input placeholder="City" className="w-full px-4 py-3 rounded-lg border border-border font-sans text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors" />
              </div>
              <select className="w-full px-4 py-3 rounded-lg border border-border font-sans text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors text-muted-foreground">
                <option value="">Select Interest</option>
                <option>Mutual Fund SIP</option>
                <option>Insurance</option>
                <option>Goal Planning</option>
                <option>PMS / AIF</option>
                <option>Portfolio Review</option>
                <option>Other</option>
              </select>
              <textarea placeholder="Message (optional)" rows={3} className="w-full px-4 py-3 rounded-lg border border-border font-sans text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors resize-none" />

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-gold-500"
                  required
                />
                <span className="font-sans text-xs text-muted-foreground leading-relaxed">
                  I consent to NKS Investment Services Pvt. Ltd. contacting me via call/WhatsApp/email.
                  I have read and accept the Privacy Policy and Terms & Conditions.
                </span>
              </label>

              <button
                type="submit"
                disabled={!consent}
                className="w-full bg-navy-800 text-white font-display font-bold text-sm py-4 rounded-lg hover:bg-navy-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all inline-flex items-center justify-center gap-2"
              >
                Get My Free Consultation <ArrowRight size={16} />
              </button>

              <p className="text-[11px] font-sans text-muted-foreground text-center">
                Not an offer to buy/sell securities. MF investments subject to market risks.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
