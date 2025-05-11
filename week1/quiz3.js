console.log('-----no 1-----')
// let i = 0;
while ( i <= 10){
    console.log(`looping ke ${i}`)
    i++
}
let j = 10;
while ( j >= 0){
    console.log(`looping ke ${j}`)
    j--
}

console.log('-----no 2-----')
// let i = 1;
for( i = 0; i <= 10; i++){
    console.log(`looping ke ${i}`)
}
// let j = 10;
for(j = 10; j >= 1; j--){
    console.log(`looping ke ${j}`)
}

console.log('-----no 3-----')
for (i = 1; i <= 100; i++){
    if (i % 2 === 0){
        console.log(`${i} genap`)
    } else {
        console.log(`${i} ganjil`)
    }
}    


console.log('-----no 4-----')
for (i = 1; i <= 100; i += 2){
    if(i % 3 === 0){
        console.log(` kelipatan 3 ${i}`)
    }
}

for (j = 1; j <= 100; j += 5){
    if(j % 6 === 0){
        console.log(` kelipatan 6 ${j}`)
    }
}
 for (k = 1; k <= 100; k += 9){
    if(k % 10 === 0){
        console.log(` kelipatan 10 ${k}`)
    }
}

console.log('-----no 5-----')
let bintang = '';

for (i = 0; i <= 5; i++ ){
        bintang += ' ';
    for (j = 0; j < i; j++){
        bintang += '*';
    } bintang += '\n'
} console.log (bintang)
