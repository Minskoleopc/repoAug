// object literal 


// let amol = {
//     fn:"amol",
//     ln:"rao",
//     displayName:function(){
//        console.log(this.fn  + this.ln) 
//     }
// }

// let chinmay  = {
//     fn:"chinmay",
//     ln:"deshpande",
//     displayName:function(){
//        console.log(this.fn  + this.ln) 
//     }
// }
// console.log(amol)
// console.log(chinmay)


// function constructor

function Person(fn,ln){
    this.firstName = fn 
    this.lastName = ln 
    // this.displayName  = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}

let obj1 = new Person("chinmayB","DeshpandeB")
let obj2 = new Person("amolB","raoB")

console.log(obj1)
console.log(obj2)


console.log(obj1.firstName)
console.log(obj1.lastName)
//obj1.displayName()


// prototype 

//every_obj.__proto__ == Parent.prototype

console.log(obj1.__proto__ == Person.prototype)
console.log(obj2.__proto__ == Person.prototype)

Person.prototype.displayName = function(){
    console.log(this.firstName + this.lastName)
}
Person.prototype.country = "India"

obj1.displayName()
console.log(obj1.firstName)
console.log(obj2.lastName)
console.log(obj2.country)

console.log(obj1.hasOwnProperty('firstName'))
console.log(obj1.hasOwnProperty('country'))

// es6 class 

class PersonB  {
    
    constructor(fn,ln ){
        this.firstName = fn 
        this.lastName = ln
        // this.displayName = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }


}

let pro = new PersonB("chinmay","deshpande")
let proB = new PersonB("chinmayB","deshpandeB")

console.log(pro)
console.log(proB)

pro.displayName()
proB.displayName()









// create Object