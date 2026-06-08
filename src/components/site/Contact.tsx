import { motion } from "motion/react";
import { SectionLabel } from "./About";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 relative">
        <SectionLabel>06 — Get in touch</SectionLabel>

        <motion.a
          href="mailto:cynthiaho711@gmail.com"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group block mt-10"
        >
          <h2 className="font-display font-light leading-[0.95] text-balance text-[clamp(2.5rem,11vw,10rem)] hover:text-accent transition-colors">
            cynthia<span className="italic">@</span>ho<span className="text-accent">.</span>
          </h2>
          <p className="mt-4 font-mono text-sm text-muted-foreground group-hover:text-foreground transition">
            cynthiaho711@gmail.com →
          </p>
        </motion.a>

        <div className="mt-20 grid md:grid-cols-3 gap-8 pt-10 border-t border-border">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Elsewhere</p>
            <ul className="mt-4 space-y-2">
              <li><a href="https://www.linkedin.com/in/cynthiahokth/" target="_blank" rel="noreferrer" className="hover:text-accent transition">LinkedIn ↗</a></li>
              <li><a href="https://github.com/cynthiaho711" target="_blank" rel="noreferrer" className="hover:text-accent transition">Github ↗</a></li>
              <li><a href="mailto:cynthiaho711@gmail.com" className="hover:text-accent transition">Email ↗</a></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Based in</p>
            <p className="mt-4">Stockholm, Sweden</p>
            <p className="text-sm text-muted-foreground">via Singapore</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Working on</p>
            <p className="mt-4">Data Science at Mentimeter</p>
            <p className="text-sm text-muted-foreground">Revenue analytics · Sales Analytics · Marketing Analytics</p>
          </div>
        </div>

        <footer className="mt-20 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground font-mono">
          <p>© {new Date().getFullYear()} Cynthia Ho Sin Tian</p>
          <p>Made with care · Stockholm</p>
        </footer>
      </div>
    </section>
  );
}
