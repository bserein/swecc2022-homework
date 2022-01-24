
function addUp(redBalls, greenBalls){
    const count = redBalls + greenBalls
    return count
}
let myBag = addUp(14, 15)
console.log(myBag)


function addTwoNumbers(num1, num2) {
    return num1 + num2
  } // Another way of writing the function, ask a question 
  let num3 = addTwoNumbers(13, 14)
  console.log(num3)

//another way of doing this function
function addition(a,b){
    return a + b
}
console.log('4+7=', addition(4,7))



  // COME BACK TO THESE TO SEE WHAT YOU CAN LEARN
  function hello(){
      return 'Hello world'
  } //When this function is called it will output Hello World

  // object definition
var author = {
    firstName: "Brian",
    lastName: "Serein",
    favoriteNumber: 2063,

    getFullName: function () {
        return this.firstName + " " + this.lastName; 
//They reside on the object, and when called directly have access to the object using the this keyword. 
//The this keyword can be used to reference the object and it’s properties.
    }
};

// call the getFullName method on the object
var fullName = author.getFullName();
// return value is "Brian Serein"
console.log(fullName)

