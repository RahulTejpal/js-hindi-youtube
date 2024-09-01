const marvel_heros = ["thor","ironMan","hulk"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros) //creates array within array--> at 3rd index of marvel_heros dec_heros array is present

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros,...dc_heros] //similar to concat
// console.log(all_new_heros);

// const another_array = [1,2,3,4,5,[6,7],8,[1,2,[4,5]]]
// const another_usable_array = another_array.flat(Infinity);
// console.log(another_usable_array);

console.log(Array.isArray("Rahul")); //returns false as "Rahul" is not an array
console.log(Array.from("Rahul")); //converts this string to array of chars
console.log(Array.from({name: "Rahul"})); //************IMPORTANT************: returns an empty arr coz we didn't mention what's the key


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));







