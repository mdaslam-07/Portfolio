import { motion } from "framer-motion";

export default function SectionHeading({ index, label, title, description, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-14 md:mb-16 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}
    >
      <div className={`flex items-center gap-3 mb-4 font-mono text-xs text-ember ${align === "center" ? "justify-center" : ""}`}>
        <span>{index}</span>
        <span className="w-8 h-px bg-ember/50" />
        <span className="text-paper-dim">{label}</span>
      </div>
      <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-paper-dim text-base md:text-lg mt-4 leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
