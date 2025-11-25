// Write a function that return count the number of digit in a number
function countDigit(num) {
    if (num == 0) return 1;
    num = Math.abs(num)
    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}

console.log("Number of digit==>", countDigit(-452));