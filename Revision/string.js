// string in js 

let firstName = 'chinmay'
let lastName = "deshpande"
let middleName = `shirish`

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof middleName)

// let a = 10 
// console.log(typeof a) 

// let a1 = true 
// console.log(typeof a1) 

// program 2
// string + number =====> string 
// number + string =====> string
// string + string =====> string
// number + number =====> number

let a = 10 
let b = 5
let c = "hello"

console.log(a + b + c)
// number + number + string
        // 15 + "hello"
            // 15hello

console.log(c+a+b)
//  string + number + number
    // "hello"+10
        //"hello10"+5
            // "hello105"

console.log(a+c+b)
// number + string + number 
    // 10 + 'hello'
        // '10hello' + 5
            // '10hello5'

// program 3
let fn = "chinmay"
let ln = "deshpande"

// My firstName is chinmay and lastName is deshpande
console.log("My firstName is "+fn+" my lastName is "+ln)
console.log(`My firstName is ${fn} my lastName is ${ln}`)

// program 4
// string stores the value by index 

let city = "pune" 
// 0   1   2    3
// p   u   n    e
console.log(city[0])
// js --- object ----- properties and methods 
// length 
console.log(city.length)


let city2 = "nagpur"
// 0   1   2  3  4  5
// n   a   g  p  u  r

// forward - for

for(let i = 0 ; i < city2.length ; i++){
    //console.log(i)
    console.log(city2[i])
}

// reverse - for 
for(let i = city2.length -1 ; i >= 0 ; i--){
   // console.log(i)
  // console.log(city2[i])
}

// forward - while loop

let i2 = 0
while (i2 < city2.length){
    //console.log(i2)
    console.log(city2[i2])
    i2 = i2 + 1
}

// String - methods 
// toUpperCase()
let city1 = "pune"  // PUNE
let q1 = city1.toUpperCase()
console.log(q1)


// toLowerCase()
let city3 = "NAGPUR"
let q2 = city3.toLowerCase()
console.log(q2)


// includes()
let city4 = "jaipur"
let q3 = city4.includes('jai')
let q4 = city4.includes('j')
let q5 = city4.includes('J')
console.log(q3)
console.log(q4)
console.log(q5)


// startswith()

let city5 = "pune"
let q6 = city5.startsWith('p')
let q7 = city5.startsWith('pun')
console.log(q6)
console.log(q7)


// endswith()
let city6 = "raipur"
let q8 = city6.endsWith('r')
let q9 = city6.endsWith('ur')
let q10 = city6.endsWith('Ur')
console.log(q8)
console.log(q9)
console.log(q10)


// trim()
let c1 = " goa "
console.log(c1.length)
let c1a = c1.trim()
console.log(c1a.length)

// trimStart()
let c2 = " goa "
console.log(c2.length)
let c2b = c2.trimStart()
console.log(c2b.length)

// trimEnd()
let c3 = "nagpur "
console.log(c3.length)
let c3c = c3.trimEnd()
console.log(c3c.length)

//Split()

let info = ["chinmay","gmail.com"]
let q11 = info.join('-')
console.log(q11)
console.log(q11.split('-'))

let city9 = 'chandrapur'
// ["ch","ndr","pur"]
console.log(city9.split('a'))

//slice()

let city10 =  "nagpur"

// 0    1    2   3   4   5
// n    a    g   p   u   r
// -6  -5   -4  -3  -2   -1

console.log(city10.slice(2))
console.log(city10.slice(2,5))
console.log(city10.slice(-3))
console.log(city10.slice(-6,-3))
console.log(city10.slice(-6,4))
console.log(city10.slice(0,-1))
console.log(city10.slice(-1,-3))

// repeat()

let str1 = "hello"
let str2 = str1.repeat(3)
console.log(str2)


// replace()
let str3 = "i am learning javascript"
let str5 = str3.replace("javascript","python")
console.log(str5)

// substring()
let city33 = "chandrapur"

//  0    1    2   3   4   5   6   7   8   9
//  c    h    a   n   d   r   a   p   u   r
// method is similar to slice but does not accept negative index
let q44 = city33.substring(1,5)
console.log(q44)

// charAt()
// 0   1    2    3
// a   m    o    l

let h = "amol"
let q22 = h.charAt(2)
console.log(q22)
q23 = h.charCodeAt(0)
console.log(q23)

// indexOf()

//  0    1    2   3
//  a    m    o    l

let h2 = "amol"
let q222 = h2.indexOf("a")
let q22a = h2.indexOf("A")
console.log(q222)
console.log(q22a)

// lastIndexOf()

let discovery = "javascript"
// 0   1   2   3   4  5  6  7   8  9
// j   a   v   a   s  c  r  i   p   t
let q223 = discovery.lastIndexOf('a')
console.log(q223)

























