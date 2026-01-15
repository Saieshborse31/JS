const coding = ["js","cpp","c","html","python","java"]

const values = coding.forEach((item)=>{
    // console.log(item);
    return item; //will return undefine because 'for-each loop' kahich return nahi karat.
    //tya mula apan jara veglya methods pan try karto.
});

// console.log(values); 


const myNums = [1,2,3,4,5,6,7]

//filter operation pan 'for each loop' sarkha call back functionch gheto.
//filter madhe mainly apan boolean values madhe kinva condition madhe deal karto


//IN SHORT JAR SCOPE OPEN KELA TAR return KEYWORD USE KARAYLA LAGNAR ELSE EKA LINE MADHE LIHILA TARI CHALEL.
//Method 1

const newNums = myNums.filter( (num) => (num > 4)); //normal way
//normal callback function sarkha lihaycha asta pan hya madhe ji condition aste tich value return hote ani ti value return karun ghyayla aplyala ashyach kontya tari ekhadya var madhe stor karayla lagte.

// console.log(newNums);

//Method 2
 const newNums1 = myNums.filter( (num) => {
    // num > 4; // curly bracket madhe jar fakta evdhach lihila tar he properly run nahi honar(REFER ARROWS VDO /workspaces/JS/03_basics/03_arrow.js) 
    return  num > 4; // curly braces madhe run karun ghyaycha asel tar aplyala return keyword use karaylach lagto.
 });

//  console.log(newNums1); 

//Method 3
const newNums2 = []

myNums.forEach((num) => {
    if (num > 4) {
        newNums2.push(num)
    }
})

// console.log(newNums2);


//Example
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 }
];
//Find genre "History"
//Method 1
const userBooks = books.filter( (bk) => {
    if (bk.genre === "History") {
        // console.log(bk);
    }
    // console.log(bk);
})

//Method 2
const userBooks1 = books.filter( (bk) => bk.genre ==="History");

// console.log(userBooks1);


//Find books published after the year 1995 and genre "History"
//Method 1
const userBooks2 = books.filter( (bk) => (bk.publish >= 1995 && bk.genre==="History"));
// console.log(userBooks2);

//Method 2
const userBooks3 = books.filter( (bk) => {return bk.publish >= 1995 && bk.genre==="History"} ); //just because me ithe scope open kelay mhanun mala ithr return keyword use karayla lagtoy.
// console.log(userBooks3);