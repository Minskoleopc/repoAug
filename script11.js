// ES6 

// Array , Objects , String

// program 1
//              0        1    2      3
let names = ["chinmay","raj","ram","sham"]
// let a = names[0]
// let b = names[1]
// let c = names[2]
// let d = names[3]

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

let [x1,x2,x3,x4] = names
console.log(x1)
console.log(x2)
console.log(x3)
console.log(x4)

// program 2
let states = [["nagpur","chandrapur"],["jaipur","udaipur"]]
let [[c1,c2],[c3,c4]] = states
console.log(c1)
console.log(c2)
console.log(c3)
console.log(c4)

// program 3

let info = {
    firstName:"chinmay",
    lastName:"deshpande"
}
// let a1 = info.firstName
// let b1 = info.lastName

// console.log(a1)
// console.log(b1)

// let {firstName,lastName} = info
// console.log(firstName)
// console.log(lastName)

let {firstName:fn,lastName:ln} = info
console.log(fn)
console.log(ln)

// program 4

let students = {

    fullName:"chinmay deshpande",
    parent:{
        mother:"kanchan deshpande",
        father:"shirish deshpande"
    }
}

let {fullName,parent:{mother,father}} = students

console.log(fullName)
console.log(mother)
console.log(father)








// dot notation and bracket notation
// console.log(info.firstName)
// info.firstName = "tanmay"
// info.city = "pune"
// delete info.city
// console.log(info['firstName'])
// info['firstName'] = "ninad"
// info['language'] = "marathi"
// delete info['lanaguade']




