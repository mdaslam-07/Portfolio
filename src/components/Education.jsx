import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 border-t border-surface-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <SectionHeading index="02" label="Education" title="My Academic Journey" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="group bg-surface border border-surface-border rounded-xl p-6 transition-colors duration-300 hover:border-ember/40"
            >
              <div className="w-10 h-10 rounded-lg bg-surface-raised border border-surface-border flex items-center justify-center mb-4">
                <GraduationCap size={16} className="text-paper-faint group-hover:text-ember transition-colors duration-300" />
              </div>

              <h3 className="font-display text-lg md:text-xl font-semibold text-paper mb-1">{item.title}</h3>
              <p className="font-mono text-xs text-ember mb-5">{item.institution}</p>

              <dl className="space-y-3">
                {item.details.map((d) => (
                  <div key={d.label} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                    <dt className="font-mono text-[11px] text-paper-faint sm:w-36 flex-shrink-0">{d.label}</dt>
                    <dd className="text-paper-dim text-sm leading-relaxed">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
