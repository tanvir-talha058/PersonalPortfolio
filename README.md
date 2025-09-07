# 🚀 Personal Portfolio - Tanvir Ahmed

A modern, responsive portfolio website showcasing my skills as a Full-Stack Developer and AI Enthusiast. Built with clean HTML5, CSS3, and vanilla JavaScript for optimal performance and compatibility.

## ✨ Live Demo

[View Portfolio](https://tanvir-talha058.github.io/PersonalPortfolio/) 

## 🎯 Overview

This is a single-page, static portfolio designed with a vibrant, interactive theme featuring glassmorphism effects, smooth animations, and a professional layout. The site effectively showcases my projects, skills, and professional journey without requiring any build tools or complex dependencies.

## 🌟 Features

### **Core Sections**
- 🏠 **Hero Section**: Dynamic typing animation with role rotation and call-to-action buttons
- 👨‍💻 **About**: Detailed personal story and professional background
- 🛠️ **Skills**: Interactive grid with 32 core technologies and smooth animations
- 📁 **Projects**: Featured project showcase with working GitHub and demo links
- 📄 **Resume**: Direct PDF download and view options
- 📧 **Contact**: Functional contact form with email integration

### **Interactive Features**
- ✨ **Smooth Animations**: Fade-up effects triggered on scroll
- 🎨 **Vibrant Color Scheme**: Teal, coral, and space blue gradient themes
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- 🔗 **Working Links**: All project and social media links are functional
- 💡 **Glassmorphism Design**: Modern backdrop blur effects and transparency
- ⚡ **Fast Loading**: Optimized assets and minimal dependencies

### **Technical Highlights**
- 🎯 **No Build Process**: Pure HTML/CSS/JS for maximum compatibility
- ♿ **Accessible**: Proper semantic markup and keyboard navigation
- 🔍 **SEO Optimized**: Meta tags and proper content structure
- 🎪 **Interactive Elements**: Hover effects, click animations, and smooth transitions

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: CSS Grid, Flexbox, CSS Variables, Animations
- **Icons**: Font Awesome 6.0
- **Fonts**: Inter & Space Grotesk from Google Fonts
- **Hosting**: GitHub Pages compatible

## 📁 Project Structure

```
PersonalPortfolio/
├── index.html              # Main HTML file
├── assets/
│   ├── styles.css          # All CSS styles and responsive design
│   ├── script.js           # Interactive behaviors and data
│   └── profile.png         # Profile image and favicon
├── Tanvir_Resume.pdf       # Resume PDF file
└── README.md              # Project documentation
```

## 🚀 Quick Start

### **Option 1: Python Server (Recommended)**
```bash
# Clone the repository
git clone https://github.com/tanvir-talha058/PersonalPortfolio.git
cd PersonalPortfolio

# Start local server
python -m http.server 8000

# Open in browser
# Navigate to http://localhost:8000
```

### **Option 2: Node.js Server**
```bash
# Using npx serve
npx serve -s . -l 8000

# Or using live-server
npx live-server --port=8000
```

### **Option 3: Direct File**
Simply open `index.html` in your browser (some features may be limited without a server).

## 🎨 Customization Guide

### **Update Personal Information**
1. **Edit Contact Details**: Update email, social links in `index.html`
2. **Replace Resume**: Replace `Tanvir_Resume.pdf` with your own
3. **Update About Section**: Modify the about content in `index.html`

### **Modify Skills & Projects**
Edit the arrays at the top of `assets/script.js`:

```javascript
// Update skills array
const skills = [
  'JavaScript', 'Python', 'React', // Add your skills
];

// Update projects array
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    tech: ['Tech1', 'Tech2'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://project-demo.com',
    tag: 'Web/Mobile',
    featured: true
  }
];
```

### **Color Scheme Customization**
Modify CSS variables in `assets/styles.css`:

```css
:root {
  --accent: #00d4aa;        /* Primary accent color */
  --accent-2: #ff6b6b;      /* Secondary accent */
  --bg: #0a0e27;           /* Background color */
  --text: #e6e6e6;         /* Text color */
}
```

## 🌐 Deployment

### **GitHub Pages**
1. Push your code to GitHub
2. Go to Repository Settings → Pages
3. Select source: Deploy from branch `main`
4. Your site will be available at `https://yourusername.github.io/PersonalPortfolio/`

### **Netlify**
1. Drag and drop the project folder to [Netlify](https://app.netlify.com/)
2. Or connect your GitHub repository for continuous deployment

### **Vercel**
1. Import your GitHub repository to [Vercel](https://vercel.com/)
2. Deploy with zero configuration

## 📊 Performance Features

- ⚡ **Optimized Loading**: Minimal CSS and JavaScript
- 🖼️ **Efficient Assets**: Compressed images and icons
- 📱 **Mobile-First**: Responsive design with mobile optimization
- 🎯 **Core Web Vitals**: Fast loading and smooth interactions

## 🔧 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 📞 Contact & Connect

- 📧 **Email**: [tanvirahmed123000@gmail.com](mailto:tanvirahmed123000@gmail.com)
- 💼 **LinkedIn**: [tanvir-talha058](https://www.linkedin.com/in/tanvir-talha058)
- 🐱 **GitHub**: [tanvir-talha058](https://github.com/tanvir-talha058)

## 📝 License

MIT License - feel free to use this code for your own portfolio!

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- CSS-Tricks and MDN for inspiration

---

**Built with ❤️ by Tanvir Ahmed** | Last updated: September 2025
