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

  // Keep default browser zoom behavior for accessibility compliance.

  // Detect mobile device / motion preferences
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

  // Hero typewriter roles text
  const typedEl = document.getElementById('typed');
  if (typedEl) {
    const roles = [
      'Full-Stack Engineer',
      'AI Product Builder',
      'Machine Learning Developer',
      'Flutter App Developer'
    ];

    // Respect reduced-motion preference by showing a static role.
    if (prefersReducedMotion) {
      typedEl.textContent = roles[0];
    } else {
      let roleIndex = 0;
      let charIndex = 0;
      let deleting = false;
      typedEl.textContent = '';

      const tickTypewriter = () => {
        const currentRole = roles[roleIndex];

        if (!deleting) {
          charIndex += 1;
          typedEl.textContent = currentRole.slice(0, charIndex);
        } else {
          charIndex -= 1;
          typedEl.textContent = currentRole.slice(0, Math.max(0, charIndex));
        }

        let delay = deleting ? 45 : 85;

        if (!deleting && charIndex === currentRole.length) {
          deleting = true;
          delay = 1200;
        } else if (deleting && charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          delay = 260;
        }

        window.setTimeout(tickTypewriter, delay);
      };

      window.setTimeout(tickTypewriter, 250);
    }
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

  // Skills data (matched to "Skills" section in resume)
  const skills = [
    // Languages
    { name: 'Python', category: 'language', icon: 'fab fa-python' },
    { name: 'C', category: 'language', icon: 'fas fa-code' },
    { name: 'C++', category: 'language', icon: 'fas fa-code' },
    { name: 'Java', category: 'language', icon: 'fab fa-java' },
    { name: 'JavaScript', category: 'language', icon: 'fab fa-js' },
    { name: 'Dart', category: 'language', icon: 'fas fa-code' },
    { name: 'PHP', category: 'language', icon: 'fab fa-php' },
    { name: 'SQL', category: 'language', icon: 'fas fa-database' },

    // AI / ML & Libraries
    { name: 'TensorFlow', category: 'ai', icon: 'fas fa-brain' },
    { name: 'PyTorch', category: 'ai', icon: 'fas fa-fire-alt' },
    { name: 'scikit-learn', category: 'ai', icon: 'fas fa-robot' },
    { name: 'Keras', category: 'ai', icon: 'fas fa-layer-group' },
    { name: 'OpenCV', category: 'ai', icon: 'fas fa-eye' },
    { name: 'Mediapipe', category: 'ai', icon: 'fas fa-hand' },
    { name: 'NumPy', category: 'ai', icon: 'fas fa-calculator' },
    { name: 'Pandas', category: 'ai', icon: 'fas fa-table' },
    { name: 'Selenium', category: 'ai', icon: 'fas fa-robot' },
    { name: 'Tkinter', category: 'ai', icon: 'fas fa-desktop' },
    { name: 'Matplotlib', category: 'ai', icon: 'fas fa-chart-line' },
    { name: 'Seaborn', category: 'ai', icon: 'fas fa-chart-area' },

    // Web
    { name: 'HTML', category: 'web', icon: 'fab fa-html5' },
    { name: 'CSS', category: 'web', icon: 'fab fa-css3-alt' },
    { name: 'Bootstrap', category: 'web', icon: 'fab fa-bootstrap' },
    { name: 'Tailwind CSS', category: 'web', icon: 'fas fa-wind' },

    // Mobile / Cloud / Tools
    { name: 'Flutter', category: 'mobile', icon: 'fas fa-mobile-alt' },
    { name: 'Firebase', category: 'tools', icon: 'fas fa-fire' },
    { name: 'Git', category: 'tools', icon: 'fab fa-git-alt' },
    { name: 'GitHub', category: 'tools', icon: 'fab fa-github' },
    { name: 'VS Code', category: 'tools', icon: 'fas fa-code' },
    { name: 'Figma', category: 'tools', icon: 'fab fa-figma' },
    { name: 'Google Colab', category: 'tools', icon: 'fas fa-cloud' },
    { name: 'Kaggle', category: 'tools', icon: 'fab fa-kaggle' },
    { name: 'Tinkercad', category: 'tools', icon: 'fas fa-microchip' },
    { name: 'Zapier', category: 'tools', icon: 'fas fa-bolt' },
    { name: 'Make', category: 'tools', icon: 'fas fa-tools' },

    // Concepts & Domains
    { name: 'Machine Learning', category: 'concepts', icon: 'fas fa-robot' },
    { name: 'Deep Learning', category: 'concepts', icon: 'fas fa-brain' },
    { name: 'Computer Vision', category: 'concepts', icon: 'fas fa-eye' },
    { name: 'Image/Video Processing', category: 'concepts', icon: 'fas fa-photo-video' },
    { name: 'NLP', category: 'concepts', icon: 'fas fa-language' },
    { name: 'Object Tracking', category: 'concepts', icon: 'fas fa-crosshairs' },
    { name: 'IoT', category: 'concepts', icon: 'fas fa-wifi' },
    { name: 'Automation', category: 'concepts', icon: 'fas fa-cogs' },
    { name: 'Human-Computer Interaction', category: 'concepts', icon: 'fas fa-user-check' },
    { name: 'Data Visualization', category: 'concepts', icon: 'fas fa-chart-pie' },
    { name: 'Big Data', category: 'concepts', icon: 'fas fa-database' }
  ];

  // Projects data (matched to "Project Work" section in resume)
  const projects = [
    {
      title: 'Smart Home Automation System — Mobile App and Voice Controlled',
      description: 'Smart home IoT automation system enabling remote control of lights, TV, fan, and AC via mobile app and voice assistants, with real-time sensor monitoring and scheduling.',
      tags: ['ESP32', 'Arduino (C++)', 'IoT', 'DHT11', 'MQ-5'],
      icon: 'fas fa-home',
      color: '#3b82f6',
      github: null
    },
    {
      title: 'Edu-Buddy — AI Student Assistant',
      description: 'Voice-activated assistant for reminders, study schedules, and quick access to educational resources with modular intent parsing and desktop TTS/ASR integration.',
      tags: ['Python', 'SpeechRecognition', 'Google TTS', 'SQLite', 'Tkinter'],
      icon: 'fas fa-graduation-cap',
      color: '#8b5cf6',
      github: null
    },
    {
      title: 'AgroKart BD — Cross-Platform Marketplace',
      description: 'Cross-platform marketplace with a Flutter mobile app and responsive web portal connecting farmers with consumers, including auth, listings, cart, and backend order management.',
      tags: ['Flutter', 'Firebase', 'PHP', 'SQL', 'HTML/CSS/JS'],
      icon: 'fas fa-shopping-basket',
      color: '#10b981',
      github: null
    },
    {
      title: 'Hand Gesture Virtual Mouse',
      description: 'Real-time gesture-controlled cursor with click, scroll, and drag using multi-landmark detection and a low-latency frame pipeline.',
      tags: ['Python', 'OpenCV', 'Mediapipe', 'PyAutoGUI'],
      icon: 'fas fa-mouse',
      color: '#6366f1',
      github: null
    },
    {
      title: 'Cross-Platform Task Manager',
      description: 'Lightweight tool to monitor processes and CPU/memory usage and perform safe terminations across platforms.',
      tags: ['Python', 'psutil', 'Tkinter'],
      icon: 'fas fa-tasks',
      color: '#f59e0b',
      github: null
    },
    {
      title: 'Automatic Water Dispenser',
      description: 'Touchless water dispenser with calibrated IR sensor sensitivity and optimized circuit stability for reliable real-time detection.',
      tags: ['IR Sensor', 'DC Pump', 'Circuit Design'],
      icon: 'fas fa-tint',
      color: '#06b6d4',
      github: null
    },
    {
      title: 'Automation Tool for Local Garment',
      description: 'GUI app to upload Excel and auto-fill web forms with dynamic field mapping using browser automation to reduce manual entry and errors.',
      tags: ['Python', 'Selenium', 'Tkinter', 'Excel'],
      icon: 'fas fa-tshirt',
      color: '#ec4899',
      github: null
    },
    {
      title: 'Bangladesh Crime Map & News Aggregator',
      description: 'Real-time crime tracking platform aggregating data from 18+ national news sources using web scraping, with a bilingual dashboard featuring maps, filtering, and category classification.',
      tags: ['Node.js', 'Express', 'Axios/Cheerio', 'Leaflet.js', 'Chart.js'],
      icon: 'fas fa-map-marked-alt',
      color: '#f43f5e',
      github: null
    }
  ];

  // Blog posts data - loaded from external JSON
  let blogPosts = [];

  // Fetch blog data from JSON
  const loadBlogData = async () => {
    try {
      const response = await fetch('data/blog.json');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      blogPosts = data.posts;
      renderBlogPosts(); // Re-render after loading
    } catch (error) {
      console.error('Failed to load blog posts:', error);
      // Fallback to empty state
      const blogPostsList = document.getElementById('blog-posts');
      if (blogPostsList) {
        blogPostsList.innerHTML = '<p>Blog posts will be available soon.</p>';
      }
    }
  };

  // Load blog data on page load
  loadBlogData();

  // Render skills
  const renderSkills = () => {
    const skillsList = document.getElementById('skills-list');
    if (!skillsList) return;

    // Group skills by category
    const categories = {
      language: 'Languages',
      ai: 'AI / ML & Libraries',
      web: 'Web',
      mobile: 'Mobile',
      tools: 'Tools',
      concepts: 'Concepts & Domains'
    };

    const groupedSkills = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    }, {});

    const categoryOrder = ['language', 'ai', 'web', 'mobile', 'tools', 'concepts'];
    const orderedEntries = [
      ...categoryOrder
        .filter((key) => Array.isArray(groupedSkills[key]) && groupedSkills[key].length > 0)
        .map((key) => [key, groupedSkills[key]]),
      ...Object.entries(groupedSkills).filter(([key]) => !categoryOrder.includes(key))
    ];

    const skillsHTML = orderedEntries.map(([categoryKey, categorySkills]) => {
      // Map category key to display name, or capitalize if not found
      const categoryName = categories[categoryKey] || categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);
      const sortedSkills = [...categorySkills].sort((a, b) => a.name.localeCompare(b.name));

      return `
      <div class="skill-category-card">
        <h3 class="category-header">${categoryName}</h3>
        <div class="skill-tags">
          ${sortedSkills.map(skill => `
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
      <a href="blog.html?post=${post.slug}" class="blog-card-link">
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
              <span class="blog-status planned">Planned</span>
            </div>
            <span class="read-more-link">
              Read more <i class="fas fa-arrow-right"></i>
            </span>
          </div>
        </article>
      </a>
    `).join('');

    blogPostsList.innerHTML = blogHTML;
  };

  // Initialize rendering
  renderSkills();
  renderProjects();
  // Blog posts will be rendered after JSON loads (via loadBlogData)

  // Initialize lazy loading for images
  const initLazyLoading = () => {
    // Check if native lazy loading is supported
    if ('loading' in HTMLImageElement.prototype || 'IntersectionObserver' in window) {
      setupLazyLoading();
    }
  };

  const setupLazyLoading = () => {
    // Find all images with data-src attribute
    const lazyImages = document.querySelectorAll('img[data-src], img[loading="lazy"]');

    if (lazyImages.length === 0) return;

    // Create intersection observer for lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          
          // Load the image
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          
          // Load srcset if available
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
          }

          // Add loaded class for fade-in animation
          img.classList.add('loaded');
          
          // Stop observing this image
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px', // Start loading 50px before image enters viewport
      threshold: 0
    });

    lazyImages.forEach(img => {
      // Add loading state
      img.classList.add('loading');
      
      // Fallback for browsers without data-src support
      if (!img.src && img.dataset.src) {
        img.src = img.dataset.src;
      }
      
      // Start observing
      imageObserver.observe(img);
    });
  };

  // Call lazy loading initialization
  initLazyLoading();

  // Watch for dynamically added images
  const observer = new MutationObserver(() => {
    const newLazyImages = document.querySelectorAll('img[data-src]:not(.loaded)');
    if (newLazyImages.length > 0) {
      setupLazyLoading();
    }
  });

  observer.observe(document.body, {
    subtree: true,
    childList: true
  });

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
      }
    });
  } // End of navigation setup

  // Notification helper function
  function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) existingNotification.remove();

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
      <span>${message}</span>
      <button class="notification-close" aria-label="Close">&times;</button>
    `;
    document.body.appendChild(notification);

    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 10);

    // Close button handler
    notification.querySelector('.notification-close').addEventListener('click', () => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    });

    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
      }
    }, 5000);
  }

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

  // Mobile scroll indicator
  if (window.innerWidth <= 768 && !prefersReducedMotion) {
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

  let ticking = false;

  const applyParallax = () => {
    const scrolled = window.pageYOffset;
    if (scrolled < window.innerHeight) {
      heroSection.style.transform = `translateY(${scrolled * 0.4}px)`;
      heroSection.style.opacity = String(Math.max(0.2, 1 - (scrolled / window.innerHeight)));
    }
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(applyParallax);
      ticking = true;
    }
  }, { passive: true });
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

  // Fewer particles = better perceived performance on real devices
  const particleCount = 18;
  for (let i = 0; i < particleCount; i++) {
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
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pointerFine = window.matchMedia && window.matchMedia('(pointer: fine)').matches;

  if (supportsIntersectionObserver && !prefersReducedMotion) {
    initScrollReveal();
  }

  // Only enable heavier hover effects on desktop devices with precise pointers
  if (isDesktop && pointerFine && !prefersReducedMotion) {
    initMagneticButtons();
    init3DTilt();
    initCursorTrail();
  }

  if (!prefersReducedMotion) {
    initRippleEffect();
  }

  // Particles are visual only – keep them off for small screens and reduced motion
  if (isDesktop && !prefersReducedMotion) {
    // Defer particles slightly to avoid competing with initial paint
    window.requestIdleCallback
      ? window.requestIdleCallback(() => initParticles())
      : setTimeout(() => initParticles(), 800);
  }

  // Delay parallax for better performance
  setTimeout(() => {
    if (isDesktop && !prefersReducedMotion) initParallax();
  }, 1000);
});
