# Forte - Modern Business Website

Forte is a professional business website built with Next.js 15 and styled with Tailwind CSS. It features a modern, responsive design with dark mode support and optimized performance.

## Features

- **Modern Tech Stack**: Next.js 15 with App Router, React 19, and TypeScript
- **Responsive Design**: Mobile-first approach that looks great on all devices
- **Dark/Light Mode**: User-toggleable theme with system preference detection
- **Custom Styling**: Tailwind CSS with extended color palettes and custom components
- **Multiple Pages**: Home, About Us, Services, Forte Solutions, and Pricing pages
- **SEO Optimized**: Metadata for all pages and best practices implemented
- **Custom Fonts**: Google Fonts integration (Geist Sans and Geist Mono)
- **Image Optimization**: Next.js Image component with custom wrappers for better performance
- **Client-side Navigation**: Fast page transitions with prefetching and client components

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd forte

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.

## Project Structure

```
/src
  /app             # Next.js App Router pages
    /about         # About Us page
    /services      # Services page
    /solutions     # Forte Solutions page
    /pricing       # Pricing page
    /providers     # Context providers (ThemeProvider)
  /components      # Reusable components
  /public          # Static assets
```

## Deployment

This website can be deployed to any hosting platform that supports Next.js applications, such as Vercel, Netlify, or a custom server.

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Customization

You can customize the website by modifying:

- **Colors**: Edit the color palette in `tailwind.config.js`
- **Content**: Update page content in the respective files under `/src/app`
- **Components**: Modify or add components in the `/src/components` directory
- **Styles**: Adjust global styles in `/src/app/globals.css`

## Development Best Practices

### 🎨 Theme Management

- **Global Theme Colors**: Always use the color variables defined in `tailwind.config.js` instead of hardcoded values
- **Theme Provider**: All theme state is managed through `ThemeProvider` in `/src/app/providers/ThemeProvider.tsx`
- **Dark/Light Variants**: Use Tailwind's dark mode variant (`dark:bg-gray-900`) in combination with the theme provider
- **Theme Toggle**: Include the `ThemeToggle` component in relevant layouts to allow users to switch themes
- **Consistency**: Follow the established color patterns - primary colors for main actions, secondary for accents, grays for UI elements

```jsx
// Example of proper theme usage
<div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
  <button className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500">
    Action Button
  </button>
</div>
```

### 🖼️ Image Optimization

The project includes three specialized image components that should be used consistently:

1. **OptimizedImage**: `/src/components/images/OptimizedImage.tsx`
   - Use for standard content images
   - Always provide descriptive `alt` text
   - Set `priority` to `true` for above-the-fold images
   - Width and height should maintain the image's aspect ratio

2. **BackgroundImage**: `/src/components/images/BackgroundImage.tsx`
   - Use for hero sections and call-to-action backgrounds
   - Always include an appropriate overlay for text readability
   - Works best with 16:9 or 21:9 aspect ratio images

3. **Icon**: `/src/components/images/Icon.tsx`
   - Use for all SVG icons throughout the site
   - Place SVG files in `/public/images/shared/icons/`

```jsx
// Example usage
import { OptimizedImage } from '@/components/images/OptimizedImage';
import { BackgroundImage } from '@/components/images/BackgroundImage';
import { Icon } from '@/components/images/Icon';

// Content image
<OptimizedImage
  src="/images/page/image.jpg"
  width={800}
  height={600}
  alt="Descriptive text"
  priority={isAboveTheFold}
/>

// Background with content
<BackgroundImage
  src="/images/page/banner.jpg"
  alt="Banner description"
  overlayClassName="bg-primary-900/70"
>
  <h2>Content goes here</h2>
</BackgroundImage>

// Icon
<Icon name="check" className="w-5 h-5" />
```

### 🚀 Performance Optimization

- **Client Components**: Mark components with `'use client'` only when necessary (event handlers, hooks)
- **Link Prefetching**: Always use `prefetch={true}` for main navigation links
- **Image Loading**: Use `priority` for above-the-fold images, lazy loading is automatic for others
- **Component Splitting**: Split large components into smaller, focused ones
- **Bundle Size**: Monitor bundle size and avoid unnecessary dependencies
- **Server Components**: Use server components by default for better performance

```jsx
// Example of proper Link usage with prefetching
import Link from 'next/link';

<Link href="/about" prefetch={true}>
  About Us
</Link>
```

### 📱 SEO Best Practices

For each new page:

1. **Metadata**: Always define page-specific metadata:
   ```tsx
   export const metadata: Metadata = {
     title: 'Page Title', // Will be formatted as "Page Title | Forte"
     description: 'Concise, compelling description under 155 characters',
   };
   ```

2. **Semantic HTML**: Use appropriate HTML elements (`<h1>`, `<article>`, `<section>`, etc.)
3. **Heading Structure**: Follow proper hierarchy (one `<h1>` per page, followed by `<h2>`, then `<h3>`, etc.)
4. **Alt Text**: Provide descriptive alt text for all images
5. **Structured Data**: Add JSON-LD structured data when appropriate for rich snippets

### 🌐 Accessibility

- **Color Contrast**: Ensure text has sufficient contrast against backgrounds (at least 4.5:1 for normal text)
- **Keyboard Navigation**: Make sure all interactive elements are keyboard accessible
- **ARIA Attributes**: Add appropriate ARIA roles and attributes when necessary
- **Focus Indicators**: Maintain visible focus indicators for keyboard users

## Page Creation Checklist

When creating a new page:

- [ ] Add proper metadata (title, description)
- [ ] Use semantic HTML structure
- [ ] Implement proper heading hierarchy
- [ ] Use OptimizedImage component for all images with alt text
- [ ] Add appropriate prefetch to all internal navigation links
- [ ] Test in both light and dark theme
- [ ] Check responsive behavior on different screen sizes
- [ ] Ensure accessible color contrast and keyboard navigation
- [ ] Verify proper Tailwind classes and theme consistency

By following these guidelines consistently, your project will maintain high performance, accessibility, and SEO standards while providing a seamless user experience.

## Content Migration Status

This website content has been migrated from the original Forte Web Designs HTML/CSS/JS website. The following content has been successfully integrated:

### ✅ Completed Migration:
- **Hero Section**: Updated with original tagline "It's not just a name. It's our standard." and main messaging
- **Services Content**: All four main services with original descriptions:
  - High Performance Websites (custom-coded, no templates)
  - SEO Services (search rankings and organic traffic)
  - Google PPC Ads (targeted campaigns for qualified leads)
  - Social Media Management (brand presence and audience engagement)
- **The Forte Method™**: All 5 steps preserved (Foundations, Outline, Refine, Tailor, Elevate)
- **Company Messaging**: "Working Hard For Small Businesses" section with original authentic copy
- **Stats Section**: All key metrics maintained (100% satisfaction guarantee, 25+ businesses, etc.)
- **Navigation Structure**: Matches original website with proper dropdowns and sections
- **SEO Metadata**: Updated with original website's title, description, and keywords
- **Contact Form**: Includes all original service options
- **Brand Voice**: Maintained the authentic, conversational tone from the original site

### 📋 Content Preserved:
- Original pricing structure references
- Forte Guarantee™ messaging
- U.S. Based Company positioning
- Custom-coded website emphasis
- Performance and speed focus
- Small business specialization

The website now combines the original Forte Web Designs content with the modern Next.js architecture, maintaining brand authenticity while leveraging improved performance and maintainability.
