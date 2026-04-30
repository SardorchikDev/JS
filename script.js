//1
let counter = document.getElementById('counter');
let visitCount = localStorage.getItem('visitCount');
if (visitCount == null) {
    visitCount = 1;
} else {
    visitCount = parseInt(visitCount) + 1;
}
localStorage.setItem('visitCount', visitCount);
counter.textContent = 'Kirish: ' + visitCount;

//2
let themeButton = document.getElementById('themeButton');
let body = document.body;
let theme = localStorage.getItem('theme');
if (theme == 'dark') {
    body.classList.add('dark');
}
themeButton.addEventListener('click', function() {
    body.classList.toggle('dark');
    theme = body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

//3
let name = sessionStorage.getItem('name');
if (!name) {
    name = prompt('Ismingizni kiriting:');
    sessionStorage.setItem('name', name);
}
document.getElementById('welcome').textContent = 'Salamalekum , ' + name;

//4
let textarea = document.getElementById('textarea');
textarea.value = localStorage.getItem('text') || '';
textarea.addEventListener('input', function() {
    localStorage.setItem('text', textarea.value);
});

//5
let langUz = document.getElementById('langUz');
let langEn = document.getElementById('langEn');
let greeting = document.getElementById('greeting');
let lang = localStorage.getItem('lang') || 'uz';
if (lang == 'en') {
    greeting.textContent = 'Hello';
} else {
    greeting.textContent = 'Salom';
}
langUz.addEventListener('click', function() {
    greeting.textContent = 'Salom';
    localStorage.setItem('lang', 'uz');
});
langEn.addEventListener('click', function() {
    greeting.textContent = 'Hello';
    localStorage.setItem('lang', 'en');
});

//6
let likeButton = document.getElementById('likeButton');
let liked = sessionStorage.getItem('liked') == 'true';
if (liked) {
    likeButton.classList.add('liked');
}
likeButton.addEventListener('click', function() {
    liked = !liked;
    if (liked) {
        likeButton.classList.add('liked');
    } else {
        likeButton.classList.remove('liked');
    }
    sessionStorage.setItem('liked', liked);
});

//7
let age = localStorage.getItem('age');
if (!age) {
    age = prompt('Yoshingizni kiriting:');
    localStorage.setItem('age', age);
}
if (age >= 18) {
    document.getElementById('ageDisplay').textContent = 'Ruxsat berildi';
} else {
    document.getElementById('ageDisplay').textContent = 'Ruxsat berilmadi';
}

//8
let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
if (cart.length === 0) {
    for (let i = 0; i < 3; i++) {
        let product = prompt(`Mahsulot ${i+1} nomini kiriting:`);
        cart.push(product);
    }
    sessionStorage.setItem('cart', JSON.stringify(cart));
}
let cartList = document.getElementById('cartList');
cart.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    cartList.appendChild(li);
});

//9
let fontSize = localStorage.getItem('fontSize');
if (!fontSize) {
    fontSize = prompt('Shrift o\'lchamini px da kiriting (masalan 20):');
    localStorage.setItem('fontSize', fontSize);
}
document.body.style.fontSize = fontSize + 'px';

//10
let lastVisit = localStorage.getItem('lastVisit');
let now = new Date();
let currentTime = now.getHours() + ':' + now.getMinutes();
localStorage.setItem('lastVisit', currentTime);
if (lastVisit) {
    document.getElementById('lastVisit').textContent = 'Siz oxirgi marta ' + lastVisit + ' da kirdingiz';
}

//11
let login = localStorage.getItem('login');
if (!login) {
    login = prompt('Login kiriting:');
    localStorage.setItem('login', login);
}
let password = sessionStorage.getItem('password');
if (!password) {
    password = prompt('Parol kiriting:');
    sessionStorage.setItem('password', password);
}

//12
let randomNumber = sessionStorage.getItem('randomNumber');
if (!randomNumber) {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    sessionStorage.setItem('randomNumber', randomNumber);
}
document.getElementById('randomNumber').textContent = 'Tasodifiy son: ' + randomNumber;

//13
let books = JSON.parse(localStorage.getItem('books'));
if (!books) {
    books = {};
    for (let i = 1; i <= 3; i++) {
        books['book' + i] = prompt(`Kitob ${i} nomini kiriting:`);
    }
    localStorage.setItem('books', JSON.stringify(books));
}
let booksList = document.getElementById('booksList');
for (let key in books) {
    let li = document.createElement('li');
    li.textContent = books[key];
    booksList.appendChild(li);
}

//14
let hasVisited = localStorage.getItem('hasVisited');
if (!hasVisited) {
    document.getElementById('greetingMessage').textContent = 'Xush kelibsiz!';
    localStorage.setItem('hasVisited', 'true');
} else {
    document.getElementById('greetingMessage').textContent = 'Sizni yana ko\'rganimizdan xursandmiz!';
}

//15
let clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', function() {
    localStorage.clear();
    sessionStorage.clear();
    alert('Barcha xotira tozalandi');
});

