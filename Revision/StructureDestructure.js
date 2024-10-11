// program 1
//            0       1      2      3
let names = ["amit", "ajay", "raj", "sanjay"]

// let q1 = names[0]
// let q2 = names[1]
// let q3 = names[2]
// let q4 = names[3]
let [j1, , j3] = names
let [q1, q2, q3, q4] = names
console.log(q1)
console.log(q2)
console.log(q3)
console.log(q4)


// program 2
//                    0                    1                  2
let states = [["nagpur", "wardha"], ["bhopal", "indore"], ["jaipur", "udaipur"]]
let [[c11, c22], [c33, c44], [c55, c66]] = states
console.log(c66)
console.log(c33)

// program 3

let info = {
    firstName: "chinmay",
    lastName: "deshpande"
}

// let n = info.firstName
// let m = info.lastName

let { firstName, lastName } = info
console.log(firstName)
console.log(lastName)

let info2 = {
    firstName: "amol",
    lastName: "rao"
}

let { firstName: fn1, lastName: ln1 } = info2
console.log(fn1)
console.log(ln1)

// program 4

let infos = {
    studentOne: {
        fn: "amol",
        ln: "rao"
    }
    ,
    studentTwo: {
        fn: "chinmay",
        ln: "deshpande"
    }
}

let {studentOne:{fn:a1,ln:a2},studentTwo:{fn:a3,ln:a4} } = infos
// console.log(studentOne)
// console.log(studentTwo)
console.log(a2)
console.log(a4)

// program 5
let ink = {
    firstName:"sarika",
    lastName:"pansare",
    ages:12,
    skills:["html","css","js"]

}

let {firstName:k1,lastName:k2,ages:k3,skills:[k4,k5,k6]} = ink
console.log(k6)

// program 6
let students = [
    {q1:"chinmay",q2:"deshpande"},
    {q1:"sarika",q2:"pansare"}

]
let [{q1:l1,q2:l2},{q1:l3,q2:l4}] = students
console.log(l4)




