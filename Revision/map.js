// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:23,
//     rollNo:34
//      1:admin
// }
// console.log(info)
// console.log(info.firstName)
// console.log(info.lastName)


// for(let prop in info){
//     console.log(prop,info[prop])
// }


// data 
// map


// map and object 
// object props arealways string 
// map props can be any data type


let map = new Map()
console.log(map)
map.set(1,'admin')
map.set(2,'role')
map.set(3,'manager')
map.set(4,'customer')
map.set(true,'admin-access')
console.log(map)

let mapB = new Map(
    [
        [1,"admin"],
        [2,"role"],
        [3,"customer"],
        [4,"access"]

    ]

)
console.log(mapB)
console.log(mapB.size)
let q1 = mapB.has(3)
console.log(q1)


// set()
mapB.set(5,'abc')

// has()
mapB.has(6,'bcd')

//clear
//mapB.clear()
console.log(mapB)
//delete
mapB.delete(2)
console.log(mapB)

mapB.forEach(function(vl,ky){
    console.log(vl,ky)
})

for (let key of mapB.keys()){
    console.log(key)
}

for (let val of mapB.values()){
    console.log(val)
}

for (let arr of mapB.entries()){
    console.log(arr)
}

let f = mapB.get(3)
console.log(f)

// sets






