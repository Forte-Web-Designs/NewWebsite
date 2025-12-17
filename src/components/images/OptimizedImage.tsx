import Image from 'next/image';
import { CSSProperties } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  className?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  sizes?: string;
  style?: CSSProperties;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

/**
 * Convert image path to WebP with fallback to original format
 */
function getOptimizedImageSrc(src: string): string {
  // Check if it's a slider image that we've optimized
  if (src.includes('/images/home/slider') && src.endsWith('.png')) {
    return src.replace('.png', '.webp');
  }
  
  // Also check for contact form background
  if (src.includes('contact-form-bg.png')) {
    return src.replace('.png', '.webp');
  }
  
  return src;
}

/**
 * OptimizedImage component for consistent image handling throughout the site
 * Uses Next.js Image component with predefined optimization settings
 * Automatically serves WebP versions for supported slider images
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  quality = 85,
  className = '',
  objectFit = 'cover',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  style,
  loading = 'lazy',
  placeholder = 'empty',
  blurDataURL,
  ...props
}: OptimizedImageProps) {
  const optimizedSrc = getOptimizedImageSrc(src);
  
  // For fill mode, we need a container with relative positioning
  if (fill) {
    return (
      <div className={`relative ${className}`} style={style}>
        <Image
          src={optimizedSrc}
          alt={alt}
          fill={fill}
          priority={priority}
          quality={quality}
          sizes={sizes}
          loading={priority ? 'eager' : loading}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          className={`object-${objectFit}`}
          {...props}
        />
      </div>
    );
  }

  // For explicit width/height mode
  return (
    <Image
      src={optimizedSrc}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      quality={quality}
      sizes={sizes}
      loading={priority ? 'eager' : loading}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      className={className}
      style={{ 
        objectFit, 
        // Ensure proper aspect ratio to prevent layout shift
        aspectRatio: width && height ? `${width}/${height}` : undefined,
        ...style 
      }}
      {...props}
    />
  );
}
