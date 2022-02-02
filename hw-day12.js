//Given a sentence reverse order: "the sky is blue" -> "blue is sky the". 
let string = "the sky is blue"
const reverseWords = str => str.trim().split(/\s+/).reverse().join(' ')
//trim is saying if there is space in the beginning or end trim it
//the center of split is the spaces or another way of saying space
//you use s.split(" ") so it would look like //["the","sky","is","blue"]
let arrs = string.split(" ")
let reverseArr = arrs.reverse()
let res = reverseArr.join(" ")
//console.log(reverseArray.join(" ")) couldve solved it this way to
//console.log(res) -> this also solves it as well
//console.log(...reverseArr)// you can do it this way finish with it this way
console.log(reverseWords(string))


//2. You are given 2 arrays, one called list and one called cart. 
//Create a new version of the list where the items in the cart have been removed. 

 const list = ["bread", "eggs", "milk", "beer", "peanuts", "shampoo", "spinach"];
const cart = ["apples", "bananas", "bread", "peanuts", "milk"];

for (let i = 0; i < cart.length; i++){
    list.push(cart[i]);
}
console.log(list)

const newShoppingList = list.filter((item) => !cart.includes(item));

console.log(newShoppingList)

// second solution 

let newList = []
for(let item of list) {
    if(!cart.includes(item)) {
        newList.push(item)
    }
}
console.log(newList)
//solve the problem with a method for this one^^^

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
