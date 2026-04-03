import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-gradient-hero py-20">
        <div className="container text-center">
          <span className="inline-flex bg-gold-500/20 border border-gold-500/40 text-gold-400 font-display font-bold text-[11px] tracking-[0.1em] px-4 py-1.5 rounded-pill mb-4">Get In Touch</span>
          <h1 className="font-display font-black text-4xl md:text-5xl text-white">Contact Us</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              {submitted ? (
                <div className="bg-white border border-border rounded-xl p-8 text-center shadow-navy">
                  <p className="font-display font-bold text-xl text-navy-800 mb-2">✓ Message Sent!</p>
                  <p className="font-sans text-muted-foreground">We'll respond within 24 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input required placeholder="Name *" className="w-full px-4 py-3 rounded-lg border border-border font-sans text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none" />
                    <input required placeholder="Mobile * (10 digits)" type="tel" pattern="[0-9]{10}" className="w-full px-4 py-3 rounded-lg border border-border font-sans text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none" />
                  </div>
                  <input required placeholder="Email *" type="email" className="w-full px-4 py-3 rounded-lg border border-border font-sans text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none" />
                  <input placeholder="City" className="w-full px-4 py-3 rounded-lg border border-border font-sans text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none" />
                  <select required className="w-full px-4 py-3 rounded-lg border border-border font-sans text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-muted-foreground">
                    <option value="">Subject *</option>
                    <option>Investment Inquiry</option>
                    <option>SIP</option>
                    <option>Insurance</option>
                    <option>Portfolio Review</option>
                    <option>Grievance</option>
                    <option>PMS/AIF</option>
                    <option>Other</option>
                  </select>
                  <textarea placeholder="Message (optional)" rows={4} className="w-full px-4 py-3 rounded-lg border border-border font-sans text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none resize-none" />
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 w-4 h-4 accent-gold-500" required />
                    <span className="font-sans text-xs text-muted-foreground">
                      I consent to being contacted by NKS Investment Services Pvt. Ltd. via call/WhatsApp/email. I accept the Privacy Policy & Terms & Conditions.
                    </span>
                  </label>
                  <button type="submit" disabled={!consent} className="w-full bg-gradient-cta text-navy-800 font-display font-bold text-sm py-4 rounded-lg shadow-gold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all inline-flex items-center justify-center gap-2">
                    Send Message <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="bg-white border border-border border-t-4 border-t-gold-500 rounded-xl p-6 shadow-navy">
                <h3 className="font-display font-bold text-lg text-navy-800 mb-4">NKS INVESTMENT SERVICES PRIVATE LIMITED</h3>
                <ul className="space-y-3 text-sm font-sans text-navy-700">
                  <li className="flex gap-2"><MapPin size={16} className="text-gold-500 shrink-0 mt-0.5" /> Plot No.40, Flat No.201, Prem Nagar Vistar, Durgapura, Jaipur-302018 RJ India</li>
                  <li className="flex gap-2"><Phone size={16} className="text-gold-500 shrink-0" /> <a href="tel:+919694067366" className="hover:text-gold-600">+91 96940 67366</a></li>
                  <li className="flex gap-2"><Mail size={16} className="text-gold-500 shrink-0" /> nksinvestmentservices@gmail.com</li>
                  <li className="flex gap-2"><Mail size={16} className="text-gold-500 shrink-0" /> nikhilshahcfp@gmail.com | karnikajain1208@gmail.com</li>
                  <li className="flex gap-2"><Clock size={16} className="text-gold-500 shrink-0" /> Mon–Fri 9:30AM–6:30PM | Sat 10AM–2PM IST</li>
                </ul>
                <p className="font-mono text-xs text-muted-foreground mt-4">CIN: U66190RJ2025PTC106533 | ARN: 345665 | PAN: AAKCN8571C</p>
              </div>

              <div className="border-l-4 border-negative/60 bg-negative/5 rounded-r-lg p-4">
                <h4 className="font-display font-bold text-sm text-navy-800 mb-2">Grievance Officer</h4>
                <p className="font-sans text-sm text-navy-700">Nikhil Shah | nikhilshahcfp@gmail.com | +91 96940 67366</p>
                <p className="font-sans text-xs text-muted-foreground mt-2">
                  Escalate: <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-gold-600 underline">SEBI SCORES</a> (1800-266-7575) | <a href="https://www.amfiindia.com" target="_blank" rel="noopener noreferrer" className="text-gold-600 underline">AMFI</a> | <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-gold-600 underline">ODR</a>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Google Maps */}
          <div className="mt-12 max-w-5xl mx-auto rounded-xl overflow-hidden shadow-navy">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5!2d75.79!3d26.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDurgapura%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="NKS Investment Services Location"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
