
// selecting the element 

// on user action , create the element 
// adding the text , place the element in list


let input = document.querySelector('input')
let olList = document.querySelector('ol')
let addButton = document.querySelector('button')

addButton.addEventListener('click',function(){
    let text = input.value
    let newList = document.createElement('li') // <li></li>
    newList.textContent = text // <li>papaya</li>
    olList.appendChild(newList)
    input.value = ""
})