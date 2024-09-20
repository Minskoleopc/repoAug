let a = 10
console.log(a)
console.log(typeof a) // number 

let b = true 
console.log(b)
console.log(typeof b)

let firstName = "chinmay"
console.log(firstName)
console.log(typeof firstName)

let names = ["chinmay","raj","ram","satish"]
console.log(names)
console.log(typeof names)

let bi = {
    firstName:"chinmay",
    lastName :"deshpande",
    age:23,
    rollNo:34,
    1:34
}

// map()

// how to define a map ??

let mapA = new Map()
console.log(mapA)
mapA.set(1,"admin")
mapA.set(2,"customer")
mapA.set(3,"manager")
mapA.set(4,"support")
console.log(mapA)

let mapB = new Map(
    [
        [1,'admin'],
        [2,'customer'],
        [3,'manager'],
        [4,'support']
    ]

)
console.log(mapB)

// map can have any type of keys : -
// number , string , array , boolean , object , user defined

let namee = ["amol","sarika","poorva","chinmay"]
let info = {fullName:"chinmay", lastName:"deshpande"}
let mapC = new Map()

mapC.set(1,"admin")
mapC.set(true,"candrive")
mapC.set(namee,"students")
mapC.set(info,"students")
console.log(mapC)

// difference between map and object 
// object can have only key as string
// map can have other data type as key

//create 

let mapD = new Map(
    [
        [1,'admin'],
        [2,'customer'],
        [3,'manager'],
        [4,'support']
    ]

)

// retrive 
console.log(mapD.size)
let q1 = mapD.has(5)
console.log(q1)

// update 
mapD.set(5,"operation")
mapD.set(4,"pricipal")

// delete 
mapD.delete(2)
console.log(mapD)
//mapD.clear()
//console.log(mapD)

// methods 

mapD.forEach(function(v,k){
    //console.log(v)
    console.log(k)
})

for(let x of mapD.keys()){
    console.log(x)
}

for(let val of mapD.values()){
    console.log(val)
}

for(let [x,y] of mapD.entries()){
    console.log(x)
    console.log(y)
}

console.log(mapD.get(3))



let mapE = new Map(
    [
        [1,'admin'],
        [2,'customer'],
        [3,'manager'],
        [4,'support']
    ]

)
mapE.get(1)
mapE.has(2)
mapE.clear()
mapE.size
mapE.delete(3)
mapE.forEach(function(v,k){
    console.log(v,k)
})
for(let k of mapE.keys()){
    console.log(k)
}
for(let v of mapE.values()){
    console.log(v)
}
for(let v of mapE.entries()){
    console.log(v)
}

//loadash

