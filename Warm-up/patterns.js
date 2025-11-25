// Star patterns
// * * * *
// * * * *
// * * * *
// * * * *
let n = 4
for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j < n; j++) {
        row = row + "*" + " "
    }
    console.log(row);
}

console.log("=======================================");

// *
// * *
// * * *
// * * * *
for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j <= i; j++) {
        row = row + "*" + " "
    }
    console.log(row);
}

console.log("=======================================");

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
n = 6;
for (let i = 1; i < n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        row = row + j + " "
    }
    console.log(row);
}

console.log("=======================================");

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
for (let i = 1; i < n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        row = row + i + " "
    }
    console.log(row);
}

console.log("=======================================");

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
for (let i = 1; i < n; i++) {
    let row = " ";
    for (let j = 1; j <= n - i; j++) {
        row = row + j + " "
    }
    console.log(row);
}

console.log("=======================================");

// * * * * *
// * * * *
// * * *
// * *
// *
for (let i = 1; i < n; i++) {
    let row = " ";
    for (let j = 1; j <= n - i; j++) {
        row = row + "*" + " "
    }
    console.log(row);
}

console.log("=======================================");

//         *
//       * *
//     * * *
//   * * * *
// * * * * *
for (let i = 1; i < n; i++) {
    let row = " ";
    for (let j = 1; j < n - i; j++) {
        row = row + " "
    }
    for (let k = 0; k < i; k++) {
        row = row + "*"
    }
    console.log(row);
}

console.log("=======================================");

// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1

for (let i = 1; i < n; i++) {
    let row = " ";
    let key = 1;
    for (let j = 1; j <= i; j++) {
        row = row + key + " "
        if (key == 1) {
            key = 0;
        } else key = 1;
    }
    console.log(row);
}

console.log("=======================================");

// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1


let key = 1;
for (let i = 1; i < n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        row = row + key + " "
        if (key == 1) {
            key = 0;
        } else key = 1;
    }
    console.log(row);
}
