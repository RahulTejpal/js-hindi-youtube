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


//////////// When we make SHOPPING CART then we don't know how many elements to add in cart, to keep the flow of the arguments in 
/////////// the function dynamic we using REST or SPREAD

function calculateCartPrice(...val1){
    return val1;
}

console.log(calculateCartPrice(100,200,300));

function calcCartPrice2(val1,val2,...val3){ 
    return val3
}

console.log(calcCartPrice2(100,200,300,400,500)); // val1 takes 100 , val2 takes 200 and the rest is taken by val3

////////////function handling objects///////////////////

const user = {
    name: "Rahul",
    age: 27
}

function handlingObjects(anyObject){
    console.log(`Hi, my name is ${anyObject.name} and my age is ${anyObject.age}`);
    
}

handlingObjects(user);
handlingObjects({
    name: "Sam",
    age: 20
})

