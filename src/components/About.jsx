import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { currentlyLearning } from "../data/skills";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-surface-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <SectionHeading index="01" label="About" title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5 text-paper-dim text-base md:text-lg leading-relaxed max-w-xl"
          >
            <p>
              I&rsquo;’m a final-year Computer Science and Engineering student passionate about 
              software development, Java, SQL, AI, and IoT, with a strong interest in building 
              practical technology solutions.
            </p>
            <p>
              I&rsquo;m currently strengthening my foundations in PL/SQL, Advanced SQL, 
              data structures, and ML concepts while applying what I learn to hands-on projects 
              alongside my coursework. I enjoy exploring how software, hardware, and intelligent 
              technologies can work together to solve real-world problems.
            </p>
            <p>
             My goal is to begin my career as a Software Engineer, contribute to real-world 
             development projects, and continue growing through problem-solving, hands-on 
             experience, and continuous learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="bg-surface border border-surface-border rounded-2xl p-7"
          >
            <p className="font-mono text-xs text-ember mb-5">currently learning</p>
            <ul className="space-y-3">
              {currentlyLearning.map((topic) => (
                <li key={topic} className="flex items-center gap-3 text-paper text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0" />
                  {topic}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
