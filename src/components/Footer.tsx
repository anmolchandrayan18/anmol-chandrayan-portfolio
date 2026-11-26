import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { label: 'GitHub', href: profile.github, icon: Github },
    { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
    { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
  ];

  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="section-container py-12">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-display text-xl font-bold text-white">{profile.name}</p>
            <p className="mt-1 text-sm text-slate-400">{profile.role}</p>
          </div>

          <div className="flex items-center gap-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition-all duration-300 hover:border-electric-400/60 hover:bg-electric-500/10 hover:text-electric-300"
              >
                <Icon size={20} />
              </a>
            ))}
            <a
              href="/Anmol_Chandrayan_Final_Resume.pdf"
              download="Anmol_Chandrayan_Resume.pdf"
              aria-label="Download resume"
              className="group rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition-all duration-300 hover:border-electric-400/60 hover:bg-electric-500/10 hover:text-electric-300"
            >
              <FileDown size={20} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>&copy; {year} {profile.name}. All rights reserved.</p>
          <p>Designed &amp; built with React &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
