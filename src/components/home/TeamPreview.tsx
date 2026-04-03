import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const team = [
  {
    name: "Nikhil Shah",
    role: "Director",
    details: "EUIN: E658208",
    phone: "+91 96940 67366",
    email: "nikhilshahcfp@gmail.com",
    initials: "NS",
  },
  {
    name: "Karnika Jain",
    role: "Director",
    email: "karnikajain1208@gmail.com",
    initials: "KJ",
  },
];

const TeamPreview = () => (
  <section className="py-20 bg-white">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="text-gold-500 font-display font-bold text-xs tracking-[0.15em] uppercase">Our Team</span>
        <h2 className="font-display font-black text-3xl md:text-4xl text-navy-800 mt-2">Meet the Directors</h2>
      </motion.div>

      <div className="flex flex-col sm:flex-row justify-center gap-8">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-white border border-border rounded-xl p-8 text-center shadow-navy hover:border-gold-500 hover:shadow-gold transition-all max-w-sm w-full"
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-navy-800 ring-4 ring-gold-500/50 flex items-center justify-center mb-4">
              <span className="font-display font-black text-2xl text-gold-400">{member.initials}</span>
            </div>
            <h3 className="font-display font-bold text-xl text-navy-800">{member.name}</h3>
            <p className="font-sans text-sm text-gold-600 font-medium mb-1">{member.role}</p>
            {member.details && <p className="font-mono text-xs text-muted-foreground mb-3">{member.details}</p>}
            <div className="flex justify-center gap-3 mt-3">
              {member.phone && (
                <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="text-gold-500 hover:text-gold-600">
                  <Phone size={16} />
                </a>
              )}
              <a href={`mailto:${member.email}`} className="text-gold-500 hover:text-gold-600">
                <Mail size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-6">
        Also associated: <strong>Pradhuman Kumar Shah</strong> — Senior Associate
      </p>
    </div>
  </section>
);

export default TeamPreview;
