/**************************************************************************************/
/*************************************QUESTION********************************************/
/***************************************************************************************
/*

896. Monotonic Array
Easy
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j].  An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Return true if and only if the given array nums is monotonic.

Example 1:

Input: nums = [1,2,2,3]
Output: true
Example 2:

Input: nums = [6,5,4,4]
Output: true
Example 3:

Input: nums = [1,3,2]
Output: false
Example 4:

Input: nums = [1,2,4,5]
Output: true
Example 5:

Input: nums = [1,1,1]
Output: true
*/
/* testcase 
[1,3,2] --> 88. false 
[5,4,3,1] -> 346. true
[6,5,4,4] --> 351. true
[2,2,2,1,4,5] -> 356. false
/*************************************************************************************/
/************************************ANSWER********************************************/
/*********************************************************************************/

//my correct answer 
var isMonotonic = function(nums) {
    let inc = false; dec=false, ln=nums.length;
    for(let i = 0; i<ln; i++){
    if(nums[i]===nums[i+1] || i===ln-1) continue;
    else if(nums[i]>nums[i+1]) dec=true;
    else inc=true;
    };
   return !(inc && dec)
};
 isMonotonic( [2,2,2,1,4,5]);

