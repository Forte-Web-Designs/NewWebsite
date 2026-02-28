(function () {
    var css = [
        /* Ensure header stays above mobile overlay */
        '.site-header{z-index:200!important}',

        /* Hamburger button — hidden by default, shown on mobile */
        '#hamburger{display:none;flex-direction:column;justify-content:center;align-items:center;gap:5px;width:44px;height:44px;background:transparent;border:1px solid var(--border);border-radius:8px;cursor:pointer;padding:0;flex-shrink:0}',
        '#hamburger span{display:block;width:20px;height:2px;background:var(--text-primary);border-radius:2px;transition:transform 0.25s ease,opacity 0.25s ease}',
        '#hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg)}',
        '#hamburger.open span:nth-child(2){opacity:0}',
        '#hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}',

        /* Mobile nav overlay */
        '#mobile-nav{display:none;position:fixed;top:0;left:0;right:0;bottom:0;z-index:199;background:var(--background);padding:80px 2rem 2rem;overflow-y:auto;flex-direction:column;gap:0}',
        '#mobile-nav.open{display:flex}',
        '#mobile-nav a{display:block;color:var(--text-secondary);font-size:1.1rem;font-weight:500;text-decoration:none;padding:1rem 0;border-bottom:1px solid var(--border);transition:color 0.2s ease}',
        '#mobile-nav a:hover,#mobile-nav a.active{color:var(--text-primary)}',
        '#mobile-nav a:last-child{border-bottom:none}',

        /* Show hamburger, hide desktop nav on mobile */
        '@media(max-width:768px){',
        '#hamburger{display:flex!important}',
        '.header-nav{display:none!important}',
        '}'
    ].join('');

    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    /* Create hamburger button */
    var btn = document.createElement('button');
    btn.id = 'hamburger';
    btn.setAttribute('aria-label', 'Toggle menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span></span><span></span><span></span>';

    /* Create mobile nav overlay */
    var overlay = document.createElement('div');
    overlay.id = 'mobile-nav';
    overlay.setAttribute('aria-hidden', 'true');

    /* Copy links from desktop nav */
    var desktopNav = document.querySelector('.header-nav');
    if (desktopNav) {
        var links = desktopNav.querySelectorAll('a');
        links.forEach(function (link) {
            var a = document.createElement('a');
            a.href = link.href;
            a.textContent = link.textContent;
            if (link.classList.contains('active')) a.classList.add('active');
            a.addEventListener('click', closeMenu);
            overlay.appendChild(a);
        });
    }

    /* Insert button into header, overlay into body */
    var headerContainer = document.querySelector('.header-container');
    if (headerContainer) headerContainer.appendChild(btn);
    document.body.appendChild(overlay);

    function openMenu() {
        btn.classList.add('open');
        overlay.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        btn.classList.remove('open');
        overlay.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    btn.addEventListener('click', function () {
        if (btn.classList.contains('open')) closeMenu();
        else openMenu();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
    });
})();
