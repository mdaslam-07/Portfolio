import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { GithubIcon, LinkedinIcon } from "./Icons";

const EMAIL = "mdaslam8680@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/aslamconnects/";
const GITHUB = "https://github.com/mdaslam-07";

const contacts = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, icon: Mail, placeholder: false },
  { label: "LinkedIn", value: "linkedin.com/in/aslamconnects", href: LINKEDIN, icon: LinkedinIcon, placeholder: false },
  { label: "GitHub", value: "github.com/mdaslam-07", href: GITHUB, icon: GithubIcon, placeholder: false },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-surface-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <SectionHeading
          index="07"
          label="Contact"
          align="center"
          title="Let's Connect"
          description="I'm always interested in learning, building and exploring opportunities in software development and technology."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.label === "GitHub" || c.label === "LinkedIn" ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
              className="group bg-surface border border-surface-border rounded-xl p-6 text-center transition-colors duration-300 hover:border-ember/40"
            >
              <c.icon size={20} className="mx-auto text-paper-dim group-hover:text-ember transition-colors duration-300 mb-3" />
              <p className="font-mono text-[11px] text-paper-faint mb-1">{c.label}</p>
              <p className="text-sm text-paper flex items-center justify-center gap-1">
                {c.value}
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </p>
              {c.placeholder && (
                <p className="font-mono text-[10px] text-ember/70 mt-2">placeholder — update in Contact.jsx</p>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
