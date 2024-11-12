
// lexical scope

// function addition() {
//     let a = 19
//     let b = 1
//     console.log(a + b)
//     function additionB() {
//         let c = 90
//         let d = 45
//         console.log(a + b + c + d)
//         //console.log(j)
//         function additionC() {
//             let h = 10
//             let j = 5
//             console.log(a + b + c + d + h + j)
//         }
//         additionC()
//     }
//     additionB()
// }
// addition()
// r
// function add(){
//     let a = 10 
//     let b = 5
//     function addB(){
//         let c = 6
//         let d = 3
//         console.log(a+b+c+d)
//         //console.log(e) // will not be accessible
//         function addC(){
//             let e = 10
//             console.log(a+b+c+d+e)
//         }
//         addC()
//     }
//     addB()
// }
// add()

// program 2

// function showResult(a,b){
//     console.log(a+b) // 27
//     return "hello"
//     console.log("bye")
// }
// let e = showResult(23,4)
// console.log(e) // "hello"

// program 3

//number as parameter and number as return type 

function addE(a,b){  // number
    return a + b
}
let q1 = addE(12,4)
console.log(q1) // type:number


// string as parameter and string as return type 
function greet(str){ // string
    return `welcome ${str}`
}
let d  = greet("chinmay")
console.log(d) // type:string


// boolean as parameter and boolean as return type 
let age = 18
function canDrive(hvV,age){ // boolean
    if(age >= 18 && hvV){
        return true
    }
    else {
        return false
    }
}
let q2 = canDrive(true,age) // type:boolean
console.log(q2)


// object as parameter and object as return type 
let info = {
    firstName:'chinmay',
    lastName:"deshpande"
}

function addCity(obj){
    // city:pune
    //obj.city = "pune"
    obj['city'] = "pune"
    return obj
}
let e2 = addCity(info)
console.log(e2)

// array as parameter and array as return 

let names = ["poorva","ram","raj"]
function addName(arr){
    arr.push("sanket")
    return arr
}
let e3 = addName(names)
console.log(e3)


// function  as parmeter
// function expression
let add = function(q,r){
    return q + r
}

function addition(fn){

    // let fn = function(q,r){
    //     return q + r
    // }

    // let e = fn(13,4)
    // return e

    return fn(13,4)

}
let e4 = addition(add)
console.log(e4)//17



// function as return type
function Cal(){
    return function(){
        return 9 + 9
    }
}
let w = Cal()
//console.log(w)
let e5 = w()
console.log(e5)

// let w = function(){
//     return 9 + 9
// }