// Example of using 'for...of' loop with 'continue' statement
// for of loop mainly arrays and strings sathi use kele jatat.

let greeting = "Hello, World!";

for (const greet of greeting) {
    if (greet === " " || greet === "," || greet === "!") {
        continue;
    }
    // console.log(`Each value of char is ${greet}`);
}

// Example of using 'for...of' loop with 'break' statement
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

for (const fruit of fruits) {
    // if (fruit === "Cherry") {
    //     break;
    // }
    // console.log(fruit);
    // console.log(`Fruit: ${fruit}`);
}

// Maps 
//Map ha unique key-value pairs store karnyacha ek data structure ahe.Jithe key unique asavi lagte.

const map = new Map();
map.set('IN',"India");
map.set('UK',"United Kingdom");
map.set('JP',"Japan");
map.set('IN',"India");// duplicate key, will overwrite previous value

// console.log(map);
for (const key of map) {
    // console.log(key); // array sarkha yeta he avoid karnya sathi apan ek navin way try karto 
    //as follows    
}

for (const [key, value] of map) {
    // console.log(key, ":- ", value);
}

const myObj = {
    game1: "Football",
    game2: "Cricket",
    game3: "Hockey"
}

// for (const [key, value] of myObj) {
//     // console.log(key, ":- ", value); //TypeError: myObj is not iterable. Objects la apan ashya prakarane loop karu shakat nahi.Tyala ek vegla prakarane handle karava lagto.
// }