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

