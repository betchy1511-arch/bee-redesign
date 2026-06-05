// Big Easy Electricians — Main JS
// Handles: scroll reveal, mobile nav, counter animations, sticky header

document.addEventListener('DOMContentLoaded', () => {

  // ============================================
  // SCROLL REVEAL
  // ============================================
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ============================================
  // MOBILE NAV
  // ============================================
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
        document.body.style.overflow = '';
      }
    });
  }

  // ============================================
  // STICKY HEADER — white nav, deepen shadow on scroll
  // ============================================
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 40
        ? '0 4px 24px rgba(0,0,0,0.14)'
        : '0 2px 16px rgba(0,0,0,0.08)';
    });
  }

  // ============================================
  // HERO CAROUSEL
  // ============================================
  const track = document.getElementById('heroTrack');
  const dots  = document.querySelectorAll('#heroDots .dot-btn');
  const slides = document.querySelectorAll('#heroTrack .carousel-slide');
  let current = 0, timer;

  function goTo(n) {
    current = (n + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function next() { goTo(current + 1); }

  if (track && slides.length) {
    document.querySelector('.carousel-next')?.addEventListener('click', () => { clearInterval(timer); next(); timer = setInterval(next, 4500); });
    document.querySelector('.carousel-prev')?.addEventListener('click', () => { clearInterval(timer); goTo(current - 1); timer = setInterval(next, 4500); });
    dots.forEach((d, i) => d.addEventListener('click', () => { clearInterval(timer); goTo(i); timer = setInterval(next, 4500); }));
    timer = setInterval(next, 4500);
  }

  // ============================================
  // COUNTER ANIMATIONS
  // ============================================
  const counters = document.querySelectorAll('[data-count]');

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1200;
      const start = performance.now();

      function step(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out
        const value = Math.floor(target * (1 - Math.pow(1 - progress, 3)));
        el.textContent = value + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
      countObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => countObserver.observe(el));

  // ============================================
  // SMOOTH ANCHOR SCROLL
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80; // header height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

});
