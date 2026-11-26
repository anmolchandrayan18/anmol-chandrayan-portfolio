import { Award, BadgeCheck } from 'lucide-react';
import Section from '@/components/Section';
import { certifications } from '@/data/portfolio';

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Courses & certifications I've completed"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="reveal card group flex items-start gap-4 p-5 hover:border-electric-400/40 hover:bg-navy-800/50"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric-500/10 text-electric-300 transition-all duration-300 group-hover:bg-electric-500/20 group-hover:text-electric-200">
              {cert.badge ? <BadgeCheck size={22} /> : <Award size={20} />}
            </span>
            <div>
              <h3 className="text-sm font-semibold leading-snug text-white">{cert.name}</h3>
              <p className="mt-1 text-xs text-slate-400">{cert.issuer}</p>
              {cert.badge && (
                <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300 ring-1 ring-emerald-400/30">
                  {cert.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
