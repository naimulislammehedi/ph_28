console.log("Explore API"); 

const person = {
    name: "selim", 
    fruit: "dalim", 
    dish: "halim", 
    friends: ["alim", "kolim", "lamim"], 
    isRich: false, 
    money: 34000, 
}; 
console.log(person); 

// JSON -> JS object with notation 
// JSON.stringify
const personJSON = JSON.stringify(person); 
console.log(personJSON); 
console.log(typeof personJSON); 


const parseJSON = JSON.parse(personJSON); 
console.log(parseJSON); 