#!/usr/bin/env node

/**
 * Image Optimization Script for Flash Gallery
 * Compresses and optimizes images for better web performance
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, '../public/images/drawings');
const OUTPUT_DIR = path.join(__dirname, '../public/images/drawings-optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function optimizeImage(inputPath, outputPath) {
  try {
    const info = await sharp(inputPath)
      .resize(400, 400, { 
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ 
        quality: 80,
        progressive: true,
        mozjpeg: true
      })
      .toFile(outputPath);

    console.log(`✓ Optimized: ${path.basename(inputPath)} (${Math.round(info.size / 1024)}KB)`);
    return info;
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

async function optimizeAllImages() {
  console.log('🎨 Starting image optimization...\n');
  
  const files = fs.readdirSync(INPUT_DIR)
    .filter(file => /\.(jpg|jpeg|png)$/i.test(file));

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    const outputPath = path.join(OUTPUT_DIR, file);
    
    // Get original size
    const originalStats = fs.statSync(inputPath);
    totalOriginalSize += originalStats.size;
    
    // Optimize image
    const info = await optimizeImage(inputPath, outputPath);
    
    if (info) {
      totalOptimizedSize += info.size;
    }
  }

  // Show summary
  console.log('\n📊 Optimization Summary:');
  console.log(`📁 Original size: ${Math.round(totalOriginalSize / 1024 / 1024)}MB`);
  console.log(`📁 Optimized size: ${Math.round(totalOptimizedSize / 1024 / 1024)}MB`);
  console.log(`💾 Space saved: ${Math.round((totalOriginalSize - totalOptimizedSize) / 1024 / 1024)}MB`);
  console.log(`📉 Reduction: ${Math.round((1 - totalOptimizedSize / totalOriginalSize) * 100)}%`);
}

// Run optimization
optimizeAllImages().catch(console.error);