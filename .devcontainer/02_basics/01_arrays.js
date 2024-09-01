const myArray = [1,2,3,4,5,6,"Hello"]

const myArr2 = new Array(1,2,3,4,5);

console.log(myArray[6]);

// myArray.push(6)
// myArray.pop()

// myArray.unshift(9) //adds 9 to the starting index of the array
// myArray.shift() //removes the element from starting index of the array

// console.log(myArray.includes(9)); //returns false-> array doesn't have value 9

// console.log(myArray.indexOf(9)); //returns -1 ->array doesn't have value 9

// const newArr = myArray.join() //returns a string joining all the elements of array using ,
// console.log(newArr+" || type of newArray: "+(typeof newArr));


// ************************************ IMP INTERVIEW QUESTION*********************************
//************************************* SLICE V/S SPLICE **************************************

const myn1 = myArray.slice(1,3) //starting from index 1 include 1 && 2 index -->don't include 3rd index
console.log("myn1 array SLICE opn: "+myn1);
console.log("myArray after slice opn : "+myArray);

const myn2 = myArray.splice(1,3) // CHANGES THE ORIGINAL ARRAY AND INCLUDING INDEX 3 EXTRACTS ALL THE ELEMENTS
console.log("myn2 after SPLICE opn : "+myn2);
console.log("myArray after splice opn : "+myArray)

 




