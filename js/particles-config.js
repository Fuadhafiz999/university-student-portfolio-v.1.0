/* ========================================
   PARTICLES CONFIG — Hero Background Effect
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  const particlesContainer = document.getElementById('particles-js');

  if (!particlesContainer) return;

  // ===== Particle System (Lightweight Custom) =====
  class ParticleSystem {
    constructor(container) {
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      container.appendChild(this.canvas);

      this.particles = [];
      this.mouse = { x: null, y: null };
      this.particleCount = 60;
      this.connectionDistance = 150;
      this.mouseRadius = 200;

      this.init();
    }

    init() {
      this.resize();
      this.createParticles();
      this.bindEvents();
      this.animate();
    }

    resize() {
      this.canvas.width = this.canvas.parentElement.offsetWidth;
      this.canvas.height = this.canvas.parentElement.offsetHeight;
      this.canvas.style.position = 'absolute';
      this.canvas.style.top = '0';
      this.canvas.style.left = '0';
      this.canvas.style.pointerEvents = 'none';
    }

    createParticles() {
      this.particles = [];
      const count = Math.min(this.particleCount, Math.floor((this.canvas.width * this.canvas.height) / 15000));

      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    }

    bindEvents() {
      window.addEventListener('resize', () => {
        this.resize();
        this.createParticles();
      });

      this.canvas.parentElement.addEventListener('mousemove', (e) => {
        const rect = this.canvas.getBoundingClientRect();
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
      });

      this.canvas.parentElement.addEventListener('mouseleave', () => {
        this.mouse.x = null;
        this.mouse.y = null;
      });
    }

    drawParticle(p) {
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(96, 165, 250, ${p.opacity})`;
      this.ctx.fill();
    }

    drawConnections() {
      for (let i = 0; i < this.particles.length; i++) {
        for (let j = i + 1; j < this.particles.length; j++) {
          const dx = this.particles[i].x - this.particles[j].x;
          const dy = this.particles[i].y - this.particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < this.connectionDistance) {
            const opacity = (1 - dist / this.connectionDistance) * 0.3;
            this.ctx.beginPath();
            this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
            this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
            this.ctx.strokeStyle = `rgba(96, 165, 250, ${opacity})`;
            this.ctx.lineWidth = 0.5;
            this.ctx.stroke();
          }
        }
      }
    }

    updateParticle(p) {
      p.x += p.vx;
      p.y += p.vy;

      // Bounce off edges
      if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

      // Mouse interaction
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouseRadius) {
          const force = (this.mouseRadius - dist) / this.mouseRadius;
          p.x += dx * force * 0.02;
          p.y += dy * force * 0.02;
        }
      }
    }

    animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.particles.forEach(p => {
        this.updateParticle(p);
        this.drawParticle(p);
      });

      this.drawConnections();
      requestAnimationFrame(() => this.animate());
    }
  }

  // Initialize
  new ParticleSystem(particlesContainer);
});
