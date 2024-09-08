//loops for arrays

//******for-of loop */

const greetings = "Hello world"
for (const greet of greetings) {
    console.log(`Each char is: ${greet}`);
    
}

//Maps

const map = new Map()
map.set('IN','INDIA')
map.set('USA','United States of America')
map.set('Fr','France')

// console.log(map);

for (const [mapKey,mapValue] of map) {
    console.log(mapKey,':-',mapValue);
    
}

//***********forOf loop can't be used to iterate through objects***************//