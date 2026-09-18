import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#internships", label: "Internships" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-surface-border" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-content mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#home" className="font-display text-lg md:text-xl font-semibold tracking-tight text-paper">
          Mohamed Aslam
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href} className="relative">
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  active === l.href.slice(1) ? "text-paper" : "text-paper-dim hover:text-paper"
                }`}
              >
                {l.label}
              </a>
              {active === l.href.slice(1) && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute -bottom-2 left-0 right-0 h-px bg-ember"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://github.com/mdaslam-07"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-paper-dim hover:text-ember transition-colors duration-200"
          >
            <GithubIcon size={19} />
          </a>
          <a
            href="https://www.linkedin.com/in/aslamconnects/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-paper-dim hover:text-ember transition-colors duration-200"
          >
            <LinkedinIcon size={19} />
          </a>
        </div>

        <button
          className="lg:hidden text-paper"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-ink border-b border-surface-border"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base text-paper-dim hover:text-paper transition-colors border-b border-surface-border/60 last:border-none"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-5 pt-4">
                <a href="https://github.com/mdaslam-07" target="_blank" rel="noreferrer" className="text-paper-dim" aria-label="GitHub">
                  <GithubIcon size={20} />
                </a>
                <a href="https://www.linkedin.com/in/aslamconnects/" target="_blank" rel="noreferrer" className="text-paper-dim" aria-label="LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
