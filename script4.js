// map() , filter() , reduce(), forEach()
// find(), findIndex(), every() , some()


let birthYear = [1989, 1990, 1991, 1992]
//[35,34,33,32]
let ages = []
for (let i = 0; i < birthYear.length; i++) {
    // console.log(i)
    //console.log(birthYear[i])
    //console.log(2024 - birthYear[i])
    ages.push(2024 - birthYear[i])
}
console.log(ages)

// map()

let ages2 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2024 - el
})
console.log(ages2)

let numbers = [11,22,33,44]
// [16,27,38,49]
let q2 = numbers.map(function(el){
    return el + 5
})
console.log(q2)

// program 3 

let marks = [33,44,55,33,44,56,66]
let above50 = []
//[55,56,66]

for(let i = 0 ; i < marks.length ; i++){
    if(marks[i] > 50){
        above50.push(marks[i]) 
    }
}

console.log(above50)
let q22 = marks.filter(function(el){
    return el > 50
})
console.log(q22)

let transactions = [44,55,-88,66,77,-99,100,56]
let deposit = transactions.filter(function(el){
    return el > 0
})
console.log(deposit)

let withdrawl = transactions.filter(function(el){
    return el < 0
})
console.log(withdrawl)


// program 3
let nums = [11,22,33]
let total = 0
for(let i = 0 ; i < nums.length ; i++){
    total  = total + nums[i]
}
console.log(total)

let q3 = nums.reduce(function(acc,el,index,arr){
    return acc + el  
},0)
console.log(q3)

//program  4

let cities = ["pune","mumbai","banglore","kolkata"]

// for(let i = 0 ; i < cities.length ; i++){
//     console.log(i)
//     console.log("welcome "+cities[i])
// }

cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})

//program 5
//              0   1  2  3 4   5 6   7  8  9
let marks2  =  [44,55,66,77,33,44,55,88,99,95]
let q4 = marks2.filter(function(el){
    return el > 70
})
console.log(q4)


let q5 = marks2.find(function(el,index,arr){
    return el > 70
})
console.log(q5)


let q6  = marks2.findIndex(function(el){
    return el > 70
})
console.log(q6)

let arrayOne = [11,22,33,44,55]

// every()
let q7 = arrayOne.every(function(el,index,arr){
    return el > 15
})
console.log(q7)

// some
let arrayTwo = [11,22,33,44,55]
let q8  = arrayTwo.some(function(el,index,arr){
    return el > 100
})
console.log(q8)

// map() ------> array
// filter() ---- array 
// reduce() ----> value
// forEach() ---- no return type 

// findIndex() -- number
// find()--- datatype
// some() - boolean
// every() - boolean




