import { motion } from "motion/react";

const links = [
  { href: "#about", label: "About" },
  { href: "#interests", label: "Interests" },
  { href: "#work", label: "Work" },
  { href: "#hackathon", label: "Hackathon" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-md shadow-lg"
    >
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          Cynthia<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-muted-foreground hover:text-foreground transition-colors group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a
          href="mailto:cynthiaho711@gmail.com"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/60 backdrop-blur px-4 py-2 text-xs font-medium hover:bg-foreground hover:text-background transition-all"
        >
          Say hej
          <span aria-hidden>→</span>
        </a>
      </div>
    </motion.header>
  );
}
