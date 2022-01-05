var form = document.querySelector('#calc')
var fristVar=document.getElementById('first')
var secondVar=document.getElementById('second')
var resultSpan=document.getElementById('result')

secondVar.addEventListener('change',function(event){
    event.preventDefault()
    resultSpan.textContent=fristVar.value/100

})

form.addEventListener('submit',function(event){
    event.preventDefault()

    resultSpan.textContent=fristVar.value/10354.03
})


euro.addEventListener('keyup',function(event){
    event.preventDefault()
    resultSpan.textContent=secondVar.value/160

})

