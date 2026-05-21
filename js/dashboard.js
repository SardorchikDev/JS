const apiUrl = 'https://fakestoreapi.com/products'

let allProducts = []

function init() {
  const token = localStorage.getItem('token')
  if (token == null) {
    window.location.href = '../index.html'
    return
  }

  setupLogout()
  loadProducts()
}

function setupLogout() {
  const btn = document.getElementById('logout-btn')
  btn.addEventListener('click', function() {
    localStorage.removeItem('token')
    window.location.href = '../index.html'
  })
}

function loadProducts() {
  const title = document.querySelector('.top-bar h1')
  title.innerHTML = 'Mahsulotlar'

  fetch(apiUrl)
    .then(function(res) {
      return res.json()
    })
    .then(function(products) {
      allProducts = products
      renderProducts(products)
    })
    .catch(function(err) {
      console.log(err)
      const grid = document.getElementById('products-grid')
      grid.innerHTML = '<div class="loading">Xatolik yuz berdi!</div>'
    })
}

function renderProducts(products) {
  const grid = document.getElementById('products-grid')
  grid.innerHTML = ''

  products.forEach(function(product) {
    const card = document.createElement('div')
    card.className = 'product-card'

    const img = document.createElement('img')
    img.src = product.image
    img.alt = product.title
    img.className = 'product-image'

    const category = document.createElement('div')
    category.className = 'product-category'
    category.innerHTML = product.category

    const title = document.createElement('div')
    title.className = 'product-title'
    title.innerHTML = product.title

    const rating = document.createElement('div')
    rating.className = 'product-rating'
    rating.innerHTML = '<span>★ ' + product.rating.rate + '</span><span>(' + product.rating.count + ')</span>'

    const price = document.createElement('div')
    price.className = 'product-price'
    price.innerHTML = '$' + product.price.toFixed(2)

    card.appendChild(img)
    card.appendChild(category)
    card.appendChild(title)
    card.appendChild(rating)
    card.appendChild(price)

    grid.appendChild(card)
  })
}

document.addEventListener('DOMContentLoaded', init)
