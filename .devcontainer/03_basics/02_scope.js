
if(true){
    var a = 200; //********we don't use 'var' because this variable "a" can also be accessed outside this brackets which is wrong
}                // use  "let" instead of "var"   

console.log(a);


//******************************Function Hoisting*************************************/

console.log(addOne(5));

function addOne(num) {
    return num+1;
}

// console.log(addTwo(6)); //***********will give error if the function is defined like following,  */
//                         //***********but won't give error if we print after declaration */

const addTwo = function(num) {
    return num+2;
}

console.log(addTwo(6));

