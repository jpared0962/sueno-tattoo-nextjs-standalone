import { getCloudinaryUrl } from '@/utils/cloudinary';
import cloudinaryMap from '../../cloudinary-map.json';

/**
 * Service to handle portfolio image fetching and management
 */

// Map local portfolio image paths to Cloudinary URLs
export const getPortfolioImageUrl = (imagePath, options = {}) => {
  if (!imagePath) return null;
  
  
  // Try to find exact match in cloudinary mapping
  let cloudinaryEntry = null;
  
  // Check multiple possible formats in the mapping (prioritized by likelihood)
  const possibleKeys = [
    // PRIORITY 1: Most common format in mapping - space + extension
    imagePath.replace('public/Tattoo-Images/', 'public/Tattoo Images/') + '.JPG',
    imagePath.replace('public/Tattoo-Images/', 'public/Tattoo Images/') + '.jpg',
    
    // PRIORITY 2: Exact path as provided
    imagePath,
    
    // PRIORITY 3: With extensions added
    `${imagePath}.jpg`,
    `${imagePath}.JPG`,
    
    // PRIORITY 4: Convert between hyphen and space formats
    imagePath.replace('public/Tattoo-Images/', 'public/Tattoo Images/'),
    imagePath.replace('public/Tattoo Images/', 'public/Tattoo-Images/'),
    imagePath.replace('public/Tattoo Images/', 'public/Tattoo-Images/') + '.JPG',
    imagePath.replace('public/Tattoo Images/', 'public/Tattoo-Images/') + '.jpg',
    
    // PRIORITY 5: Handle special filename patterns (IMG_2121-2 -> IMG_2121 2.jpg)
    imagePath.replace('public/Tattoo-Images/', 'public/Tattoo Images/').replace(/-(\d)$/, ' $1') + '.jpg',
    imagePath.replace('public/Tattoo-Images/', 'public/Tattoo Images/').replace(/-(\d)$/, ' $1') + '.JPG',
    
    // PRIORITY 6: Case variations
    imagePath.replace('public/Tattoo-Images/', 'public/tattoo-images/') + '.jpg',
    imagePath.replace('public/Tattoo-Images/', 'public/tattoo-images/') + '.JPG'
  ];
  
  for (const key of possibleKeys) {
    if (cloudinaryMap[key]) {
      cloudinaryEntry = cloudinaryMap[key];
      console.log(`✅ Found Cloudinary mapping: ${imagePath} -> ${key} -> ${cloudinaryEntry.url}`);
      break;
    }
  }
  
  if (!cloudinaryEntry) {
    console.warn(`❌ No Cloudinary mapping found for: ${imagePath}`);
    console.warn(`Tried keys:`, possibleKeys.slice(0, 5)); // Show first 5 attempts
  }
  
  if (cloudinaryEntry && cloudinaryEntry.url) {
    // FIXED: Apply transformations for optimization when options are provided
    if (Object.keys(options).length > 0) {
      const publicId = cloudinaryEntry.publicId;
      
      // Build transformation parameters manually for better control
      const transformParams = [];
      
      // Add dimensions if provided
      if (options.width) transformParams.push(`w_${options.width}`);
      if (options.height) transformParams.push(`h_${options.height}`);
      
      // Add crop mode
      if (options.crop) transformParams.push(`c_${options.crop}`);
      
      // Add quality setting
      const quality = options.quality || import.meta.env.VITE_CLOUDINARY_DEFAULT_QUALITY || 'auto:good';
      transformParams.push(`q_${quality}`);
      
      // Add format optimization
      transformParams.push('f_auto');
      
      // Add gravity for better cropping
      if (options.gravity) transformParams.push(`g_${options.gravity}`);
      
      // Construct optimized URL with proper version handling
      const baseUrl = cloudinaryEntry.url.split('/upload/')[0];
      const uploadPart = cloudinaryEntry.url.split('/upload/')[1];
      const uploadParts = uploadPart.split('/');
      
      // Extract version and public ID correctly
      const version = uploadParts[0]; // e.g., 'v1751047594'
      const publicIdPath = uploadParts.slice(1).join('/'); // e.g., 'public/Tattoo-Images/DSC04225.jpg'
      
      // Build URL with transformations, version, and public ID
      const transformedUrl = `${baseUrl}/upload/${transformParams.join(',')}/${version}/${publicIdPath}`;
      
      console.log(`🔄 Optimized URL: ${imagePath} -> ${transformedUrl} (${options.width}x${options.height})`);
      return transformedUrl;
    }
    
    // Return direct URL only if no transformations needed
    console.log(`🔄 Direct URL: ${imagePath} -> ${cloudinaryEntry.url}`);
    return cloudinaryEntry.url;
  }
  
  // Fallback: construct Cloudinary URL manually
  const publicId = imagePath.replace('public/', '');
  
  // Generate optimized Cloudinary URL
  const cloudinaryUrl = getCloudinaryUrl(publicId, {
    quality: import.meta.env.VITE_CLOUDINARY_DEFAULT_QUALITY || 'auto:good',
    crop: 'scale',
    width: options.width || 800,
    height: options.height || (options.width ? undefined : 600),
    ...options
  });
  
  return cloudinaryUrl;
};

