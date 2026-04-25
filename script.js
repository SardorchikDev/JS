// script.js - LocalStorage and JSON Tasks

function clearAll() {
    localStorage.clear();
    console.log("All localStorage data cleared.");
    updateOutput("All localStorage data cleared.");
    location.reload(); // Reload to reflect changes
}

function updateOutput(message) {
    const outputElement = document.getElementById('output');
    if (outputElement) {
        outputElement.innerHTML += `<p>${message}</p>`;
    }
}

// 1-daraja: Oddiy Stringlar (1-10)

// 1. Kaliti ism va qiymati o'z ismingiz bo'lgan ma'lumotni saqlang.
localStorage.setItem('ism', 'Sardor');
updateOutput('1-vazifa: Ism saqlandi: Sardor');

// 2. Saqlangan ismni konsolga chiqaring.
const saqlanganIsm = localStorage.getItem('ism');
console.log('2-vazifa: Saqlangan ism:', saqlanganIsm);
updateOutput(`2-vazifa: Saqlangan ism: ${saqlanganIsm}`);

// 3. Brauzer xotirasidan ismni o'chirib tashlang.
// localStorage.removeItem('ism');
// updateOutput('3-vazifa: Ism o'chirildi.');

// 4. Xotirada til kaliti bor-yo'qligini tekshiruvchi kod yozing.
const tilMavjud = localStorage.getItem('til') !== null;
console.log('4-vazifa: "til" kaliti mavjudmi?', tilMavjud);
updateOutput(`4-vazifa: "til" kaliti mavjudmi? ${tilMavjud}`);

// 5. Foydalanuvchidan prompt orqali sevimli rangini so'rang va uni theme kaliti bilan saqlang.
// const sevimliRang = prompt('Sevimli rangingizni kiriting:');
// if (sevimliRang) {
//     localStorage.setItem('theme', sevimliRang);
//     updateOutput(`5-vazifa: Sevimli rang saqlandi: ${sevimliRang}`);
// }

// 6. localStoragedagi barcha ma'lumotlarni bitta buyruq bilan tozalang.
// clearAll() funksiyasi yuqorida aniqlangan.

