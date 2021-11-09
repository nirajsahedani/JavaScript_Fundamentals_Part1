let country = "India";
let continent = "Asia";
let population = 138;

console.log(country);
console.log(continent);
console.log(population);

//data types
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//  let , const and var
language = "Hindi";
const city = "ahmedabad";
// city = "rajkot";

//Basic Operator

const halfPopulation = population / 2;
let india1 = halfPopulation;
let india2 = halfPopulation;

population++;
console.log(population);
const finland = 6;

console.log(population > finland);

const avgpopulation = 33;
console.log(avgpopulation > population);

let description =
  "Portugal is in Europe, and its 11 million people speak portuguese";

//Strings and Template Literals
description = `Portugal is in Europe, and its 11 million people speak portuguese`;

// if / else Statements
//population = 13;
if (population > 33) {
  console.log("Portugal's population is above average");
} else {
  console.log("Portugal's population is 22 million below average");
}

//Type Conversion and Coercion
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); //617
console.log("19" - "13" + 17); //23
console.log("123" < 57); //false
console.log(5 + 6 + "4" + 9 - 4 - 2); //1149-4-2=1143

/*
//Equality Operators: == vs. ===
let numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("numNeighbours' is 0 or any other value");
}
*/

//Logical Operators

//temporary data if needed
// country = "germany";
// language = "English";
// population = 36;
if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}

// switch Statement
switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd Place");
    break;
  case "Hindi":
    console.log("Your language is Hindi");
    break;
  case "Arabic":
    console.log("Number 5");
    break;
  default:
    console.log("Great language too");
}

//Ternary operator

console.log(
  `${country} population is ${population > 33 ? "above" : "below"} average`
);
