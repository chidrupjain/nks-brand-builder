import { useIsMobile } from "@/hooks/use-mobile";

const ComplianceStrip = () => {
  const isMobile = useIsMobile();

  return (
    <div className="sticky top-0 z-[200] h-9 bg-navy-900 border-b border-gold-500/30 flex items-center overflow-hidden">
      {isMobile ? (
        <div className="animate-marquee whitespace-nowrap font-mono text-[11px] text-gold-500 tracking-[0.12em]">
          ARN-345665 • NOT A SEBI-RIA • Mutual fund investments are subject to market risks
        </div>
      ) : (
        <div className="container flex items-center justify-between">
          <span className="font-mono text-[11px] text-gold-500 tracking-[0.12em]">
            AMFI REGISTERED MUTUAL FUND DISTRIBUTOR &nbsp;|&nbsp; ARN-345665 &nbsp;|&nbsp; VALID: 17-NOV-2025 TO 16-NOV-2028
          </span>
          <span className="font-sans text-[11px] text-white/70">
            NOT A SEBI-REGISTERED INVESTMENT ADVISER &nbsp;|&nbsp; Mutual fund investments are subject to market risks
          </span>
        </div>
      )}
    </div>
  );
};

export default ComplianceStrip;
