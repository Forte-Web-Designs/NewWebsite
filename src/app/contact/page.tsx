import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import { CONTACT_INFO } from '@/constants/contact';

export const metadata: Metadata = {
  title: 'Contact | Forte Web Designs',
  description: "Tell us about your business and what you're trying to solve. We'll show you what's possible.",
};

export default function Contact() {
  return (
    <div className="bg-white dark:bg-gray-950">

      {/* Netlify hidden forms */}
      <form name="email-capture" data-netlify="true" style={{ display: 'none' }}>
        <input name="email" type="email" />
        <input name="source" type="text" />
      </form>
      <form name="newsletter-signup" data-netlify="true" style={{ display: 'none' }}>
        <input name="email" type="email" />
        <input name="source" type="text" />
        <input name="timestamp" type="text" />
      </form>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.12),transparent)]"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-8">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full ring-2 ring-blue-100 dark:ring-blue-900">
              <OptimizedImage
                src="/images/about/headshot-6.jpg"
                alt="Seth Forte"
                width={64}
                height={64}
                className="h-full w-full object-cover"
                sizes="64px"
                priority
              />
            </div>
          </div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Get in touch
          </p>
          <h1 className="mb-5 font-bold tracking-tight text-gray-900 dark:text-white text-5xl sm:text-6xl leading-[1.06]">
            Let's Talk
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-500 dark:text-gray-400 sm:text-lg">
            Book a call or send a message. Just tell us what's not working.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ──────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl flex flex-col gap-14">

          {/* Video */}
          <div>
            <div className="mb-5">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                See what we build
              </h2>
              <p className="text-base text-gray-500 dark:text-gray-400">
                A quick look at how we approach automation, systems, and growth for small businesses.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl bg-gray-900 shadow-xl">
              <video controls className="w-full">
                <source
                  src="/video-walkthroughs/Business Growth Systems & AI Automation | Forte (DFW) - 26 October 2025.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Calendly */}
          <div>
            <div className="mb-5">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                Book a call directly
              </h2>
              <p className="text-base text-gray-500 dark:text-gray-400">
                Skip the back-and-forth. Pick a time and we'll talk through your situation live.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <iframe
                src="https://calendly.com/seth-fortewebdesigns/30min"
                width="100%"
                height="700"
                frameBorder="0"
                title="Schedule a call with Forte"
                className="w-full"
              />
            </div>
          </div>

          {/* Contact form */}
          <div>
            <div className="mb-5">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                Send a message
              </h2>
              <p className="text-base text-gray-500 dark:text-gray-400">
                Prefer email? Describe your situation and we'll get back to you within one business day.
              </p>
            </div>
            <ContactForm />
          </div>

        </div>
      </section>

      {/* ── CONTACT INFO ──────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:justify-center sm:text-left">

            <a
              href={CONTACT_INFO.emailHref}
              className="group flex flex-col items-center gap-1 sm:items-start"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Email
              </p>
              <span className="flex items-center gap-2 text-base font-semibold text-blue-600 transition-colors group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                {CONTACT_INFO.email}
              </span>
            </a>

            <div className="hidden h-8 w-px bg-gray-200 dark:bg-gray-700 sm:block" />

            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 sm:items-start"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                LinkedIn
              </p>
              <span className="flex items-center gap-2 text-base font-semibold text-blue-600 transition-colors group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                Connect on LinkedIn
              </span>
            </a>

            <div className="hidden h-8 w-px bg-gray-200 dark:bg-gray-700 sm:block" />

            <div className="flex flex-col items-center gap-1 sm:items-start">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Location
              </p>
              <p className="text-base font-semibold text-gray-700 dark:text-gray-300">
                Grapevine, TX - working everywhere
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
