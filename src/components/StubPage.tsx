import { forwardRef } from "react";
import { Link } from "react-router-dom";

interface StubPageProps {
  title: string;
  badge?: string;
  description?: string;
}

const StubPage = forwardRef<HTMLDivElement, StubPageProps>(({ title, badge = "ARN-345665", description = "This page is under development. Please check back soon." }, ref) => (
  <div ref={ref}>
  <>
    <section className="bg-gradient-hero py-20">
      <div className="container text-center">
        <span className="inline-flex bg-gold-500/20 border border-gold-500/40 text-gold-400 font-display font-bold text-[11px] tracking-[0.1em] px-4 py-1.5 rounded-pill mb-4">{badge}</span>
        <h1 className="font-display font-black text-4xl md:text-5xl text-white">{title}</h1>
      </div>
    </section>
    <section className="py-16">
      <div className="container max-w-3xl text-center">
        <p className="font-sans text-lg text-muted-foreground mb-8">{description}</p>
        <Link to="/" className="bg-gradient-cta text-navy-800 font-display font-bold text-sm px-8 py-4 rounded-lg shadow-gold hover:shadow-lg transition-all">
          Back to Home
        </Link>

        <div className="mt-12 border-l-4 border-negative/60 bg-negative/5 rounded-r-lg p-4 text-left">
          <p className="font-sans text-sm text-navy-700">
            Mutual fund investments are subject to market risks. Read all scheme documents carefully. Past performance ≠ future results. ARN-345665 | NOT a SEBI-Registered Investment Adviser. Distribution commissions earned from AMCs.
          </p>
        </div>
      </div>
    </section>
  </div>
));

StubPage.displayName = "StubPage";

export default StubPage;
