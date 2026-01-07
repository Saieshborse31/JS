let a = 100
let b = 200

if(true){
    let a = 10
    // console.log("Inner a: ", a);    
    const b = 20 
    // console.log("Inner b: ", b);
    var c = 30
}

// console.log(a);//jevha apan if block madhe lihito tar to baher nahi yenar
// console.log(b);//same with this
// console.log(c);//but this is exception and can make blunder so we have to use this carefully.


//Nested functions

function one(){
    const username = "saiesh"

    function two(){
        const website = "youtube"
        console.log(username);  
        return website;      
    }
    // console.log(website); //mala direct website nahi call karta yenar mala tya sathi tyala kuthe tari return karun store karayla lagnarch.
    const site = two();
    console.log(site);    
    // two(); //ani me line no.28 la two(); ha function call kartoy mhaunun hya func la parat call karnyat kahi artha nahi.
}
// one();


//Nested loops
if(true){
    const username = "saiesh"
    if (username === "saiesh") {
        const website = " youtube"
        // console.log(username + website);   // will run     
    }
    // console.log(website); // wont run because outside the scope
}
// console.log(username); // same with this


//+++++++++++++++++++++ INTRESTING +++++++++++++++++++++

// console.log((addOne(5))); //ithe me before function value deun successfully run karu shakto but not in 2nd case.
function addOne(num){
    return num+1;
}


// addTwo(5); // ithe me fakta declare karat nahi ahe function tar me ithe function la hold pan karto ahe eka variable madhe tya mule tyacha placing chi kalji ghyayla lagnar maala .
//hyach concept la mhantat hoisting.
const addTwo = function(num){
    return num+2;
}
// const addTwo = (num) => num + 2