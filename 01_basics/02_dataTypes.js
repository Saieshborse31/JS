"use strict"; // treat all JS code as newer versions

//Premitive data types
let name = "John"; //string
let age = 30; //number (both integer and float)
let isApproved = true; //boolean (true/false)
let firstName = undefined; //undefined
let selectedColor = null; //null
//symbol (unique identifier) will be covered later(in React section)
//bigint (larger than 2^53 -1)

//Reference data types - objects


console.log(typeof name); //string
console.log(typeof age); //number
console.log(typeof isApproved); //boolean
console.log(typeof firstName); //undefined
console.log(typeof selectedColor); //object
console.log(typeof null); //bug in JS, it shows object instead of null