import { motion } from "motion/react";
import { Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
    { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-8 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <social.icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5"
        >
          <div className="text-white/40 text-sm tracking-wide">
            © 2026 Pesha Geofrey. All rights reserved.
          </div>
          <div className="flex gap-8 text-white/40 text-sm">
            <a href="#" className="hover:text-white transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Press Kit
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
