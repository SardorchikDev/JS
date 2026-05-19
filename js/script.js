var form = document.getElementById('login-form')

form.addEventListener('submit', function(event) {
  event.preventDefault()

  var username = document.getElementById('username').value
  var password = document.getElementById('password').value
  var btn = document.querySelector('#login-form button')

  btn.disabled = true
  btn.innerHTML = 'Tekshirilmoqda...'

  fetch('https://fakestoreapi.com/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    if (data.token) {
      localStorage.setItem('token', data.token)

      Toastify({
        text: "Xush kelibsiz! O'rik Market ga kirdingiz ",
        duration: 3000,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #ff9a56, #fcb69f)"
        }
      }).showToast()
    } else {
      Toastify({
        text: "Username yoki password xato!",
        duration: 3000,
        gravity: "bottom",
        position: "center",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #e74c3c, #c0392b)"
        }
      }).showToast()
    }

    btn.disabled = false
    btn.innerHTML = 'Kirish'
  })
  .catch(function(error) {
    console.log(error)

    Toastify({
      text: "Internetda xatolik bor!",
      duration: 3000,
      gravity: "bottom",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #e74c3c, #c0392b)"
      }
    }).showToast()

    btn.disabled = false
    btn.innerHTML = 'Kirish'
  })
})
