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

// Floating Orbs
function initOrbs() {
  const orbs = [
    { x: 20, y: 20, size: 500, color: '79,142,247', speed: 0.3 },
    { x: 80, y: 60, size: 400, color: '124,58,237', speed: 0.2 },
    { x: 50, y: 80, size: 350, color: '6,182,212',  speed: 0.25 },
  ];

  const els = orbs.map(o => {
    const div = document.createElement('div');
    div.style.cssText = `position:fixed;border-radius:50%;pointer-events:none;z-index:0;
      width:${o.size}px;height:${o.size}px;
      background:radial-gradient(circle, rgba(${o.color},0.12) 0%, transparent 70%);
      filter:blur(40px);transition:transform 1.5s ease;
      left:${o.x}%;top:${o.y}%;transform:translate(-50%,-50%)`;
    document.body.appendChild(div);
    return { el: div, ...o };
  });

  // Scroll parallax
  window.addEventListener('scroll', () => {
    const s = window.scrollY;
    els.forEach(o => {
      o.el.style.transform = `translate(-50%, calc(-50% + ${s * o.speed}px))`;
    });
  });

  // Mouse follow
  window.addEventListener('mousemove', e => {
    const mx = (e.clientX / window.innerWidth  - 0.5) * 30;
    const my = (e.clientY / window.innerHeight - 0.5) * 30;
    els.forEach(o => {
      o.el.style.transform += ` translate(${mx * o.speed}px, ${my * o.speed}px)`;
    });
  });
}

// Run all
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initReveal();
  initTilt();
  initOrbs();

  // Scroll Progress Bar
  window.addEventListener('scroll', () => {
    const total = document.body.scrollHeight - window.innerHeight;
    const pct = (window.scrollY / total) * 100;
    document.getElementById('progress-bar').style.width = pct + '%';
  });

  // Typing Animation
const texts = D.typingTexts;
let ti = 0, ci = 0, deleting = false;
const el = document.getElementById('typing-text');
function type() {
  const current = texts[ti];
  el.textContent = deleting ? current.slice(0, ci--) : current.slice(0, ci++);
  if (!deleting && ci > current.length) { deleting = true; setTimeout(type, 1500); return; }
  if (deleting && ci < 0)  { deleting = false; ti = (ti+1) % texts.length; }
  setTimeout(type, deleting ? 50 : 100);
}
type();
});
