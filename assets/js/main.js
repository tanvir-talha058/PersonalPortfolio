document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const assetBase = body.dataset.assetBase || 'assets';

  const themeToggle = document.getElementById('theme-checkbox');
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const storedTheme = localStorage.getItem('theme');

  const applyTheme = (theme) => {
    body.dataset.theme = theme;
    if (themeToggle) {
      themeToggle.checked = theme === 'light';
    }
    localStorage.setItem('theme', theme);
  };

  applyTheme(storedTheme || (prefersLight ? 'light' : 'dark'));

  if (themeToggle) {
    themeToggle.addEventListener('change', () => {
      applyTheme(themeToggle.checked ? 'light' : 'dark');
    });
  }

  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');

  const setNavOpen = (open) => {
    if (!nav || !navToggle) return;
    nav.classList.toggle('is-open', open);
    navToggle.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    body.classList.toggle('no-scroll', open);
  };

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      setNavOpen(!nav.classList.contains('is-open'));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setNavOpen(false));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setNavOpen(false);
      }
    });

    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
        setNavOpen(false);
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('is-visible', window.scrollY > 500);
    });
  }

  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((element) => observer.observe(element));
  }

  const skills = [
    { name: 'Python', category: 'language', icon: 'fab fa-python' },
    { name: 'JavaScript', category: 'language', icon: 'fab fa-js' },
    { name: 'C++', category: 'language', icon: 'fas fa-code' },
    { name: 'Dart', category: 'language', icon: 'fas fa-bullseye' },
    { name: 'Java', category: 'language', icon: 'fab fa-java' },
    { name: 'C', category: 'language', icon: 'fas fa-code' },
    { name: 'TensorFlow', category: 'ai', icon: 'fas fa-brain' },
    { name: 'PyTorch', category: 'ai', icon: 'fas fa-fire-alt' },
    { name: 'OpenCV', category: 'ai', icon: 'fas fa-eye' },
    { name: 'Pandas', category: 'ai', icon: 'fas fa-table' },
    { name: 'NumPy', category: 'ai', icon: 'fas fa-calculator' },
    { name: 'Machine Learning', category: 'ai', icon: 'fas fa-robot' },
    { name: 'HTML5', category: 'frontend', icon: 'fab fa-html5' },
    { name: 'CSS3', category: 'frontend', icon: 'fab fa-css3-alt' },
    { name: 'Tailwind CSS', category: 'frontend', icon: 'fas fa-wind' },
    { name: 'Bootstrap', category: 'frontend', icon: 'fab fa-bootstrap' },
    { name: 'Flutter', category: 'mobile', icon: 'fas fa-mobile-alt' },
    { name: 'React', category: 'frontend', icon: 'fab fa-react' },
    { name: 'Node.js', category: 'backend', icon: 'fab fa-node' },
    { name: 'Express.js', category: 'backend', icon: 'fas fa-server' },
    { name: 'Selenium', category: 'tools', icon: 'fas fa-robot' },
    { name: 'Git', category: 'tools', icon: 'fab fa-git-alt' },
    { name: 'GitHub', category: 'tools', icon: 'fab fa-github' },
    { name: 'Firebase', category: 'cloud', icon: 'fas fa-fire' },
    { name: 'Docker', category: 'tools', icon: 'fab fa-docker' },
    { name: 'PostgreSQL', category: 'backend', icon: 'fas fa-database' },
    { name: 'MySQL', category: 'backend', icon: 'fas fa-database' },
    { name: 'MongoDB', category: 'backend', icon: 'fas fa-envira' }
  ];

  const projects = [
    {
      title: 'Dorm-Ease — AI Smart Dorm',
      description: 'AI-based room assignment system with real-time analytics and optimized matching.',
      tags: ['Node.js', 'PostgreSQL', 'Machine Learning', 'Bootstrap'],
      image: 'project-thumb-1.svg',
      theme: 'teal',
      github: 'https://github.com/tanvir-talha058/dorm-ease',
      demo: null
    },
    {
      title: 'Automator — Low Code Engine',
      description: 'Rule-based automation engine with configurable triggers and workflow orchestration.',
      tags: ['Node.js', 'Puppeteer', 'PostgreSQL', 'Tailwind CSS'],
      image: 'project-thumb-2.svg',
      theme: 'sky',
      github: 'https://github.com/tanvir-talha058/automator',
      demo: null
    },
    {
      title: 'Edu-Buddy AI Assistant',
      description: 'Voice-activated assistant for students with reminders and study support.',
      tags: ['Python', 'SpeechRecognition', 'Google TTS', 'Tkinter'],
      image: 'project-thumb-3.svg',
      theme: 'indigo',
      github: 'https://github.com/tanvir-talha058/edu-buddy-ai',
      demo: null
    },
    {
      title: 'AgroKart BD',
      description: 'Marketplace connecting farmers and consumers with mobile and web experiences.',
      tags: ['Flutter', 'Dart', 'Firebase', 'PHP', 'MySQL'],
      image: 'project-thumb-1.svg',
      theme: 'amber',
      github: 'https://github.com/tanvir-talha058/agrokart-bd',
      demo: null
    },
    {
      title: 'Hand Gesture Virtual Mouse',
      description: 'Real-time hand gesture system that maps movements to cursor control.',
      tags: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI'],
      image: 'project-thumb-2.svg',
      theme: 'teal',
      github: 'https://github.com/tanvir-talha058/hand-gesture-mouse',
      demo: null
    },
    {
      title: 'Bangladesh Crime Analytics',
      description: 'Crime tracking platform with interactive maps and live updates.',
      tags: ['Node.js', 'Leaflet.js', 'Web Scraping', 'Chart.js'],
      image: 'project-thumb-3.svg',
      theme: 'rose',
      github: 'https://github.com/tanvir-talha058/bd-crime-map',
      demo: null
    },
    {
      title: 'Cross-Platform Task Manager',
      description: 'Lightweight task manager with CPU and memory insights.',
      tags: ['Python', 'psutil', 'Tkinter', 'Desktop App'],
      image: 'project-thumb-1.svg',
      theme: 'sky',
      github: 'https://github.com/tanvir-talha058/task-manager',
      demo: null
    },
    {
      title: 'Garment Automation Tool',
      description: 'Selenium-powered automation for bulk web form submissions.',
      tags: ['Python', 'Selenium', 'Pandas', 'Excel Automation'],
      image: 'project-thumb-2.svg',
      theme: 'amber',
      github: 'https://github.com/tanvir-talha058/garment-automation',
      demo: null
    },
    {
      title: 'Automatic Water Dispenser',
      description: 'Touchless dispenser logic controlled by sensors and embedded systems.',
      tags: ['IoT', 'C++', 'Embedded Systems', 'IR Sensors'],
      image: 'project-thumb-3.svg',
      theme: 'indigo',
      github: null,
      demo: null
    }
  ];

  const blogPosts = [
    {
      title: 'My Journey into AI & Machine Learning',
      excerpt: 'How I transitioned from traditional programming to exploring AI and what I learned along the way.',
      date: '2026-01-15',
      readTime: '5 min read',
      category: 'Career',
      categoryKey: 'career',
      slug: 'my-journey-into-ai-machine-learning'
    },
    {
      title: 'Building Scalable Full-Stack Applications',
      excerpt: 'Key lessons from developing production-ready applications and deployment strategies.',
      date: '2026-01-08',
      readTime: '7 min read',
      category: 'Development',
      categoryKey: 'dev',
      slug: 'building-scalable-full-stack-applications'
    },
    {
      title: 'The Importance of Clean Code',
      excerpt: 'Why maintainable, readable code matters more than clever solutions.',
      date: '2025-12-20',
      readTime: '4 min read',
      category: 'Best Practices',
      categoryKey: 'best-practices',
      slug: 'the-importance-of-clean-code'
    },
    {
      title: 'Lessons from My First Open Source Contribution',
      excerpt: 'What I learned from contributing to open source projects and why you should try it.',
      date: '2025-12-10',
      readTime: '6 min read',
      category: 'Open Source',
      categoryKey: 'open-source',
      slug: 'lessons-from-my-first-open-source-contribution'
    }
  ];

  const renderSkills = () => {
    const skillsList = document.getElementById('skills-list');
    if (!skillsList) return;

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

    skillsList.innerHTML = Object.entries(groupedSkills)
      .map(([categoryKey, categorySkills]) => {
        const categoryName = categories[categoryKey] || categoryKey;
        return `
          <div class="skill-category-card">
            <h3 class="category-header">${categoryName}</h3>
            <div class="skill-tags">
              ${categorySkills
                .map(
                  (skill) => `
                <div class="skill-pill">
                  <i class="${skill.icon}"></i>
                  <span>${skill.name}</span>
                </div>
              `
                )
                .join('')}
            </div>
          </div>
        `;
      })
      .join('');
  };

  const renderProjects = () => {
    const projectsList = document.getElementById('projects-list');
    if (!projectsList) return;

    projectsList.innerHTML = projects
      .map((project) => {
        const imageUrl = `${assetBase}/images/${project.image}`;
        const githubLink = project.github || '#';
        const demoLink = project.demo || '#';
        const githubDisabled = !project.github;
        const demoDisabled = !project.demo;

        return `
          <div class="project-card theme-${project.theme}">
            <div class="project-media">
              <img src="${imageUrl}" alt="${project.title} preview" loading="lazy">
            </div>
            <div class="project-body">
              <h3 class="project-title">${project.title}</h3>
              <p class="project-description">${project.description}</p>
              <div class="project-tags">
                ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
              </div>
              <div class="project-actions">
                <a href="${githubLink}" target="_blank" rel="noopener noreferrer" class="btn outline${
                  githubDisabled ? ' is-disabled' : ''
                }" ${githubDisabled ? 'aria-disabled="true" tabindex="-1"' : ''}>
                  <i class="fab fa-github"></i> GitHub
                </a>
                <a href="${demoLink}" target="_blank" rel="noopener noreferrer" class="btn primary${
                  demoDisabled ? ' is-disabled' : ''
                }" ${demoDisabled ? 'aria-disabled="true" tabindex="-1"' : ''}>
                  <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        `;
      })
      .join('');
  };

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

    blogPostsList.innerHTML = blogPosts
      .map(
        (post) => `
        <a href="blog.html?post=${post.slug}" class="blog-card-link">
          <article class="blog-card category-${post.categoryKey}">
            <div class="blog-card-header">
              <div class="blog-icon">
                <i class="fas fa-book"></i>
              </div>
              <span class="blog-category">${post.category}</span>
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
        </a>
      `
      )
      .join('');
  };

  renderSkills();
  renderProjects();
  renderBlogPosts();

  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const mailtoBtn = document.getElementById('mailto-btn');
  const copyStatus = document.getElementById('copy-status');

  const emailConfig = {
    serviceId: 'YOUR_SERVICE_ID',
    templateId: 'YOUR_TEMPLATE_ID',
    publicKey: 'YOUR_PUBLIC_KEY'
  };

  if (window.emailjs) {
    window.emailjs.init(emailConfig.publicKey);
  }

  const setStatus = (message, type) => {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.classList.toggle('is-success', type === 'success');
    formStatus.classList.toggle('is-error', type === 'error');
  };

  const validateForm = (data) => {
    if (!data.name || data.name.trim().length < 2) {
      return 'Please enter your name.';
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return 'Please enter a valid email address.';
    }
    if (!data.message || data.message.trim().length < 10) {
      return 'Message should be at least 10 characters.';
    }
    return null;
  };

  if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      setStatus('', '');

      const formData = new FormData(contactForm);
      const payload = {
        name: formData.get('name')?.toString() || '',
        email: formData.get('email')?.toString() || '',
        message: formData.get('message')?.toString() || ''
      };

      const error = validateForm(payload);
      if (error) {
        setStatus(error, 'error');
        return;
      }

      if (!window.emailjs) {
        setStatus('Email service is not available yet. Please try again later.', 'error');
        return;
      }

      try {
        await window.emailjs.send(emailConfig.serviceId, emailConfig.templateId, {
          from_name: payload.name,
          reply_to: payload.email,
          message: payload.message
        });

        contactForm.reset();
        setStatus('Thanks! Your message has been sent.', 'success');
      } catch (error) {
        setStatus('Sorry, something went wrong. Please try again.', 'error');
      }
    });
  }

  if (mailtoBtn && contactForm) {
    mailtoBtn.addEventListener('click', () => {
      const formData = new FormData(contactForm);
      const name = formData.get('name')?.toString() || '';
      const email = formData.get('email')?.toString() || '';
      const message = formData.get('message')?.toString() || '';

      const subject = encodeURIComponent(`Project inquiry from ${name || 'your portfolio'}`);
      const bodyText = encodeURIComponent(`${message}\n\nReply to: ${email}`);
      window.location.href = `mailto:tanvirahmed123000@gmail.com?subject=${subject}&body=${bodyText}`;

      if (copyStatus) {
        copyStatus.textContent = 'Opening your email client...';
        setTimeout(() => {
          copyStatus.textContent = '';
        }, 3000);
      }
    });
  }
});
