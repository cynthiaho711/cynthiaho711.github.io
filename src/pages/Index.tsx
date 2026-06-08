import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Interests } from "@/components/site/Interests";
import { Work } from "@/components/site/Work";
import { Hackathon } from "@/components/site/Hackathon";
import { Awards } from "@/components/site/Awards";
import { Contact } from "@/components/site/Contact";

export default function Index() {
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
