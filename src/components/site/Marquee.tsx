import { motion } from "motion/react";

const items = [
  "Python", "SQL", "LookML", "R", "Java", "Ruby on Rails", "HTML", "CSS",
  "Scikit-learn", "TensorFlow", "XGBoost",
  "Looker", "Mixpanel", "Metabase", "GA4", "Tableau", "Qlikview", "D3.js",
  "Snowflake", "Apache Spark", "MongoDB", "AWS (Lambda, S3, EC2)",
  "Microsoft Azure", "Prefect", "DBT",
  "Salesforce", "Customer.io", "Intercom", "QGIS", "GeoDa"
];

export function Marquee() {
  return (
    <section className="py-12 border-y border-border bg-card/30 overflow-hidden marquee-mask">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-2xl md:text-3xl italic text-muted-foreground flex items-center gap-12">
            {t}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
