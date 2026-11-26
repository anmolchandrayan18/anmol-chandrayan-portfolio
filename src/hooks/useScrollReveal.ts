import { useEffect, useRef, useState } from 'react';

/**
 * Reveal-on-scroll hook. Adds `is-visible` class to elements with the
 * `reveal` class once they enter the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    const els = document.querySelectorAll('.reveal');
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/** Tracks the currently active section id based on scroll position. */
export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0] ?? '');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { threshold: [0.15, 0.4, 0.7], rootMargin: '-80px 0px -50% 0px' },
    );

    observerRef.current = observer;
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}
