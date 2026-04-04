import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react";

const regulatoryLinks = [
  { name: "SEBI SCORES", url: "https://scores.sebi.gov.in/", desc: "File complaints with SEBI online" },
  { name: "SMART ODR", url: "https://smartodr.in", desc: "Online Dispute Resolution" },
  { name: "Verify Our ARN", url: "https://www.amfiindia.com/check-arn", desc: "Verify our AMFI registration" },
  { name: "SEBI Website", url: "https://www.sebi.gov.in", desc: "Securities and Exchange Board of India" },
  { name: "AMFI Website", url: "https://www.amfiindia.com", desc: "Association of Mutual Funds in India" },
];

const GrievancePage = () => (
  <div>
    <section className="bg-gradient-hero py-20">
      <div className="container text-center">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex bg-gold-500/20 border border-gold-500/40 text-gold-400 font-display font-bold text-[11px] tracking-[0.1em] px-4 py-1.5 rounded-pill mb-4">
          INVESTOR PROTECTION
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display font-black text-4xl md:text-5xl text-white mb-3">
          Grievance Redressal
        </motion.h1>
        <p className="font-sans text-white/70 max-w-2xl mx-auto">
          NKS Investment Services Private Limited<br />AMFI Registered Mutual Fund Distributor (ARN-345665)
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container max-w-4xl space-y-12">
        {/* Section 1 */}
        <div>
          <h2 className="font-display font-bold text-2xl text-navy-800 mb-4">Our Grievance Redressal Officer</h2>
          <p className="font-sans text-navy-700 mb-6">If you have any complaint or concern, please contact our Grievance Redressal Officer:</p>
          <div className="bg-white border border-border rounded-xl p-6 shadow-navy space-y-3">
            <p className="font-sans text-sm text-navy-700"><strong>Name:</strong> Nikhil Shah</p>
            <p className="font-sans text-sm text-navy-700"><strong>Designation:</strong> Director / Grievance Redressal Officer</p>
            <p className="font-sans text-sm text-navy-700 flex items-center gap-2"><Mail size={14} className="text-gold-500" /> <a href="mailto:nksinvestmentservices@gmail.com" className="text-gold-600 hover:underline">nksinvestmentservices@gmail.com</a></p>
            <p className="font-sans text-sm text-navy-700 flex items-center gap-2"><Phone size={14} className="text-gold-500" /> <a href="tel:+919694067366" className="text-gold-600 hover:underline">+91 96940 67366</a></p>
            <p className="font-sans text-sm text-navy-700 flex items-start gap-2"><MapPin size={14} className="text-gold-500 mt-0.5 shrink-0" /> Plot No.40, Flat No.201, Prem Nagar Vistar, Durgapura, Jaipur - 302018, Rajasthan</p>
            <p className="font-sans text-sm text-navy-700 flex items-center gap-2"><Clock size={14} className="text-gold-500" /> Monday to Friday, 9:30 AM to 6:30 PM | Saturday, 10:00 AM to 2:00 PM</p>
          </div>
          <div className="mt-4 bg-gold-50 border border-gold-200/50 rounded-lg p-4">
            <p className="font-sans text-sm text-navy-700">We will acknowledge your complaint within <strong>3 working days</strong>. We aim to resolve all complaints within <strong>15 working days</strong>.</p>
          </div>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="font-display font-bold text-2xl text-navy-800 mb-4">If Your Complaint Is Not Resolved</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-navy-800 text-gold-400 flex items-center justify-center font-display font-bold text-sm shrink-0">1</span>
              <p className="font-sans text-sm text-navy-700 pt-1">Write again to our Grievance Redressal Officer with your original complaint reference.</p>
            </div>
            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-navy-800 text-gold-400 flex items-center justify-center font-display font-bold text-sm shrink-0">2</span>
              <p className="font-sans text-sm text-navy-700 pt-1">Register on SEBI SCORES Portal (free, online): <a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:underline inline-flex items-center gap-1">https://scores.sebi.gov.in/ <ExternalLink size={12} /></a></p>
            </div>
            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-navy-800 text-gold-400 flex items-center justify-center font-display font-bold text-sm shrink-0">3</span>
              <p className="font-sans text-sm text-navy-700 pt-1">Use SMART ODR for Online Dispute Resolution (free): <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:underline inline-flex items-center gap-1">https://smartodr.in <ExternalLink size={12} /></a></p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="font-display font-bold text-2xl text-navy-800 mb-4">Important Regulatory Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {regulatoryLinks.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white border border-border rounded-lg p-4 hover:border-gold-400 hover:shadow-navy transition-all group">
                <ExternalLink size={16} className="text-gold-500 shrink-0" />
                <div>
                  <p className="font-display font-bold text-sm text-navy-800 group-hover:text-gold-600 transition-colors">{link.name}</p>
                  <p className="font-sans text-xs text-muted-foreground">{link.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default GrievancePage;
