
function missingNumber(numbers: number[]): number[] {
    let missingNumbers: number[] = [];
    numbers.sort((n1, n2) => n1 - n2);
    let pointer = 0;
    const start = numbers[0];
    const end = numbers[numbers.length - 1];
    for (let i = start; i <= end; i++) {
        // If the current number matches the pointer number in the array
        if (i === numbers[pointer]) {
            pointer++;  // Move to the next number in the array
        } else {
            missingNumbers.push(i);  // If missing, add to result array
        }
    }
    return missingNumbers;
}

// console.log(missingNumber([-5,-2,-1,0,1,3,7]))

// Given an array, subtract a number M from every odd index and N from every even index.
function replaceOddEvenIndex(input: number[], m: number, n: number): number[] {
    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            input[i] = n;
        } else {
            input[i] = m;
        }
    }
    return input;
}
// console.log(replaceOddEvenIndex([10, 20, 30, 40, 50], 5, 3));

// From a series of numbers, locate the groups of numbers whose sum equals N.

function sumOfNumbersInArray(input: number[], target: number) {
    // let left = 0;
    // let right = 1;
    // let results: number[][] = []

    // while(right<input.length) {
    //   let sum = input[left];
    //   while(right<input.length && sum < target) {
    //     sum  = sum + input[right];
    //     right++;
    //   }
    //   console.log(sum)
    //   if(sum === target) {
    //     results.push(input.slice(left,right));
    //   }
    //   left++;
    //   right = left + 1;
    //   console.log(`End of loop, new left: ${left} and right: ${right}`)
    // }

    // return results;

    let results: number[][] = [];
    let sum = 0;
    let left = 0;

    for (let right = 0; right < input.length; right++) {
        // Add the current element to the sum
        sum += input[right];

        // Shrink the window if the sum exceeds the target
        while (sum > target && left < right) {
            sum -= input[left];
            left++;
        }

        // If the sum equals the target, store the result
        if (sum === target) {
            results.push(input.slice(left, right + 1));  // right + 1 to include right index
        }
    }

    return results;

}
// console.log(sumOfNumbersInArray([1, 2, 3, 4, 5, 6],9));

// console.log(sumOfNumbersInArray([1, -1, 2, 3, -2, 4], 3));

// Find the sum of digits in a number.

function sumOfDigits(num: number): number {
    let sum = 0;
    while (num > 0) {
        let lastDigit = num % 10;
        sum += lastDigit;
        num = Math.floor(num / 10);
    }
    return sum;
}
// console.log(sumOfDigits(1));

// Given an array of N random two-digit numbers, multiply each number with M and print the last 2 digits of each product. 

function twoDigitArray(input: number[], m: number): number[] {
    for (let i = 0; i < input.length; i++) {
        input[i] = (input[i] * m) % 100;
    }
    return input
}
// console.log(twoDigitArray([34, 56, 78], 25));

// Leaders in array: Write a program to print all the Leaders in the array. An element is a Leader if it is greater than all the elements to its right side.
// Note: The rightmost element is always a leader.
// Input: arr[] = {16, 17, 4, 3, 5, 2} -> Output: 17 5 2

function leadersInArray(input: number[]): number[] {
    let result = [];
    let max = input[input.length - 1];
    result.push(max);
    // Loop in reverse order
    for (let i = input.length - 2; i >= 0; i--) {
        let curr = input[i];
        if (curr > max) {
            max = curr;
            result.push(max);
        }
    }
    return result;
}
// console.log(leadersInArray([16, 17, 4, 3, 5, 2]));


function secondLargest(num: number[]): number | null {
    if (num.length <= 1) return null;
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let n of num) {
        if (n > largest) { // current value greater than both largest and second
            secondLargest = largest; // update secondlargest
            largest = n;
        } else if (n > secondLargest && n !== largest) {// current value greater than second but not largest value
            secondLargest = n;
        }
    }
    return secondLargest !== -Infinity ? secondLargest : null
}
// console.log(secondLargest([4, 7, 2, 8, 3, 7]));

// find a pair of numbers in an array such that their product is the maximum possible.
// HINT: find the two largest numbers, and then the two smallest numbers (in case of negative numbers) to determine the maximum product. 
// NOTE: it cannot be +max * -max since it yeilds negative number
function maximumProductPair(num: number[]) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let min1 = Infinity;
    let min2 = Infinity;

    for (let n of num) {
        if (n > max1) {
            max2 = max1;
            max1 = n;
        } else if (n > max2) { // to not include duplicates && n!==max1
            max2 = n;
        }
        if (n < min1) {
            min2 = min2;
            min1 = n;
        } else if (n < min2) { // to not include duplicates && n!==min1
            min2 = n;
        }
    }
    const product1 = max1 * max2;
    const product2 = min1 * min2;
    return product1 > product2 ? product1 : product2;
}
// console.log(maximumProductPair([1, 20, 3, 10, 4, 5, -10, -20]))


// Write a program that takes a list of integers and a list of pairs of indices as input. The program should swap the elements at the given indices for each pair. Provide an example to illustrate the functionality.
function swapIntegers(list: number[], pairs: number[][]) {
    for (let i = 0; i < pairs.length; i++) {
        let currentPair = pairs[i];
        let temp = list[currentPair[0]];
        list[currentPair[0]] = list[currentPair[1]];
        list[currentPair[1]] = temp;
    }
    return list;
}
// console.log(swapIntegers([10, 20, 30, 40, 50], [[0, 1], [2, 3]]));

// Find the Product of the Three Greatest Numbers in an Array
// Given an array, locate the three greatest numbers and print their product.
function productOf3GreatestNumbers(input: number[]): number | null {
    let product: number | null = null;
    if (input.length < 2) return null; // contains less than 2 numbers
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let thirdLargest = -Infinity;
    for (let n of input) {
        if (n > largest) {
            thirdLargest = secondLargest;
            secondLargest = largest;
            largest = n;
        } else if (n > secondLargest) { // &&  n!== largest for avoid duplicate
            thirdLargest = secondLargest;
            secondLargest = n;
        } else if (n > thirdLargest) { // && n!== largest &&  n!== secondLargest
            thirdLargest = n
        }
    }
    product = largest * secondLargest * thirdLargest;
    return product;
}
// console.log(productOf3GreatestNumbers([4, 7, 2, 8, 3, 7]));

// Given a number, find the nearest palindrome.
// example 123, output: 121
function nearestPalindrome(num: number): number {
    if (num < 10) return -1;
    if (isPalindrome(num)) {
        return num;
    }
    let increment = num;
    let decrement = num;

    while (true) {
        increment++;
        decrement--;
        if (isPalindrome(increment)) {
            return increment;
        }

        if (isPalindrome(decrement)) {
            return decrement;
        }
    }

}

function isPalindrome(input: number) {
    return input.toString().split('').reverse().join('') === input.toString();
}
// console.log(isPalindrome(121))
// console.log(nearestPalindrome(123));

// Grouping Positive, Zero, and Negative Numbers
// Given a list of integers, write a function to group all positive numbers, zeros, and negative numbers together without using any additional data structures like sets or collections. Maintain the original relative order of elements within the same group. For example, if the input list is [4, -1, 0, 3, -2, 0, 1], the output should be [4, 3, 1, 0, 0, -1, -2].

function groupIntegers(num: number[]): number[] {
    return num.sort((a, b) => a-b)
}
console.log(groupIntegers([4, -1, 0, 3, -2, 0, 1]))