//Given a sentence reverse order: "the sky is blue" -> "blue is sky the". 
let string = "the sky is blue"
const reverseWords = str => str.trim().split(/\s+/).reverse().join(' ')
console.log(reverseWords(string))

//2. You are given 2 arrays, one called list and one called cart. 
//Create a new version of the list where the items in the cart have been removed. 

 const list = ["bread", "eggs", "milk", "beer", "peanuts", "shampoo", "spinach"];
const cart = ["apples", "bananas", "bread", "peanuts", "milk"];

for (let i = 0; i < cart.length; i++){
    list.push(cart[i]);
}
console.log(list)

//3.  Write a function that given an array of numbers, find the largest number and console.log it

const arr = [1,3,8,9,19,24,52,65,4,7,100,25]

function highestNumber(array){
    let largest = " ";
for (let i= 0; i <= largest; i++){
    if (array[i] > largest) {
    largest = array[i];
    }
}
console.log(largest);
}
highestNumber(arr)
