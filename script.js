//1
function formatIsm(ism) {
    let sozlar = ism.trim().split(' ');
    let formatlangan = sozlar.map(soz => 
        soz.charAt(0).toUpperCase() + soz.slice(1).toLowerCase()
    ).join(' ');
    return formatlangan;
}

//2
function calc(num) {
    let natija = num ** 4;
    return natija % 2 === 0 ? "Juft son" : "Toq son";
}

//3
function tekshirMatn(matn) {
    let kichikMatn = matn.toLowerCase();
    if (kichikMatn.includes('js') || kichikMatn.includes('javascript')) {
        return "Matnda JS yoki JavaScript mavjud";
    } else {
        return "Matnda JS yoki JavaScript mavjud emas";
    }
}

//4
function teskari(soz) {
    return soz.split('').reverse().join('');
}

//5
function uzunlikTekshir(soz) {
    if (soz.length > 5) {
        return "Uzun so‘z";
    }
    return soz;
}

//6
function amallar(son1, son2) {
    let yigindi = son1 + son2;
    let ayirma = son1 - son2;
    let kopaytma = son1 * son2;
    let bolinma = son2 !== 0 ? son1 / son2 : "Cheksiz (0 ga bo'lib bo'lmaydi)";
    return `Yig'indi: ${yigindi}, Ayirma: ${ayirma}, Ko'paytma: ${kopaytma}, Bo'linma: ${bolinma}`;
}

//7
function countA(matn) {
    let counter = 0;
    for (let i = 0; i < matn.length; i++) {
        if (matn[i] === 'a') counter++;
    }
    return counter;
}

//8
function boshString(matn) {
    if (matn === "") {
        return "Xato";
    }
    return matn;
}

//9
function harfQator(soz) {
    return soz.split('').join('\n');
}

//10
function capitalizeWords(matn) {
    let sozlar = matn.split(' ');
    let natija = sozlar.map(soz => 
        soz.charAt(0).toUpperCase() + soz.slice(1).toLowerCase()
    ).join(' ');
    return natija;
}

//11
function musbatManfiy(son) {
    if (son > 0) return "Musbat";
    if (son < 0) return "Manfiy";
    return "Nol";
}

//12
function oxirgiUch(soz) {
    if (soz.length < 3) return soz;
    return soz.slice(-3);
}

//13
function takrorla(soz) {
    return soz.repeat(3);
}

//14
function nolTekshir(son) {
    return son === 0 ? "Nol" : "Nol emas";
}

//15
function ismTahlil(ism) {
    let toza = ism.trim().toLowerCase();
    let formatlangan = toza.charAt(0).toUpperCase() + toza.slice(1);
    let uzunlik = formatlangan.length;
    return `${formatlangan}\nUzunligi: ${uzunlik}`;
}


console.log(formatIsm("   doston qodirov  "));          
console.log(calc(2));                                   
console.log(tekshirMatn("Men javascript o'rganyapman"));
console.log(teskari("salom"));                           
console.log(uzunlikTekshir("assalomu"));                 
console.log(amallar(10, 5));                             
console.log(countA("salom dunyo"));                      
console.log(boshString(""));                              
console.log(harfQator("salom"));                          
console.log(capitalizeWords("salom dunyo"));              
console.log(musbatManfiy(-3));                             
console.log(oxirgiUch("salom"));                           
console.log(takrorla("salom"));                           
console.log(nolTekshir(0));                                
console.log(ismTahlil("   DOSton   "));                    
