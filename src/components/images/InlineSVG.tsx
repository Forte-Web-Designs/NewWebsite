interface InlineSVGProps {
  name: 'check' | 'x';
  className?: string;
  size?: number;
}

/**
 * Inline SVG component for icons that need to support currentColor styling
 * Used for simple icons where we need theme-aware coloring
 */
export function InlineSVG({ name, className = '', size = 24 }: InlineSVGProps) {
  const svgContent = {
    check: (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
        <path d="M9,16.17 L4.83,12 L3.41,13.41 L9,19 L21,7 L19.59,5.59 L9,16.17 Z" fill="currentColor" />
      </svg>
    ),
    x: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  };

  return svgContent[name];
}
