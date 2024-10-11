// <h3 class = three id = "four" name = "five">Hello3</h3>

// css selector

// selecting the element - CSS selector

    // tagName 

    let byTagName = document.querySelector('h3')
    console.log(byTagName)

    // className 
    let byClassName = document.querySelector('.three')
    console.log(byClassName)

    // id 
    let byId = document.querySelector('#four')
    console.log(byId)

    // byAttr
    // tagName[attr = "value"]

    let byAttr = document.querySelector('h3[name="five"]')
    console.log(byAttr)