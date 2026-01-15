//for each loop
// for of loop mainly arrays sathi use kela jato.
// for each loop ha call back functionsch use karto
//ha one of the most used loop for array ahe.

const coding = ["js","cpp","c","html","python","java"]

coding.forEach(function (key){ //traditional way
    // console.log(key);    
});

coding.forEach((val) => { //arrow function
    // console.log(val);   
})

function printme(item){ //using another function
    console.log(item);   
}

// coding.forEach(printme);

coding.forEach((item, index, array) => { 
    // console.log(item, index, array);//parameter mdhe fakta basic item nahi gheun yet te tya sobat index ani array pan gheun yeta tar apan tya var jar kahi manipulation asel tar karu shakto.
});
 


// He mainly DB's madhe use honar karan jevha DB's madhna data yeto to arrays cha format madhech yeto tar tyala asach access karayla lagto.

const myCoding = [
    {
        dishName: "Butter Chicken", 
        rating: 5
    },
    {
        dishName: "Shahi Paneer", 
        rating: 4.5
    },
    {
        dishName: "Biryani", 
        rating: 4
    }
]

myCoding.forEach( (item) => {
    // console.log(item);
    // console.log(item.dishName);
    // console.log(item.rating);
})
