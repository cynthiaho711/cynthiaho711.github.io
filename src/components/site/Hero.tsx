import { motion } from "motion/react";
import cynthia from "@/assets/cynthia.png";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-6"
          >
            ⌘ Stockholm · 59.33°N
          </motion.p>

          <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] font-light text-balance">
            <Word delay={0.05}>Hej,</Word>{" "}
            <Word delay={0.15}>I'm</Word>{" "}
            <Word delay={0.25} className="italic font-normal text-accent">Cynthia</Word>
            <span className="text-accent">.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-balance"
          >
            I build predictive and data systems that turn fragmented operational and customer data into reliable forecasts, actionable intelligence, and measurable business improvements.
            My focus is on machine learning for forecasting and risk detection, scalable data infrastructure, and analytics systems that improve decision speed across revenue and operations teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
            >
              See my work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/cynthiahokth/"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:bg-foreground/5 transition-colors"
            >
              LinkedIn CV
            </a>
            <a
              href="https://drive.google.com/file/d/1UWrdIfohtEKBbmhpRinFD71ho9X1Vtt5/view?usp=sharing"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:bg-foreground/5 transition-colors"
            >
              CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl" />
          <motion.div
            whileHover={{ rotate: -1, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden border-8 border-card shadow-2xl"
          >
            <img src={cynthia} alt="Cynthia Ho Sin Tian" className="w-full h-full object-cover" />
          </motion.div>
          <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-xl">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Currently</p>
            <p className="text-sm font-medium mt-1">Data Scientist @ Mentimeter</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono tracking-widest text-muted-foreground"
      >
        scroll ↓
      </motion.div>
    </section>
  );
}

function Word({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.span>
  );
}
