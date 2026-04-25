// script.js - LocalStorage va JSON vazifalar

// Bu funksiya hamma narsani tozalaydi
function clearAll() {
    localStorage.clear(); // Hamma saqlangan narsalarni o'chiramiz
    console.log("Hamma narsalar tozalandi.");
    alert("Hamma narsalar tozalandi!"); // Foydalanuvchiga aytamiz
    location.reload(); // Sahifani qayta yuklaymiz
}

// Bu funksiya natijalarni ekranga chiqaradi
function updateOutput(message) {
    const outputElement = document.getElementById('output');
    if (outputElement) {
        outputElement.innerHTML += `<p>${message}</p>`;
    }
}

// 1-qism: Oddiy narsalarni saqlash

//1. Mening ismimni saqlang. Kalitga 'ism', qiymatga o'z ismimni yozaman.
localStorage.setItem('ism', 'Sardor');
console.log('1-vazifa: Mening ismim saqlandi: Sardor');

//2. Saqlangan ismni ko'rsating.
const meningIsmim = localStorage.getItem('ism');
console.log('2-vazifa: Saqlangan ismim:', meningIsmim);

//3. Ismimni brauzer xotirasidan o'chiring.
// localStorage.removeItem('ism');
// console.log('3-vazifa: Ismim o'chirildi.');

//4. 'til' degan narsa xotirada bormi, tekshiring.
const tilBor = localStorage.getItem('til') !== null;
console.log('4-vazifa: "til" degan kalit bormi?', tilBor);

//5. Menga sevimli rangimni so'rang va uni 'theme' deb saqlang.
// const meningRangim = prompt('Sevimli rangingizni yozing:');
// if (meningRangim) {
//     localStorage.setItem('theme', meningRangim);
//     console.log(`5-vazifa: Sevimli rangim saqlandi: ${meningRangim}`);
// }

//6. Hamma saqlangan narsalarni birdaiga tozalang.
// clearAll() funksiyasi allaqachon bor.

//7. Xotirada nechta narsa saqlanganini hisoblang.
const nechtaNarsaBor = localStorage.length;
console.log('7-vazifa: Saqlangan narsalar soni:', nechtaNarsaBor);

//8. Birinchi saqlangan narsaning nomini toping.
const birinchiNarsaningNomi = localStorage.key(0);
console.log('8-vazifa: Birinchi narsaning kaliti:', birinchiNarsaningNomi);

