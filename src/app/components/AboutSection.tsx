import { motion, AnimatePresence } from "motion/react";
import { Download, Sparkles, ChevronRight } from "lucide-react";
import { useState } from "react";

interface AboutSectionProps {
  onDocumentsClick: () => void;
}

export default function AboutSection({ onDocumentsClick }: AboutSectionProps) {
  const [storyExpanded, setStoryExpanded] = useState(false);
  const [futureExpanded, setFutureExpanded] = useState(false);

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
                  My Story
                </h3>
                <div className="relative overflow-hidden">
                  {/* Story Content Container */}
                  <AnimatePresence mode="wait">
                    {!storyExpanded ? (
                      <motion.div
                        key="initial"
                        initial={{ opacity: 1, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="space-y-4 text-white/60 leading-relaxed text-md"
                      >
                        <p>
                        Music found me before I fully understood it. I first connected with music at a young age when I started exploring piano. What began as curiosity slowly grew into a passion for performing, singing, and creating music. My real turning point came when I joined Agahozo-Shalom Youth Village (ASYV). There, I discovered a wide variety of music equipment and a supportive environment that helped me grow. I did not have everything at the beginning, but my determination pushed me to learn...
                       </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="space-y-4 text-white/60 leading-relaxed text-md"
                      >
                      
                       <p>
                        and use every opportunity available. Through practice, consistency, and curiosity, I developed my skills in piano performance, live band music, and music production. Over time, I became a music producer at the ASYV Music Studio and also the President of the ASYV Live Band. These experiences shaped me into a musician who is not only focused on performing, but also on creating, leading, and teaching others. Today, I express myself through three main roles: pianist, singer, and music producer. Together, they represent one purpose—using music to connect with people and tell real stories through sound.
                       </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Continue Button */}
                <motion.button
                  onClick={() => setStoryExpanded(!storyExpanded)}
                  className="mt-6 group relative inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative px-6 py-3 rounded-full backdrop-blur-xl bg-white/5 border border-white/20 hover:border-white/40 overflow-hidden transition-colors">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative text-white/80 tracking-[0.1em] uppercase text-sm font-medium flex items-center gap-2">
                      {storyExpanded ? "Show Less" : "Continue Reading"}
                      <motion.div
                        animate={{ rotate: storyExpanded ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    </span>
                  </div>
                </motion.button>
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
                  My Future
                </h3>
                <div className="relative overflow-hidden">
                  {/* Future Content Container */}
                  <AnimatePresence mode="wait">
                    {!futureExpanded ? (
                      <motion.div
                        key="initial"
                        initial={{ opacity: 1, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="space-y-4 text-white/60 leading-relaxed"
                      >
                        <p>
                          I am building toward becoming a well-rounded musician who can combine live performance and music production to create meaningful musical experiences.
My future goal is to be a person who develops impactful solutions for people in need through rising their talents and passions. I also dream to be a future musician who influences a global audience.
I want to continue growing my skills in music production, live performance, and collaboration with other artists and... 

                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="space-y-4 text-white/60 leading-relaxed"
                      >
                        {/* <p>
                          Picture performances where spatial audio moves through the room like a living organism, where visuals respond to vocal frequencies in real-time.
                        </p>
                        <p>
                          My next album, <em className="text-white/80">Liminal Spaces</em>, explores the threshold between consciousness and dream. It's an invitation to step into sound architecture—where listeners don't just hear music, they inhabit it.
                        </p>
                        <p>
                          I'm seeking collaborations with visual artists, technologists, and fellow musicians who dare to reimagine what a musical experience can be.
                        </p> */}
                        <p> creators. My vision is to use music not only as entertainment, but also as a way to inspire, teach, and create positive change in communities.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Read More Button */}
                <motion.button
                  onClick={() => setFutureExpanded(!futureExpanded)}
                  className="mt-6 group relative inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative px-6 py-3 rounded-full backdrop-blur-xl bg-white/5 border border-white/20 hover:border-white/40 overflow-hidden transition-colors">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-amber-500/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative text-white/80 tracking-[0.1em] uppercase text-sm font-medium flex items-center gap-2">
                      {futureExpanded ? "Show Less" : "Read More"}
                      <motion.div
                        animate={{ rotate: futureExpanded ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    </span>
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        
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
            — PESHA GEOFREY
          </p>
        </motion.div>
      </div>
    </section>
  );
}
