
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080D18]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </main>
  );
}
