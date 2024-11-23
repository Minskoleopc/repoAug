

// Promise combinators ...

// Promise.all()
// Promise.allSettled()
// Promise.race()
// Promise.any()

// API1 =====> reponse =====> API2 =====reponse API3


function singleUser(id) {
    return fetch(`https://gorest.co.in/public/v2/users/${id}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer cd2ac6be51d3e141feb492b0cc0ddd8d3eb8d0bc7da80d1a1ef57ecdd74bf517"
        }
    })
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Failed to fetch the api ....")
            }
            return response.json()
        })
        .then(function (response) {
            return response

        })

}

function setRace() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("i was execute in 1 second")
        }, 3000)
    })
}
// Promise.any()


async function getAny(){
    try{
        let rsv = await Promise.any([
            singleUser("38718"),
            singleUser("8718"),
            singleUser("7538718"),
            singleUser("7538719")
        ])

    }
    catch{
        console.log("error ....")
    }
    finally{
        console.log('finally......')
    }
   
}
getAny()
Promise.any([
    singleUser("38718"),
    singleUser("8718"),
    singleUser("7538718"),
    singleUser("7538719")
])
.then(function(response){
    console.log(response)
})
.catch(function(error){
    console.log(error)
})





// Promise race()
// async function getRace() {
//     try {
//         let reponseOne = await Promise([
//             singleUser(7538718),
//             setRace()
    
//         ])
//         console.log(reponseOne)
//     }
//     catch{
//         console.log("error occured...")
//     }
   
// }

// Promise.race([
//     singleUser(7538718),
//     setRace()

// ])
//     .then(function (obj) {
//         console.log(obj)
//     })
//     .catch(function (error) {
//         console.log(error)
//     })


// Promise.allSettled()
// Promise.allSettled([
//     singleUser("7538718"),
//     singleUser("7538718"),
//     singleUser("753871")

// ])
//     .then(function (response) {
//         console.log(response)
//     })

// async function getAllsettled() {
//     let users = await Promise.allSettled([
//         singleUser("7538718"),
//         singleUser("7538718"),
//         singleUser("753871")
//     ])
//     console.log(users)
// }
// getAllsettled()



// promise.all()
// Promise.all(
//     [
//         singleUser("7538718"),
//         singleUser("7538718"),
//         singleUser("753871")
//     ]
// )
// .then(function(users){
//     console.log(users)
// })
// .catch(function(error){
//     console.log(error)
// })



// async  function getUsers(){

//     try {
//         let users  = await Promise.all(
//             [
//                 singleUser("7538718"),
//                 singleUser("7538718"),
//                 singleUser("7538718")
//             ]
//         )
//         console.log(users)

//     }
//     catch{
//         console.log("Error ocurred")
//     }


// }
// getUsers()





//singleUser("538718")
// singleUser("7538718")
// singleUser("7538718")
// singleUser("7538718")
// singleUser("7538718")


// Promise.all()
// Promise.allSettled()
// Promise.race()
// Promise.any()