// Blog post data with full content
const blogPostsData = {
  'my-journey-into-ai-machine-learning': {
    title: 'My Journey into AI & Machine Learning',
    excerpt: 'How I transitioned from traditional programming to exploring the fascinating world of artificial intelligence and what I learned along the way.',
    date: '2026-01-15',
    readTime: '5 min read',
    category: 'Career',
    icon: 'fas fa-brain',
    color: '#8b5cf6',
    content: `
      <p class="lead">The world of Artificial Intelligence and Machine Learning has always fascinated me. What started as curiosity eventually became my career focus, and I'd like to share that journey with you.</p>

      <h2>The Spark of Interest</h2>
      <p>It all began during my second year of university when I stumbled upon a YouTube video about neural networks. The idea that we could teach machines to learn patterns and make decisions was mind-blowing to me. I remember spending the entire night reading about how convolutional neural networks could identify objects in images.</p>

      <p>That night changed everything. I knew I wanted to understand these systems deeply, not just use them as black boxes.</p>

      <h2>First Steps: The Learning Curve</h2>
      <p>My first encounter with actual ML code was humbling. I had experience with Python from web scraping projects, but machine learning was a different beast entirely. Terms like <code>gradient descent</code>, <code>backpropagation</code>, and <code>loss functions</code> felt like a foreign language.</p>

      <p>Here's what helped me get through the initial barrier:</p>
      <ul>
        <li><strong>Andrew Ng's Machine Learning Course</strong> — This course laid the mathematical foundation I needed</li>
        <li><strong>Kaggle Competitions</strong> — Nothing beats hands-on practice with real datasets</li>
        <li><strong>Reading Research Papers</strong> — Intimidating at first, but essential for understanding the field</li>
        <li><strong>Building Projects</strong> — I applied ML to problems I cared about</li>
      </ul>

      <h2>My First Real Project</h2>
      <p>My breakthrough came when I built a plant disease detection system for local farmers. This wasn't just an academic exercise — it solved a real problem. Farmers could take a photo of their crop, and the system would identify potential diseases with over 92% accuracy.</p>

      <blockquote>
        <p>"The best way to learn is to build something that matters to someone."</p>
      </blockquote>

      <p>This project taught me that AI isn't about the fanciest algorithms — it's about solving real problems for real people. The farmers didn't care about my model architecture; they cared that it helped save their crops.</p>

      <h2>Lessons Learned</h2>
      <p>Looking back at my journey, here are the key lessons I've internalized:</p>

      <ol>
        <li><strong>Start with fundamentals</strong> — Don't rush to deep learning without understanding the basics</li>
        <li><strong>Embrace the math</strong> — You don't need a PhD, but understanding the intuition behind algorithms is crucial</li>
        <li><strong>Build, build, build</strong> — Tutorials only take you so far; real learning happens in projects</li>
        <li><strong>Stay curious</strong> — The field evolves rapidly; continuous learning is non-negotiable</li>
        <li><strong>Focus on impact</strong> — Technology is a means to an end, not the end itself</li>
      </ol>

      <h2>What's Next</h2>
      <p>Currently, I'm exploring the intersection of computer vision and natural language processing. The ability to understand both visual and textual information opens up incredible possibilities for applications I'm excited to build.</p>

      <p>If you're starting your own AI journey, remember: everyone starts somewhere. The field may seem overwhelming, but with consistent effort and genuine curiosity, you'll find your path.</p>

      <p>Feel free to <a href="index.html#contact">reach out</a> if you want to discuss AI, share project ideas, or just connect!</p>
    `
  },

  'building-scalable-full-stack-applications': {
    title: 'Building Scalable Full-Stack Applications',
    excerpt: 'Key lessons learned from developing production-ready applications — from architecture decisions to deployment strategies.',
    date: '2026-01-08',
    readTime: '7 min read',
    category: 'Development',
    icon: 'fas fa-layer-group',
    color: '#3b82f6',
    content: `
      <p class="lead">After building numerous full-stack applications, from small side projects to production systems serving thousands of users, I've learned that scalability isn't just about handling more traffic — it's about building systems that grow gracefully.</p>

      <h2>Architecture First, Code Second</h2>
      <p>One of my biggest early mistakes was jumping straight into coding without proper planning. I'd build features, add more features, and suddenly find myself with a tangled mess that was impossible to maintain.</p>

      <p>Now, I spend significant time on architecture decisions before writing any code:</p>
      <ul>
        <li>How will data flow through the system?</li>
        <li>What are the potential bottlenecks?</li>
        <li>How will components communicate?</li>
        <li>What happens when traffic increases 10x?</li>
      </ul>

      <h2>The Stack That Works</h2>
      <p>Through trial and error, I've developed preferences for different scenarios:</p>

      <h3>For Rapid Prototyping</h3>
      <pre><code>Frontend: React + Tailwind CSS
Backend: Node.js + Express
Database: PostgreSQL
Hosting: Vercel / Railway</code></pre>

      <h3>For AI-Integrated Applications</h3>
      <pre><code>Frontend: React / Flutter
Backend: Python + FastAPI
ML: TensorFlow / PyTorch
Database: PostgreSQL + Redis
Hosting: AWS / GCP</code></pre>

      <h2>Key Principles I Follow</h2>

      <h3>1. Separation of Concerns</h3>
      <p>Every component should do one thing well. Your authentication logic shouldn't be mixed with business logic. Your database queries shouldn't live in your route handlers.</p>

      <h3>2. API-First Design</h3>
      <p>I design APIs before building UIs. This approach forces clarity about data structures and interactions. Tools like OpenAPI/Swagger help document and validate these designs.</p>

      <h3>3. Database Optimization</h3>
      <p>Most performance issues I've encountered stem from database problems:</p>
      <ul>
        <li>Missing indexes on frequently queried columns</li>
        <li>N+1 query problems</li>
        <li>Fetching more data than needed</li>
        <li>Not using connection pooling</li>
      </ul>

      <blockquote>
        <p>"Premature optimization is the root of all evil, but ignoring obvious inefficiencies is just as bad."</p>
      </blockquote>

      <h3>4. Caching Strategically</h3>
      <p>Not everything needs caching, but the right caching strategy can transform performance:</p>
      <ul>
        <li><strong>Redis</strong> for session management and frequently accessed data</li>
        <li><strong>CDN</strong> for static assets</li>
        <li><strong>Browser caching</strong> with proper cache headers</li>
        <li><strong>API response caching</strong> for expensive computations</li>
      </ul>

      <h2>Deployment & DevOps</h2>
      <p>A scalable application means nothing if deployment is painful. My current workflow includes:</p>
      <ul>
        <li>Git-based version control with clear branching strategy</li>
        <li>CI/CD pipelines for automated testing and deployment</li>
        <li>Docker containers for consistent environments</li>
        <li>Environment-specific configurations</li>
        <li>Monitoring and alerting (I love Grafana + Prometheus)</li>
      </ul>

      <h2>Real-World Example: Dorm-Ease</h2>
      <p>When building Dorm-Ease, our AI-powered dorm assignment system, we faced real scalability challenges. During registration periods, traffic would spike 50x normal levels.</p>

      <p>Our solutions included:</p>
      <ol>
        <li>Implementing request queuing for ML predictions</li>
        <li>Caching common assignment patterns</li>
        <li>Using database read replicas</li>
        <li>Progressive loading for the dashboard</li>
      </ol>

      <p>The result? We handled peak traffic smoothly while keeping costs reasonable.</p>

      <h2>Final Thoughts</h2>
      <p>Building scalable applications is as much about mindset as it is about technology. Think about future growth during design, but don't over-engineer. Start simple, measure everything, and optimize based on real data.</p>

      <p>What challenges have you faced when scaling applications? I'd love to hear your experiences — <a href="index.html#contact">let's connect</a>!</p>
    `
  },

  'the-importance-of-clean-code': {
    title: 'The Importance of Clean Code',
    excerpt: 'Why writing maintainable, readable code matters more than clever solutions, and how it impacts team productivity.',
    date: '2025-12-20',
    readTime: '4 min read',
    category: 'Best Practices',
    icon: 'fas fa-code',
    color: '#10b981',
    content: `
      <p class="lead">Early in my programming journey, I prided myself on writing "clever" code — one-liners that did complex things, nested ternary operators, and functions that were as short as possible. I thought this made me a better programmer. I was wrong.</p>

      <h2>The Day I Learned My Lesson</h2>
      <p>Three months after writing a "clever" utility function, I needed to modify it. I stared at my own code, completely confused. What did this variable mean? Why did I structure it this way? I ended up rewriting the entire function from scratch because understanding it would take longer than rebuilding it.</p>

      <blockquote>
        <p>"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." — Martin Fowler</p>
      </blockquote>

      <h2>What Clean Code Actually Means</h2>
      <p>Clean code isn't about following arbitrary rules. It's about empathy — writing code that your future self (and others) can understand, modify, and extend without suffering.</p>

      <h3>Meaningful Names</h3>
      <p>Compare these two versions:</p>
      <pre><code>// Bad
const d = new Date();
const x = d.getTime() - s.getTime();

// Good
const currentDate = new Date();
const elapsedMilliseconds = currentDate.getTime() - startDate.getTime();</code></pre>

      <p>The second version tells a story. You understand what's happening without needing comments.</p>

      <h3>Small, Focused Functions</h3>
      <p>Each function should do one thing. If you need "and" to describe what a function does, it probably does too much.</p>

      <pre><code>// Bad
function processUserDataAndSendEmailAndUpdateDatabase(user) { ... }

// Good
function validateUserData(user) { ... }
function sendWelcomeEmail(user) { ... }
function saveUserToDatabase(user) { ... }</code></pre>

      <h3>Consistent Formatting</h3>
      <p>Use tools like Prettier and ESLint. Consistency reduces cognitive load — your brain can focus on logic instead of parsing different styles.</p>

      <h2>The Real Cost of Messy Code</h2>
      <p>In team environments, messy code compounds:</p>
      <ul>
        <li><strong>Onboarding takes longer</strong> — New team members struggle to understand the codebase</li>
        <li><strong>Bugs hide better</strong> — Complex code has more places for bugs to lurk</li>
        <li><strong>Changes are risky</strong> — Without understanding code fully, modifications often break things</li>
        <li><strong>Technical debt accumulates</strong> — Quick fixes pile up because proper fixes seem too hard</li>
      </ul>

      <h2>Practical Tips I Follow</h2>
      <ol>
        <li><strong>Write code for readers, not writers</strong> — You write once, but code is read many times</li>
        <li><strong>Refactor continuously</strong> — Leave code better than you found it</li>
        <li><strong>Use meaningful comments sparingly</strong> — Explain "why," not "what"</li>
        <li><strong>Review your own code</strong> — Before submitting, read through as if you're seeing it for the first time</li>
        <li><strong>Get code reviews</strong> — Fresh eyes catch what yours miss</li>
      </ol>

      <h2>Clean Code in Practice</h2>
      <p>Here's my typical workflow:</p>
      <ol>
        <li>Write working code first (it can be messy)</li>
        <li>Make it work correctly with tests</li>
        <li>Refactor for clarity</li>
        <li>Review and refine names</li>
        <li>Remove duplication</li>
      </ol>

      <p>This approach lets me focus on solving the problem first, then on communication.</p>

      <h2>Recommended Resources</h2>
      <ul>
        <li><strong>"Clean Code"</strong> by Robert C. Martin — The classic book on this topic</li>
        <li><strong>"The Pragmatic Programmer"</strong> — Broader wisdom that includes clean code principles</li>
        <li><strong>Code review sessions</strong> — Learn from how others write and critique code</li>
      </ul>

      <p>Clean code is a skill that develops over time. Be patient with yourself, but be intentional about improvement. Your future self will thank you!</p>
    `
  },

  'lessons-from-my-first-open-source-contribution': {
    title: 'Lessons from My First Open Source Contribution',
    excerpt: 'What I learned from contributing to open source projects and why every developer should try it at least once.',
    date: '2025-12-10',
    readTime: '6 min read',
    category: 'Open Source',
    icon: 'fab fa-github',
    color: '#f59e0b',
    content: `
      <p class="lead">Contributing to open source seemed intimidating for the longest time. The codebases were huge, the contributors were experienced, and I was afraid of making mistakes publicly. But taking that first step taught me more than months of solo coding.</p>

      <h2>Breaking Through the Fear</h2>
      <p>My first contribution was fixing a typo in documentation. Yes, a typo. It felt insignificant, but it broke the psychological barrier. I had successfully:</p>
      <ul>
        <li>Forked a repository</li>
        <li>Created a branch</li>
        <li>Made changes</li>
        <li>Submitted a pull request</li>
        <li>Had it merged by maintainers</li>
      </ul>

      <p>That single merged PR gave me confidence to attempt larger contributions.</p>

      <h2>Finding the Right Project</h2>
      <p>Not all open source projects are beginner-friendly. I learned to look for:</p>
      <ul>
        <li><strong>"Good first issue" labels</strong> — These are specifically marked for newcomers</li>
        <li><strong>Active maintainers</strong> — Check when the last PR was merged</li>
        <li><strong>Clear contribution guidelines</strong> — Shows the project is organized</li>
        <li><strong>Welcoming community</strong> — Read discussions; avoid toxic environments</li>
        <li><strong>Technology you know</strong> — Contribute where you're comfortable first</li>
      </ul>

      <h2>My First "Real" Contribution</h2>
      <p>After several documentation fixes, I tackled an actual bug. A Python library I used daily had an issue with edge cases in date parsing. I:</p>

      <ol>
        <li>Reproduced the bug locally</li>
        <li>Wrote a failing test case</li>
        <li>Traced through the code to understand the logic</li>
        <li>Implemented a fix</li>
        <li>Ensured all existing tests still passed</li>
        <li>Submitted a detailed PR with explanation</li>
      </ol>

      <p>The maintainer requested some changes, I made them, and it was merged. Seeing my code in a library used by thousands of developers was incredibly rewarding.</p>

      <h2>What Open Source Taught Me</h2>

      <h3>1. Reading Code is a Skill</h3>
      <p>Understanding large codebases is different from writing small projects. I learned to:</p>
      <ul>
        <li>Start from entry points and trace execution</li>
        <li>Use IDE features for navigation</li>
        <li>Read tests to understand expected behavior</li>
        <li>Not try to understand everything at once</li>
      </ul>

      <h3>2. Communication Matters</h3>
      <p>Clear PR descriptions, meaningful commit messages, and polite discussions are crucial. I learned to:</p>
      <ul>
        <li>Explain <em>why</em> I made changes, not just what I changed</li>
        <li>Ask questions respectfully</li>
        <li>Accept feedback gracefully</li>
        <li>Thank maintainers for their time</li>
      </ul>

      <h3>3. Professional Workflows</h3>
      <p>Open source projects taught me practices I now use everywhere:</p>
      <ul>
        <li>Proper Git branch management</li>
        <li>Writing meaningful commit messages</li>
        <li>Code review etiquette</li>
        <li>Documentation standards</li>
        <li>Testing practices</li>
      </ul>

      <blockquote>
        <p>"Open source contribution is like a free masterclass in professional software development."</p>
      </blockquote>

      <h3>4. The Community is Supportive</h3>
      <p>Contrary to my fears, most open source communities are welcoming. People want to help newcomers succeed. I've received patient code reviews, detailed explanations, and encouragement from maintainers who volunteer their time.</p>

      <h2>Tips for Your First Contribution</h2>
      <ol>
        <li><strong>Start small</strong> — Typos, documentation, small bugs</li>
        <li><strong>Read contribution guidelines</strong> — Every project has preferences</li>
        <li><strong>Ask before major work</strong> — Comment on issues before spending hours on a PR</li>
        <li><strong>Be patient</strong> — Maintainers are busy; reviews take time</li>
        <li><strong>Don't take rejection personally</strong> — Sometimes PRs don't align with project direction</li>
        <li><strong>Contribute to tools you use</strong> — You understand the context better</li>
      </ol>

      <h2>The Bigger Picture</h2>
      <p>Open source isn't just about code. It's about:</p>
      <ul>
        <li>Giving back to tools that help you daily</li>
        <li>Building a public portfolio of real-world work</li>
        <li>Learning from experienced developers</li>
        <li>Joining a global community</li>
        <li>Making technology better for everyone</li>
      </ul>

      <p>If you've been hesitant about contributing, I encourage you to find a small issue this week and take that first step. You might be surprised how much you learn — and how good it feels to give back.</p>

      <p>Have you made open source contributions? I'd love to hear about your experiences — <a href="index.html#contact">reach out</a>!</p>
    `
  }
};

