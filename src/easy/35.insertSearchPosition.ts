/*
35. Search Insert Position: https://leetcode.com/problems/search-insert-position/
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
*/

function searchInsert(nums: number[], target: number): number {
    // Hint: Log(n) so binary search
    let start = 0;
    let end  = nums.length - 1;

    while(start <= end) {
        let mid = Math.floor((end+start)/2)
        if(nums[mid] === target) {
            return mid
        } else if(nums[mid]<target) {
            start = mid + 1;
        } else {
            end = mid + 1
        }
    }
    /*
    Below line gets executed when start > end
    If the target is smaller than all elements, start will end up at 0, indicating the target should be inserted at the beginning.
    If the target is larger than all elements, start will end up at nums.length, indicating it should be inserted at the end.
    If the target should be inserted somewhere in the middle, start will point to the first element that is greater than the target. This is the correct insertion index.
    */
    return start;
};

console.log(searchInsert([1,3,5,6], 7))