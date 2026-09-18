import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function GithubSection() {
  return (
    <section className="py-20 md:py-24 border-t border-surface-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-surface border border-surface-border rounded-2xl px-7 py-12 md:px-14 md:py-16 text-center overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid bg-grid opacity-40" />
          <div className="relative">
            <GithubIcon size={30} className="mx-auto text-paper mb-6" />
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-paper mb-3">
              Building, learning and pushing code.
            </h3>
            <p className="text-paper-dim text-base max-w-md mx-auto mb-8">
              Explore my projects and coding journey on GitHub.
            </p>
            <a
              href="https://github.com/mdaslam-07"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 bg-ember text-ink font-medium text-sm px-6 py-3.5 rounded-full transition-transform duration-200 hover:-translate-y-0.5"
            >
              View GitHub
              <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
