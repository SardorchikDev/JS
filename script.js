axios.get('https://fakestoreapi.com/products')
  .then(response => {
    const data = response.data;
    const container = document.getElementById("products");
    data.forEach((product) => {
      const { id, title, price, description, category, image } = product;
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${image}" alt="${title}">
        <h3>${title}</h3>
        <p class="category">${category}</p>
        <p class="price">$${price}</p>
        <p class="description">${description}</p>
      `;
      container.appendChild(card);
    });
  });
