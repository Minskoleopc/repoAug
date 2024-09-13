//             0          1       2        3
let names = ["chinmay","sarika","sachin","ram"]
let q1 = names[0]
let q2 = names[1]
let q3 = names[2]
let q4 = names[3]
console.log(names)

let [n1,n2,n3,n4] = names
console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)

// program 2

let states = [["pune","mumbai"],["jaipur","udaipur"]]
let [[c11,c22],[c33,c44]] = states
console.log(c11)
console.log(c22)
console.log(c33)
console.log(c44)


// program 3


let info = {
    firstName:"chinmay",
    lastName:"deshpande"
}

// let {firstName,lastName} = info
// console.log(firstName)
// console.log(lastName)
let {firstName:fn2,lastName:ln} = info
console.log(fn2)
console.log(ln)


// program 4

let info2  = {
    fullName:"chinmay",
    parent:{
        fn:"shirish",
        mn:"kanchan"
    }
}

let {fullName:r1,parent:{fn:r2,mn:r3}} = info2 
console.log(r1)
console.log(r2)
console.log(r3)

// program 4
let students = [
    {
        firstName:"chinmay",
        lastName:"deshpande"
    },
    {
        firstName:"mayuri",
        lastName:"rao"
    }

]
let [{firstName:f11,lastName:l11},{firstName:f22,lastName:l22}] = students
console.log(f11)
console.log(l11)
console.log(f22)
console.log(l22)


// program 5
let info3 = {
    fullName:"chinmay deshpande",
    city:"pune",
    skills:["python","javascript","sql"]
}

let {fullName:s1,city:s2,skills:[s3,s4,s5]} = info3
console.log(s1)
console.log(s2)
console.log(s3)
console.log(s4)
console.log(s5)


let info33 = {
    fn:"ram",
    ln:"verma",
    city:"pune",
    age:23
}

function getFirstNameCity({fn,age}){
    console.log(fn)
    console.log(age)
}
getFirstNameCity(info33)











