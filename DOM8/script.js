let addButton = document.querySelector('#one')
let ulList = document.querySelector('ul')
let inputElement = document.querySelector('input')


addButton.addEventListener('click',function(){
    let text  = inputElement.value
    let newLi = document.createElement('li') // <li><li>
    newLi.textContent = text // <li>Papaya</li>
    createButtons(newLi)
    ulList.appendChild(newLi)
    inputElement.value = ""
})

ulList.addEventListener('click',function(event){
    // console.log(event.target)
    // console.log(event.target.tagName)
    // console.log(event.target.className)

    if(event.target.tagName == "BUTTON"){

        if(event.target.className == "remove"){
            let li = event.target.parentElement // inbulid property
            let ul = li.parentElement
            ul.removeChild(li)
        }
        else if(event.target.className == "up"){
            let li = event.target.parentElement
            let ul = li.parentElement
            let prev = li.previousElementSibling // null --- js --falsy value
            if(prev){
                ul.insertBefore(li,prev)
            }
            
        }
        else if(event.target.className == "down"){
            let li = event.target.parentElement
            let ul = li.parentElement
            let next = li.nextElementSibling // null --- js --falsy value
            if(next){
                ul.insertBefore(next,li)
            }
        }

    }


})








{/* <button class = remove>Remove</button>
<button class = up>Up</button>
<button class = down>Down</button> */}


function createButtons(li){
    
    let r = document.createElement('button') // <button></button>
    r.textContent = "Remove" // <button>Remove</button>
    r.classList.add('remove') // <button class = "remove">Remove</button>
    li.appendChild(r)


    
    let u = document.createElement('button') // <button></button>
    u.textContent = "Up" // <button>Up</button>
    u.classList.add('up') // <button class = "up">Up</button>
    li.appendChild(u)


    
    let d = document.createElement('button') // <button></button>
    d.textContent = "Down" // <button>Down</button>
    d.classList.add('down') // <button class = "down">Down</button>
    li.appendChild(d)

}