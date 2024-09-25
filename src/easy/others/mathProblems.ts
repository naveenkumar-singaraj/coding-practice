
function isPrime(n: number) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false; // Exclude even numbers
    for (let i = 3; i < Math.sqrt(n); i = i + 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function findPrime(num: number[]) {
    let result: number[] = [];
    for (const n of num) {
        if (isPrime(n)) {
            result.push(n)
        }
    }
    return result;
}
// console.log(isPrime(4))
// console.log(findPrime([2, 3, 4, 5, 10, 11, 15, 17, 19, 20, 23, 25, 29, 30, 31]));

function binaryToDecimal(binaryStr: string): number {
    let decimal = 0;

    for (let i = 0; i < binaryStr.length; i++) {
        const currentBit = binaryStr[binaryStr.length - 1 - i];

        if (currentBit === '1') {
            decimal += Math.pow(2, i);
        }
    }
    return decimal;
}
// console.log(binaryToDecimal('1010'));

function decimalToBinary(input: number): string {
    if(input === 0) return '0'

    let binary = ''
    while(input>0) {
        binary = input % 2 + binary;
        input = Math.floor(input/2);
    }
    return (binary);
}

console.log(decimalToBinary(35));