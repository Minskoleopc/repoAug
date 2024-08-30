// map() , filter() , forEach() , reduce()
// every() , some() , find(), findIndex()

//                0    1     2   3
let birthYear = [1989, 1990, 1991, 1992]
console.log(birthYear[0]) // 1989
// [35,34,33,32]
let ages = [] 

for (let i = 0; i < birthYear.length; i++) {
    //console.log(i) 
    //console.log(birthYear[i])
    //console.log(2024 - birthYear[i])
    let age = 2024 - birthYear[i]
    ages.push(age)
}
console.log(ages)

// map()

// program 2
//           0  1  2  3  4  5  6
let marks = [89,45,66,77,88,44,66]
//[89,66,77,88,66]
let above60 = [] // [89]

for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    //console.log(marks[i])
    if(marks[i] > 60){
        //console.log(marks[i])
        above60.push(marks[i])
    }
}
console.log(above60)
// filter()

// program 3
//             0  1  2
let numbers = [11,22,33]
//66
let total = 0

for(let i = 0 ; i < numbers.length ; i++){
    //console.log(i)
    total = total + numbers[i]
    //       0    +     11 ------>  11
    //       11   +     22 ------> 33
    //       33   +     33 ------> 66
}
console.log(total)
// reduce()


// program 4
//             0        1        2         3
let cities = ["pune","mumbai","banglore","kolkata"]
// "welocome pune"
// "welcome  mumbai"
// "welcome banglore"
// "welcome kolkata"

for(let i = 0 ; i < cities.length ; i++){
    //console.log(i)
    //console.log(cities[i])
    console.log("welcome "+cities[i])
}

// map() , filter() , reduce(), forEach()



























