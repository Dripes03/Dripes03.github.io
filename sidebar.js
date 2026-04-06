(function () {
    const html = `
<!-- MOBILE TOPBAR -->
<header class="mobile-topbar">
    <div>
        <p class="mobile-topbar-name">Erik Svensson</p>
        <p class="mobile-topbar-role">Technical Artist</p>
    </div>
    <button class="hamburger-btn" id="hamburgerBtn" aria-label="Open menu">
        <span></span><span></span><span></span>
    </button>
</header>

<!-- DRAWER OVERLAY -->
<div class="drawer-overlay" id="drawerOverlay"></div>

<!-- SLIDE-IN DRAWER -->
<nav class="drawer" id="drawer">
    <div class="drawer-top">
        <div>
            <p class="drawer-name">Erik<br>Svensson</p>
            <p class="drawer-role">Technical Artist</p>
        </div>
        <button class="drawer-close" id="drawerClose" aria-label="Close menu">✕</button>
    </div>
    <p class="drawer-desc">Shaders, VFX, real-time rendering, and pipeline tools for games and interactive media.</p>
    <ul class="drawer-nav">
        <li><a href="index.html#portfolio"><span class="sidebar-nav-num">01</span> Portfolio</a></li>
        <li><a href="index.html#previousgames"><span class="sidebar-nav-num">02</span> Previous Games</a></li>
        <li><a href="index.html#previous"><span class="sidebar-nav-num">03</span> Previous Work</a></li>
        <li><a href="index.html#about"><span class="sidebar-nav-num">04</span> About</a></li>
    </ul>
    <div class="drawer-bottom">
        <p class="drawer-social-label">Connect</p>
        <div class="drawer-socials">
            <a href="mailto:your.email@example.com">Email <span>↗</span></a>
            <a href="https://linkedin.com" target="_blank">LinkedIn <span>↗</span></a>
            <a href="https://artstation.com" target="_blank">ArtStation <span>↗</span></a>
            <a href="https://github.com" target="_blank">GitHub <span>↗</span></a>
        </div>
        <a href="mailto:your.email@example.com" class="drawer-cta">Get in Touch</a>
    </div>
</nav>

<!-- FIXED SIDEBAR -->
<aside class="sidebar">
    <div>
        <p class="sidebar-name">Erik<br>Svensson</p>
        <p class="sidebar-role">Technical Artist</p>
        <p class="sidebar-desc">Shaders, VFX, real-time rendering, and pipeline tools for games and interactive media.</p>
    </div>

    <nav>
        <ul class="sidebar-nav">
            <li><a href="index.html#portfolio"><span class="sidebar-nav-num">01</span> Portfolio</a></li>
            <li><a href="index.html#previousgames"><span class="sidebar-nav-num">02</span> Previous Games</a></li>
            <li><a href="index.html#previous"><span class="sidebar-nav-num">03</span> Previous Work</a></li>
            <li><a href="index.html#about"><span class="sidebar-nav-num">04</span> About</a></li>
        </ul>
    </nav>

    <div class="sidebar-bottom" id="contact">
        <p class="sidebar-social-label">Connect</p>
        <div class="sidebar-socials">
            <a href="mailto:your.email@example.com">Email <span>↗</span></a>
            <a href="https://linkedin.com" target="_blank">LinkedIn <span>↗</span></a>
            <a href="https://artstation.com" target="_blank">ArtStation <span>↗</span></a>
            <a href="https://github.com" target="_blank">GitHub <span>↗</span></a>
        </div>
        <a href="mailto:your.email@example.com" class="sidebar-cta">Get in Touch</a>
    </div>
</aside>`;

    document.currentScript.insertAdjacentHTML('beforebegin', html);
})();
