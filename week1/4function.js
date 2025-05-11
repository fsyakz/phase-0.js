console.log('-----no 1-----')
function addName(){
    console.log(arguments[0])
    console.log(arguments[1])
} addName('fasya' , 'alghoniyyu')



console.log('-----no 2-----')
 function tambahAngka(angka1, angka2){
    return angka1 + angka2;
 }
 console.log(tambahAngka(1,2)) 
 console.log(tambahAngka(3,4))
 console.log(tambahAngka(5,6))
 console.log(tambahAngka(7,8))
 console.log(tambahAngka(9,10))



 console.log('-----no 3-----')
 function balikKata(kata) {
    let kataTerbalik = "";
    for ( i = kata.length - 1; i >= 0; i--) {
      kataTerbalik += kata[i];
     }
     return kataTerbalik;
   }
      
   console.log(balikKata('gajah'));
   console.log(balikKata('ular'));
   console.log(balikKata('cicak'));



console.log('-----no 4-----')
function nambahinHurufBesar(kata){
    let result = '';
    for ( i = 0; i < kata.length; i++){
        if(i === 0 || kata[i - 1] === ' '){
            result += kata[i].toUpperCase();
        } else {
            result += kata[i]
        }
    }return result;
} console.log(nambahinHurufBesar('fasya'))
console.log(nambahinHurufBesar('aldi'))
console.log(nambahinHurufBesar('mawan'))
