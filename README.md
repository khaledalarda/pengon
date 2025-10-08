# Pengon - Interactive Story Project

A clean, static interactive story project with GSAP animations and SASS styling.

## 🎯 **Project Overview**

- **Static Website**: Works without any server - just open `dist/index.html` in your browser
- **GSAP Animations**: Smooth parallax effects and scene transitions
- **SASS Styling**: Organized, maintainable CSS with variables and mixins
- **Clean Build**: Only essential files, no bloat

## 📁 **Project Structure**

```
pengon/
├── assets/                 # All images and assets
├── dist/                   # Production build (generated)
├── js/                     # JavaScript modules
│   ├── common.js          # GSAP setup & general animations
│   └── scene2.js          # Scene2 specific animations
├── sass/                   # SASS source files
│   ├── _variables.scss    # Colors and constants
│   ├── _mixins.scss       # Reusable mixins
│   ├── _base.scss         # Base styles
│   ├── _scene1.scss       # Scene1 styles
│   ├── _scene2.scss       # Scene2 styles
│   └── main.scss          # Main SASS file
├── scripts/
│   └── copy-assets.js     # Build script
├── index.html             # Main HTML file
└── package.json           # Dependencies and scripts
```

## 🚀 **Quick Start**

### Development
```bash
npm run dev
```
Watches SASS files and compiles them automatically.

### Production Build
```bash
npm run build
```
Creates optimized static build in `dist/` folder.

### Test Production Build
```bash
npm run serve
```
Serves the production build locally for testing.

## 📦 **Available Scripts**

- `npm run dev` - Watch SASS files for development
- `npm run build` - Build production static site
- `npm run serve` - Test production build locally

## 🎨 **Features**

### **Animations**
- Parallax scrolling effects
- Scene transitions with GSAP
- Truck motion path animation
- Layer-based animations

### **Styling**
- SASS with variables and mixins
- Responsive design
- Clean, organized CSS
- Optimized for performance

### **Build Process**
- SASS compilation with compression
- Asset copying and optimization
- Static file generation
- No server required

## 🌐 **Deployment**

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist/` folder:**
   - Upload to any static hosting (Netlify, Vercel, GitHub Pages)
   - Or simply open `dist/index.html` directly in browser

## 🛠 **Development**

### **Adding New Scenes**
1. Create new SASS file: `sass/_scene3.scss`
2. Import in `sass/main.scss`
3. Add JavaScript: `js/scene3.js`
4. Update HTML with new scene content

### **SASS Structure**
- **Variables**: Colors, z-indexes, transforms
- **Mixins**: Reusable code patterns
- **Base**: Common styles and resets
- **Scenes**: Scene-specific styles

## 📋 **Requirements**

- Node.js (for SASS compilation)
- Modern browser (for GSAP animations)

## 🎉 **Clean & Optimized**

This project has been cleaned up to include only:
- ✅ Essential files and dependencies
- ✅ Used styles and animations
- ✅ Optimized build process
- ✅ No unused code or bloat

**Ready for production deployment! 🚀**
