"use client";

import { useEffect, useState } from 'react';

interface LoadingStatesProps {
  isLoading: boolean;
  messages?: string[];
  className?: string;
  variant?: 'pulse' | 'dots' | 'spinner' | 'progress';
}

export default function LoadingStates({
  isLoading,
  messages = [
    "Analyzing your website...",
    "Checking performance metrics...",
    "Evaluating SEO factors...",
    "Generating recommendations..."
  ],
  className = '',
  variant = 'pulse'
}: LoadingStatesProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      setCurrentMessageIndex(0);
      setProgress(0);
      return;
    }

    // Cycle through messages
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);

    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        return prev + Math.random() * 15;
      });
    }, 300);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, [isLoading, messages.length]);

  if (!isLoading) return null;

  const renderLoadingIcon = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        );
      
      case 'spinner':
        return (
          <div className="w-8 h-8 border-3 border-blue-200 border-t-blue-500 rounded-full animate-spin" />
        );
      
      case 'progress':
        return (
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        );
      
      default: // pulse
        return (
          <div className="relative">
            <div className="w-12 h-12 bg-blue-500 rounded-full animate-pulse" />
            <div className="absolute inset-0 w-12 h-12 bg-blue-400 rounded-full animate-ping opacity-75" />
          </div>
        );
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      {/* Loading Icon */}
      <div className="mb-6">
        {renderLoadingIcon()}
      </div>
      
      {/* Loading Message */}
      <div className="text-center max-w-md">
        <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2 transition-all duration-500 ease-in-out">
          {messages[currentMessageIndex]}
        </p>
        
        {variant === 'progress' && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {Math.round(progress)}% complete
          </p>
        )}
      </div>
      
      {/* Floating particles for extra engagement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            style={{
              left: `${20 + i * 15}%`,
              animationName: 'float-particle',
              animationDuration: `${3 + i * 0.5}s`,
              animationIterationCount: 'infinite',
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
      
      <style jsx>{`
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(100px) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
          90% {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}
