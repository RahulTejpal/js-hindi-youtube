const coding = ["js","py","rb","cpp","java"]

// coding.forEach(function (val){
//     console.log(val);
    
// })

//----------------------------------------------

// coding.forEach( (item)=>{
//     console.log(item);
    
// })

//----------------------------------------------

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe) //just give the reference of the function, no need to execute the function like "printMe()"

//----------------------------------------------

// coding.forEach( (item,index,arr) =>{
//     console.log(item,index,arr);
    
// }

// )

//----------------------------------------------
//****************Iterating through array of objects*********************//

const myCoding = [
    {languageName: 'javascript',
        languageFileName: 'js'
    },
    {languageName: 'java',
        languageFileName: 'java'
    },
    {languageName: 'pyhton',
        languageFileName: 'py'
    },
    {languageName: 'C++',
        languageFileName: 'cpp'
    },
    {languageName: 'ruby',
        languageFileName: 'rb'
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})