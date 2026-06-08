import { motion } from "motion/react";
import { SectionLabel } from "./About";

const projects = [
  {
    tier: "flagship",
    year: "2022-2026",
    title: "Mentimeter, Data Scientist",
    tag: "Machine Learning · Time Series Forecasting · Revenue Analytics · dbt · Salesforce · Snowflake · Looker",
    body: [
      "Built ML models for churn prediction and ARR forecasting, improving retention rates by 20%.",
      "Improved revenue predictability for strategic planning and executive forecasting.",
      "Designed unified analytics layer in Looker integrating Salesforce, Customer.io, and Intercom.",
      "Automated executive reporting, reducing manual effort by 8 hours/month and improving consistency."
    ]
  },
  {
    tier: "supporting",
    year: "2017-2021",
    title: "PhD — Spatial Data Analysis",
    tag: "GIS · Difference-in-Differences · Python · R",
    body: [
      "Analyzed effects of bank branch closures on SME formation and capital structure using spatial econometrics."
    ]
  },
  {
    tier: "supporting",
    year: "2017",
    title: "Ucare.ai, Data Scientist",
    tag: "Apache Spark · AWS Lambda · CloudWatch · Python",
    body: [
      "Built scalable healthcare ML pipelines enabling early risk detection and improving patient outcomes.",
      "Reduced processing time by 90% through distributed data architecture."
    ]
  },
  {
    tier: "supporting",
    year: "2015-2016",
    title: "Brighter, Software Engineer",
    tag: "SQL · System Design · Medical Data",
    body: [
      "Designed database architecture for patient health data supporting medical device integration."
    ]
  },
  {
    tier: "supporting",
    year: "2015",
    title: "PSA Singapore, System Analyst",
    tag: "R · Time-series Forecasting · Optimization",
    body: [
      "Built predictive models for port operations improving logistics efficiency and vessel scheduling."
    ]
  },
  {
    tier: "supporting",
    year: "2014-2015",
    title: "Wellnessly, Full-Stack Developer",
    tag: "Ruby on Rails · Web Scraping",
    body: [
      "Built affiliate deals platform and scraper for partner deal aggregation (Groupon data extraction)."
    ]
  }
];

export function Work() {
  const flagship = projects.filter(p => p.tier === "flagship");
  const supporting = projects.filter(p => p.tier !== "flagship");

  return (
    <section id="work" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>03 — Selected Work</SectionLabel>

        <h2 className="mt-6 font-display text-4xl md:text-6xl font-light max-w-3xl text-balance">
          Selected Projects From My Work
        </h2>

        {/* ================= FLAGSHIP ================= */}
        <div className="mt-20 space-y-12">
          {flagship.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="border-y border-border py-16"
            >
              <div className="grid md:grid-cols-12 gap-10">
                
                <div className="md:col-span-2 font-mono text-sm text-muted-foreground">
                  {p.year}
                </div>

                <div className="md:col-span-10">
                  <h3 className="font-display text-5xl font-light leading-tight">
                    {p.title}
                  </h3>

                  <p className="mt-3 font-mono text-xs uppercase tracking-widest text-accent">
                    {p.tag}
                  </p>

                  <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
                    {p.body.map((item, idx) => (
                      <p key={idx} className="flex gap-3">
                        <span className="text-accent">•</span>
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= SUPPORTING ================= */}
        <div className="mt-28">
          <h3 className="text-xs uppercase tracking-widest text-muted-foreground">
            Additional Experience
          </h3>

          <ul className="mt-8 divide-y divide-border border-y border-border">
            {supporting.map((p, i) => (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="py-8 grid md:grid-cols-12 gap-6 opacity-80 hover:opacity-100 transition-opacity"
              >
                <div className="md:col-span-2 font-mono text-xs text-muted-foreground">
                  {p.year}
                </div>

                <div className="md:col-span-10">
                  <div className="font-light text-lg">
                    {p.title}
                  </div>

                  <div className="mt-1 text-xs text-muted-foreground font-mono uppercase tracking-widest">
                    {p.tag}
                  </div>

                  <div className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {p.body[0]}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}