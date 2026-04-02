/* ── DRAWER ── */
const btn      = document.getElementById('hamburgerBtn');
const drawer   = document.getElementById('drawer');
const overlay  = document.getElementById('drawerOverlay');
const closeBtn = document.getElementById('drawerClose');

function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    btn.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    btn.classList.remove('open');
    document.body.style.overflow = '';
}

if (btn)      btn.addEventListener('click', openDrawer);
if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
if (overlay)  overlay.addEventListener('click', closeDrawer);

document.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
});

/* ── LIGHTBOX ── */
const lightbox      = document.getElementById('lightbox');
const lightboxInner = document.getElementById('lightboxInner');
const lightboxClose = document.getElementById('lightboxClose');

if (lightbox) {
    function openLightbox(el) {
        lightboxInner.innerHTML = '';

        const isVideo = el.tagName.toLowerCase() === 'video';
        let media;
        if (isVideo) {
            media = document.createElement('video');
            media.src = el.src || el.querySelector('source')?.src;
            media.autoplay = true;
            media.loop = true;
            media.muted = true;
            media.playsInline = true;
            media.controls = true;
        } else {
            media = document.createElement('img');
            media.src = el.src;
            media.alt = el.alt || '';
        }
        lightboxInner.appendChild(media);

        // Pull caption from sibling .media-caption if present
        const caption = el.closest('.media-item')?.querySelector('.media-caption')?.textContent;
        if (caption) {
            const cap = document.createElement('p');
            cap.className = 'lightbox-caption';
            cap.textContent = caption;
            lightboxInner.appendChild(cap);
        }

        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('open');
        lightboxInner.innerHTML = '';
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.media-item img, .media-item video').forEach(el => {
        el.addEventListener('click', () => openLightbox(el));
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
}
