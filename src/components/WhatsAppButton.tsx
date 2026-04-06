import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "919694067366";
  const message = "Hello, I am interested in mutual fund investments. Please guide me.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-24 right-6 z-50 flex items-center gap-2 md:bottom-8">
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="rounded-lg bg-foreground px-3 py-1.5 text-xs font-semibold text-background shadow-lg whitespace-nowrap"
          >
            Chat with us
          </motion.span>
        )}
      </AnimatePresence>

      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold-500 shadow-lg"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle size={26} className="text-white" />
        <span className="absolute inset-0 animate-ping rounded-full opacity-25" style={{ backgroundColor: "#25D366" }} />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
