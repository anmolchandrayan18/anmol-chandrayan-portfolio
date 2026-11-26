import { profile } from '@/data/portfolio';
import Section from '@/components/Section';

export default function About() {
  return (
    <Section id="about" eyebrow="About Me" title="A bit about my journey">
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
        <div className="reveal lg:col-span-3">
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            {profile.about}
          </p>
        </div>

        <div className="reveal lg:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="card group p-5 text-center hover:border-electric-400/40 hover:bg-navy-800/60"
              >
                <p className="font-display text-3xl font-bold text-electric-300 transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
