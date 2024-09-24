// object literal 

// let amol  = {
//     fn:"amol",
//     ln:"rao",
//     age:23,
//     display:function(){
//         console.log("displaying name ....")
//     }
// }

// let chinmay  = {
//     fn:"chinmay",
//     ln:"deshpande",
//     age:33,
//     display:function(){
//         console.log("displaying name ....")
//     }
// }

// console.log(amol)
// console.log(chinmay)

// class 

// class Person {
//     fn = undefined
//     ln = undefined
//     age = undefined

//     display(){
//         console.log("displaying name ....")
//     }
// }

// let amol = new Person()
// let chinmay = new Person()

// console.log(amol.fn)
// console.log(amol.ln)
// console.log(amol.age)
// amol.display()

// amol.fn = "amol"
// amol.ln = "rao"
// amol.age = 34
// console.log(chinmay.fn)


// class with constructor 

// class Person {

//     constructor(fn,ln,age){
//         this.fn = fn 
//         this.ln = ln 
//         this.age = age
//     }

//     display(){
//         console.log("displaying name ....")  
//     }

// }

// let chinmay2 = new Person("chinmay","deshpande",23)
// let amol2 = new Person("amol2","rao2",55)

// class with set get method

class PersonC {

    setFirstName(fn){
        this.firstName = fn
    }

    setLastName(ln){
        this.lastName = ln
    }
    setAge(ag){
        this.age = ag
    }

}

let chinmay3 = new PersonC()
console.log(chinmay3)
chinmay3.setFirstName("chinmay3")
chinmay3.setLastName("deshpande3")
chinmay3.setAge(23)
console.log(chinmay3)
chinmay3.langauge = "marathi"
console.log(chinmay3)

// class with set and get keyword

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23
}
info.city = "pune"
info['age'] = 23

// set as property using set and get word

class PersonD {
    set setFn(fn){
        this.firstName =  fn
    }
    set setLn(ln){
        this.lastName = ln
    }

    set setAge(ag){
        this.age = ag
    }


    get setFn(){
        return this.firstName
    }

    get setLn(){
        return this.lastName 
    }

    get setAge(){
        return this.age
    }

}
let chinmay4 = new PersonD()
console.log(chinmay4)

chinmay4.setLn = "deshpande"
chinmay4.setFn = "chinmay"
chinmay4.setAge = 33

console.log(chinmay4.setLn)
console.log(chinmay4.setFn)
console.log(chinmay4.setAge)