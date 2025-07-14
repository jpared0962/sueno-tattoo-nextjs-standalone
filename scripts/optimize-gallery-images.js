#!/usr/bin/env node

/**
 * Gallery Image Optimization Script
 * Optimizes gallery and portfolio images for better web performance
 * Maintains aspect ratio and visual quality while reducing file sizes
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const GALLERY_INPUT_DIR = path.join(__dirname, '../public/images/gallery');
const PORTFOLIO_INPUT_DIR = path.join(__dirname, '../public/images/portfolio');
const GALLERY_OUTPUT_DIR = path.join(__dirname, '../public/images/gallery-optimized');
const PORTFOLIO_OUTPUT_DIR = path.join(__dirname, '../public/images/portfolio-optimized');

// Create output directories if they don't exist
[GALLERY_OUTPUT_DIR, PORTFOLIO_OUTPUT_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

async function optimizeImage(inputPath, outputPath, targetWidth = 800) {
  try {
    const metadata = await sharp(inputPath).metadata();
    const originalWidth = metadata.width;
    const originalHeight = metadata.height;
    
    // Calculate new dimensions maintaining aspect ratio
    const aspectRatio = originalHeight / originalWidth;
    const newWidth = Math.min(targetWidth, originalWidth);
    const newHeight = Math.round(newWidth * aspectRatio);
    
    const info = await sharp(inputPath)
      .resize(newWidth, newHeight, { 
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({ 
        quality: 85,
        progressive: true,
        mozjpeg: true
      })
      .toFile(outputPath);

    console.log(`✓ Optimized: ${path.basename(inputPath)} (${Math.round(info.size / 1024)}KB) - ${newWidth}x${newHeight}`);
    return info;
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

async function optimizeDirectory(inputDir, outputDir, targetWidth = 800) {
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  function processDirectory(currentInputDir, currentOutputDir) {
    const items = fs.readdirSync(currentInputDir);
    
    for (const item of items) {
      const inputPath = path.join(currentInputDir, item);
      const stats = fs.statSync(inputPath);
      
      if (stats.isDirectory()) {
        // Process subdirectory recursively
        const subOutputDir = path.join(currentOutputDir, item);
        if (!fs.existsSync(subOutputDir)) {
          fs.mkdirSync(subOutputDir, { recursive: true });
        }
        processDirectory(inputPath, subOutputDir);
      } else if (/\.(jpg|jpeg|png)$/i.test(item)) {
        // Process image file
        const outputPath = path.join(currentOutputDir, item);
        
        // Get original size
        const originalStats = fs.statSync(inputPath);
        totalOriginalSize += originalStats.size;
        
        // Optimize image (this will be awaited in the main function)
        optimizeImage(inputPath, outputPath, targetWidth).then(info => {
          if (info) {
            totalOptimizedSize += info.size;
          }
        });
      }
    }
  }

  // Process the directory
  processDirectory(inputDir, outputDir);
  
  // Wait a bit for async operations to complete
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return { totalOriginalSize, totalOptimizedSize };
}

async function optimizeAllGalleryImages() {
  console.log('🎨 Starting gallery image optimization...\n');
  
  // Optimize gallery images
  console.log('📂 Optimizing gallery images...');
  const galleryResults = await optimizeDirectory(GALLERY_INPUT_DIR, GALLERY_OUTPUT_DIR, 800);
  
  // Optimize portfolio images
  console.log('\n📂 Optimizing portfolio images...');
  const portfolioResults = await optimizeDirectory(PORTFOLIO_INPUT_DIR, PORTFOLIO_OUTPUT_DIR, 800);
  
  // Combined results
  const totalOriginalSize = galleryResults.totalOriginalSize + portfolioResults.totalOriginalSize;
  const totalOptimizedSize = galleryResults.totalOptimizedSize + portfolioResults.totalOptimizedSize;
  
  // Show summary
  console.log('\n📊 Optimization Summary:');
  console.log(`📁 Original size: ${Math.round(totalOriginalSize / 1024 / 1024)}MB`);
  console.log(`📁 Optimized size: ${Math.round(totalOptimizedSize / 1024 / 1024)}MB`);
  console.log(`💾 Space saved: ${Math.round((totalOriginalSize - totalOptimizedSize) / 1024 / 1024)}MB`);
  console.log(`📉 Reduction: ${Math.round((1 - totalOptimizedSize / totalOriginalSize) * 100)}%`);
}

// Run optimization
optimizeAllGalleryImages().catch(console.error);