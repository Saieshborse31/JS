const nums = [1,2,3,4,5,6,7,8,9,10]

//map operation
//.map madhe apan values var operation perform karto

const newNums = nums.map( (item) => item + 10);
// console.log(newNums);
const newNums1 = nums.map( (item) => {return item + 10});
// console.log(newNums1);

const newNums2 = nums.forEach( (item) => {
    // console.log(item + 10);
});


//chaining method

const newNums3 = nums
                    .map( (item) => item * 10)
                    .map( (item) => item + 5)
                    .filter( (item) => item >= 40) // mala hava tevdha me chaining karu shakto

console.log(newNums3);