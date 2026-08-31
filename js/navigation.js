/* ========================================
   NAVIGATION JS — Menu & Active State
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ===== Active Nav Link (URL-based) =====
  function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const fileName = currentPath.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link-custom');

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href') || '';

      // Match based on current page filename
      if (fileName === 'index.html' && (href === '../index.html' || href === 'index.html' || href === '/')) {
        link.classList.add('active');
      } else if (fileName !== 'index.html' && href.includes(fileName)) {
        link.classList.add('active');
      }
    });
  }

  setActiveNavLink();

  // ===== Mobile Menu Toggle Animation =====
  const navbarToggler = document.querySelector('.navbar-toggler-custom');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', () => {
      navbarToggler.classList.toggle('active');
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (!navbarToggler.contains(e.target) && !navbarCollapse.contains(e.target)) {
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) bsCollapse.hide();
          navbarToggler.classList.remove('active');
        }
      }
    });
  }

  // ===== Close Mobile Nav on Link Click =====
  if (navbarCollapse) {
    document.querySelectorAll('.nav-link-custom').forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) bsCollapse.hide();
          navbarToggler?.classList.remove('active');
        }
      });
    });
  }

  // ===== Keyboard Navigation =====
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navbarCollapse?.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) bsCollapse.hide();
      navbarToggler?.classList.remove('active');
    }
  });

  // ===== Scroll-based Header Hide/Show =====
  let lastScrollY = window.scrollY;
  let ticking = false;
  const navbar = document.querySelector('.navbar-custom');

  function updateHeaderVisibility() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      navbar?.classList.add('header-hidden');
    } else {
      navbar?.classList.remove('header-hidden');
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateHeaderVisibility);
      ticking = true;
    }
  });

  // ===== Back to Top =====
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
