import { motion } from "motion/react";
import { Mic, Music, Piano } from "lucide-react";
import { useState } from "react";

const roles = [
  {
    title: "Singer",
    icon: Mic,
    description: "Live singer skilled in stage performance, with experience in school concerts, live band performances, and music competitions. ",
    color: "from-purple-500/20 to-pink-500/20",
    accentColor: "text-purple-300",
  },
  {
    title: "Producer",
    icon: Music,
    description: "Music producer skilled in recording, arranging, and producing music, working with artists in studio sessions using FL Studio and Logic Pro X. ",
    color: "from-blue-500/20 to-cyan-500/20",
    accentColor: "text-blue-300",
  },
  {
    title: "Pianist",
    icon: Piano,
    description: "Pianist with experience in live band performances, school events, and music competitions at district, provincial, and national levels. ",
    color: "from-amber-500/20 to-orange-500/20",
    accentColor: "text-amber-300",
  },
];

export default function MultitaskerIntro() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-[#121212] py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl text-white/90 mb-6 tracking-tight">
            The Multitasker
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto tracking-wide">
            Three distinct creative voices, one unified artistic vision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group cursor-pointer"
            >
              {/* Card Container */}
              <motion.div
                className="relative h-[450px] rounded-xl overflow-hidden border border-white/5"
                animate={{
                  scale: hoveredIndex === index ? 1.02 : 1,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${role.color} backdrop-blur-xl`}
                />
                <motion.div
                  className="absolute inset-0 border-2 border-white/0 rounded-xl"
                  animate={{
                    borderColor:
                      hoveredIndex === index
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(255, 255, 255, 0)",
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-10">
                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      rotate: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <role.icon
                      className={`w-16 h-16 ${role.accentColor}`}
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  {/* Title */}
                  <div className="space-y-6">
                    <h3 className="text-4xl text-white/90 tracking-tight">
                      {role.title}
                    </h3>

                    {/* Description - Expands on Hover */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        height: hoveredIndex === index ? "auto" : 0,
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/60 leading-relaxed">
                        {role.description}
                      </p>
                    </motion.div>

                    {/* Accent Line */}
                    <motion.div
                      className={`h-px bg-gradient-to-r ${role.color} to-transparent`}
                      initial={{ width: "40px" }}
                      animate={{
                        width: hoveredIndex === index ? "100%" : "40px",
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Gradient Overlay on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
