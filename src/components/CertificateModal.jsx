import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

export default function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = cert ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [cert, onClose]);

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
        >
          <div className="absolute inset-0 bg-ink/85 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label={cert.title}
            className="relative bg-surface border border-surface-border rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 flex items-center justify-between px-6 py-4 bg-surface/95 backdrop-blur-sm border-b border-surface-border">
              <div>
                <p className="text-paper text-sm font-medium">{cert.title}</p>
                <p className="font-mono text-[11px] text-paper-faint">{cert.platform}</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="text-paper-dim hover:text-paper transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-4 sm:p-6">
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-auto rounded-lg border border-surface-border"
                />
              ) : (
                <p className="text-paper-dim text-sm text-center py-16">
                  No certificate image added yet.
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
