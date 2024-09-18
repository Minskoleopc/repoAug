let x = 10
console.log(x)

//              0         1        2      3      4
let names = ['chinmay','sarika','poorva',"raj","sham"]
console.log(names[0])
console.log(names[1])

for(let i = 0 ; i < 5 ; i++){ // 1 // 2 // 3 // 4 // 5 
    //console.log(i) // 0 // 1 // 2 // 3 // 4 
    console.log(names[i])
}

// i - 0
// i - 1
// i - 2
// i - 3
// i - 4

// program 2
//              0       1        2        3        4
let fruits = ["apple","mango","banana","orange","grapes"]
console.log(fruits.length)
for(let i = 0 ; i < fruits.length ; i++){
    //console.log(i)
    console.log(fruits[i])
}

// program 3
let i3 = 0
while(i3 < fruits.length){
    //console.log(i3)
    console.log(fruits[i3])
    i3++
}