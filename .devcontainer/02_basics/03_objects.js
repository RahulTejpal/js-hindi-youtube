//Objects can be defined in 2 ways: 
//(1) using constructor and (2) using literals

//CONSTRUCTORS: creates ****Singleton objects****
//created like : Object.create

//(2)creating objects using literals:

const mySym = Symbol("Key 1")

const JsUser = {
    name: "Rahul", //automatically considers the key name as string
    "Full Name" : "Rahul Tejpal",
    [mySym] : "myKey1", //cannt declare like mySym: otherwise this symbol will act like string
    age: 27,
    location: "Delhi",
    email: "RahulTejpal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
}

console.log(JsUser.email); //bad way to access elements of objects
console.log(JsUser["email"]); //correct way to access elements of objects
console.log(JsUser["Full Name"]); //*****Cannot acces like: JsUser.Full Name */
console.log(JsUser[mySym]); //this is the only way to access symbol

//freeze objects: After using "freeze" of time values won't override the given element
JsUser.email = "RahulTejpal@chatGPT.com"
Object.freeze(JsUser)
JsUser.email = "RahulTejpal@microsoft.com"
console.log(JsUser["email"]);

//using functions
JsUser.greetings = function () {
    console.log("Hello JS User");
    
}

JsUser.greetingsTwo = function () {
    console.log(`Hello how are you ${this.name}`);
    
}

console.log(JsUser.greetings());
console.log(JsUser.greetings); //******function is not executed, only reference to the function is obtained******

console.log(JsUser.greetingsTwo());


 

