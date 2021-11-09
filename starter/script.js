/*
// Variable naming standard and example
let js = "amazing";

console.log(10 + 23 + 45 - 16);

let firstName = "Niraj";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = "programmer";
let myCurrentJob = "teacher";
console.log(myFirstJob);
*/

/*
// Data types typeof example

let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

console.log(typeof 2335);
console.log(typeof "stringex");

// Dynamic type example
javaScriptIsFun = "yes!";
console.log(typeof javaScriptIsFun);

// Undefined Example
let year;
console.log(year);
console.log(typeof year);

year = 1999;
console.log(typeof year);
*/

/*
// let,const,var

let age = 22;
age = 23; //reassign in let keyword is worked
// let age = 23;  //redeclare same varible is not allow in let

const birthYear = 1999;
// birthYear = 1998; //reassign in const keyword is not worked
// const job; // undefined variable is not allow in const

var job = "programmer";
job = "tester"; //reassign is worked
var job = "developer"; //redeclare is also worked
*/

/*
//math operators
const now = 2025;
const person1 = now - 1998;
const person2 = now - 1996;

console.log(person1, person2);

console.log(person1 * 4, person1 / 3);
console.log(2 ** 3);
//2**3 = 2 * 2 * 2 = 8

const firstName = "Niraj";
const lastName = "Sahedani";
console.log(firstName + " " + lastName);

//Assignment operator
let x = 10 + 5;
x += 25; //x = x + 25
x *= 10; //x = x * 10
x++; //x = x + 1
x--; //x = x - 1
console.log(x);

// Comparison operator
console.log(person1 > person2);
console.log(person1 >= 18);
console.log(person2 >= 18);
*/

/*
const now = 2025;
const person1 = now - 1998;
const person2 = now - 1996;

console.log(now - 1998 > now - 1996);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
const avergeAge = (person1 + person2) / 2;
console.log(person1, person2, avergeAge);
*/

/*
// Template Literals
const firstName = "Niraj";
const year = 2021;
const birthYear = 1999;
const job = "Developer";

const niraj =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(niraj);

const nirajNew = `I'm ${firstName} ,a ${year - birthYear} year old ${job}!`;
console.log(nirajNew);

console.log("string with\n\
multiple\n\
lines");

console.log(`string with
multiple
lines`);
*/

/*
// if-else statement
const age = 17;

if (age >= 18) {
  console.log("xyz can start driving License ");
} else {
  const yearsLeft = 18 - age;
  console.log(`xyz is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2002;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/*
//Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(inputYear + 18);

console.log(Number("Niraj"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
console.log("I am " + 23 + " year old");
console.log("23" - "10" - 3);
console.log("10" + "20" + 10);
console.log("22" / 11);
console.log(12 > "10");
*/

/*
// 5 Falsy values: 0 , '' , undefined , null , NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean({}));
console.log(Boolean("nnn"));

const money = 100;
if (money) {
  console.log("Don't Spend it all");
} else {
  console.log("You should get a job");
}

let height = 0;
if (height) {
  console.log("height is defined");
} else {
  console.log("height is undefined");
}
*/

/*
//Eqality Operator
const age = "18";
if (age === 18) console.log("you just became an adult (Strict)");
if (age == 18) console.log("you just became an adult (Loose)");

const favourite = Number(prompt("what is your favourite number"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("23 is good number");
} else if (favourite === 17) {
  console.log("17 is also good number");
} else if (favourite === 9) {
  console.log("9 is also good number");
} else {
  console.log("number is not 23 or 17 or 9");
}
*/

/*
//logical operator
const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision) {
//   console.log("I'm able to drive");
// } else {
//   console.log("I'm not able to drive");
// }

const isTired = false;

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("I'm able to drive");
} else {
  console.log("I'm not able to drive");
}
*/

/*
//Switch statement
const day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Plan course structure");
    break;
  case "Tuesday":
    console.log("Prepare theory videos");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Write Code Example");
    break;
  case "Friday":
    console.log("Record Videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy Weekend");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "Monday") {
  console.log("Plan course structure");
} else if (day === "Tuesday") {
  console.log("Prepare theory videos");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log("Write Code Example");
} else if (day === "Friday") {
  console.log("Record Videos");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoy Weekend");
} else {
  console.log("Not a valid day");
}
*/

//Ternary Operator

const age = 23;

const drink = age >= 18 ? "wine" : "water";

console.log(drink);

console.log(`I Like to drink ${age >= 18 ? " wine" : " water"}`);
