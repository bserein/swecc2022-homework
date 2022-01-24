const country = "United States";
const continent = "North America";
const population = 329_500_000;

console.log(
  `I live in the ${country}, which is in ${continent}, and it has ${population} people.`
);
console.log("stats", {country, continent, population})

/*
Set the value of 3  variables to different parts of a sentence and concatenate them to create one complete 
sentence with proper spacing. Write a function that takes in the number of two pointers and three pointers 
your basketball team made and calculates the total points scored. Console log the total points scored when 
your team scores 25 2's and 15 3's, 20 2's and and 20 3's.
*/

let gamingStation = "Xbox"
const firstName = "Brian"
let age = 24

console.log("My name is " + firstName + ", I am approximately " + age + " and I prefer the PS5 over the " + `${gamingStation}.`)

const team = 'Miami Heat'
const team1 = 'Dallas Mavericks'

function totalPoints(twos, threes) { //you can have the same variable of totalPoints 
    const points = ((twos * 2) + (threes * 3))
    return points
}
let miamiHeat = totalPoints(25, 15)
console.log(miamiHeat) 

let dallasMavericks = totalPoints(20, 20) // don't need to put the same function again and you can use the function again
console.log(dallasMavericks) 

console.log(`What a game betweeen the ${team} and the ${team1} with the Heat losing ${miamiHeat} to ${dallasMavericks}!`)

console.log("Final Score", {team, miamiHeat, team1, dallasMavericks})


function nextAge(theAge){
return theAge + 1
}
let myAge = 46
myAge = nextAge(myAge)
console.log(myAge)
