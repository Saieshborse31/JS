const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Detailed way
const myTotal = nums.reduce(function (acc, curr_value) {
    // console.log(`acc :- ${acc} & curr_value :- ${curr_value}`);    
    return acc + curr_value
}, 0) // 0 is initial value.
//Refer mdn docs for this 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// console.log(myTotal);

//Smart way
const myTotal1 = nums.reduce( (acc, curr_value) => acc + curr_value ,0)

// console.log(myTotal1);

const shoppingCart =[
    {
        courseName: "Js Course",
        price: 999
    },
    {
        courseName: "Py Course",
        price: 2999
    },
    {
        courseName: "Java Course",
        price: 4999
    },
    {
        courseName: "C Course",
        price: 1999
    }
];

const priceToPay = shoppingCart.reduce( (acc, item) => {
    return acc + item.price
},0);

// console.log(`Total is :- ${priceToPay}`);
