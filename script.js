//1
localStorage.setItem('ism', 'Sardor');
console.log('Ism saqlandi: Sardor');

//2
const meningIsmim = localStorage.getItem('ism');
console.log('Saqlangan ismim:', meningIsmim);

//3
// localStorage.removeItem('ism');
// console.log('Ismim o'chirildi.');

//4
const tilBor = localStorage.getItem('til') !== null;
console.log('"til" kaliti bormi?', tilBor);

//5
// const meningRangim = prompt('Sevimli rangingizni yozing:');
// if (meningRangim) {
//     localStorage.setItem('theme', meningRangim);
//     console.log(`Sevimli rangim saqlandi: ${meningRangim}`);
// }

//6
// clearAll() ishlaydi.

//7
const nechtaNarsaBor = localStorage.length;
console.log('Saqlangan narsalar soni:', nechtaNarsaBor);

//8
const birinchiNarsaningNomi = localStorage.key(0);
console.log('Birinchi kalit:', birinchiNarsaningNomi);

//9
localStorage.setItem('shahar', 'Toshkent');
console.log('Shahar "Toshkent" saqlandi.');
localStorage.setItem('shahar', 'Samarqand');
console.log('Shahar "Samarqand"ga o'zgartirildi.');

//10
const foydalanuvchiHolati = localStorage.getItem('token') ? 'Kirilgan' : 'Mehmon';
console.log('Foydalanuvchi holati:', foydalanuvchiHolati);

//11
const user = { ism: 'Sardor', yosh: 25 };
const userString = JSON.stringify(user);
localStorage.setItem('user', userString);
console.log('User obyekt stringga aylantirib saqlandi:', userString);

//12
const saqlanganUserString = localStorage.getItem('user');
const saqlanganUser = JSON.parse(saqlanganUserString);
console.log('Saqlangan userni ismi:', saqlanganUser.ism);

//13
const boshMassiv = [];
const boshMassivString = JSON.stringify(boshMassiv);
localStorage.setItem('boshMassiv', boshMassivString);
console.log('Bosh massiv saqlandi.');

//14
const mevalar = ['olma', 'banan', 'uzum'];
const mevalarString = JSON.stringify(mevalar);
localStorage.setItem('mevalar', mevalarString);
console.log('3 ta meva saqlandi.');

//15
const mavjudMevalarString = localStorage.getItem('mevalar');
const mavjudMevalar = JSON.parse(mavjudMevalarString);
mavjudMevalar.push('anor');
const yangiMevalarString = JSON.stringify(mavjudMevalar);
localStorage.setItem('mevalar', yangiMevalarString);
console.log('4-meva qo\'shildi.');

//16
const sozlamalar = { darkmode: true, font: 16 };
const sozlamalarString = JSON.stringify(sozlamalar);
localStorage.setItem('sozlamalar', sozlamalarString);
console.log('Sozlamalar saqlandi.');

//17
const mavjudSozlamalarString = localStorage.getItem('sozlamalar');
const mavjudSozlamalar = JSON.parse(mavjudSozlamalarString);
mavjudSozlamalar.font = 20;
const yangiSozlamalarString = JSON.stringify(mavjudSozlamalar);
localStorage.setItem('sozlamalar', yangiSozlamalarString);
console.log('Font 20 ga o\'zgartirildi.');

//18
const sonliMassiv = [1, 2, 3, 4, 5];
const sonliMassivString = JSON.stringify(sonliMassiv);
localStorage.setItem('sonliMassiv', sonliMassivString);
console.log('Sonli massiv stringga o\'tkazildi.');

//19
const saqlanganSonliMassivString = localStorage.getItem('sonliMassiv');
const saqlanganSonliMassiv = JSON.parse(saqlanganSonliMassivString);
const yigindi = saqlanganSonliMassiv.reduce((sum, num) => sum + num, 0);
console.log('Sonlar yig\'indisi:', yigindi);

//20
const mahsulot = { nomi: 'Noutbuk', narxi: 1000 };
const mahsulotString = JSON.stringify(mahsulot);
localStorage.setItem('mahsulot', mahsulotString);
console.log('Mahsulot saqlandi.');
localStorage.removeItem('mahsulot');
console.log('Mahsulot o\'chirildi.');

//23
const loginParol = { login: 'sardor', parol: '12345' };
const loginParolString = JSON.stringify(loginParol);
localStorage.setItem('loginParol', loginParolString);
console.log('Login va parol saqlandi.');

//24
const massivString = localStorage.getItem('mevalar');
const massiv = JSON.parse(massivString);
const index = massiv.indexOf('banan');
if (index > -1) {
    massiv.splice(index, 1);
}
const yangiMassivString = JSON.stringify(massiv);
localStorage.setItem('mevalar', yangiMassivString);
console.log('Banan o\'chirildi.');

//25
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    console.log('Kalit:', key);
}

//26
const hozir = new Date().toISOString();
localStorage.setItem('lastVisit', hozir);
console.log('Oxirgi tashrif vaqti saqlandi:', hozir);

//28
const massiv1 = [1, 2, 3];
const massiv2 = [4, 5, 6];
const birlashtirilganMassiv = massiv1.concat(massiv2);
const birlashtirilganString = JSON.stringify(birlashtirilganMassiv);
localStorage.setItem('birlashtirilganMassiv', birlashtirilganString);
console.log('2 ta massiv birlashtirildi.');

//29
try {
    localStorage.setItem('test', 'a'.repeat(1000000));
} catch (e) {
    console.log('localStorage to\'lib qolgan:', e.message);
}

//30
if (!localStorage.getItem('defaultObyekt')) {
    const defaultObyekt = { tema: 'svetli', til: 'uz' };
    localStorage.setItem('defaultObyekt', JSON.stringify(defaultObyekt));
    console.log('Standart obyekt saqlandi.');
}

//31
const vazifalar = [];
localStorage.setItem('vazifalar', JSON.stringify(vazifalar));
console.log('To-do list tizimi tuzildi.');

//32
const mavjudVazifalarString = localStorage.getItem('vazifalar');
const mavjudVazifalar = JSON.parse(mavjudVazifalarString);
if (mavjudVazifalar.length > 0) {
    mavjudVazifalar[0].completed = true;
    localStorage.setItem('vazifalar', JSON.stringify(mavjudVazifalar));
    console.log('Vazifa bajarilgan deb belgilandi.');
} else {
    console.log('Vazifalar yo\'q.');
}

//37
const qidiruvTarixi = JSON.parse(localStorage.getItem('qidiruvTarixi') || '[]');
qidiruvTarixi.push('yangi soz');
if (qidiruvTarixi.length > 5) qidiruvTarixi.shift();
localStorage.setItem('qidiruvTarixi', JSON.stringify(qidiruvTarixi));
console.log('Qidiruv tarixi saqlandi.');

//38
const rasmUrl = 'https://example.com/image.jpg';
localStorage.setItem('profilRasm', rasmUrl);
console.log('Profil rasm URL saqlandi.');

//39
const ma\'lumot = 'uzun matn';
if (ma\'lumot.length < 5000000) {
    localStorage.setItem('ma\'lumot', ma\'lumot);
    console.log('Ma\'lumot uzunligi tekshirilib saqlandi.');
} else {
    console.log('Ma\'lumot juda uzun.');
}





