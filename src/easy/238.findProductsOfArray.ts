/*
238. Product of Array Except Self: 

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 
Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

*/

function findProductOfArray(input: number[]) {
    // let result = new Array(input.length-1);
    // // Brute force: nested for loop
    // for(let i=0; i<input.length; i++) {
    //     let product = 1;
    //     for(let j=0; j<input.length; j++) {
    //         if(i===j) { continue }
    //         product = product * input[j];
    //     }
    //     result[i] = product;
    // }
    // return result;

    /*
    Optimized: using Prefix and Suffix
    Prefix Product Array: Contains the product of all elements to the left of the current index.
    Suffix Product Array: Contains the product of all elements to the right of the current index.
    We can calculate suffix and result in single loop to save time

    Calculate prefix and suffix 2 step process:
    Assign current prefix and suffix in result array
    Calculate new prefix and suffix by multiplying with input array
    */

    let prefix = 1; // Start with 1 (the product of no elements).
    let suffix = 1; // Start with 1 (the product of no elements).
    let result = new Array(input.length);

    // Prefix calculation
    for(let i=0; i<input.length; i++) {
        result[i] = prefix;
        prefix = prefix*input[i];
    }
    console.log(result)

    // Suffix calculation & update results
    for(let i=input.length-1; i>=0; i--) {
        result[i] = suffix*result[i];
        suffix = suffix*input[i];
    }

    return result;
}

console.log(findProductOfArray([1, 2, 3, 4]))