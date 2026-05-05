import { motion } from "motion/react";
import { Download } from "lucide-react";

interface FloatingDownloadButtonProps {
  onClick: () => void;
}

export default function FloatingDownloadButton({ onClick }: FloatingDownloadButtonProps) {
  return (
    <motion.button
      onClick={onClick} 
      style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 99999 }}
      className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-600"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      
      {/* Button content */}
      <div className="relative flex items-center gap-3">
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Download className="w-5 h-5" />
        </motion.div>
        <span className="hidden sm:inline">Download Documents</span>
      </div>
      
      {/* Hover tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Download Documents
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </motion.button>
  );
}