// 7. Xotirada nechta ma'lumot saqlanganini (uzunligini) aniqlang.
const maJumotlarSoni = localStorage.length;
console.log('7-vazifa: Saqlangan ma'lumotlar soni:', maJumotlarSoni);
updateOutput(`7-vazifa: Saqlangan ma'lumotlar soni: ${maJumotlarSoni}`);

// 8. Birinchi indexda turgan kalitning nomini toping.
const birinchiKalit = localStorage.key(0);
console.log('8-vazifa: Birinchi kalit:', birinchiKalit);
updateOutput(`8-vazifa: Birinchi kalit: ${birinchiKalit}`);

// 9. shahar kalitiga "Toshkent"ni saqlang va keyin uni "Samarqand"ga o'zgartiring.
localStorage.setItem('shahar', 'Toshkent');
updateOutput('9-vazifa: Shahar "Toshkent" saqlandi.');
localStorage.setItem('shahar', 'Samarqand');
updateOutput('9-vazifa: Shahar "Samarqand"ga o'zgartirildi.');

// 10. Agar xotirada token bo'lsa "Kirilgan", bo'lmasa "Mehmon" so'zini chiqaring.
const tokenHolati = localStorage.getItem('token') ? 'Kirilgan' : 'Mehmon';
console.log('10-vazifa: Token holati:', tokenHolati);
updateOutput(`10-vazifa: Token holati: ${tokenHolati}`);

// 2-daraja: JSON va Obyektlar (11-20)

// 11. user obyektini (ism, yosh) stringga aylantirib saqlang.
const user = { ism: 'Ali', yosh: 30 };
localStorage.setItem('user', JSON.stringify(user));
updateOutput('11-vazifa: User obyekti JSON formatida saqlandi.');

// 12. Saqlangan userni qayta obyektga aylantirib, uning faqat ismini konsolga chiqaring.
const saqlanganUserString = localStorage.getItem('user');
const saqlanganUserObyekt = JSON.parse(saqlanganUserString);
console.log('12-vazifa: Saqlangan userning ismi:', saqlanganUserObyekt.ism);
updateOutput(`12-vazifa: Saqlangan userning ismi: ${saqlanganUserObyekt.ism}`);

// 13. Bo'sh massiv yarating, uni xotiraga saqlang.
const boshMassiv = [];
localStorage.setItem('boshMassiv', JSON.stringify(boshMassiv));
updateOutput('13-vazifa: Bo'sh massiv JSON formatida saqlandi.');

// 14. 3 ta mevadan iborat massivni JSON formatida saqlang.
const mevalar = ['olma', 'banan', 'nok'];
localStorage.setItem('mevalar', JSON.stringify(mevalar));
updateOutput('14-vazifa: Mevalar massivi JSON formatida saqlandi.');

// 15. Xotiradagi mevalar massivini olib, unga 4-mevani qo'shing va qayta saqlang.
const hozirgiMevalarString = localStorage.getItem('mevalar');
const hozirgiMevalar = JSON.parse(hozirgiMevalarString);
hozirgiMevalar.push('anor');
localStorage.setItem('mevalar', JSON.stringify(hozirgiMevalar));
updateOutput(`15-vazifa: Mevalar massiviga "anor" qo'shildi va qayta saqlandi: ${hozirgiMevalar.join(', ')}`);

// 16. sozlamalar obyektini saqlang: {darkmode: true, font: 16}.
const sozlamalar = { darkmode: true, font: 16 };
localStorage.setItem('sozlamalar', JSON.stringify(sozlamalar));
updateOutput('16-vazifa: Sozlamalar obyekti JSON formatida saqlandi.');

// 17. Saqlangan sozlamalarni olib, font o'lchamini 20 ga o'zgartirib qayta saqlang.
const hozirgiSozlamalarString = localStorage.getItem('sozlamalar');
const hozirgiSozlamalar = JSON.parse(hozirgiSozlamalarString);
hozirgiSozlamalar.font = 20;
localStorage.setItem('sozlamalar', JSON.stringify(hozirgiSozlamalar));
updateOutput(`17-vazifa: Sozlamalar yangilandi (font: ${hozirgiSozlamalar.font}) va qayta saqlandi.`);

// 18. JSON.stringify yordamida sonli massivni stringga o'tkazing.
const sonliMassiv = [1, 2, 3, 4, 5];
const sonliMassivString = JSON.stringify(sonliMassiv);
localStorage.setItem('sonliMassivString', sonliMassivString);
updateOutput(`18-vazifa: Sonli massiv stringga o'tkazildi va saqlandi: ${sonliMassivString}`);

// 19. JSON.parse yordamida o'sha massivni qaytarib olib, sonlar yig'indisini hisoblang.
const saqlanganSonliMassivString = localStorage.getItem('sonliMassivString');
const qaytarilganSonliMassiv = JSON.parse(saqlanganSonliMassivString);
const yigindi = qaytarilganSonliMassiv.reduce((acc, num) => acc + num, 0);
console.log('19-vazifa: Sonli massiv yig'indisi:', yigindi);
updateOutput(`19-vazifa: Sonli massiv yig'indisi: ${yigindi}`);

// 20. mahsulot obyektini saqlang va keyin xotiradan faqat o'sha mahsulotni o'chiring.
const mahsulot = { id: 1, nomi: 'Kompyuter', narx: 1200 };
localStorage.setItem('mahsulot', JSON.stringify(mahsulot));
updateOutput('20-vazifa: Mahsulot obyekti saqlandi.');
localStorage.removeItem('mahsulot');
updateOutput('20-vazifa: Mahsulot obyekti o'chirildi.');

// 3-daraja: Amaliy Logika (21-30)

// 21. Sahifa necha marta yangilanganini (counter) hisoblab boruvchi kod yozing.
let counter = parseInt(localStorage.getItem('pageReloadCounter') || '0', 10);
counter++;
localStorage.setItem('pageReloadCounter', counter.toString());
updateOutput(`21-vazifa: Sahifa ${counter} marta yangilandi.`);

// 22. Foydalanuvchi ismini bir marta so'rang, keyingi safar kirsat prompt chiqmasin, ismini ekranda ko'rsatsin.
const foydalanuvchiIsmi = localStorage.getItem('foydalanuvchiIsmi');
if (!foydalanuvchiIsmi) {
    // const yangiIsm = prompt('Ismingizni kiriting:');
    // if (yangiIsm) {
    //     localStorage.setItem('foydalanuvchiIsmi', yangiIsm);
    //     updateOutput(`22-vazifa: Yangi foydalanuvchi ismi saqlandi: ${yangiIsm}`);
    // }
} else {
    updateOutput(`22-vazifa: Foydalanuvchi ismi: ${foydalanuvchiIsmi}`);
}

// 23. Login va parolni obyekt ko'rinishida saqlang.
const credentials = { login: 'user123', parol: 'password123' };
localStorage.setItem('credentials', JSON.stringify(credentials));
updateOutput('23-vazifa: Login va parol obyekti saqlandi.');

// 24. Xotiradagi massiv ichidan ma'lum bir elementni o'chirib tashlang.
const arrayToDeleteFromString = localStorage.getItem('mevalar');
if (arrayToDeleteFromString) {
    let arrayToDeleteFrom = JSON.parse(arrayToDeleteFromString);
    const indexToRemove = arrayToDeleteFrom.indexOf('banan');
    if (indexToRemove > -1) {
        arrayToDeleteFrom.splice(indexToRemove, 1);
        localStorage.setItem('mevalar', JSON.stringify(arrayToDeleteFrom));
        updateOutput(`24-vazifa: "banan" mevalar massividan o'chirildi: ${arrayToDeleteFrom.join(', ')}`);
    }
}

// 25. Barcha saqlangan kalitlarni for tsikli orqali konsolga chiqaring.
updateOutput('25-vazifa: Barcha saqlangan kalitlar:');
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    updateOutput(`- ${key}`);
}

// 26. lastVisit kaliti bilan foydalanuvchi oxirgi marta qachon kirgan vaqtini saqlang.
const lastVisit = new Date().toLocaleString();
localStorage.setItem('lastVisit', lastVisit);
updateOutput(`26-vazifa: Oxirgi tashrif vaqti saqlandi: ${lastVisit}`);

// 27. Foydalanuvchi tanlagan rangni saqlang va sahifa yangilanganda body fonini o'sha rangga bo'yang.
const bodyTheme = localStorage.getItem('theme');
if (bodyTheme) {
    document.body.style.backgroundColor = bodyTheme;
    updateOutput(`27-vazifa: Body foni "${bodyTheme}" rangiga o'rnatildi.`);
}

// 28. 2 ta alohida massivni bitta kalit ostida birlashtirib saqlang.
const massiv1 = [1, 2, 3];
const massiv2 = ['a', 'b', 'c'];
const birlashganMassiv = [...massiv1, ...massiv2];
localStorage.setItem('birlashganMassiv', JSON.stringify(birlashganMassiv));
updateOutput(`28-vazifa: Ikki massiv birlashtirildi va saqlandi: ${birlashganMassiv.join(', ')}`);

// 29. localStorage to'lib qolganini aniqlash uchun try-catch blokini yozing.
try {
    localStorage.setItem('testKey', 'a'.repeat(5 * 1024 * 1024)); // 5MB data
    localStorage.removeItem('testKey');
    updateOutput('29-vazifa: LocalStorage to'lib ketmadi (test o'tdi).');
} catch (e) {
    if (e.name === 'QuotaExceededError') {
        updateOutput('29-vazifa: Xatolik: LocalStorage to'lib ketdi!');
    } else {
        updateOutput(`29-vazifa: Boshqa xatolik yuz berdi: ${e.message}`);
    }
}

// 30. Agar xotirada ma'lumot bo'lmasa, standart (default) obyektni saqlab qo'ying.
const defaultSettingsKey = 'appSettings';
if (!localStorage.getItem(defaultSettingsKey)) {
    const defaultSettings = { language: 'uz', notifications: true };
    localStorage.setItem(defaultSettingsKey, JSON.stringify(defaultSettings));
    updateOutput('30-vazifa: Xotirada ma'lumot bo'lmagani uchun standart sozlamalar saqlandi.');
} else {
    updateOutput('30-vazifa: Standart sozlamalar allaqachon mavjud.');
}

// 4-daraja: Loyihalar uchun (31-40)

// 31. "To-do list" uchun vazifalar massivini saqlash tizimini tuzing.
const todoListKey = 'todoList';
if (!localStorage.getItem(todoListKey)) {
    localStorage.setItem(todoListKey, JSON.stringify([]));
    updateOutput('31-vazifa: "To-do list" massivi initsializatsiya qilindi.');
}
function addTodo(taskText) {
    const todos = JSON.parse(localStorage.getItem(todoListKey));
    todos.push({ id: Date.now(), text: taskText, completed: false });
    localStorage.setItem(todoListKey, JSON.stringify(todos));
    updateOutput(`31-vazifa: Yangi vazifa qo'shildi: "${taskText}".`);
}
// Misol uchun:
// addTodo("Non sotib olish");

// 32. Vazifa bajarilgan bo'lsa (completed: true), uni xotirada yangilang.
function toggleTodoCompleted(id) {
    const todos = JSON.parse(localStorage.getItem(todoListKey));
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex > -1) {
        todos[todoIndex].completed = !todos[todoIndex].completed;
        localStorage.setItem(todoListKey, JSON.stringify(todos));
        updateOutput(`32-vazifa: Vazifa ID ${id} holati yangilandi: completed = ${todos[todoIndex].completed}`);
    }
}
// Misol uchun:
// const currentTodos = JSON.parse(localStorage.getItem(todoListKey));
// if (currentTodos.length > 0) {
//     toggleTodoCompleted(currentTodos[0].id);
// }

// 33. Savat (cart) tizimi: har safar tugma bosilganda mahsulot ID-sini massivga qo'shing.
const cartKey = 'shoppingCart';
if (!localStorage.getItem(cartKey)) {
    localStorage.setItem(cartKey, JSON.stringify([]));
    updateOutput('33-vazifa: Savat massivi initsializatsiya qilindi.');
}
function addToCart(productId) {
    const cart = JSON.parse(localStorage.getItem(cartKey));
    cart.push(productId);
    localStorage.setItem(cartKey, JSON.stringify(cart));
    updateOutput(`33-vazifa: Mahsulot ID ${productId} savatga qo'shildi. Savat: ${cart.join(', ')}`);
}
// Misol uchun:
// addToCart(101);
// addToCart(102);

// 34. Savatdagi mahsulotlar umumiy narxini xotiradan olib hisoblang. (Bu yerda mahsulot narxlari faraz qilinadi)
function calculateCartTotal() {
    const cart = JSON.parse(localStorage.getItem(cartKey));
    // Mahsulot narxlarini faraz qilamiz
    const productPrices = { 101: 50, 102: 75, 103: 20 };
    let total = 0;
    cart.forEach(productId => {
        total += productPrices[productId] || 0; // Agar ID topilmasa 0 qo'shiladi
    });
    updateOutput(`34-vazifa: Savatdagi mahsulotlar umumiy narxi: ${total}`);
    return total;
}
// Misol uchun:
// calculateCartTotal();

// 35. Foydalanuvchi kiritgan matnni (textarea) xotiraga saqlab boring (avto-saqlash).
// 36. Sahifa yangilanganda o'sha matn textarea'da turgan bo'lsin.
document.addEventListener('DOMContentLoaded', () => {
    const textareaElement = document.createElement('textarea');
    textareaElement.id = 'autoSaveTextarea';
    textareaElement.placeholder = 'Bu yerga matn kiriting, avtomatik saqlanadi...';
    textareaElement.style.width = '100%';
    textareaElement.style.minHeight = '100px';
    document.getElementById('output').before(textareaElement); // Output divdan oldin qo'shish

    const savedText = localStorage.getItem('autoSavedText');
    if (savedText) {
        textareaElement.value = savedText;
        updateOutput('36-vazifa: Avtomatik saqlangan matn yuklandi.');
    }

    textareaElement.addEventListener('input', () => {
        localStorage.setItem('autoSavedText', textareaElement.value);
        updateOutput('35-vazifa: Matn avtomatik saqlandi.');
    });
});


// 37. Qidiruv tarixini (search history) oxirgi 5 ta so'z uchun saqlang.
const searchHistoryKey = 'searchHistory';
function addSearchQuery(query) {
    let history = JSON.parse(localStorage.getItem(searchHistoryKey) || '[]');
    history = history.filter(item => item !== query); // Takroriy so'zlarni olib tashlash
    history.unshift(query); // Eng yangisini boshiga qo'shish
    if (history.length > 5) {
        history = history.slice(0, 5); // Oxirgi 5 tasini saqlash
    }
    localStorage.setItem(searchHistoryKey, JSON.stringify(history));
    updateOutput(`37-vazifa: Qidiruv tarixiga "${query}" qo'shildi. Tarix: ${history.join(', ')}`);
}
// Misol uchun:
// addSearchQuery('javascript');
// addSearchQuery('localStorage');
// addSearchQuery('json');
// addSearchQuery('array methods');
// addSearchQuery('web apis');
// addSearchQuery('javascript'); // Takroriy

// 38. Foydalanuvchi profilingizdagi rasm URL-ini saqlang.
const profileImageUrlKey = 'profileImageUrl';
localStorage.setItem(profileImageUrlKey, 'https://example.com/profile.jpg');
updateOutput('38-vazifa: Profil rasm URL-i saqlandi.');

// 39. Ma'lumotlarni xotiraga saqlashdan oldin ularning uzunligini tekshiring.
function setItemWithLengthCheck(key, value) {
    const serializedValue = JSON.stringify(value);
    if (serializedValue.length > 5000000) { // Misol uchun 5MB
        updateOutput(`39-vazifa: Xatolik: ${key} uchun ma'lumot juda katta!`);
        return false;
    }
    localStorage.setItem(key, serializedValue);
    updateOutput(`39-vazifa: ${key} muvaffaqiyatli saqlandi, uzunligi: ${serializedValue.length} bayt.`);
    return true;
}
// Misol uchun:
// setItemWithLengthCheck('largeData', { data: 'some_long_string'.repeat(1000) });

// 40. Tugma bosilganda xotiradagi barcha string ma'lumotlarni katta harfga (UPPERCASE) o'tkazing.
function convertAllToUpperCase() {
    updateOutput('40-vazifa: LocalStorage'dagi barcha string qiymatlari UPPERCASE ga o'tkaziladi.');
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        let value = localStorage.getItem(key);
        try {
            // JSON string bo'lishi mumkin, agar bo'lsa uni UPPERCASE ga o'tkazmaymiz
            JSON.parse(value);
        } catch (e) {
            // Agar JSON emas, oddiy string bo'lsa
            if (typeof value === 'string') {
                localStorage.setItem(key, value.toUpperCase());
                updateOutput(`- "${key}" yangilandi.`);
            }
        }
    }
    updateOutput('40-vazifa: Barcha string qiymatlari UPPERCASE ga o'tkazildi.');
}

// Tugmani HTMLga qo'shish
document.addEventListener('DOMContentLoaded', () => {
    const uppercaseButton = document.createElement('button');
    uppercaseButton.textContent = 'Barchasini UPPERCASE ga o'tkazish';
    uppercaseButton.onclick = convertAllToUpperCase;
    document.getElementById('output').before(uppercaseButton);
});

// Ba'zi vazifalar uchun HTML da interact qila olish uchun
// Masalan, 5-vazifa:
// document.addEventListener('DOMContentLoaded', () => {
//     const themePromptButton = document.createElement('button');
//     themePromptButton.textContent = '5-vazifa: Sevimli rangni kiritish';
//     themePromptButton.onclick = () => {
//         const sevimliRang = prompt('Sevimli rangingizni kiriting:');
//         if (sevimliRang) {
//             localStorage.setItem('theme', sevimliRang);
//             updateOutput(`5-vazifa: Sevimli rang saqlandi: ${sevimliRang}`);
//             document.body.style.backgroundColor = sevimliRang; // Rangni darhol qo'llash
//         }
//     };
//     document.getElementById('output').before(themePromptButton);
// });

// Masalan, 22-vazifa uchun:
// document.addEventListener('DOMContentLoaded', () => {
//     const namePromptButton = document.createElement('button');
//     namePromptButton.textContent = '22-vazifa: Ism kiritish (bir marta)';
//     namePromptButton.onclick = () => {
//         const foydalanuvchiIsmi = localStorage.getItem('foydalanuvchiIsmi');
//         if (!foydalanuvchiIsmi) {
//             const yangiIsm = prompt('Ismingizni kiriting:');
//             if (yangiIsm) {
//                 localStorage.setItem('foydalanuvchiIsmi', yangiIsm);
//                 updateOutput(`22-vazifa: Yangi foydalanuvchi ismi saqlandi: ${yangiIsm}`);
//             }
//         } else {
//             updateOutput(`22-vazifa: Foydalanuvchi ismi allaqachon mavjud: ${foydalanuvchiIsmi}`);
//         }
//     };
//     document.getElementById('output').before(namePromptButton);
// });
