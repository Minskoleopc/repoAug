// let x = 10
// console.log(x)

// //              0         1        2      3      4
// let names = ['chinmay','sarika','poorva',"raj","sham"]
// console.log(names[0])
// console.log(names[1])

// for(let i = 0 ; i < 5 ; i++){ // 1 // 2 // 3 // 4 // 5 
//     //console.log(i) // 0 // 1 // 2 // 3 // 4 
//     console.log(names[i])
// }

// // i - 0
// // i - 1
// // i - 2
// // i - 3
// // i - 4

// // program 2
// //              0       1        2        3        4
// let fruits = ["apple","mango","banana","orange","grapes"]
// console.log(fruits.length)
// for(let i = 0 ; i < fruits.length ; i++){
//     //console.log(i)
//     console.log(fruits[i])
// }

// // program 3
// let i3 = 0
// while(i3 < fruits.length){
//     //console.log(i3)
//     console.log(fruits[i3])
//     i3++
// }
//               0        1       2        3
let names = ["chinmay","sarika","rahul","sharddha"]
// everything in js is object
// names --- array --- object ----- properties and methods
console.log(names.length)

// method -  gym
// action - exercise
// return - health 

// push()
// action - add the element at the last of array
// return - new length of array

let names2 = ["ram","sham","sanjay","sachin","saurav"]
let q2 =  names2.push("raj")
console.log(q2)
console.log(names2)

// unshift()
// action - add the element to the first of the array
// return - new length of array
//             0        1       2
let fruit = ["apple",'mango',"banana"]
let q3 = fruit.unshift("papaya")
console.log(q3)
console.log(fruit)

// pop()
// action - removes the last element 
// return - same element 

let country  = ["india","srilanka","pakistan",'bangladesh']
let q4 = country.pop()
console.log(q4)
console.log(country)

// shift()
// action - removes the first element 
// return - returns the same 

let  states = ["MH","MP","UP","RJ"]
let q5 = states.shift()
console.log(q5)
console.log(states)

//includes()
let cities2   = ["nagpur","jaipur","kolkata","pune"]
let q6 = cities2.includes('Nagpur')
console.log(q6)
// SQL

// indexOf()
//              0          1        2        3
let cities3 = ["nagpur","jaipur","kolkata","pune"]
let q7 = cities3.indexOf('jaipur')
let q8 = cities3.indexOf('Nagpur')
console.log(q7)
console.log(q8)

// at()
//                 0         1       2        3
let vegetables = ["carrot","tomato","potato","brinjal"]
let q9 = vegetables.at(2)
console.log(q9)

// join()

let info = ["chinmaydeshpande","gmail.com"]
let q10 = info.join("@")
console.log(q10)

// reverse()
let numbers = [11,22,33,44,55]
let q11 = numbers.reverse()
console.log(q11)

// sort()












