// Sum of two number
function Sum(num1, num2) {
    return num1 + num2;
}

console.log(Sum(2, 5))
console.log(Sum(1, 8))

// Square of a number
function Square(num) {
    return num * num;
}

console.log(Square(5))
console.log(Square(6))

// Check voting eligibility
function isVotingEligible(age) {
    if (age > 18) {
        console.log("Eligible");
    } else if (age < 0) {
        console.log("Invalid age");
    } else {
        console.log("Not eligible");
    }
}

isVotingEligible(25);
isVotingEligible(12);
isVotingEligible(-5);

// Even or Odd number
function isEven(num) {
    if (num % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

isEven(66);
isEven(61);

// Print all even number in an array
function findEven(arr) {
    for (let num = 0; num < arr.length; num++) {
        if (arr[num] % 2 == 0) {
            console.log(arr[num]);
        }
    }
}

findEven([10, 3, 6, 7, 3, 12]);

// Count negating number in an array
function findNegative(arr) {
    for (let num = 0; num < arr.length; num++) {
        if (arr[num] < 0) {
            console.log(arr[num]);
        }
    }
}

findNegative([1, 3, -1, 4, -7]);

// Find smallest number in an array
function findSmallest(arr) {
    let smallest = Infinity;
    for (let num = 0; num < arr.length; num++) {
        if (arr[num] < smallest) {
            smallest = arr[num];
        }
    }
    console.log("smallest===>", smallest);
}

findSmallest([10, 3, 6, 7, 3, 12])

// Find largest Number in an array
function findLargest(arr) {
    let largest = -Infinity;
    for (let num = 0; num < arr.length; num++) {
        if (arr[num] > largest) {
            largest = arr[num];
        }
    }
    console.log("largest===>", largest);
}

findLargest([10, 3, 6, 7, 3, 12])

// FInd second largest number in array

function secondLargest(arr) {
    if (arr.lenght < 2) {
        console.log("Array length should be grater then 2")
    }
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for (let num = 0; num < arr.length; num++) {
        if (firstLargest < arr[num]) {
            secondLargest = firstLargest;
            firstLargest = arr[num];
        } else if (secondLargest < arr[num] && firstLargest != arr[num]) {
            secondLargest = arr[num];
        }
    }
    console.log("secondLargest==>", secondLargest);
}

secondLargest([10, 3, 12, 6, 7, 3, 12]);