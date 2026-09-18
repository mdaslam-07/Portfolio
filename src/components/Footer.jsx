import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-surface-border">
      <div className="max-w-content mx-auto px-6 md:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display text-base font-semibold text-paper">Mohamed Aslam</p>
          <p className="text-paper-faint text-xs mt-1">Computer Science &amp; Engineering | IoT</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/mdaslam-07"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-paper-dim hover:text-ember transition-colors duration-200"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/aslamconnects/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-paper-dim hover:text-ember transition-colors duration-200"
          >
            <LinkedinIcon size={17} />
          </a>
        </div>

        <p className="text-paper-faint text-xs">© 2026 Mohamed Aslam</p>
      </div>
    </footer>
  );
}
