//https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

var repeatedNTimes = function(nums) {
    let table = {}; 
    
    for (let i = 0; i < nums.length; i++){ †
        if (nums[i] in table) {
            table[nums[i]] += 1; 
        } else {
            table[nums[i]] = 0;
        }
    }
    
    let unique = nums.length/ 2 - 1; 
    
    for (const num in table) {
        if (table[num] === unique) {
            return num;
        }
    }
}