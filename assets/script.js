// Enhanced interactive portfolio script
document.addEventListener('DOMContentLoaded', () => {
  // Theme persistence and toggle
  const root = document.documentElement;
  const themeCheckbox = document.getElementById('theme-checkbox');
  const storedTheme = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  function applyTheme(mode) {
    if (mode === 'light') {
      root.classList.add('light-theme');
      document.body.classList.add('light-theme');
      if (themeCheckbox) themeCheckbox.checked = true;
    } else {
      root.classList.remove('light-theme');
      document.body.classList.remove('light-theme');
      if (themeCheckbox) themeCheckbox.checked = false;
    }
  }

  let activeTheme = storedTheme || (prefersLight ? 'light' : 'dark');
  applyTheme(activeTheme);

  if (themeCheckbox) {
    themeCheckbox.addEventListener('change', () => {
      activeTheme = themeCheckbox.checked ? 'light' : 'dark';
      applyTheme(activeTheme);
      localStorage.setItem('theme', activeTheme);
    });
  }
  // Loading animation
  const loadingScreen = document.createElement('div');
  loadingScreen.className = 'loading-screen';
  loadingScreen.innerHTML = `
    <div class="loading-content">
      <div class="loading-spinner"></div>
      <p>Loading Portfolio...</p>
    </div>
  `;
  document.body.appendChild(loadingScreen);
  
  // Hide loading screen after content loads
  setTimeout(() => {
    loadingScreen.classList.add('fade-out');
    setTimeout(() => loadingScreen.remove(), 500);
  }, 1200);

  // Scroll progress indicator
  const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    });
  };
  createScrollProgress();

  // Smooth scroll navigation with enhanced feedback
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        // Add click feedback
        link.classList.add('clicked');
        setTimeout(() => link.classList.remove('clicked'), 300);
        
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Enhanced active navigation tracking with smooth transitions
  const updateActiveNav = () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateActiveNav();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Core skills based on actual projects and experience
  const skills = [
    // Programming Languages
    { name: 'Python', category: 'languages' },
    { name: 'JavaScript', category: 'languages' },
    { name: 'Dart', category: 'languages' },
    { name: 'PHP', category: 'languages' },
    { name: 'SQL', category: 'languages' },
    
    // Frontend Technologies
    { name: 'HTML5', category: 'frontend' },
    { name: 'CSS3', category: 'frontend' },
    { name: 'React', category: 'frontend' },
    { name: 'Bootstrap', category: 'frontend' },
    
    // Backend Technologies
    { name: 'Node.js', category: 'backend' },
    { name: 'Django', category: 'backend' },
    { name: 'Flask', category: 'backend' },
    { name: 'REST APIs', category: 'backend' },
    
    // Databases
    { name: 'SQLite', category: 'database' },
    { name: 'Firebase', category: 'database' },
    { name: 'MySQL', category: 'database' },
    
    // Mobile Development
    { name: 'Flutter', category: 'mobile' },
    { name: 'Android', category: 'mobile' },
    
    // AI & Machine Learning
    { name: 'TensorFlow', category: 'ai' },
    { name: 'OpenCV', category: 'ai' },
    { name: 'Computer Vision', category: 'ai' },
    { name: 'Speech Recognition', category: 'ai' },
    
    // Tools & Technologies
    { name: 'Git', category: 'tools' },
    { name: 'GitHub', category: 'tools' },
    { name: 'VS Code', category: 'tools' },
    { name: 'Android Studio', category: 'tools' },
    { name: 'Tkinter', category: 'tools' },
    
    // Other Technologies
    { name: 'Selenium', category: 'other' },
    { name: 'Google TTS', category: 'other' }
  ];

  // Enhanced projects with better interaction
  const projects = [
    {
      id: 1,
      title: 'Edu-Buddy AI Assistant',
      tag: 'AI',
      description: 'Voice-activated assistant for students with reminders and study help. Built with speech recognition and natural language processing.',
      tech: ['Python', 'SpeechRecognition', 'Google TTS', 'SQLite', 'Tkinter'],
      demo: 'https://github.com/tanvir-talha058/edu-buddy-ai',
      github: 'https://github.com/tanvir-talha058/edu-buddy-ai',
      featured: true
    },
    {
      id: 2,
      title: 'AgroKart BD',
      tag: 'Web/Mobile',
      description: 'Marketplace connecting farmers and consumers with a Flutter mobile app and responsive web portal.',
      tech: ['Flutter', 'Dart', 'Firebase', 'HTML5', 'CSS3', 'JavaScript', 'PHP'],
      demo: 'https://github.com/tanvir-talha058/agrokart-bd',
      github: 'https://github.com/tanvir-talha058/agrokart-bd',
      featured: true
    },
    {
      id: 3,
      title: 'Hand Gesture Virtual Mouse',
      tag: 'Computer Vision',
      description: 'Real-time hand-gesture based virtual mouse that maps detected hand positions to cursor movement.',
      tech: ['Python', 'OpenCV', 'TensorFlow'],
      demo: 'https://github.com/tanvir-talha058/hand-gesture-mouse',
      github: 'https://github.com/tanvir-talha058/hand-gesture-mouse',
      featured: false
    },
    {
      id: 4,
      title: 'Cross-Platform Task Manager',
      tag: 'Tool',
      description: 'Lightweight cross-platform task/process manager for desktop environments.',
      tech: ['Python', 'Node.js', 'React'],
      demo: 'https://github.com/tanvir-talha058/task-manager',
      github: 'https://github.com/tanvir-talha058/task-manager',
      featured: false
    },
    {
      id: 5,
      title: 'Automation Tool for Garment Industry',
      tag: 'Automation',
      description: 'Selenium-based GUI to automate bulk web form submissions from Excel data.',
      tech: ['Python', 'Selenium', 'JavaScript', 'HTML5'],
      demo: 'https://github.com/tanvir-talha058/garment-automation',
      github: 'https://github.com/tanvir-talha058/garment-automation',
      featured: false
    },
    {
      id: 6,
      title: 'AI Lie Detector',
      tag: 'Machine Learning',
      description: 'Prototype lie detection using audio/visual signal features and machine learning.',
      tech: ['Python', 'TensorFlow', 'OpenCV'],
      demo: 'https://github.com/tanvir-talha058/ai-lie-detector',
      github: 'https://github.com/tanvir-talha058/ai-lie-detector',
      featured: true
    }
  ];

  // Enhanced skills rendering with filtering
  const skillsContainer = document.getElementById('skills-list');
  if (skillsContainer) {
    // Add filter controls
    const filterContainer = document.createElement('div');
    filterContainer.className = 'skills-filter-container';
    filterContainer.innerHTML = `
      <div class="skill-filters">
        <button class="skill-filter-btn active" data-filter="all">All</button>
        <button class="skill-filter-btn" data-filter="languages">Languages</button>
        <button class="skill-filter-btn" data-filter="frontend">Frontend</button>
        <button class="skill-filter-btn" data-filter="backend">Backend</button>
        <button class="skill-filter-btn" data-filter="database">Database</button>
        <button class="skill-filter-btn" data-filter="mobile">Mobile</button>
        <button class="skill-filter-btn" data-filter="ai">AI/ML</button>
        <button class="skill-filter-btn" data-filter="tools">Tools</button>
        <button class="skill-filter-btn" data-filter="other">Other</button>
      </div>
    `;
    
    skillsContainer.parentNode.insertBefore(filterContainer, skillsContainer);
    
    // Clear existing content and render enhanced skills
    skillsContainer.innerHTML = '';
    
    skills.forEach((skill, index) => {
      const skillEl = document.createElement('div');
      skillEl.className = `skill-simple fade-up skill-${skill.category}`;
      skillEl.innerHTML = `
        <div class="skill-name">${skill.name}</div>
        <div class="skill-category">${skill.category}</div>
      `;
      skillsContainer.appendChild(skillEl);
      
      // Add staggered animation delay
      skillEl.style.animationDelay = `${index * 0.1}s`;
      
      // Add hover effect
      skillEl.addEventListener('mouseenter', () => {
        skillEl.style.transform = 'scale(1.05)';
      });
      skillEl.addEventListener('mouseleave', () => {
        skillEl.style.transform = 'scale(1)';
      });
    });

    // Add filter functionality
    const filterBtns = filterContainer.querySelectorAll('.skill-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter skills
        const skillItems = skillsContainer.querySelectorAll('.skill-simple');
        skillItems.forEach(item => {
          if (filter === 'all' || item.classList.contains(`skill-${filter}`)) {
            item.style.display = 'flex';
            item.style.opacity = '0';
            setTimeout(() => item.style.opacity = '1', 100);
          } else {
            item.style.opacity = '0';
            setTimeout(() => item.style.display = 'none', 300);
          }
        });

        // Add button feedback
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => btn.style.transform = 'scale(1)', 150);
      });
    });
  }

  // Enhanced projects rendering with interactions
  const projectsContainer = document.getElementById('projects-list');
  if (projectsContainer) {
    // Clear and render enhanced projects
    projectsContainer.innerHTML = '';
    
    function renderProjects(projectsToShow = projects) {
      projectsContainer.innerHTML = '';
      projectsContainer.className = 'projects-minimal';
      
      projectsToShow.forEach((project, index) => {
        const projectEl = document.createElement('div');
        projectEl.className = `project-minimal fade-up ${project.featured ? 'featured-project' : ''} project-${project.tag.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
        projectEl.innerHTML = `
          <div class="project-header">
            <h3>${project.title}</h3>
            <div class="project-badges">
              <span class="project-tag">${project.tag}</span>
              ${project.featured ? '<span class="featured-badge">Featured</span>' : ''}
            </div>
          </div>
          <p class="project-description">${project.description}</p>
          <div class="tech-minimal">
            ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${project.github}" target="_blank" class="project-link github-link">
              <i class="fab fa-github"></i> Code
            </a>
            <a href="${project.demo}" target="_blank" class="project-link demo-link">
              <i class="fas fa-external-link-alt"></i> View
            </a>
          </div>
        `;
        projectsContainer.appendChild(projectEl);
        
        // Add staggered animation delay
        projectEl.style.animationDelay = `${index * 0.2}s`;
        
        // Add button click feedback
        const projectLinks = projectEl.querySelectorAll('.project-link');
        projectLinks.forEach(link => {
          link.addEventListener('click', (e) => {
            // Visual feedback
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
              link.style.transform = '';
            }, 150);
            
            // Add a small notification for user feedback
            const linkType = link.classList.contains('github-link') ? 'GitHub' : 'Demo';
            console.log(`Opening ${linkType} link: ${link.href}`);
          });
        });
        
        // Add hover effects to the card
        projectEl.addEventListener('mouseenter', () => {
          projectEl.style.transform = 'translateY(-5px)';
        });
        projectEl.addEventListener('mouseleave', () => {
          projectEl.style.transform = 'translateY(0)';
        });
      });
    }
    
    // Initial render
    renderProjects();
  }

  // Utility functions for enhanced interactivity
  function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-message">${message}</span>
        <button class="notification-close">&times;</button>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto hide after 3 seconds
    setTimeout(() => {
      notification.classList.add('fade-out');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
      notification.classList.add('fade-out');
      setTimeout(() => notification.remove(), 300);
    });
  }

  // Typing effect for roles
  const typedEl = document.getElementById('typed');
  const roles = ['Frontend Developer', 'Full-stack Enthusiast', 'Problem Solver', 'UI/UX Lover'];
  let roleIdx = 0, charIdx = 0;
  
  function tick() {
    const current = roles[roleIdx];
    typedEl.textContent = current.slice(0, charIdx);
    charIdx++;
    
    if (charIdx > current.length) {
      setTimeout(() => {
        charIdx = 0;
        roleIdx = (roleIdx + 1) % roles.length;
      }, 800);
    }
    setTimeout(tick, 70);
  }
  tick();

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Special animation for skills
        if (entry.target.classList.contains('skill-simple')) {
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, Math.random() * 300);
        } else {
          entry.target.classList.add('animate');
        }
      }
    });
  }, observerOptions);

  // Observe all fade-up elements
  document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
  });

  // Mobile navigation toggle
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  
  navToggle.addEventListener('click', () => {
  const expanded = nav.classList.toggle('show');
  navToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  document.body.classList.toggle('no-scroll', expanded);
  });

  // Close mobile nav when clicking on links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('show')) {
        nav.classList.remove('show');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
      }
    });
  });

  // Enhanced contact form handling
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  
  if (contactForm) {
    // Add real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        validateField(input);
      });
      
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
          validateField(input);
        }
      });
    });
    
    function validateField(field) {
      const value = field.value.trim();
      let isValid = true;
      let errorMessage = '';
      
      if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
      } else if (field.type === 'email' && value && !isValidEmail(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
      }
      
      // Remove existing error
      const existingError = field.parentNode.querySelector('.field-error');
      if (existingError) existingError.remove();
      
      if (!isValid) {
        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = errorMessage;
        field.parentNode.appendChild(errorDiv);
      } else {
        field.classList.remove('error');
      }
      
      return isValid;
    }
    
    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Validate all fields
      let allValid = true;
      inputs.forEach(input => {
        if (!validateField(input)) {
          allValid = false;
        }
      });
      
      if (!allValid) {
        showNotification('Please fix the errors in the form', 'error');
        return;
      }
      
      // Show loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Simulate form submission
      setTimeout(() => {
        showNotification('🎉 Thanks for your message! I\'ll get back to you soon.', 'success');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Clear any error states
        inputs.forEach(input => {
          input.classList.remove('error');
          const errorDiv = input.parentNode.querySelector('.field-error');
          if (errorDiv) errorDiv.remove();
        });
      }, 1500);
    });
  }

  // mailto button functionality
  const mailtoBtn = document.getElementById('mailto-btn');
  if (mailtoBtn) {
    mailtoBtn.addEventListener('click', () => {
      const subject = encodeURIComponent('Portfolio Contact');
      const body = encodeURIComponent('Hi Tanvir,\n\nI found your portfolio and would like to connect.\n\nBest regards,');
      window.location.href = `mailto:tanvirahmed123000@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  // Enhanced navbar scroll effect
  const header = document.querySelector('.site-header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Add scrolled class when scrolling down
    if (currentScrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScrollY = currentScrollY;

    // Active nav link highlighting
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (currentScrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

});


