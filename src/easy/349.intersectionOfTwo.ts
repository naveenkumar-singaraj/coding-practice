/*
349. Intersection of Two Arrays: https://leetcode.com/problems/intersection-of-two-arrays/
Given two integer arrays nums1 and nums2, return an array of their 
intersection
. Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
*/

function intersection(nums1: number[], nums2: number[]): number[] {
    /*
    // Brute force
    let result = new Set<number>();
    for(let i = 0; i<nums2.length; i++) {
        for(let j = 0; j<nums1.length; j++) {
            if(nums1[j]===nums2[i] && !result.has(nums1[j])) {
                result.add(nums1[j])
            }
        }
    }
    return [...result.values()];
    */
    // Convert nums1 to a set for quick lookup
    const set1 = new Set(nums1);
    
    // Use a set to store the intersection result (to avoid duplicates)
    const resultSet = new Set<number>();

    // Check if elements of nums2 are in set1
    for (let num of nums2) {
        if (set1.has(num)) {
            resultSet.add(num); // Add to resultSet if there's a match
        }
    }

    // Convert the resultSet to an array and return
    return [...resultSet];
};
