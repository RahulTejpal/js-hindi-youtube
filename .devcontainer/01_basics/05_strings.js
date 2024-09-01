const name = "Rahul"
const repoCount = 50

// console.log(name+" "+repoCount+"Value")  -->> bad practice to write like this

// ***************** String Interpolation *****************

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`)

//Another way of declaring a string

const gameNaME = new String(`Rahul`) //returns an object

console.log(gameNaME)
console.log(gameNaME.__proto__)
console.log(gameNaME.toUpperCase())
console.log(gameNaME.charAt(2))
console.log(gameNaME.indexOf('u'))

const newString = gameNaME.substring(0,2) //4 not included
console.log("New String: "+newString);

const anotherString = gameNaME.slice(-4,3) //-4 represents counting from reverse
console.log("Another String: "+anotherString);

const newStringOne = "    Rahul    "
console.log("New String One: "+newStringOne);
console.log("New String One Trimmed: "+newStringOne.trim());

const url = "https://RahulTejpal.com/rahul%20tejpal"
console.log(url.replace('%20','-'))





