'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTheme } from '../../app/providers/ThemeProvider';

const HeaderLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative font-medium text-base transition-colors duration-200 ${
        isActive
          ? 'text-blue-600 dark:text-blue-400'
          : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
      }`}
    >
      {children}
      {isActive && (
        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"></div>
      )}
    </Link>
  );
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { theme, mounted } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return (
      <header className="py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-bold text-xl">Forte</Link>
            <div>Loading...</div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      {isSticky && <div className="h-20"></div>}

      <header
        className={`transition-all duration-300 ${
          isSticky
            ? 'fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm py-3'
            : 'py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img
                src="/images/home/LaunchForteLogo.png"
                alt="Forte Web Designs"
                className="h-10"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
              <HeaderLink href="/">Home</HeaderLink>
              <HeaderLink href="/services">Services</HeaderLink>
              <HeaderLink href="/case-studies">Work</HeaderLink>
              <HeaderLink href="/blog">Writing</HeaderLink>
              <HeaderLink href="/about">About</HeaderLink>
            </nav>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center justify-center">
                <ThemeToggle />
              </div>
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200 flex items-center justify-center"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 dark:text-gray-300"
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

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div
              className="md:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}

          {/* Mobile Menu */}
          <div
            className={`md:hidden fixed top-0 right-0 bottom-0 w-3/4 max-w-sm z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{
              backgroundColor: theme === 'dark' ? 'rgb(17, 24, 39)' : 'rgb(255, 255, 255)',
              opacity: '1'
            }}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700" style={{backgroundColor: theme === 'dark' ? 'rgb(17, 24, 39)' : 'rgb(255, 255, 255)'}}>
              <span className="font-bold text-lg text-gray-900 dark:text-white">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col p-4 space-y-2 overflow-y-auto h-[calc(100vh-73px)]" style={{backgroundColor: theme === 'dark' ? 'rgb(17, 24, 39)' : 'rgb(255, 255, 255)'}}>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                  pathname === '/'
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                Home
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                  pathname === '/services'
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                Services
              </Link>
              <Link
                href="/case-studies"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                  pathname === '/case-studies'
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                Work
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                  pathname === '/blog'
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                Writing
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                  pathname === '/about'
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-center transition-all duration-200"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
