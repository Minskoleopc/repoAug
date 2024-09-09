// methods 

let firstName = "chinmay"
// method 
// action  - convert every character to upperCase()
// return type  - string
let fn = firstName.toUpperCase()
console.log(fn)


// toLowerCase()
let lastName = "Deshpande"
let ln = lastName.toLowerCase()
console.log(ln)

// includes()
let firstNamee = "chinmay"
let nn = firstNamee.includes("chi")
console.log(nn)
let mm  = firstNamee.includes("CHI")
console.log(mm)

// indexOf()

let  middleName = "shirish"
// 0   1   2   3  4   5   6
// S   h   i   r  i   s   h
let w1 = middleName.indexOf('i')
console.log(w1)
let w2 = middleName.indexOf("I")
console.log(w2)
let w3 = middleName.lastIndexOf('i')
console.log(w3)


// startWith() , endsWith()
// boolean value 

let city = "pune"
let w4 = city.startsWith('p')
let w5 = city.startsWith('pu')
console.log(w4)
console.log(w5)


let city2 = "nagpur"
let w6 = city2.endsWith('r')
let w7 = city2.endsWith('ur')
let w8 = city2.endsWith('Ur')
console.log(w6)
console.log(w7)
console.log(w8)


// trim()
let city3 = " goa "
console.log(city3.length)
let w9 = city3.trim()
console.log(w9.length)

// trimStart()
let city4 = " goa"
let  w10  = city4.trimStart()
console.log(w10.length)

// trimEnd()
let city5 = " goa "
let w11 = city5.trimEnd()
console.log(w11.length)

// replace()
let info = "I am leaning javascript"
w12 = info.replace("javascript","python")
console.log(w12)



// slice()


// split()
let email = "chinmaydeshpande@gmail.com"
console.log(email.split('@'))
console.log(email.split('a'))

//"chinmaydeshpande@gmail.com".split('@')
//["chinmaydeshpande","gmail.com"]
//["chinm","ydeshp","nde@gm,"il.com"]
console.log([ 'chinm', 'ydeshp', 'nde@gm', 'il.com' ].join('a'))
