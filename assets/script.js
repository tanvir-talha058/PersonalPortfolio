// Interactive portfolio script
document.addEventListener('DOMContentLoaded', () => {
  // Data populated from Tanvir's resume (extracted and lightly normalized)
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 92 },
    { name: 'HTML5', level: 98 },
    { name: 'CSS3', level: 94 },
    { name: 'C', level: 75 },
    { name: 'C++', level: 75 },
    { name: 'Java', level: 70 },
    { name: 'NumPy', level: 85 },
    { name: 'Pandas', level: 85 },
    { name: 'Matplotlib', level: 80 },
    { name: 'OpenCV', level: 82 },
    { name: 'scikit-learn', level: 80 },
    { name: 'TensorFlow', level: 75 },
    { name: 'Keras', level: 75 },
    { name: 'PyTorch', level: 70 },
    { name: 'Pygame', level: 72 },
    { name: 'PHP', level: 70 },
    { name: 'MySQL', level: 80 },
    { name: 'Flutter', level: 78 },
    { name: 'Firebase', level: 78 },
    { name: 'Git', level: 88 },
    { name: 'Linux', level: 75 },
    { name: 'Figma', level: 70 },
    { name: 'UI/UX Design', level: 70 }
  ];

  // Projects extracted from resume (descriptions and tech stacks preserved where available)
  const projects = [
    { id:1, title:'Edu-Buddy AI Assistant', tag:'AI', short:'Voice-activated assistant for students with reminders and study help.', desc:'Edu-Buddy is a voice-activated assistant that can set reminders, help with study schedules and answer common academic queries. Built with speech I/O and a lightweight local DB UI.', tech:['Python','SpeechRecognition','Google Text-to-Speech','SQLite','Tkinter'], demo:'#' },
    { id:2, title:'AgroKart BD', tag:'Mobile / Web', short:'Marketplace connecting farmers and consumers with a Flutter mobile app and responsive web portal.', desc:'Developed both a mobile app (Flutter) and a responsive web application to connect farmers directly with customers, including product listings and order management.', tech:['Flutter','Dart','Firebase','HTML','CSS','JavaScript','PHP','MySQL'], demo:'#' },
    { id:3, title:'Hand Gesture Virtual Mouse', tag:'Computer Vision', short:'Control the cursor using hand gestures via webcam.', desc:'A real-time hand-gesture based virtual mouse that maps detected hand positions to cursor movement and mouse events for touchless control.', tech:['Python','OpenCV','MediaPipe','PyAutoGUI'], demo:'#' },
    { id:4, title:'Cross-Platform Task Manager', tag:'Tool', short:'Lightweight cross-platform task/process manager for desktop.', desc:'A cross-platform task manager utility built in Python to inspect and manage processes (works on Windows/Linux/macOS).', tech:['Python','psutil'], demo:'#' },
    { id:5, title:'Automation Tool for Local Garment', tag:'Automation', short:'Selenium-based GUI to automate bulk web form submissions from Excel.', desc:'Python GUI that uploads Excel sheets and automates data-entry on target websites by letting users map fields and triggers via a simple Tkinter interface.', tech:['Python','Selenium','Tkinter'], demo:'#' },
    { id:6, title:'Lie Detector (ML)', tag:'Research / ML', short:'Prototype lie detection using audio/visual signal features and ML.', desc:'Built a prototype that analyzes behavioral/physiological signals (voice stress, facial cues) to predict truthfulness using supervised ML techniques.', tech:['Python','scikit-learn','OpenCV','librosa','SpeechRecognition','Google Text-to-Speech'], demo:'#' },
    { id:7, title:'4 in a Row (AI)', tag:'Game / AI', short:'Two-player strategy game with AI using Minimax and alpha-beta pruning.', desc:'Implemented gameplay and an AI opponent using Minimax with alpha-beta pruning to provide competitive play and learning opportunities.', tech:['Python','Pygame','Minimax','Alpha-Beta'], demo:'#' },
    { id:8, title:'Maze Rival', tag:'Game', short:'Competitive maze-solving game with dynamic levels and multiplayer.', desc:'A competitive maze game featuring dynamic levels and real-time multiplayer mechanics to boost problem-solving skills.', tech:['Python','Pygame','BFS/DFS','A*'], demo:'#' }
  ];

  // Render skills
  const skillsList = document.getElementById('skills-list');
  skills.forEach((s, i) => {
    const el = document.createElement('div');
    el.className = 'skill-pill fade-up';
    el.innerHTML = `<div class="skill-name">${s.name}</div><div class="skill-bar"><div class="skill-fill" style="--fill:${s.level}%"></div></div>`;
    skillsList.appendChild(el);
    // animate later when in view
  });

  // Render projects
  const projectsList = document.getElementById('projects-list');
  projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card fade-up';
    card.setAttribute('data-id', p.id);
    card.setAttribute('tabindex', '0');
    card.innerHTML = `<div class="project-title"><strong>${p.title}</strong> <span class="project-tag">${p.tag}</span></div><div class="project-meta">${p.short}</div>`;
    projectsList.appendChild(card);
    card.addEventListener('click', () => openProjectModal(p));
    // keyboard enter/space -> open
    card.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' ') { e.preventDefault(); openProjectModal(p); } });
  });

  // Project filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  function applyFilter(tag){
    const cards = document.querySelectorAll('#projects-list .project-card');
    cards.forEach(c=>{ const p = projects.find(x=>String(x.id)===c.dataset.id); if(!p) return; if(tag==='all' || p.tag.includes(tag) || p.tag===tag) { c.style.display='block'; } else { c.style.display='none'; } });
  }
  filterButtons.forEach(b=>b.addEventListener('click', ()=>{ filterButtons.forEach(x=>x.classList.remove('active')); b.classList.add('active'); applyFilter(b.dataset.filter); }));

  // Copy email button
  const copyBtn = document.getElementById('copy-email');
  const copyStatus = document.getElementById('copy-status');
  if(copyBtn){ copyBtn.addEventListener('click', async ()=>{ const email = document.getElementById('contact-email').textContent.trim(); try{ await navigator.clipboard.writeText(email); copyStatus.textContent = 'Email copied to clipboard'; setTimeout(()=>copyStatus.textContent='',2800); }catch(e){ copyStatus.textContent='Press Ctrl+C to copy: '+email; } }); }

  // Typing effect for roles
  const typedEl = document.getElementById('typed');
  const roles = ['Frontend Developer', 'Full-stack Enthusiast', 'Problem Solver', 'UI/UX Lover'];
  let roleIdx = 0, charIdx = 0;
  function tick(){
    const current = roles[roleIdx];
    typedEl.textContent = current.slice(0, charIdx);
    charIdx++;
    if(charIdx > current.length){
      setTimeout(()=>{charIdx=0;roleIdx = (roleIdx+1)%roles.length;},800);
    }
    setTimeout(tick, 70);
  }
  tick();

  // Scroll reveal for elements with .fade-up
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('reveal');
        // trigger skill bar animation
        if(entry.target.querySelector('.skill-fill')){
          const fill = entry.target.querySelector('.skill-fill');
          const pct = getComputedStyle(fill).getPropertyValue('--fill') || '80%';
          fill.style.width = pct.trim();
        }
      }
    });
  },{threshold:0.15});
  document.querySelectorAll('.fade-up').forEach(el=>observer.observe(el));

  // Modal
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');
  const modalClose = document.getElementById('modal-close');
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e)=>{if(e.target===modal) closeModal();});
  function openProjectModal(p){
    modal.setAttribute('aria-hidden','false');
    modalContent.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p><p class="project-meta">Demo: <a href="${p.demo}" target="_blank">View</a></p>`;
  }
  function closeModal(){modal.setAttribute('aria-hidden','true');modalContent.innerHTML='';}

  // Nav toggle (mobile)
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  navToggle.addEventListener('click', ()=>nav.classList.toggle('show'));

  // Contact form - lightweight local handling
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(contactForm);
    formStatus.textContent = 'Sending...';
    // Simulate network
    setTimeout(()=>{ formStatus.textContent = 'Thanks — I received your message and will reply soon.'; contactForm.reset(); }, 900);
  });

  // Mailto fallback
  const mailBtn = document.getElementById('mailto-btn');
  mailBtn.addEventListener('click', ()=>{
    const form = new FormData(contactForm);
    const sub = encodeURIComponent('Portfolio contact from ' + (form.get('name') || 'visitor'));
    const body = encodeURIComponent((form.get('message')||'') + '\n\nFrom: ' + (form.get('email')||''));
    window.location.href = `mailto:your-email@example.com?subject=${sub}&body=${body}`;
  });

});

/* --- Gallery & lightbox behavior (replaces 3D content) --- */
(() => {
  const thumbs = Array.from(document.querySelectorAll('.gallery-thumb'));
  if(!thumbs.length) return;

  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbClose = document.getElementById('lightbox-close');
  const lbNext = document.getElementById('lightbox-next');
  const lbPrev = document.getElementById('lightbox-prev');
  let idx = 0;

  function open(index){ idx = index; lbImg.src = thumbs[idx].src; lbImg.alt = thumbs[idx].alt || ''; lightbox.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; }
  function close(){ lightbox.setAttribute('aria-hidden','true'); lbImg.src=''; document.body.style.overflow=''; }
  function next(){ idx = (idx+1) % thumbs.length; lbImg.src = thumbs[idx].src; }
  function prev(){ idx = (idx-1+thumbs.length) % thumbs.length; lbImg.src = thumbs[idx].src; }

  thumbs.forEach((t,i)=>{ t.addEventListener('click', ()=>open(i)); t.setAttribute('tabindex','0'); t.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' ') { e.preventDefault(); open(i); } }); });

  lbClose.addEventListener('click', close);
  lbNext.addEventListener('click', next);
  lbPrev.addEventListener('click', prev);

  window.addEventListener('keydown', (e)=>{ if(lightbox.getAttribute('aria-hidden')==='false'){ if(e.key==='Escape') close(); if(e.key==='ArrowRight') next(); if(e.key==='ArrowLeft') prev(); } });

})();


