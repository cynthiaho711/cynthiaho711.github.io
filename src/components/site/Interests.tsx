import { motion } from "motion/react";
import { SectionLabel } from "./About";

const interests = [
  {
    n: "i.",
    title: "Machine Learning",
    body: "Python, R, Julia, Java. Scikit-Learn and natural language processing — models that turn messy data into insight.",
  },
  {
    n: "ii.",
    title: "Entrepreneurship",
    body: "NUS Overseas College in Stockholm. Interned at several startups like Wellnessly, Brighter, ucare.ai and worked 4+ years in a scaleup - Mentimeter.",
  },
  {
    n: "iii.",
    title: "Writing",
    body: "Personal essays on the issues happening around the world — a way to unravel my own thoughts.",
  },
  {
    n: "iv.",
    title: "Social Work",
    body: "Reducing social inequality through tutoring and character-building programmes with CDAC and Beyond Social Service.",
  },
];

export function Interests() {
  return (
    <section id="interests" className="py-32 bg-card/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>02 — Interests</SectionLabel>
        <h2 className="mt-6 font-display text-4xl md:text-6xl font-light max-w-3xl text-balance">
          Four threads I keep pulling.
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {interests.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className="group relative bg-background p-10 hover:bg-accent/5 transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-xs text-muted-foreground">{it.n}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent">→</span>
              </div>
              <h3 className="font-display text-3xl font-normal mb-3">{it.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{it.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
