const user = {
    usernname : "Rahul",
    price : 999,

    welcomeMsg : function() {
        console.log(`${this.usernname} , welcome to the website`);
        console.log(this); //tells us about the current context
        
        
    }
}

// user.welcomeMsg()
// user.usernname = "Sam"
// user.welcomeMsg()

console.log(this); //*****************till now we are in the node environment and here we are refering to an empty object
//***************But for browser the global most object is "Window" object(((((INTERVIEW QUESTION)))))*********************/


//**************** "this" only works inside the objects and not inside functions *********

// function chai(){
//     let usernname = "Rahul"
//     console.log(this.usernname);
    
// }

// chai() //*************output: "undefined" because "this is used inside function and not object" */
/////------------------------------------------------------
// const chai  = function(){
//     let usernname = "Rahul"
//     console.log(this.usernname);
    
// }

// chai() //undefined ==> same as the above example

//----------------------------------------------------------

// const chai = ()=>{  //ARROW FUNCTION
//     let usernname = "Rahul"
//     console.log(this.usernname);  //undefined
    
// }

// chai()

const chai = () =>{
    let usernname = "Rahul"
    console.log(this); //gives empty object
    
}

chai() //**** difference between normal and arrow function */

// const addTwo = (num1,num2) =>{
//     return num1+num2
// }

// const addTwo = (num1,num2) => num1+num2 //implicit declaration without "return" ->only one line inside declaration 

//********* while using '()' we dont need to write "return" statement but for using '{}' we will have to write "return" statement */
// const addTwo = (num1,num2) => (num1+num2) //

const addTwo = (num1,num2) =>({usernname:"Rahul"})
console.log(addTwo(3,4));
