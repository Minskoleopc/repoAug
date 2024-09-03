// concat()

let arr1 = [11,22,33]
let arr2  = [44,55,66]
let q1  = arr1.concat(arr2)
let q2  = arr2.concat(arr1)
console.log(q2)
// slice()
//              0       1         2          3        4
let cities = ["pune","mumbai","bangalore","kolkata","chennai"]
//             -5      -4          -3          -2           -1
//cities.slice(startIndex,EndIndex(not included))
let q3 = cities.slice(2)
console.log(q3)
console.log(cities.slice(1,4))
console.log(cities.slice(-3))
console.log(cities.slice(-5,-1))
console.log(cities.slice(1,-1))
console.log(cities.slice(-4,4))
console.log(cities.slice(4,1))
console.log(cities.slice(-1,-4))

// splice()
//               0        1         2         3         4
let cities2 = ["pune","mumbai","bangalore","kolkata","chennai"]
// cities2.pop()
// cities2.shift()
//cities2.splice(startIndex,numberOFElements)

// cities2.splice(1,2)
// console.log(cities2)

// cities2.splice(2,2)
// console.log(cities2)

// cities2.splice(2,1)
// console.log(cities2)

// cities2.splice(2,2,"gao","wardha")
// console.log(cities2)
// console.log(cities2)


// flat()

//                    0                   1                     2
//                0        1         0         1         0           1
let states = [["wardha","nagpur"],["jaipur","udaipur"],["kanpur","lucknow"]]
console.log(states[0][1])
console.log(states[2][1])
let q4 = states.flat()
console.log(q4)

// fill()
//           0  1  2  3  4  5  6  7
let marks = [90,89,88,86,66,77,74,78]
let e = marks.fill("@",2,6)
console.log(e)

// indexOf()
//               0         1          2
let country = ["india","pakistan","srilanka"]

let q11 = country.indexOf("pakistan")
let q12 = country.indexOf("Pakistan")

console.log(q11)
console.log(q12)

// at()
let q13 = country.at(2)
console.log(q13)

// reverse()
country = ["india","pakistan","srilanka"]
country.reverse()
console.log(country)

// sort() // userful --> comparison , object , boolean useful ==> arrow function
country = ["india","pakistan","srilanka","cuba"]
country.sort()
console.log(country)


// join()
let info = ["chinmay","deshpande",7709192441]
let e2 = info.join('@')
console.log(e2)

// 7 sept
// fullscience - 30 k  - 15k / 15k
// test automation - 20k

// push() , pop(), shift() , unshift()

// java sql , python , python , postman 
// selenium , python


//         0  1  2  3  4
let a1 = [11,22,33,44,55]

let q222 = a1.filter(function(el){
    return el > 20
})

let q2222 = a1.find(function(el){
    return el > 20
})
console.log(q2222)

let q22222 = a1.findIndex(function(el){
    return el > 20
})
console.log(q22222)

