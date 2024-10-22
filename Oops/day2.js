// javascript --- playwright / cypress / webdriver.io
// javascript typescript ajax - angular , react js vue js 

// object literal 
// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:23,
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// amol.displayName()

// let chinmay = {
//     firstName:"chinmay",
//     lastName:"despande",
//     age:33,
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// chinmay.displayName()

// program 1
// class Person {
//     firstName = undefined
//     lastName  = undefined
//     age = undefined

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let amol2 = new Person()
// console.log(amol2)
// amol2.city = "pune"
// amol2.displayName()
// console.log(amol2)
// amol2.firstName = "amol"
// amol2.lastName = "rao"
// amol2.age = 44
// console.log(amol2)

// program 2 

class Person {
    constructor(fn,ln,age){
        this.firstName  = fn 
        this.lastName = ln 
        this.age = age
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let amol3 = new Person("amol","rao",45)
let chinmay3 = new Person("chinmay","deshpande",34)
console.log(amol3)
console.log(chinmay3)

// using set get method
// program 3

// class PersonB {
//     // methods
//     setFirstName(fn){
//         this.firstName = fn
//     }

//     setLastName(ln){
//         this.lastName = ln
//     }
//     setAge(ag){
//         this.age = ag
//     }

//     getFirstName(){
//         return this.firstName
//     }

//     getLastName(){
//         return this.lastName
//     }

//     getAge(){
//         return this.age
//     }
// }
// let amol4 = new PersonB()
// console.log(amol4)

// amol4.setFirstName("amol4")
// amol4.setLastName("rao4")
// amol4.setAge(34)
// console.log(amol4)

// console.log(amol4.firstName)
// let q1  = amol4.getFirstName()
// console.log(q1)


// program 4 
// using get and set keyword 

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34
}
info.firstName = "chinmay S"
info.city = "pune"

class PersonC {

    set firstN(fn){
        this.firstName  = fn
    }

    set lastN(ln){
        this.lastName = ln
    }

    set ageN(ag){
        this.age = ag
    }

    get firstN(){
        return this.firstName
    }

    get lastN(){
        return this.lastName
    }

    get ageN(){
        return this.age
    }
}

let amol5 = new PersonC()
amol5.firstN = "amol5"
amol5.lastN = "rao5"
amol5.ageN = 34


console.log(amol5)

console.log(amol5.firstN)
console.log(amol5.lastN)
console.log(amol5.ageN)


// object literal 
// using class - encapsulation 
// using constuctor 
// using set and get method 
// using set and get keyword- properties


// 0
// function add(){
//     console.log(9+9)
// }
//add()

























