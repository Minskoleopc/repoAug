// function additionA(){
//     console.log("A is executed")
// }

const { resolvePath } = require("react-router-dom")

// function additionB(){
//     console.log("B is executed")
// }
// additionB()
// additionA()

// program 2

// function additionC(){
//     setTimeout(function(){
//         console.log("addition C  executed")
//     },3000)
// }
// function additionD(){
//     console.log("D is executed")
// }

// additionC()
// additionD()


// program 3
// user create ===> user id ===== user info

function getInfo() {

    setTimeout(function () {
        console.log("user created")
    }, 3000)
    setTimeout(function () {
        console.log("get id")
    }, 2000)
    setTimeout(function () {
        console.log("get info")
    }, 1000)

}
//getInfo()


function getInfo() {
    setTimeout(function () {
        console.log("user created")
        setTimeout(function () {
            console.log("get id")
            setTimeout(function () {
                console.log("get info")
            }, 1000)
        }, 2000)
    }, 3000)
}
//getInfo()

// program 4
// promise ===??

// pending  , resolve and reject 

// let pro = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 1
//     if(a == b){
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }
// })

// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// day 2


let pro2  = new Promise(function(resolve,reject){
    let city = "Pune"
    if(city.includes('p')){
        resolve([11,22,33])
    }
    else {
        reject([-11,-12,-13])
    }
})

pro2.then(function(arr){
    console.log(arr[0])
},function(arr){
    console.log(arr[1])
})

// program 2


let pro3 = new Promise(function(resolve,reject){
    let a = 10
    let b = 10
    if(a == b){
        resolve("solved")
    }
    else {
        reject("unsolved")
    }

})

pro3
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})

// program 4

// let pro4 = new Promise(function(resolve,reject){
//     let firstName = "chinmy"
//     if(firstName.length >= 7){
//         resolve("name is greater or equal  7 characters")
//     }
//     else {
//         reject('name is not greater then 7 characters')
//     }

// })

// pro4
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always execute")
// })


// program 5

// let proB = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 10
//     if(a == b){
//         resolve("equal")
//     }
//     else {
//         reject("not equal")
//     }

// })

// proB
// .then(function(str){
//     console.log(str)
//     return "hello"
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always execute..")
// })




// Promblem ----

// asyn functions ------> sync
function getInfo() {
    setTimeout(function () {
        console.log("user created")
        setTimeout(function () {
            console.log("get id")
            setTimeout(function () {
                console.log("get info")
            }, 1000)
        }, 2000)
    }, 3000)
}
//getInfo()

function createUser(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user created....")
        },3000)
    })
}
function getid(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get id....")
        },2000)
    })
}

function getInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get info....")
        },1000)
    })
}

createUser()
.then(function(str){
    console.log(str)
    return getid()
})
.then(function(str){
    console.log(str)
    return getInfo()
})
.then(function(str){
    console.log(str)
})
.catch(function(){
    console.log("error")
})
.finally(function(){
    console.log("always executed...")
})