// Immediately Invoked Function Expressions(IIFE)
//IIFE immediately function run karnya sathi tar use kartoch pan sobatch global scope madhe declare kele janare je variable ahe tyancha pollution kami karnya sathi pan IIFE use kartat.

(function chai(){
    console.log(`DB1 Connected`);
})();

//()()
//first parenthesis ha hamesha tyacha function asnar ani 
//second parenthesis ha nehmi tyacha execution call asnar 

( () => {
    console.log(`DB2 Connected`);
} )();

//apan IIFE madhe arrow function pan use karu shakto pan fakta proper indentation(;) dyayla lagta karan IIFE la mahiti nasta ki expression kuthe samptay.

( (name) => {
    console.log(`Hello ${name}`);
} )("Saiesh");