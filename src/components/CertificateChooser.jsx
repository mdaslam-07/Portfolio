import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X } from "lucide-react";
import CertificateModal from "./CertificateModal";
import { lockScroll } from "../lib/scrollLock";

// Small popup for a certification that has more than one certificate.
// `cert.certificates` is a list of { id, label, name, image }.
// Clicking a button opens that certificate's image on top of this popup.
export default function CertificateChooser({ cert, onClose }) {
  const open = Boolean(cert);
  const [viewing, setViewing] = useState(null);
  const closeViewing = useCallback(() => setViewing(null), []);

  // Start clean whenever a different certification is opened.
  useEffect(() => {
    setViewing(null);
  }, [cert]);

  useEffect(() => {
    if (!open) return undefined;
    return lockScroll();
  }, [open]);

  // Escape closes this popup, unless a certificate image is open on top
  // (then Escape only closes that image).
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && !viewing && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, viewing, onClose]);

  return createPortal(
    <>
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
              aria-label={`${cert.title} certificates`}
              className="relative bg-surface border border-surface-border rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between gap-4 px-6 py-4 border-b border-surface-border">
                <div>
                  <p className="text-paper text-sm font-medium leading-snug">{cert.title}</p>
                  <p className="font-mono text-[11px] text-paper-faint mt-1">{cert.platform}</p>
                  {cert.issuer && (
                    <p className="font-mono text-[11px] text-paper-faint mt-1">Issued by {cert.issuer}</p>
                  )}
                  {cert.achievement && (
                    <p className="font-mono text-[11px] text-ember mt-1">Achievement: {cert.achievement}</p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="text-paper-dim hover:text-paper transition-colors flex-shrink-0"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 space-y-3">
                {cert.certificates.map((c) =>
                  c.image ? (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() =>
                        setViewing({
                          title: cert.title,
                          platform: `${cert.platform} — ${c.name}`,
                          image: c.image,
                        })
                      }
                      className="w-full flex items-center justify-between gap-3 border border-surface-border rounded-lg px-4 py-3 text-sm text-paper hover:border-ember/40 hover:text-ember transition-colors"
                    >
                      {c.label}
                      <Eye size={14} />
                    </button>
                  ) : (
                    <button
                      key={c.id}
                      type="button"
                      disabled
                      title="Certificate file not added yet"
                      className="w-full flex items-center justify-between gap-3 border border-surface-border rounded-lg px-4 py-3 text-sm text-paper-faint opacity-60 cursor-not-allowed"
                    >
                      {c.label}
                      <Eye size={14} />
                    </button>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Certificate image opens above this popup */}
      <div className="relative z-[110]">
        <CertificateModal cert={open ? viewing : null} onClose={closeViewing} />
      </div>
    </>,
    document.body
  );
}
