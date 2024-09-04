// let names = ["chinmay","sarika","ninad","mohit"]

// // stores the value by index
// console.log(names[0])
// // particular element present
// let e1 = names.includes("chinmay")
// console.log(e1)
// // retrive 
// console.log(names[0])
// // add 
// names.unshift("ninad")
// names.push("amol")
// // update 
// names[0] = "chinmay d"
// // delete 
// names.pop()
// names.shift()
// names.slice(1,2)
// // loop
// for(let i = 0 ; i < names.length ; i++){
//     console.log(i)
//     console.log(names[i])
// }/

let a = [11,22,33,33]
console.log(a)




// program 2

// why object ??

let info2 = ["chinmay","deshpande",23,56]

let info3 = {
    //property:value
    //key:value
    firstName:"chinmay",
    lastName:"deshpande",
    rollNo:23,
    age:56,
    lastName:"dani"
}
console.log(info3)
// retrive  // dot notation and bracket notation
console.log(info3.firstName)
console.log(info3['lastName'])
// update // // dot notation and bracket notation
info3['age'] = 55
info3.age = 77
console.log(info3)
// add  // // dot notation and bracket notation
info3.city = "pune"
info3['lang'] = 'marathi'
console.log(info3)
// delete   // // dot notation and bracket notation

delete info3.city
delete info3['firstName']
console.log(info3)

// duplicate  - No
// index - No
console.log(info3[0])

// property available 
console.log(info3.hasOwnProperty("LastName"))
// python ----> 
// java -- 9:30
// data analysis - 8:30pm
// sql - 9.00pm
// sept - 15
// typescript 