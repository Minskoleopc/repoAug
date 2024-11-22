function fetUsers(){
    return fetch("https://gorest.co.in/public/v2/users",{
        method:"GET",
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json",
            "Authorization":"Bearer cd2ac6be51d3e141feb492b0cc0ddd8d3eb8d0bc7da80d1a1ef57ecdd74bf517"
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        return response
    })

}

function singleUser(id){

    return fetch(`https://gorest.co.in/public/v2/users/${id}`,{
        method:"GET",
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json",
            "Authorization":"Bearer cd2ac6be51d3e141feb492b0cc0ddd8d3eb8d0bc7da80d1a1ef57ecdd74bf517"
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        return response
    })

}
function renderHtml(obj){
    document.write(`<h1>${obj.name}</h1>`)
    document.write(`<p>${obj.email}</p>`)
    document.write(`<p>${obj.gender}</p>`)
}

// fetUsers()
// .then(function(response){
//     let id = response[0]['id']
//     return singleUser(id)
// })
// .then(function(response){   
//     console.log(response)
//     renderHtml(response)
// })

async function getInfo(){
    let response = await fetUsers()
    let id = response[0]['id']
    let response2 = await singleUser(id)
    renderHtml(response2)
}
getInfo()






//fetUsers()