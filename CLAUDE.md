# CLAUDE.md — Alex Morgan Portfolio Project

## Project Overview

A modern, responsive, animated personal portfolio website for a Computer Science student (Ahshan Hafiz Fuad). Built as a multi-page site (sharing a consistent design system, navbar, and footer) with a single-page feel.

**Core Philosophy:** Rely exclusively on battle-tested, battle-proven international frameworks and zero-bug, developer-approved libraries. **Do not write custom JS for features that can be handled by standard libraries or pure CSS.**

---

## Tech Stack & Global Dependencies

All libraries must be loaded via official, battle-tested CDNs (JsDelivr / cdnjs).

| Layer | Technology / Library | Version | Purpose & Description |
|-------|----------------------|---------|-----------------------|
| Markup | HTML5 | Standard | Semantic, accessible structure |
| CSS Base | Bootstrap | 5.3.3 | Grid system, breakpoint utility classes (`d-flex`, `gap-3`, `rounded-4`, etc.) |
| Mobile Nav | Bootstrap JS Bundle | 5.3.3 | Native collapse & dropdown components (NO custom JS mobile menus) |
| Icons | Font Awesome | 6.5.1 | Standard UI icon set |
| Fonts | Google Fonts | — | Inter (Body), Space Grotesk (Headings), JetBrains Mono (Code/Labels) |
| Scroll Reveals | AOS (Animate On Scroll) | 2.3.1 | Declarative scroll-triggered animations via `data-aos` |
| Hero Typing | Typed.js | 2.1.0 | Standard text-typing animation framework |
| Hero Particles | tsParticles Engine | 2.12.0 | Lightweight, stable, professional canvas particle system |
| 3D Card Effects | Vanilla-Tilt.js | 1.8.1 | High-performance, declarative 3D tilt framework (`data-tilt`) |

### Standard CDN Declarations
```html
<!-- Stylesheets -->
<link rel="stylesheet" href="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css)">
<link rel="stylesheet" href="[https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css)">
<link rel="stylesheet" href="[https://unpkg.com/aos@2.3.1/dist/aos.css](https://unpkg.com/aos@2.3.1/dist/aos.css)">

<!-- JavaScript Libraries (Load before body end) -->
<script src="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js)"></script>
<script src="[https://unpkg.com/aos@2.3.1/dist/aos.js](https://unpkg.com/aos@2.3.1/dist/aos.js)"></script>
<script src="[https://cdn.jsdelivr.net/npm/typed.js@2.1.0/dist/typed.umd.js](https://cdn.jsdelivr.net/npm/typed.js@2.1.0/dist/typed.umd.js)"></script>
<script src="[https://cdn.jsdelivr.net/npm/tsparticles-engine@2.12.0/tsparticles.engine.min.js](https://cdn.jsdelivr.net/npm/tsparticles-engine@2.12.0/tsparticles.engine.min.js)"></script>
<script src="[https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.1/vanilla-tilt.min.js](https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.1/vanilla-tilt.min.js)"></script>




portfolio/
├── index.html                    # Homepage (Hero, Stats, Skills, Projects, Testimonials, CTA)
├── README.md                     # Documentation
│
├── pages/
│   ├── about.html                # Bio, education timeline, skill bars
│   ├── achievements.html         # Awards, publications, leadership
│   ├── training.html             # Certifications, internships, courses
│   ├── portfolio.html            # Filterable project grid
│   ├── contact.html              # Contact form, social links
│   └── theme.html                # Live theme customizer
│
├── css/
│   ├── base.css                  # CSS custom properties, resets, typography
│   ├── layout.css                # Section wrappers, hero, header, footer layout
│   ├── components.css            # Buttons, glass cards, badges, timelines
│   └── responsive.css            # Custom CSS overrides for Bootstrap mobile menu matching design vibe
│
├── js/
│   ├── main.js                   # Minimal init script (AOS, Typed.js, tsParticles setup)
│   └── navigation.js             # Active page route highlight & scroll navbar styling
│
└── pdf/
    └── Ahshan Hafiz Fuad - CV.pdf# Downloadable resume
CSS Architecture & Design System
Loading Order
HTML
<link rel="stylesheet" href="[https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css)">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/responsive.css">
Design Variables (base.css)
CSS
:root {
  /* Brand Palette */
  --primary: #2563eb;
  --primary-dark: #1d4ed8;
  --primary-light: #60a5fa;
  --secondary: #0f172a;
  --accent: #06b6d4;

  /* Neutrals */
  --gray-900: #0f172a;
  --gray-800: #1e293b;
  --gray-700: #334155;
  --gray-100: #f1f5f9;

  /* Typography */
  --font-primary: 'Inter', sans-serif;
  --font-heading: 'Space Grotesk', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Gradients */
  --gradient-primary: linear-gradient(135deg, var(--primary), var(--accent));
  --gradient-hero: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%);
}
Mobile Navigation Rules (Strict Zero-JS Customization)
The mobile hamburger menu must strictly follow Bootstrap 5 standard structural and collapse mechanics. Do not write custom JavaScript event listeners (addEventListener('click'), manual class toggling, or custom drawer logic) to manage mobile open/close states.

Execution Policy
Use Bootstrap's standard markup: <nav class="navbar navbar-expand-lg"> with standard <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mainNav">.

All visual styling, animations, colors, and full-screen overlay appearances must be achieved strictly via CSS in responsive.css targeting Bootstrap's built-in .navbar-collapse, .collapsing, and .show classes.

Responsive Breakpoint Overrides (responsive.css)
CSS
/* Mobile styling match using native Bootstrap standard states */
@media (max-width: 991.98px) {
  .navbar-collapse {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(20px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1050;
    transition: all 0.35s ease-in-out;
  }

  .navbar-nav {
    text-align: center;
    gap: 1.5rem;
  }
}
Approved JavaScript Implementations (js/main.js)
All JS functionality is initialized through standard library APIs without writing raw math or reinventing handlers.

JavaScript
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
});
Guidelines for Developers
No Raw Code for Visual FX: If a feature requires 3D tilt, scroll reveals, particle effects, or typing animations, use vanilla-tilt, AOS, tsParticles, or Typed.js. Do not write raw IntersectionObserver, mousemove perspective calculations, or canvas loop math.

Bootstrap First: Use Bootstrap utilities for layout grid, padding, flex alignments, and responsive hides (d-none d-lg-block).

No External JS for Mobile Menu: Use standard Bootstrap collapse markup. Customize aesthetics exclusively via pure CSS applied to .navbar-collapse.


<ElicitationsGroup message="Next steps to move this project forward:">

  <Elicitation label="Generate base.css and responsive.css matching this specification" query="Write the base.css and responsive.css files according to the rules defined in the updated CLAUDE.md."/>

  <Elicitation label="Provide the updated index.html with Bootstrap collapse & libraries loaded" query="Write the full index.html file structured with all specified framework CDNs and native Bootstrap collapse navigation."/>

  <ElicitationsGroup>