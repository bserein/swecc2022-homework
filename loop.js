// Pyramid problem:
function outputPyramid(rows, character) {
  let row = character;

  for (let i = 0; i < rows; i++) {
    console.log(row);
    row += character;
  }
}
outputPyramid(5, "#");

//     Extra for experts:
// 1. Write a function named assignGrade that takes one argument, a number score.
// Returns a grade for the score, either  "A," "B," "C," "D," or "F." Call that
// function for a few different scores and log the result to make sure it works.

let score = 89;
function assignGrade(score) {
  // console.log(score)
  switch (true) {
    case score >= 90:
      console.log("A");
      break;
    case score >= 80:
      console.log("B");
      break;
    case score >= 70:
      console.log("C");
      break;
    case score >= 60:
      console.log("D");
      break;
    case score <= 59:
      console.log("F");
      break;
    default:
      console.log(`That's not a good sign`);
  }
}
assignGrade(score);

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log("FizzBuzz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}
const n = 16;
fizzBuzz(n);

let num = 41;
function assignGrade(num) {
  if (num >= 90) {
    console.log("A");
  } else if (num >= 80) {
    console.log("B");
  } else if (num >= 70) {
    console.log("C");
  } else if (num >= 60) {
    console.log("D");
  } else if (num >= 0) {
    console.log("F");
  } else {
    console.log("Don't know what to say");
  }
}
assignGrade(num);

