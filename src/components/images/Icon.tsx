import Image from 'next/image';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  alt?: string;
  folder?: string;
  style?: React.CSSProperties;
}

/**
 * Icon component for consistent icon handling throughout the site
 * Uses icons from the shared icons directory by default, but can specify custom folder
 * Automatically appends .svg extension unless the name already includes an extension
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
  const fileName = hasExtension ? name : `${name}.svg`;
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
