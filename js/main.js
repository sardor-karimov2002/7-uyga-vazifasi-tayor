const dollir_sped=10800
const rubl_sped=10354.03
const euro_sped=160
var form = document.querySelector('#calc')
var fristVar=document.getElementById('first')
var secondVar=document.getElementById('second')
var resultSpan=document.getElementById('result')



form.addEventListener('submit',function(event){
    
    firstVarValue = fristVar.value - 0
    event.preventDefault();
    console.log(firstVarValue   )
    if(secondVar.value==='USD'){
        resultSpan.textContent= convert(firstVarValue,dollir_sped)
        console.log(convert(firstVarValue,dollir_sped))
    }
    if(secondVar.value==='RUB'){
        resultSpan.textContent= convert(firstVarValue,rubl_sped)
    }
    if(secondVar.value==='EUR'){
        resultSpan.textContent= convert(firstVarValue,euro_sped)
    }
})

function convert(firstValue ,cur){
    return firstValue/cur
}



