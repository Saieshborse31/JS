const useEmail = "s@saiesh.ai"  // truthy value
const useEmail1 = ""  // falsy value
const useEmail2 = []  // truthy value
const useEmail3 = []  // truthy value

// if (useEmail) {
//     console.log("Got Email");
// }else{
//     console.log("No Email");
// }

// if (useEmail1) {
//     console.log("Got Email");
// }else{
//     console.log("No Email");
// }

// if (useEmail2) {
//     console.log("Got Email");
// }else{
//     console.log("No Email");
// }


// if (useEmail3.length === 0) {
//     console.log("Array is empty.");
// }

// Falsy & Truthy values in JavaScript

// Falsy values:
// false
// 0,-0, BigInt 0n
// "", '', `` (empty strings)
// null
// undefined
// NaN

//Truthy values:
    //Surpsrising values
    //"0"
    //'false'
    //" " (string with space)
    //[] (empty array)
    //{} (empty object)
// Any value that is not falsy is truthy
// Examples:
// true
// Non-zero numbers (positive and negative)
// Non-empty strings
// Objects
// Arrays (even empty arrays)



const emptyObject = {}

// if(Object.keys(emptyObject).length === 0){ //Object.keys(emptyObject) will return an array mah apan .length use karun check karu shakto ki object empty aahe ki nahi. 
//     console.log("Object is empty");
// }


//Nullish Coalescing Operator (??)

let val1;
val1 = 5 ?? 10; //5 is considered as a valid value (not nullish)
val1 = null ?? 10; //null is considered as nullish value
val1 = undefined ?? 10; //undefined is considered as nullish value
val1 = 0 ?? 10; //0 is considered as a valid value (not nullish)
val1 = "" ?? "default string"; //empty string is considered as a valid value (not nullish)
// console.log(val1); 


//Ternary Operator

//condition ? truecase : falsecase
const iceTeaPrice = 30;
 
// iceTeaPrice <= 30  ? console.log("Ice tea is cheap") : console.log("Ice tea is expensive");
0
