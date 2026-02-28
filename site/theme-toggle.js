(function() {
    var lightCSS = ':root[data-theme="light"]{' +
        '--text-primary:#2D2D3F;--text-secondary:#4a5568;--text-muted:#718096;' +
        '--accent:#0070b8;--accent-warm:#0099f0;--background:#f8fafd;' +
        '--background-alt:#eef3f9;--border:#d4dce8;--card-bg:#fff}' +
        '[data-theme="light"] #scroll-top-btn{background:#fff;border-color:#d4dce8;color:#718096;box-shadow:0 2px 8px rgba(0,0,0,0.1)}' +
        '[data-theme="light"] #scroll-top-btn:hover{background:#0070b8;color:#fff;border-color:#0070b8}' +
        '[data-theme="light"] #sticky-cta-bar{background:#fff;border-top-color:#d4dce8;box-shadow:0 -2px 12px rgba(0,0,0,0.08)}' +
        '[data-theme="light"] #sticky-cta-link{background:#0070b8}' +
        '[data-theme="light"] .site-header{background:#f8fafd;border-bottom-color:#d4dce8}' +
        '[data-theme="light"] body{background-image:radial-gradient(ellipse at 20% 0%,rgba(0,112,184,0.04) 0%,transparent 50%),radial-gradient(ellipse at 80% 100%,rgba(0,136,219,0.03) 0%,transparent 50%)}';

    var toggleCSS = '#theme-toggle{width:36px;height:36px;border-radius:50%;border:1px solid #1e2a3a;background:#172030;color:#94a3b8;font-size:1rem;cursor:pointer;z-index:1001;display:flex;align-items:center;justify-content:center;transition:background 0.2s ease,color 0.2s ease,border-color 0.2s ease;box-shadow:0 2px 8px rgba(0,0,0,0.3);line-height:1;flex-shrink:0;margin-left:1rem}' +
        '#theme-toggle.scrolled{position:fixed;top:auto;bottom:8.5rem;right:2rem;margin-left:0}' +
        '#theme-toggle:hover{background:#0088DB;color:#fff;border-color:#0088DB}' +
        '[data-theme="light"] #theme-toggle{background:#fff;border-color:#d4dce8;color:#718096}' +
        '[data-theme="light"] #theme-toggle:hover{background:#0070b8;color:#fff;border-color:#0070b8}' +
        '@media(max-width:600px){#theme-toggle{width:34px;height:34px;font-size:0.95rem}#theme-toggle.scrolled{right:1.25rem;bottom:8rem}}';

    var style = document.createElement('style');
    style.textContent = lightCSS + toggleCSS;
    document.head.appendChild(style);

    var toggle = document.createElement('button');
    toggle.id = 'theme-toggle';
    toggle.setAttribute('aria-label', 'Toggle light/dark mode');

    var headerContainer = document.querySelector('.header-container');
    if (headerContainer) {
        headerContainer.appendChild(toggle);
    } else {
        document.body.appendChild(toggle);
    }

    var saved = localStorage.getItem('theme');
    applyTheme(saved || 'dark');

    function applyTheme(t) {
        document.documentElement.setAttribute('data-theme', t);
        toggle.innerHTML = t === 'dark' ? '\u263C' : '\u263D';
        localStorage.setItem('theme', t);
    }

    toggle.addEventListener('click', function() {
        var current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });

    var isScrolled = false;
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            if (!isScrolled) {
                isScrolled = true;
                toggle.classList.add('scrolled');
                document.body.appendChild(toggle);
            }
        } else {
            if (isScrolled) {
                isScrolled = false;
                toggle.classList.remove('scrolled');
                if (headerContainer) headerContainer.appendChild(toggle);
            }
        }
    });

    // Active nav link
    var path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.header-nav a').forEach(function(a) {
        var href = a.getAttribute('href').split('/').pop() || 'index.html';
        if (href === path) a.classList.add('active');
    });
})();
