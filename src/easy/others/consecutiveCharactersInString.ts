
// Write a code to convert a string such as aaabbccdaa to a3b2c2d1a2.
// Convert String to Run-Length Encoding
function convertString(input: string) {
    let currChar = '';
    let currCharCount = 0;
    let result: string[] = [];
    for (const s of input) {
        if (currChar === s) {
            currCharCount = currCharCount + 1;
        } else {
            if (currChar !== '') {
                result.push(currChar + currCharCount);
            }
            currChar = s; // Update to the new character
            currCharCount = 1; // Reset count for the new character
        }
    }
    // Push the last character and its count
    if (currChar) {
        result.push(currChar + currCharCount);
    }
    return result.join('')
}
// console.log(convertString('aaabbccdaa'))


// Remove Consecutive Repeated Characters from String - https://prepare.sh/interview/66734e7e58021b040cf60ffa
// Given a string, remove the consecutively repeated characters. For example - aabbbcabcbb to cabc.

function removeConsecutivelyRepeatedChars(input: string): string {
    let result: string[] = [];
    let lastChar: string = '';
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== lastChar) {
            result.push(input[i]);
        } else if (input[i - 1] === input[i] && result[result.length - 1] === input[i]) {
            // remove from result array
            result.pop();
        }
        lastChar = input[i];
    }
    return result.join('');
}
// console.log(removeConsecutivelyRepeatedChars('aabbbcabcbb'));

/*
Removing Subsequent Duplicate Characters from a String
Given a string in a character array, write a function in Java to remove subsequent duplicate characters until we get a unique set of characters.

Example:

Input: apple
Expected Output: ale
Input: appapple
Expected Output: le
The input will be in the form of a character array.
*/
function removeSubsequentChars(input: string) {
    let result: string[] = [];
    let prevChar = ''
    for (const c of input) {
        if (prevChar !== c && result[result.length - 1] !== c) {
            // if previous char is not c & last stored char is not c, add the char to result
            result.push(c); 
        } else if(result[result.length - 1] === c) {
            // if previous char is not c but last stored char is c, remove the last stored char from result
            result.pop();
        }
        prevChar = c;
    }
    return result.join('');
}
console.log(removeSubsequentChars('apple'));
