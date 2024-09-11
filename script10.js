// program 1
let firstName = "ram"
// 0 1  2
// r a  m
let q = firstName.charAt(2)
console.log(q)

let lastName = "sachin"
let q2 = lastName.charCodeAt(1)
console.log(q2)

// program 3

let firstNamee = "chinmay"
let lastNamee = "deshpande"
let q3 = firstNamee.concat(lastNamee)
console.log(q3)

let q4 = firstNamee.concat(" ",lastNamee,"!")
console.log(q4)


// program 4

info2 = "I am learning javascript and javascript is FE"
let q5 = info2.replace("javascript","python")
console.log(q5)
let q6 = info2.replaceAll("javascript","python")
console.log(q6)

// program 5 
//slice

let city = "chandrapur"
// 0   1   2   3    4   5   6   7   8   9
// c   h   a   n    d   r   a   p   u   r
//-10 -9  -8  -7   -6  -5  -4  -3  -2   -1

//city.slice(startIndex,EndIndex(not included))

console.log(city.slice(2))
console.log(city.slice(1,9))
console.log(city.slice(-5))
console.log(city.slice(-9,-5))
console.log(city.slice(1,-5))
console.log(city.slice(-8,8))
console.log(city.slice(-5,-9))


//program 6

let str = "5"
console.log(str.padStart(3,"0"))// 005


let str2 = "6"
console.log(str2.padEnd(5,"0"))

// program 6

let fruit = "banana"
let e3 = fruit.repeat(2)
console.log(e3)



// program 7

let email = "chinmaydeshpande010@gmail.com"


let qw = email.split("@")
console.log(qw)

//["chinmaydeshpande010","gmail.com"]
let q22 = qw.join('@')
console.log(q22)
















