
let counter = 0;
while (counter < 10) {
    console.log(counter)
    counter += 1;
}

let counternew = 0;
for (let index = 0; index < 10; index++) {
    counternew += 1;
    if (counternew % 2 === 0) {
        continue;
    }
    console.log(counternew);
}

let multy = 7;
let multy2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = 0;
for (let index = 0; index < multy2.length; index++) {
    total = multy2[index];
    console.log(total * multy);
}


let numEnter = prompt("Enter a number greater than 100");
numEnter = parseInt(numEnter);

while (numEnter <= 100) {
    console.log("The number is less than 100. Try again");
    numEnter = prompt("Enter a number greater than 100");
    numEnter = parseInt(numEnter);
}

console.log("Valid number");


let cratNum = 0;
while (cratNum < 20) {
    cratNum += 1;
    if (cratNum % 3 === 0) {
        continue;
    }
    console.log(cratNum);
}