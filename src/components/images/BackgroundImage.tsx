import Image from 'next/image';
import { ReactNode } from 'react';

interface BackgroundImageProps {
  src: string;
  alt: string;
  children: ReactNode;
  className?: string;
  overlayClassName?: string;
  priority?: boolean;
  quality?: number;
}

/**
 * BackgroundImage component for hero sections and background elements
 * Includes an optional overlay for text readability
 */
export function BackgroundImage({
  src,
  alt,
  children,
  className = '',
  overlayClassName = 'bg-black/30',
  priority = true,
  quality = 85,
}: BackgroundImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={quality}
        sizes="100vw"
        className="object-cover z-0"
      />
      {/* Optional overlay for better text visibility */}
      <div className={`absolute inset-0 z-10 ${overlayClassName}`}></div>
      {/* Content positioned over the background */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
}
