// number , string , boolean 

// array
// obj

let names = ["chinmay","ninad","mahesh","raj"]
let marks = [11,22,33,44,55,66]
let aboveage  = [true, false , true ,false , true]
let info = ["chinmay","deshpande",23,44]

// prorgram 1
//              0       1        2           3        4
let cities = ["pune","mumbai","bangalore","kolkata", "chennai"]

// array stores the values by index?
let q1 = cities[2]
console.log(q1)

// program 2
// index from zero  - 0
// length - 1 is always the last index

// program 2

//               0         1           2       3
let country = ["india","pakistan","srilanka","cuba"]
// everthing in js is object 
// object with have properties and method
let q2 = country.length
console.log(q2-1)


// program 3 
//              0        1      2         3       4
let fruits = ["apple","mango","banana","orange","grapes"]
for(let i = 0 ; i < fruits.length ; i++){
    //console.log(i) // 0
    console.log(fruits[i])
}

// program 4
//                  0         1          2
let vegetables = ["potato","brinjal","ladyfinger"]

for(let i = 0 ; i < vegetables.length ; i++){
   // console.log(i)
    console.log(vegetables[i])
}

for(let i = vegetables.length -1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(vegetables[i])
}




