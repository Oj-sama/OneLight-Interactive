import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Games from "@/components/Games";
import LocationHours from "@/components/LocationHours";
import ForumPlaceholder from "@/components/ForumPlaceholder";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="fixed inset-0 z-0">
        <ParticleField />
      </div>

      <div className="relative z-20">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Games />
        <LocationHours />
        <ForumPlaceholder />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}