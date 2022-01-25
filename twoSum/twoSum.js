const nums = [3, 1, 17, 20, 5, 4];
let target = 6;

let twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] + nums[i] == target) {
        console.log(nums[j] + "+" + nums[i] + "=" + target);
      }
    }
  }
};
twoSum(nums, target);
//continue going over why this works and study placement

const number = [3, 1, 17, 20, 5, 4];
let targets = 9;

let threeSum = function (number, targets) {
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let x = j + 1; x < number.length; x++) {
        if (number[j] + number[i] + number[x] == targets) {
          console.log(number[j] + "+" + number[i] + "+" + number[x] + "=" + targets);
        }
      }
    }
  }
};
threeSum(number, targets);
