

let chinmay = {
    fn: "chinmay",
    ln: "deshpande",
    age: 34,
    rollNo: 23,
    walk: function () {
        console.log("fast walk")
    }
}

let amol = {
    fn: "amol",
    ln: "rao",
    age: 34,
    rollNo: 44,
    walk: function () {
        console.log("fast walk")
    }
}

class Person {
    fn = undefined
    ln = undefined
    age = undefined
    rollNo = undefined

    walk() {
        console.log("fast walk")

    }
}
// let chinmayE = new Person()
// console.log(chinmayE)

// chinmayE.fn = "chinmay"
// chinmayE.ln = "dehshpande"
// chinmayE.age = 12
// chinmayE.rollNo = 44
// console.log(chinmayE)


// let amolE = new Person()
// console.log(amolE)

// program 2


class PersonB {
    constructor(fn,ln,age ,rn){
        this.firstName = fn
        this.lastName = ln 
        this.age = age
        this.rollNo = rn
    }

    walk(){
        console.log("fast walk")
    }
}

let sharddha = new PersonB("shraddha","pote",34,55)
let mayuri  = new PersonB("mayuri","rao",44,56)


console.log(mayuri)
console.log(sharddha)



