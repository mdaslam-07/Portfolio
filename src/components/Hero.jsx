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
          <div className="relative rounded-2xl border border-surface-border bg-surface px-6 py-10 sm:py-12 flex flex-col items-center text-center shadow-lg">
            <div className="w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden border-2 border-ember/60 ring-4 ring-ember/10 bg-surface-raised">
              <img
                src={myPhoto}
                alt="Mohamed Aslam"
                className="w-full h-full object-cover object-[50%_18%]"
              />
            </div>
            <p className="font-display text-lg font-semibold text-paper mt-7">Learn. Build. Innovate.</p>
            <p className="font-mono text-[11px] text-paper-dim mt-2">Computer Science &amp; Engineering</p>
          </div>

          {/* corner brackets */}
          <span className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-ember/70 rounded-tl-md" />
          <span className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-ember/70 rounded-br-md" />

        </motion.div>
      </div>
    </section>
  );
}
