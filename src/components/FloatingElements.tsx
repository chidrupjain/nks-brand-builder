import { useState, useEffect } from "react";
import { ChevronUp, Phone, MessageCircle, Calendar } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const FloatingElements = () => {
  const [showTop, setShowTop] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 left-6 z-50 w-11 h-11 bg-gradient-cta rounded-full flex items-center justify-center shadow-gold hover:scale-110 transition-transform"
          aria-label="Back to top"
        >
          <ChevronUp size={20} className="text-navy-800" />
        </button>
      )}

      {/* Mobile sticky bar */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-50 h-14 bg-navy-800 border-t border-gold-500/30 grid grid-cols-3">
          <a href="tel:+919694067366" className="flex flex-col items-center justify-center text-gold-400 text-[10px] font-display font-bold gap-0.5">
            <Phone size={18} />Call
          </a>
          <a href="https://wa.me/919694067366" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center text-gold-400 text-[10px] font-display font-bold gap-0.5">
            <MessageCircle size={18} />WhatsApp
          </a>
          <a href="/contact" className="flex flex-col items-center justify-center text-gold-400 text-[10px] font-display font-bold gap-0.5">
            <Calendar size={18} />Book
          </a>
        </div>
      )}
    </>
  );
};

export default FloatingElements;
