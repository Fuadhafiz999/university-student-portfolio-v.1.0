# Ahshan Hafiz Fuad — Portfolio

A modern, responsive, animated personal portfolio website for a Computer Science student. Built as a multi-page site with a single-page feel, featuring smooth animations, particle effects, and a consistent design system.

## 🚀 Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Markup | HTML5 | Semantic, accessible structure |
| CSS | Bootstrap 5.3.3 | Grid system & utility classes |
| Icons | Font Awesome 6.5.1 | Standard UI icon set |
| Fonts | Google Fonts | Inter, Space Grotesk, JetBrains Mono |
| Animations | AOS 2.3.1 | Scroll-triggered animations |
| Typing | Typed.js 2.1.0 | Hero text typing effect |
| Particles | tsParticles 2.12.0 | Canvas particle background |
| 3D Effects | Vanilla-Tilt.js 1.8.1 | Declarative 3D tilt cards |

## 📁 Project Structure

```
portfolio/
├── index.html              # Homepage (Hero, Stats, Skills, Projects, Testimonials, CTA)
├── README.md
│
├── pages/
│   ├── about.html          # Bio, education timeline, skill bars
│   ├── achievements.html   # Awards, publications, leadership
│   ├── training.html       # Certifications, internships, courses
│   ├── portfolio.html      # Filterable project grid
│   ├── contact.html        # Contact form, social links
│   └── theme.html          # Live theme customizer
│
├── css/
│   ├── base.css            # CSS custom properties, resets, typography
│   ├── layout.css          # Section wrappers, hero, header, footer
│   ├── components.css      # Buttons, cards, badges, timelines
│   └── responsive.css      # Mobile nav & responsive overrides
│
├── js/
│   ├── main.js             # AOS, Typed.js, tsParticles init
│   └── navigation.js       # Active page highlight & scroll navbar
│
└── pdf/
    └── Ahshan Hafiz Fuad - CV.pdf
```

## 🎨 Design System

The portfolio uses a comprehensive CSS custom property system defined in `css/base.css`:

- **Brand Palette:** Primary blue (#2563eb), Accent cyan (#06b6d4), Dark secondary (#0f172a)
- **Typography:** Inter (body), Space Grotesk (headings), JetBrains Mono (code/labels)
- **Gradients:** Primary gradient, hero background gradient
- **Effects:** Glass morphism, glow shadows, smooth transitions

## 📱 Responsive Design

- **Desktop (1200px+):** Full layout with side-by-side sections
- **Tablet (768px-991px):** Adapted grid, collapsible navigation
- **Mobile (<768px):** Full-screen overlay navigation, stacked layouts

## 🛠️ Getting Started

1. Open `index.html` in a modern browser
2. No build tools or server required — all libraries are loaded via CDN
3. Customize content by editing the HTML files directly

## 📄 License

This portfolio is for personal use. All rights reserved to Ahshan Hafiz Fuad.
