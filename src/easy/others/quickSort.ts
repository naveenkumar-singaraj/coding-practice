/*
QuickSort is a sorting algorithm based on the Divide and Conquer that picks an element as a pivot and partitions the given array around the picked pivot.
*/

function quickSort(arr: number[]): number[] {
    if(arr.length < 1) return arr;

    let pivot = arr[arr.length - 1];
    let left: number[] = [];
    let right: number[] = [];

    for(let i=0; i<arr.length - 1; i++) { // since we already assigned last el to pivot, skip last el in comparision
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([38, 27, 43, 3, 9, 82, 10]))