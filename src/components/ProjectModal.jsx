import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
        >
          <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            className="relative bg-surface border border-surface-border rounded-t-2xl sm:rounded-2xl w-full sm:max-w-2xl max-h-[88vh] overflow-y-auto"
          >
            <div className="sticky top-0 flex items-center justify-between px-6 md:px-8 py-5 bg-surface/95 backdrop-blur-sm border-b border-surface-border">
              <p className="font-mono text-xs text-ember">{project.category}</p>
              <button
                onClick={onClose}
                aria-label="Close"
                className="text-paper-dim hover:text-paper transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="px-6 md:px-8 py-7 space-y-7">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-paper leading-snug">
                {project.title}
              </h3>

              {project.conference && (
                <p className="font-mono text-xs text-ember -mt-4">{project.conference}</p>
              )}

              <ModalBlock label="Problem" text={project.detail.problem} />
              <ModalBlock label="Solution" text={project.detail.solution} />
              <ModalBlock label="How It Works" text={project.detail.how} />

              <div>
                <p className="font-mono text-xs text-paper-faint mb-3">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {project.detail.tech.map((t) => (
                    <span key={t} className="font-mono text-[11px] text-paper-dim border border-surface-border rounded-full px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <ModalBlock label="My Contribution" text={project.detail.contribution} />
              <ModalBlock label="Future Improvements" text={project.detail.future} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ModalBlock({ label, text }) {
  return (
    <div>
      <p className="font-mono text-xs text-paper-faint mb-2">{label}</p>
      <p className="text-paper-dim text-[15px] leading-relaxed">{text}</p>
    </div>
  );
}
