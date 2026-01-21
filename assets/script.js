// Enhanced interactive portfolio script
document.addEventListener('DOMContentLoaded', () => {
  // Enhanced mobile viewport handling
  const setVH = () => {
    try {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    } catch (error) {
      console.warn('Could not set viewport height:', error);
    }
  };

  setVH();
  window.addEventListener('resize', setVH);
  window.addEventListener('orientationchange', () => {
    setTimeout(setVH, 150);
  });

  // Prevent iOS zoom on input focus
  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
    }
  }

  // Detect mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (isMobile || isTouch) {
    document.body.classList.add('mobile-device');
  }

  // Theme persistence and toggle
  const root = document.documentElement;
  const themeCheckbox = document.getElementById('theme-checkbox');
  const storedTheme = localStorage.getItem('theme');

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

  // Default to dark mode if no stored preference
  let activeTheme = storedTheme || 'dark';
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
    try {
      const progressBar = document.createElement('div');
      progressBar.className = 'scroll-progress';
      document.body.appendChild(progressBar);

      window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (height > 0) {
          const scrolled = (winScroll / height) * 100;
          progressBar.style.width = Math.min(100, Math.max(0, scrolled)) + '%';
        }
      });
    } catch (error) {
      console.warn('Could not create scroll progress bar:', error);
    }
  };
  createScrollProgress();

  // Skills data
  // Skills data
  const skills = [
    // Languages
    { name: 'Python', category: 'language', icon: 'fab fa-python', level: 95 },
    { name: 'JavaScript', category: 'language', icon: 'fab fa-js', level: 90 },
    { name: 'C++', category: 'language', icon: 'fas fa-code', level: 85 },
    { name: 'Dart', category: 'language', icon: 'fas fa-bullseye', level: 88 },
    { name: 'Java', category: 'language', icon: 'fab fa-java', level: 80 },
    { name: 'C', category: 'language', icon: 'fas fa-c', level: 85 },

    // AI & Data Science
    { name: 'TensorFlow', category: 'ai', icon: 'fas fa-brain', level: 90 },
    { name: 'PyTorch', category: 'ai', icon: 'fas fa-fire-alt', level: 85 },
    { name: 'OpenCV', category: 'ai', icon: 'fas fa-eye', level: 92 },
    { name: 'Pandas', category: 'ai', icon: 'fas fa-table', level: 88 },
    { name: 'NumPy', category: 'ai', icon: 'fas fa-calculator', level: 88 },
    { name: 'Machine Learning', category: 'ai', icon: 'fas fa-robot', level: 90 },

    // Web Technologies
    { name: 'HTML5', category: 'frontend', icon: 'fab fa-html5', level: 95 },
    { name: 'CSS3', category: 'frontend', icon: 'fab fa-css3-alt', level: 92 },
    { name: 'Tailwind CSS', category: 'frontend', icon: 'fas fa-wind', level: 90 },
    { name: 'Bootstrap', category: 'frontend', icon: 'fab fa-bootstrap', level: 88 },

    // Frameworks & Tools
    { name: 'Flutter', category: 'mobile', icon: 'fas fa-mobile-alt', level: 92 },
    { name: 'React', category: 'frontend', icon: 'fab fa-react', level: 85 },
    { name: 'Node.js', category: 'backend', icon: 'fab fa-node', level: 80 },
    { name: 'Express.js', category: 'backend', icon: 'fas fa-server', level: 82 },
    { name: 'Selenium', category: 'tools', icon: 'fas fa-robot', level: 85 },
    { name: 'Git', category: 'tools', icon: 'fab fa-git-alt', level: 90 },
    { name: 'GitHub', category: 'tools', icon: 'fab fa-github', level: 90 },
    { name: 'Firebase', category: 'cloud', icon: 'fas fa-fire', level: 88 },
    { name: 'Docker', category: 'tools', icon: 'fab fa-docker', level: 75 },

    // Databases
    { name: 'PostgreSQL', category: 'backend', icon: 'fas fa-database', level: 85 },
    { name: 'MySQL', category: 'backend', icon: 'fas fa-database', level: 85 },
    { name: 'MongoDB', category: 'backend', icon: 'fas fa-envira', level: 78 }
  ];

  // Projects data from Resume
  // Projects data from Resume
  const projects = [
    {
      title: 'Dorm-Ease — AI Smart Dorm',
      description: 'AI-based room assignment system using student preferences and regression models with a fully responsive dashboard. Includes real-time analytics.',
      tags: ['Node.js', 'PostgreSQL', 'Machine Learning', 'Bootstrap'],
      icon: 'fas fa-home',
      color: '#3b82f6',
      github: 'https://github.com/tanvir-talha058/dorm-ease'
    },
    {
      title: 'Automator — Low Code Engine',
      description: 'Rule-based automation engine for automated behaviors and configurable triggers using Puppeteer and Node.js.',
      tags: ['Node.js', 'Puppeteer', 'PostgreSQL', 'Tailwind CSS'],
      icon: 'fas fa-cogs',
      color: '#ef4444',
      github: 'https://github.com/tanvir-talha058/automator'
    },
    {
      title: 'Edu-Buddy AI Assistant',
      description: 'Voice-activated assistant for students with reminders and study help. Built with speech recognition and natural language processing.',
      tags: ['Python', 'SpeechRecognition', 'Google TTS', 'Tkinter'],
      icon: 'fas fa-robot',
      color: '#8b5cf6',
      github: 'https://github.com/tanvir-talha058/edu-buddy-ai'
    },
    {
      title: 'AgroKart BD',
      description: 'Marketplace connecting farmers and consumers with a Flutter mobile app and responsive web portal. Features order management and auth.',
      tags: ['Flutter', 'Dart', 'Firebase', 'PHP', 'MySQL'],
      icon: 'fas fa-shopping-basket',
      color: '#10b981',
      github: 'https://github.com/tanvir-talha058/agrokart-bd'
    },
    {
      title: 'Hand Gesture Virtual Mouse',
      description: 'Real-time hand-gesture based virtual mouse that maps detected hand positions to cursor movement with low latency.',
      tags: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI'],
      icon: 'fas fa-mouse',
      color: '#6366f1',
      github: 'https://github.com/tanvir-talha058/hand-gesture-mouse'
    },
    {
      title: 'Bangladesh Crime Analytics',
      description: 'Real-time crime tracking platform using web scraping from 18+ national news sources with interactive maps.',
      tags: ['Node.js', 'Leaflet.js', 'Web Scraping', 'Chart.js'],
      icon: 'fas fa-map-marked-alt',
      color: '#f43f5e',
      github: 'https://github.com/tanvir-talha058/bd-crime-map'
    },
    {
      title: 'Cross-Platform Task Manager',
      description: 'Lightweight cross-platform task/process manager for desktop environments, monitoring CPU/memory usage.',
      tags: ['Python', 'psutil', 'Tkinter', 'Desktop App'],
      icon: 'fas fa-tasks',
      color: '#f59e0b',
      github: 'https://github.com/tanvir-talha058/task-manager'
    },
    {
      title: 'Garment Automation Tool',
      description: 'Selenium-based GUI application to automate bulk web form submissions from Excel data for the garment industry.',
      tags: ['Python', 'Selenium', 'Pandas', 'Excel Automation'],
      icon: 'fas fa-tshirt',
      color: '#ec4899',
      github: 'https://github.com/tanvir-talha058/garment-automation'
    },
    {
      title: 'Automatic Water Dispenser',
      description: 'Touchless dispenser logic controlled by IR sensors and transistor switching for hygienic water delivery.',
      tags: ['IoT', 'C++', 'Embedded Systems', 'IR Sensors'],
      icon: 'fas fa-tint',
      color: '#06b6d4',
      github: null
    }
  ];

  // Blog posts data
  const blogPosts = [
    {
      title: 'My Journey into AI & Machine Learning',
      excerpt: 'How I transitioned from traditional programming to exploring the fascinating world of artificial intelligence and what I learned along the way.',
      date: '2026-01-15',
      readTime: '5 min read',
      category: 'Career',
      icon: 'fas fa-brain',
      color: '#8b5cf6'
    },
    {
      title: 'Building Scalable Full-Stack Applications',
      excerpt: 'Key lessons learned from developing production-ready applications — from architecture decisions to deployment strategies.',
      date: '2026-01-08',
      readTime: '7 min read',
      category: 'Development',
      icon: 'fas fa-layer-group',
      color: '#3b82f6'
    },
    {
      title: 'The Importance of Clean Code',
      excerpt: 'Why writing maintainable, readable code matters more than clever solutions, and how it impacts team productivity.',
      date: '2025-12-20',
      readTime: '4 min read',
      category: 'Best Practices',
      icon: 'fas fa-code',
      color: '#10b981'
    },
    {
      title: 'Lessons from My First Open Source Contribution',
      excerpt: 'What I learned from contributing to open source projects and why every developer should try it at least once.',
      date: '2025-12-10',
      readTime: '6 min read',
      category: 'Open Source',
      icon: 'fab fa-github',
      color: '#f59e0b'
    }
  ];

  // Render skills
  const renderSkills = () => {
    const skillsList = document.getElementById('skills-list');
    if (!skillsList) return;

    // Group skills by category
    const categories = {
      language: 'Languages',
      frontend: 'Frontend',
      backend: 'Backend',
      mobile: 'Mobile App',
      ai: 'AI & Data Science',
      cloud: 'Cloud & DevOps',
      tools: 'Tools & Others'
    };

    const groupedSkills = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    }, {});

    const skillsHTML = Object.entries(groupedSkills).map(([categoryKey, categorySkills]) => {
      // Map category key to display name, or capitalize if not found
      const categoryName = categories[categoryKey] || categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);

      return `
      <div class="skill-category-card">
        <h3 class="category-header">${categoryName}</h3>
        <div class="skill-tags">
          ${categorySkills.map(skill => `
            <div class="skill-pill">
              <i class="${skill.icon}"></i>
              <span>${skill.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `}).join('');

    skillsList.innerHTML = skillsHTML;
    // Removed progress bar animation logic as it's no longer needed
  };

  // Render projects
  const renderProjects = () => {
    const projectsList = document.getElementById('projects-list');
    if (!projectsList) return;

    const projectsHTML = projects.map((project, index) => `
      <div class="project-card" style="--delay: ${index * 0.1}s">
        <div class="project-header">
            <div class="project-icon" style="background: linear-gradient(135deg, ${project.color}, ${project.color}aa)">
            <i class="${project.icon}"></i>
            </div>
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <div class="project-actions">
            ${project.github ? `
              <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn small outline">
                <i class="fab fa-github"></i> Code
              </a>
            ` : ''}
            ${project.demo ? `
              <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn small primary">
                <i class="fas fa-external-link-alt"></i> Live Demo
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `).join('');

    projectsList.innerHTML = projectsHTML;
  };

  // Render blog posts
  const renderBlogPosts = () => {
    const blogPostsList = document.getElementById('blog-posts');
    if (!blogPostsList) return;

    const formatDate = (dateStr) => {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      });
    };

    const blogHTML = blogPosts.map((post, index) => `
      <article class="blog-card" style="--delay: ${index * 0.1}s">
        <div class="blog-card-header">
          <div class="blog-icon" style="background: linear-gradient(135deg, ${post.color}, ${post.color}aa)">
            <i class="${post.icon}"></i>
          </div>
          <span class="blog-category" style="color: ${post.color}">${post.category}</span>
        </div>
        <div class="blog-card-content">
          <h3 class="blog-title">${post.title}</h3>
          <p class="blog-excerpt">${post.excerpt}</p>
          <div class="blog-meta">
            <span class="blog-date">
              <i class="far fa-calendar-alt"></i>
              ${formatDate(post.date)}
            </span>
            <span class="blog-read-time">
              <i class="far fa-clock"></i>
              ${post.readTime}
            </span>
          </div>
        </div>
      </article>
    `).join('');

    blogPostsList.innerHTML = blogHTML;
  };

  // Initialize rendering
  renderSkills();
  renderProjects();
  renderBlogPosts();

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





  // Enhanced Mobile navigation toggle with error handling
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');

  if (navToggle && nav) {
    // Only set up navigation if elements exist

    // Mobile-specific touch handling
    let touchStartY = 0;
    let touchEndY = 0;

    navToggle.addEventListener('click', () => {
      const expanded = nav.classList.toggle('show');
      navToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      document.body.classList.toggle('no-scroll', expanded);

      // Add haptic feedback if available
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }

      // Animate toggle button
      navToggle.style.transform = expanded ? 'rotate(90deg)' : 'rotate(0deg)';
    });

    // Close nav on swipe up (mobile gesture)
    nav.addEventListener('touchstart', (e) => {
      touchStartY = e.changedTouches[0].screenY;
    });

    nav.addEventListener('touchend', (e) => {
      touchEndY = e.changedTouches[0].screenY;
      const swipeDistance = touchStartY - touchEndY;

      if (swipeDistance > 100) { // Swipe up
        nav.classList.remove('show');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
        navToggle.style.transform = 'rotate(0deg)';
      }
    });

    // Close mobile nav when clicking on links with enhanced feedback
    navLinks.forEach((link, index) => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('show')) {
          // Add staggered close animation
          link.style.transform = 'scale(0.95)';
          setTimeout(() => {
            nav.classList.remove('show');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
            navToggle.style.transform = 'rotate(0deg)';
            link.style.transform = '';
          }, 150);

          // Haptic feedback
          if (navigator.vibrate) {
            navigator.vibrate(30);
          }
        }
      });
    });

    // Close nav when clicking outside
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('show') &&
        !nav.contains(e.target) &&
        !navToggle.contains(e.target)) {
        nav.classList.remove('show');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
        navToggle.style.transform = 'rotate(0deg)';
      }
    });
  } // End of navigation setup

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


  });

  // Mobile loading screen
  if (isMobile || isTouch) {
    showMobileLoader();

    // Hide loader after content loads
    window.addEventListener('load', () => {
      setTimeout(() => {
        hideMobileLoader();
      }, 500);
    });
  }

  // Mobile scroll indicator
  if (window.innerWidth <= 768) {
    addScrollIndicator();
  }

});

