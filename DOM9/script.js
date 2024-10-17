

// retrive --- element ----- document--- obj --- html page
let byId = document.querySelector('#one')
let byId2 = document.getElementById('one')
console.log(byId)
console.log(byId2)

// tagName
let firstE = document.querySelector('li')
let allElements = document.querySelectorAll('li')
let byGetAllElements = document.getElementsByTagName('li')

console.log(firstE)
console.log(allElements)
console.log(byGetAllElements)

// className
let firstName = document.querySelector('.fr')
let allEByClassFr = document.querySelectorAll('.fr')
let htmlCollection = document.getElementsByClassName('fr')

console.log(firstName)
console.log(allEByClassFr)
console.log(htmlCollection)


// name 
let nm = document.querySelector('li[name= "nm"]')
let allE = document.querySelectorAll('li[name="nm"]')
let allE2 = document.getElementsByName('nm')
console.log(allE)
console.log(allE2)

// changing color on userClick
let buttonA = document.querySelector('#four')
let allLiE = document.querySelectorAll('li') // nodeList
buttonA.addEventListener('click', function () {
    for (let i = 0; i < allLiE.length; i++) {
        if (i % 2 == 0) {
            allLiE[i].style.color = "green"
        }
        else {
            allLiE[i].style.color = "red"
        }
    }
})