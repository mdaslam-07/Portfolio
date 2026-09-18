import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Eye } from "lucide-react";
import SectionHeading from "./SectionHeading";
import CertificateModal from "./CertificateModal";
import { certifications } from "../data/certifications";

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certifications" className="py-24 md:py-32 border-t border-surface-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <SectionHeading
          index="04"
          label="Certifications"
          title="Certifications"
          description="A collection of certifications that represent my journey of learning, building, and developing new skills."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              className="group bg-surface border border-surface-border rounded-xl p-5 transition-colors duration-300 hover:border-ember/40"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-lg bg-surface-raised border border-surface-border flex items-center justify-center">
                  <Award size={15} className="text-paper-faint group-hover:text-ember transition-colors duration-300" />
                </div>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noreferrer" className="text-paper-faint hover:text-ember transition-colors">
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
              <p className="text-paper text-sm font-medium leading-snug mb-1">{cert.title}</p>
              <p className="font-mono text-[11px] text-paper-faint mb-3">{cert.platform}</p>
              {cert.image && (
                <button
                  onClick={() => setSelected(cert)}
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

      <CertificateModal cert={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