//9. 'shahar' deb 'Toshkent'ni saqlang. Keyin uni 'Samarqand'ga o'zgartiring.
localStorage.setItem('shahar', 'Toshkent');
console.log('9-vazifa: Shahar "Toshkent" deb saqlandi.');
localStorage.setItem('shahar', 'Samarqand');
console.log('9-vazifa: Shahar "Samarqand"ga o'zgartirildi.');

//10. Agar 'token' degan narsa bo'lsa, 'Kirilgan' deb ayting, bo'lmasa 'Mehmon' deb ayting.
const foydalanuvchiHolati = localStorage.getItem('token') ? 'Kirilgan' : 'Mehmon';
console.log('10-vazifa: Foydalanuvchi holati:', foydalanuvchiHolati);

// 2-qism: JSON bilan ishlash

//11. Bir odam haqida ma'lumot (ism, yosh) bor. Uni matnga o'zgartirib saqlang.
const odam = { ism: 'Ali', yosh: 30 };
localStorage.setItem('odam', JSON.stringify(odam));
console.log('11-vazifa: Odam obyekti matn qilib saqlandi.');

//12. Saqlangan odamni qayta obyektga aylantirib, uning ismini ko'rsating.
const saqlanganOdamMatn = localStorage.getItem('odam');
const saqlanganOdamObyekt = JSON.parse(saqlanganOdamMatn);
console.log('12-vazifa: Saqlangan odamning ismi:', saqlanganOdamObyekt.ism);

//13. Hech narsasi yo'q bo'sh massiv yarating va uni saqlang.
const busMassiv = [];
localStorage.setItem('busMassiv', JSON.stringify(busMassiv));
console.log('13-vazifa: Bo'sh massiv saqlandi.');

//14. 3 ta mevaning ro'yxatini matn qilib saqlang.
const mevalar = ['olma', 'banan', 'nok'];
localStorage.setItem('mevalar', JSON.stringify(mevalar));
console.log('14-vazifa: Mevalar ro'yxati saqlandi.');

//15. Saqlangan mevalar ro'yxatini oling, unga 4-mevani qo'shing va qayta saqlang.
const hozirgiMevalarMatn = localStorage.getItem('mevalar');
const hozirgiMevalar = JSON.parse(hozirgiMevalarMatn);
hozirgiMevalar.push('anor');
localStorage.setItem('mevalar', JSON.stringify(hozirgiMevalar));
console.log(`15-vazifa: Mevalar ro'yxatiga "anor" qo'shildi va qayta saqlandi: ${hozirgiMevalar.join(', ')}`);

//16. Sozlamalar degan obyektni saqlang: {darkmode: true, font: 16}.
const sozlamalar = { darkmode: true, font: 16 };
localStorage.setItem('sozlamalar', JSON.stringify(sozlamalar));
console.log('16-vazifa: Sozlamalar saqlandi.');

//17. Saqlangan sozlamalarni oling, shrift hajmini 20 ga o'zgartiring va qayta saqlang.
const hozirgiSozlamalarMatn = localStorage.getItem('sozlamalar');
const hozirgiSozlamalar = JSON.parse(hozirgiSozlamalarMatn);
hozirgiSozlamalar.font = 20;
localStorage.setItem('sozlamalar', JSON.stringify(hozirgiSozlamalar));
console.log(`17-vazifa: Sozlamalar yangilandi (shrift: ${hozirgiSozlamalar.font}).`);

//18. Sonlardan iborat ro'yxatni matnga aylantirib saqlang.
const sonlar = [1, 2, 3, 4, 5];
const sonlarMatn = JSON.stringify(sonlar);
localStorage.setItem('sonlarMatn', sonlarMatn);
console.log(`18-vazifa: Sonlar ro'yxati matnga aylantirildi va saqlandi: ${sonlarMatn}`);

//19. O'sha sonlar matnini qayta ro'yxatga aylantirib, yig'indisini hisoblang.
const saqlanganSonlarMatn = localStorage.getItem('sonlarMatn');
const qaytaSonlar = JSON.parse(saqlanganSonlarMatn);
const jami = qaytaSonlar.reduce((acc, num) => acc + num, 0);
console.log('19-vazifa: Sonlar ro'yxatining yig'indisi:', jami);

//20. Bir mahsulot obyektini saqlang. Keyin faqat o'sha mahsulotni o'chiring.
const mahsulot = { id: 1, nomi: 'Kompyuter', narx: 1200 };
localStorage.setItem('mahsulot', JSON.stringify(mahsulot));
console.log('20-vazifa: Mahsulot saqlandi.');
localStorage.removeItem('mahsulot');
console.log('20-vazifa: Mahsulot o'chirildi.');

// 3-qism: Qo'shimcha narsalar

//21. Sahifa necha marta yangilanganini sanang.
let sanogich = parseInt(localStorage.getItem('sahifaYangilandiSanogich') || '0', 10);
sanogich++;
localStorage.setItem('sahifaYangilandiSanogich', sanogich.toString());
console.log(`21-vazifa: Sahifa ${sanogich} marta yangilandi.`);

//22. Foydalanuvchining ismini bir marta so'rang. Keyingi safar kelsa, so'ramasdan ismini ko'rsating.
const foydalanuvchiIsmi = localStorage.getItem('foydalanuvchiIsmi');
if (!foydalanuvchiIsmi) {
    // const yangiIsm = prompt('Ismingizni yozing:');
    // if (yangiIsm) {
    //     localStorage.setItem('foydalanuvchiIsmi', yangiIsm);
    //     console.log(`22-vazifa: Yangi ism saqlandi: ${yangiIsm}`);
    // }
} else {
    console.log(`22-vazifa: Sizning ismingiz: ${foydalanuvchiIsmi}`);
}

//23. Login va parolni obyekt qilib saqlang.
const hisobMalumotlari = { login: 'user123', parol: 'password123' };
localStorage.setItem('hisobMalumotlari', JSON.stringify(hisobMalumotlari));
console.log('23-vazifa: Login va parol saqlandi.');

//24. Xotiradagi ro'yxatdan biror narsani o'chirib tashlang.
const roʻyxatdanOchiradiganMatn = localStorage.getItem('mevalar');
if (roʻyxatdanOchiradiganMatn) {
    let roʻyxatdanOchiradigan = JSON.parse(roʻyxatdanOchiradiganMatn);
    const oʻchiradiganIndex = roʻyxatdanOchiradigan.indexOf('banan');
    if (oʻchiradiganIndex > -1) {
        roʻyxatdanOchiradigan.splice(oʻchiradiganIndex, 1);
        localStorage.setItem('mevalar', JSON.stringify(roʻyxatdanOchiradigan));
        console.log(`24-vazifa: "banan" mevalar ro'yxatidan o'chirildi: ${roʻyxatdanOchiradigan.join(', ')}`);
    }
}

//25. Hamma saqlangan narsalarning nomini ko'rsating.
console.log('25-vazifa: Hamma saqlangan narsalarning nomlari:');
for (let i = 0; i < localStorage.length; i++) {
    const kalit = localStorage.key(i);
    console.log(`- ${kalit}`);
}

//26. 'lastVisit' deb, foydalanuvchi oxirgi marta qachon kelgan vaqtini saqlang.
const oxirgiTashrif = new Date().toLocaleString();
localStorage.setItem('oxirgiTashrif', oxirgiTashrif);
console.log(`26-vazifa: Oxirgi tashrif vaqti saqlandi: ${oxirgiTashrif}`);

//27. Foydalanuvchi tanlagan rangni saqlang. Sahifa yangilansa, o'sha rangga bo'yang.
const tanlanganRang = localStorage.getItem('theme');
if (tanlanganRang) {
    document.body.style.backgroundColor = tanlanganRang;
    console.log(`27-vazifa: Sahifa "${tanlanganRang}" rangiga bo'yaldi.`);
}

//28. Ikkita alohida ro'yxatni bitta qilib saqlang.
const royxat1 = [1, 2, 3];
const royxat2 = ['a', 'b', 'c'];
const birlashganRoyxat = [...royxat1, ...royxat2];
localStorage.setItem('birlashganRoyxat', JSON.stringify(birlashganRoyxat));
console.log(`28-vazifa: Ikkita ro'yxat birlashtirildi va saqlandi: ${birlashganRoyxat.join(', ')}`);

//29. LocalStorage to'lib qolsa, shuni bilish uchun kod yozing.
try {
    localStorage.setItem('kattaNarsa', 'x'.repeat(5 * 1024 * 1024)); // Juda katta ma'lumot
    localStorage.removeItem('kattaNarsa');
    console.log('29-vazifa: LocalStorage to'lib ketmadi. Yaxshi.');
} catch (e) {
    if (e.name === 'QuotaExceededError') {
        console.log('29-vazifa: Xatolik: LocalStorage to'lib ketdi!');
    } else {
        console.log(`29-vazifa: Boshqa xatolik yuz berdi: ${e.message}`);
    }
}

//30. Agar xotirada hech narsa bo'lmasa, standart sozlamalarni saqlab qo'ying.
const standartSozlamalarKaliti = 'ilovaSozlamalari';
if (!localStorage.getItem(standartSozlamalarKaliti)) {
    const standartSozlamalar = { til: 'uz', xabarlar: true };
    localStorage.setItem(standartSozlamalarKaliti, JSON.stringify(standartSozlamalar));
    console.log('30-vazifa: Xotirada hech narsa bo'lmagani uchun standart sozlamalar saqlandi.');
} else {
    console.log('30-vazifa: Standart sozlamalar allaqachon bor.');
}

// 4-qism: Katta loyihalar uchun (o'rganish)

//31. 'Qilinadigan ishlar ro'yxati' uchun narsalarni saqlang.
const ishlarRoyxatiKaliti = 'ishlarRoyxati';
if (!localStorage.getItem(ishlarRoyxatiKaliti)) {
    localStorage.setItem(ishlarRoyxatiKaliti, JSON.stringify([]));
    console.log('31-vazifa: "Qilinadigan ishlar ro'yxati" tayyorlandi.');
}
function ishQoshish(ishMatni) {
    const ishlar = JSON.parse(localStorage.getItem(ishlarRoyxatiKaliti));
    ishlar.push({ id: Date.now(), text: ishMatni, completed: false });
    localStorage.setItem(ishlarRoyxatiKaliti, JSON.stringify(ishlar));
    console.log(`31-vazifa: Yangi ish qo'shildi: "${ishMatni}".`);
}
// Masalan:
// ishQoshish("Non olish");

//32. Ish bajarilgan bo'lsa (completed: true), uni o'zgartiring.
function ishHolatiniOzgarti(id) {
    const ishlar = JSON.parse(localStorage.getItem(ishlarRoyxatiKaliti));
    const ishIndexi = ishlar.findIndex(ish => ish.id === id);
    if (ishIndexi > -1) {
        ishlar[ishIndexi].completed = !ishlar[ishIndexi].completed; // bajarilganini teskarisiga o'zgartiramiz
        localStorage.setItem(ishlarRoyxatiKaliti, JSON.stringify(ishlar));
        console.log(`32-vazifa: Ish ID ${id} holati yangilandi: bajarildi = ${ishlar[ishIndexi].completed}`);
    }
}
// Masalan:
// const hozirgiIshlar = JSON.parse(localStorage.getItem(ishlarRoyxatiKaliti));
// if (hozirgiIshlar.length > 0) {
//     ishHolatiniOzgarti(hozirgiIshlar[0].id);
// }

//33. Savat uchun: har safar tugma bosilganda mahsulot ID'sini ro'yxatga qo'shing.
const savatKaliti = 'savatdagiMahsulotlar';
if (!localStorage.getItem(savatKaliti)) {
    localStorage.setItem(savatKaliti, JSON.stringify([]));
    console.log('33-vazifa: Savat ro'yxati tayyorlandi.');
}
function savatgaQoshish(mahsulotId) {
    const savat = JSON.parse(localStorage.getItem(savatKaliti));
    savat.push(mahsulotId);
    localStorage.setItem(savatKaliti, JSON.stringify(savat));
    console.log(`33-vazifa: Mahsulot ID ${mahsulotId} savatga qo'shildi. Savat: ${savat.join(', ')}`);
}
// Masalan:
// savatgaQoshish(101);
// savatgaQoshish(102);

//34. Savatdagi mahsulotlarning umumiy narxini hisoblang.
function savatJamiNarxiniHisobla() {
    const savat = JSON.parse(localStorage.getItem(savatKaliti));
    // Mahsulotlarning narxlarini shunchaki tasavvur qilamiz
    const mahsulotNarxlari = { 101: 50, 102: 75, 103: 20 };
    let jamiNarx = 0;
    savat.forEach(mahsulotId => {
        jamiNarx += mahsulotNarxlari[mahsulotId] || 0; // Agar ID topilmasa 0 qo'shamiz
    });
    console.log(`34-vazifa: Savatdagi mahsulotlarning umumiy narxi: ${jamiNarx}`);
    return jamiNarx;
}
// Masalan:
// savatJamiNarxiniHisobla();

//35. Foydalanuvchi yozgan matnni avtomatik saqlang (textarea).
//36. Sahifa yangilansa, o'sha matn textarea'da turgan bo'lsin.
document.addEventListener('DOMContentLoaded', () => {
    const matnQutisi = document.createElement('textarea');
    matnQutisi.id = 'avtoSaqlanganMatn';
    matnQutisi.placeholder = 'Bu yerga yozing, o'zi saqlaydi...';
    matnQutisi.style.width = '100%';
    matnQutisi.style.minHeight = '100px';
    document.getElementById('output').before(matnQutisi); // Natija divdan oldin qo'shamiz

    const saqlanganMatn = localStorage.getItem('avtoSaqlanganMatn');
    if (saqlanganMatn) {
        matnQutisi.value = saqlanganMatn;
        console.log('36-vazifa: Avtomatik saqlangan matn yuklandi.');
    }

    matnQutisi.addEventListener('input', () => {
        localStorage.setItem('avtoSaqlanganMatn', matnQutisi.value);
        console.log('35-vazifa: Matn avtomatik saqlandi.');
    });
});


//37. Qidiruv tarixini (oxirgi 5 ta so'z) saqlang.
const qidiruvTarixiKaliti = 'qidiruvTarixi';
function qidiruvQoshish(soz) {
    let tarix = JSON.parse(localStorage.getItem(qidiruvTarixiKaliti) || '[]');
    tarix = tarix.filter(item => item !== soz); // Takroriy so'zlarni olib tashlaymiz
    tarix.unshift(soz); // Eng yangisini boshiga qo'shamiz
    if (tarix.length > 5) {
        tarix = tarix.slice(0, 5); // Faqat oxirgi 5 tasini qoldiramiz
    }
    localStorage.setItem(qidiruvTarixiKaliti, JSON.stringify(tarix));
    console.log(`37-vazifa: Qidiruv tarixiga "${soz}" qo'shildi. Tarix: ${tarix.join(', ')}`);
}
// Masalan:
// qidiruvQoshish('javascript');
// qidiruvQoshish('localStorage');

//38. Profil rasmining URL'ini saqlang.
const profilRasmiURLKaliti = 'profilRasmiURL';
localStorage.setItem(profilRasmiURLKaliti, 'https://example.com/meningrasmim.jpg');
console.log('38-vazifa: Profil rasmi URL'i saqlandi.');

//39. Narsalarni saqlashdan oldin ularning kattaligini tekshiring.
function narsaSaqlashKattaliginiTekshir(kalit, qiymat) {
    const matnQiymati = JSON.stringify(qiymat);
    if (matnQiymati.length > 5000000) { // Masalan, 5MB dan katta bo'lsa
        console.log(`39-vazifa: Xatolik: ${kalit} juda katta! Saqlay olmayman.`);
        return false;
    }
    localStorage.setItem(kalit, matnQiymati);
    console.log(`39-vazifa: ${kalit} muvaffaqiyatli saqlandi. Kattaligi: ${matnQiymati.length} bayt.`);
    return true;
}
// Masalan:
// narsaSaqlashKattaliginiTekshir('kattaMatn', { data: 'qisqaMatn'.repeat(1000) });

//40. Tugma bosilganda, xotiradagi hamma matnlarni katta harflarga aylantiring.
function hammasiniKattaHarfgaOtkaz() {
    console.log('40-vazifa: Hamma matnlarni KATTA HARFLARGA o'tkazaman.');
    for (let i = 0; i < localStorage.length; i++) {
        const kalit = localStorage.key(i);
        let qiymat = localStorage.getItem(kalit);
        try {
            // Agar JSON bo'lsa, uni o'zgartirmaymiz
            JSON.parse(qiymat);
        } catch (e) {
            // Agar oddiy matn bo'lsa
            if (typeof qiymat === 'string') {
                localStorage.setItem(kalit, qiymat.toUpperCase());
                console.log(`- "${kalit}" o'zgartirildi.`);
            }
        }
    }
    console.log('40-vazifa: Hamma matnlar KATTA HARFLARGA o'tkazildi.');
}

// Katta harfga o'tkazish tugmasini qo'shamiz
document.addEventListener('DOMContentLoaded', () => {
    const kattaHarfTugmasi = document.createElement('button');
    kattaHarfTugmasi.textContent = 'Hamma matnlarni KATTA harfga o'tkazish';
    kattaHarfTugmasi.onclick = hammasiniKattaHarfgaOtkaz;
    document.getElementById('output').before(kattaHarfTugmasi);
});
