// Interactive portfolio script
document.addEventListener('DOMContentLoaded', () => {
  // Data (you can replace these with your real projects)
  const skills = [
    { name: 'JavaScript', level: 92 }, { name: 'HTML5', level: 98 }, { name: 'CSS3', level: 94 },
    { name: 'React', level: 88 }, { name: 'Node.js', level: 82 }, { name: 'Express', level: 78 },
    { name: 'MongoDB', level: 75 }, { name: 'Git', level: 90 }, { name: 'Python', level: 70 }
  ];

  const projects = [
    { id:1, title:'Personal Portfolio', tag:'Web', short:'A fast and animated portfolio built with vanilla JS and modern CSS.', desc:'A responsive portfolio site that showcases projects and skills, includes animations and a resume viewer.', demo:'#' },
    { id:2, title:'Task Manager', tag:'Full-stack', short:'MERN task manager with auth and realtime updates.', desc:'Full CRUD app with JWT authentication, real-time updates using WebSockets and a clean UX.' , demo:'#'},
    { id:3, title:'Weather Dashboard', tag:'API', short:'Real-time weather data from public APIs with caching.', desc:'Displays weather info, forecasts and location-based suggestions. Implements API caching and graceful fallback.', demo:'#'}
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
    card.innerHTML = `<div class="project-title"><strong>${p.title}</strong> <span class="project-tag">${p.tag}</span></div><div class="project-meta">${p.short}</div>`;
    projectsList.appendChild(card);
    card.addEventListener('click', () => openProjectModal(p));
  });

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

/* --- Three.js simple scene + particles + model switch --- */
(() => {
  const canvas = document.getElementById('three-canvas');
  if(!canvas) return;
  const width = () => canvas.clientWidth || 360;
  const height = () => 220;

  // renderer
  const renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:true});
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  renderer.setSize(width(), height());
  renderer.setClearColor(0x000000, 0);

  // scene + camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width()/height(), 0.1, 1000);
  camera.position.set(0,0,4);

  // lights
  const amb = new THREE.AmbientLight(0xffffff, 0.6);
  const dir = new THREE.DirectionalLight(0xffffff, 0.6);
  dir.position.set(5,5,5);
  scene.add(amb,dir);

  // materials
  const mat = new THREE.MeshStandardMaterial({color:0x38bdf8, metalness:0.5, roughness:0.2, emissive:0x072033});

  // models
  let mesh;
  function makeModel(type){
    if(mesh){scene.remove(mesh);mesh.geometry.dispose();mesh.material.dispose();mesh=null}
    let geom;
    if(type==='cube') geom = new THREE.BoxGeometry(1.4,1.4,1.4);
    else if(type==='sphere') geom = new THREE.SphereGeometry(0.95, 32, 32);
    else geom = new THREE.TorusKnotGeometry(0.6,0.18,128,24);
    mesh = new THREE.Mesh(geom, mat.clone());
    scene.add(mesh);
  }
  makeModel('cube');

  // particles (simple points)
  const particlesGeo = new THREE.BufferGeometry();
  const pts = 120;
  const positions = new Float32Array(pts * 3);
  for(let i=0;i<pts;i++){positions[i*3+0] = (Math.random()-0.5)*8; positions[i*3+1] = (Math.random()-0.5)*4; positions[i*3+2] = (Math.random()-0.5)*2}
  particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions,3));
  const particlesMat = new THREE.PointsMaterial({color:0xffffff,size:0.03,opacity:0.7,transparent:true});
  const points = new THREE.Points(particlesGeo, particlesMat);
  points.position.set(0,0,-1.2);
  scene.add(points);

  // animation loop
  let t = 0;
  function animate(){
    t += 0.01;
    if(mesh) mesh.rotation.y = 0.4*t; mesh.rotation.x = 0.15*t;
    points.rotation.y = -0.02*t;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();

  // resize handling
  const onResize = ()=>{renderer.setSize(width(), height()); camera.aspect = width()/height(); camera.updateProjectionMatrix();};
  window.addEventListener('resize', onResize);

  // model switching buttons
  const modelBtns = document.querySelectorAll('.model-btn');
  modelBtns.forEach(b=>b.addEventListener('click', ()=>{
    modelBtns.forEach(x=>x.classList.remove('active'));b.classList.add('active');
    makeModel(b.dataset.model);
  }));

  // tilt / parallax on canvas
  canvas.addEventListener('mousemove', (e)=>{
    const r = canvas.getBoundingClientRect();
    const x = ((e.clientX - r.left)/r.width - 0.5)*2; const y = ((e.clientY - r.top)/r.height - 0.5)*2;
    if(mesh) mesh.rotation.y = x*0.6; mesh.rotation.x = -y*0.6;
  });
  canvas.addEventListener('mouseleave', ()=>{ if(mesh){mesh.rotation.x=0;mesh.rotation.y=0} });

})();


