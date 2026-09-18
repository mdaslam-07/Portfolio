import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectCard({ project, onOpen, featured = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative bg-surface border border-surface-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-ember/40 hover:-translate-y-1 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-surface-raised to-ink border-b border-surface-border ${
          featured ? "aspect-[16/8]" : "aspect-[16/10]"
        }`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.04]">
            <span className="font-mono text-xs text-paper-faint">image placeholder</span>
          </div>
        )}
        <div className="absolute top-4 left-4 font-mono text-[11px] text-ember bg-ink/70 backdrop-blur-sm border border-surface-border rounded-full px-3 py-1">
          {project.category}
        </div>
      </div>

      <div className="p-6 md:p-7">
        <h3 className="font-display text-xl md:text-2xl font-semibold text-paper mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-paper-dim text-sm md:text-[15px] leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="font-mono text-[11px] text-paper-dim border border-surface-border rounded-full px-2.5 py-1">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <button
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-paper transition-colors duration-200 hover:text-ember"
          >
            View Project
            <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-paper-dim transition-colors duration-200 hover:text-ember"
            >
              <GithubIcon size={15} />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
