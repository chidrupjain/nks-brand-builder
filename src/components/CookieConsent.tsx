import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "nks_cookie_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const handleChoice = (choice: "accepted" | "rejected") => {
    localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-navy-800 border-t border-gold-500/30 shadow-2xl">
      <div className="container py-4 md:py-5 flex flex-col md:flex-row items-start md:items-center gap-4">
        <p className="font-sans text-sm text-white/90 leading-relaxed flex-1">
          We use cookies to understand how visitors use our website.
          By clicking Accept, you agree to our{" "}
          <Link to="/privacy-policy" className="text-gold-400 underline hover:text-gold-300">
            Privacy Policy
          </Link>{" "}
          as required under the Digital Personal Data Protection Act, 2023.
          You may click Reject to decline non-essential cookies.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => handleChoice("rejected")}
            className="px-5 py-2.5 rounded-lg border border-white/30 text-white font-display font-bold text-sm hover:bg-white/10 transition-colors"
          >
            Reject
          </button>
          <button
            onClick={() => handleChoice("accepted")}
            className="px-5 py-2.5 rounded-lg bg-navy-900 text-white font-display font-bold text-sm hover:bg-navy-700 transition-colors"
            style={{ backgroundColor: "#0B1F4A" }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
