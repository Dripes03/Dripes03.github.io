// ---------- IMAGE LIGHTBOX ----------

const lightbox = document.getElementById("image-lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

function closeLightbox() {
    lightbox.classList.add("hidden");
    lightboxImg.src = "";
    document.body.classList.remove("no-scroll");
}

// Only run if lightbox exists on page
if (lightbox) {

    document.querySelectorAll("img.previewable").forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.dataset.full || img.src;
            lightbox.classList.remove("hidden");
            document.body.classList.add("no-scroll");
        });
    });

    closeBtn.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") closeLightbox();
    });
}