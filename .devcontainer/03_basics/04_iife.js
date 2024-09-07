//Immidiately Invoked Function Expressions (IIFE)

//*****************used to get rid of the pollution caused by the variables in global scope */
//******Here we can create a scope inside the function and then if we immidiately execute the function then we can avoid the 
      //the values of the global variables  */

// example: if we have a file whose role is just to connect to db as soon as we start the application we can write it as following:      

// (function chai(){
//     console.log(`DB CONNECTED`);
    
// })() //first '()' defines the scope of function and second '()' tells to execute the function immidiately

////******* VERY VERY IMPORTANT******************////
//IIFE doesn't know where to stop the context therefore we have to put ';' at the end of it so that we can execute the next IIFE

(function chai(){                   //************NAMED IIFE
    console.log(`DB CONNECTED`);
    
})();

((name) =>{
    console.log(`Hello ${name}`);   //************UNNAMED IIFE
    
})("Rahul")
