// Oops  - to design class in better and most efficient way --- user defined data type

// Encapsulation 

// Inheritance 

// Polymorphism 

// Abstraction 

// Interface 


// // single inheritance - parent constructor and child class no constructoe

// class Person {
//     constructor(fn,ln,age){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.age  = age
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher extends Person {
//     salary = 1000
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let amolT = new Teacher("amol","rao",23)
// console.log(amolT.firstName)
// console.log(amolT.lastName)
// console.log(amolT.age)
// console.log(amolT.salary)
// amolT.displayName()
// amolT.displaySalary()



// let amolA = new Person("chinmay","deshpande",23)
// amolA.displayName()


// program 2 

// class Person2 {
//     constructor(fn,ln,ag){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.age = ag
//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher2 extends Person2{

//     constructor(fn,ln,ag,salary){
//         super(fn,ln,ag)
//         this.salary = salary
//     }

//     displaySalary(){
//         console.log(this.salary)
//     }

// }

// let amolT2 = new Teacher2("amolT","rao2",34,1000)
// console.log(amolT2.firstName)
// console.log(amolT2.lastName)
// console.log(amolT2.age)
// console.log(amolT2.salary)

// amolT2.displaySalary()
// amolT2.displayName()


class GrandFather {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }

    displayGName(){
        console.log(this.firstName + this.lastName)
    }
}
class Father extends GrandFather {
    constructor(fn,ln,ffn){
        super(fn,ln)
        this.fname = ffn
    }

    displayFName(){
        console.log(this.fname + this.lastName)
    }
}

class Son extends Father {
    constructor(fn,ln,ffn,ssn){
        super(fn,ln,ffn)
        this.sname = ssn
    }

    diplaySName(){
        console.log(this.sname + this.lastName)
    }
}

let chinmay = new Son("manohar","deshpande","shrish","chinmay")

console.log(chinmay.fn)
console.log(chinmay.ln)
console.log(chinmay.fname)
console.log(chinmay.sname)

chinmay.displayGName()
chinmay.diplaySName()
chinmay.displayFName()


// one parent  ------- two child --- herarchical 