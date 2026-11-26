import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, eyebrow, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <div className="section-container">
        <div className="reveal mb-12 sm:mb-16">
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h2 className="section-title">{title}</h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-electric-400 to-electric-600" />
        </div>
        {children}
      </div>
    </section>
  );
}
