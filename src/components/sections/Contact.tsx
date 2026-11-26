import { Mail, Phone, Linkedin, Github, FileDown, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import Section from '@/components/Section';
import { profile } from '@/data/portfolio';

export default function Contact() {
  const [copied, setCopied] = useState<null | 'email' | 'phone'>(null);

  const copy = (text: string, key: 'email' | 'phone') => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 1800);
    });
  };

  const cards = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
      copyKey: 'email' as const,
    },
    {
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, '')}`,
      icon: Phone,
      copyKey: 'phone' as const,
    },
    {
      label: 'LinkedIn',
      value: 'anmol-chandrayan',
      href: profile.linkedin,
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      value: 'anmolchandrayan18',
      href: profile.github,
      icon: Github,
    },
  ];

  return (
    <Section id="contact" eyebrow="Contact" title="Let's get in touch">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="reveal">
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            I'm always open to discussing new opportunities, collaborations, or just a friendly
            conversation about technology. Feel free to reach out through any of the channels here.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <Mail size={18} />
              Email Me
            </a>
            <a
              href="/Anmol_Chandrayan_Final_Resume.pdf"
              download="Anmol_Chandrayan_Resume.pdf"
              className="btn-outline"
            >
              <FileDown size={18} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="reveal grid gap-4 sm:grid-cols-2">
          {cards.map(({ label, value, href, icon: Icon, copyKey }) => (
            <a
              key={label}
              href={href}
              target={label === 'Email' || label === 'Phone' ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="card group relative flex flex-col gap-3 p-5 hover:border-electric-400/40 hover:bg-navy-800/50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-500/10 text-electric-300 transition-all duration-300 group-hover:bg-electric-500/20 group-hover:text-electric-200">
                <Icon size={20} />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  {label}
                </p>
                <p className="mt-1 break-words text-sm font-medium text-white">{value}</p>
              </div>
              {copyKey && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    copy(copyKey === 'email' ? profile.email : profile.phone, copyKey);
                  }}
                  className="absolute right-4 top-4 rounded-md p-1.5 text-slate-500 transition-colors hover:text-electric-300"
                  aria-label={`Copy ${label}`}
                >
                  {copied === copyKey ? (
                    <Check size={15} className="text-emerald-400" />
                  ) : (
                    <Copy size={15} />
                  )}
                </button>
              )}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
