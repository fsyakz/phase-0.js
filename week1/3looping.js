
console.log("Menggunakan for loop:");
for (let i = 0; i <= 5; i++) {
    if (i % 2 !== 0) {
        console.log('data ke -', i);
    }
}

console.log("\n"); 




console.log("Menggunakan while loop:");
let x = 0;
while (x <= 5) {
    if (x % 2 !== 0) {
        console.log('data ke -', x);
    }
    x++; 
}

console.log("\n"); 


console.log("Menggunakan do...while loop:");
let y = 0;
do {
    if (y % 2 !== 0) {
        console.log('data ke -', y);
    }
    y++;
} while (y <= 5);
