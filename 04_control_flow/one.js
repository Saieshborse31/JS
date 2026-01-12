//if

const isUserLoggedIn = true

// if(isUserLoggedIn === true){
//     console.log("Success!!");
// }

// if ( 2 !== 3) {
//     console.log("Success!!");
// }

// <  less than
// , >  greater than
// , <= less than or equal to
// , >= greater than or equal to
// , == equal to
// , != not equal to
// , === strict equal to || e.g: (2 === 2 ) is true because both value and type are same
// , !== not strict equal to || e.g: (2 !== 3 ) is true because 2 is not equal to 3

const points = 9800
// if (points < 500) {
//     console.log("Points less than 500");
// } else if (points < 750) {
//     console.log("Points less than 750");
// } else if (points < 900) {
//     console.log("Points less than 900");
// } else if (points <= 1000) {
//     if (points == 1000) {
//         console.log("Points are 1000");
//     } else if (points < 1000) {
//         console.log("Points less than 1000");
//     }
// } else {
//     console.log("Points higher than 1000");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {  //&& logical AND operator, saglya condition true pahije code run karayla 
  console.log("will run "); 
}

if (userLoggedIn && debitCard && 2==3) {   
  console.log("won't run"); 
}

if (loggedInFromGoogle || loggedInFromEmail) { //|| logical OR operator, ekahi condition true asel tr code run hoil
    console.log("User logged in");
}