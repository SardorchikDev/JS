// 1
function sayHello() {
  alert("Salom JavaScript");
}

// 2
function greet(name) {
  console.log("Salom " + name);
}

// 3
function square(num) {
  return num ** num;
}

// 4
function checkEven(num) {
  if (num % 2 === 0) {
    console.log("Juft");
  } else {
    console.log("Toq");
  }
}

// 5
function upperCase(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

// 6
const sayBye = function () {
  alert("Xayr");
};

// 7
const sum = function (a, b) {
  return a + b;
};

// 8
const multiply = function (a, b) {
  return a * b;
};

// 9
const nameLength = function (name) {
  return name.length;
};

// 10
const lastLetter = function (word) {
  return word.charAt(word.length - 1);
};

// 11
const sayHi = () => {
  console.log("Hi");
};

// 12
const power = (num) => num ** 3;

// 13
const repeatWord = (word) => word.repeat(4);

// 14
const firstLetter = (word) => word.charAt(0);

// 15
const sliceWord = (word) => word.slice(0, 3);

// 16
function greetUser(name) {
  alert("Salom " + name);
}
const userName = prompt("Ismingizni kiriting:");
greetUser(userName);

// 17
function powerFive(num) {
  return num ** 5;
}
const number1 = Number(prompt("Son kiriting:"));
alert(powerFive(number1));

// 18
function toUpperText(text) {
  return text.toUpperCase();
}
const textInput = prompt("Matn kiriting:");
alert(toUpperText(textInput));

// 19
function splitName(name) {
  return name.split("");
}
const nameInput = prompt("Ism kiriting:");
console.log(splitName(nameInput));

// 20
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    alert("Juft");
  } else {
    alert("Toq");
  }
}
const number2 = Number(prompt("Son kiriting:"));
checkEvenOdd(number2);
