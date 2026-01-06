// Create a function named sayMyName.
function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("I");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName(); 

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

// addTwoNumbers(5, 8);

// function addTwoNumbers2(number3, number4){
//     console.log(number3 + number4);
// }

// const result = addTwoNumbers2(5, 8);

// console.log("Result is: " +result); // undefined


function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;   \
    return number1 + number2;   
}

const result = addTwoNumbers(5, 8);

// console.log("Result is: " +result);  

function loginUseMessage(username = "Guest"){
    // if(username === undefined){
    //     return "Please enter a valid username";
    // }
    if(!username){ //he pan check karte ki username defined ahe ki nahi
        return "Please enter a valid username";
    }
    else{
        return `${username} just logged in`; // $ is used in JavaScript to insert a variable’s value inside a string.
    }
}


// loginUseMessage("Saiesh"); //run nahi honar because, return value is not stored or used anywhere

// console.log(loginUseMessage(""));
console.log(loginUseMessage("Saiesh"));
// console.log(loginUseMessage()); 

// undefined just logged in
//jar kahi argument pass nahi kela tar default value "Guest" ghenar ani jar kahi argument pass kela tar to override karel default value la.
// ani jar empty string pass kela tar to pan valid value nahi mhanun check karel ani "Please enter a valid username" return karel.