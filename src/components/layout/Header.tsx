'use client';
import { Dropdown } from '@/components/Dropdown';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Icon } from '@/components/images/Icon';
import { OptimizedImage } from "@/components/images/OptimizedImage";
import { useTheme } from '../../app/providers/ThemeProvider';
import DarkButton from '../DarkButton';

const HeaderLink = ({
  href,
  children,
  showIcon = false
}: {
  href: string;
  children: React.ReactNode;
  showIcon?: boolean;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div className={`relative group ${isActive ? 'text-[#101010] dark:text-[#DFDFDF]' : 'text-[#101010] dark:text-[#DFDFDF]'}`}>
      <Link
        href={href}
        prefetch={true}
        className="font-roboto font-normal text-base leading-6 tracking-normal align-middle flex items-center gap-2 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
      >
        {showIcon && (
          <Icon
            name='selector'
            alt="dropdown icon"
            className="w-[10px] h-[10px] dark:invert transition-all duration-300 group-hover:scale-110"
          />
        )}
        <span className="relative group">
          {children}
          {/* Hover line positioned only under text */}
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></div>
        </span>
      </Link>
      {isActive && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"></div>
      )}
    </div>
  );
};

const MobileExpandableMenu = ({ title, children, defaultExpanded = false, isActive = false }: { title: string; children: React.ReactNode; defaultExpanded?: boolean; isActive?: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between py-4 w-full text-white"
      >
        <div className="flex items-center gap-3"
          style={
            isExpanded ? { gap: '20px' } : {}
          }
        >
          <Icon
            name='arrow-right-2.svg'
            alt="dropdown icon"
            size={7}
            folder="shared/icons"
            style={
              isExpanded ? { transform: 'rotate(90deg)', transition: 'transform 0.3s ease' } : { transition: 'transform 0.3s ease' }
            }
          />
          <span className={`text-3xl font-medium ${isActive ? "text-primary-1000" : ""}`}>{title}</span>
        </div>
        {/* <Icon name="star-m.svg" alt="star" size={18} folder="shared/icons" /> */}
      </button>
      {isExpanded && (
        <div className="pb-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { theme, mounted } = useTheme();
  const pathname = usePathname();

  // Disable/enable scrolling when mobile menu is opened/closed
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to ensure scrolling is enabled when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Sticky header functionality
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 100); // Become sticky after scrolling 100px
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Restructured Services dropdown - clean without prices
  const servicesDropdownItems = [
    { label: 'Website Design', href: '/services/webDesign' },
    { label: 'SEO Services', href: '/services/seo' },
    { label: 'PPC Advertising', href: '/services/ads' },
    { label: 'Social Media Management', href: '/services/social' },
    { label: 'View All Services', href: '/services' }
  ];

  // Industry-specific navigation
  const industriesDropdownItems = [
    { label: 'Plumber Websites', href: '/industries/plumbers' },
    { label: 'Restaurant Websites', href: '/industries/restaurants' },
    { label: 'Healthcare Websites', href: '/industries/healthcare' },
    { label: 'All Industries', href: '/industries' }
  ];

  // Simplified Company dropdown
  const companyDropdownItems = [
    { label: 'About Forte', href: '/about' },
    { label: 'Our Work Examples', href: '/about/work' },
    { label: 'Contact Us', href: '/contact' }
  ];

  // Solutions dropdown
  const solutionsDropdownItems = [
    { label: 'Free Website Checkup', href: '/checkup' },
    { label: 'SEO Audit Tool', href: '/solutions/seotool' },
    { label: 'Case Studies', href: '/case-studies' }
  ];

  // Don't render theme-dependent content until mounted - but render the full structure
  if (!mounted) {
    return (
      <>
        {/* Spacer div to prevent content jumping when header becomes sticky */}
        {isSticky && <div className="h-20"></div>}
        
        <header className={`transition-all duration-300 ${
          isSticky 
            ? 'fixed top-0 left-0 right-0 z-[100] bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-2' 
            : 'py-4'
        }`}>
          <div>
            <div className="container-fluid mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                {/* Desktop Logo - Hidden on mobile */}
                <Link href="/" prefetch={true} className="hidden md:flex items-center transition-all duration-300 hover:scale-105 cursor-pointer">
                  <img
                    src="/images/home/logo2.png"
                    alt="Forte Logo (Light Mode)"
                    className="block dark:hidden"
                    height={48}
                  />
                  <img
                    src="/images/home/logo1.png"
                    alt="Forte Logo (Dark Mode)"
                    className="hidden dark:block"
                    height={48}
                  />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                  <HeaderLink href="/">Home</HeaderLink>
                  
                  <Dropdown
                    items={servicesDropdownItems}
                    width="270px"
                    trigger={
                      <div className="relative group text-[#101010] dark:text-[#DFDFDF] font-roboto font-normal text-base leading-6 tracking-normal align-middle flex items-center gap-2">
                        <HeaderLink href="/services" showIcon={true}>Services</HeaderLink>
                      </div>
                    }
                  />

                  <Dropdown
                    items={industriesDropdownItems}
                    width="250px"
                    trigger={
                      <div className="relative group text-[#101010] dark:text-[#DFDFDF] font-roboto font-normal text-base leading-6 tracking-normal align-middle flex items-center gap-2">
                        <HeaderLink href="/industries" showIcon={true}>Industries</HeaderLink>
                      </div>
                    }
                  />

                  {/* Prominent Pricing Link */}
                  <HeaderLink href="/pricing">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Pricing</span>
                  </HeaderLink>
                  
                  <Dropdown
                    items={companyDropdownItems}
                    width="200px"
                    trigger={
                      <div className="relative group text-[#101010] dark:text-[#DFDFDF] font-roboto font-normal text-base leading-6 tracking-normal align-middle flex items-center gap-2">
                        <HeaderLink href="/about" showIcon={true}>Company</HeaderLink>
                      </div>
                    }
                  />
                  
                  <Dropdown
                    items={solutionsDropdownItems}
                    width="250px"
                    trigger={
                      <div className="relative group text-[#101010] dark:text-[#DFDFDF] font-roboto font-normal text-base leading-6 tracking-normal align-middle flex items-center gap-2">
                        <HeaderLink href="/solutions" showIcon={true}>Solutions</HeaderLink>
                      </div>
                    }
                  />
                </nav>

                {/* Desktop Right Side - Theme Toggle and Contact Button */}
                <nav className="hidden md:flex items-center space-x-8">
                  {/* Theme Toggle - Always visible */}
                  <ThemeToggle />
                  <DarkButton href='/contact'>
                    Contact Us
                  </DarkButton>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  aria-label="Toggle mobile menu"
                >
                  <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-200 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-200 transition-all duration-300 my-1 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-200 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen 
              ? 'max-h-screen opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="px-4 sm:px-6 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              {/* Mobile Logo */}
              <div className="mb-6 text-center">
                <Link href="/" prefetch={true} onClick={() => setMobileMenuOpen(false)}>
                  <img
                    src="/images/home/logo2.png"
                    alt="Forte Logo"
                    className="mx-auto h-8"
                  />
                </Link>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-4">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Home
                </Link>
                
                <MobileExpandableMenu title="Services" isActive={pathname?.startsWith('/services')}>
                  <div className="space-y-2 pl-4">
                    {servicesDropdownItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </MobileExpandableMenu>

                <MobileExpandableMenu title="Industries" isActive={pathname?.startsWith('/industries')}>
                  <div className="space-y-2 pl-4">
                    {industriesDropdownItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </MobileExpandableMenu>

                <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  💰 Pricing
                </Link>

                <MobileExpandableMenu title="Company" isActive={pathname?.startsWith('/about') || pathname?.startsWith('/forte-method')}>
                  <div className="space-y-2 pl-4">
                    {companyDropdownItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </MobileExpandableMenu>

                <MobileExpandableMenu title="Solutions" isActive={pathname?.startsWith('/solutions') || pathname?.startsWith('/checkup')}>
                  <div className="space-y-2 pl-4">
                    {solutionsDropdownItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </MobileExpandableMenu>
                
              </div>

              {/* Mobile CTA */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <DarkButton href="/contact" className="w-full text-center py-3 mb-4" onClick={() => setMobileMenuOpen(false)}>
                  Get Started Today
                </DarkButton>
                <div className="text-center">
                  <a 
                    href="tel:8178736655"
                    className="font-roboto font-semibold text-lg text-blue-600 hover:text-blue-700 transition-colors duration-300"
                  >
                    (817) 873-6655
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Call or Text</p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }

  return (
    <>
      {/* Spacer div to prevent content jumping when header becomes sticky */}
      {isSticky && <div className="h-20"></div>}
      
      <header className={`transition-all duration-300 ${
        isSticky 
          ? 'fixed top-0 left-0 right-0 z-[100] bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-2' 
          : 'py-4'
      }`}>
        <div>
          <div className="container-fluid mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
            {/* Desktop Logo - Hidden on mobile */}
            <Link href="/" prefetch={true} className="hidden md:flex items-center transition-all duration-300 hover:scale-105 cursor-pointer">
              <img
                src="/images/home/logo2.png"
                alt="Forte Logo (Light Mode)"
                className="block dark:hidden"
                height={48}
              />
              <img
                src="/images/home/logo1.png"
                alt="Forte Logo (Dark Mode)"
                className="hidden dark:block"
                height={48}
              />
            </Link>                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                  <HeaderLink href="/">Home</HeaderLink>
                  
                  <Dropdown
                    items={servicesDropdownItems}
                    width="270px"
                    trigger={
                      <div className="relative group text-[#101010] dark:text-[#DFDFDF] font-roboto font-normal text-base leading-6 tracking-normal align-middle flex items-center gap-2">
                        <HeaderLink href="/services" showIcon={true}>Services</HeaderLink>
                      </div>
                    }
                  />
                  
                  <Dropdown
                    items={industriesDropdownItems}
                    width="250px"
                    trigger={
                      <div className="relative group text-[#101010] dark:text-[#DFDFDF] font-roboto font-normal text-base leading-6 tracking-normal align-middle flex items-center gap-2">
                        <HeaderLink href="/industries" showIcon={true}>Industries</HeaderLink>
                      </div>
                    }
                  />
                  
                  <Dropdown
                    items={companyDropdownItems}
                    width="200px"
                    trigger={
                      <div className="relative group text-[#101010] dark:text-[#DFDFDF] font-roboto font-normal text-base leading-6 tracking-normal align-middle flex items-center gap-2">
                        <HeaderLink href="/about" showIcon={true}>Company</HeaderLink>
                      </div>
                    }
                  />
                  
                  <Dropdown
                    items={solutionsDropdownItems}
                    width="250px"
                    trigger={
                      <div className="relative group text-[#101010] dark:text-[#DFDFDF] font-roboto font-normal text-base leading-6 tracking-normal align-middle flex items-center gap-2">
                        <HeaderLink href="/solutions" showIcon={true}>Solutions</HeaderLink>
                      </div>
                    }
                  />
                </nav>

            {/* Desktop Right Side - Theme Toggle and Contact Button */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="ml-4">
                <ThemeToggle />
              </div>
              <DarkButton href='/contact'>
                Contact Us
              </DarkButton>
            </nav>

            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between w-full relative z-[101]">
              {/* Mobile Menu Button and Small Logo */}
              <div className="flex items-center w-full gap-[10px]">
                <button
                  className="text-gray-700 dark:text-gray-300 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 cursor-pointer z-[99998] relative"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Mobile menu"
                >
                  {mobileMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 transition-transform duration-300 hover:rotate-90">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
                <Link href="/" prefetch={true} className="flex items-center md:hidden transition-all duration-300 hover:scale-105 cursor-pointer">
                  {/* Mobile Logo - Inline SVG for proper theme support */}
                  <svg 
                    width="19" 
                    height="25" 
                    viewBox="0 0 19 25" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-[19px] h-[25px] transition-colors duration-300 ${
                      theme === 'dark' 
                        ? 'text-white' 
                        : 'text-blue-600'
                    }`}
                  >
                    <path 
                      d="M12.2854 12.3516L10.1528 13.6788L16.1755 17.4271L16.6224 17.1504C17.5328 16.5834 18.068 15.6947 18.068 14.751C18.0663 12.2782 14.6665 10.8676 12.2854 12.3516Z" 
                      fill="currentColor"
                    />
                    <path 
                      d="M7.13965 11.803L16.6188 5.90374C17.5292 5.33683 18.0645 4.4481 18.0645 3.50435C18.0645 1.03327 14.6646 -0.377353 12.2836 1.10497L1.11865 8.05636L7.13965 11.803Z" 
                      fill="currentColor"
                    />
                    <path 
                      d="M1.45564 17.1554L12.2838 23.8951C14.6665 25.3774 18.0647 23.9668 18.0647 21.4957C18.0647 20.5519 17.5294 19.6632 16.619 19.0963L0 8.75342V14.7377C0 15.6898 0.538572 16.5852 1.45564 17.1554Z" 
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </div>

              {/* Mobile Right Side - Theme Toggle and Contact Button */}
              <div className="flex items-center w-full gap-[16px] justify-end">
                <ThemeToggle />
                <Link
                  href="/contact"
                  prefetch={true}
                  className="
                    font-roboto text-sm leading-[18px] tracking-normal text-right align-middle
                    inline-flex items-center justify-center
                    h-[36px] gap-2 py-2 px-3
                    rounded-[61.2px]
                    border
                    border-transparent
                    shadow-[0px_4px_40px_0px_#8193FF]
                    transition-all duration-300
                    relative
                    overflow-hidden
                    bg-black
                    text-white
                    group dark:shadow-[0px_4px_40px_0px_#203FFC]
                    min-w-max
                  "
                >
                  <span className="
                    absolute inset-0
                    rounded-[61.2px]
                    p-px
                    bg-gradient-to-br from-[#5C73FF_14.95%] to-[transparent_60.22%]
                    -z-10
                    group-hover:from-[#4c63e6]
                  "></span>

                  <span className="
                    absolute inset-0
                    rounded-[60.2px]
                    bg-black
                    -z-20
                  "></span>

                  Contact Us <Icon
                    name='rightarrow'
                    alt="right arrow icon"
                    className="w-[7px] h-[12px]"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu - Full Screen Overlay */}
          {mobileMenuOpen && (
            <div className="md:hidden fixed inset-0 z-[999999] flex flex-col min-h-screen w-full"
              style={{
                background: theme === "light"
                  ? "linear-gradient(146deg, #FFFFFF 0%, rgb(69 84 179) 100%)"
                  : "linear-gradient(180deg, #000000 0%, #001AB9 100%)",
              }}>

              <div
                className="absolute inset-0 bg-cover bg-no-repeat bg-bottom -bottom-20"
                style={{
                  backgroundImage: theme === "dark" ? "url('/images/navbar/Ellipse 1.png')" : "",
                  backgroundPosition: 'center right',
                  zIndex: -1
                }}
              ></div>

              {/* Mobile Header repeated in overlay for consistency */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/20 bg-black/10 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <button
                    className="text-white transition-all duration-300 hover:text-blue-300 hover:scale-110 z-[9999999]"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close mobile menu"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 transition-transform duration-300 hover:rotate-90">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <Link href="/" prefetch={true} className="flex items-center transition-all duration-300 hover:scale-105" onClick={() => setMobileMenuOpen(false)}>
                    <Icon
                      name="logo-m"
                      alt="Forte Logo (Mobile)"
                      className="w-[19px] h-[25px] text-white"
                      folder="shared/icons"
                    />
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <ThemeToggle />
                </div>
              </div>

              <div className="flex-1 p-4 sm:p-6 overflow-y-auto min-h-0 bg-black/5 backdrop-blur-sm"
                style={{
                  paddingTop: '2rem',
                  height: 'calc(100vh - 80px)'
                }}
              >
                <nav className="flex flex-col space-y-4">
                  {/* Home */}
                  <div className="flex items-center justify-between py-4">
                    <Link
                      href="/"
                      className={`text-3xl font-medium flex items-center gap-3 ps-5 ${pathname === '/' ? 'text-[#8D9DFF]' : 'text-white'
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    {pathname === '/' && (
                      <Icon name="star-m.svg" alt="star" size={18} folder="shared/icons" />
                    )}
                  </div>

                  {/* Industries */}
                  <MobileExpandableMenu
                    title="Industries"
                    isActive={pathname.startsWith('/industries')}
                  >
                    <div className="pl-6 space-y-3">
                      {industriesDropdownItems.map((item) => (
                        <div key={item.href} className="flex items-center justify-between w-full">
                          <Link
                            href={item.href}
                            className={`text-2xl block py-2 ${pathname === item.href ? 'text-[#8D9DFF]' : 'text-white'
                              }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                          {pathname === item.href && (
                            <Icon name="star-m.svg" alt="star" size={18} className="ml-2" />
                          )}
                        </div>
                      ))}
                    </div>
                  </MobileExpandableMenu>

                  {/* Pricing - Prominent */}
                  <div className="flex items-center justify-between py-4">
                    <Link
                      href="/pricing"
                      className={`text-3xl font-bold flex items-center gap-3 ps-5 ${pathname === '/pricing' ? 'text-[#8D9DFF]' : 'text-blue-400'
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      💰 Pricing
                    </Link>
                    {pathname === '/pricing' && (
                      <Icon name="star-m.svg" alt="star" size={18} folder="shared/icons" />
                    )}
                  </div>

                  {/* Services */}
                  <MobileExpandableMenu
                    title="Services"
                    isActive={pathname.startsWith('/services')}
                  >
                    <div className="pl-6 space-y-3">
                      {servicesDropdownItems.map((item) => (
                        <div key={item.href} className="flex items-center justify-between w-full">
                          <Link
                            href={item.href}
                            className={`text-2xl block py-2 ${pathname === item.href ? 'text-[#8D9DFF]' : 'text-white'
                              }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                          {pathname === item.href && (
                            <Icon name="star-m.svg" alt="star" size={18} className="ml-2" />
                          )}
                        </div>
                      ))}
                    </div>
                  </MobileExpandableMenu>

                  {/* Company */}
                  <MobileExpandableMenu
                    title="Company"
                    isActive={pathname.startsWith('/about') || pathname.startsWith('/forte-method')}
                  >
                    <div className="pl-6 space-y-3">
                      {companyDropdownItems.map((item) => (
                        <div key={item.href} className="flex items-center justify-between w-full">
                          <Link
                            href={item.href}
                            className={`text-2xl block py-2 ${pathname === item.href ? 'text-[#8D9DFF]' : 'text-white'
                              }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                          {pathname === item.href && (
                            <Icon name="star-m.svg" alt="star" size={18} className="ml-2" />
                          )}
                        </div>
                      ))}
                    </div>
                  </MobileExpandableMenu>

                  {/* Solutions */}
                  <MobileExpandableMenu
                    title="Solutions"
                    isActive={pathname.startsWith('/solutions') || pathname.startsWith('/checkup')}
                  >
                    <div className="pl-6 space-y-3">
                      {solutionsDropdownItems.map((item) => (
                        <div key={item.href} className="flex items-center justify-between w-full">
                          <Link
                            href={item.href}
                            className={`text-2xl block py-2 ${pathname === item.href ? 'text-[#8D9DFF]' : 'text-white'
                              }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                          {pathname === item.href && (
                            <Icon name="star-m.svg" alt="star" size={18} className="ml-2" />
                          )}
                        </div>
                      ))}
                    </div>
                  </MobileExpandableMenu>

                  {/* Contact CTA */}
                  <div className="pt-8 pb-4">
                    <Link
                      href="/contact"
                      className="block w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started Today
                    </Link>
                    <p className="text-center text-white/80 text-sm mt-3">
                      📞 (817) 873-6655 • Same day response
                    </p>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
    </>
  );
}