// Get thumbnail version of image with responsive sizing
export const getPortfolioThumbnail = (imagePath, size = 'medium') => {
  const sizes = {
    small: { width: 300, height: 225 },   // Mobile
    medium: { width: 400, height: 300 },  // Tablet  
    large: { width: 500, height: 375 }    // Desktop
  };
  
  const dimensions = sizes[size] || sizes.medium;
  
  return getPortfolioImageUrl(imagePath, {
    width: dimensions.width,
    height: dimensions.height,
    quality: 'auto:good',
    crop: 'fill',
    gravity: 'center'
  });
};

// Generate responsive image srcset for modern browsers
export const getResponsiveImageSrcSet = (imagePath, options = {}) => {
  if (!imagePath) return null;
  
  const baseOptions = {
    quality: 'auto:good',
    crop: 'fill',
    gravity: 'center',
    ...options
  };
  
  // Standard breakpoints for responsive images
  const breakpoints = [
    { width: 300, descriptor: '300w' },   // Mobile
    { width: 400, descriptor: '400w' },   // Small tablet
    { width: 600, descriptor: '600w' },   // Tablet
    { width: 800, descriptor: '800w' },   // Desktop
    { width: 1200, descriptor: '1200w' }, // Large desktop
    { width: 1600, descriptor: '1600w' }  // High-res displays
  ];
  
  return breakpoints
    .map(bp => {
      const url = getPortfolioImageUrl(imagePath, {
        ...baseOptions,
        width: bp.width,
        height: Math.round(bp.width * 0.75) // 4:3 aspect ratio
      });
      return `${url} ${bp.descriptor}`;
    })
    .join(', ');
};

// Generate WebP/AVIF srcset for modern browsers
export const getModernImageSrcSet = (imagePath, format = 'webp', options = {}) => {
  if (!imagePath) return null;
  
  const baseOptions = {
    quality: 'auto:good',
    crop: 'fill',
    gravity: 'center',
    format: format, // 'webp' or 'avif'
    ...options
  };
  
  const breakpoints = [
    { width: 300, descriptor: '300w' },
    { width: 400, descriptor: '400w' },
    { width: 600, descriptor: '600w' },
    { width: 800, descriptor: '800w' },
    { width: 1200, descriptor: '1200w' },
    { width: 1600, descriptor: '1600w' }
  ];
  
  return breakpoints
    .map(bp => {
      const url = getPortfolioImageUrl(imagePath, {
        ...baseOptions,
        width: bp.width,
        height: Math.round(bp.width * 0.75)
      });
      return `${url} ${bp.descriptor}`;
    })
    .join(', ');
};

// Generate complete picture element data
export const getResponsivePictureData = (imagePath, options = {}) => {
  if (!imagePath) return null;
  
  const baseOptions = {
    quality: 'auto:good',
    crop: 'fill',
    gravity: 'center',
    ...options
  };
  
  return {
    // Modern formats (best compression)
    avif: getModernImageSrcSet(imagePath, 'avif', baseOptions),
    webp: getModernImageSrcSet(imagePath, 'webp', baseOptions),
    
    // Fallback JPEG
    jpeg: getResponsiveImageSrcSet(imagePath, { ...baseOptions, format: 'jpg' }),
    
    // Default src for older browsers
    src: getPortfolioImageUrl(imagePath, {
      ...baseOptions,
      width: 800,
      height: 600,
      format: 'jpg'
    }),
    
    // Sizes attribute for responsive images
    sizes: options.sizes || '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
  };
};

// Get high-quality version for lightbox
export const getPortfolioFullSize = (imagePath) => {
  return getPortfolioImageUrl(imagePath, {
    width: 1200,
    quality: 'auto:best',
    crop: 'scale'
  });
};

// Preload critical images
export const preloadPortfolioImages = (imageList) => {
  const preloadPromises = imageList.map(imagePath => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(imagePath);
      img.onerror = () => reject(imagePath);
      img.src = getPortfolioThumbnail(imagePath);
    });
  });
  
  return Promise.allSettled(preloadPromises);
};

// Get available portfolio images from Cloudinary mapping
export const getAvailablePortfolioImages = () => {
  const tattooImages = Object.keys(cloudinaryMap)
    .filter(key => key.includes('Tattoo-Images') || key.includes('Tattoo Images'))
    .map(key => {
      const entry = cloudinaryMap[key];
      return {
        localPath: key,
        publicId: entry.publicId,
        url: entry.url,
        thumbnail: getPortfolioThumbnail(entry.publicId),
        fullSize: getPortfolioFullSize(entry.publicId)
      };
    });
  
  return tattooImages;
};

// Check if image exists in Cloudinary
export const checkImageExists = async (imagePath) => {
  try {
    const imageUrl = getPortfolioImageUrl(imagePath);
    if (!imageUrl) return false;
    
    const response = await fetch(imageUrl, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.warn(`Image check failed for ${imagePath}:`, error);
    return false;
  }
};

export default {
  getPortfolioImageUrl,
  getPortfolioThumbnail, 
  getPortfolioFullSize,
  getResponsiveImageSrcSet,
  getModernImageSrcSet,
  getResponsivePictureData,
  preloadPortfolioImages,
  getAvailablePortfolioImages,
  checkImageExists
};