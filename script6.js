let a = 10
console.log(a)
console.log(typeof a)

let b = true 
console.log(b)
console.log(typeof b)

let c = "chinmay"
console.log(c)
console.log(typeof c)

let cities = ["pune","mumbai","banglore"]
console.log(typeof cities)

// CRUD 

// Create 

// Retrive

// Update 

// Delete

// //             0  1  2  3  4
// let numbers = [11,22,33,44,55]

// // add 
// numbers.unshift(122)
// numbers.push(234)
// // update 

// numbers[1] = 444
// console.log(numbers)

// // retrive
// console.log(numbers[4])

// // delete
// numbers.pop()
// numbers.shift()
// numbers.splice(1,1)


// program 2

//             fn         ln      ag rollNo
let info = ["chinmay",'deshpande',34,55]


let info2 = {
    // 
    // property:value
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:55
}

//console.log(info2[0])
// retrive  (dot notation and bracket notation)

console.log(info2.firstName)
console.log(info2['lastName'])

// update (dot notation and bracket notation)
info2.firstName = "chinmay D"
info2['lastName'] = "dani"
console.log(info2)
// add  (dot notation and bracket notation)
info2.city = "pune"
info2['language'] = "marathi"
console.log(info2)
// delete  (dot notation and bracket notation)

delete info2.city
delete info2['age']

console.log(info2)



let vehicle = {
    color:"blue",
    type:"SUV"
}

// dot notation

// retrive
console.log(vehicle.color)
// add 
vehicle.regNo = 123
// update 
vehicle.color = "red"
// delete 
delete vehicle.type

vehicle = {
    color:"blue",
    type:"SUV"
}

console.log(vehicle['color'])
vehicle['color'] = "blue"
vehicle['regNo'] = 124
delete vehicle['color']
