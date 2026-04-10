import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import sipImg from "@/assets/services/mutual-funds-page.jpg";
import fdImg from "@/assets/services/insurance-page.jpg";
import planImg from "@/assets/services/goals-page.jpg";
import retireImg from "@/assets/services/pms-page.jpg";
import compoundImg from "@/assets/services/global-page.jpg";
import goalImg from "@/assets/services/estate-page.jpg";

export const blogPosts = [
  {
    slug: "what-is-sip",
    title: "What is SIP & How It Builds Wealth",
    excerpt: "Learn how Systematic Investment Plans help you invest small amounts regularly and build wealth over time through disciplined investing.",
    image: sipImg,
  },
  {
    slug: "mutual-fund-vs-fd",
    title: "Mutual Funds vs Fixed Deposits — Which is Right for You?",
    excerpt: "Understand the key differences between mutual funds and fixed deposits, including risk, returns, and when to choose each.",
    image: fdImg,
  },
  {
    slug: "financial-planning-basics",
    title: "Financial Planning — A Beginner's Guide",
    excerpt: "Discover the steps to start your financial planning journey, set meaningful goals, and take control of your financial future.",
    image: planImg,
  },
  {
    slug: "retirement-planning",
    title: "Why Retirement Planning Should Start Early",
    excerpt: "Explore the importance of early retirement planning and how SIPs and mutual funds can help you build a comfortable retirement corpus.",
    image: retireImg,
  },
  {
    slug: "power-of-compounding",
    title: "The Power of Compounding — How Time Multiplies Wealth",
    excerpt: "Understand how compounding works, why starting early matters, and see simple examples of how time can grow your investments.",
    image: compoundImg,
  },
  {
    slug: "goal-based-investing",
    title: "Goal-Based Investing — Invest with Purpose",
    excerpt: "Learn how mapping your goals to specific investments creates a structured and disciplined approach to wealth creation.",
    image: goalImg,
  },
];

const BlogPage = () => (
  <div>
    <section className="bg-gradient-hero py-20">
      <div className="container text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display font-black text-4xl md:text-5xl text-white mb-4"
        >
          Investor Education
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-sans text-white/70 max-w-2xl mx-auto"
        >
          Simple, beginner-friendly articles to help you make informed financial decisions.
        </motion.p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group block bg-background border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-navy-800 mb-2 group-hover:text-gold-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 font-display font-bold text-sm text-gold-600 group-hover:gap-2 transition-all">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[11px] font-sans text-muted-foreground mt-10">
          For educational purposes only. Not investment advice. Consult a SEBI-registered Investment Adviser for personalised guidance.
        </p>
      </div>
    </section>
  </div>
);

export default BlogPage;
