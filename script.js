// script.js

function clearAll() {
    localStorage.clear();
    console.log("Hamma narsalar tozalandi.");
    alert("Hamma narsalar tozalandi!");
    location.reload();
}

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

