import { motion } from "motion/react";
import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const albums = [
  {
    title: "Ethereal Frequencies",
    year: "2026",
    type: "EP",
    imageUrl: "https://images.unsplash.com/photo-1761144799388-eee92f0b5dcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG11c2ljaWFuJTIwc2luZ2VyJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzc2ODQ5MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "A journey through ambient textures and vocal experimentation",
  },
  {
    title: "Nocturne Sessions",
    year: "2025",
    type: "Album",
    imageUrl: "https://images.unsplash.com/photo-1563174558-ef3d732293e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxncmFuZCUyMHBpYW5vJTIwY29uY2VydCUyMGhhbGwlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3Njg0OTMyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Piano-driven narratives exploring shadow and light",
  },
  {
    title: "Digital Reverie",
    year: "2025",
    type: "Single",
    imageUrl: "https://images.unsplash.com/photo-1540908724956-3d5b8d9d6095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMG11c2ljaWFuJTIwc2luZ2VyJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzc2ODQ5MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Electronic fusion with organic vocal layers",
  },
  {
    title: "The Quiet Storm",
    year: "2024",
    type: "Album",
    imageUrl: "https://images.unsplash.com/photo-1660883292873-6582b1ad9912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxncmFuZCUyMHBpYW5vJTIwY29uY2VydCUyMGhhbGwlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3Njg0OTMyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Intimate performances captured in raw emotion",
  },
  {
    title: "Synthesis",
    year: "2024",
    type: "EP",
    imageUrl: "https://images.unsplash.com/photo-1773687064765-84ddf838b605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMG11c2ljaWFuJTIwc2luZ2VyJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzc2ODQ5MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Where classical meets contemporary production",
  },
];

export default function Soundscape() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const togglePlay = (index: number) => {
    setPlayingIndex(playingIndex === index ? null : index);
  };

  return (
    <section id="works" className="min-h-screen bg-gradient-to-b from-[#121212] to-[#0a0a0a] py-32">
      <div className="max-w-[1800px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-6xl text-white/90 mb-6 tracking-tight">
            The Soundscape
          </h2>
          <p className="text-white/40 text-lg tracking-wide">
            A curated collection of sonic explorations
          </p>
        </motion.div>

        {/* Horizontal Scroll Gallery */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {albums.map((album, index) => (
            <motion.div
              key={album.title}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-shrink-0 w-[400px] snap-start group"
            >
              <div className="relative h-[550px] rounded-xl overflow-hidden">
                {/* Album Image */}
                <ImageWithFallback
                  src={album.imageUrl}
                  alt={album.title}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Play Button with Wave Animation */}
                <motion.button
                  onClick={() => togglePlay(index)}
                  className="absolute top-8 right-8 w-16 h-16 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center z-10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {playingIndex === index ? (
                    <Pause className="w-6 h-6 text-white" fill="white" />
                  ) : (
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                  )}
                </motion.button>

                {/* Wave Animation when Playing */}
                {playingIndex === index && (
                  <div className="absolute top-8 right-8 w-16 h-16 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 rounded-full border-2 border-white/30"
                        initial={{ scale: 1, opacity: 0.6 }}
                        animate={{
                          scale: [1, 2.5],
                          opacity: [0.6, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.6,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-white/60 text-sm tracking-[0.2em] uppercase">
                        {album.year}
                      </span>
                      <span className="w-1 h-1 bg-white/40 rounded-full" />
                      <span className="text-white/60 text-sm tracking-[0.2em] uppercase">
                        {album.type}
                      </span>
                    </div>
                    <h3 className="text-5xl text-white mb-4 tracking-tight">
                      {album.title}
                    </h3>
                    <p className="text-white/60 text-lg max-w-md leading-relaxed">
                      {album.description}
                    </p>

                    {/* Progress Bar */}
                    <motion.div
                      className="mt-8 h-px bg-white/10 rounded-full overflow-hidden"
                      initial={{ width: "0%" }}
                      animate={{
                        width: playingIndex === index ? "100%" : "0%",
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {playingIndex === index && (
                        <motion.div
                          className="h-full bg-white/60"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      )}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Glassmorphism Hover Effect */}
                <motion.div
                  className="absolute inset-0 backdrop-blur-sm bg-white/0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12 text-white/30 text-sm tracking-[0.2em] uppercase"
        >
          Scroll horizontally to explore →
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
