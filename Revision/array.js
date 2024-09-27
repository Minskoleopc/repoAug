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


// map()
let numberss = [11,22,33]
//[12,23,34]
let newArray = []
for(let i = 0 ; i < numberss.length ; i++){
    //console.log(i)
    //console.log(numberss[i]+1)
    newArray.push(numberss[i] + 1)
}
console.log(newArray)

let newArray2 = numberss.map(function(el,index,arr){
    //console.log(el,index,arr)
    return el + 1
})
console.log(newArray2)


// filter()
numberss = [11,22,33,22,34,55,3,4,5,6]
let above20 = []  //22
//[22,33,22,34,55]

for(let i = 0 ; i < numberss.length ; i++){
    //console.log(i)
    //console.log(numberss[i])
    if(numberss[i] > 20){
        above20.push(numberss[i])
    }
}
console.log(above20)

let newArrayF = numberss.filter(function(el,index,arr){
    return el > 20
})
console.log(newArrayF)

// reduce()
let numberC = [11,22,33] //66
let total = 0

for(let i = 0 ; i < numberC.length ; i++){
    //console.log(i)
    //console.log(numberC[i])
    total = total + numberC[i]
    //        0   +      11   ------> total -- 11
    //        11  +      22  -------> total -- 33
    //        33  +      33   ------> total -- 66

}
console.log(total)
let total2 = numberC.reduce(function(acc,el,index,arr){
    return acc + el  // acc -- 66
},0)
console.log(total2)
// forEach()

let cities = ["pune","mumbai","banglore","kolkata"]

for(let i = 0 ; i < cities.length ; i++){
    console.log("welcome " + cities[i])
}

cities.forEach(function(el,index,arr){
    console.log('welcome '+ el)
})

// [11,22,33] ==== > [22,44,66] ---- map
// [11,22,33] ==== > [22,33] ------ filter
// [11,22,33] ==== >   66    ------ reduce 
// [11,22,33]                 ---- forEach()
 




// some()


// every()


// find()


// findIndex()

// program 1 map()

let birthYear = [1989,1990,1992,1993]
//[35,34,33,32]
let ages = birthYear.map(function(el,index,arr){
    return 2024 - el
})
console.log(ages)

// program 2 filter()

let transactions = [2000,2001,2000,-1950,100,-50,18,-18]
let deposit = transactions.filter(function(el){
    return el > 0
})
console.log(deposit)
let withdrawl = transactions.filter(function(el){
    return el < 0
})
console.log(withdrawl)

// program 3 reduce()
let marks = [11,22,33,44]
let total3 = marks.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(total3)


// program 4 - forEach()

let countries = ["india","pakistan","srilanka","bangladesh"]
countries.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})


// program 5
//            0  1  2  3  4  5 6  7  8
let marks2 = [34,55,22,33,44,5,55,66,77]
// [55,44,55,66,77]
let above40 = marks2.filter(function(el){
    return el > 40
})
console.log(above40)

// program 6 find()
let firstElement = marks2.find(function(el){
    return el > 40
})
console.log(firstElement)


//program 7 findIndex()
let firstElementIndex = marks2.findIndex(function(el){
    return el > 40
})
console.log(firstElementIndex)

// program 8

let numbersB = [11,22,33,44,5]
let ev = numbersB.every(function(el,index,arr){
    return el > 10
})
console.log(ev)


// program 9 
numbersB = [11,22,33,44,5]
let sm = numbersB.some(function(el){
    return el <= 5
})
console.log(sm)

// map()
// filter()
// reduce()
// forEach()
// find()
// findIndex()
// some()
// every()


// object -- properties and methods 


// slice 
//              0      1      2     3       4
let namess = ["amol","amit","ram","sham","sachin"]
//             -5     -4     -3     -2       -1
//namess.slice(startIndex,(endIndex)(not included))
let a = namess.slice(2)
console.log(a)
console.log(namess.slice(-5))
console.log(namess.slice(1,4))
console.log(namess.slice(-2))
console.log(namess.slice(-5,-1))
console.log(namess.slice(-3))
console.log(namess.slice(-3,-1))
console.log(namess.slice(-5,4))
console.log(namess.slice(1,-2))
console.log(namess.slice(-1,-3))

// splice()
//               0        1        2         3          4
let citiess = ["pune","mumbai","bangalore",'kolkata',"chennai"]
// citiess.pop()
// citiess.shift()
// console.log(citiess)
//citiess.splice(startIndex, numberofElements)

// citiess.splice(1,2)
// console.log(citiess)

// citiess.splice(2,1)
// console.log(citiess)
// citiess.splice(2,2,"wardha","nagpur")
// console.log(citiess)

// concat 

let arr = [11,22,33]
let arr2  = [44,55,66]
console.log(arr.concat(arr2))
console.log(arr2.concat(arr))

// fill 
//             0   1 2  3  4  5
let results = [11,22,33,44,55,66]
let q12 = results.fill('-',1,results.length)
console.log(q12)

// at 

let langauge = ["marathi","hindi","english"]
console.log(langauge.at(2))

// indexof
console.log(langauge.indexOf("english"))
console.log(langauge.indexOf("English"))



































