/*

Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

*/

function findMaxConsecutiveOnes(nums: number[]): number {
    // Hint: Do not use sliding window here since we only need to traverse the array once
    let max = 0;
    let count = 0;
    for(let i = 0; i<nums.length; i++) {
        count = nums[i] === 0 ? 0 : count + 1;
        max = Math.max(count, max)
    }
    return max
};