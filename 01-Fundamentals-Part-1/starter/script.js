// let js = "amazing";
// console.log(40 + 80 + 23 - 10);

// console.log("Naufil");
// console.log(23);

// let firstName = "Saud";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

//! Variable name conventions:

// let naufil_shemle = "NS";
// let $function = 27;

// let person = "naufil";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "Teacher";

// console.log(myFirstJob);

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Naufil');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

lastName = "Shemle";
console.log(lastName);
*/

/*
const now = 2037;
const ageNaufil = now - 1991;
const ageSara = now - 2018;
console.log(ageNaufil, ageSara);

console.log(ageNaufil * 2, ageNaufil / 10, 2 ** 3);
*/
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
/*
const firstName = "Naufil";
const lastName = "Shemle";
console.log(firstName + " " + lastName);
*/

//! Assignment Operators
/*
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++;
x--;
x--;
console.log(x);
*/
//! Comparison Operator
/*
console.log(ageNaufil > ageSara); // >, <, >=, <=
console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;

console.log(now - 1991 > now -2018);
*/

/*
const now = 2037;
const ageNaufil = now - 1991;
const ageSara = now - 2018;

console.log(now - 1991 > now -2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageNaufil + ageSara) / 2;
console.log(ageNaufil, ageSara, averageAge);
*/

/*
const firstName = "Naufil";
const job = "Programmer";
const birthYear = 1991;
const year = 2037;

const naufil = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(naufil);

const naufilNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(naufilNew);
*/

//! Strings, Template Literals and if/else statements

/*
const age = 15;
if (age >= 18) {
  console.log("Sara can start driving licens 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sara is too young, Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

//! Type Conversion:
/*
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear)+ 18);

console.log(Number('Naufil'));
console.log(typeof NaN);

console.log(String(23), 23);
*/
//! Type Coercion:
/*
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / 2);

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

//! Truthy and Falsy values:
/*
// 5 falsy values : 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Naufil'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
// const money = 100;
if(money){
  console.log("Don't spend it all ;)");
}else{
  console.log('You should get a job!');
}

let height;
// let height = 0;
// let height = 67;
if(height){
  console.log('YAY1 Height is defined');
}else{
  console.log('Height is UNDEFINED');
}
*/

//! Equality Operators: == and ===
/*
const age = "18";
if (age === 18) console.log("You just became an adult :D (Strict)");

if (age == 18) console.log("You just became an adult :D (Loose)");

const favourite = Number(prompt("What's is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // '23' == 23
  console.log(`Cool! ${favourite} is an amazing number!`);
} else if (favourite === 7) {
  console.log(`${favourite} is also a cool number`);
} else if (favourite === 9) {
  console.log(`${favourite} is also a cool number`);
} else {
  console.log("Number is not 23 or 7 or 9");
}

if(favourite !== 23) console.log('Why not 23?');
*/

//! Boolean Logic / Logical Operator AND OR NOT:
/*
const hasDrivingLicense = true; // A
const hasGoodVision = true; //B

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasDrivingLicense);

// if (hasDrivingLicense && hasGoodVision) {
//   console.log("Naufil is able to drive");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDrivingLicense && hasGoodVision && isTired );


if (hasDrivingLicense && hasGoodVision && !isTired) {
  console.log("Naufil is able to drive");
} else {
  console.log("Someone else should drive...");
}
*/

//! Switch Statement
/*
const day = "friday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Plan course structure");
    console.log("Go to conding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Prepare theory videos");
    break;
  default:
    console.log("Not a valid day!");
    break;
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to conding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Prepare theory videos");
} else {
  console.log("Not a valid day!");
}
*/

//! Statements and Expressions
/*
// Expressions

3 + 4
1991
ture && false && ! false

// Statement

if(23 > 10){
  const str = "23 id bigger";
}

const me = "Naufil";
console.log(`I'm ${2037 - 1991} years old ${me}`);
*/

//! Ternary Operator:

const age = 15;
age >= 18
  ? console.log("I like to drink Juice 🧃")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "Juice 🧃" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "Juice 🧃";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "Juice 🧃" : "water 💧"}`);
