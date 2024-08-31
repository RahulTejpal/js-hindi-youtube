const accountId = 1443355 //this value can't be changed later
let accountEmail = "Rahul@google.com" //creating a variable
var accountPassword = "123456"  //creating a variable->suggested not to use 'var' because of issue in block scope 
accountCity = "Delhi" //creating variables -> not suitable
let accountState; //not decided what value will be in variable==> value = undefined


accountEmail = "Rahul@Uber.com"
accountPassword = "21212121"
accountCity = "God will decide"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) //printing all values in table format