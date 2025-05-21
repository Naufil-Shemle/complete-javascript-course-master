"use strict";
//! Activating Strict Mode:
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can Drive :D");
*/

//! Functions:
/*
function logger() {
  console.log("My name is Naufil");
}

// Calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

//! Function Declarations:

// function calcAge1(birthYear){
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(2003);

//! Function Expressions:

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }
// const age2 = calcAge2(2003);
// console.log(age1, age2);

//! Arrow Function:
/*
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2003);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) =>{
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`
}

console.log(yearUntilRetirement(2003, "Naufil"));
console.log(yearUntilRetirement(1980, "Sam"));
*/

//! Functions Calling another functions:
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

//! Reviewing Functions:
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }

  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(1991, "Naufil"));
console.log(yearUntilRetirement(1970, "Mike"));
*/

//! Introduction to Arrays
/*
const friend1 = "Max";
const friend2 = "Sam";
const friend3 = "Jack";

const friends = ["Max", "Sam", "Jack"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Naufil";
console.log(friends);

// friends = ["Bob", "Alice"];

const firstName = "Naufil";
const naufil = [
  firstName,
  "Shemle",
  2037 - 1991,
  "Software Developer",
  friends,
];
console.log(naufil);
console.log(naufil.length);

// Exercise

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

//! Basic Array Operations (Methods)
/*
// Add elements
const friends = ["Max", "Sam", "Jack"];
const newLength = friends.push("Alex"); // Storing to see the returnd value of the push method which new array length.
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements

friends.pop(); // Last
const poppedElement = friends.pop();
console.log(friends);
console.log(poppedElement);

friends.shift(); //First
console.log(friends);

friends.push(23);
console.log(friends.indexOf("Sam"));
console.log(friends.indexOf("23"));

console.log(friends.includes("Sam"));
console.log(friends.includes("Bob"));
*/

//! Objects
//! Dot vs. Bracket Notation
/*
const naufil = {
  firstName: "Naufil",
  lastName: "Shemle",
  age: 2037 - 2003,
  job: "SDE",
  friends: ["Sam", "Jack", "Max"],
};

console.log(naufil);

console.log(naufil.lastName);
console.log(naufil["lastName"]);

const nameKey = "Name";
console.log(naufil["first" + nameKey]);
console.log(naufil["last" + nameKey]);

// console.log(naufil."last" + nameKey); // Error

const interestedIn = prompt(
  "What do you want to about Naufil? Choose between firstName, lastName, age, job, and friends"
);

if (naufil[interestedIn]) {
  console.log(naufil[interestedIn]);
} else {
  console.log(
    "Wrong reqeust! Choose between firstName, lastName, age, job, and friends"
  );
}

naufil.location = "Kalyan";
naufil["instagram"] = "@naufil_shemle";

console.log(naufil);

//Challenge
//"Naufil has 3 friends, and his best friend is called Sam"
console.log(
  `${naufil.firstName} has ${naufil.friends.length} friends, and his best friend is called ${naufil.friends[0]}`
);
*/

//! Object Methods
/*
const naufil = {
  firstName: "Naufil",
  lastName: "Shemle",
  birthYear: 2003,
  job: "SDE",
  friends: ["Sam", "Jack", "Max"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(naufil.calcAge());

console.log(naufil.age);
console.log(naufil.age);
console.log(naufil.age);

console.log(naufil.getSummary());
*/

//! Iteration: The for Loop
// for loop keeps running while condition is TRUE

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}


//! Looping Arrays, Breaking and Continuing

const naufil = [
  "Naufil",
  "Shemle",
  2037 - 2003,
  "SDE",
  ["Sam", "Jack", "Max"],
  true,
];
const types = [];
// console.log(naufil[0]);
// console.log(naufil[1]);
// ...
// console.log(naufil[4]);
// naufil[5] does not exist

for (let i = 0; i < naufil.length; i++) {
  // Reading from naufil array
  console.log(naufil[i], typeof naufil[i]);

  // Filling types array
  // types[i] = typeof naufil[i];

  types.push(typeof naufil[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log("---ONLY STRINGS---");

for (let i = 0; i < naufil.length; i++) {
  if (typeof naufil[i] !== "string") continue;

  console.log(naufil[i], typeof naufil[i]);
}

console.log("---BREAK WITH NUMBER---");

for (let i = 0; i < naufil.length; i++) {
  if (typeof naufil[i] === "number") break;

  console.log(naufil[i], typeof naufil[i]);
}


//! Looping Backwards and Loops in Loops

// const naufil = ["Naufil", "Shemle", 2037 - 2003, "SDE", ["Sam", "Jack", "Max"]];

for (let i = naufil.length - 1; i >= 0; i--) {
  console.log(i, naufil[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------Starting Exercise ${exercise}------`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}


//! while Loop:

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
