//DOM learning
//All the below commands are supposed to be run in console.

// document.getElementById("title")
// // gives all elements having ID = "title"
// document.getElementById("title").id
// // document.getElementById("title").class;//Wont Work
// document.getElementById("title").className
// document.getElementById("title").getAttribute("class")
// document.getElementById("title").getAttribute("id")
// document.getElementById("title").setAttribute("class", "heading test1");


// document.getElementById("title").innerHTML = "Change done by targeting ID"
// document.getElementsByClassName("test1")[0].innerHTML = "Change done by targeting Class (ClassName)"

//if both the above syntanxes are used then the second onw will overwrite the first one.

// const title= document.getElementById("title");
// title.style.backgroundColor = "Red"
// const para = document.getElementById("para");
// para.style.backgroundColor = "Yellow"
// para.style.color = "Green"
// para.style.padding = "15px";
// para.style.borderRadius ="25px";

// title.innerText;
// title.textContent;
// title.innerHTML;
// document.querySelector("h1");
// document.querySelectorAll("h1");
// document.querySelector("#title");
// document.querySelector(".heading");
// const myTempLiList = document.querySelectorAll("li");
// myTempLiList; 
// const tmp = document.querySelectorAll("li");
// tmp[0].style.color = "green";
// const tmp1 = document.querySelectorAll("h1");
// console.log(tmp1);  //Node list
// tmp1[0].style.color = "green";
// tmp1.forEach(function(h1){
//     h1.style.backgroundColor = "Yellow";
// });

// document.getElementsByClassName("list-item");
// const tempClassList = document.getElementsByClassName("list-item");
// tempClassList; //HTML collection 
// tempClassList.forEach(function (li) {
//     console.log(li); //wont run because we can't access this loop like this.
// });
// Array.from(tempClassList);
// const fromArray = Array.from(tempClassList);
// fromArray.forEach(function (li) {
//     li.style.color = "Yellow";
// });

//NODE LIST la apan directly iterate karu shakto using forEach pan,
//  HTML Collection madhe map ani forEach jara veglya way ni access karayla lagta so 
// Syntax: Array.from(var_name); 
// Ashya syntax madhe use kartat.

// A bit of Manipulation of the Wikipedia page of JS(https://en.wikipedia.org/wiki/JavaScript)

// const allh3 = document.querySelectorAll(".mw-heading");
// allh3[0].innerText
// allh3.forEach(function (h) {
//     h.style.color = "Red";
// });
// allh3.forEach(function (h) {
//     h.style.color = "red";
//     h.style.backgroundColor = "black";
//     h.style.padding = "25px";
//     h.style.innerText = "Saiesh";
// });