// Find the Number of Occurrences of Each Character in a String
function findNumberOfOccurences(input: string) {
    const charMap = new Map<string, number>();
    for(const c of input) {
        charMap.set(c, (charMap.get(c)! || 0) + 1);
    }
    return charMap.entries();
}
// console.log(findNumberOfOccurences('aaabbbcccccddddd'))

function reverseEachWord(input: string): string {
    return input.split(' ')
        // Split each word into characters and reverse it, join it
        .map(word => word.split('').reverse().join(''))
        // Join the words back into a string with spaces in between
        .join(' ');
}

// const output = reverseEachWord('Have a good day');
// console.log(output)


function findDuplicateChars(input: string): string[] {

    const dupChars = new Set();
    const seen = new Set();
    for (const char of input) {
        if(seen.has(char)) {
            dupChars.add(char);
        }
    }
    const duplicateChars: string[] = [];
    // map, character as key and number of occurense as value
    const charCount = new Map<string, number>();

    for (const char of input) {
        // skip space
        if (char === ' ') continue;
        // get character count from map, or set count as 0 if it is not in the map
        const count = charCount.get(char) || 0;
        // increment the count
        charCount.set(char, count + 1);

        // If the character appears exactly twice, add to duplicates array
        if (count === 1) {
            duplicateChars.push(char);
        }
    }
    return duplicateChars;
}

// console.log(findDuplicateChars('Programming language'));

function anagram(input1: string, input2: string): boolean {
    if (input1.length !== input2.length) return false
    return input1.split('').sort().join('') === input2.split('').sort().join('');
}
// console.log(anagram('malar', 'alarm'));

function groupAnagrams(words: string[]): string[][] {
    const wordMap = new Map<string, string[]>();

    for(const word of words) {
        let sortedWord = word.split('').sort().join('');
        let currentSet = wordMap.get(sortedWord) || [];
        currentSet.push(word)
        wordMap.set(sortedWord, currentSet)
    }
    return [...wordMap.values()]
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

function removeDuplicateChars(input: string): string {
    const duplicateChars = [];
    // map, character as key and number of occurense as value
    const charCount = new Map<string, number>();

    for (const char of input) {
        // skip space
        if (char === ' ') continue;
        // get character count from map, or set count as 0 if it is not in the map
        const count = charCount.get(char) || 0;
        // increment the count
        charCount.set(char, count + 1);

        // If the character appears for the first time (unique), add to string array
        if (count === 0) {
            duplicateChars.push(char);
        }
    }
    return duplicateChars.join('');
}
// console.log(removeDuplicateChars('Programming language'));


function findVowels(input: string): string[] {
    const vowels = 'aeiouAEIOU';
    const foundVowels: string[] = [];
    // Loop through each character in the string
    for (const char of input) {
        if (vowels.includes(char)) {
            foundVowels.push(char); // Add vowel to the result array
        }
    }
    return foundVowels;
    /*
         ----------    OR -------------
    let vowels: string[] = [];
    for(const char of input) {
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
        char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
          vowels.push(char);
      }
    }
    return vowels;
    */
}
// console.log(findVowels('Programming language'))


function removeNumbersFromString(input: string): string {
    let output: string[] = [];
    for (const char of input) {
        if (isNaN(Number(char))) {
            output.push(char);
        }
    }
    return output.join('')
}
// console.log(removeNumbersFromString('Hel90ks$#4 na94l'))


// Count the number of Characters in given string

function charCount(s: string) {
    // without space
    let count = 0
    if (s.includes(' ')) {
        for (let c of s) {
            if (c !== ' ') {
                count++;
            }
        }
        return count;
    }

    // with space
    return s.length;
}
// console.log(charCount('Hello world'))


function findUnionOfString(s1: string, s2: string): string {
    return [...new Set((s1 + s2).split(''))].join('');
}
// console.log(findUnionOfString('abcd', 'bdef'));
