import myPhoto from "../assets/profile/my-photo.png";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-grid bg-grid"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] w-[560px] h-[560px] rounded-full bg-ember/10 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-ink/0 to-ink" />

      <div className="max-w-content mx-auto px-6 md:px-10 relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="font-mono text-xs md:text-sm text-ember tracking-wide mb-6 flex items-center gap-3"
          >
            <span className="inline-block w-8 h-px bg-ember" />
            Computer Science &amp; Engineering
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[2.1rem] leading-[1.05] sm:text-5xl md:text-6xl font-semibold text-paper tracking-tight"
          >
            Hi, I&rsquo;m
            <br />
            Mohamed Aslam H
          </motion.h1>

          <motion.p
            variants={item}
            className="font-display text-xl md:text-2xl text-ember mt-5 font-medium"
          >
            Aspiring Software Engineer
          </motion.p>

          <motion.p
            variants={item}
            className="text-paper-dim text-base md:text-lg mt-6 max-w-lg leading-relaxed"
          >
            CSE (IoT) student passionate about software development, database solutions, and 
            intelligent IoT systems that connect technology with real-world problems
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 mt-10">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-ember text-ink font-medium text-sm px-6 py-3.5 rounded-full transition-transform duration-200 hover:-translate-y-0.5"
            >
              View My Projects
              <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 border border-surface-border text-paper text-sm font-medium px-6 py-3.5 rounded-full transition-colors duration-200 hover:border-ember hover:text-ember"
              title="Add your resume file at public/resume.pdf"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/mdaslam-07"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-paper-dim text-sm font-medium px-2 py-3.5 transition-colors duration-200 hover:text-paper"
            >
              <GithubIcon size={17} />
              GitHub
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="relative mx-auto w-full max-w-[340px] lg:max-w-none"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-surface-border bg-surface">
            {/* Replace this block with: <img src={yourPhoto} alt="Mohamed Aslam" className="w-full h-full object-cover" /> */}
            <img src={myPhoto} alt="Mohamed Aslam H" className="w-full h-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
          </div>

          {/* corner brackets */}
          <span className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-ember/70 rounded-tl-md" />
          <span className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-ember/70 rounded-br-md" />

          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-surface border border-surface-border rounded-full px-5 py-2 font-mono text-[11px] text-paper-dim whitespace-nowrap shadow-lg">
            Learn. Build. Innovate.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
