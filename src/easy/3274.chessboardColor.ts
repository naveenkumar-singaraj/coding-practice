/*
3274. Check if Two Chessboard Squares Have the Same Color

You are given two strings, coordinate1 and coordinate2, representing the coordinates of a square on an 8 x 8 chessboard.


Return true if these two squares have the same color and false otherwise.

The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first (indicating its column), and the number second (indicating its row).

 

Example 1:

Input: coordinate1 = "a1", coordinate2 = "c3"

Output: true

Explanation:

Both squares are black.

Example 2:

Input: coordinate1 = "a1", coordinate2 = "h3"

Output: false

Explanation:

Square "a1" is black and "h3" is white.
*/

// HINT: Create key value pair for a - h (1 to 8)
function checkTwoChessboards(coordinate1: string, coordinate2: string): boolean {
    return findColor(coordinate1) === findColor(coordinate2);
};

enum Color {
    Black,
    White
}

function findColor(coordinate: string): Color {
    const chess = new Map([
        ['a', 1],
        ['b', 2],
        ['c', 3],
        ['d', 4],
        ['e', 5],
        ['f', 6],
        ['g', 7],
        ['h', 8],
    ]);
   const value = chess.get(coordinate[0])! + Number(coordinate[1]);
   return value % 2 === 0 ? Color.Black : Color.White;
}