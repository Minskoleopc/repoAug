

// class HelloWorld {
//     public static void main(String[] args) {
//         System.out.println("Try programiz.pro");
//         addition(12,3);
//         addition(12,3,4);
//         addition(12,3,4,4);
//     }
//     // overloading
//     // same class , same method but different signature
//     public static int addition(int x , int y){
//            System.out.println(x+y);
//            return x + y;
//     }
//      public static int addition(int x , int y , int z){
//            System.out.println(x+y+z);
//              return x + y + z;
//     }
//      public static int addition(int x , int y , int z , int a){
//            System.out.println(x+y+z+a);
//            return x + y + z + a;
//     }
    
// }

// class Calculator {
//     addition(x,y){
//         return x + y
//     }
//     addition(x,y,z){
//         return x + y + z
//     }

//     // first call   --- x  = 12 , y = 3 , z = undefined , a = undefined
//     // second call  --- x  = 1, y = 2 , z = 5 , a = undefined
//     // third call   --- x  = 1, y = 3 , z = 4 , a = 5

//     // addition(x,y,z,a){
//     //     return x + y + z + a
//     // }

//     addition(x = undefined,y = undefined ,z = undefined,a = undefined){

//         if(x =! undefined && y != undefined && z != undefined  && a != undefined){
//             return (x+y+z+a)
//         }
//         else if(x =! undefined && y != undefined && z != undefined){
//           return (x+y+z)
//         }
//         else if(x =! undefined && y != undefined ){
//             return (x+y)
//         }
//     }
// }

// let a = new Calculator()
// console.log(a.addition(12,3))
// console.log(a.addition(1,4,5))
// console.log(a.addition(1,3,4,5))


// same class , same method name and different signature

// overriding 
// different class (has a relation) , same methodName , same signature

class WorlBank {
    loan(){
        console.log("I am loan from worldbank")
    }
    save(){
        console.log("I am save from world bank")
    }
}

class SBI extends WorlBank{
    // override
    loan(){
        console.log("loan from SBI")
        //super.loan()
    }
    save(){
        console.log("save from SBI")
        //super.loan()
    }

}
class PNB extends WorlBank {

}

let nagpur = new SBI()
nagpur.loan()
nagpur.save()