// Mobile loading screen functions
function showMobileLoader() {
  const loader = document.createElement('div');
  loader.className = 'mobile-loading';
  loader.innerHTML = '<div class="loading-spinner"></div>';
  document.body.appendChild(loader);
}

function hideMobileLoader() {
  const loader = document.querySelector('.mobile-loading');
  if (loader) {
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.remove();
    }, 500);
  }
}

// Add scroll indicator for mobile
function addScrollIndicator() {
  const indicator = document.createElement('div');
  indicator.className = 'mobile-scroll-indicator';
  indicator.innerHTML = '↓';
  document.body.appendChild(indicator);

  // Hide indicator after scroll
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      indicator.style.display = 'none';
    }

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (window.scrollY <= 100) {
        indicator.style.display = 'block';
      }
    }, 1000);
  });
}

// ===== Back to Top Button =====
const initBackToTop = () => {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  // Show/hide button based on scroll position
  const toggleBackToTop = () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  };

  // Scroll to top when clicked
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Keyboard support
  backToTopBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  });

  // Throttle scroll event for performance
  let scrollThrottle = false;
  window.addEventListener('scroll', () => {
    if (!scrollThrottle) {
      requestAnimationFrame(() => {
        toggleBackToTop();
        scrollThrottle = false;
      });
      scrollThrottle = true;
    }
  });

  // Initial check
  toggleBackToTop();
};

