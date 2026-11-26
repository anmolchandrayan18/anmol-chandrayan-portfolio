import { GraduationCap, Calendar, Award } from 'lucide-react';
import Section from '@/components/Section';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="My academic background">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-electric-400/60 via-white/10 to-transparent sm:left-6" />

        <div className="space-y-8">
          {education.map((item) => (
            <div key={item.degree} className="reveal relative pl-16 sm:pl-20">
              {/* Node */}
              <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-xl border border-electric-400/30 bg-navy-900 text-electric-300 sm:h-12 sm:w-12">
                <GraduationCap size={22} />
              </span>

              <div className="card p-6 transition-all duration-300 hover:border-electric-400/40 hover:bg-navy-800/50">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{item.degree}</h3>
                    <p className="mt-1 text-sm text-electric-300">{item.institution}</p>
                    <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
                  </div>
                  <div className="flex flex-col items-start gap-2 sm:items-end">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                      <Calendar size={13} />
                      {item.period}
                    </span>
                    {item.score && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-electric-500/15 px-3 py-1 text-xs font-semibold text-electric-200 ring-1 ring-electric-400/30">
                        <Award size={13} />
                        {item.score}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
