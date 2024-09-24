// class Person{
//     // properties 
//     fn = undefined
//     ln = undefined
//     age = undefined

//     display(){
//         console.log("display")
//     }

// }

// let amol = new Person()
// console.log(amol.fn)
// console.log(amol.ln)
// console.log(amol.age)
// amol.display()


// let chinmay = new Person()
// console.log(chinmay.age)
// console.log(chinmay.fn)
// console.log(chinmay.ln)
// chinmay.display()

// chinmay.fn = "chinmay"
// console.log(chinmay)

// console.log(chinmay.fn)
// console.log(amol.fn)

// amol.fn = "amol"
// amol.ln = "rao"
// amol.age = 23

// console.log(amol.fn)
// console.log(amol.ln)
// console.log(amol.age)


// Object literal
// let amol2 = {
//     fn:"amol",
//     ln:"rao",
//     age:12
// }

// program 2

class Person {

    // constructor
    constructor(fn,ln,age){
        this.firstName = fn 
        this.lastName = ln 
        this.age = age
    }

    displayName(){
        console.log("hello.....")
    }
}

let amol2 = new Person("amol",'rao',24)
let chinmay2 = new Person("chinmay","deshpande",34)
console.log(amol2)
console.log(chinmay2)
amol2.displayName()












// //         0  1  2   3  4
// let arr = [11,22,33,44,55]
// arr.length()

// {
    //    fn:undefined,
    //    ln:undefined,
    //    age:undefined
    //    display:function(){

    //    }


// }