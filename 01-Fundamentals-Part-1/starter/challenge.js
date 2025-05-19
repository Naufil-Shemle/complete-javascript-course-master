// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// const markWeight = 95;
// const markHeight = 1.88;
// const johnWeight = 85;
// const johnHeight = 1.76;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;
// const markHigherBMI = markBMI > johnBMI;

// console.log(markBMI, johnBMI, markHigherBMI);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
// } else {
//     console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`)
// }

/*
let scoreDolphins = (96+108+89)/3;
let scoreKoalas = (88+91+110)/3;

if(scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy");
}else if(scoreDolphins < scoreKoalas){
    console.log("Koalas win the trophy");
}else if(scoreDolphins === scoreKoalas){
    console.log("Both win the trophy");
}
*/

//! Challenge on Logical Operator:
/*
let scoreDolphins = (97+112+101)/3;
let scoreKoalas = (109+95+106)/3;
console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log("Dolphins win the trophy");
}else if(scoreDolphins < scoreKoalas && scoreKoalas >= 100){
    console.log("Koalas win the trophy");
}else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log("Both win the trophy");
}else{
    console.log("No one win the trophy :(");
}
*/

//! Challenge on String and Template Literals, Logical Operator, Conditional (Ternary) Operator

const bill = 40;
let tip = bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);