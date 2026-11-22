document.addEventListener('DOMContentLoaded', () => {
  const catalog = document.getElementById('catalogo');

  const cards = [
    {
      emoji: '🍕',
      tag: 'Promo',
      title: '3 muzzas',
      description: '3 pizzas + 1 lata de cerveza de 710 o 1 pepsi de regalo a elección.',
      price: '$32.000',
      unitPrice: '$12.000',
      list: ['3 pizzas', '1 lata de cerveza 710 o pepsi', 'a elección'],
      accent: 'product-card--accent',
      href: 'https://wa.me/5491156386563?text=Hola%20me%20interesa%20la%20promo%20de%203%20muzzas%20con%20lata%20o%20pepsi%20a%20elecci%C3%B3n'
    },
    {
      emoji: '🥟',
      tag: 'Empanadas',
      title: 'Docena',
      description: 'La opción perfecta para arrancar o compartir.',
      price: '$20.000',
      unitPrice: '$1.800',
      list: ['Docena completa', 'Ideal para reuniones'],
      accent: 'product-card--blue',
      href: 'https://wa.me/5491123491361?text=Hola%20me%20interesa%20la%20docena%20de%20empanadas'
    },
    {
      emoji: '🥟',
      tag: 'Empanadas',
      title: 'Media docena',
      description: 'Perfecta para una merienda o para acompañar la pizza.',
      price: '$10.000',
      unitPrice: '$1.800',
      list: ['Media docena', 'Mucho sabor'],
      accent: 'product-card--green',
      href: 'https://wa.me/5491123491361?text=Hola%20me%20interesa%20la%20media%20docena%20de%20empanadas'
    }
  ];
  
if (catalog) {
    cards.forEach((card) => {
      const article = document.createElement('article');
      article.className = `product-card ${card.accent}`;
      article.innerHTML = `
        <div class="product-card__top">
          <span class="product-emoji">${card.emoji}</span>
          <span class="product-tag">${card.tag}</span>
        </div>
        <div class="product-card__body">
          <h3>${card.title}</h3>
          <p>${card.description}</p>
          <span class="product-price">${card.price}</span>
          <div class="product-unit-price">
            <span class="product-unit-label">Precio por unidad</span>
            <strong>${card.unitPrice}</strong>
          </div>
          <ul class="product-list">
            ${card.list.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <div class="product-card__footer">
          <a class="product-button" href="${card.href}" target="_blank" rel="noopener noreferrer">Pedir</a>
        </div>
      `;
      catalog.appendChild(article);
    });

    const paymentPromo = document.createElement('aside');
    paymentPromo.className = 'product-payment-pair';
    paymentPromo.innerHTML = `
      <div class="product-payment-item">
        <h3>Alias para transferencias</h3>
        <img src="img/Alias.jpg" alt="Alias para transferencias: mili.zamudio2020" class="product-alias-image">
      </div>
      <div class="product-payment-item product-payment-item--promo">
        <h3>Promo familiar</h3>
        <img src="img/promo-napolitana.png" alt="Pizza napolitana familiar con papas fritas y Pepsi de 2 litros por $35.000" class="product-promo-image">
      </div>
    `;
    catalog.appendChild(paymentPromo);
  }

});
