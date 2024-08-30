// object 
// properties and methods 

//            0      1        2       3
let names = ["raj","sham","satish","sanjay"]
console.log(names.length)

// Gym
// action -- exceercise 
// return -- health

// push 
// action - all the element to the last of array
// return - new length of array 

let cities = ["pune","mumbai","banglore","kolkata"]
let q1 = cities.push("goa")  // [ 'pune', 'mumbai', 'banglore', 'kolkata', 'goa' ]
console.log(q1) // 5
console.log(cities)

// program 2
// unshift()
// action  - add the element at start of array
// return  - new length of array

let countries = ["india","china","usa"]
let q2  = countries.unshift("uk")
console.log(q2)
console.log(countries)

// program 3
//pop
// action - removes the last element 
// return - same element

//              0       1       2          3       4
let fruits = ["apple","mango","banana","orange","grapes"]
let q4 = fruits.pop()
console.log(q4)
console.log(fruits)

// program 4
// shift()
// action - remove the first element 
// return - same element

let vegetables = ["potato",'tomato',"brinjal"]
let q5 = vegetables.shift()
console.log(q5)
console.log(vegetables)

// push(), pop(),shift(),unshift()


// includes()
let names2 = ["sachin","ram","lakshman"]
let q6  = names2.includes('Sachin')
console.log(q6)

// indexOf()
//           0       1      2
names2 = ["sachin","ram","lakshman"]
let q7 = names2.indexOf('Ram')
console.log(q7)

// reverse()
names2 = ["sachin","ram","lakshman"]
let q8 = names2.reverse()
console.log(q8)

// concat()
let a1 = [11,22,33]
let b2 = [44,55,66]
let c3 = a1.concat(b2)
console.log(c3)


// at()
//           0     1    2    3
let state = ["MH","MP","UP","RJ"]
let q9 = state.at(2)
console.log(q9)



