import { CheckCircle2, Circle, AlertCircle, Layers, Github } from 'lucide-react';
import Section from '@/components/Section';
import { projects, profile } from '@/data/portfolio';

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I'm building">
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project) => {
          const inProgress = project.status === 'In Progress';
          return (
            <article
              key={project.title}
              className="reveal card group flex flex-col overflow-hidden hover:border-electric-400/40 hover:shadow-[0_0_40px_-12px] hover:shadow-electric-500/30"
            >
              {/* Header band */}
              <div className="relative border-b border-white/10 bg-gradient-to-br from-navy-800/80 to-navy-900/80 p-6">
                <div
                  className={`absolute inset-0 opacity-30 ${
                    inProgress
                      ? 'bg-[radial-gradient(60%_80%_at_80%_0%,rgba(245,158,11,0.25),transparent)]'
                      : 'bg-[radial-gradient(60%_80%_at_80%_0%,rgba(15,143,255,0.25),transparent)]'
                  }`}
                />
                <div className="relative flex items-start justify-between gap-4">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                      inProgress
                        ? 'bg-amber-500/15 text-amber-300'
                        : 'bg-electric-500/15 text-electric-300'
                    }`}
                  >
                    <Layers size={24} />
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                      inProgress
                        ? 'bg-amber-500/15 text-amber-300 ring-1 ring-amber-400/30'
                        : 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30'
                    }`}
                  >
                    {inProgress ? <AlertCircle size={13} /> : <CheckCircle2 size={13} />}
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold leading-snug text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {inProgress ? 'Proposed Capabilities' : 'Key Features'}
                  </p>
                  <ul className="space-y-2.5">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                        {inProgress ? (
                          <Circle size={16} className="mt-0.5 shrink-0 text-amber-400/70" />
                        ) : (
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-electric-400" />
                        )}
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-navy-800/60 px-2.5 py-1 font-mono text-xs text-electric-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-electric-300"
                  >
                    <Github size={16} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
