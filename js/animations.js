/* ========================================
   ANIMATIONS JS — Scroll Reveals & Effects
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ===== Scroll Reveal (Intersection Observer) =====
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Don't unobserve - allows re-animation if needed
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ===== Skill Bar Animation =====
  const skillBars = document.querySelectorAll('.skill-bar-fill');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-width');
        bar.style.width = targetWidth;
        skillObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => skillObserver.observe(bar));

  // ===== Staggered Fade-in =====
  const staggerContainers = document.querySelectorAll('.stagger-fade');

  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        staggerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  staggerContainers.forEach(container => staggerObserver.observe(container));

  // ===== Parallax Effect =====
  const parallaxSections = document.querySelectorAll('.parallax-section');

  const updateParallax = () => {
    parallaxSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionCenter = rect.top + rect.height / 2;
      const distanceFromCenter = sectionCenter - windowHeight / 2;
      const rate = distanceFromCenter * 0.15;
      section.style.backgroundPositionY = rate + 'px';
    });
  };

  window.addEventListener('scroll', updateParallax, { passive: true });
  updateParallax();

  // ===== Tilt 3D Effect =====
  const tiltElements = document.querySelectorAll('.tilt-3d');

  tiltElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  });

  // ===== Magnetic Buttons =====
  const magneticBtns = document.querySelectorAll('.btn-magnetic');

  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });

  // ===== Text Reveal on Scroll =====
  const textReveals = document.querySelectorAll('.text-reveal');

  const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.clipPath = 'inset(0 0 0 0)';
        textObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  textReveals.forEach(el => {
    el.style.clipPath = 'inset(0 100% 0 0)';
    el.style.transition = 'clip-path 0.8s cubic-bezier(0.77, 0, 0.175, 1)';
    textObserver.observe(el);
  });

  // ===== Counter Animation (enhanced) =====
  const animatedCounters = document.querySelectorAll('[data-count]');

  const counterAnimObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;
        let current = 0;

        const interval = setInterval(() => {
          current += target / steps;
          if (current >= target) {
            el.textContent = prefix + target + suffix;
            clearInterval(interval);
          } else {
            el.textContent = prefix + Math.floor(current) + suffix;
          }
        }, stepDuration);

        counterAnimObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  animatedCounters.forEach(counter => counterAnimObserver.observe(counter));

  // ===== Smooth Appear for Timeline Items =====
  const timelineItems = document.querySelectorAll('.timeline-item');

  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
        timelineObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = `all 0.6s ${index * 0.1}s cubic-bezier(0.5, 0, 0, 1)`;
    timelineObserver.observe(item);
  });

  // ===== Image Lazy Loading =====
  const lazyImages = document.querySelectorAll('img[data-src]');

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });

  lazyImages.forEach(img => imageObserver.observe(img));

  // ===== Progress Bar for Page Scroll =====
  const progressBar = document.querySelector('.scroll-progress');

  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = scrollPercent + '%';
    });
  }

  // ===== Hover Card Shine Effect =====
  const shineCards = document.querySelectorAll('.shine-effect');

  shineCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', x + 'px');
      card.style.setProperty('--mouse-y', y + 'px');
    });
  });
});
