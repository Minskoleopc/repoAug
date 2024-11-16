// function additionA(){
//     console.log("A is executed")
// }

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

let pro = new Promise(function(resolve,reject){
    let a = 10
    let b = 1
    if(a == b){
        resolve("hello")
    }
    else {
        reject("bye")
    }
})

pro.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})