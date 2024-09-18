/*
20. Valid Parentheses: https://leetcode.com/problems/valid-parentheses/
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true


*/

function isValid(s: string): boolean {
    let check: string[] = [];

    if (')}]'.includes(s[0])) return false;

    for (const c of s) {
        if ('({['.includes(c)) {
            check.push(c);
            continue;
        }
        if (c === ')') {
            if (check[check.length - 1] !== '(') {
                return false;
            } else {
                check.pop();
                continue;
            }
        }
        if (c === '}') {
            if (check[check.length - 1] !== '{') {
                return false;
            } else {
                check.pop();
                continue;
            }
        }
        if (c === ']') {
            if (check[check.length - 1] !== '[') {
                return false;
            } else {
                check.pop();
                continue;
            }
        }

    }
    if (check.length !== 0) {
        return false
    }
    return true
};

// Using map but same complexity
function isValid2(s: string): boolean {
    const closeToOpen = new Map<string, string>([
        [')', '('],
        ['}', '{'],
        [']', "["]
    ]);

    let stack = [];
    for (const char of s) {
        // check incoming char is closing paranthesis
        if (closeToOpen.has(char)) {
            if (!isEmpty(stack) && stack[stack.length - 1] === closeToOpen.get(char)) {
                stack.pop();
            } else {
                // incoming character is closing paranthesis and stack is empty or not matching with paranthesis in stack
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return isEmpty(stack)
};

function isEmpty(arr: any[]): boolean {
    return arr.length === 0;
}
console.log(isValid('{[]}'))