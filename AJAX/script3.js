// // static object
// let userResponse = {
//     postId: 1,
//     id: 1,
//     name: "id labore ex et quam laborum",
//     email: "Eliseo@gardner.biz",
//     body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
// }

// let buttonOne = document.querySelector('#one')

// buttonOne.addEventListener('click',function(){
//     renderHtml(userResponse)
// })


// function renderHtml(obj){
//     document.write(`<h1>${obj.id}</h1>`)
//     document.write(`<h1>${obj.name}</h1>`)
//     document.write(`<h1>${obj.email}</h1>`)
//     document.write(`<h1>${obj.body}</h1>`)
// }


// program 2
// actual API call 
let addButton = document.querySelector('#one')

function getUser(){
    fetch(`https://jsonplaceholder.cypress.io/comments/1`)
    .then(function(response){
       return response.json()
    })
    .then(function(obj){
        document.write(`<h1>${obj.id}</h1>`)
        document.write(`<h1>${obj.name}</h1>`)
        document.write(`<h1>${obj.email}</h1>`)
        document.write(`<h1>${obj.body}</h1>`)
    })
}

addButton.addEventListener('click',function(){
    getUser()
})