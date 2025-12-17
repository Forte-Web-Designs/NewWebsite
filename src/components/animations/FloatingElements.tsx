"use client";

import { useEffect, useState } from 'react';

interface FloatingElement {
  id: string;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
}

interface FloatingElementsProps {
  count?: number;
  colors?: string[];
  className?: string;
}

export default function FloatingElements({ 
  count = 6, 
  colors = ['#203FFC', '#8D9DFF', '#5C73FF'], 
  className = '' 
}: FloatingElementsProps) {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Generate floating elements
    const newElements: FloatingElement[] = Array.from({ length: count }, (_, i) => ({
      id: `element-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 20, // 20-60px
      speed: Math.random() * 20 + 10, // 10-30s
      opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    
    setElements(newElements);
  }, [count, colors]);

  if (!mounted) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute rounded-full blur-sm animate-pulse"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            backgroundColor: element.color,
            opacity: element.opacity,
            animation: `float-${element.id} ${element.speed}s ease-in-out infinite`,
          }}
        />
      ))}
      
      <style jsx>{`
        ${elements.map(element => `
          @keyframes float-${element.id} {
            0%, 100% { 
              transform: translateY(0px) translateX(0px) scale(1);
              opacity: ${element.opacity};
            }
            25% { 
              transform: translateY(-${element.size * 0.3}px) translateX(${element.size * 0.2}px) scale(1.1);
              opacity: ${element.opacity * 0.7};
            }
            50% { 
              transform: translateY(-${element.size * 0.5}px) translateX(-${element.size * 0.1}px) scale(0.9);
              opacity: ${element.opacity * 1.3};
            }
            75% { 
              transform: translateY(-${element.size * 0.2}px) translateX(-${element.size * 0.3}px) scale(1.05);
              opacity: ${element.opacity * 0.8};
            }
          }
        `).join('')}
      `}</style>
    </div>
  );
}
