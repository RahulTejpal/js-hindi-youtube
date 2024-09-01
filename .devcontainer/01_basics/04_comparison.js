// *****************basic comparison*****************

// console.log(2==2)
// console.log(2!=2)
// console.log(2>2)
// console.log(2<2)

//*****************comparing different data types where data types gets type converted*****************

console.log("2">1)
console.log("02">1) //still both the comparison gives "true" as "2" and "02" gets converted to numbers

//*****************unpredictable results*****************

console.log(null>0) //false
console.log(null==0) //false
console.log(null>=0) //true

//*****************strictly checking*****************

console.log("2"===1) //false 