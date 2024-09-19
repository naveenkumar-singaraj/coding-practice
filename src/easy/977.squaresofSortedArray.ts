/*
977. Squares of a Sorted Array https://leetcode.com/problems/squares-of-a-sorted-array/
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

*/

function sortedSquares(nums: number[]): number[] {
    // // Brute force
    // for(let i=0; i<nums.length; i++) {
    //     nums[i] = nums[i] * nums[i];
    // }
    // return nums.sort((a, b) => a - b)

    // Optimized single line solution
    // We can leverage the fact that the array is sorted before squaring (even with negative numbers). When you square negative numbers, the result will be positive, but the largest squares will come from the absolute values of the smallest (most negative) and largest numbers.
    const result = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;
    let index = nums.length - 1;

    while (left <= right) {
        const leftSquare = nums[left] ** 2;
        const rightSquare = nums[right] ** 2;

        if (leftSquare > rightSquare) {
            result[index] = leftSquare;
            left++;
        } else {
            result[index] = rightSquare;
            right--;
        }

        index--;
    }

    return result;
};