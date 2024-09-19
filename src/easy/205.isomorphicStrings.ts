/*
205. Isomorphic Strings: https://leetcode.com/problems/isomorphic-strings

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"

Output: true

Explanation:

The strings s and t can be made identical by:

Mapping 'e' to 'a'.
Mapping 'g' to 'd'.
Example 2:

Input: s = "foo", t = "bar"

Output: false

Explanation:

The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

Example 3:

Input: s = "paper", t = "title"

Output: true
*/

function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const sTotMap = new Map<string, string>();
    const tTosMap = new Map<string, string>();

    for (let i = 0; i < s.length; i++) {
        console.log(sTotMap)
        console.log(tTosMap)

        if (
            sTotMap.has(s[i]) && sTotMap.get(s[i]) !== t[i] ||
            tTosMap.has(t[i]) && tTosMap.get(t[i]) !== s[i]
        ) {
            return false;
        } 

        if(!sTotMap.has(s[i])) sTotMap.set(s[i], t[i]);
        if(!tTosMap.has(t[i])) tTosMap.set(t[i], s[i]);
    }
    return true;
};

console.log(isIsomorphic('badc', 'baba'))