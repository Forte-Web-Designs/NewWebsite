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

  // Dropdown items for About section
  const aboutDropdownItems = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Work', href: '/about/work' },
    { label: 'FAQs', href: '/about/faqs' }
  ];

  // Dropdown items for Services section
  const serviceDropdownItem = [
    { label: 'Services', href: '/services' },
    { label: 'Website Design', href: '/services/webDesign' },
    { label: 'SEO', href: '/services/seo' },
    { label: 'Google PPC Ads', href: '/services/ads' },
    { label: 'Social Media Management', href: '/services/socialMedia' },
  ];

  // Dropdown items for Forte Solutions section
  const forteDropdownItems = [
    { label: 'Forte Solutions™', href: '/solutions' },
    { label: 'The Forte Method™', href: '/solutions/method' },
    { label: 'Forte Care™', href: '/solutions/care' },
    { label: 'Free Forte SiteCheckup™', href: '/solutions/seotool' },

  ];

  // Don't render theme-dependent content until mounted
  if (!mounted) {
    return (
      <>
        {/* Spacer div to prevent content jumping when header becomes sticky */}
        {isSticky && <div className="h-20"></div>}
        
        <header className={`transition-all duration-300 ${
          isSticky 
            ? 'fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-2' 
            : 'py-4'
        }`}>
          <div>
            <div className="container-fluid mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
              {/* Desktop Logo - Hidden on mobile */}
              <Link href="/" prefetch={true} className="hidden lg:flex items-center transition-all duration-300 hover:scale-105 cursor-pointer">
                <OptimizedImage
                  src="/images/home/logo2.png"
                  alt="Forte Logo"
                  width={120}
                  height={36}
                  className="block"
                  priority
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                <HeaderLink href="/">Home</HeaderLink>
                <Dropdown
                  items={aboutDropdownItems}
                  width="130px"
                  trigger={
                    <div className="relative group text-[#101010] font-roboto font-normal text-base leading-6 tracking-normal align-middle flex items-center gap-2">
                      <HeaderLink href="/about" showIcon={true}>About Us</HeaderLink>
                    </div>
                  }
                />
                <Dropdown
                  items={serviceDropdownItem}
                  width="270px"
                  trigger={
                    <div className="relative group text-[#101010] font-roboto font-normal text-base leading-6 tracking-normal align-middle flex items-center gap-2">
                      <HeaderLink href="/services" showIcon={true}>Services</HeaderLink>
                    </div>
                  }
                />

                <Dropdown
                  items={forteDropdownItems}
                  width="240px"
                  trigger={
                    <div className="relative group text-[#101010] font-roboto font-normal text-base leading-6 tracking-normal align-middle flex items-center gap-2">
                      <HeaderLink href="/solutions" showIcon={true}>Forte Solutions™</HeaderLink>
                    </div>
                  }
                />
                <HeaderLink href="/pricing">Pricing</HeaderLink>
              </nav>

              {/* Desktop Right Side - Theme Toggle and Contact Button */}
              <nav className="hidden lg:flex items-center space-x-8">
                <div className="ml-4">
                  <ThemeToggle />
                </div>
                <Link
                  href="/contact"
                  prefetch={true}
                  className="
                    font-roboto font-medium text-lg leading-[18px] tracking-normal text-right align-middle
                    inline-flex items-center justify-center
                    h-[46px] gap-3 py-[14px] px-5
                    rounded-[61.2px]
                    border
                    border-transparent
                    shadow-[0px_4px_40px_0px_#8193FF]
                    transition-all duration-300
                    relative
                    overflow-hidden
                    bg-black
                    text-white
                    group
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
                  Contact Us
                  <Icon name="rightarrow" alt="right arrow icon" className="w-[7px] h-[12px]" />
                </Link>
              </nav>
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
          ? 'fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-2' 
          : 'py-4'
      }`}>
        <div>
          <div className="container-fluid mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
            {/* Desktop Logo - Hidden on mobile */}
            <Link href="/" prefetch={true} className="hidden lg:flex items-center transition-all duration-300 hover:scale-105 cursor-pointer">
              <OptimizedImage
                src="/images/home/logo2.png"
                alt="Forte Logo (Light Mode)"
                width={120}
                height={36}
                className="block dark:hidden"
                priority
              />
              <OptimizedImage
                src="/images/home/logo1.png"
                alt="Forte Logo (Dark Mode)"
                width={120}
                height={36}
                className="hidden dark:block"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <HeaderLink href="/">Home</HeaderLink>
              <Dropdown
                items={aboutDropdownItems}
                width="130px"
                trigger={
                  <div className="relative group text-[#101010] dark:text-[#DFDFDF] font-roboto font-normal text-base leading-6 tracking-normal align-middle flex items-center gap-2">
                    <HeaderLink href="/about" showIcon={true}>About Us</HeaderLink>
                  </div>
                }
              />
              <Dropdown
                items={serviceDropdownItem}
                width="270px"
                trigger={
                  <div className="relative group text-[#101010] dark:text-[#DFDFDF] font-roboto font-normal text-base leading-6 tracking-normal align-middle flex items-center gap-2">
                    <HeaderLink href="/services" showIcon={true}>Services</HeaderLink>
                  </div>
                }
              />

              <Dropdown
                items={forteDropdownItems}
                width="240px"
                trigger={
                  <div className="relative group text-[#101010] dark:text-[#DFDFDF] font-roboto font-normal text-base leading-6 tracking-normal align-middle flex items-center gap-2">
                    <HeaderLink href="/solutions" showIcon={true}>Forte Solutions™</HeaderLink>
                  </div>
                }
              />
              <HeaderLink href="/pricing">Pricing</HeaderLink>
            </nav>

            {/* Desktop Right Side - Theme Toggle and Contact Button */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="ml-4">
                <ThemeToggle />
              </div>
              <DarkButton href='/contact'>
                Contact Us
              </DarkButton>
            </nav>

            {/* Mobile Header */}
            <div className="lg:hidden flex items-center justify-between w-full relative z-[60]">
              {/* Mobile Menu Button and Small Logo */}
              <div className="flex items-center w-full gap-[10px]">
                <button
                  className="text-gray-700 dark:text-gray-300 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 cursor-pointer"
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
                <Link href="/" prefetch={true} className="flex items-center lg:hidden md:block transition-all duration-300 hover:scale-105 cursor-pointer">
                  <OptimizedImage
                    src="/images/home/Group.png"
                    alt="Forte Logo (Mobile)"
                    width={18}
                    height={24}
                    className=""
                    priority
                  />
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
            <div className="lg:hidden fixed inset-0 z-50 flex flex-col pt-20"
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

              <div className="flex-1 p-6 overflow-y-auto relative z-10">
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
                  {/* About Us */}
                  <MobileExpandableMenu
                    title="About Us"
                    isActive={pathname.startsWith('/about')}
                  >
                    <div className="pl-6 space-y-3">
                      <div className="flex items-center justify-between w-full">
                        <Link
                          href="/about"
                          className={`text-2xl block py-2 ${pathname === '/about' ? 'text-[#8D9DFF]' : 'text-white'
                            }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          About Us
                        </Link>
                        {pathname === '/about' && (
                          <Icon name="star-m.svg" alt="star" size={18} className="ml-2" />
                        )}
                      </div>

                      <div className="flex items-center justify-between w-full">
                        <Link
                          href="/about/work"
                          className={`text-2xl block py-2 ${pathname === '/about/work' ? 'text-[#8D9DFF]' : 'text-white'
                            }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Our Work
                        </Link>
                        {pathname === '/about/work' && (
                          <Icon name="star-m.svg" alt="star" size={18} className="ml-2" />
                        )}
                      </div>

                      <div className="flex items-center justify-between w-full">
                        <Link
                          href="/about/faqs"
                          className={`text-2xl block py-2 ${pathname === '/about/faqs' ? 'text-[#8D9DFF]' : 'text-white'
                            }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          FAQs
                        </Link>
                        {pathname === '/about/faqs' && (
                          <Icon name="star-m.svg" alt="star" size={18} className="ml-2" />
                        )}
                      </div>
                    </div>
                  </MobileExpandableMenu>

                  {/* Services */}
                  <MobileExpandableMenu
                    title="Services"
                    isActive={pathname.startsWith('/services')}
                  >
                    <div className="pl-6 space-y-3">
                      {[
                        { href: '/services', text: 'Services' },
                        { href: '/services/webDesign', text: 'Website Design' },
                        { href: '/services/seo', text: 'SEO' },
                        { href: '/services/ads', text: 'Google PPC Ads' },
                        { href: '/services/socialMedia', text: 'Social Media' }
                      ].map((item) => (
                        <div key={item.href} className="flex items-center justify-between w-full">
                          <Link
                            href={item.href}
                            className={`text-2xl block py-2 ${pathname === item.href ? 'text-[#8D9DFF]' : 'text-white'
                              }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.text}
                          </Link>
                          {pathname === item.href && (
                            <Icon name="star-m.svg" alt="star" size={18} className="ml-2" />
                          )}
                        </div>
                      ))}
                    </div>
                  </MobileExpandableMenu>

                  {/* Forte Solutions */}
                  <MobileExpandableMenu
                    title="Forte Solutions"
                    isActive={pathname.startsWith('/solutions')}
                  >
                    <div className="pl-6 space-y-3">
                      {[
                        { href: '/solutions', text: 'Forte Solutions™' },
                        { href: '/solutions/method', text: 'The Forte Method™' },
                        { href: '/solutions/care', text: 'Forte Care™' },
                        { href: '/solutions/seotool', text: 'Free Forte SiteCheckup™' }
                      ].map((item) => (
                        <div key={item.href} className="flex items-center justify-between w-full">
                          <Link
                            href={item.href}
                            className={`text-2xl block py-2 ${pathname === item.href ? 'text-[#8D9DFF]' : 'text-white'
                              }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.text}
                          </Link>
                          {pathname === item.href && (
                            <Icon name="star-m.svg" alt="star" size={18} className="ml-2" />
                          )}
                        </div>
                      ))}
                    </div>
                  </MobileExpandableMenu>

                  {/* Pricing */}
                  <div className="flex items-center justify-between py-4">
                    <Link
                      href="/pricing"
                      className={`text-3xl font-medium flex items-center gap-3 ps-5 ${pathname === '/pricing' ? 'text-[#8D9DFF]' : 'text-white'
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Pricing
                    </Link>
                    {pathname === '/pricing' && (
                      <Icon name="star-m.svg" alt="star" size={18} folder="shared/icons" />
                    )}
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