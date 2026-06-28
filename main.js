// ============================================================
//   main.js — MAT CHHONA ISKO 😄
// ============================================================

// Particles
function initParticles() {
  const pc = document.getElementById('particles');
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    const hue = Math.random() > 0.5 ? '79,142,247' : '6,182,212';
    p.style.cssText = `width:${size}px;height:${size}px;background:rgba(${hue},0.4);left:${Math.random()*100}%;animation-duration:${Math.random()*20+15}s;animation-delay:${Math.random()*15}s;--drift:${(Math.random()-0.5)*200}px`;
    pc.appendChild(p);
  }
}

// Scroll reveal
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// 3D card tilt on hover
function initTilt() {
  document.querySelectorAll('.card-3d').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(1000px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

// Run all
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initReveal();
  initTilt();
});
