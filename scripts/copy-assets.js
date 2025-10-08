#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Create dist directory
const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy HTML file
const htmlSource = path.join(__dirname, '..', 'index.html');
const htmlDest = path.join(distDir, 'index.html');
fs.copyFileSync(htmlSource, htmlDest);
console.log('✅ Copied index.html');

// Copy assets directory
const assetsSource = path.join(__dirname, '..', 'assets');
const assetsDest = path.join(distDir, 'assets');

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyDir(assetsSource, assetsDest);
console.log('✅ Copied assets directory');

// Copy JS directory
const jsSource = path.join(__dirname, '..', 'js');
const jsDest = path.join(distDir, 'js');
copyDir(jsSource, jsDest);
console.log('✅ Copied js directory');

// Copy styles directory (compiled CSS)
const stylesSource = path.join(__dirname, '..', 'styles');
const stylesDest = path.join(distDir, 'styles');
copyDir(stylesSource, stylesDest);
console.log('✅ Copied styles directory');

console.log('\n🎉 Static build complete!');
console.log(`📁 Output directory: ${distDir}`);
console.log('🌐 You can now open dist/index.html directly in your browser!');
