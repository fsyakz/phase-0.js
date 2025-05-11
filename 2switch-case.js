console.log('-----no 1-----')
let hari = 3;
let namaHari;

switch(hari) {
  case 1:
  namaHari = "senin";
  break;
  case 2:
  namaHari = "selasa";
  break;
  case 3:
  namaHari = "rabu";
  break;
  case 4:
  namaHari = "kamis";
  break;
  case 5:
  namaHari = "jumat";
  break;
  case 6:
  namaHari = "sabtu";
  break;
  case 7:
  namaHari = "minggu";
  break;
  default:
    namaHari = "tidak ditemukan";

}
console.log (`hari ke ${hari} adalah hari ${namaHari}`)

console.log('-----no 2-----')

let nama = 'M';
let kendaraan;

switch(nama){
  case 'M':
   kendaraan = 'Mobil'
  break;
  case 'S':
   kendaraan = 'Sepeda motor'
  break;
  case 'B':
   kendaraan = 'Bus'
  break;
  case 'T':
   kendaraan = 'Truk'
  break;
  default:
    kendaraan = 'Kode kendaraan tidak valid'
}
console.log (`${nama} adalah ${kendaraan}`)

console.log('-----no 3-----')
// (angka1, angka2) dan sebuah operator (operator) sebagai input. Operator 
// bisa berupa '+', '-', '*', atau '/'. Gunakan switch case untuk melakukan 
// operasi aritmatika yang sesuai dan mengembalikan hasilnya. Jika operator 
// tidak valid, kembalikan pesan "Operator tidak valid". Pastikan untuk menangani
//  kasus pembagian dengan nol.

let angka1 = 10;
let angka2 = 20;
let operator = '*'
let hasil;

switch(operator){
  case '+':
    hasil = angka1 + angka2
  console.log(`${angka1} + ${angka2} = ${hasil}`)
  break;
  case '-':
    hasil = angka1 - angka2
  console.log(`${angka1} - ${angka2} = ${hasil}`)
  break;
  case '*':
    hasil = angka1 * angka2
  console.log(`${angka1} * ${angka2} = ${hasil}`)
  break;
  case '/':
    if (angka2 === 0) {
      console.log("Tidak dapat melakukan pembagian dengan nol");
    } else {
      hasil = angka1 / angka2;
      console.log(`${angka1} / ${angka2} = ${hasil}`);
    }
    break;
   default:
    hasil = "tidak dapat menentukan hasil"
    break

   
}