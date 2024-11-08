
// function Person(fn, ln) {
//     this.fn = fn
//     this.ln = ln
//     // this.display = function () {
//     //     console.log(this.fn + this.fn)
//     // }
// }

// let obj1 = new Person("chinmay","deshpande")
// let obj2 = new Person("chinmay","deshpande")
// console.log(obj1)
// console.log(obj2)

// // every object has obj.__proto__ == Parent.prototype
// Person.prototype.display = function(){
//     console.log(this.fn + this.fn)
// }
// Person.prototype.country  = "India"

// console.log(obj1.__proto__ == Person.prototype)
// console.log(obj2.__proto__ == Person.prototype)
// console.log(obj1.hasOwnproperty("country"))
// console.log(obj1.hasOwnproperty("fn"))


// program 2

let names = ["sarika","poorva","mayuri","sharddha","ram"]
console.log(typeof names)
console.log(names)
console.log(names.__proto__ == Array.prototype)

// Array.prototype.chinmay = function(){
//     console.log("hello")
// }
//names.chinmay()

// Program 3
class PersonB {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastname = ln
    }

    displayName(){
        console.log(this.firstName + this.displayName)
    }

}
let q1 = new PersonB("chinmay","deshpande")
let q2 = new PersonB("chinmay","deshpande")

console.log(q1)
console.log(q2)

// Object.create 
// lexical scope
// closures 
// actual difference between arrow function and function expression


















