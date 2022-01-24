//Challenge #1
//Write a function to convert USD to another currency.
//Output a complete sentence like "95 USD is equivalent to ____"
let usd = 95;
function convertUsdtoYen($) {
  const yen = 113.67;
  $ *= yen;
  return $;
}
console.log(`95 USD is equivalent to ${convertUsdtoYen(usd)} yen`);

//Challenge #2
//Convert Celsius to Farenheit and output a complete sentence
const tempC = 8.5;
function convertCtoF(C) {
  return C * 1.8 + 32;

}
console.log(
  "8.5 Celsius is equivalent to " + convertCtoF(tempC) + " " + "Farenheit"
);

//Challenge #3
//Write a function to calculate and return the total tips and then out the total
const tips = [5, 8, 13, 2, 14, 27, 9, 18];
function addUpTotal(arry) {
  let sumTotal = 0;
  for (i = 0; i < arry.length; i++) {
    sumTotal += arry[i];
  }
  console.log(sumTotal);
}
addUpTotal(tips);

//Challenge #4
//Write a function to add up the even numbers and output the total
const arr1 = [5, 8, 7, 12, 13, 17, 22];
function addUpEven(array) {
  let total = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      total += array[i];
    }
  }
  console.log(total);
}
addUpEven(arr1);

const arr = [5, 8, 7, 12, 13, 17, 22]

function filterJustEvens(arr) {
  let newArr = []
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) { // check if element is even
      newArr.push(arr[i]) // put it in new array
    }
  }
  return newArr
}

console.log(filterJustEvens(arr))