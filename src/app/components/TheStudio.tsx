import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const studioImages = [
  {
    url: "https://images.unsplash.com/photo-1767570928868-6f7b41b94502?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMG1peGluZyUyMGJvYXJkJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3Njg0OTMyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Mixing Console",
    span: "col-span-2 row-span-2",
  },
  {
    url: "https://images.unsplash.com/photo-1775725904614-7f09658c9617?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtdXNpYyUyMHN0dWRpbyUyMG1peGluZyUyMGJvYXJkJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3Njg0OTMyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Production Setup",
    span: "col-span-1 row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1769755449144-32a12d5572c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtdXNpYyUyMHN0dWRpbyUyMG1peGluZyUyMGJvYXJkJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3Njg0OTMyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Sound Engineering",
    span: "col-span-1 row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1563174558-dd09740f80b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxncmFuZCUyMHBpYW5vJTIwY29uY2VydCUyMGhhbGwlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3Njg0OTMyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Piano Performance",
    span: "col-span-1 row-span-2",
  },
  {
    url: "https://images.unsplash.com/photo-1767570924190-7b62f034cd5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtdXNpYyUyMHN0dWRpbyUyMG1peGluZyUyMGJvYXJkJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3Njg0OTMyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Control Room",
    span: "col-span-1 row-span-1",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Conceptualization",
    description: "Every piece begins with an emotional blueprint. I explore sonic textures through improvisation and field recordings.",
  },
  {
    number: "02",
    title: "Composition",
    description: "Translating abstract ideas into structured musical language. Piano sketches evolve into layered arrangements.",
  },
  {
    number: "03",
    title: "Production",
    description: "Sculpting sound in the digital realm. Precision editing, spatial design, and harmonic experimentation converge.",
  },
  {
    number: "04",
    title: "Performance",
    description: "Bringing the studio creation to life. Each performance is a reinterpretation, never a mere reproduction.",
  },
];

export default function TheStudio() {
  return (
    <section id="process" className="min-h-screen bg-[#121212] py-32">
      <div className="max-w-[1600px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-6xl text-white/90 mb-6 tracking-tight">
            The Studio
          </h2>
          <p className="text-white/40 text-lg tracking-wide max-w-2xl">
            Where sound becomes architecture. A glimpse into the creative process.
          </p>
        </motion.div>

        {/* Swiss Style Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-32">
          {studioImages.map((image, index) => (
            <motion.div
              key={image.label}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${image.span} relative group overflow-hidden rounded-2xl`}
            >
              <div className="relative h-full min-h-[300px]">
                <ImageWithFallback
                  src={image.url}
                  alt={image.label}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Label */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-white text-xl tracking-tight">
                    {image.label}
                  </div>
                  <motion.div
                    className="mt-2 h-px bg-white/40"
                    initial={{ width: 0 }}
                    whileInView={{ width: "60px" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section - Clean Typography */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-white/10 pt-24"
        >
          <h3 className="text-4xl text-white/90 mb-16 tracking-tight">
            Creative Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="space-y-4"
              >
                {/* Number */}
                <div className="text-6xl text-white/10 tracking-tight">
                  {step.number}
                </div>

                {/* Title */}
                <h4 className="text-2xl text-white/90 tracking-tight">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-white/50 leading-relaxed">
                  {step.description}
                </p>

                {/* Accent Line */}
                <motion.div
                  className="h-px bg-white/20"
                  initial={{ width: 0 }}
                  whileInView={{ width: "40px" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center"
        >
          <div className="inline-block">
            <motion.a
              href="#contact"
              className="group relative inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative px-12 py-6 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-white/5"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative text-white tracking-[0.15em] text-sm uppercase">
                  Let's Collaborate
                </span>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
