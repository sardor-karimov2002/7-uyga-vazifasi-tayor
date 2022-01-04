
// var x1 = Number(prompt("x1dadsdsfAESDF=")); 
// var y1 = Number(prompt("y1SDFSD="));
// // (E4)

// var x2 =  Number(prompt("x2="));
// var y2 = Number(prompt("y2="));
// // (B6)

// if(!(x1 >= 1 && x1 <=8 && y1 <=8 && y1>=1)){
//     console.log("Ot turgan katak noto'g'ri kiritildi.")
// }else if(!(x2 >= 1 && x2 <=8 && y2 <=8 && y2 >= 1)){
//     console.log("Ot o'tmoqchi bo'lgan katak noto'g'ri kiritildi")
// }else if((Math.abs(x2-x1) === 2  && Math.abs(y2-y1) === 1) || (Math.abs(y2-y1) === 2  && Math.abs(x2-x1) === 1)){
//     console.log("Ot bu katakka o'ta oladi")
// }else {
//     console.log("Ot bu katakka o'ta olmaydi")
// }



// var nameInput=document.getElementById('name')

// var nameInput=document.querySelector("#name")

// var nameInputs=document.getElementsByClassName("sardor")
// var nameInputs=document.querySelector(".sardor")

// var nameInputs =document.getElementsByTagName('input')
// console.log( nameInputs)


var form = document.querySelector('#calc')
var fristVar=document.getElementById('first')
var secondVar=document.getElementById('second')
var resultSpan=document.getElementById('result')

form.addEventListener('submit',function(event){
    event.preventDefault()
    var a = fristVar.value
    var b = secondVar.value
    if(b==0){
        resultSpan.textContent='Bo\'luvchi 0 bo\'lishi mumkin emas'
    }else{
        resultSpan.textContent=a/b
    }
   
})
