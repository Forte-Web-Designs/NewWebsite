import Link from 'next/link';
import { CONTACT_INFO } from '../../constants/contact';

const SERVICES = [
  { text: 'Foundation', href: '/services/foundation' },
  { text: 'Launch', href: '/services/launch' },
  { text: 'Growth', href: '/services/growth' },
  { text: 'Scale', href: '/services/scale' },
  { text: 'Infrastructure Review', href: '/services/infrastructure-review' },
];

const COMPANY = [
  { text: 'About', href: '/about' },
  { text: 'Work', href: '/case-studies' },
  { text: 'Writing', href: '/blog' },
  { text: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="inline-block mb-3">
              <img
                src="/images/home/logo-header-light.svg"
                alt="Forte Web Designs"
                className="h-8 block dark:hidden"
              />
              <img
                src="/images/home/logo-dark.svg"
                alt="Forte Web Designs"
                className="h-8 hidden dark:block"
              />
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Based in Grapevine, TX.<br />Serving clients nationwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
              Company
            </h3>
            <ul className="space-y-2">
              {COMPANY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.emailHref}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
            © {new Date().getFullYear()} Seth Forte. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
