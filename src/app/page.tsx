import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import Work from "@/components/Home/work";
import TimeLine from "@/components/Home/timeline";
import Platform from "@/components/Home/platform";
import Portfolio from "@/components/Home/portfolio";
import Upgrade from "@/components/Home/upgrade";
import Perks from "@/components/Home/perks";
import GlobalReach from "@/components/Home/GlobalReach";
import Faq from "@/components/Home/Faq";

export const metadata: Metadata = {
  title: "HELIX TECH Ltd | Intelligent Technology",
  description:
    "HELIX TECH Ltd is a Colorado AI technology company building intelligent products and digital infrastructure.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <GlobalReach />
      <TimeLine />
      <Platform />
      <Portfolio />
      <Upgrade />
      <Perks />
      <Faq />
    </main>
  );
}
