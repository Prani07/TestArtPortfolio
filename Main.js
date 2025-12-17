// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
document.querySelectorAll('.art-card img').forEach(img => {
  img.addEventListener('click', () => {
    if (!lightbox || !lightboxImg) return;
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || 'Enlarged Art';
  });
});
if (lightbox) {
  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
}

// Filters
function applyFilter(category) {
  document.querySelectorAll('.art-card').forEach(card => {
    const match = category === 'all' || card.dataset.category === category;
    card.style.display = match ? 'block' : 'none';
  });
}
document.querySelectorAll('.filters button').forEach(btn => {
  btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
});

// Search
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase();
    document.querySelectorAll('.art-card').forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(q) ? 'block' : 'none';
    });
  });
}
