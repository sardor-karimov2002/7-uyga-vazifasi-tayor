
var x1 = Number(prompt("x1dadsd=")); 
var y1 = Number(prompt("y1="));
// (E4)

var x2 =  Number(prompt("x2="));
var y2 = Number(prompt("y2="));
// (B6)

if(!(x1 >= 1 && x1 <=8 && y1 <=8 && y1>=1)){
    console.log("Ot turgan katak noto'g'ri kiritildi.")
}else if(!(x2 >= 1 && x2 <=8 && y2 <=8 && y2 >= 1)){
    console.log("Ot o'tmoqchi bo'lgan katak noto'g'ri kiritildi")
}else if((Math.abs(x2-x1) === 2  && Math.abs(y2-y1) === 1) || (Math.abs(y2-y1) === 2  && Math.abs(x2-x1) === 1)){
    console.log("Ot bu katakka o'ta oladi")
}else {
    console.log("Ot bu katakka o'ta olmaydi")
}



// var x1=5;
// var y1=4;
//   // (E4)
// var x2=2;
// var y2=6;
// // (b6)
// if(!(x1 >=1 && x1 <=8 && y1<=8 && y1>=1) ){
//     console.log("Ot turgan katak natog'ri kiritildi.")
// }else if(!(x2 >=1 && x2 <=8 && y2<=8 && y2>=1 )){
//     console.log("Ot otmoqchi bulgan katak natogri kiritildi.")
// }else if((Math.abs(x2-x1)===2  && Math.abs(y2-y1)===1) || (Math.abs(y2-y1)===2  && Math.abs(x2-x1)===1) ){
//     console.log("ot bu katakka ota oladi")
// }else {
//     console.log("ot bu katakka ota olmaydi")    
// }
