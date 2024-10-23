// class Student {
//     firstName = undefined
//     lastName = undefined
//     adharNo = undefined
//     displatName() {
//         console.log(this.firstName + this.lastName)
//     }
// }
// class Teacher {
//     firstName = undefined
//     lastName = undefined
//     adharNo = undefined
//     salary = undefined
//     displatName() {
//         console.log(this.firstName + this.lastName)
//     }

//     displaySalary() {
//         console.log(this.firstName + this.lastName)
//     }
// }

// program 2

// class Student {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     adharNo = 123
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// //let poorva = Student()

// class Teacher  extends Student {
//     salary = 10000
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let poorva = new Teacher()
// console.log(poorva.firstName)
// console.log(poorva.lastName)
// console.log(poorva.adharNo)
// console.log(poorva.salary)
// poorva.displayName()
// poorva.displaySalary()


// program 3
// parent has constructor and child does not have constructor 

// parent class
class Student {
    constructor(fn,ln,ad){
        this.firstName = fn 
        this.lastName = ln 
        this.adharNo  = ad
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

// child
class Teacher extends  Student{
    salary = 1000
    displaySalary(){
        console.log(this.salary)
    }
}

let mayuriT = new Teacher("mayuri","rao",123)
console.log(mayuriT.firstName)
console.log(mayuriT.lastName)
console.log(mayuriT.adharNo)
console.log(mayuriT.salary)
mayuriT.displaySalary()
mayuriT.displayName()

// parent has constructor , as well child has constructor (single inheritance)

// multi-level 

// herarchical inheritance