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
}

/**
 * OptimizedImage component for consistent image handling throughout the site
 * Uses Next.js Image component with predefined optimization settings
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
  ...props
}: OptimizedImageProps) {
  // For fill mode, we need a container with relative positioning
  if (fill) {
    return (
      <div className={`relative ${className}`} style={style}>
        <Image
          src={src}
          alt={alt}
          fill={fill}
          priority={priority}
          quality={quality}
          sizes={sizes}
          className={`object-${objectFit}`}
          {...props}
        />
      </div>
    );
  }

  // For explicit width/height mode
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      quality={quality}
      sizes={sizes}
      className={className}
      style={{ objectFit, ...style }}
      {...props}
    />
  );
}
