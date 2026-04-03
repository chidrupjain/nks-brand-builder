import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutPage = () => (
  <>
    <section className="bg-gradient-hero py-20">
      <div className="container text-center">
        <span className="inline-flex bg-gold-500/20 border border-gold-500/40 text-gold-400 font-display font-bold text-[11px] tracking-[0.1em] px-4 py-1.5 rounded-pill mb-4">ARN-345665</span>
        <h1 className="font-display font-black text-4xl md:text-5xl text-white">About NKS Investment Services</h1>
      </div>
    </section>

    <section className="py-16">
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none font-sans text-navy-700 space-y-6">
          <p>NKS Investment Services Private Limited is an AMFI-registered mutual fund distributor (ARN-345665) headquartered in Jaipur, Rajasthan. Incorporated on 16th September 2025, the company was founded with a clear vision: to make quality financial guidance accessible to every Indian family.</p>
          <p>We believe that wealth creation is not about timing the market — it's about time in the market. Our approach is rooted in disciplined, goal-based investing that aligns with each client's unique life objectives, risk appetite, and financial timeline.</p>
          <p>Under the leadership of Directors Nikhil Shah and Karnika Jain, NKS offers a comprehensive suite of financial distribution services including Mutual Funds, General Insurance, Life Insurance, PMS, AIF, SIF, GIFT City investments, estate planning, and loan facilitation.</p>
          <p>Every recommendation we make is guided by thorough client profiling, transparent fee disclosure, and a commitment to long-term relationships over short-term gains. We earn trail commission from Asset Management Companies — never from our clients directly.</p>
          <p>Our mission is simple: simplify financial decisions and guide every client toward financial freedom, one goal at a time.</p>
        </motion.div>

        {/* Official Details Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-12 bg-white border border-border border-t-4 border-t-gold-500 rounded-xl p-8 shadow-navy"
        >
          <h3 className="font-display font-bold text-xl text-navy-800 mb-4">Official Company Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-sm text-navy-700">
            <p><strong>Company:</strong> NKS Investment Services Private Limited</p>
            <p><strong>CIN:</strong> U66190RJ2025PTC106533</p>
            <p><strong>PAN:</strong> AAKCN8571C</p>
            <p><strong>TAN:</strong> JPRN10231E</p>
            <p><strong>Incorporated:</strong> 16-Sep-2025</p>
            <p><strong>ARN:</strong> 345665 (Valid: 17-Nov-2025 to 16-Nov-2028)</p>
            <p><strong>EUIN:</strong> E658208 (Valid: 17-Nov-2025 to 06-Jun-2028)</p>
            <p><strong>Address:</strong> Plot No.40, Flat 201, Prem Nagar Vistar, Durgapura, Jaipur-302018 RJ</p>
          </div>
          <div className="mt-4 flex gap-4 text-sm font-sans">
            <span className="text-positive">✅ AMFI Registered MFD</span>
            <span className="text-negative">❌ NOT SEBI-Registered Investment Adviser</span>
          </div>
        </motion.div>

        {/* Compliance Declaration */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-8 border-2 border-gold-500/40 rounded-xl p-6"
        >
          <p className="font-sans text-sm text-navy-700 leading-relaxed">
            NKS Investment Services Pvt. Ltd. (ARN-345665) is an AMFI-registered Mutual Fund Distributor. The company is NOT registered as a SEBI Investment Adviser. Services provided are limited to distribution only. Trail commission is earned from Asset Management Companies. Commission details are available on request.
          </p>
        </motion.div>
      </div>
    </section>
  </>
);

export default AboutPage;
