import { UIProvider } from "@/components/UIProvider";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
import { Verticals } from "@/components/Verticals";
import { Labs } from "@/components/Labs";
import { TrustGap } from "@/components/TrustGap";
import { Story } from "@/components/Story";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { VerticalDrawer } from "@/components/VerticalDrawer";
import { Motion } from "@/components/Motion";

export default function Home() {
  return (
    <UIProvider>
      <Nav />
      <main>
        <Hero />
        <Clients />
        <Verticals />
        <Labs />
        <TrustGap />
        <Story />
        <Team />
        <Contact />
      </main>
      <Footer />
      <VerticalDrawer />
      <Motion />
    </UIProvider>
  );
}
