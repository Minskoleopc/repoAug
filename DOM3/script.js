//<h1 class = "one" id = "two" name = "nm">Hello</h1>

let tagName = document.querySelector('h1')
let className = document.querySelector('.one')
let id = document.querySelector('#two')
let byAtt = document.querySelector('h1[name= "nm"]')

console.log(tagName)
console.log(className)
console.log(id)
console.log(byAtt)

// program 1
byAtt.addEventListener('click',function(){
    byAtt.textContent = "Bye"
})









// console.log(className.textContent)
// className.textContent = "bye"

// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande"    
// }
// info.firstName = "tanmay"
// console.log(info.firstName)
// console.log(info['firstName'])