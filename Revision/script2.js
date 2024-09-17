// for loop 

// for(intilization ; conditionCheck ; increment/decrement){
//     // statements
// }

// program 1 
// print 1 to 3 

for (let i = 1; i <= 3; i++) { // 2 // 3 // 4
    console.log(i) // 1 // 2 // 3
}
// print "hello" three time
for (let i = 1; i <= 3; i++) {
    console.log("hello")
}

// print 5 to 1
for (let i = 5; i >= 1; i--) {// 4 // 3 // 2 // 1 // 0
    console.log(i) // 5 // 4 // 3 // 2 // 1
}

// table of 2 
for (let i = 2; i <= 20; i = i + 2) {
    console.log(i)
}

// table of 5 in reverse
for(let i = 50 ; i >= 5 ; i = i - 5){ // 45 // 40 --------- 0
    console.log(i) // 50 // 45 --------------- 5
}

// for loop with break statement

for(let i = 1 ; i <= 5 ; i++){ // 2 // 3
    console.log(i) // 1 // 2 // 3
    if (i == 3){
        break
    }
} 

for(let i = 1 ; i <= 5 ; i++){  // 2 // 3
    if (i == 3){
        break
    }
    console.log(i)  // 1 // 2
} 

for(let i = 5 ; i >= 1 ; i--){ 
    if(i == 3){
        break
    }
    console.log(i) 
}

// for loop with continue statement

for(let i = 1 ; i <= 5 ; i++){ // 2 // 3 //4 // 5 // 6
    if(i == 3){
        continue
    }
    console.log(i) // 1 // 2 // 4 // 5 
}

// while loop

// intilization
// while(condition){
    // statament 
    // increment/ decremnt
//}

// program 1

let q1 = 1
while(q1 <= 3){
    console.log(q1) // 1 // 2 // 3
    q1 ++ // 2 // 3 // 4
}

let q2 = 1
while(q2 <= 3){
    console.log("hello")
    q2 = q2 + 1
}

let q3 = 1
while(q3 <= 5){
    console.log(q3)
    q3 = q3 + 1
}

let q4 = 5
while(q4 >= 1){
    console.log(q4) // 5 // 4 // 3 // 2 // 1
    q4 = q4 - 1 // 4 // 3 // 2 // 1 // 0
}

let q5 = 2
while(q5 <= 20){
    console.log(q5)
    q5 = q5 + 2
}

let q6 = 50
while(q6 >= 5){
    console.log(q6)
    q6 = q6 - 5
}



// while with break statement


// while with continue statement