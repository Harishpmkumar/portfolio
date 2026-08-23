import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ExportWidget from "@/components/ExportWidget";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <ExportWidget />
      <Contact />
      <Footer />
    </main>
  );
}
