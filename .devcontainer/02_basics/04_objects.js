//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);


const regularUser = {
    email : "some@gmail.com",
    fullName: {
        userFullName:{
            firstName: "Rahul",
            lastName: "Tejpal"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);

//

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "a", 6: "b"};

// const obj4 = Object.assign({},obj1,obj2,obj3) //here {} is the destination and obj1,obj2 and obj3 are the sources
const obj4 = {...obj1,...obj2,...obj3} //spread opn -> does the similar tasking as done in assign()
console.log(obj4);

//
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


//********** whenever we fetch values from DB they come in form of array of objects*************/
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "r@gmail.com"
    },
    {
        id: 3,
        email: "abc@gmail.com"
    }
]

console.log(users[2].email);

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //checks if this property is present in this object or not (TRUE/FALSE)





