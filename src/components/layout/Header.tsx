'use client';
import { Dropdown } from '@/components/Dropdown';
import { MultiLevelDropdown } from '@/components/MultiLevelDropdown';
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
        className="flex items-center py-2 w-full text-white text-left"
      >
        <div className="flex items-center gap-2 ps-3"
          style={
            isExpanded ? { gap: '12px' } : {}
          }
        >
          <Icon
            name='arrow-right-2.svg'
            alt="dropdown icon"
            size={4}
            folder="shared/icons"
            style={
              isExpanded ? { transform: 'rotate(90deg)', transition: 'transform 0.3s ease' } : { transition: 'transform 0.3s ease' }
            }
          />
          <span className={`text-xl sm:text-2xl font-normal ${isActive ? "text-[#8D9DFF]" : "text-white"}`}>{title}</span>
        </div>
      </button>
      {isExpanded && (
        <div className="pb-2">
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

  // Growth Systems Partner dropdown structure
  const servicesDropdownItems = [
    { label: 'AI Automation', href: '/services/automation-ai' },
    { label: 'Website Design', href: '/services/web-design' },
    { label: 'Forte Care™', href: '/services/forte-care' },
    { label: 'Agency Partnership', href: '/services/agency-partnership' },
    { label: 'Free Growth Audit', href: '/growth-audit' },
    { label: 'Free Website Checkup', href: 'https://www.fortewebdesigns.com/checkup/' },
    { label: 'View All Services', href: '/services' }
  ];



  // Locations dropdown - Multi-level hierarchical structure
  const locationsDropdownItems = [
    {
      label: 'Texas',
      href: '/locations/texas',
      children: [
        { label: 'Texas', href: '/locations/texas' },
        { label: 'Dallas', href: '/locations/texas/dallas' },
        { label: 'Fort Worth', href: '/locations/texas/fort-worth' },
        { label: 'Plano', href: '/locations/texas/plano' },
        { label: 'Frisco', href: '/locations/texas/frisco' },
        { label: 'Arlington', href: '/locations/texas/arlington' },
        { label: 'Irving', href: '/locations/texas/irving' }
      ]
    },
    {
      label: 'DFW Services',
      href: '/dfw',
      children: [
        { label: 'AI Consulting', href: '/dfw/ai-consulting' },
        { label: 'Automation Consulting', href: '/dfw/automation-consulting' },
        { label: 'Business Growth Systems', href: '/dfw/business-growth-systems' }
      ]
    },
    {
      label: 'Oklahoma',
      href: '/locations/oklahoma',
      children: [
        { label: 'Oklahoma', href: '/locations/oklahoma' },
        { label: 'Oklahoma City', href: '/locations/oklahoma/oklahoma-city' },
        { label: 'Tulsa', href: '/locations/oklahoma/tulsa' },
        { label: 'Norman', href: '/locations/oklahoma/norman' }
      ]
    },
    {
      label: 'New Mexico',
      href: '/locations/new-mexico',
      children: [
        { label: 'New Mexico', href: '/locations/new-mexico' },
        { label: 'Albuquerque', href: '/locations/new-mexico/albuquerque' },
        { label: 'Santa Fe', href: '/locations/new-mexico/santa-fe' },
        { label: 'Las Cruces', href: '/locations/new-mexico/las-cruces' }
      ]
    },
    { label: 'All Locations', href: '/locations' }
  ];

  // About Us dropdown (renamed from Company) - Combined with additional info
  const aboutDropdownItems = [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' }
  ];

  // Resources dropdown for documentation and technical info
  const resourcesDropdownItems = [
    { label: 'Technology Stack', href: '/docs/technology-stack' },
    { label: 'AI Agents', href: '/docs/ai-agents' },
    { label: 'Growth Audit', href: '/growth-audit' },
    { label: 'Case Studies', href: '/case-studies' }
  ];



  // Don't render theme-dependent content until mounted
  if (!mounted) {
    return (
      <header className="py-4">
        <div className="container-fluid mx-auto px-4 sm:px-6 lg:px-8">
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
      {/* Spacer div to prevent content jumping when header becomes sticky */}
      {isSticky && <div className="h-20"></div>}
      
      <header className={`transition-all duration-300 ${
        isSticky 
          ? 'fixed top-0 left-0 right-0 z-[100] bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-2' 
          : 'py-4'
      }`}>
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

              <HeaderLink href="/solutions">Solutions</HeaderLink>

              {/* Resources Dropdown */}
              <Dropdown
                items={resourcesDropdownItems}
                width="200px"
                trigger={
                  <div className="relative group text-[#101010] dark:text-[#DFDFDF] font-roboto font-normal text-base leading-6 tracking-normal align-middle flex items-center gap-2">
                    <HeaderLink href="/case-studies" showIcon={true}>Resources</HeaderLink>
                  </div>
                }
              />

              {/* Locations Dropdown */}
              <MultiLevelDropdown
                items={locationsDropdownItems}
                width="280px"
                trigger={
                  <div className="relative group text-[#101010] dark:text-[#DFDFDF] font-roboto font-normal text-base leading-6 tracking-normal align-middle flex items-center gap-2">
                    <HeaderLink href="/locations" showIcon={true}>Locations</HeaderLink>
                  </div>
                }
              />

              <HeaderLink href="/pricing">Pricing</HeaderLink>
              
              <Dropdown
                items={aboutDropdownItems}
                width="180px"
                trigger={
                  <div className="relative group text-[#101010] dark:text-[#DFDFDF] font-roboto font-normal text-base leading-6 tracking-normal align-middle flex items-center gap-2">
                    <HeaderLink href="/about" showIcon={true}>About Us</HeaderLink>
                  </div>
                }
              />
            </nav>

            {/* Desktop Right Side - Theme Toggle and Contact Button */}
            <nav className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <DarkButton href="/contact">
                Contact Us
              </DarkButton>
            </nav>

            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between w-full relative z-[101]">
              {/* Mobile Menu Button and Small Logo */}
              <div className="flex items-center gap-[10px]">
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
              <div className="flex items-center gap-[16px]">
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
              <div className="flex items-center justify-between p-3 sm:p-4 border-b border-white/20 bg-black/10 backdrop-blur-sm">
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

              <div className="flex-1 p-3 sm:p-4 overflow-y-auto min-h-0 bg-black/5 backdrop-blur-sm"
                style={{
                  paddingTop: '1rem',
                  height: 'calc(100vh - 70px)'
                }}
              >
                <nav className="flex flex-col space-y-2">
                  {/* Home */}
                  <div className="flex items-center py-2">
                    <Link
                      href="/"
                      className={`text-xl sm:text-2xl font-normal flex items-center gap-2 ps-3 ${pathname === '/' ? 'text-[#8D9DFF]' : 'text-white'
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                      {pathname === '/' && (
                        <Icon name="star-m.svg" alt="star" size={16} folder="shared/icons" />
                      )}
                    </Link>
                  </div>

                  {/* Services */}
                  <MobileExpandableMenu
                    title="Services"
                    isActive={pathname.startsWith('/services') || pathname.startsWith('/checkup')}
                  >
                    <div className="pl-4 space-y-1">
                      {servicesDropdownItems.map((item) => (
                        <div key={item.href} className="flex items-center w-full">
                          <Link
                            href={item.href}
                            className={`text-lg sm:text-xl flex items-center gap-2 py-1 ${pathname === item.href ? 'text-[#8D9DFF]' : 'text-white'
                              }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                            {pathname === item.href && (
                              <Icon name="star-m.svg" alt="star" size={14} />
                            )}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </MobileExpandableMenu>

                  {/* Solutions */}
                  <div className="flex items-center w-full">
                    <Link
                      href="/solutions"
                      className={`text-xl sm:text-2xl font-normal flex items-center gap-2 py-2 ps-3 ${pathname === '/solutions' ? 'text-[#8D9DFF]' : 'text-white'}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Solutions
                      {pathname === '/solutions' && (
                        <Icon name="star-m.svg" alt="star" size={16} folder="shared/icons" />
                      )}
                    </Link>
                  </div>

                  {/* Resources */}
                  <MobileExpandableMenu
                    title="Resources"
                    isActive={pathname.startsWith('/docs') || pathname.startsWith('/case-studies') || pathname.startsWith('/growth-audit')}
                  >
                    <div className="pl-4 space-y-1">
                      {resourcesDropdownItems.map((item) => (
                        <div key={item.href} className="flex items-center w-full">
                          <Link
                            href={item.href}
                            className={`text-lg sm:text-xl flex items-center gap-2 py-1 ${pathname === item.href ? 'text-[#8D9DFF]' : 'text-white'
                              }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                            {pathname === item.href && (
                              <Icon name="star-m.svg" alt="star" size={14} />
                            )}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </MobileExpandableMenu>



                  {/* Locations */}
                  <MobileExpandableMenu
                    title="Locations"
                    isActive={pathname.startsWith('/locations')}
                  >
                    <div className="pl-4 space-y-1">
                      {/* Texas */}
                      <MobileExpandableMenu
                        title="Texas"
                        isActive={pathname.startsWith('/locations/texas')}
                      >
                        <div className="pl-4 space-y-1">
                          <div className="flex items-center w-full">
                            <Link
                              href="/locations/texas"
                              className={`text-base sm:text-lg flex items-center gap-2 py-1 ${pathname === '/locations/texas' ? 'text-[#8D9DFF]' : 'text-white'}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Texas
                              {pathname === '/locations/texas' && (
                                <Icon name="star-m.svg" alt="star" size={12} />
                              )}
                            </Link>
                          </div>
                          <div className="flex items-center w-full">
                            <Link
                              href="/locations/texas/dallas"
                              className={`text-base sm:text-lg flex items-center gap-2 py-1 ${pathname === '/locations/texas/dallas' ? 'text-[#8D9DFF]' : 'text-white'}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Dallas
                              {pathname === '/locations/texas/dallas' && (
                                <Icon name="star-m.svg" alt="star" size={12} />
                              )}
                            </Link>
                          </div>
                          <div className="flex items-center w-full">
                            <Link
                              href="/locations/texas/fort-worth"
                              className={`text-base sm:text-lg flex items-center gap-2 py-1 ${pathname === '/locations/texas/fort-worth' ? 'text-[#8D9DFF]' : 'text-white'}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Fort Worth
                              {pathname === '/locations/texas/fort-worth' && (
                                <Icon name="star-m.svg" alt="star" size={12} />
                              )}
                            </Link>
                          </div>
                          <div className="flex items-center w-full">
                            <Link
                              href="/locations/texas/plano"
                              className={`text-base sm:text-lg flex items-center gap-2 py-1 ${pathname === '/locations/texas/plano' ? 'text-[#8D9DFF]' : 'text-white'}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Plano
                              {pathname === '/locations/texas/plano' && (
                                <Icon name="star-m.svg" alt="star" size={12} />
                              )}
                            </Link>
                          </div>
                          <div className="flex items-center w-full">
                            <Link
                              href="/locations/texas/frisco"
                              className={`text-base sm:text-lg flex items-center gap-2 py-1 ${pathname === '/locations/texas/frisco' ? 'text-[#8D9DFF]' : 'text-white'}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Frisco
                              {pathname === '/locations/texas/frisco' && (
                                <Icon name="star-m.svg" alt="star" size={12} />
                              )}
                            </Link>
                          </div>
                          <div className="flex items-center w-full">
                            <Link
                              href="/locations/texas/arlington"
                              className={`text-base sm:text-lg flex items-center gap-2 py-1 ${pathname === '/locations/texas/arlington' ? 'text-[#8D9DFF]' : 'text-white'}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Arlington
                              {pathname === '/locations/texas/arlington' && (
                                <Icon name="star-m.svg" alt="star" size={12} />
                              )}
                            </Link>
                          </div>
                          <div className="flex items-center w-full">
                            <Link
                              href="/locations/texas/irving"
                              className={`text-base sm:text-lg flex items-center gap-2 py-1 ${pathname === '/locations/texas/irving' ? 'text-[#8D9DFF]' : 'text-white'}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Irving
                              {pathname === '/locations/texas/irving' && (
                                <Icon name="star-m.svg" alt="star" size={12} />
                              )}
                            </Link>
                          </div>
                        </div>
                      </MobileExpandableMenu>
                      
                      {/* Oklahoma */}
                      <MobileExpandableMenu
                        title="Oklahoma"
                        isActive={pathname.startsWith('/locations/oklahoma')}
                      >
                        <div className="pl-4 space-y-1">
                          <div className="flex items-center w-full">
                            <Link
                              href="/locations/oklahoma"
                              className={`text-base sm:text-lg flex items-center gap-2 py-1 ${pathname === '/locations/oklahoma' ? 'text-[#8D9DFF]' : 'text-white'}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Oklahoma
                              {pathname === '/locations/oklahoma' && (
                                <Icon name="star-m.svg" alt="star" size={12} />
                              )}
                            </Link>
                          </div>
                          <div className="flex items-center w-full">
                            <Link
                              href="/locations/oklahoma/oklahoma-city"
                              className={`text-base sm:text-lg flex items-center gap-2 py-1 ${pathname === '/locations/oklahoma/oklahoma-city' ? 'text-[#8D9DFF]' : 'text-white'}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Oklahoma City
                              {pathname === '/locations/oklahoma/oklahoma-city' && (
                                <Icon name="star-m.svg" alt="star" size={12} />
                              )}
                            </Link>
                          </div>
                          <div className="flex items-center w-full">
                            <Link
                              href="/locations/oklahoma/tulsa"
                              className={`text-base sm:text-lg flex items-center gap-2 py-1 ${pathname === '/locations/oklahoma/tulsa' ? 'text-[#8D9DFF]' : 'text-white'}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Tulsa
                              {pathname === '/locations/oklahoma/tulsa' && (
                                <Icon name="star-m.svg" alt="star" size={12} />
                              )}
                            </Link>
                          </div>
                          <div className="flex items-center w-full">
                            <Link
                              href="/locations/oklahoma/norman"
                              className={`text-base sm:text-lg flex items-center gap-2 py-1 ${pathname === '/locations/oklahoma/norman' ? 'text-[#8D9DFF]' : 'text-white'}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Norman
                              {pathname === '/locations/oklahoma/norman' && (
                                <Icon name="star-m.svg" alt="star" size={12} />
                              )}
                            </Link>
                          </div>
                        </div>
                      </MobileExpandableMenu>
                      
                      {/* New Mexico */}
                      <MobileExpandableMenu
                        title="New Mexico"
                        isActive={pathname.startsWith('/locations/new-mexico')}
                      >
                        <div className="pl-4 space-y-1">
                          <div className="flex items-center w-full">
                            <Link
                              href="/locations/new-mexico"
                              className={`text-base sm:text-lg flex items-center gap-2 py-1 ${pathname === '/locations/new-mexico' ? 'text-[#8D9DFF]' : 'text-white'}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              New Mexico
                              {pathname === '/locations/new-mexico' && (
                                <Icon name="star-m.svg" alt="star" size={12} />
                              )}
                            </Link>
                          </div>
                          <div className="flex items-center w-full">
                            <Link
                              href="/locations/new-mexico/albuquerque"
                              className={`text-base sm:text-lg flex items-center gap-2 py-1 ${pathname === '/locations/new-mexico/albuquerque' ? 'text-[#8D9DFF]' : 'text-white'}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Albuquerque
                              {pathname === '/locations/new-mexico/albuquerque' && (
                                <Icon name="star-m.svg" alt="star" size={12} />
                              )}
                            </Link>
                          </div>
                          <div className="flex items-center w-full">
                            <Link
                              href="/locations/new-mexico/santa-fe"
                              className={`text-base sm:text-lg flex items-center gap-2 py-1 ${pathname === '/locations/new-mexico/santa-fe' ? 'text-[#8D9DFF]' : 'text-white'}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Santa Fe
                              {pathname === '/locations/new-mexico/santa-fe' && (
                                <Icon name="star-m.svg" alt="star" size={12} />
                              )}
                            </Link>
                          </div>
                          <div className="flex items-center w-full">
                            <Link
                              href="/locations/new-mexico/las-cruces"
                              className={`text-base sm:text-lg flex items-center gap-2 py-1 ${pathname === '/locations/new-mexico/las-cruces' ? 'text-[#8D9DFF]' : 'text-white'}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Las Cruces
                              {pathname === '/locations/new-mexico/las-cruces' && (
                                <Icon name="star-m.svg" alt="star" size={12} />
                              )}
                            </Link>
                          </div>
                        </div>
                      </MobileExpandableMenu>
                      
                      {/* DFW Services */}
                      <MobileExpandableMenu
                        title="DFW Services"
                        isActive={pathname.startsWith('/dfw')}
                      >
                        <div className="pl-4 space-y-1">
                          <div className="flex items-center w-full">
                            <Link
                              href="/dfw/ai-consulting"
                              className={`text-base sm:text-lg flex items-center gap-2 py-1 ${pathname === '/dfw/ai-consulting' ? 'text-[#8D9DFF]' : 'text-white'}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              AI Consulting
                              {pathname === '/dfw/ai-consulting' && (
                                <Icon name="star-m.svg" alt="star" size={12} />
                              )}
                            </Link>
                          </div>
                          <div className="flex items-center w-full">
                            <Link
                              href="/dfw/automation-consulting"
                              className={`text-base sm:text-lg flex items-center gap-2 py-1 ${pathname === '/dfw/automation-consulting' ? 'text-[#8D9DFF]' : 'text-white'}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Automation Consulting
                              {pathname === '/dfw/automation-consulting' && (
                                <Icon name="star-m.svg" alt="star" size={12} />
                              )}
                            </Link>
                          </div>
                          <div className="flex items-center w-full">
                            <Link
                              href="/dfw/business-growth-systems"
                              className={`text-base sm:text-lg flex items-center gap-2 py-1 ${pathname === '/dfw/business-growth-systems' ? 'text-[#8D9DFF]' : 'text-white'}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Business Growth Systems
                              {pathname === '/dfw/business-growth-systems' && (
                                <Icon name="star-m.svg" alt="star" size={12} />
                              )}
                            </Link>
                          </div>
                        </div>
                      </MobileExpandableMenu>
                      
                      {/* All Locations */}
                      <div className="flex items-center w-full">
                        <Link
                          href="/locations"
                          className={`text-lg sm:text-xl flex items-center gap-2 py-1 ${pathname === '/locations' ? 'text-[#8D9DFF]' : 'text-white'}`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          All Locations
                          {pathname === '/locations' && (
                            <Icon name="star-m.svg" alt="star" size={14} />
                          )}
                        </Link>
                      </div>
                    </div>
                  </MobileExpandableMenu>

                  {/* Pricing */}
                  <div className="flex items-center w-full">
                    <Link
                      href="/pricing"
                      className={`text-xl sm:text-2xl font-normal flex items-center gap-2 py-2 ps-3 ${pathname === '/pricing' ? 'text-[#8D9DFF]' : 'text-white'}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Pricing
                      {pathname === '/pricing' && (
                        <Icon name="star-m.svg" alt="star" size={16} folder="shared/icons" />
                      )}
                    </Link>
                  </div>

                  {/* About Us */}
                  <MobileExpandableMenu
                    title="About Us"
                    isActive={pathname.startsWith('/about') || pathname.startsWith('/blog')}
                  >
                    <div className="pl-4 space-y-1">
                      {aboutDropdownItems.map((item) => (
                        <div key={item.href} className="flex items-center w-full">
                          <Link
                            href={item.href}
                            className={`text-lg sm:text-xl flex items-center gap-2 py-1 ${pathname === item.href ? 'text-[#8D9DFF]' : 'text-white'
                              }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                            {pathname === item.href && (
                              <Icon name="star-m.svg" alt="star" size={14} />
                            )}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </MobileExpandableMenu>

                  {/* Contact CTA */}
                  <div className="pt-4 pb-3">
                    <Link
                      href="/contact"
                      className="block w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center py-3 px-4 rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started Today
                    </Link>
                    <p className="text-center text-white/80 text-xs mt-2">
                      📞 (817) 873-6655 • Same day response
                    </p>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
