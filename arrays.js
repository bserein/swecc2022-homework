// Question 1. Create a function that returns the number of true values there are in an array.
// const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]

const testArray = [
  true,
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  false,
];
let counts = 0;
// testArray.forEach((x) => {
//   counts[x] = (counts[x] || 0) + 1; // another way to do the same function
// });
// console.log(counts)
function countTrues(testArray) {
  for (let i = 0; i < testArray.length; i++) {
    if (testArray[i]) {
      // you could search for true this way because it was a boolean and dont need to put === true because
      counts++; // it's already looking for it, unless its any other variable or in " " then you have to put the ===
    } // it works because you are looking for it to be true, but since it is a boolean we are looking for we don't have to put anything
  }
  return counts;
}
console.log(`We found ${countTrues(testArray)} trues`);

// Question 2. Write a function that receives a car object as an argument and outputs the car's make and model.
let carType = {
  make: "Porsche",
  model: 911,
  interior: "Leather",
  condition: "New",
  color: "Yellow",
  year: 2021,
};
function myCar(carType) {
  console.log(carType.make, carType.model);
}
myCar(carType);

// 3. Write a function to get the first element in an array
const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Strawberry",
  "Blueberry",
];

function myFruits(fruits) {
  console.log(fruits[0]); //Another way of doing the function
}
myFruits(fruits);

function myFruits(fruits) {
  return fruits[0];
}
console.log(myFruits(fruits));

// Extra coding

// let arr = [1,4,6,9,2,11,12]
// function findOdds(array) {
//     for(i=0; i < array.length; i++){
//         if(array[i] % 2 != 0){
//             console.log(array[i])
//         }
//     }
// }
// findOdds(arr) // tells you which numbers are odd

// function findOdds(array) {
//     let counter = 0
//     for(i=0; i < array.length; i++){  // for loop iterates throughout the entire array
//         if(array[i] % 2 != 0){  // to calculate whether the number is odd
//             counter++ // goes up everytime there is an odd
//         }
//     }
//     return counter
// }
// console.log(findOdds(arr)) // tells you how many numbers are odd

// let arr = [1,4,6,9,2,11,12]
// function findEven(array) {
//     //let counter = 0
//     for(i=0; i < array.length; i++){
//         if(array[i] % 2 == 0){
//             console.log(array[i])
//         }
//     }
// }
// findEven(arr) // tells you which numbers are even

// let arr = [1,4,6,9,2,11,12]
// function findEven(array) {
//     let counter = 0
//     for(i=0; i < array.length; i++){
//         if(array[i] % 2 == 0){
//             counter++
//         }
//     }
//     return counter
// }
// console.log(findEven(arr)) // tells you how many numbers are even

// let arr = [1, 4, 6, 9, 2, 11]; //this is the correct answer among all of them
// function findOdds(array) {
//   const newArr = [];
//   for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 != 0) {
//       newArr.push(array[i]);
//     }
//   }
//   return newArr;
// }
// console.log(findOdds(arr)); // tells you which numbers are odd in a different array

// let arr = [1, 4, 6, 9, 2, 11]; //this is the correct answer among all of them
// function findEven(array) {
//   const newArr = [];
//   for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//       newArr.push(array[i]);
//     }
//   }
//   return newArr;
// }
// console.log(findEven(arr)); // tells you which numbers are even in a different array

// let arr = [1, 4, 6, 9, 2, 11];
// function findEven(array) {
//    return arr.map(x => x % 2 == 0)
// }
// console.log(findEven(arr)); // tells you which numbers are even in a different array stating the even as true and odd false

// let arr = [1, 4, 6, 9, 2, 11];
// function findEven(array) {
//    return arr.map(x => x % 2 != 0)
// }
// console.log(findEven(arr)); // tells you which numbers are odd in a different array stating the odd as true and even false

function outputPyramid(rows, character) {

let row = character

for( let i = 0; i < rows; i++) {
    console.log(row)
    row += character
}

}
outputPyramid(5, "$")



