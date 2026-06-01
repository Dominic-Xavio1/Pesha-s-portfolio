import { motion } from "motion/react";
import { Play, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const albums = [
  {
    title: "Agenda by Bobson",
    year: "2026",
    type: "EP",
    // imageUrl: "image7.jpg",
    description: "Agenda is the song I produced and mastered.",
    mediaUrl: "/videos/agenda.mp4",
    mediaType: "video",
    linkUrl: "https://youtu.be/38WMckJf2IM?si=k0InBat4N285PI-Z",
    linkLabel: "Watch on YouTube",
  },
  {
    title: "My Boo by Levy",
    year: "2026",
    type: "EP",
    // imageUrl: "image7.jpg",
    description: "A journey through ambient textures and vocal experimentation",
    mediaUrl: "/videos/myboo.mp4",
    mediaType: "video",
    linkUrl: "https://youtu.be/SCOKyIBMPdE?si=KiAtnBUUkGNANu0L",
    linkLabel: "Watch on YouTube",
  },
  {
    title: "Fillet by Pesha ft Tito",
    year: "2024",
    type: "EP",
    mediaUrl: "/videos/fillet.mp4",
    mediaType: "video",
     linkUrl: "https://youtu.be/PXKR58Bke6o?list=RDPXKR58Bke6o",
    linkLabel: "Watch on YouTube",
  },
  
  {
    title: "Kwibuka by Demo",
    year: "2024",
    type: "EP",
    mediaUrl: "/videos/video5.mp4",
    mediaType: "video",
     linkUrl: "https://youtu.be/PXKR58Bke6o?list=RDPXKR58Bke6o",
    linkLabel: "Watch on YouTube",
  },
  {
    title: "performing in the Village Time",
    year: "2025",
    type: "Album",
    // imageUrl: "logo1.jpg",
    // description: "Piano-driven narratives exploring shadow and light",
    mediaUrl: "/videos/video2.mp4",
    mediaType: "video",
  },
  {
    title: "Village Time Performance",
    year: "2025",
    type: "Single",
    mediaUrl: "/videos/video1.mp4",
    mediaType: "video",
  },
   {
    title: "Ethereal Frequencies",
    year: "2026",
    type: "EP",
    imageUrl: "logo1.jpg",
    description: "A journey through ambient textures and vocal experimentation",
    mediaUrl: "/videos/audio.mp3",
    mediaType: "audio",
  },
];

export default function Soundscape() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const mediaRefs = useRef<(HTMLAudioElement | HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    return () => {
      // Cleanup: Stop all playing media on unmount
      mediaRefs.current.forEach((media) => {
        if (media) {
          media.pause();
          media.currentTime = 0;
        }
      });
    };
  }, []);

  const togglePlay = (index: number) => {
    const wasPlaying = playingIndex === index;

    // Stop previously playing media
    if (playingIndex !== null && mediaRefs.current[playingIndex]) {
      mediaRefs.current[playingIndex]?.pause();
      mediaRefs.current[playingIndex]!.currentTime = 0;
    }

    // Toggle current media
    if (!wasPlaying && mediaRefs.current[index]) {
      mediaRefs.current[index]?.play().catch((err) => {
        console.error("Playback error:", err);
      });
      setPlayingIndex(index);
    } else {
      setPlayingIndex(null);
    }
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
                {/* Media Element - Video or Audio */}
                {album.mediaType === "video" ? (
                  <video
                    ref={(el) => {
                      mediaRefs.current[index] = el;
                    }}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    poster={album.imageUrl}
                    controls={false}
                    onEnded={() => setPlayingIndex(null)}
                  >
                    <source src={album.mediaUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <>
                    <audio
                      ref={(el) => {
                        mediaRefs.current[index] = el;
                      }}
                      className="hidden"
                      controls={false}
                      onEnded={() => setPlayingIndex(null)}
                    >
                      <source src={album.mediaUrl} type="audio/mpeg" />
                      Your browser does not support the audio tag.
                    </audio>
                    {/* Album Image for Audio Albums */}
                    <ImageWithFallback
                      src={album.imageUrl}
                      alt={album.title}
                      className="absolute inset-0 w-full h-full object-cover z-0"
                    />
                  </>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-[1]" />

                {/* Play Button with Wave Animation */}
                <motion.button
                  onClick={() => togglePlay(index)}
                  className="absolute top-8 right-8 w-16 h-16 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center z-20"
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
                  <div className="absolute top-8 right-8 w-16 h-16 pointer-events-none z-20">
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
                <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-4 ">
                      <span className="text-white/60 text-md">
                        {album.title}
                      </span>
                    </div>
                    {album.linkUrl ? (
                      <div className="mt-6">
                        <a
                          href={album.linkUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20 hover:text-white/90"
                        >
                          {album.linkLabel ?? "View Project"}
                        </a>
                      </div>
                    ) : (
                      <p className="text-white/50 text-sm max-w-md leading-relaxed">
                        {album.description}
                      </p>
                    )}

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
                  className="absolute inset-0 backdrop-blur-sm bg-white/0 pointer-events-none z-20"
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
