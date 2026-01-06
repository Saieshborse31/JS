let a = 100
let b = 200

if(true){
    let a = 10
    console.log("Inner a: ", a);    
    const b = 20 
    console.log("Inner b: ", b);
    var c = 30
}

console.log(a);//jevha apan if block madhe lihito tar to baher nahi yenar
console.log(b);//same with this
console.log(c);//but this is exception and can make blunder so we have to use this carefully.
