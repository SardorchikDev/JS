'use strict';

console.log("=== 1-bo'lim ===");

// 1
x = 10; // Xato: x not defined (strict mode)

// 2
var name = "Ali";
name = "Vali";
console.log("name =", name);
// var name = "Ali"; var name = "Vali"; // ishlaydi

// 3
console.log("car =", car); // undefined (hoisting)
var car = "BMW";
console.log("car (keyin) =", car);

// 4
let fruit = "Apple";
console.log("fruit =", fruit);
// let fruit = "Banana"; // Xato: fruit allaqachon yozilgan

// 5
const pi = 3.14;
console.log("pi =", pi);
// pi = 5; // Xato: o'zgarmasni ozgartirib bulmaydi

// 6
var count = 1;
var count = 2;
var count = 3;
console.log("count =", count);

// 7
function testScope() {
  var funcVar = "Funksiya ichida";
  console.log("funcVar (ichida) =", funcVar);
}
testScope();
// console.log(funcVar); // Xato: funcVar topilmadi

// 8
let passTest = true;
let hasDriversLicence = false;
if (passTest) {
  hasDriversLicence = true;
}
console.log("passTest =", passTest);
console.log("hasDriversLicence =", hasDriversLicence);

// 9
const myName = "Sardor";
console.log("myName =", myName);
// myName = "Ali"; // Xato: const ni ozgartirib bulmidi

// 10
let num = "10";
console.log("num (satr) =", num, "type:", typeof num);
num = Number(num);
console.log("num (son) =", num, "type:", typeof num);

console.log("\n=== 2-bo'lim: DOM ===");

// 11
let h1 = document.getElementsByTagName("h1")[0];
console.log("h1:", h1);

// 12
let body = document.querySelector("body");
console.log("body:", body);

// 13
let main = document.getElementById("main");
console.log("main:", main);

// 14
let items = document.getElementsByClassName("item");
console.log("items:", items);

// 15
h1.innerHTML = "Dars boshlandi";
console.log("h1 innerHTML:", h1.innerHTML);

// 16
let div = document.createElement("div");
div.innerHTML = "<b>Salom</b>";
document.body.appendChild(div);
console.log("div ichida <b>Salom</b>:", div.innerHTML);

// 17
let p = document.querySelector("p");
p.innerText = "Yangi matn";
console.log("p innerText:", p.innerText);

// 18
let delSpan = document.createElement("span");
delSpan.innerHTML = "<del>Eski matn</del>";
document.body.appendChild(delSpan);
console.log("del effekti:", delSpan.innerHTML);

// 19
console.log("body elementi:", body);

// 20
let notExist = document.getElementById("nonexistent");
console.log("mavjud bulmagan element:", notExist); // null

console.log("\n=== 3-bo'lim: Element yaratish ===");

// 21 - Yangi P yaratish
let newP = document.createElement("p");
console.log("Yangi p:", newP);

// 22 - Matn qo'shish
newP.innerText = "Men yangi paragrafman";
console.log("p matni:", newP.innerText);

// 23 - Body'ga qo'shish (append)
document.body.appendChild(newP);
console.log("p qo'shildi");

// 24 - H2 yaratish
let h2 = document.createElement("h2");
h2.innerText = "Mavzu: DOM";
document.body.appendChild(h2);

// 25 - Ro'yxat yaratish (ul > li)
let ul = document.createElement("ul");
let li = document.createElement("li");
li.innerText = "Birinchi element";
ul.appendChild(li);
document.body.appendChild(ul);

// 26 - Bir nechta span
let span1 = document.createElement("span");
span1.innerText = "Bir";
document.body.appendChild(span1);
let span2 = document.createElement("span");
span2.innerText = "Ikki";
document.body.appendChild(span2);
let span3 = document.createElement("span");
span3.innerText = "Uch";
document.body.appendChild(span3);

// 27 - Link yaratish
let link = document.createElement("a");
link.innerText = "Google";
link.href = "https://google.com";
document.body.appendChild(link);

// 28 - Rasm qo'shish
let img = document.createElement("img");
img.src = "https://via.placeholder.com/150";
img.alt = "Placeholder";
document.body.appendChild(img);

// 29 - Prepend (boshiga qo'shish)
// let container = document.createElement("div");
// container.prepend(newP);

// 30 - Elementni o'chirish
let toRemove = document.getElementById("main");
if (toRemove) {
  toRemove.remove();
  console.log("main o'chirildi");
}


