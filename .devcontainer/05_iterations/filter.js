
//*****Unlike for each "filter" returns some values*****/

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) =>{
//     return num>4
// }

// )

// console.log(newNums)


            //      (or)        Alternative method

// const newNums = []

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// myNums.forEach(    (num) =>{
//     if(num>4){
//         newNums.push(num)
//     }
// }

// )

// console.log(newNums);


//*********FILTER EXCERCISE DONE BELOW TO UNDERSTAND IT BETTER*************//
//Taking an array of objects

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1982, edition: 2005},
    {title: 'Book Three', genre: 'History', publish: 1983, edition: 2006},
    {title: 'Book Four', genre: 'Fiction', publish: 1984, edition: 2007},
    {title: 'Book Five', genre: 'Science', publish: 1985, edition: 2008},
    {title: 'Book Six', genre: 'History', publish: 1986, edition: 2009}
];


let userBooks = books.filter((bk) => bk.genre === 'History')

userBooks = books.filter((bk) => {
    return bk.publish >= 1965 && bk.genre === "History" //writing return statement here because we're writing code inside scope
})

console.log(userBooks);

