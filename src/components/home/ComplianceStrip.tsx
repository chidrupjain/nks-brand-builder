import { motion } from "framer-motion";

const ComplianceStrip = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="py-3 border-y border-gold-500/20"
    style={{ backgroundColor: "#060F24" }}
  >
    <div className="container">
      <p className="font-mono text-[11px] text-gold-400 tracking-[0.08em] text-center leading-relaxed">
        AMFI Registered Mutual Fund Distributor &nbsp;|&nbsp; ARN-345665 &nbsp;|&nbsp;
        Not a SEBI Registered Investment Adviser &nbsp;|&nbsp;
        We earn commission from AMCs
      </p>
    </div>
  </motion.section>
);

export default ComplianceStrip;
