// Minimal Icon component for testing build issues
export function IconTest({ name, className }: { name: string; className?: string }) {
  // For now, just return a span with the icon name to test if the issue is with icons
  return <span className={`icon-placeholder ${className}`}>[{name}]</span>;
}