# Quick Customization Guide

## 🎨 Color Customization

### Change Accent Color
In `assets/styles.css`, modify these variables:

```css
:root {
  --accent: #00d4aa;  /* Change to your preferred color */
  --gradient-2: linear-gradient(135deg, #00d4aa 0%, #4ecdc4 100%);
}
```

### Popular Color Schemes
```css
/* Vibrant Purple */
--accent: #8B5CF6;
--gradient-2: linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%);

/* Electric Blue */
--accent: #3B82F6;
--gradient-2: linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%);

/* Sunset Orange */
--accent: #F59E0B;
--gradient-2: linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%);

/* Modern Pink */
--accent: #EC4899;
--gradient-2: linear-gradient(135deg, #EC4899 0%, #F472B6 100%);
```

---

## ✨ Animation Speed Adjustments

### Slow Down Animations
In `assets/styles.css`:

```css
/* Find and change transition durations */
.section {
  transition: opacity 1s ease, transform 1s ease;  /* Increased from 0.6s */
}

.ripple {
  animation: ripple-animation 1s ease-out;  /* Increased from 0.6s */
}
```

### Speed Up Animations
```css
.section {
  transition: opacity 0.3s ease, transform 0.3s ease;  /* Decreased */
}
```

---

## 🎯 Particle Adjustments

### More Particles
In `assets/script.js`, find `initParticles()`:

```javascript
for (let i = 0; i < 50; i++) {  // Increased from 30
  // ...
}
```

### Fewer Particles (Better Performance)
```javascript
for (let i = 0; i < 15; i++) {  // Decreased from 30
  // ...
}
```

### Larger Particles
In `assets/styles.css`:

```css
.particle {
  width: 6px;   /* Increased from 4px */
  height: 6px;
}
```

---

## 🖱️ Cursor Customization

### Change Cursor Size
In `assets/styles.css`:

```css
.custom-cursor {
  width: 60px;   /* Increased from 40px */
  height: 60px;
}

.custom-cursor-dot {
  width: 12px;   /* Increased from 8px */
  height: 12px;
}
```

### Disable Custom Cursor
In `assets/script.js`, comment out:

```javascript
// initCursorTrail();
```

---

## 🎴 Card Effects

### Increase 3D Tilt Effect
In `assets/script.js`, find `init3DTilt()`:

```javascript
const rotateX = (y - centerY) / 5;  // Changed from 10 (more dramatic)
const rotateY = (centerX - x) / 5;
```

### Disable 3D Tilt
```javascript
// init3DTilt();
```

---

## 📱 Mobile-Specific Adjustments

### Enable Particles on Mobile
In `assets/styles.css`, remove or comment out:

```css
@media (max-width: 768px) {
  /* .particles-container {
    display: none;
  } */
}
```

### Adjust Mobile Breakpoint
```css
/* Change from 768px to your preferred breakpoint */
@media (max-width: 992px) {
  /* Mobile styles */
}
```

---

## 🔄 Loading Screen

### Change Loading Duration
In `assets/script.js`:

```javascript
setTimeout(() => {
  loadingScreen.classList.add('fade-out');
  setTimeout(() => loadingScreen.remove(), 500);
}, 2000);  // Increased from 1200ms
```

### Disable Loading Screen
```javascript
// Comment out the entire loading screen code block
```

---

## 🎭 Theme Switching

### Set Default Theme to Light
In `assets/script.js`:

```javascript
let activeTheme = storedTheme || 'light';  // Changed from 'dark'
```

### Lock to One Theme (Remove Toggle)
In `assets/styles.css`, hide the toggle:

```css
.theme-switch-wrapper {
  display: none;
}
```

And set your preferred theme as default in the JavaScript.

---

## 📊 Skill Progress Bars

### Set Specific Skill Levels
In `assets/script.js`, find `initSkillProgress()`:

```javascript
// Instead of random:
const progress = 70 + Math.random() * 30;

// Use specific values:
const skillLevels = {
  'Python': 95,
  'JavaScript': 90,
  'React': 85,
  // ... add more
};
const progress = skillLevels[skill.name] || 75;  // Default to 75
```

---

## 🌈 Additional Gradient Options

### Add More Gradients
In `assets/styles.css`:

```css
:root {
  --gradient-4: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-5: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --gradient-6: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}
```

---

## 🎵 Add Sound Effects (Optional)

### On Button Click
In `assets/script.js`:

```javascript
const playSound = (soundFile) => {
  const audio = new Audio(soundFile);
  audio.volume = 0.3;
  audio.play().catch(e => console.log('Audio playback failed'));
};

// In your ripple effect:
element.addEventListener('click', (e) => {
  createRipple(e, element);
  playSound('assets/click.mp3');  // Add your sound file
});
```

---

## 🚀 Performance Tips

### Reduce Animations on Low-End Devices
```javascript
// Check device capabilities
const isLowEndDevice = navigator.hardwareConcurrency < 4;

if (!isLowEndDevice) {
  initParticles();
  init3DTilt();
  // ... other heavy features
}
```

### Disable All Fancy Effects
Comment out in the initialization:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  // initScrollReveal();
  // initMagneticButtons();
  // initRippleEffect();
  // init3DTilt();
  // initParallax();
  // initCursorTrail();
  // initParticles();
  // initSkillProgress();
  // initTextAnimation();
});
```

---

## 💡 Pro Tips

1. **Test on different devices** - Use Chrome DevTools device emulation
2. **Check performance** - Use Lighthouse in Chrome DevTools
3. **Validate accessibility** - Use axe DevTools extension
4. **Optimize images** - Compress any images you add
5. **Keep it minimal** - Less is more, don't overdo animations

---

## 🐛 Troubleshooting

### Animations Not Working?
1. Check browser console for errors (F12)
2. Ensure JavaScript is enabled
3. Try a different browser
4. Clear cache and reload (Ctrl+Shift+R)

### Cursor Not Showing?
- Custom cursor only works on desktop (>768px width)
- Check if you're in mobile view

### Theme Toggle Not Working?
- Check browser localStorage is enabled
- Inspect the checkbox element
- Look for JavaScript errors in console

---

Ready to make it yours! 🎨✨
