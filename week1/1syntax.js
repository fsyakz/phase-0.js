console.log("--- Operator Aritmatika ---");

let a = 10;
let b = 20;

console.log(`a = ${a}`)
console.log(`b = ${b}`)

let penjumlahan = a + b 
console.log(`${a} + ${b} = ${penjumlahan}`)

let pengurangan = a - b 
console.log(`${a} - ${b} = ${pengurangan}`)

let perkalian = a * b 
console.log(`${a} * ${b} = ${perkalian}`)

let pembagian = a / b 
console.log(`${a} / ${b} = ${pembagian}`)

let modulus = a % b 
console.log(`${a} % ${b} = ${modulus}`)

let pangkat = a ** 2;
console.log(`${a} ** 2 = ${pangkat}`)


console.log("\n--- Operator Penugasan (Assignment) ---");

let c = 100;

c += -10; 
     console.log(` c = ${c}`)
c -= 600; 
    console.log(` c = ${c}`)
c *= 80; 
     console.log(` c = ${c}`)
c /= 2; 
    console.log(` c = ${c}`)
c **= 3; 
    console.log(` c = ${c}`)
c %= 2; 
    console.log(` c = ${c}`)
    

console.log("\n--- Operator Perbandingan (Comparison) ---");

let x = 8;
let y = "8";

console.log(`x = ${x}`);
console.log(`y = "${y}"`);

console.log(`x == y (sama dengan nilai): ${x == y}`);
console.log(`x === y (sama dengan nilai dan tipe data): ${x === y}`);
console.log(`x != y (tidak sama dengan nilai): ${x != y}`);
console.log(`x !== y (tidak sama dengan nilai atau tipe data): ${x !== y}`);
console.log(`x > 5: ${x > 5}`);
console.log(`x < 10: ${x < 10}`);
console.log(`x >= 8: ${x >= 8}`);
console.log(`x <= 7: ${x <= 7}`);

console.log("\n--- Operator Logika (Logical) ---");

let kondisi1 = true;
let kondisi2 = false;

console.log(`kondisi1 = ${kondisi1}`);
console.log(`kondisi2 = ${kondisi2}`);

console.log(`kondisi1 && kondisi2 (AND): ${kondisi1 && kondisi2}`);
console.log(`kondisi1 || kondisi2 (OR): ${kondisi1 || kondisi2}`);
console.log(`!kondisi1 (NOT): ${!kondisi1}`);



console.log("\n--- Operator Increment dan Decrement ---");

let counter = 5;
    console.log(`counter awal ${counter}`);
    counter++;
    console.log(`counter++ (setelah) ${counter}`)
    ++counter;
    console.log(`++counter (sebelum) ${counter}`)
    counter--;
    console.log(`--counter (setelah) ${counter}`)
    --counter;
    console.log(`counter-- (sebelum) ${counter}`)
    
