import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Eye } from "lucide-react";
import SectionHeading from "./SectionHeading";
import CertificateModal from "./CertificateModal";
import { internships } from "../data/internships";

export default function Internships() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="internships" className="py-24 md:py-32 border-t border-surface-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <SectionHeading
          index="05"
          label="Internships"
          title="Internships"
          description="Practical experience gained through real-world projects and internships."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {internships.map((it, i) => (
            <motion.div
              key={it.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="group bg-surface border border-surface-border rounded-xl p-6 transition-colors duration-300 hover:border-ember/40"
            >
              <div className="w-10 h-10 rounded-lg bg-surface-raised border border-surface-border flex items-center justify-center mb-4">
                <Briefcase size={16} className="text-paper-faint group-hover:text-ember transition-colors duration-300" />
              </div>

              <h3 className="font-display text-lg md:text-xl font-semibold text-paper mb-1">{it.role}</h3>
              <p className="font-mono text-xs text-ember mb-2">{it.company}</p>

              <p className="flex items-center gap-1.5 text-paper-faint text-xs mb-4">
                <Calendar size={12} />
                {it.duration}
              </p>

              <p className="text-paper-dim text-sm leading-relaxed mb-4">{it.description}</p>

              {it.image && (
                <button
                  onClick={() => setSelected(it)}
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] text-paper-dim hover:text-ember transition-colors"
                >
                  <Eye size={12} />
                  View Certificate
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <CertificateModal
        cert={selected ? { title: selected.role, platform: selected.company, image: selected.image } : null}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
