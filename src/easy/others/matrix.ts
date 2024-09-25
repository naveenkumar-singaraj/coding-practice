
function spiralOrder(matrix: number[][]): number[] {
    let result: number[] = [];
    if (matrix.length === 0) return result; // empty matrix
    // Rows: top to bottom
    let top = 0;
    let bottom = matrix.length -1;
    // Columns: left to right
    let left = 0;
    let right = matrix[0].length -1;

    //
    while (top <= bottom && left <= right) {
        // Traverse from left to right (top row).
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++

        // Traverse from top to bottom (right row).
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;
        if (top <= bottom) {
            // Traverse from right to left (bottom row).
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            // Traverse from bottom to top (left row).
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
}
// console.log(spiralOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]));

/*
Rhombus Shape Number Printer

    1
   1 2
  1 2 3
 1 2 3 4
1 2 3 4 5
 1 2 3 4
  1 2 3
   1 2
    1

*/

function rhombusShape(row: number) {

    // Upper half
    for(let i=1; i<=row; i++) {
        let print = ''
      for(let j=1; j<row-i; j++) {
        print += ' ';
      }
      for(let k = 1; k<=i; k++) {
        print += k + ' ';
      }
      console.log(print)  
    }

    // lower half
    for(let i=row; i>0; i--) {
        let print = ''
      for(let j=1; j<row-i; j++) {
        print += ' ';
      }
      for(let k = 1; k<=i; k++) {
        print += k + ' ';
      }
      console.log(print)  
    }
}

console.log(rhombusShape(5))