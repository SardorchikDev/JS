const products = [
  { id: 1, name: "Olma", price: 5000, icon: "nf-md-apple" },
  { id: 2, name: "Non", price: 3000, icon: "nf-md-bread_slice" },
  { id: 3, name: "Sut", price: 8000, icon: "nf-md-glass_mug" },
  { id: 4, name: "Go'sht", price: 45000, icon: "nf-md-drumstick" },
  { id: 5, name: "Sabzi", price: 4000, icon: "nf-md-carrot" },
  { id: 6, name: "Baliq", price: 35000, icon: "nf-md-fish" }
];

let cart = [];

function formatPrice(price) {
  return price.toLocaleString("uz-UZ") + " so'm";
}

function renderProducts() {
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = products
    .map(
      (p) => `
    <div class="product-card">
      <div class="product-icon"><i class="nf ${p.icon}"></i></div>
      <div class="product-name">${p.name}</div>
      <div class="product-price">${formatPrice(p.price)}</div>
      <button class="btn-add" data-id="${p.id}">Qo'shish</button>
    </div>
  `
    )
    .join("");
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  renderCart();
}

function renderCart() {
  const cartEl = document.getElementById("cartItems");
  const totalEl = document.getElementById("totalPrice");

  if (cart.length === 0) {
    cartEl.innerHTML = '<p class="empty-cart">Savatcha bo\'sh</p>';
    totalEl.textContent = "0 so'm";
    return;
  }

  let total = 0;

  cartEl.innerHTML = cart
    .map((item) => {
      const itemTotal = item.price * item.qty;
      total += itemTotal;
      return `
      <div class="cart-item">
        <span class="cart-item-name"><i class="nf ${item.icon}"></i> ${item.name}</span>
        <span class="cart-item-price">${formatPrice(itemTotal)}</span>
        <button class="remove-btn" data-remove-id="${item.id}">x</button>
      </div>
    `;
    })
    .join("");

  totalEl.textContent = formatPrice(total);
}

// Event delegation
document.getElementById("productsGrid").addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-add");
  if (btn) {
    addToCart(parseInt(btn.dataset.id, 10));
  }
});

document.getElementById("cartItems").addEventListener("click", (e) => {
  const removeBtn = e.target.closest(".remove-btn");
  if (removeBtn) {
    removeFromCart(parseInt(removeBtn.dataset.removeId, 10));
  }
});

renderProducts();
renderCart();
