import { motion } from "motion/react";
import { Download, Sparkles } from "lucide-react";

export default function AboutSection() {
  const handleDownloadCV = () => {
    // In production, this would download an actual CV file
    const link = document.createElement('a');
    link.href = '/cv-aria-nova.pdf';
    link.download = 'Aria-Nova-CV.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a] py-32 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full backdrop-blur-xl bg-white/5 border border-white/10">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-white/60 text-sm tracking-[0.15em] uppercase">
              My Journey
            </span>
          </div>
          <h2 className="text-6xl text-white/90 tracking-tight">
            About Me
          </h2>
        </motion.div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* The Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500/40 via-blue-500/40 to-transparent rounded-full" />
              <div className="pl-8">
                <h3 className="text-3xl text-white/90 mb-6 tracking-tight">
                  The Story
                </h3>
                <div className="space-y-4 text-white/60 leading-relaxed">
                  <p>
                    Music found me before I found myself. At age seven, I sat at my grandmother's piano—a weathered upright with ivory keys that whispered stories of generations past. That moment ignited a lifelong dialogue between silence and sound.
                  </p>
                  <p>
                    My journey evolved from classical conservatory training to the experimental edges of electronic production. I spent years in dimly lit studios, learning to sculpt frequencies like a painter mixes pigments. Singing became my second language, production my third.
                  </p>
                  <p>
                    Each role—vocalist, producer, pianist—is not a separate identity but a facet of the same creative vision: to build sonic worlds that resonate with the unspoken parts of human experience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The Future */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500/40 via-amber-500/40 to-transparent rounded-full" />
              <div className="pl-8">
                <h3 className="text-3xl text-white/90 mb-6 tracking-tight">
                  The Future
                </h3>
                <div className="space-y-4 text-white/60 leading-relaxed">
                  <p>
                    I'm building toward something bigger: immersive audio-visual experiences that blur the line between concert and art installation. Picture performances where spatial audio moves through the room like a living organism, where visuals respond to vocal frequencies in real-time.
                  </p>
                  <p>
                    My next album, <em className="text-white/80">Liminal Spaces</em>, explores the threshold between consciousness and dream. It's an invitation to step into sound architecture—where listeners don't just hear music, they inhabit it.
                  </p>
                  <p>
                    I'm seeking collaborations with visual artists, technologists, and fellow musicians who dare to reimagine what a musical experience can be.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CV Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          {/* Glassmorphism Container */}
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-amber-500/10 backdrop-blur-xl" />
            <div className="absolute inset-0 border border-white/10 rounded-3xl" />

            <div className="relative p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-3xl text-white/90 mb-3 tracking-tight">
                  Download My CV
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Explore my full credentials, past collaborations, technical skills, and musical education in detail.
                </p>
              </div>

              <motion.button
                onClick={handleDownloadCV}
                className="group relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative px-10 py-5 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-white/20 overflow-hidden">
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Button Content */}
                  <div className="relative flex items-center gap-3">
                    <Download className="w-5 h-5 text-white" />
                    <span className="text-white tracking-[0.1em] uppercase">
                      Download CV
                    </span>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.button>
            </div>
          </div>

          {/* Pulse Animation on CV Button */}
          <motion.div
            className="absolute top-12 right-12 w-4 h-4"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-purple-400 rounded-full blur-sm" />
          </motion.div>
        </motion.div>

        {/* Decorative Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <blockquote className="text-2xl text-white/40 italic max-w-3xl mx-auto leading-relaxed">
            "Music is the architecture of invisible cathedrals. I'm merely the architect translating silence into sanctuary."
          </blockquote>
          <p className="text-white/30 mt-4 tracking-[0.2em] text-sm">
            — ARIA NOVA
          </p>
        </motion.div>
      </div>
    </section>
  );
}
