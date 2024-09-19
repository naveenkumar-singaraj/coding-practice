/*
496. Next Greater Element I: https://leetcode.com/problems/next-greater-element-i/
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

 

Example 1:

Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
Example 2:

Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.
*/

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    /*
    Brute force:  
    1. Store nums2 values and it's index in map
    2. Create result array with nums1 lenght and fill with -1
    3. For loop iterate throught result array
            get index from map and find the nex max value in while loop
            set output[i] = max; if no max is found, just move to next element

    const num2Map = new Map(); // store value and it's value
    // Since it is distinct array, no need to worry about same key values
    for (let i = 0; i < nums2.length; i++) {
        num2Map.set(nums2[i], i);
    }
    console.log(num2Map);
    let output = new Array(nums1.length).fill(-1)

    for (let i = 0; i < output.length; i++) {
        let index = num2Map.get(nums1[i]) + 1; // always return a value
        let max = -1;
        while (index < nums2.length) {
            if (nums1[i] < nums2[index]) {
                max = nums2[index];
                output[i]=(max);
                break;
            } else {
                index++;
            }
        }

    }
    return output;
    */
    /*
    Optimized Solution:
    [Hint]: Traverse from right to left and store values in stack, 
    every time new value comes ->  check if new value > stack top most value and decrease the stack
    update result map with stack top most value or -1 with current value
    1. Map to store result (nums2 value, greater value), stack to keep all the elements from right to left
    2. For loop for nums2 (right to left)
        2 a. while loop to remove all smaller elements from stack (when stack non empty and top most element is smaller compared to current nums2 value)
        2 b. Update result map with nums2 value and stack top most value or -1
        2 c. add current value to stack (which will be used for next value comparision)
    3. Finally, retrive all num1 values from map and return as array
    */


    const nextGreaterMap = new Map<number, number>();
    const stack: number[] = [];

    // Traverse nums2 from right to left
    for (let i = nums2.length - 1; i >= 0; i--) {
        const num = nums2[i];

        // Maintain a decreasing stack (remove all smaller elements)
        while (stack.length > 0 && stack[stack.length - 1] <= num) {
            stack.pop();
        }

        // If stack is not empty, the top element is the next greater element
        nextGreaterMap.set(num, stack.length > 0 ? stack[stack.length - 1] : -1);

        // Push the current number onto the stack
        stack.push(num);
    }

    // Build the result for nums1 using the precomputed map
    return nums1.map(num => nextGreaterMap.get(num)!);

};