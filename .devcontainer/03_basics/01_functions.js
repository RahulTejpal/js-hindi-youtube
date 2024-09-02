function demoFunc(){
    console.log("Hello Function");
    
}

// demoFunc //returns reference to the function, function is not executed yet 
demoFunc() //function executed here

// function addNos(number1, number2){ //function has no return type
//     console.log(number1+number2);
// }

// addNos(3,4);
// addNos(3,"a");
// addNos(3,null);

function addNos(n1,n2){
    return (n1+n2);
}

const result = addNos(5,6);  //**************if no arguments passed then it gives UNDEFINED*************/
console.log(result);



