#!/usr/bin/env node

/**
 * Optimize missing images from subdirectories
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const GALLERY_INPUT_DIR = path.join(__dirname, '../public/images/gallery');
const GALLERY_OUTPUT_DIR = path.join(__dirname, '../public/images/gallery-optimized');

// Missing images that need to be optimized
const missingImages = [
  'DSC04002.jpg',
  'DSC04447.jpg', 
  'DSC04495.jpg',
  'DSC04593.jpg',
  'DSC04602.jpg',
  'DSC04746.jpg'
];

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

async function findAndOptimizeImages() {
  console.log('🔍 Finding and optimizing missing images...\n');
  
  for (const imageName of missingImages) {
    // Find the image in subdirectories
    const realismPath = path.join(GALLERY_INPUT_DIR, 'Realism', imageName);
    const traditionalPath = path.join(GALLERY_INPUT_DIR, 'American Tradition', imageName);
    
    let inputPath = null;
    
    if (fs.existsSync(realismPath)) {
      inputPath = realismPath;
    } else if (fs.existsSync(traditionalPath)) {
      inputPath = traditionalPath;
    }
    
    if (inputPath) {
      const outputPath = path.join(GALLERY_OUTPUT_DIR, imageName);
      await optimizeImage(inputPath, outputPath);
    } else {
      console.log(`⚠️  Could not find ${imageName} in subdirectories`);
    }
  }
  
  console.log('\n✅ Missing images optimization complete!');
}

// Run optimization
findAndOptimizeImages().catch(console.error);