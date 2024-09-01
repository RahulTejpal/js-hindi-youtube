//(1)primitive datatypes :: call by value

//7 types -> String, Number, Boolean, null,  undefined, Symbol, BigInt


//***************** using 'Symbol Data Type' *****************

const id = Symbol('123') //although we're passing the same value inside but Symbol makes the value unique
const anotherId = Symbol('123')  //and will return different values as Symbol makes values unique
console.log(id===anotherId)

//***************** using 'BigInt' *****************

const bigNumber = 123445657678999876n

//(2)reference or non-primitive :: call by reference

//Array , Objects, Functions

//Array: 
const heros = ["Shaktiman", "Naagraj", "Doga"]

//Objects: 
const myObj = {
    name: "Rahul",
    age: 22
}

//Function:
const myFunction = function(){
    console.log("Hello World");
    
}

//***************** all return types of reference data types are objects *****************
console.table([typeof heros, typeof myObj, typeof myFunction]) //object, object , function(or) function object


//JavaScript---> Dynamically Typed language , i.e, we dont need to define type of variable while declaring it
//eg: let sampleString = "abc"


