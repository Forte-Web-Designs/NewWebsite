"use client";

import { useEffect } from 'react';

/**
 * Critical CSS inliner that loads essential styles immediately
 * to prevent render blocking and layout shifts
 */
function CriticalCSS() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Check if critical CSS is already inlined
    if (document.getElementById('critical-inline-css')) return;

    // Critical CSS for above-the-fold content
    const criticalCSS = `
      /* Critical typography and layout styles */
      .font-display { font-family: var(--font-inter-display), system-ui, sans-serif; }
      .font-body { font-family: var(--font-inter), system-ui, sans-serif; }
      
      /* Critical grid and flexbox utilities */
      .grid { display: grid; }
      .flex { display: flex; }
      .hidden { display: none; }
      .block { display: block; }
      .relative { position: relative; }
      .absolute { position: absolute; }
      .fixed { position: fixed; }
      
      /* Critical spacing utilities - most used in hero section */
      .p-4 { padding: 1rem; }
      .p-6 { padding: 1.5rem; }
      .p-8 { padding: 2rem; }
      .px-4 { padding-left: 1rem; padding-right: 1rem; }
      .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
      .px-8 { padding-left: 2rem; padding-right: 2rem; }
      .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
      .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
      .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
      .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
      .pt-8 { padding-top: 2rem; }
      .pt-16 { padding-top: 4rem; }
      .pb-12 { padding-bottom: 3rem; }
      .pb-20 { padding-bottom: 5rem; }
      
      /* Critical margin utilities */
      .m-0 { margin: 0; }
      .mx-auto { margin-left: auto; margin-right: auto; }
      .mb-4 { margin-bottom: 1rem; }
      .mb-6 { margin-bottom: 1.5rem; }
      .mb-8 { margin-bottom: 2rem; }
      .mt-5 { margin-top: 1.25rem; }
      
      /* Critical width/height utilities */
      .w-full { width: 100%; }
      .h-full { height: 100%; }
      .h-auto { height: auto; }
      .max-w-lg { max-width: 32rem; }
      .max-w-4xl { max-width: 56rem; }
      .max-w-5xl { max-width: 64rem; }
      .max-w-7xl { max-width: 80rem; }
      
      /* Critical text utilities */
      .text-center { text-align: center; }
      .text-left { text-align: left; }
      .leading-tight { line-height: 1.25; }
      .leading-relaxed { line-height: 1.625; }
      .tracking-tight { letter-spacing: -0.025em; }
      .tracking-normal { letter-spacing: 0; }
      
      /* Critical color utilities */
      .text-black { color: #000; }
      .text-white { color: #fff; }
      .bg-white { background-color: #fff; }
      .bg-gray-50 { background-color: #f9fafb; }
      .bg-gray-900 { background-color: #111827; }
      
      /* Critical gradient utilities for hero */
      .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
      .bg-clip-text { background-clip: text; }
      .text-transparent { color: transparent; }
      
      /* Critical flexbox utilities */
      .items-center { align-items: center; }
      .justify-center { justify-content: center; }
      .justify-between { justify-content: space-between; }
      .justify-start { justify-content: flex-start; }
      .flex-col { flex-direction: column; }
      .gap-3 { gap: 0.75rem; }
      .gap-4 { gap: 1rem; }
      .gap-6 { gap: 1.5rem; }
      .gap-8 { gap: 2rem; }
      
      /* Critical container and responsive utilities */
      .container { 
        width: 100%; 
        margin-left: auto; 
        margin-right: auto; 
        padding-left: 1rem; 
        padding-right: 1rem; 
      }
      
      @media (min-width: 640px) {
        .container { padding-left: 1.5rem; padding-right: 1.5rem; }
        .sm\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .sm\\:py-16 { padding-top: 4rem; padding-bottom: 4rem; }
        .sm\\:text-4xl { font-size: 2.25rem; }
      }
      
      @media (min-width: 768px) {
        .md\\:pt-24 { padding-top: 6rem; }
        .md\\:pb-28 { padding-bottom: 7rem; }
        .md\\:text-5xl { font-size: 3rem; }
      }
      
      @media (min-width: 1024px) {
        .container { padding-left: 2rem; padding-right: 2rem; }
        .lg\\:px-8 { padding-left: 2rem; padding-right: 2rem; }
        .lg\\:pt-32 { padding-top: 8rem; }
        .lg\\:pb-36 { padding-bottom: 9rem; }
        .lg\\:flex-row { flex-direction: row; }
        .lg\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .lg\\:text-6xl { font-size: 3.75rem; }
      }
      
      /* Critical hero section styles */
      .hero-gradient {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }
      
      /* Critical button styles */
      .btn-primary {
        background: linear-gradient(135deg, #203FFC 0%, #8D9DFF 100%);
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        text-decoration: none;
        display: inline-block;
        transition: transform 0.2s;
      }
      
      .btn-primary:hover {
        transform: translateY(-2px);
      }
      
      /* Critical dark mode support */
      @media (prefers-color-scheme: dark) {
        .dark\\:bg-black { background-color: #000; }
        .dark\\:text-white { color: #fff; }
        .dark\\:bg-gray-900 { background-color: #111827; }
      }
      
      .dark .dark\\:bg-black { background-color: #000; }
      .dark .dark\\:text-white { color: #fff; }
      .dark .dark\\:bg-gray-900 { background-color: #111827; }
      
      /* Prevent layout shift for images */
      img[loading="lazy"] {
        min-height: 1px;
      }
      
      /* Ensure smooth font loading */
      @font-face {
        font-family: 'Inter Display';
        font-display: swap;
        src: url('/fonts/InterDisplay-Regular.woff2') format('woff2');
        font-weight: 400;
      }
      
      @font-face {
        font-family: 'Inter Display';
        font-display: swap;
        src: url('/fonts/InterDisplay-Medium.woff2') format('woff2');
        font-weight: 500;
      }
      
      /* Critical animation performance */
      * {
        box-sizing: border-box;
      }
      
      /* Optimize repaints and reflows */
      .will-change-transform {
        will-change: transform;
      }
      
      .will-change-opacity {
        will-change: opacity;
      }
      
      /* Reduce layout thrashing */
      .transition-transform {
        transition-property: transform;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
      }
      
      .transition-opacity {
        transition-property: opacity;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
      }
    `;

    // Create and inject the critical CSS
    const style = document.createElement('style');
    style.id = 'critical-inline-css';
    style.textContent = criticalCSS;
    
    // Insert at the top of head for highest priority
    document.head.insertBefore(style, document.head.firstChild);

    // Preload the main CSS file for faster subsequent loading
    const mainCSSLink = document.createElement('link');
    mainCSSLink.rel = 'preload';
    mainCSSLink.as = 'style';
    mainCSSLink.href = '/_next/static/css/globals.css';
    mainCSSLink.onload = () => {
      mainCSSLink.rel = 'stylesheet';
    };
    document.head.appendChild(mainCSSLink);

  }, []);

  return null; // This component doesn't render anything
}

export default CriticalCSS;
