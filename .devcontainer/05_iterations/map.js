const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map((num) =>{return num+10})


//***************Chaining of Map*****************/
const newNums = myNumbers
                .map((num)=>num*10) //multiplying all numbers in myNumbers by 10
                .map((num)=>num+1) //*****values are passed on by the latest map(just above one)****/
                .filter((num)=>num>=40)
console.log(newNums);


