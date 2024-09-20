let a = 10 
let b = true
let c = "chinmay"
let d = [11,22,33]
let e = {fn:"chinmay",ln:"deshpande"}
let f = new Map()

// set
// object ====> propeties and methods

let setA = new Set()
console.log(setA)
setA.add(1)
setA.add(2)
setA.add(3)
setA.add(2)
console.log(setA)

//console.log(setA[0])

let setB = new Set([22,33,44,55,66,33])
console.log(setB)
setB.add(333)
console.log(setB.size)
Array.from(setB)
// size
// add

// program 3
// let setC = new Set([55,44,55,33,44,55,66,77,88])
// setC.clear()
// console.log(setC)


// program 4
let setC = new Set([55,44,55,33,44,55,66,77,88])
let q1 = setC.has(44)
let q2 = setC.has(444)
console.log(q1)
console.log(q2)

//reserved methods
// setC.keys()
// setC.values()
// setC.entries()

setC.forEach(function(el){
    console.log(el)
})


















