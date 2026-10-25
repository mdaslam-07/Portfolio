import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, Eye, Layers, X } from "lucide-react";
import CertificateModal from "./CertificateModal";
import { codechef } from "../data/codechef";
import { getCodechefImage } from "../data/codechefImages";
import { lockScroll } from "../lib/scrollLock";

function CodeChefPanel({ open, onClose }) {
  const [activeId, setActiveId] = useState(codechef.categories[0].id);
  const [viewing, setViewing] = useState(null);
  const closeViewing = useCallback(() => setViewing(null), []);

  // Always start on the first tab (and with no image open) when the panel opens.
  useEffect(() => {
    if (open) setActiveId(codechef.categories[0].id);
    setViewing(null);
  }, [open]);

  // Lock page scroll while the panel is open.
  useEffect(() => {
    if (!open) return undefined;
    return lockScroll();
  }, [open]);

  // Escape closes the panel, unless a certificate image is open on top of it
  // (then Escape only closes that image).
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && !viewing && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, viewing, onClose]);

  const active = codechef.categories.find((c) => c.id === activeId) ?? codechef.categories[0];

  return createPortal(
    <>
    <AnimatePresence>
      {open && (
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
            aria-label={`${codechef.title} certificates`}
            className="relative bg-surface border border-surface-border rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-surface-border flex-shrink-0">
              <div>
                <p className="text-paper text-sm font-medium">{codechef.title}</p>
                <p className="font-mono text-[11px] text-paper-faint">{codechef.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="text-paper-dim hover:text-paper transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div
              role="tablist"
              aria-label="Certificate categories"
              className="flex gap-2 px-6 pt-4 pb-3 border-b border-surface-border overflow-x-auto flex-shrink-0"
            >
              {codechef.categories.map((cat) => {
                const selected = cat.id === active.id;
                return (
                  <button
                    key={cat.id}
                    role="tab"
                    id={`codechef-tab-${cat.id}`}
                    aria-selected={selected}
                    aria-controls={`codechef-panel-${cat.id}`}
                    onClick={() => setActiveId(cat.id)}
                    className={`whitespace-nowrap font-mono text-xs px-4 py-2 rounded-full border transition-colors duration-200 ${
                      selected
                        ? "border-ember text-ember bg-ember/10"
                        : "border-surface-border text-paper-dim hover:text-paper hover:border-paper-faint"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            <ul
              role="tabpanel"
              id={`codechef-panel-${active.id}`}
              aria-labelledby={`codechef-tab-${active.id}`}
              className="overflow-y-auto px-6 py-2"
            >
              {active.certificates.map((c) => {
                const image = getCodechefImage(c);
                return (
                <li
                  key={c.id}
                  className="flex items-center justify-between gap-4 py-4 border-b border-surface-border/60 last:border-none"
                >
                  <p className="text-paper text-sm leading-snug">{c.title}</p>
                  {image ? (
                    <button
                      type="button"
                      onClick={() =>
                        setViewing({ title: c.title, platform: `${codechef.title} — ${active.label}`, image })
                      }
                      className="inline-flex items-center gap-1.5 flex-shrink-0 font-mono text-[11px] text-paper-dim hover:text-ember transition-colors"
                    >
                      <Eye size={12} />
                      View Certificate
                    </button>
                  ) : c.url ? (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 flex-shrink-0 font-mono text-[11px] text-paper-dim hover:text-ember transition-colors"
                    >
                      <ExternalLink size={12} />
                      View Certificate
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      title="Certificate URL not added yet"
                      className="inline-flex items-center gap-1.5 flex-shrink-0 font-mono text-[11px] text-paper-faint opacity-60 cursor-not-allowed"
                    >
                      <ExternalLink size={12} />
                      URL pending
                    </span>
                  )}
                </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    {/* Certificate image opens above the panel (higher stacking level) */}
    <div className="relative z-[110]">
      <CertificateModal cert={open ? viewing : null} onClose={closeViewing} />
    </div>
    </>,
    document.body
  );
}

export default function CodeChefCard({ index = 0 }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
        onClick={() => setOpen(true)}
        className="group bg-surface border border-surface-border rounded-xl p-5 cursor-pointer transition-colors duration-300 hover:border-ember/40"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="w-9 h-9 rounded-lg bg-surface-raised border border-surface-border flex items-center justify-center">
            <Award size={15} className="text-paper-faint group-hover:text-ember transition-colors duration-300" />
          </div>
        </div>
        <p className="text-paper text-sm font-medium leading-snug mb-1">{codechef.title}</p>
        <p className="font-mono text-[11px] text-paper-faint mb-3">{codechef.subtitle}</p>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
          className="inline-flex items-center gap-1.5 font-mono text-[11px] text-paper-dim hover:text-ember transition-colors"
        >
          <Layers size={12} />
          View Certificates
        </button>
      </motion.div>

      <CodeChefPanel open={open} onClose={close} />
    </>
  );
}
