/*
Merge Sort: Merge Sort is a divide-and-conquer algorithm that recursively splits an array into two halves, 
sorts each half, and then merges the sorted halves to produce a fully sorted array.

mergeSort Function: This function recursively splits the array into smaller halves.
merge Function: It merges two sorted arrays back into a single sorted array.
The base case for recursion is when the array length is 1 or less, meaning it's already sorted.
*/

function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) { // this is exit condition
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
    let l = 0;
    let r = 0;
    const result: number[] = [];

    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            result.push(left[l]);
            l++;
        }
        if (left[l] > right[r]) {
            result.push(right[r]);
            r++;
        }
    }

    return [...result, ...left.slice(l), ...right.slice(r)]
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]))