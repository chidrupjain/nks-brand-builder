import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Image } from "lucide-react";

const galleryImages = [
  { src: "/placeholder.svg", alt: "Team meeting at NKS Investment Services", caption: "Our team discussing client strategies" },
  { src: "/placeholder.svg", alt: "Client consultation session", caption: "One-on-one financial planning session" },
  { src: "/placeholder.svg", alt: "Office premises in Jaipur", caption: "NKS Investment Services, Jaipur" },
  { src: "/placeholder.svg", alt: "Financial planning workshop", caption: "Investor awareness workshop" },
  { src: "/placeholder.svg", alt: "Award ceremony", caption: "Commitment to excellence" },
  { src: "/placeholder.svg", alt: "Community engagement event", caption: "Community financial literacy drive" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const GalleryPage = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const goNext = () => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  const goPrev = () => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-hero py-20">
        <div className="container text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex bg-gold-500/20 border border-gold-500/40 text-gold-400 font-display font-bold text-[11px] tracking-[0.1em] px-4 py-1.5 rounded-pill mb-4"
          >
            <Image size={14} className="mr-2" /> GALLERY
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-4"
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-xl text-gold-300/80 max-w-2xl mx-auto"
          >
            Moments from our journey — events, workshops, and client engagements.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <button
                  onClick={() => openLightbox(i)}
                  className="group relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-navy hover:shadow-gold hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-800/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="font-display font-bold text-sm text-white">{img.caption}</p>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Upload notice */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gold-50 border border-gold-200 rounded-xl px-6 py-4">
              <Image size={24} className="text-gold-500" />
              <p className="font-sans text-sm text-navy-700">
                More images coming soon. Share your event photos with us at{" "}
                <a href="mailto:nksinvestmentservices@gmail.com" className="text-gold-600 font-bold hover:underline">
                  nksinvestmentservices@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            >
              <X size={20} className="text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className="w-full rounded-xl"
              />
              <p className="text-center font-display font-bold text-white mt-4">
                {galleryImages[lightboxIndex].caption}
              </p>
              <p className="text-center font-sans text-xs text-white/50 mt-1">
                {lightboxIndex + 1} / {galleryImages.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
