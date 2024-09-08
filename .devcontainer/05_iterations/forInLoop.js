const myObj = {
    js : 'JavaScript',
    cpp : 'C++',
    rb : 'ruby',
    swift : "swift by apple" 
}

//using forIn loops to iterate through objects

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

const programming = ["cpp","js","pyhton","java","rb"]

for (const key in programming) {
    // console.log(key);
    console.log(programming[key]);

    
}

//******Can't use forIn loops on Maps******//