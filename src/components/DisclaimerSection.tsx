const DisclaimerSection = () => (
  <section style={{ backgroundColor: "#060F24" }} className="py-12">
    <div className="container max-w-4xl">
      <h3
        className="font-display font-bold text-lg mb-4"
        style={{ color: "#C8A94E" }}
      >
        Disclaimer
      </h3>
      <div
        className="w-16 h-[2px] mb-6"
        style={{ backgroundColor: "#C8A94E" }}
      />
      <div className="space-y-4 text-[13px] leading-relaxed" style={{ color: "#d1d5db" }}>
        <p>
          Mutual Fund investments are subject to market risks. Please read all
          scheme-related documents carefully before investing. Past performance
          is not indicative of future results. Investors should consider their
          specific investment requirements, risk tolerance, and financial goals
          before making any investment decisions.
        </p>
        <p>
          NKS Investment Services Private Limited is an AMFI Registered Mutual
          Fund Distributor (ARN-345665). The company acts as a distributor of
          financial products and does not provide investment advisory services.
        </p>
        <p>
          Investments in market-linked products are subject to risks including
          market volatility, liquidity risk, and potential loss of capital.
          Returns are not guaranteed or assured.
        </p>
        <p>
          For products such as Portfolio Management Services (PMS), Alternative
          Investment Funds (AIF), or Specialized Investment Funds (SIF), the
          company facilitates access through registered intermediaries. These
          products may involve higher risk, and investors should carefully read
          all related documents before investing.
        </p>
        <p>
          NKS Investment Services Private Limited does not make any warranties
          or representations, express or implied, on the products distributed.
          The company shall not be liable for any loss or damage arising directly
          or indirectly from the use of information or services provided.
        </p>
        <p>
          Clients are advised to consult a SEBI-registered Investment Adviser
          for personalized investment advice.
        </p>
        <p>
          Client data is handled in accordance with applicable regulatory and
          data protection guidelines. Investments in securities markets are
          subject to market risks. Please read all related documents carefully
          before investing.
        </p>
      </div>
    </div>
  </section>
);

export default DisclaimerSection;
