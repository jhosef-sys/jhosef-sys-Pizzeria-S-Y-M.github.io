document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.blog-carousel');
  if (!carousel) return;

  const cards = Array.from(carousel.querySelectorAll('.blog-card'));
  const status = carousel.querySelector('.blog-carousel__status');
  const buttons = carousel.querySelectorAll('.blog-carousel__button');
  const stage = carousel.querySelector('.blog-carousel__stage');
  let activeIndex = 0;
  let touchStartX = null;

  const render = () => {
    cards.forEach((card, index) => {
      const offset = (index - activeIndex + cards.length + Math.floor(cards.length / 2)) % cards.length
        - Math.floor(cards.length / 2);
      const visible = Math.abs(offset) <= 2;
      const active = offset === 0;
      const side = Math.abs(offset) === 1;
      const translate = offset * (side ? 76 : 122);
      const scale = active ? 1 : side ? 0.82 : 0.68;
      const rotation = active ? 0 : offset < 0 ? 28 : -28;

      card.classList.toggle('is-active', active);
      card.classList.toggle('is-neighbor', side);
      card.style.visibility = visible ? 'visible' : 'hidden';
      card.style.opacity = visible ? (active ? '1' : side ? '0.72' : '0.28') : '0';
      card.style.zIndex = String(cards.length - Math.abs(offset));
      card.style.transform = `translateX(calc(-50% + ${translate}%)) translateZ(${active ? 0 : -Math.abs(offset) * 55}px) rotateY(${rotation}deg) scale(${scale})`;
      card.setAttribute('aria-hidden', String(!active));
      card.setAttribute('aria-label', `${index + 1} de ${cards.length}`);
    });

    status.textContent = `${activeIndex + 1} / ${cards.length}`;
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const direction = Number(button.dataset.direction);
      activeIndex = (activeIndex + direction + cards.length) % cards.length;
      render();
    });
  });

  stage.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'touch') touchStartX = event.clientX;
  });

  stage.addEventListener('pointerup', (event) => {
    if (touchStartX === null) return;
    const distance = event.clientX - touchStartX;
    touchStartX = null;
    if (Math.abs(distance) < 45) return;
    activeIndex = (activeIndex + (distance < 0 ? 1 : -1) + cards.length) % cards.length;
    render();
  });

  stage.addEventListener('pointercancel', () => {
    touchStartX = null;
  });

  render();
});
