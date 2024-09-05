// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:34,
//     rollNo:23
// }

// for(let key in info){
//     console.log(key,info[key])
// }

// number , boolean , array , object , string
// object ---- properties and methods


// String
let firstName = "chinmay"
let lastName = 'deshpande'
let middle = `shirish`

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof middle)

// program2 

// number + number =====> number 
// string + number =====> string 
// number + string =====> string 
// string + string =====> string

let a = 10
let b = 20
let c = "hello"

console.log(a+b+c)
//  number + number + string
    // number - 30 + "hello" 
        // string 30 hello

console.log(c+a+b)
// string + number + number
    // "hello10"+ 20
    //  hello1020

console.log(a+c+b)


// program 3
// string concat

let fn = "chinmay"
let ln = "deshpande"

// "My firstName is chinmay and lastName is deshpande"
console.log("My firstName is "+fn+" and lastName is "+ln)
console.log(`My firstName is ${fn} and lastName is ${ln}`)

// program 4
let namee = "chinmay"

// program does string stores value by index
console.log(namee[0])
namee[0] = "t"
console.log(namee)
//0  1  2   3   4  5  6
//c  h  i   n   m  a  y
// program 4

for(let i = 0 ; i < namee.length ; i++){
    //console.log(i)
    console.log(namee[i])
}

// program 5
let i1 = 0
while(i1 < namee.length){
    //console.log(i1)
    console.log(namee[i1])
    i1 = i1 + 1
}






