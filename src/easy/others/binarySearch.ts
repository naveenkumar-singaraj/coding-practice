/*
Binary search is a search algorithm that finds an item in a sorted list by repeatedly dividing the list in half until the item is found or the list is empty.

Pre-Condition: Array is already sorted
*/

function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor(arr.length / 2)

    while (left <= right) {
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1
}

console.log(binarySearch([3, 9, 10, 27, 38, 43, 82], 27))