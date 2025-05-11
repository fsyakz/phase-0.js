console.log('-----no 1-----')
function shoutOut(kata){
    return kata;
} console.log(shoutOut("Halo Function!"))



console.log('-----no 2-----')
function calculateMultiply(angka1, angka2) {
    return angka1 * angka2;
}
  
  let num1 = 3;
  let num2 = 4;
  let hasilPerkalian = calculateMultiply(num1, num2);
  console.log(hasilPerkalian);
  
  console.log('');


  console.log('-----no 3-----')
function processSentence(name, age, address, hobby) {
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
  }
  
  let name = "Agus";
  let age = 30;
  let address = "Jln. Malioboro, Yogjakarta";
  let hobby = "gaming";
  
  let fullSentence = processSentence(name, age, address, hobby);
  console.log(fullSentence);