initBackToTop();

// ===== Enhanced Keyboard Navigation for Theme Toggle =====
const initThemeKeyboardNav = () => {
  const themeSwitch = document.querySelector('.theme-switch');
  const themeCheckbox = document.getElementById('theme-checkbox');

  if (!themeSwitch || !themeCheckbox) return;

  // Allow keyboard toggle with Enter or Space
  themeSwitch.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      themeCheckbox.checked = !themeCheckbox.checked;
      themeCheckbox.dispatchEvent(new Event('change'));
    }
  });

  // Make the label focusable
  themeSwitch.setAttribute('tabindex', '0');
  themeSwitch.setAttribute('role', 'switch');
  themeSwitch.setAttribute('aria-checked', themeCheckbox.checked);
  themeSwitch.setAttribute('aria-label', 'Toggle light/dark theme');

  // Update aria-checked when theme changes
  themeCheckbox.addEventListener('change', () => {
    themeSwitch.setAttribute('aria-checked', themeCheckbox.checked);
  });
};

initThemeKeyboardNav();

// ===== ENHANCED INTERACTIVE FEATURES ===== 

// 1. Scroll Reveal Animation System
const initScrollReveal = () => {
  const revealElements = document.querySelectorAll('.section, .project-card, .skill-card, .about-box');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
  });
};

