document.addEventListener('DOMContentLoaded', () => {
  // Leer el contador
  let reviewCount = localStorage.getItem('reviewCount');

  if (!reviewCount) {
    reviewCount = 0;
  }

  reviewCount++;

  // Guardar el nuevo contador
  localStorage.setItem('reviewCount', reviewCount);

  // Mostrar el contador en la página
  document.getElementById('review-count').textContent = reviewCount;
});