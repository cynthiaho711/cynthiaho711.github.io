import { motion } from "motion/react";
import { SectionLabel } from "./About";

const projects = [
  {
    year: "2018",
    title: "Music Tech Fest Stockholm",
    tag: "Deep Learning · Sonification",
    body: "Used deep learning, TensorFlow, and spectral analysis to turn satellite imagery into sound — a multimodal experience for the changing earth, expressed in ChucK.",
  },
  {
    year: "2017",
    title: "IKEA Hackathon",
    tag: "Concept · Kitchen Bot",
    body: "Designed a kitchen bot to reduce food waste — helping people cook better with the ingredients already in their fridge.",
    link: "https://drive.google.com/open?id=0B-uYWzqxoG8TQXAwcXJEZUl4aHM",
  },
  {
    year: "2016",
    title: "MINDEF IoT Challenge",
    tag: "Finalist · Health Promotion",
    body: "Beacons placed around camp send push notifications and use collective Fitbit data to inform decisions and personalise soldier training.",
  },
  {
    year: "2015",
    title: "Narrative Hackathon",
    tag: "Winner · Clever Image Analysis",
    body: "Built Autimood — an app using the Narrative API and Microsoft Emotion Detection to help autistic kids understand human emotions through play.",
    link: "https://drive.google.com/file/d/0B9F0qgU5i8lNU0lGVHpRZE0wWGs/view?usp=sharing",
  },
];

export function Hackathon() {
  return (
    <section id="hackathon" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>04 — Selected Hackathons</SectionLabel>
        <h2 className="mt-6 font-display text-4xl md:text-6xl font-light max-w-3xl text-balance">
          Hacks
        </h2>

        <ul className="mt-16 divide-y divide-border border-y border-border">
          {projects.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group"
            >
              <a
                href={p.link ?? "#"}
                target={p.link ? "_blank" : undefined}
                rel="noreferrer"
                className="grid md:grid-cols-12 gap-6 py-10 items-baseline hover:bg-accent/5 transition-colors px-4 -mx-4 rounded-lg"
              >
                <span className="md:col-span-1 font-mono text-xs text-muted-foreground">{p.year}</span>
                <div className="md:col-span-5">
                  <h3 className="font-display text-3xl md:text-4xl font-light transition-transform group-hover:translate-x-2">
                    {p.title}
                  </h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-widest text-accent">{p.tag}</p>
                </div>
                <p className="md:col-span-5 text-muted-foreground leading-relaxed">{p.body}</p>
                <span className="md:col-span-1 text-right text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  {p.link ? "↗" : "•"}
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
