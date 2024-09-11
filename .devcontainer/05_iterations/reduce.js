

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currVal: ${currval}`);
//     return acc+currval
// },0) //0 is the value of the accumulator    

// OR , it can also be written as:

const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'JSCourse',
        price: 2999
    },
    {
        itemName: 'py Course',
        price: 3999
    },
    {
        itemName: 'mobile dev course',
        price: 5999
    },
    {
        itemName: 'Data Science Course',
        price: 12999
    },
]

const shoppingCartPay = shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log("Shopping Cart Total Payment: ",shoppingCartPay);

