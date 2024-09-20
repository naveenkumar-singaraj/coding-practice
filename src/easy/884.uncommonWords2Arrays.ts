/*
884. Uncommon Words from Two Sentences: https://leetcode.com/problems/uncommon-words-from-two-sentences/
A sentence is a string of single-space separated words where each word consists only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

 

Example 1:

Input: s1 = "this apple is sweet", s2 = "this apple is sour"

Output: ["sweet","sour"]

Explanation:

The word "sweet" appears only in s1, while the word "sour" appears only in s2.

Example 2:

Input: s1 = "apple apple", s2 = "banana"

Output: ["banana"]
*/

function uncommonFromSentences(s1: string, s2: string): string[] {
    // Hint: Hint: Looks similar to intersection of 2 arrays but not, if we do same steps in opposite condition, it will return missing word from one array not both.
    // So, we should concat both strings and map all words with count in Map(word, count)
    // concat both strings
    const words: string[] = (s1 + ' ' + s2).split(' ');
    const wordMap = new Map<string, number>();
    // store all words with their count
    for(const word of words) {
        wordMap.set(word, (wordMap.get(word)|| 0) + 1)
    }
    // return words with count is 1
    return Array.from(wordMap.keys()).filter(word => wordMap.get(word) === 1)
};