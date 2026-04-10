import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "./BlogPage";

const blogContent: Record<string, { title: string; sections: { heading?: string; paragraphs: string[] }[] }> = {
  "what-is-sip": {
    title: "What is SIP & How It Builds Wealth",
    sections: [
      {
        heading: "What is SIP?",
        paragraphs: [
          "SIP stands for Systematic Investment Plan. It is a method of investing a fixed amount regularly — usually monthly — into a mutual fund scheme.",
          "Think of it like a recurring deposit, but instead of a bank, your money goes into mutual funds where it has the potential to grow over time.",
        ],
      },
      {
        heading: "Benefits of SIP Investment",
        paragraphs: [
          "• Rupee Cost Averaging — When markets go down, you buy more units. When markets go up, your existing units grow in value. Over time, this averages out your purchase cost.",
          "• Discipline — SIP automates your investing. You don't need to time the market or make decisions every month.",
          "• Start Small — You can begin with as little as ₹500 per month. This makes mutual fund investing accessible to everyone.",
          "• Flexibility — You can increase, decrease, pause, or stop your SIP at any time without penalties.",
        ],
      },
      {
        heading: "How SIP Helps in Wealth Creation",
        paragraphs: [
          "The real power of SIP comes from compounding. When your returns earn returns, your money grows exponentially over time.",
          "For example, investing ₹5,000 per month for 20 years at an assumed 10% annual return could potentially grow to over ₹38 lakhs — while you would have invested only ₹12 lakhs.",
          "The key is patience and consistency. The longer you stay invested, the more compounding works in your favour.",
        ],
      },
      {
        heading: "The Importance of Long-Term Discipline",
        paragraphs: [
          "Markets will go up and down. This is normal. What matters is staying invested through market cycles.",
          "Stopping your SIP during a downturn means you miss the opportunity to buy units at lower prices. History shows that markets have always recovered over time.",
          "SIP is not about making quick money. It is about building wealth steadily over years and decades.",
        ],
      },
    ],
  },
  "mutual-fund-vs-fd": {
    title: "Mutual Funds vs Fixed Deposits — Which is Right for You?",
    sections: [
      {
        heading: "Understanding the Basics",
        paragraphs: [
          "A Fixed Deposit (FD) is a savings instrument where you deposit money with a bank for a fixed period at a predetermined interest rate.",
          "A Mutual Fund pools money from many investors and invests it in stocks, bonds, or other securities managed by professional fund managers.",
        ],
      },
      {
        heading: "Risk vs Return",
        paragraphs: [
          "• FDs offer fixed returns — typically 5-7% per annum. They are considered low-risk because the principal is generally secure.",
          "• Mutual Funds have the potential for higher returns — equity funds have historically delivered 10-12% over long periods — but they come with market risk. Returns are not guaranteed.",
          "• Debt mutual funds carry lower risk than equity funds but may still fluctuate in value.",
        ],
      },
      {
        heading: "When to Choose Each",
        paragraphs: [
          "Choose FDs when you need capital safety, have a short-term goal (1-2 years), or want guaranteed returns regardless of market conditions.",
          "Consider mutual funds when you have a longer investment horizon (5+ years), can tolerate short-term fluctuations, and want the potential for inflation-beating returns.",
          "Many investors use a combination of both — FDs for emergency funds and short-term needs, and mutual funds for long-term wealth creation.",
        ],
      },
      {
        heading: "Tax Considerations",
        paragraphs: [
          "FD interest is fully taxable as per your income tax slab. TDS is deducted if interest exceeds ₹40,000 per year.",
          "Mutual fund taxation depends on the type of fund and holding period. Equity funds held for more than 1 year qualify for long-term capital gains with a ₹1.25 lakh exemption.",
        ],
      },
    ],
  },
  "financial-planning-basics": {
    title: "Financial Planning — A Beginner's Guide",
    sections: [
      {
        heading: "What is Financial Planning?",
        paragraphs: [
          "Financial planning is the process of setting financial goals and creating a roadmap to achieve them. It involves understanding your income, expenses, savings, and investments.",
          "Good financial planning helps you prepare for life's milestones — buying a home, children's education, retirement, and emergencies.",
        ],
      },
      {
        heading: "Steps to Start Financial Planning",
        paragraphs: [
          "• Assess your current financial situation — List your income, expenses, assets, and liabilities.",
          "• Set clear goals — Define what you want to achieve (e.g., ₹50 lakhs for child's education in 15 years).",
          "• Build an emergency fund — Keep 6-12 months of expenses in a liquid fund or savings account.",
          "• Get adequate insurance — Term life and health insurance protect your family from financial shocks.",
          "• Start investing — Based on your goals, time horizon, and risk profile, choose appropriate investment instruments.",
        ],
      },
      {
        heading: "Importance of Goal Setting",
        paragraphs: [
          "Without clear goals, investing becomes random. Goals give direction to your money.",
          "Each goal has a different timeline and risk tolerance. A retirement goal 25 years away can handle more market volatility than a goal 3 years away.",
          "Writing down your goals and reviewing them annually keeps you on track and motivated.",
        ],
      },
    ],
  },
  "retirement-planning": {
    title: "Why Retirement Planning Should Start Early",
    sections: [
      {
        heading: "Why Retirement Planning Matters",
        paragraphs: [
          "Retirement may seem far away, but it is one of the most important financial goals. You will need income for 20-30 years after you stop working.",
          "Rising healthcare costs, inflation, and changing family structures make it essential to build your own retirement corpus.",
        ],
      },
      {
        heading: "The Advantage of Starting Early",
        paragraphs: [
          "Starting early gives you the biggest advantage — time. With more time, your money has more years to compound and grow.",
          "Example: If you start investing ₹5,000/month at age 25 at an assumed 10% return, by age 60 you could potentially accumulate over ₹1.1 crore. If you start at 35, the same SIP would grow to only about ₹38 lakhs.",
          "Starting 10 years later means you accumulate roughly one-third of the amount. That's the power of time.",
        ],
      },
      {
        heading: "Role of SIP and Mutual Funds in Retirement",
        paragraphs: [
          "SIPs in equity mutual funds are one of the most effective tools for long-term retirement planning.",
          "• They help you invest consistently without worrying about market timing.",
          "• Step-up SIPs — increasing your SIP amount annually — can significantly boost your retirement corpus.",
          "• As you approach retirement, gradually shifting from equity to debt funds helps protect your accumulated wealth.",
        ],
      },
    ],
  },
  "power-of-compounding": {
    title: "The Power of Compounding — How Time Multiplies Wealth",
    sections: [
      {
        heading: "What is Compounding?",
        paragraphs: [
          "Compounding is when your investment returns start earning their own returns. It's like a snowball rolling downhill — it gets bigger and bigger over time.",
          "Albert Einstein reportedly called compound interest the eighth wonder of the world. Whether he said it or not, the principle is powerful.",
        ],
      },
      {
        heading: "How Time Multiplies Wealth",
        paragraphs: [
          "The longer your money stays invested, the more compounding works for you.",
          "Consider this: ₹1 lakh invested at 10% annual return grows to ₹2.59 lakhs in 10 years, ₹6.73 lakhs in 20 years, and ₹17.45 lakhs in 30 years.",
          "Notice how the growth accelerates over time. In the first 10 years, you gained ₹1.59 lakhs. In the last 10 years (year 20 to 30), you gained ₹10.72 lakhs. That's compounding at work.",
        ],
      },
      {
        heading: "Simple Examples",
        paragraphs: [
          "• If you invest ₹10,000 per month via SIP for 30 years at 10% assumed return, your total investment would be ₹36 lakhs. The potential value? Over ₹2.27 crore. That's more than 6x your invested amount.",
          "• Even small amounts matter. ₹1,000 per month for 25 years at 10% could grow to approximately ₹13.4 lakhs — from just ₹3 lakhs invested.",
          "The lesson is clear: start early, stay consistent, and let time do the heavy lifting.",
        ],
      },
    ],
  },
  "goal-based-investing": {
    title: "Goal-Based Investing — Invest with Purpose",
    sections: [
      {
        heading: "What is Goal-Based Investing?",
        paragraphs: [
          "Goal-based investing means linking each investment to a specific financial goal. Instead of investing randomly, you invest with a clear purpose.",
          "Examples of goals: Child's education fund, home down payment, retirement corpus, marriage fund, emergency fund.",
        ],
      },
      {
        heading: "Mapping Goals to Investments",
        paragraphs: [
          "Each goal has three key dimensions: the amount needed, the timeline, and your risk tolerance.",
          "• Short-term goals (1-3 years): Liquid funds, ultra-short duration funds, or FDs.",
          "• Medium-term goals (3-7 years): Hybrid funds, balanced advantage funds, or short-term debt funds.",
          "• Long-term goals (7+ years): Equity mutual funds, diversified funds, or index funds.",
          "By matching the right instrument to each goal, you optimise both risk and potential returns.",
        ],
      },
      {
        heading: "Benefits of Structured Investing",
        paragraphs: [
          "• Clarity — You know exactly why you're investing each rupee.",
          "• Discipline — Having a goal keeps you from withdrawing investments prematurely.",
          "• Progress tracking — You can monitor whether you're on track for each goal.",
          "• Peace of mind — Knowing you have a plan for life's major expenses reduces financial stress.",
          "Goal-based investing transforms investing from a vague activity into a purposeful, structured process.",
        ],
      },
    ],
  },
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const content = slug ? blogContent[slug] : null;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!content || !post) return <Navigate to="/blog" replace />;

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-hero py-16">
        <div className="container max-w-4xl">
          <Link
            to="/blog"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-gold-400 font-display font-semibold text-sm mb-6 hover:text-gold-300 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Articles
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black text-3xl md:text-4xl text-white"
          >
            {content.title}
          </motion.h1>
        </div>
      </section>

      {/* Image */}
      <div className="container max-w-4xl -mt-2">
        <img
          src={post.image}
          alt={content.title}
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container max-w-3xl">
          <article className="prose prose-navy max-w-none">
            {content.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="mb-10"
              >
                {section.heading && (
                  <h2 className="font-display font-bold text-xl text-navy-800 mb-4">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="font-sans text-navy-700 leading-relaxed mb-3 text-[15px]"
                  >
                    {p}
                  </p>
                ))}
              </motion.div>
            ))}
          </article>

          {/* CTA */}
          <div className="mt-12 bg-gold-50 border border-gold-200 rounded-2xl p-8 text-center">
            <p className="font-display font-bold text-lg text-navy-800 mb-2">
              Want help with your financial planning?
            </p>
            <p className="font-sans text-muted-foreground mb-6">
              Get in touch with us today.
            </p>
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-gold-500 text-navy-900 font-display font-bold text-sm px-8 py-3.5 rounded-lg hover:bg-gold-600 hover:scale-105 transition-all duration-300"
            >
              Reach Us <ArrowRight size={16} />
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-[11px] font-sans text-muted-foreground mt-8">
            This article is for educational purposes only. It does not constitute investment advice. Mutual fund investments are subject to market risks. Past performance is not indicative of future returns. Please consult a SEBI-registered Investment Adviser for personalised guidance.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
