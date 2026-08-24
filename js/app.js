const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#menu');
const navLinks = [...document.querySelectorAll('.nav-button')];
const sections = [...document.querySelectorAll('main section[id]')];
const revealSections = [...document.querySelectorAll('.reveal-section')];
const year = document.querySelector('#year');

function setMenu(open) {
  navMenu.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
}

navToggle.addEventListener('click', () => {
  setMenu(navToggle.getAttribute('aria-expanded') !== 'true');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

document.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) setMenu(false);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) setMenu(false);
});

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 18);
}, { passive: true });

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, {
  rootMargin: '-35% 0px -55% 0px',
  threshold: 0
});

sections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('in-view');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });

revealSections.forEach((section) => revealObserver.observe(section));

header.classList.toggle('scrolled', window.scrollY > 18);
year.textContent = new Date().getFullYear();
