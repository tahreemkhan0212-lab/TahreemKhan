// Smooth scroll for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Flip contact cards on click (for mobile users)
const cards = document.querySelectorAll('.contact-card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
    card.querySelector('.front').style.transform = 'rotateY(180deg)';
    card.querySelector('.back').style.transform = 'rotateY(360deg)';
  });
});