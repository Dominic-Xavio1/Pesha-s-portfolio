import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const words = ["PESHA", "GEOFREY"];
  const subtitle = "Singer · Producer · Pianist";
  const description = "Crafting immersive sonic experiences through vocal artistry, production expertise, and classical innovation";


  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background flex items-center justify-center pt-20">
      {/* Animated Background Gradient Elements */}
      <div className="absolute inset-0 z-0">
        {/* Top-left gradient blob */}
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 40,
            y: mousePosition.y * 40,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
        />
        
        {/* Top-right gradient blob */}
        <motion.div
          className="absolute -top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -30,
            y: mousePosition.y * -30,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
        />
        
        {/* Bottom-right gradient blob */}
        <motion.div
          className="absolute -bottom-40 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 25,
            y: mousePosition.y * 25,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        {/* Animated Ribbons Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              style={{
                top: `${30 + i * 35}%`,
              }}
              animate={{
                x: ["-100%", "100%"],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 5 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
            />
          ))}
        </div>

        {/* Main Headline - Word by Word Animation */}
        <div className="mb-8">
          <div className="flex flex-col items-center justify-center gap-4 mb-8">
            {words.map((word, wordIndex) => (
              <motion.h1
                key={word}
                className="text-7xl md:text-8xl font-bold tracking-tighter bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: wordIndex * 0.2,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                }}
              >
                {word}
              </motion.h1>
            ))}
          </div>
        </div>

        {/* Subtitle with Professional Role */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-foreground/70 tracking-[0.15em] uppercase text-sm">
              {subtitle}
            </span>
          </div>
        </motion.div> */}

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto text-foreground/60 text-lg leading-relaxed mb-12"
        >
          {description}
        </motion.p>

        {/* Interactive CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          {/* Explore Button */}
          <motion.a
            href="#about"
            className="group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative px-8 py-4 rounded-full backdrop-blur-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-white/20 overflow-hidden flex items-center gap-3">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative text-foreground tracking-[0.1em] uppercase text-sm font-medium">
                Explore
              </span>
              <ArrowRight className="relative w-4 h-4 text-foreground group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>

          {/* Contact Button */}
          <motion.a
            href="#contact"
            className="group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative px-8 py-4 rounded-full backdrop-blur-xl bg-white/5 border border-white/20 hover:border-white/40 transition-colors overflow-hidden flex items-center gap-3">
              <span className="text-foreground/80 tracking-[0.1em] uppercase text-sm font-medium">
                Get in Touch
              </span>
            </div>
          </motion.a>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute -left-40 -bottom-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute -right-40 -top-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 1.6 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-foreground/40 to-transparent" />
      </motion.div>
    </section>
  );
}
