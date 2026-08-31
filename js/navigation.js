/* ============================================
   navigation.js — Active Page Highlight & Scroll Navbar
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Active Page Highlight
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    const linkPage = href.split('/').pop();

    // Exact match for index
    if (currentPage === 'index.html' || currentPage === '') {
      if (linkPage === 'index.html' || linkPage === '') {
        link.classList.add('active');
      }
    } else if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });

  // 2. Scroll Navbar Background
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
  }

  // 3. Mobile nav — let browser navigate naturally
  // The collapse closes automatically on page load (no explicit hide needed)
  // Explicit bsCollapse.hide() caused background to fade before navigation,
  // making nav items appear to overlap with page content.

  // 4. Scroll-based active section highlighting (for index.html)
  const sections = document.querySelectorAll('section[id]');
  if (sections.length) {
    const observerOptions = {
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
  }
});
