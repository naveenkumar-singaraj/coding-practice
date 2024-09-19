/*
Find out the longest non-repeatable charcters sub-string from string: str = "sudbamdqual"
*/

function longestSubString(input: string): string {
    
    const len = input.length;
    if(len === 0 ) return '';
    if(len === 1 ) return input;

    // 2 pointers for sliding window
    let left = 0;
    let right = 1;
    let maxLength = 0;
    let longestString = ''
    // Use set to store unique characters
    const subStringSet = new Set();

    while(right < input.length) {
        
        // Remove elements till duplicate element is removed
        while(subStringSet.has(input[right])) {
            subStringSet.delete(input[left]); // remove left most character
            left++; // move left side window
        }
        subStringSet.add(input[right]);
        if(subStringSet.size>maxLength){
            maxLength=subStringSet.size;
            longestString = [...subStringSet.values()].join('');

        }
        right++
    }

    return longestString

}

console.log(longestSubString('sudbamdqual'))