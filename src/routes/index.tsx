import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Interests } from "@/components/site/Interests";
import { Work } from "@/components/site/Work";
import { Hackathon } from "@/components/site/Hackathon";
import { Awards } from "@/components/site/Awards";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cynthia Ho Sin Tian — Data Scientist, Stockholm" },
      { name: "description", content: "Personal site of Cynthia Ho Sin Tian — Data Scientist. Mathematics, machine learning, writing, and social work." },
      { property: "og:title", content: "Cynthia Ho Sin Tian — Data Scientist" },
      { property: "og:description", content: "PhD in Economics, Management & Law at KTH Royal Institute of Technology." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Interests />
      <Work />
      <Hackathon />
      <Awards />
      <Contact />
    </main>
  );
}
