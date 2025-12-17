// Animation performance configuration
export interface AnimationConfig {
  enabled: boolean;
  quality: 'high' | 'medium' | 'low';
  maxConcurrent: number;
  reducedMotion: boolean;
  lazyLoad: boolean;
  debugMode: boolean;
}

export const DEFAULT_CONFIG: AnimationConfig = {
  enabled: true,
  quality: 'high',
  maxConcurrent: 8,
  reducedMotion: false,
  lazyLoad: true,
  debugMode: process.env.NODE_ENV === 'development',
};

export const PERFORMANCE_CONFIGS = {
  high: {
    enabled: true,
    quality: 'high' as const,
    maxConcurrent: 12,
    reducedMotion: false,
    lazyLoad: true,
    debugMode: process.env.NODE_ENV === 'development',
  },
  medium: {
    enabled: true,
    quality: 'medium' as const,
    maxConcurrent: 8,
    reducedMotion: false,
    lazyLoad: true,
    debugMode: process.env.NODE_ENV === 'development',
  },
  low: {
    enabled: true,
    quality: 'low' as const,
    maxConcurrent: 4,
    reducedMotion: true,
    lazyLoad: true,
    debugMode: process.env.NODE_ENV === 'development',
  },
  disabled: {
    enabled: false,
    quality: 'low' as const,
    maxConcurrent: 0,
    reducedMotion: true,
    lazyLoad: false,
    debugMode: false,
  },
};

// Auto-detect optimal settings based on device capabilities
export const detectOptimalConfig = (): AnimationConfig => {
  if (typeof window === 'undefined') {
    return DEFAULT_CONFIG;
  }

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    return PERFORMANCE_CONFIGS.low;
  }

  // Check device capabilities
  const connection = (navigator as any).connection;
  const deviceMemory = (navigator as any).deviceMemory;
  const hardwareConcurrency = navigator.hardwareConcurrency;

  // Low-end device detection
  if (deviceMemory && deviceMemory < 4) {
    return PERFORMANCE_CONFIGS.low;
  }

  // Slow connection detection
  if (connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')) {
    return PERFORMANCE_CONFIGS.medium;
  }

  // Few CPU cores
  if (hardwareConcurrency && hardwareConcurrency < 4) {
    return PERFORMANCE_CONFIGS.medium;
  }

  // Check for touch device (mobile)
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    return PERFORMANCE_CONFIGS.medium;
  }

  return PERFORMANCE_CONFIGS.high;
};

// Performance budgets
export const PERFORMANCE_BUDGETS = {
  maxLoadTime: 3000, // 3 seconds
  targetFPS: 60,
  minFPS: 30,
  maxMemoryUsage: 50, // MB
  maxAnimationDuration: 1000, // 1 second
  maxConcurrentAnimations: 8,
};
