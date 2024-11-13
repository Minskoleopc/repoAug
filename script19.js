// actual difference between let cont and var
// var - no longer in use

// program 1 (global scope)
let a = 10 
console.log(a)
a = 800
console.log(a)

const h = 10 
//h = 900

var x = 10
x = 100
console.log(x)


// program 2 scope 

// var a1 = 10  // global scope
// function additionA(){
//     var a1 = 20
//     console.log(a1)
// }
// additionA()
// //console.log(a1)

// program 2
// var is functioned scope --->
var a2 = 10
function additionB(){
    var a3 = 900
    a2 = 900
    console.log(a2) // 900

    {
        console.log(a3)
    }
}
console.log(a2) // 10
additionB()
console.log(a2) // 900
//console.log(a3)

// program 2
// let and const are blocked scope 

let a1 = 900 // global
{
    let a1 = 9000 // inside 
    console.log(a1) //9000
}
console.log(a1) //900


// progra3 
{
    let jk = 1
    jk = 900
    console.log(jk) //900
}
//console.log(jk) 

// program 4

// let jk2 = 4
// console.log(jk2) // 4
// {   
//     jk2 = 900
//     console.log(jk2) // 900
// }
// console.log(jk2) // 900

// program 5
let jk2 = 4
console.log(jk2)  // 4
{   
    let jk2 = 900
    console.log(jk2)  // 900
}
console.log(jk2)  // 4


// program 6
const j = 10
{
    console.log(j) // 10
}
console.log(j) // 10


// program 7
// const je = 900
// console.log(je) 
// {
//     je = 800
//     console.log(je) 
// }
// console.log(je)

// const je = 900
// console.log(je)  // 900
// {
//     const je = 800
//     console.log(je)  // 800
// }
// console.log(je) // 900


// var 
for(var ia = 1 ; ia <= 3 ; ia++){
    setTimeout(function(){
        console.log(ia)
    },1000)
}


for(let ia = 1 ; ia <= 3 ; ia++){
    setTimeout(function(){
        console.log(ia)
    },1000)
}

// hoisting 
// function and varaibles 
// call bind apply 
// friday ajax
// cypress playeright 



























