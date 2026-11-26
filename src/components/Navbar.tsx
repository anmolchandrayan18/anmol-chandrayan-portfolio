import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useScrollReveal';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-navy-950/85 backdrop-blur-xl shadow-lg shadow-navy-950/50'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between lg:h-20">
        <button
          onClick={() => handleNav('#home')}
          className="font-display text-lg font-bold tracking-tight text-white"
          aria-label="Go to home"
        >
          <span className="text-electric-400">{'<'}</span>
          Anmol<span className="text-electric-400">C</span>
          <span className="text-electric-400">{'/>'}</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`relative rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-electric-300' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-electric-400" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <a
            href="/Anmol_Chandrayan_Final_Resume.pdf"
            download="Anmol_Chandrayan_Resume.pdf"
            className="btn-primary !px-5 !py-2.5 text-sm"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-slate-200 transition-colors hover:text-electric-300 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-navy-950/95 backdrop-blur-xl transition-[max-height] duration-300 lg:hidden ${
          open ? 'max-h-[32rem]' : 'max-h-0'
        }`}
      >
        <ul className="section-container flex flex-col gap-1 py-4">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-electric-500/10 text-electric-300'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
          <li className="mt-2">
            <a
              href="/Anmol_Chandrayan_Final_Resume.pdf"
              download="Anmol_Chandrayan_Resume.pdf"
              className="btn-primary w-full"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
