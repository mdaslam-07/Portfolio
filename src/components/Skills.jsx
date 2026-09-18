import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/skills";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-surface-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <SectionHeading
          index="02"
          label="Skills"
          title="What I Work With"
          description="Technologies and tools I use to turn ideas into practical solutions and solve real-world problems."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={item}
              className="group bg-surface border border-surface-border rounded-2xl p-6 transition-colors duration-300 hover:border-ember/40"
            >
              <p className="font-mono text-xs text-paper-faint mb-4 group-hover:text-ember transition-colors duration-300">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-paper bg-surface-raised border border-surface-border rounded-full px-3.5 py-1.5 transition-colors duration-200 hover:border-ember hover:text-ember"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
