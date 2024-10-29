// program 1
// overloading 

class Calculator {
    // addition(x,y){
    //     console.log(x+y)
    // }
    // addition(x,y,z){
    //     console.log(x+y+z)
    // }
    // addition(x =,y,z,y){
    //     console.log(x+y+y+z)
    // }

    addition(x = undefined, y = undefined, z = undefined, a = undefined) {

        if(x != undefined && y != undefined && z != undefined && a != undefined){
            console.log(x+y+z+a)
        }
        else if(x != undefined && y != undefined && z != undefined){
            console.log(x+y+z)
        }
        if(x != undefined && y != undefined){
            console.log(x+y)
        }
    }


}

let a1 = new Calculator()
a1.addition(13, 4)
a1.addition(13, 4, 2)
a1.addition(13, 4, 3, 4)


// program 2
// overriding

// class WorlBank {
//     loan(){
//         console.log("I am loan from world bank")
//     }
//     save(){
//         console.log("I am save from world bank")
//     }
// }

// class SBI extends  WorlBank {
//     loan(){
//         console.log("I am loan from sbi bank")
//         super.loan()
//     }
//     save(){
//         console.log("I am save from sbi bank")
//     }
// } 
// let npg = new SBI()
// npg.loan()
// npg.save()

// program 3
// duck typing

class Human {
    sound(){
        console.log("hello hi !")
    }
}

class Cat {
    sound(){
        console.log("Meow Meow !")
    }
}

class Dog {
    bark(){
        console.log("Woof Woof !")
    }
}




let  ch = new Human()
let  sa = new Cat()
let dd = new Dog()


function callBark(obj){
    if(obj.sound){
        obj.sound()
    }
    else {
        obj.bark()
    }
   
}
callBark(ch)
callBark(sa)
callBark(dd)



// program 4
//  abstraction --- private

class Person {

    #age = 18

    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    #displayName(){
        console.log(this.firstName + this.lastName)
    }

    displayAge(){
        console.log(this.#age) // private property
        this.#displayName(); // private method
    }

}

let aaa = new Person("sarika","pansare")
console.log(aaa.age)
aaa.displayAge()