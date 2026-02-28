/* ============================================================
   Forte Web Designs — main.js
   ============================================================ */

(function () {
  'use strict';

  /* ── Theme ─────────────────────────────────────────────────── */
  const html = document.documentElement;
  const THEME_KEY = 'forte-theme';

  function getTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(t) {
    html.classList.toggle('dark', t === 'dark');
    // Update all toggle button icons
    document.querySelectorAll('[data-theme-btn]').forEach(updateThemeIcon);
  }

  function toggleTheme() {
    const next = html.classList.contains('dark') ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }

  function updateThemeIcon(btn) {
    const isDark = html.classList.contains('dark');
    btn.innerHTML = isDark ? sunIcon() : moonIcon();
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  function moonIcon() {
    return `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
    </svg>`;
  }
  function sunIcon() {
    return `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 3v1M12 20v1M3 12H2M22 12h-1M5.636 5.636l-.707-.707M19.071 19.071l-.707-.707M5.636 18.364l-.707.707M19.071 4.929l-.707.707"/>
    </svg>`;
  }

  // Apply on load immediately (before DOM ready to avoid flash)
  applyTheme(getTheme());

  /* ── DOM Ready ──────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {

    /* ── Theme buttons ─────────────────────────────────────── */
    document.querySelectorAll('[data-theme-btn]').forEach(function (btn) {
      updateThemeIcon(btn);
      btn.addEventListener('click', toggleTheme);
    });

    /* ── Mobile menu ───────────────────────────────────────── */
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    if (hamburger && mobileNav) {
      hamburger.addEventListener('click', function () {
        const open = mobileNav.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', open);
      });
      // Close on nav link click
      mobileNav.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          mobileNav.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
        });
      });
    }

    /* ── Active nav link ───────────────────────────────────── */
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(function (a) {
      const href = a.getAttribute('href').replace(/\/$/, '') || '/';
      if (href === path) a.classList.add('active');
    });

    /* ── Scroll behaviors ──────────────────────────────────── */
    const headerThemeBtn = document.getElementById('header-theme-btn');
    const floatingBtns = document.getElementById('floating-btns');
    const SCROLL_THRESHOLD = 300;

    function onScroll() {
      const scrolled = window.scrollY > SCROLL_THRESHOLD;
      // Header theme toggle: visible at top, hidden when scrolled
      if (headerThemeBtn) {
        headerThemeBtn.classList.toggle('hidden', scrolled);
      }
      // Floating buttons: hidden at top, visible when scrolled
      if (floatingBtns) {
        floatingBtns.classList.toggle('visible', scrolled);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load

    /* ── Scroll to top ─────────────────────────────────────── */
    const scrollTopBtn = document.getElementById('float-scroll-top');
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    /* ── Rotating hero word ────────────────────────────────── */
    const rotatingWord = document.getElementById('rotating-word');
    if (rotatingWord) {
      const words = ['A System', 'The Right Data', 'A Framework', 'A Process', 'Execution'];
      let idx = 0;
      setInterval(function () {
        rotatingWord.style.opacity = '0';
        setTimeout(function () {
          idx = (idx + 1) % words.length;
          rotatingWord.textContent = words[idx];
          rotatingWord.style.opacity = '1';
        }, 300);
      }, 2500);
    }

    /* ── Scroll reveal ─────────────────────────────────────── */
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      reveals.forEach(function (el) { observer.observe(el); });
    } else {
      // Fallback: show everything
      reveals.forEach(function (el) { el.classList.add('visible'); });
    }

    /* ── Contact form ──────────────────────────────────────── */
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const data = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('[type="submit"]');
        const successMsg = document.getElementById('form-success');

        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(data).toString(),
        })
          .then(function (res) {
            if (res.ok) {
              contactForm.reset();
              if (successMsg) successMsg.style.display = 'block';
              submitBtn.textContent = 'Sent!';
            } else {
              throw new Error('Network response not ok');
            }
          })
          .catch(function () {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
            alert('Something went wrong. Please email seth@fortewebdesigns.com directly.');
          });
      });
    }

    /* ── FAQ accordion ─────────────────────────────────────── */
    document.querySelectorAll('.faq-question').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const item = btn.closest('.faq-item');
        const open = item.classList.toggle('open');
        btn.setAttribute('aria-expanded', open);
      });
    });

  }); // end DOMContentLoaded

})();