// 2. Magnetic Button Effect
const initMagneticButtons = () => {
  const buttons = document.querySelectorAll('.btn, .project-link, .social-link');

  buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translate(0, 0)';
    });
  });
};

// 3. Ripple Effect on Click
const createRipple = (event, element) => {
  const circle = document.createElement('span');
  const diameter = Math.max(element.clientWidth, element.clientHeight);
  const radius = diameter / 2;

  const rect = element.getBoundingClientRect();
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - rect.left - radius}px`;
  circle.style.top = `${event.clientY - rect.top - radius}px`;
  circle.classList.add('ripple');

  const ripple = element.getElementsByClassName('ripple')[0];
  if (ripple) {
    ripple.remove();
  }

  element.appendChild(circle);

  setTimeout(() => circle.remove(), 600);
};

const initRippleEffect = () => {
  const rippleElements = document.querySelectorAll('.btn, .project-link, .social-link, .nav a');

  rippleElements.forEach(element => {
    element.style.position = 'relative';
    element.style.overflow = 'hidden';

    element.addEventListener('click', (e) => {
      createRipple(e, element);
    });
  });
};

// 4. 3D Tilt Effect for Project Cards
const init3DTilt = () => {
  const cards = document.querySelectorAll('.project-card, .about-box');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });

    card.style.transition = 'transform 0.2s ease';
  });
};

// 5. Smooth Parallax Effect
// 5. Smooth Parallax Effect - Simplified to avoid layout shifts
const initParallax = () => {
  const heroSection = document.querySelector('.hero');
  if (!heroSection) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    // Only animate the hero background/content slightly
    if (scrolled < window.innerHeight) {
      heroSection.style.transform = `translateY(${scrolled * 0.4}px)`;
      heroSection.style.opacity = 1 - (scrolled / window.innerHeight);
    }
  });
};

// 6. Enhanced Cursor Trail (Desktop Only)
const initCursorTrail = () => {
  if (window.innerWidth < 768) return; // Skip on mobile

  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  const cursorDot = document.createElement('div');
  cursorDot.className = 'custom-cursor-dot';
  document.body.appendChild(cursorDot);

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let dotX = 0, dotY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animateCursor = () => {
    // Smooth following animation
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    dotX += (mouseX - dotX) * 0.2;
    dotY += (mouseY - dotY) * 0.2;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    cursorDot.style.left = dotX + 'px';
    cursorDot.style.top = dotY + 'px';

    requestAnimationFrame(animateCursor);
  };

  animateCursor();

  // Expand cursor on hover
  const hoverElements = document.querySelectorAll('a, button, .btn, .project-link');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursor.style.borderColor = 'var(--accent)';
    });

    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.borderColor = 'rgba(0, 212, 170, 0.5)';
    });
  });
};

// 7. Floating Particles Background
const initParticles = () => {
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles-container';
  document.body.insertBefore(particlesContainer, document.body.firstChild);

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 5 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particlesContainer.appendChild(particle);
  }
};






// Initialize all enhancements
document.addEventListener('DOMContentLoaded', () => {
  // Check if device supports advanced features
  const supportsIntersectionObserver = 'IntersectionObserver' in window;
  const isDesktop = window.innerWidth >= 768;

  if (supportsIntersectionObserver) {
    initScrollReveal();
  }

  if (isDesktop) {
    initMagneticButtons();
    init3DTilt();
    initCursorTrail();
  }

  initRippleEffect();
  initParticles();

  // Delay parallax for better performance
  setTimeout(() => {
    if (isDesktop) initParallax();
  }, 1000);
});



