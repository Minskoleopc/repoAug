let headOone = document.querySelector('h1')
let inputE = document.querySelector('input')
let butttonE = document.querySelector('button')


butttonE.addEventListener('click',function(){
    let colorText = inputE.value  // red
    headOone.style.color = colorText
    inputE.value = ""
})

