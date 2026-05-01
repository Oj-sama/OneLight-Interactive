import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import Image from "next/image";
import GameCarousel from "@/components/GameCarousel";
import {
  FaYoutube,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

const galleryImages = Array.from({ length: 13 }, (_, i) => `/images/gamepics/${i + 1}.png`);

export default function CleaningSimulatorPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="fixed inset-0 z-0">
        <ParticleField />
      </div>

      <div className="relative z-20 pointer-events-none">
        <div className="pointer-events-auto">
          <Navbar />
        </div>

        {/* Hero Section */}
        <section className="relative px-6 pb-20 pt-32 text-center md:pt-40 pointer-events-none">
          <div className="pointer-events-none absolute inset-0 z-0 bg-slate-950/20" />

          <div className="relative z-10 mx-auto max-w-5xl pointer-events-none">
            <h1 className="brand-font text-5xl font-bold uppercase tracking-widest text-white md:text-7xl">
              Cleaning Simulator
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 md:text-xl">
              Immerse yourself in the ultimate cleaning experience. Restore order, wipe away the grime, and transform spaces in this satisfying simulation game.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 pointer-events-auto">
              <a
                href="https://www.meta.com/experiences/cleaning-simulator-vr/26409028195374123"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-full border border-cyan-400/40 bg-cyan-400/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100 transition hover:border-cyan-400/80"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent translate-x-[-120%] transition duration-700 group-hover:translate-x-[120%]" />
                <span className="relative z-10">Wishlist Now</span>
              </a>

              <div className="flex items-center gap-4 text-slate-400">
                <a href="https://www.youtube.com/channel/UCIOqbSW-AxO-kLZaX2VrtQw" target="_blank" rel="noopener noreferrer" className="group relative transition">
                  <FaYoutube size={24} className="transition duration-300 group-hover:scale-110 group-hover:text-cyan-300" />
                  <span className="absolute inset-0 rounded-full bg-cyan-400/20 opacity-0 blur-md transition group-hover:opacity-100" />
                </a>
                <a href="https://x.com/cleaning_sim" target="_blank" rel="noopener noreferrer" className="group relative transition">
                  <FaXTwitter size={24} className="transition duration-300 group-hover:scale-110 group-hover:text-cyan-300" />
                  <span className="absolute inset-0 rounded-full bg-cyan-400/20 opacity-0 blur-md transition group-hover:opacity-100" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61588766352928" target="_blank" rel="noopener noreferrer" className="group relative transition">
                  <FaFacebookF size={24} className="transition duration-300 group-hover:scale-110 group-hover:text-cyan-300" />
                  <span className="absolute inset-0 rounded-full bg-cyan-400/20 opacity-0 blur-md transition group-hover:opacity-100" />
                </a>
                <a href="https://www.instagram.com/cleaning_simulator/" target="_blank" rel="noopener noreferrer" className="group relative transition">
                  <FaInstagram size={24} className="transition duration-300 group-hover:scale-110 group-hover:text-cyan-300" />
                  <span className="absolute inset-0 rounded-full bg-cyan-400/20 opacity-0 blur-md transition group-hover:opacity-100" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trailer Section */}
        <section className="relative px-6 py-20 pointer-events-auto">
          <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/40 p-2 backdrop-blur-sm sm:p-4">
            <div className="aspect-video w-full overflow-hidden rounded-2xl">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/YcKwQNUl1zE"
                title="Cleaning Simulator Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="relative px-0 py-20 overflow-hidden pointer-events-auto">
          <div className="relative z-10 mx-auto max-w-[1920px]">
            <div className="mb-12 text-center">
              <h2 className="brand-font text-3xl text-white md:text-5xl">Gallery</h2>
            </div>
            
            <GameCarousel />
          </div>
        </section>

        <div className="pointer-events-auto">
          <Footer />
        </div>
      </div>
    </main>
  );
}
