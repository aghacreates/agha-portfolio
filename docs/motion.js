'use strict';

if ('IntersectionObserver' in window && matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  const revealObserver = new IntersectionObserver(entries => {
    let position = 0;
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.style.setProperty('--reveal-delay', `${Math.min(position++, 4) * 32}ms`);
      entry.target.classList.add('motion-reveal');
      revealObserver.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -28px' });

  document.querySelectorAll('.project-card, .case-row, .case-motion, .about-copy').forEach(element => {
    revealObserver.observe(element);
  });
}
