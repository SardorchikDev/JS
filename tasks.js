//1
let name1 = prompt("Ismingizni kiriting:");
if (name1) {
    let capitalized = name1.charAt(0).toUpperCase() + name1.slice(1);
    console.log(capitalized);
}

//2 
let name2 = prompt("Ismingizni kiriting:");
console.log(name2.slice(0, 3));

//3 
let name3 = prompt("Ismingizni kiriting:");
console.log(name3.split(""));

//4 
let word4 = prompt("So'z kiriting:");
console.log(word4.repeat(5));

//5 
let name5 = prompt("Ismingizni kiriting:");
console.log(name5.slice(-2));

//6
let name6 = prompt("Ismingizni kiriting:");
console.log(name6.toUpperCase());

//7 
let text7 = prompt("Matn kiriting:");
console.log(text7.includes("a"));

//8 
let text8 = prompt("Matn kiriting:");
console.log(text8.length);

//9
let name9 = prompt("Ismingizni kiriting:");
console.log(name9.split(""));

//10 
let name10 = prompt("Ismingizni kiriting:");
console.log("Salom " + name10);

//11 
let isOnline = true; // yoki false
if (isOnline) {
    console.log("Yoza olaman");
} else {
    console.log("Yoza olmayman");
}

//12 
let age12 = +prompt("Yoshingizni kiriting:");
if (age12 > 18) {
    console.log("Kirish mumkin");
}

//13 
let num13 = +prompt("Son kiriting:");
if (num13 === 0) {
    console.log("Son nol");
}

//14 
let user14 = prompt("Ismingizni kiriting:");
if (user14 === "admin") {
    console.log("Xush kelibsiz admin");
}

//15 
let num15 = +prompt("Son kiriting:");
if (num15 < 0) {
    console.log("Manfiy son");
}

//16 
let name16 = prompt("Ismingizni kiriting:");
if (name16 === "") {
    console.log("Ism kiritilmadi");
}

//17 
let text17 = prompt("Matn kiriting:").toLowerCase();
if (text17.includes("js") || text17.includes("javascript")) {
    console.log("Topildi");
}

//18 
let num18 = +prompt("Son kiriting:");
if (num18 <= 0) {
    console.log("Xato son");
}

//19 
let name19 = prompt("Ismingizni kiriting:");
if (name19.length > 5) {
    console.log("Uzun ism");
}

//20 
let name20 = prompt("Ismingizni kiriting:");
if (name20 === "Ali" || name20 === "Vali") {
    console.log("Ruxsat bor");
}
