// lexical scope

// function addition(){
//     let x = 10
//     let y = 5
//     console.log(x+y)
//     function additionB(){
//         let s = 8
//         let t = 4
//         console.log(x+y+s+t)
//         function additionC(){
//             console.log(x+y+s+t)
//         }
//         additionC()
//     }
//     additionB()
// }
// addition()

// program 2
// function as parameter 
// let additionB = function (x,y){
//     return x + y
// }
// let x = 10
// console.log(x)
// console.log(additionB)
// function addB(fn,x,y){
//     // let fn = function (x,y){
//     //     return x + y
//     // }

//     //fn(10,5)
//     let e = fn(x,y)  // 15
//     return e
// }

// let e1 = addB(additionB,10,5)
// console.log(e1)

// program 3

// function addC(){
//     return function(){
//        return 9 + 9
//     }
// }
// let e1 = addC()
// // let e1 = function(){
// //     console.log(9+9) 
// //  }
// console.log(e1)
// let e2 = e1()
// console.log(e2)


// closures 
// function addB(){
//     console.log("hello")
//     return "bye"
//     console.log("hi hello")
// }
// let e3 = addB()
// console.log(e3)


// function cConcept(){
//     let x = 10 
//     let y = 5

//     return function(){
//         console.log(x+y)
//     }
// }
// let e2 = cConcept()


// // let e2 = function(){
// //     console.log(x+y)
// // }

// e2()

// functions ---> 

// function declaration 

// function FnA(x,y){
//     return x + y
// }
// let f1 = FnA(12,4)
// console.log(f1)


// program 2
// let FnA = function(x,y){
//     return x + y
// }
// let e2 = FnA(12,3)
// console.log(e2)

// arrow function 
// basic arrow s
// let FnA = (x,y)=>{
//     return x + y
// }
// let e2 = FnA(23,4)
// console.log(e2)

// // one statement
// //let FnA = (x,y)=> x + y
// let e3 = FnA(12,3)
// console.log(e3)

// let greet = word => "hello " + word 
// console.log(greet("chinmay"))


















