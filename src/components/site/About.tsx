import { motion } from "motion/react";

const facts = [
  { k: "PhD", v: "Economics, Management & Law", sub: "KTH Royal Institute of Technology" },
  { k: "Lic.", v: "Engineering in Business Studies", sub: "KTH Royal Institute of Technology" },
  { k: "BSc", v: "Business Analytics (Hons)", sub: "National University of Singapore" },
];

export function About() {
  return (
    <section id="about" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>01 — About</SectionLabel>
        <div className="grid lg:grid-cols-12 gap-12 mt-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 font-display text-4xl md:text-6xl leading-[1.05] font-light text-balance"
          >
            A data scientist at the intersection of{" "}
            <em className="text-accent not-italic">numbers</em>, <em className="text-accent not-italic">narrative</em>,
            and <em className="text-accent not-italic">people</em>.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 space-y-4 text-muted-foreground"
          >
            <p>
              I moved from Singapore to Stockholm to follow ideas about how technology
              and business reshape each other. Along the way I've shipped things at hackathons,
              tutored kids who couldn't afford it, and learned that the best models are still
              the ones told as stories.
            </p>
            <p>
              Welcome to my space.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {facts.map((f, i) => (
            <motion.div
              key={f.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card p-8 hover:bg-accent/5 transition-colors"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-accent">{f.k}</p>
              <p className="mt-3 font-display text-2xl leading-tight">{f.v}</p>
              <p className="mt-2 text-sm text-muted-foreground">{f.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px w-12 bg-accent" />
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">{children}</span>
    </div>
  );
}
