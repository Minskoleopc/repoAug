let students = [
    {
        firstName: "chinmay",
        lastName: "deshpande",
        age: 34,
        skills: ["html", "javascript","python"]

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
// program 1

students.forEach(function(el,index,arr){
    console.log(`${el.firstName} ${el.lastName}`)
})

// program 2
// firstName:numberOfSkills
students.forEach(function(el){
    console.log(`${el.firstName}:${el.skills.length}`)
})

// program 3
students.forEach(function(el){
    el.skills.push("Generative AL")
})
console.log(students)

// program 4
// average age of all students 
let total = students.reduce(function(acc,el){
    return acc + el.age
},0)
console.log(total/students.length)

// program 5
// print name of all students python skill
students.forEach(function(el){
    if(el.skills.includes("python")){
        console.log(el.firstName)
    }
})

// print name of all student with python skill and age < 30

students.forEach(function(el){
    if(el.skills.includes('python') && el.age < 30){
        console.log(el.firstName)
    }
})

// all students add a property language and value "english"

students.forEach(function(el){
    el['language'] = "english"
})
console.log(students)

















