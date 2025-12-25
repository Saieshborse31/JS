// Arrays 

const myArr = [2,7,7,3,6,9]

// const myArr2 = new Array(1,2,4,5,6,7)
// console.log(myArr[0]);

//Array Methods

// myArr.push(6)  //last la add hota 
// myArr.push(7)
// myArr.pop()    //last cha element to pop karto 

// myArr.unshift(0)  //start la add karto
// myArr.shift()  //start cha element la remove karto


// console.log(myArr.includes(5));  //check if element is present or not
// console.log(myArr.indexOf(7)); //gives index of element
// console.log(myArr.indexOf(17));

//  const newArr = myArr.join()

//  console.log(myArr);
//  console.log(newArr);
//  console.log(typeof newArr);


//slice , splice
console.log("A ", myArr);

const myn1 = myArr.slice(1,3)  //1 to 3-1 index paryant slice karto
console.log(myn1);
  

console.log("B ",myArr);

const myn2 = myArr.splice(1,3)


console.log("C ",myArr);
console.log(myn2);

