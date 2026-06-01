import { motion, AnimatePresence } from "motion/react";
import { X, Download, FileText } from "lucide-react";
import { useEffect } from "react";

interface DocumentsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const documents = [
  {
    name: "Resume",
    file: "pesha resume.pdf",
    description: "Resume "
  },
  {
    name: "Cover Letter",
    file: "Cover letter.pdf",
    description: "Cover letter "
  },
  {
    name: "Letter of Recommendation",
    file: "LETTER OF RECOMMENDATION (13).pdf",
    description: "Professional recommendation"
  }
];

export default function DocumentsModal({ isOpen, onClose }: DocumentsModalProps) {
  const handleDownload = (fileName: string) => {
    const link = document.createElement('a');
    link.href = `/documents/${fileName}`;
    link.download = fileName;
    link.click();
  };

  // Handle escape key and body scroll
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[99]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-y-auto w-full max-w-2xl mx-4 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-[100] p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute right-6 group relative p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
            </motion.button>

            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight mb-2">
                Download Documents
              </h2>
              <p className="text-white/60">
                Choose a document to download
              </p>
            </div>

            {/* Documents Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map((doc, index) => (
                <motion.div
                  key={doc.file}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <motion.button
                    onClick={() => {
                      handleDownload(doc.file);
                      onClose();
                    }}
                    className="w-full group relative p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden text-left"
                    whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.3)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="relative flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-purple-500/20">
                            <FileText className="w-5 h-5 text-purple-300" />
                          </div>
                          <h3 className="text-lg font-semibold text-white/90">
                            {doc.name}
                          </h3>
                        </div>
                        <p className="text-white/60 text-sm ml-11">
                          {doc.description}
                        </p>
                      </div>
                      <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Download className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                      </motion.div>
                    </div>
                  </motion.button>
                </motion.div>
              ))}
            </div>

            {/* Footer Note */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white/50 text-sm text-center">
                All documents are available in PDF format. Click on any document to download.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}