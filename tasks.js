// 1
let num1 = prompt("1) Son kiriting:");
console.log(Number(num1));

// 2
let strNum = "123";
let num2 = Number(strNum);
console.log(num2, typeof num2);

// 3
let num3 = 456;
let str3 = String(num3);
console.log(str3, typeof str3);

// 4
console.log(Boolean(0));

// 5
console.log(Boolean(1));

// 6
console.log(Boolean(""));

// 7
console.log(Boolean("Salom"));

// 8
console.log(parseInt("25"));

// 9
console.log(parseFloat("12.75"));

// 10
console.log(parseInt("123abc"));

// 11
console.log("5" + 2); // "52"

// 12
console.log("5" - 2); // 3

// 13
console.log("10" * "2"); // 20

// 14
console.log("20" / "4"); // 5

// 15
console.log("5" + true); // "5true"

// 16
console.log("5" - true); // 4

// 17
console.log(true + true); // 2

// 18
console.log(false + 10); // 10

// 19
console.log(null + 5); // 5

// 20
console.log(undefined + 5); // NaN

// 21
let age = prompt("21) Yoshingizni kiriting:");
let newAge = Number(age) + 5;
alert("5 yildan keyin yoshingiz: " + newAge);

// 22
let a = prompt("22) 1-son:");
let b = prompt("22) 2-son:");
console.log("Number qilmasdan:", a + b);
console.log("Number bilan:", Number(a) + Number(b));

// 23
console.log("100" + 50);
console.log(Number("100") + 50);

// 24
console.log(Boolean("0")); // true

// 25
console.log(Boolean(" ")); // true

// 26
console.log(Boolean("false")); // true

// 27
console.log(Boolean(NaN)); // false

// 28
console.log(typeof NaN); // number

// 29
console.log(parseInt("15px")); // 15

// 30
let userNum = prompt("30) Son kiriting:");
if (isNaN(userNum)) {
  alert("Bu son emas!");
} else {
  alert("Siz kiritgan son: " + userNum);
}
