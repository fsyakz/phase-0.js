console.log('-----no 1-----')
let nama = "fasya"
let peran = "tabib";

if(peran === "ksatria"){
    console.log(`halo  ${nama} kamu dapat menyerang dengan senjatamu`)
}
else if(peran === "tabib"){
    console.log(`halo  ${nama}  kamu akan membantu temanmu yang terluka`)
}
else if(peran === "penyihir"){
    console.log(`halo  ${nama} ciptakan keajaiban yang membantu kemenanganmu!`)
}
else {
    console.log('tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada')
}

//algoritma
// MULAI
// DEKLARASIKAN variabel nama dan inisialisasi dengan nilai "fasya".
// DEKLARASIKAN variabel peran dan inisialisasi dengan nilai "ksatria".
// PERIKSA apakah nilai peran sama dengan "ksatria".
// JIKA YA, cetak pesan: "Halo Ksatria [nilai dari nama], kamu dapat menyerang dengan senjatamu!".
// SELAIN ITU, PERIKSA apakah nilai peran sama dengan "tabib".
// JIKA YA, cetak pesan: "Halo Tabib [nilai dari nama], kamu akan membantu temanmu yang terluka.".
// SELAIN ITU, PERIKSA apakah nilai peran sama dengan "penyihir".
// JIKA YA, cetak pesan: "Halo Penyihir [nilai dari nama], ciptakan keajaiban yang membantu kemenanganmu!".
// SELAIN ITU (jika semua kondisi di atas salah), cetak pesan: "Tapi kayaknya kamu jadi bot aja ya, peran "[nilai dari peran]" yang kamu pilih ga ada.".
// SELESAI


console.log('-----no 2-----')
let tanggal = 12; 
let bulan = 2; 
let tahun = 2001; 
let namaBulan;

switch(bulan){
    case 1:
    namaBulan = "januari";
    break;
    case 2:
    namaBulan = "februari";
    break;
    case 3:
    namaBulan = "maret";
    break;
    case 4:
    namaBulan = "april";
    break;
    case 5:
    namaBulan = "mei";
    break;
    case 6:
    namaBulan = "juni";
    break;
    case 7:
    namaBulan = "juli";
    break;
    case 8:
    namaBulan = "agustus";
    break;
    case 9:
    namaBulan = "september";
    break;
    case 10:
    namaBulan = "oktober";
    break;
    case 11:
    namaBulan = "november";
    break;
    case 12:
    namaBulan = "desember";
    break;
    default:
    namaBulan = "tidak ditemukan";
    
}  
console.log(`${tanggal} ${namaBulan} ${tahun}`)
