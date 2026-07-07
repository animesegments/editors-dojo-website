import { SITE } from '../data/site';

const CLOUDINARY_UPLOAD_SEGMENT = '/upload/';

interface ProtectedImageOptions {
  width?: number;
  maxWidth?: number;
  quality?: string;
}

/** Resize and optimize remote images so full-resolution originals are not exposed. */
export function protectedImageUrl(src: string, options: ProtectedImageOptions = {}) {
  const { width, maxWidth = 640, quality = 'auto:good' } = options;

  if (!src.includes('res.cloudinary.com') || !src.includes(CLOUDINARY_UPLOAD_SEGMENT)) {
    return src;
  }

  const targetWidth = width ? Math.min(Math.round(width), maxWidth) : maxWidth;
  const transforms = ['f_auto', `q_${quality}`, `w_${targetWidth}`, 'c_limit'];

  return src.replace(CLOUDINARY_UPLOAD_SEGMENT, `${CLOUDINARY_UPLOAD_SEGMENT}${transforms.join(',')}/`);
}

export function logoUrl(displayWidth: number) {
  return protectedImageUrl(SITE.logo, {
    width: displayWidth * 2,
    maxWidth: 560,
  });
}

export function faviconUrl() {
  return protectedImageUrl(SITE.favicon, {
    maxWidth: 96,
  });
}

export function socialLogoUrl() {
  return protectedImageUrl(SITE.logo, {
    maxWidth: 800,
    quality: 'auto:eco',
  });
}