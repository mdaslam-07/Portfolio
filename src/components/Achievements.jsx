import { useState } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import SectionHeading from "./SectionHeading";
import CertificateModal from "./CertificateModal";
import { achievements } from "../data/achievements";

export default function Achievements() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="achievements" className="py-24 md:py-32 border-t border-surface-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <SectionHeading index="06" label="Achievements" title="Achievements" />

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-surface-border" />
          <div className="space-y-10">
            {achievements.map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-8 md:-left-10 top-1.5 w-[15px] h-[15px] rounded-full bg-ink border-2 border-ember" />
                <p className="font-mono text-xs text-ember mb-1">{a.org}</p>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-paper mb-1.5">{a.title}</h3>
                <p className="text-paper-dim text-sm leading-relaxed max-w-lg">{a.detail}</p>
                <div className="flex items-center gap-4 mt-3">
                  {a.certificateImage && (
                    <button
                      onClick={() =>
                        setSelected({ title: a.title, platform: a.org, image: a.certificateImage })
                      }
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] text-paper-dim hover:text-ember transition-colors"
                    >
                      <Eye size={12} />
                      View Certificate
                    </button>
                  )}
                  {a.proofImage && (
                    <button
                      onClick={() =>
                        setSelected({ title: a.title, platform: a.org, image: a.proofImage })
                      }
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] text-paper-dim hover:text-ember transition-colors"
                    >
                      <Eye size={12} />
                      View Proof
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <CertificateModal cert={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
