/* ========================================
   MAIN JS — Core Functionality
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ===== Preloader =====
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('hidden');
      }, 500);
    });
    // Fallback: hide after 3 seconds
    setTimeout(() => {
      preloader.classList.add('hidden');
    }, 3000);
  }

  // ===== Navbar Scroll Effect =====
  const navbar = document.querySelector('.navbar-custom');
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar background
    if (navbar) {
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Back to top button
    if (backToTop) {
      if (scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  });

  // ===== Smooth Scroll for Anchor Links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = navbar ? navbar.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });  });

  // ===== Typed.js Initialization =====
  const typedElement = document.querySelector('.typed-text');
  if (typedElement && typeof Typed !== 'undefined') {
    new Typed('.typed-text', {
      strings: [
        'Computer Science Student',
        'Full-Stack Developer',
        'Machine Learning Enthusiast',
        'Open Source Contributor',
        'Research Assistant'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }

  // ===== Counter Animation =====
  const counters = document.querySelectorAll('.counter-value');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
          current += increment;
          if (current < target) {
            counter.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };
        updateCounter();
        counterObserver.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  // ===== Ripple Button Effect =====
  document.querySelectorAll('.btn-primary-custom, .btn-outline-custom').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple-effect');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // ===== Tooltip Initialization (Bootstrap) =====
  const tooltipTriggers = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggers.forEach(trigger => {
    new bootstrap.Tooltip(trigger);
  });

  // ===== Lightbox for Images =====
  const lightboxImages = document.querySelectorAll('[data-lightbox]');
  lightboxImages.forEach(img => {
    img.addEventListener('click', function() {
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.9); z-index: 99999; display: flex;
        align-items: center; justify-content: center; cursor: pointer;
      `;
      const imgClone = document.createElement('img');
      imgClone.src = this.src;
      imgClone.style.cssText = 'max-width: 90%; max-height: 90%; border-radius: 12px;';
      overlay.appendChild(imgClone);
      document.body.appendChild(overlay);
      overlay.addEventListener('click', () => overlay.remove());
    });
  });
});
