//forin loop 
// for in loop mainly objects sathi use kele jatat.
// ha object iterate karayla use karu shakto tyacha ni kaam khup sopa hota ani ha fakta object specific nahi ahe hyala apan khup veglya kaman sathi pan use karu shakto (will see in mirai).

const myObject = {
    js: 'javascript',
    css: 'cascading style sheets',
    cpp: 'C++',
    rb: 'Ruby'
}

for (const key1 in myObject) {
    //ek ekach uncomment kara 
    // console.log(key1); // key1 prints hotay fakta
    // console.log("---------");
    // console.log(myObject[key1]); //key1 chi value print karnar
    // console.log("---------");
    // console.log(`${key1} is shortcut for ${myObject[key1]}`);   
}

const programming = ["css", "js", "ruby", "c++", "c"]

for (const key2 in programming) {
    // console.log(key2); //index store kartay
    // console.log(programming[key2]); //ata proper values print karnar
}

const map = new Map();
map.set('IN',"India");
map.set('UK',"United Kingdom");
map.set('JP',"Japan");
map.set('IN',"India");

// console.log(map);
for (const key in map) {
    // console.log(key); //Not iterable
}
