let students = [
    {
        firstName: "chinmay",
        lastName: "deshpande",
        age: 23,
        skills: ["html", "javascript"]

    },
    {
        firstName: "amol",
        lastName: "dani",
        age: 44,
        skills: ["sql", "css", "javascript"]
    },
    {
        firstName: "sharddha",
        lastName: "kulkarni",
        age: 23,
        skills: ["sql", "html", "python", "django"]
    }
    ,
    {
        firstName: "raj",
        lastName: "kumar",
        age: 32,
        skills: ["powerBI", "excel", "SQL", "django", "numpy"]
    }

]

// console.log(students[0]['firstName'])
// console.log(students[1].lastName)
//firstName lastName

// program 1

for (let i = 0; i < students.length; i++) {
    console.log(students[i].firstName + students[i].lastName)
}

//forEach
students.forEach(function (el) {
    console.log(`${el.firstName} ${el.lastName}`)
})

// program 2
// name : numberof skills
students.forEach(function (el) {
    console.log(`${el.firstName}:${el.skills.length}`)
})

//program 3
// name of people above age 30
//[obj1,obj2,obj3,obj4] ===> [obj2 , obj2]

students.forEach(function (el) {
    if (el.age > 30) {
        console.log(el.firstName)
    }
})

// let above30 = students.filter(function(el){
//     return el.age > 30
// })
// console.log(above30)
// above30.forEach(function(el){
//     console.log(el.firstName)
// })

students.filter(function (el) {
    return el.age > 30
})
.forEach(function(el){
    console.log(el.firstName)
})

//[amol,raj]

let err = students.filter(function (el) {
    return el.age > 30
})
.map(function(el){
    return el.firstName
})
console.log(err)


// [11,22,33,44,55] ====> [16,27,38,49,60] ===> map
// [11,22,33,44,55] ====> [33,44,55]       ===> filter
// [11,22,33,44,55] ====>                       forEach()


// program 3
let above30B = students.filter(function(el){
    return el.age > 30
})

console.log(above30B)

above30B.forEach(function(el){
    console.log(el.firstName)
})

//["amol","raj"]
let nameNew = above30B.map(function(el){
    return el.firstName
})
console.log(nameNew)
