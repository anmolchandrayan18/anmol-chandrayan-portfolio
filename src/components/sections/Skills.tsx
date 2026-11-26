import { Code2, Server, Database, Layout, GitBranch, Brain } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Section from '@/components/Section';
import { skillCategories } from '@/data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Server,
  Database,
  Layout,
  GitBranch,
  Brain,
};

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Technical Skills" title="Tools & technologies I work with">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat) => {
          const Icon = iconMap[cat.icon] ?? Code2;
          return (
            <div
              key={cat.title}
              className="reveal card group p-6 hover:border-electric-400/40 hover:bg-navy-800/50"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-500/10 text-electric-300 transition-all duration-300 group-hover:bg-electric-500/20 group-hover:text-electric-200">
                  <Icon size={22} />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-electric-400/50 hover:bg-electric-500/10 hover:text-electric-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
