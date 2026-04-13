const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const mainContent = document.getElementById('main-content');
const header = document.querySelector('header');

// Lightbox functions
function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.style.display = 'flex';
  if (mainContent) {
    mainContent.classList.add('blur');
  }
}

function closeLightbox() {
  lightbox.style.display = 'none';
  if (mainContent) {
    mainContent.classList.remove('blur');
  }
}

// Navbar scroll blur
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});