/*
5. Longest Palindromic Substring: https://leetcode.com/problems/longest-palindromic-substring/
Given a string s, return the longest 
palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"

*/

/*
HINT: We cannot use sliding window here. Instead, we can use expand-around-center approach
pick one element, consider as center and expand till the end to find if it is palindrome or not
move the pointer throughout the array

Tricky part palindrome may be odd or even sized.
ODD: aba => starts with b, expand to a and a
EVEN: abba => starts with 2 letters bb, expand to a and a
*/

function longestPalindrome(input: string) {
    if(input.length === 0) return '';
    if(input.length === 1) return input;
    // start and end always points to longest palindrom length so far
    let start = 0;
    let end = 0;

    for(let i=0; i<input.length; i++) {
        // Odd length
        let oddLength = findLength(input, i, i);
        // Even length
        let evenLength = findLength(input, i, i+1);

        // calculate current palindrome length
        let currPalLength = Math.max(oddLength, evenLength);
        // if current palindrome length is greater than longest palindrom, update 
        if(currPalLength > (end - start)) {
            start = i - Math.floor((currPalLength-1)/2 )
            end = i + Math.floor(currPalLength/2)
        }
    }
    // return longest substring
    return input.substring(start, end + 1);

}

function findLength(s: string, left: number, right: number) {
    while(left>=0 && right<s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}

console.log(longestPalindrome('cbbd'))