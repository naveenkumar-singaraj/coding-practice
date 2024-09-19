/*
118. Pascal's Triangle:  https://leetcode.com/problems/pascals-triangle/
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
*/

function generate(numRows: number): number[][] {
    let result: number[][] = [[1]];
    if(numRows === 0) return result;

    for(let i=1; result.length<numRows; i++) {
        let tempRow = [0, ...result[i-1], 0];
        let currRow = [];
        for(let j=1; j<tempRow.length; j++) {
            currRow.push(tempRow[j-1] + tempRow[j])
        }
        result.push(currRow)
    }

    return result;

};

console.log(generate(5))