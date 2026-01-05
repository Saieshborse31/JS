// const tinderUser = new Object(); //singleton obj
const tinderUser = {}; //not a singleton obj

tinderUser.id = "123abc";
tinderUser.name = "Saiesh Borse";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Saiesh",
            lastname: "Borse"
        }
    }
};

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = {obj1, obj2}; 
// const obj3 = Object.assign({},obj1 , obj2);//{} he actually ek empty array ahe jya madhe obj1 ani obj2 cha data copy kela jato.

const obj3 = {...obj1, ...obj2};//spread operator

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 2,
        email: "q@gmail.com"
    },
    {
        id: 3,
        email: "x@gmail.com"
    }
]

users[1].email 
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));// he check karte ki he property tinderUser madhe ahe ki nahi.


//destrcucturing

const course = {
    coursename: "React JS",
    price: "999",
    courseInstructor: "Saiesh Borse"
}
// console.log(course.courseInstructor); //normal way

const {courseInstructor : instructor} = course; //destructuring way
// console.log(instructor);

const {coursename, price} = course;
// console.log(coursename);
// console.log(price);


// api kashya yetat means json format madhe
// {
//     "name": "Saiesh",
//     "coursename": "React JS",
//     "price": "free"
// }