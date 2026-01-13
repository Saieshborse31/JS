// for loop 

for (let i = 0; i < 10; i++) {
    const element = i + 1;
    if (element == 5) {
        // console.log("5 is found");
        continue; 
    }
    console.log(element);
   
}

//nested for loop

for (let i = 1; i <= 10; i++) {
    // console.log(`Outter loop: ${i}`);
    for(let j = 1; j <= 10; j++){
        // console.log(`Inner loop: ${j} and Outter loop: ${i}`);
        // console.log(` ${i} * ${j} = ${i * j}`);
    }
}   

let myArray = ["flash", "superman", "batman", "wonderwoman"];
const mA = myArray.length;
// console.log(mA);
for (let i = 0; i < mA; i++) {
    const element = myArray[i];
    // console.log(element);    
}