// Get post slug from URL
function getPostSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get('post');
}

// Format date
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Render post
function renderPost() {
  const slug = getPostSlug();
  const post = blogPostsData[slug];

  if (!post) {
    document.getElementById('post-content').innerHTML = `
      <div class="post-not-found">
        <i class="fas fa-exclamation-circle"></i>
        <h2>Post Not Found</h2>
        <p>Sorry, the requested blog post could not be found.</p>
        <a href="index.html#blog" class="btn primary">Back to Blog</a>
      </div>
    `;
    document.title = 'Post Not Found | Tanvir Ahmed';
    return;
  }

  // Update page title
  document.title = `${post.title} | Tanvir Ahmed`;

  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = post.excerpt;

  // Update header
  document.getElementById('post-category').textContent = post.category;
  document.getElementById('post-category').style.background = `linear-gradient(135deg, ${post.color}, ${post.color}aa)`;
  document.getElementById('post-date').innerHTML = `<i class="far fa-calendar-alt"></i> ${formatDate(post.date)}`;
  document.getElementById('post-title').textContent = post.title;
  document.getElementById('post-read-time').innerHTML = `<i class="far fa-clock"></i> ${post.readTime}`;

  // Update content
  document.getElementById('post-content').innerHTML = post.content;

  // Update share links
  const pageUrl = encodeURIComponent(window.location.href);
  const pageTitle = encodeURIComponent(post.title);
  
  document.getElementById('share-twitter').href = 
    `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageUrl}`;
  document.getElementById('share-linkedin').href = 
    `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;

  // Copy link functionality
  document.getElementById('copy-link').addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      const btn = document.getElementById('copy-link');
      btn.innerHTML = '<i class="fas fa-check"></i>';
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-link"></i>';
      }, 2000);
    });
  });
}

// Theme handling
document.addEventListener('DOMContentLoaded', () => {
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

  let activeTheme = storedTheme || 'dark';
  applyTheme(activeTheme);

  if (themeCheckbox) {
    themeCheckbox.addEventListener('change', () => {
      activeTheme = themeCheckbox.checked ? 'light' : 'dark';
      applyTheme(activeTheme);
      localStorage.setItem('theme', activeTheme);
    });
  }

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      navToggle.classList.toggle('open');
    });
  }

  // Back to top button
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Render the post
  renderPost();
});
