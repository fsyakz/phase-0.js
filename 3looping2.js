// Skrip 1
let kata = ["Halo", "Selamat", "Jumpa", "Lagi"];
let hasil = 0;
for (i = 0; i < kata.length; i++) {
    hasil += kata;
}
console.log(`${kata}`);
console.log("--------------------"); // 

// Skrip 2
let angka = [5, 12, 8, 15, 3, 10];
for (i = 0; i < angka.length; i++) {
    if (angka[i] > 7) {
        console.log(`${angka[i]}`);
    }
}
console.log("--------------------"); 

// Skrip 3
let buah = ["alpukat", "anggur", "pisang", "ceri", "duku"];
for (i = 0; i < buah.length; i++) {
    if (buah[i].includes("a")) {
        console.log(`${buah[i]}`);
    }
}
console.log("--------------------"); 

// Skrip 4
let bilangan = [-2, 5, 0, -8, 10, 0, -3];
for (i = 0; i < bilangan.length; i++) {
    if (bilangan[i] > 0) {
        console.log("positif");
    } else if (bilangan[i] < 0) {
        console.log("negatif");
    } else {
        console.log("0");
    }
}
