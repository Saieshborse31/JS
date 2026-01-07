//IMP
//this keyword ha fakta object madhe use karta yeto and not in functions.

const user = {
    username: "saiesh",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${username}, welcome to the website`); // apan asa pan karu shakto fs pan jevha pan apan kontya eka context mhanje eka scope madhe asto tevha aplyala this keyword use karayla lagto 
        console.log(`${this.username}, welcome to the website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();
// console.log(this);

// function coffee(){
//     let username = "sai";
//     console.log(this.username);
// }
// coffee();

// const coffee = function(){
//     let username = "sai";
//     console.log(this.username);
// }

const coffee = () => {
    let username = "sai";
    console.log(this.username);
}
// coffee();

// Arrow Function
// 1st method(Normal Way)
const addTwo1 = (num1, num2) => {
    return num1 + num2;
}
// 2nd method(Mentos way) remove {} and return keyword 
// const addTwo2 = (num1, num2) => (num1 + num2);
const addTwo2 = (num1, num2) => ({username: "Saiesh"}); // how to return object () is mandatory.
//ani obj sathi {} he imp ahe 

// console.log(addTwo2(3,4));


