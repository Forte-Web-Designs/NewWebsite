import Image from 'next/image';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  alt?: string;
  folder?: string;
  style?: React.CSSProperties;
}

// Map of common missing icons to existing alternatives
const iconFallbacks: Record<string, string> = {
  'trending-up': 'up',
  'target': 'cursor1',
  'file-text': 'services',
  'monitor': 'cursor',
  'arrow-down': 'down',
  'zap': 'flash',
  'repeat': 'rightarrow',
  'eye': 'search',
  'lock': 'warning',
  'phone': 'location',
  'design': 'code',
  'growth': 'up',
  'analytics': 'search',
  'speed': 'flash',
  'security': 'warning',
  'mobile': 'cursor',
  'smartphone': 'cursor',
  'heart': 'star',
  'map-pin': 'gps',
  'chart': 's1',
  'eye-off': 'cursor',
  'handshake': 'users',
  'share': 'rightarrow',
  'info': 'warning',
  'clock': 'calendar',
  'shield': 'warning',
  'book': 'education',
  'dollar-sign': 'dollar',
};

/**
 * Icon component for consistent icon handling throughout the site
 * Uses icons from the shared icons directory by default, but can specify custom folder
 * Automatically appends .svg extension unless the name already includes an extension
 * Provides fallback icons for missing ones to prevent build failures
 */
export function Icon({
  name,
  size = 24,
  className = '',
  style = {},
  alt = '',
  folder = 'shared/icons',
}: IconProps) {
  // Check if name already has an extension
  const hasExtension = name.includes('.');
  
  // Use fallback icon if the original is known to be missing
  const iconName = iconFallbacks[name] || name;
  const fileName = hasExtension ? iconName : `${iconName}.svg`;
  const imagePath = `/images/${folder}/${fileName}`;

  return (
    <Image
      src={imagePath}
      alt={alt || `${name} icon`}
      width={size}
      height={size}
      className={`${className}`}
      style={{ ...style, color: 'inherit' }}
    />
  );
}
