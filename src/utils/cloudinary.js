import { Cloudinary } from 'cloudinary-core';

// Configure Cloudinary instance using environment variables
export const cloudinary = new Cloudinary({
  cloud_name: import.meta.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dv9x1lf3a',
  api_key: import.meta.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || '162274213316986',
  secure: true
});

// Helper to get optimized Cloudinary URL
export const getCloudinaryUrl = (publicId, options = {}) => {
  // Default transformations for images
  const defaultOptions = {
    quality: import.meta.env.NEXT_PUBLIC_CLOUDINARY_DEFAULT_QUALITY || 'auto:good',
    crop: 'scale'
  };
  
  // Don't add auto-format to avoid .auto extension issues
  // The portfolio service already provides optimized URLs from cloudinary mapping
  
  // Merge default options with any passed options
  const mergedOptions = { ...defaultOptions, ...options };
  
  return cloudinary.url(publicId, mergedOptions);
};

// Helper to format local paths to Cloudinary public IDs
export const formatPublicId = (localPath) => {
  if (!localPath) return '';
  
  // Remove leading slash if present
  const cleanPath = localPath.startsWith('/') 
    ? localPath.substring(1) 
    : localPath;
  
  // Remove file extension as Cloudinary handles this separately
  const pathWithoutExtension = cleanPath.replace(/\.[^/.]+$/, '');
  
  // Replace hyphens with spaces for better URL compatibility
  // Note: We don't need to do this as our Cloudinary public IDs match our file structure
  
  return pathWithoutExtension;
};

// Helper function to get correct public ID from the mapping if available
export const getPublicIdFromMap = (localPath, mappingData) => {
  if (!mappingData || !localPath) return localPath;
  
  // Look up the correct public ID in our mapping
  const entry = mappingData[localPath];
  return entry ? entry.publicId : localPath;
};
