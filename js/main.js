/* ============================================
   main.js — AOS, Typed.js, tsParticles Init
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // 1. AOS Initialization
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50
  });

  // 2. Typed.js Initialization
  if (document.querySelector('.typed-text')) {
    new Typed('.typed-text', {
      strings: [
        'Computer Science Student',
        'Full-Stack Developer',
        'Problem Solver',
        'Software Engineer'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true
    });
  }

  // 3. tsParticles Setup (Hero background)
  if (document.getElementById('tsparticles')) {
    tsParticles.load('tsparticles', {
      particles: {
        number: { value: 50 },
        color: { value: '#ffffff' },
        opacity: { value: 0.3 },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.15,
          width: 1
        },
        move: { enable: true, speed: 1.5 }
      },
      interactivity: {
        events: { onHover: { enable: true, mode: 'grab' } }
      }
    });
  }

  // 4. Back to Top Button
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 5. Vanilla-Tilt Init
  if (typeof VanillaTilt !== 'undefined') {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    if (tiltElements.length) {
      VanillaTilt.init(tiltElements, {
        max: 8,
        speed: 400,
        glare: true,
        'max-glare': 0.15
      });
    }
  }
});
