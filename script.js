const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', function () {
  const term = this.value.toLowerCase();
  cards.forEach(card => {
    const keywords = card.dataset.keywords;
    card.style.display = keywords.includes(term) ? '' : 'none';
  });
});
