/*
1. Two Sum: https://leetcode.com/problems/two-sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/

function twoSum(nums: number[], target: number): number[] {
    const sumMap = new Map();
    for(let i=0; i<nums.length; i++) {
        // Calculate difference
        const difference = target - nums[i];
        if(sumMap.has(difference)) {
            return [i, sumMap.get(difference)]
        } else  {
            sumMap.set(nums[i], i)
        }
    }
    return []
};

console.log(twoSum([2,7,11,15], 9));