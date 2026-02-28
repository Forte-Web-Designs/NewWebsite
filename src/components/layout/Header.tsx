'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/case-studies' },
  { label: 'Writing', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

const HeaderLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative text-sm font-medium transition-colors duration-200 ${
        isActive
          ? 'text-blue-600 dark:text-blue-400'
          : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
      }`}
    >
      {children}
      {isActive && (
        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400" />
      )}
    </Link>
  );
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Spacer to push content below fixed header */}
      <div className="h-16" />

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-200/80 dark:border-gray-800/80">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0">
              <img
                src="/images/home/logo-header-light.svg"
                alt="Forte Web Designs"
                className="h-9 block dark:hidden"
              />
              <img
                src="/images/home/logo-dark.svg"
                alt="Forte Web Designs"
                className="h-9 hidden dark:block"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <HeaderLink key={link.href} href={link.href}>
                  {link.label}
                </HeaderLink>
              ))}
            </nav>

            {/* Desktop right: theme toggle (hidden when scrolled down — floating one takes over) */}
            <div className="hidden md:flex items-center">
              {atTop && <ThemeToggle />}
            </div>

            {/* Mobile: theme toggle + hamburger */}
            <div className="md:hidden flex items-center gap-3">
              {atTop && <ThemeToggle />}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1 text-gray-700 dark:text-gray-300"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <>
            <div
              className="md:hidden fixed inset-0 top-16 bg-black/40 z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="md:hidden absolute top-16 left-0 right-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-lg">
              <nav className="flex flex-col px-4 py-4 gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </>
        )}
      </header>
    </>
  );
}
