var grid = document.getElementById('products-grid')
var logoutBtn = document.getElementById('logout-btn')
var title = document.querySelector('.top-bar h1')

title.innerHTML = 'Mahsulotlar'

logoutBtn.addEventListener('click', function(event) {
  event.preventDefault()

  localStorage.removeItem('token')
  window.location.href = '../index.html'
})

fetch('https://fakestoreapi.com/products')
  .then(function(response) {
    return response.json()
  })
  .then(function(products) {
    grid.innerHTML = ''

    products.forEach(function(product) {
      var { image, title: productTitle, category, rating, price } = product
      var { rate, count } = rating

      var card = document.createElement('div')
      card.className = 'product-card'

      var img = document.createElement('img')
      img.src = image
      img.alt = productTitle
      img.className = 'product-image'

      var categoryEl = document.createElement('div')
      categoryEl.className = 'product-category'
      categoryEl.innerHTML = category

      var titleEl = document.createElement('div')
      titleEl.className = 'product-title'
      titleEl.innerHTML = productTitle

      var ratingEl = document.createElement('div')
      ratingEl.className = 'product-rating'
      ratingEl.innerHTML = '<span>★ ' + rate + '</span><span>(' + count + ')</span>'

      var priceEl = document.createElement('div')
      priceEl.className = 'product-price'
      priceEl.innerHTML = '$' + price.toFixed(2)

      card.appendChild(img)
      card.appendChild(categoryEl)
      card.appendChild(titleEl)
      card.appendChild(ratingEl)
      card.appendChild(priceEl)

      grid.appendChild(card)
    })
  })
  .catch(function(error) {
    console.log(error)
    grid.innerHTML = '<div class="loading">Xatolik yuz berdi!</div>'
  })
