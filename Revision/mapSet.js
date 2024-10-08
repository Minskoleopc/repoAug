// program 1
let setA = new Set([11,22,33,44,55,44])
console.log(setA)
// set does not allow you to store duplicate values


// program 2
// setB

let setB = new Set()
console.log(setB)
console.log(setB.size)

// add method
// to add values to the the clear


setB.add(22)
setB.add(33)
console.log(setB)

// program 3

let setC = new Set()
setC.add(1)
setC.add(2)
setC.add(3)
setC.add(4)
setC.add(5)
console.log(setC)

let q1 = setC.has(2)
console.log(q1)

// setC.clear()
// console.log(setC)

setC.delete(3)
console.log(setC)

setC.forEach(function(val){
    console.log(val)
})

// ---------------- map ------------------

let mapA = new Map(
    [
        [1,"admin"],
        [2,"manager"],
        [3,"customer"],
        [4,"support"],
        [5,"admin-2"]
    ]
)

let mapB = new Map()
mapB.set(true,"customer")

mapA = new Map(
    [
        [1,"admin"],
        [2,"manager"],
        [3,"customer"],
        [4,"support"],
        [5,"admin-2"]
    ]
)
mapA.get(1)
mapA.clear()
mapA.has(5)
mapA.delete(5)

mapA.forEach(function(vl,ky){
    console.log(vl,ky)
})

for(let key of mapA.keys()){
    console.log(key)
}

for(let val of mapA.values()){
    console.log(val)
}

for(let [k,v] of mapA.entries()){
    console.log(k,v)
}

// 8.00 am


