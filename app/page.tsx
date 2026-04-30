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
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <LoadingScreen />
      <ScrollProgress />
      
      <div className="fixed inset-0 z-0">
        <ParticleField />
      </div>

      <div className="relative z-20 pointer-events-none">
        <div className="pointer-events-auto">
          <Navbar />
        </div>
        <div className="pointer-events-auto">
          <Hero />
        </div>
        <div className="pointer-events-auto">
          <About />
        </div>
        <div className="pointer-events-auto">
          <Services />
        </div>
        <div className="pointer-events-auto">
          <Games />
        </div>
        <div className="pointer-events-auto">
          <LocationHours />
        </div>
        <div className="pointer-events-auto">
          <ForumPlaceholder />
        </div>
        <div className="pointer-events-auto">
          <Contact />
        </div>
        <div className="pointer-events-auto">
          <Footer />
        </div>
      </div>
    </main>
  );
}