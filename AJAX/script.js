// function functionA(){
//     console.log("A is called")   
// }

// function functionB(){
//     console.log("B is called")
// }

// functionB()
// functionA()


// program 2
// Fn , FnS ---> 

// function functionC(){
//     setTimeout(function(){
//         console.log("C is called")
//     },3000)
// }

// function functionD(){
//     console.log("D is called")
// }

// functionC()
// functionD()

// program 3
// user create  ====> user id =====> info
function userInfo() {
    setTimeout(function () {
        console.log("user created ...")
    }, 3000)

    setTimeout(function () {
        console.log("get id")
    }, 2000)

    setTimeout(function () {
        console.log("get info")
    }, 1000)
}
//userInfo()

// program 3
// call back hell
function userInfo() {
    setTimeout(function () {
        console.log("user created ...")
        setTimeout(function () {
            console.log("get id")
            setTimeout(function () {
                console.log("get info")
            }, 1000)
        }, 2000)
    }, 3000)
}
userInfo()

// program 4
// Promises ----> status ----- pending   resolve   reject 
// promise ----> 1 month - 15k
//   ------------duration----------- pending 
// 15k - given  -------------------- resolve
//              -------------------- reject

let pro = new Promise(function(resolve,reject){
    let a = 10
    let b = 5
    if(a == b){
        resolve("solved")
    }
    else {
        reject("rejected")
    }
})
// consuming the promise 
pro.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})

// 7:30 pm







