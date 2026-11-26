import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';

export default function App() {
  useScrollReveal();

  return (
    <div className="relative min-h-screen bg-navy-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
