let score = "Saiesh"; 
console.log(typeof score); // string

// conversion from string to number
let valueInNumber = Number(score);
console.log(valueInNumber); // NaN
console.log(typeof valueInNumber); // number

/*
Conversion rules:
"abc" -> NaN
" " -> 0
"33" -> 33
"33abc" -> NaN
true -> 1
false -> 0
null -> 0
undefined -> NaN
*/

let isLoggedIn = 1; // 0, 1
console.log(typeof isLoggedIn); // number

// conversion from number to boolean
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true
console.log(typeof booleanIsLoggedIn); // boolean

/*
Conversion rules:
0 -> false
1 -> true
any other number -> true
"" -> false
"abc" -> true
null -> false
undefined -> false
*/

let someNumber = 3;
console.log(someNumber); // 3
console.log(typeof someNumber); // number

// conversion from number to string
let stringNumber = String(someNumber);
console.log(stringNumber); // "3"
console.log(typeof stringNumber); // string

/*
Conversion rules:
123 -> "123"
null -> "null"
undefined -> "undefined"
true -> "true"
false -> "false"
*/