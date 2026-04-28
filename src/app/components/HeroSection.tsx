import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import wrath from "./video/wrath.mp4";
export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMuted, setIsMuted] = useState(true);
  const [showVideo, setShowVideo] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Auto-hide video after it plays once
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay might be blocked, that's okay
      });

      const handleEnded = () => {
        setTimeout(() => {
          setShowVideo(false);
        }, 500);
      };

      video.addEventListener("ended", handleEnded);
      return () => video.removeEventListener("ended", handleEnded);
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center transition-colors duration-500 pt-20">
      {/* Welcome Video */}
      <motion.div
        className="absolute inset-0 z-20 flex items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        animate={{ opacity: showVideo ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{ pointerEvents: showVideo ? "auto" : "none" }}
      >
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover dark:brightness-100"
            // muted={isMuted}
            autoPlay
            playsInline
          >
            <source
              src={wrath}
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/80" />
        </div>

        {/* Welcome Content */}
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-5xl md:text-5xl text-foreground mb-6 tracking-tight">
             Pesha Geofrey Producer!
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-foreground/60 text-xl tracking-[0.3em] uppercase"
            >
              Welcome
            </motion.p>
          </motion.div>
        </div>

        {/* Controls */}
        {showVideo && (
          <div className="absolute bottom-8 right-8 flex gap-3">
            {/* Sound Toggle */}
            <motion.button
              onClick={toggleMute}
              className="w-12 h-12 rounded-full backdrop-blur-xl bg-background/50 border border-foreground/10 flex items-center justify-center hover:border-foreground/30 transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-foreground/60" />
              ) : (
                <Volume2 className="w-5 h-5 text-foreground/60" />
              )}
            </motion.button>

            {/* Skip Button */}
            <motion.button
              onClick={() => setShowVideo(false)}
              className="px-6 py-3 rounded-full backdrop-blur-xl bg-background/50 border border-foreground/10 hover:border-foreground/30 transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-foreground/60 text-sm tracking-wide">Skip</span>
            </motion.button>
          </div>
        )}
      </motion.div>

      {/* 3D Three.js Placeholder - Liquid Glass Piano */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative w-[800px] h-[600px]"
          animate={{
            rotateY: mousePosition.x * 15,
            rotateX: -mousePosition.y * 15,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          style={{ perspective: 1000 }}
        >
          {/* Glassmorphism Container */}
          <div className="absolute inset-0 backdrop-blur-3xl bg-gradient-to-br from-white/5 via-white/2 to-transparent rounded-[40px] border border-white/10">
            {/* Flowing Ribbons Effect Placeholder */}
            <div className="absolute inset-0 overflow-hidden rounded-[40px]">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  style={{
                    top: `${20 + i * 15}%`,
                  }}
                  animate={{
                    x: ["-100%", "100%"],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>

            {/* Placeholder Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4 px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-white/40 tracking-[0.2em] uppercase text-sm"
                >
                  3D Three.js Interactive Element
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="text-white/20 text-xs max-w-md"
                >
                  Audio-Reactive Ribbon / Liquid Glass Piano
                </motion.div>
              </div>
            </div>
          </div>

          {/* Glow Effects */}
          <div className="absolute -inset-20 bg-gradient-radial from-purple-500/10 via-transparent to-transparent blur-3xl" />
        </motion.div>
      </div>

      {/* Artist Name - Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showVideo ? 0 : 1 }}
        transition={{ duration: 1.5, delay: showVideo ? 0 : 1.2 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center"
      >
        <h1 className="text-6xl tracking-tight text-foreground/90 mb-2">ARIA NOVA</h1>
        <p className="text-foreground/40 tracking-[0.3em] text-xs uppercase">
          Singer · Producer · Pianist
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{
          opacity: showVideo ? 0 : 1,
          y: [0, 10, 0]
        }}
        transition={{
          opacity: { duration: 1, delay: showVideo ? 0 : 1.5 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-foreground/40 to-transparent" />
      </motion.div>
    </section>
  );
}
