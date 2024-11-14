// let info2 = {
//     firstName:"chinmay",
//     lastname:"deshpande",
//     displaName:function(){
//         console.log(this.firstName + this.lastname)
//     }
// }

// let info3 ={
//     firstName:"amol",
//     lastname:"rao"
// }

// let info4 ={
//     firstName:"rahul",
//     lastname:"singh"
// }


// //info2.displaName()

// let a = info2.displaName

// // let a = function(){
// //     console.log(this.firstName + this.lastname)
// // }

// a() // NaN

// a = a.bind(info3)

// // let a = function(){
// //     console.log(info3.firstName + info3.lastname)
// // }
// a()


// bind call and apply
// this ----- setting value

let info5 = {
    firstName:"amol5",
    lastName:"rao5"
}
let info6 = {
    firstName:"amol6",
    lastName:"rao6"
}
let info7 = {
    firstName:"amol7",
    lastName:"rao7"
}
let displayName = function(word){
    console.log(this.firstName+this.lastName)
    console.log(word)
}

// apply
displayName.apply(info5,["si"])
// call()
displayName.call(info5,"hello")
displayName.call(info6,"hi")
displayName.call(info6,"bye")

// bind , returns function but now with value for this keyword (reference)
// obj1 = displayName.bind(info5)
// // obj1 = function(){
// //     console.log(info5.firstName+info5.lastName)
// // }
// obj1()

