const marvel_heros = ["thor", "ironman", "captain america"]

const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //spread operator;
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[8,9]]];

const flatted_array = another_array.flat(Infinity); //apan depth number pan deu shakto
// console.log(flatted_array);


// console.log(Array.isArray("Saiesh"));
// console.log(Array.from("Saiesh"));
// console.log(Array.from({name: "saiesh"})) //object la array madhe convert karaycha asel tar from use karu shakto



let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.of(score1,score2,score3)); //array of method la multiple values dile ki te array madhe convert karun deto
