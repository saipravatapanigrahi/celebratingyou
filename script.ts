document.addEventListener('DOMContentLoaded', function () {
  const container = document.body;
  for (let i = 0; i < 8; i++) {
    const firefly = document.createElement('div');
    firefly.className = 'firefly';
    firefly.style.top = Math.random() * 100 + '%';
    firefly.style.left = Math.random() * 100 + '%';
    firefly.style.animationDelay = Math.random() * 10 + 's';
    firefly.style.animationDuration = (Math.random() * 10 + 10) + 's';
    container.appendChild(firefly);
  }
});
