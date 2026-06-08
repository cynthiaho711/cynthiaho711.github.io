import { motion } from "motion/react";
import { SectionLabel } from "./About";

const awards = [
  { t: "GIC Sparks and Smiles Award", s: "Volunteerism" },
  { t: "Chen Su Ian Bursary Award", s: "Volunteerism" },
  { t: "NOC Award", s: "Ambassador" },
  { t: "Philip Yeo Grant", s: "Innovation" },
  { t: "Entrepreneurial Studies, Swedish B2", s: "KTH Royal Institute of Technology" },
  { t: "NUS Overseas College Stockholm", s: "IoT Diabetes · Actiste / Brighter" },
  { t: "Tembusu Residential Programme", s: "Writing and critical thinking" },
];

export function Awards() {
  return (
    <section id="awards" className="py-32 bg-card/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>05 — Awards & Programmes</SectionLabel>
        <h2 className="mt-6 font-display text-4xl md:text-6xl font-light max-w-3xl text-balance">
          A handful of recognitions along the way.
        </h2>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {awards.map((a, i) => (
            <motion.div
              key={a.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="group relative rounded-xl border border-border bg-background p-6 hover:border-accent/50 transition-colors"
            >
              <span className="absolute top-4 right-4 font-mono text-xs text-accent opacity-0 group-hover:opacity-100 transition">★</span>
              <p className="font-display text-xl leading-snug">{a.t}</p>
              <p className="mt-2 text-sm text-muted-foreground">{a.s}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
