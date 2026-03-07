console.log("1:", Boolean(0));
console.log("2:", Boolean("0"));
console.log("3:", Boolean(""));
console.log("4:", Boolean(" "));
console.log("5:", Boolean(null));
console.log("6:", Boolean(undefined));
console.log("7:", Boolean(NaN));
console.log("8:", Boolean(100));
console.log("9:", Boolean("JavaScript"));
console.log("10:", Boolean(-1));



console.log("11:", true && false);
console.log("12:", true && "Salom");
console.log("13:", 0 && "JavaScript");
console.log("14:", "Hello" && 100);
console.log("15:", null && "JS");



console.log("16:", true || false);
console.log("17:", false || "Salom");
console.log("18:", 0 || "JavaScript");
console.log("19:", null || 100);
console.log("20:", undefined || "Frontend");



console.log("Bonus:", "" || 0 || null || "JS" || 5);
