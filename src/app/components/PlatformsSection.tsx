import { motion } from "motion/react";
import { Music, Headphones, Radio, Youtube, Mic2, Disc, Play } from "lucide-react";

const platforms = [
  {
    name: "Spotify",
    icon: Headphones,
    description: "4.2M Monthly Listeners",
    link: "https://spotify.com",
    color: "from-green-500/20 to-green-600/20",
    accentColor: "text-green-400",
    followers: "842K Followers",
  },
  {
    name: "Apple Music",
    icon: Music,
    description: "Featured Artist",
    link: "https://music.apple.com",
    color: "from-pink-500/20 to-red-500/20",
    accentColor: "text-pink-400",
    followers: "1.1M Followers",
  },
  {
    name: "YouTube",
    icon: Youtube,
    description: "Exclusive Content & Live Sessions",
    link: "https://youtube.com",
    color: "from-red-500/20 to-red-600/20",
    accentColor: "text-red-400",
    followers: "2.3M Subscribers",
  },
  {
    name: "Bandcamp",
    icon: Disc,
    description: "Exclusive Releases & Merch",
    link: "https://bandcamp.com",
    color: "from-cyan-500/20 to-blue-500/20",
    accentColor: "text-cyan-400",
    followers: "Direct Support",
  },
  {
    name: "Tidal",
    icon: Play,
    description: "Hi-Fi Audio Quality",
    link: "https://tidal.com",
    color: "from-blue-500/20 to-indigo-500/20",
    accentColor: "text-blue-400",
    followers: "Master Quality",
  },
  {
    name: "AudioMack",
    icon: Mic2,
    description: "Trending Artist",
    link: "https://audiomack.com",
    color: "from-yellow-500/20 to-amber-500/20",
    accentColor: "text-yellow-400",
    followers: "423K Followers",
  },
];

export default function PlatformsSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#121212] py-32 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl text-white/90 mb-6 tracking-tight">
            Find Me Everywhere
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
            Stream my music, watch exclusive content, and connect across all major platforms. Choose your preferred listening experience.
          </p>
        </motion.div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative"
              whileHover={{ y: -8 }}
            >
              {/* Card */}
              <div className="relative h-full rounded-3xl overflow-hidden">
                {/* Glassmorphism Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} backdrop-blur-xl`} />
                <div className="absolute inset-0 border border-white/10 rounded-3xl" />

                {/* Hover Glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                />

                {/* Content */}
                <div className="relative p-8 flex flex-col h-full min-h-[220px]">
                  {/* Icon */}
                  <motion.div
                    className="mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-14 h-14 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors duration-300`}>
                      <platform.icon className={`w-7 h-7 ${platform.accentColor}`} />
                    </div>
                  </motion.div>

                  {/* Platform Name */}
                  <h3 className="text-2xl text-white/90 mb-2 tracking-tight">
                    {platform.name}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm mb-3">
                    {platform.description}
                  </p>

                  {/* Followers Badge */}
                  <div className="mt-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/10">
                      <div className={`w-1.5 h-1.5 ${platform.accentColor} rounded-full opacity-60`} />
                      <span className="text-white/60 text-xs tracking-wide">
                        {platform.followers}
                      </span>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <motion.div
                    className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                  >
                    <div className="text-white/40">→</div>
                  </motion.div>
                </div>

                {/* Bottom Accent Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${platform.color}`}
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Total Streams", value: "142M+" },
              { label: "Monthly Listeners", value: "8.5M" },
              { label: "Countries Reached", value: "127" },
              { label: "Playlist Features", value: "1,234" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative inline-block">
                  <div className="text-5xl text-white/90 mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-2xl -z-10 opacity-50" />
                </div>
                <div className="text-white/40 text-sm tracking-[0.15em] uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div> */}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-white/40 mb-6">
            Don't see your favorite platform?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 group"
          >
            <span className="tracking-wide">Let me know</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
