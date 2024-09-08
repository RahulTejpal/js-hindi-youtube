//Nullish Coalescing operator (??)

let val1;

// val1 = 5??10
// val1 = null??10
// val1 = undefined??10
val1 = null??10??20

console.log(val1);


//Terniary operator
const icedTeaPrice = 100
icedTeaPrice<=80 ? console.log("Less than 80") : console.log("More than 80");
;
