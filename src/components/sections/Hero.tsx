import { Github, Linkedin, FileDown, ArrowDown, MapPin } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(15,143,255,0.18),transparent_70%)]" />
        <div className="absolute left-1/2 top-1/4 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-electric-600/20 blur-[120px]" />
        <div className="absolute right-10 top-1/3 h-72 w-72 animate-float rounded-full bg-electric-500/10 blur-[90px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #6cc2ff 1px, transparent 1px), linear-gradient(to bottom, #6cc2ff 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="section-container w-full py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-electric-400/30 bg-electric-500/10 px-4 py-1.5 text-sm font-medium text-electric-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-electric-400" />
            </span>
            Available for opportunities
          </p>

          <h1 className="reveal font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="bg-gradient-to-r from-electric-200 via-electric-400 to-electric-600 bg-clip-text text-transparent">Anmol Chandrayan</span>
          </h1>

          <p className="reveal mt-6 text-lg font-medium text-slate-300 sm:text-xl">
            {profile.role}
          </p>

          <p className="reveal mx-auto mt-4 max-w-xl text-base text-slate-400">
            {profile.tagline}
          </p>

          <p className="reveal mt-3 inline-flex items-center justify-center gap-1.5 text-sm text-slate-500">
            <MapPin size={15} className="text-electric-400" />
            Indore Institute of Science and Technology
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="/Anmol_Chandrayan_Final_Resume.pdf"
              download="Anmol_Chandrayan_Resume.pdf"
              className="btn-primary"
            >
              <FileDown size={18} />
              Download Resume
            </a>
          </div>

          <a
            href="#about"
            aria-label="Scroll to about section"
            className="mt-16 inline-flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-electric-300"
          >
            <span className="text-xs uppercase tracking-[0.25em]">Scroll</span>
            <ArrowDown size={18} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
