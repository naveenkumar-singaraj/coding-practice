/*
Given two strings s and t, return true if t is an 
anagram
 of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true
*/

function isAnagram(s: string, t: string): boolean {
    // Brute force
    // return s.split('').sort().join('') === t.split('').sort().join('')

    // Optimized solution
    if (s.length !== t.length) return false
    const charMap = new Map<string, number>();

    // Add characters from s to map
    for (const c of s) {
        charMap.set(c, (charMap.get(c) || 0) + 1);
    }

    for (const c of t) {
        let value = charMap.get(c)
        // Char from t is missing in s
        if (value === undefined) return false;

        if (value! > 1) charMap.set(c, value - 1);

        if (value === 1) charMap.delete(c);
    }
    return charMap.size === 0;
};

console.log(isAnagram('anagram', 'nagaram'))