const navLinks = [...document.querySelectorAll('.side-nav a')];
const revealItems = [...document.querySelectorAll('.reveal')];

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item, i) => {
  item.style.transitionDelay = `${Math.min(i * 45, 180)}ms`;
  revealObserver.observe(item);
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', active);
      });
    });
  },
  { threshold: 0.45 }
);

navLinks.forEach((link) => {
  const target = document.querySelector(link.getAttribute('href'));
  if (target) sectionObserver.observe(target);
});
