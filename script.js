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
