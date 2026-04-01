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
