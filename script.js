//1
for (let i = 1; i <= 10; i++) console.log(i);

//2

for (let i = 1; i <= 20; i++) console.log(i);

//3
for (let i = 10; i >= 1; i--) console.log(i);

//4
for (let i = 0; i <= 100; i += 5) console.log(i);

//5
for (let i = 1; i <= 50; i++) console.log(i);

//6
for (let i = 1; i <= 20; i++) if (i % 2 === 0) console.log(i);

//7
for (let i = 1; i <= 20; i++) if (i % 2 !== 0) console.log(i);

//8
let sumEven = 0;
for (let i = 1; i <= 100; i++) if (i % 2 === 0) sumEven += i;
console.log(sumEven);

//9
let sumOdd = 0;
for (let i = 1; i <= 100; i++) if (i % 2 !== 0) sumOdd += i;
console.log(sumOdd);

//10
for (let i = 1; i <= 50; i++) if (i % 3 === 0) console.log(i);

//11
let sum1To10 = 0;
for (let i = 1; i <= 10; i++) sum1To10 += i;
console.log(sum1To10);

//12
let n = parseInt(prompt("N ni kiriting:"));
let sum1ToN = 0;
for (let i = 1; i <= n; i++) sum1ToN += i;
console.log(sum1ToN);

//13
let product = 1;
for (let i = 1; i <= 10; i++) product *= i;
console.log(product);

//14
let evenCount = 0;
for (let i = 1; i <= 20; i++) if (i % 2 === 0) evenCount++;
console.log(evenCount);

//15
let oddCount = 0;
for (let i = 1; i <= 50; i++) if (i % 2 !== 0) oddCount++;
console.log(oddCount);

//16
let num16 = parseInt(prompt("Son kiriting:"));
for (let i = 1; i <= num16; i++) if (i % 2 === 0) console.log(i);

//17
let num17 = parseInt(prompt("Son kiriting:"));
for (let i = 1; i <= num17; i++) if (i % 2 !== 0) console.log(i);

//18
let num18 = parseInt(prompt("Son kiriting:"));
let sum18 = 0;
for (let i = 1; i <= num18; i++) sum18 += i;
console.log(sum18);

//19
for (let i = 1; i <= 100; i++) if (i % 3 === 0 && i % 5 === 0) console.log(i);

//20
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) console.log("Juft");
    else console.log("Toq");
}
