const ALLOWED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg', 
  'image/png',
  'image/webp'
];

const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const MIN_FILE_SIZE = 1024; // 1KB

export const validateFile = (file) => {
  const errors = [];

  if (!file) {
    errors.push('No file provided');
    return { isValid: false, errors };
  }

  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    errors.push(`File size exceeds maximum limit of ${MAX_FILE_SIZE / (1024 * 1024)}MB`);
  }

  if (file.size < MIN_FILE_SIZE) {
    errors.push(`File size is too small (minimum ${MIN_FILE_SIZE} bytes)`);
  }

  // Check file type
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    errors.push(`Invalid file type. Allowed types: ${ALLOWED_IMAGE_TYPES.join(', ')}`);
  }

  // Check file extension
  const fileName = file.name.toLowerCase();
  const hasValidExtension = ALLOWED_EXTENSIONS.some(ext => fileName.endsWith(ext));
  
  if (!hasValidExtension) {
    errors.push(`Invalid file extension. Allowed extensions: ${ALLOWED_EXTENSIONS.join(', ')}`);
  }

  // Additional security checks
  if (file.name.includes('..') || file.name.includes('/') || file.name.includes('\\')) {
    errors.push('Invalid file name contains path traversal characters');
  }

  // Check for suspicious file names
  const suspiciousPatterns = [
    /\.php$/i,
    /\.asp$/i,
    /\.jsp$/i,
    /\.js$/i,
    /\.html$/i,
    /\.htm$/i,
    /script/i,
    /exec/i
  ];

  if (suspiciousPatterns.some(pattern => pattern.test(file.name))) {
    errors.push('File name contains suspicious patterns');
  }

  return {
    isValid: errors.length === 0,
    errors,
    file: errors.length === 0 ? file : null
  };
};

export const sanitizeFileName = (fileName) => {
  return fileName
    .replace(/[^a-zA-Z0-9.-]/g, '_')
    .replace(/_+/g, '_')
    .substring(0, 100)
    .toLowerCase();
};

export const validateImageDimensions = (file) => {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    
    img.onload = () => {
      URL.revokeObjectURL(url);
      
      const maxWidth = 4096;
      const maxHeight = 4096;
      const minWidth = 100;
      const minHeight = 100;
      
      const errors = [];
      
      if (img.width > maxWidth || img.height > maxHeight) {
        errors.push(`Image dimensions too large. Maximum: ${maxWidth}x${maxHeight}px`);
      }
      
      if (img.width < minWidth || img.height < minHeight) {
        errors.push(`Image dimensions too small. Minimum: ${minWidth}x${minHeight}px`);
      }
      
      resolve({
        isValid: errors.length === 0,
        errors,
        dimensions: { width: img.width, height: img.height }
      });
    };
    
    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve({
        isValid: false,
        errors: ['Invalid image file or corrupted data'],
        dimensions: null
      });
    };
    
    img.src = url;
  });
};

export const scanFileForMalware = async (file) => {
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer.slice(0, 1024));
  
  const maliciousPatterns = [
    // PHP tags
    [0x3C, 0x3F, 0x70, 0x68, 0x70], // "<?php"
    // Script tags
    [0x3C, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74], // "<script"
    // Executable signatures
    [0x4D, 0x5A], // PE/MZ header
    [0x7F, 0x45, 0x4C, 0x46], // ELF header
  ];
  
  for (const pattern of maliciousPatterns) {
    for (let i = 0; i <= bytes.length - pattern.length; i++) {
      let match = true;
      for (let j = 0; j < pattern.length; j++) {
        if (bytes[i + j] !== pattern[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        return {
          isSafe: false,
          threat: 'Potentially malicious file content detected'
        };
      }
    }
  }
  
  return { isSafe: true, threat: null };
};

export const validateAndProcessFile = async (file) => {
  try {
    // Basic file validation
    const basicValidation = validateFile(file);
    if (!basicValidation.isValid) {
      return basicValidation;
    }

    // Image dimension validation
    const dimensionValidation = await validateImageDimensions(file);
    if (!dimensionValidation.isValid) {
      return {
        isValid: false,
        errors: dimensionValidation.errors
      };
    }

    // Malware scan
    const malwareScan = await scanFileForMalware(file);
    if (!malwareScan.isSafe) {
      return {
        isValid: false,
        errors: [malwareScan.threat]
      };
    }

    return {
      isValid: true,
      errors: [],
      file: file,
      dimensions: dimensionValidation.dimensions,
      sanitizedName: sanitizeFileName(file.name)
    };
  } catch (error) {
    return {
      isValid: false,
      errors: [`File validation error: ${error.message}`]
    };
  }
};