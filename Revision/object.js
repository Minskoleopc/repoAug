// //             0         1        2   3
// let info = ["chinmay","deshpande",23,45]

// // retrive
// console.log(info[0])

// // add 
// info.push("pune")
// info.unshift("Mr")
// // update 
// info[0] = "tanmay"
// // delete
// info.pop()
// info.shift()
// info.splice(1,1)

// // C - create  / add
// // R - retrive
// // U - Update
// // D - Delete


// program 1
//              fn          ln     ag  rollNo
//let info2 = ["chinmay","deshpande",23,56]

let info2 = {
    //property:value
    // key    :value
    fn:"chinmay",
    ln:"deshpande",
    age:23,
    rollNo:56,
    age:24
}

// does object stores the value by index
console.log(info2[0])
console.log(info2)

// does object stores duplicate key 

info2 = {
    fn:"chinmay",
    ln:"deshpande",
    age:23,
    rollNo:56,
    age:24
}

// Retrive dot notation and bracket notation
console.log(info2.fn)
console.log(info2['ln'])

// Update dot notation or bracket notation
info2.fn = "tanmay"
info2['age'] = 25
// Create / Add  dot notation or bracket notation
info2.city = "pune"
info2['language'] = "marathi" 
//delete dot notation or bracket notation
delete info2.fn
delete info2['ln']


let vehicle = {
    color:"red",
    type:"sedane"
}
console.log(vehicle)

// retrive 
console.log(vehicle.color)
console.log(vehicle['color'])

// update
vehicle.color = "red"
vehicle['color'] = "blue"

// add/ create
vehicle.regNo = 123
vehicle['regNo'] = 123

// delete
delete vehicle.color
delete vehicle['typr']


// assign
// how to loop over object
// SET / MAP








