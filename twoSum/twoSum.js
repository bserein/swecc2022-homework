const nums = [3, 1,17,20,5, 4];
target = 6;

let twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[j] + nums[i] == target){ 
                console.log(nums[j] + "+" + nums[i] + "=" + target)
            }
        }
    
    }

} 
twoSum(nums, target)
