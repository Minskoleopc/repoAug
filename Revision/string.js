// string in js 

let firstName = 'chinmay'
let lastName = "deshpande"
let middleName = `shirish`

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof middleName)

// let a = 10 
// console.log(typeof a) 

// let a1 = true 
// console.log(typeof a1) 



// program 2
// string + number =====> string 
// number + string =====> string
// string + string =====> string
// number + number =====> number

let a = 10 
let b = 5
let c = "hello"

console.log(a + b + c)
// number + number + string
        // 15 + "hello"
            // 15hello

console.log(c+a+b)
//  string + number + number
    // "hello"+10
        //"hello10"+5
            // "hello105"

console.log(a+c+b)
// number + string + number 
    // 10 + 'hello'
        // '10hello' + 5
            // '10hello5'

// program 3
let fn = "chinmay"
let ln = "deshpande"

// My firstName is chinmay and lastName is deshpande
console.log("My firstName is "+fn+" my lastName is "+ln)
console.log(`My firstName is ${fn} my lastName is ${ln}`)

// program 4
// string stores the value by index 

let city = "pune" 
// 0   1   2    3
// p   u   n    e
console.log(city[0])
// js --- object ----- properties and methods 
// length 
console.log(city.length)


let city2 = "nagpur"
// 0   1   2  3  4  5
// n   a   g  p  u  r

// forward - for

for(let i = 0 ; i < city2.length ; i++){
    //console.log(i)
    console.log(city2[i])
}

// reverse - for 
for(let i = city2.length -1 ; i >= 0 ; i--){
   // console.log(i)
  // console.log(city2[i])
}

// forward - while loop

let i2 = 0
while (i2 < city2.length){
    //console.log(i2)
    console.log(city2[i2])
    i2 = i2 + 1
}

// String - methods 

























