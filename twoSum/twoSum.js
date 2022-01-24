const nums = [9, 1,17,20,5, 4];
target = 6;

let twoSum = function(nums, target) {
    let total = 0;
    for (i=0 ;i < nums.length; i++){
        if(nums[i] + nums[i+1] == target) {
            console.log(nums[i] + "+" + nums[i+1] + "=" + target)
        } if (nums[0] + nums[i] == target){
            console.log(nums[0] + "+" + nums[i] + "=" + target)
        } 
    }

}
twoSum(nums, target)
