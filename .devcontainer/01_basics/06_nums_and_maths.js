const score = 500
console.log(score);

const balance = new Number(600)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.89898989
console.log(otherNumber.toPrecision(4)); //  o/p = 123.9

const localString = 10000000
console.log(localString.toLocaleString('en-IN'));

//+++++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

console.log(Math.random()) // gives value between 0 and 1

// ******************************* Formula to get Random Values between min and max Range *************************************
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min) //adding 1 to avoid the case of getting 0

