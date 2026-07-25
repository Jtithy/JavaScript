//Write a program to check whether a number is positive, negative, or zero.

function checkNum(num) {
    if (typeof num === "number" && !isNaN(num)) {
        if (num < 0) {
            console.log("The number is negative.");
        }
        else if (num > 0) {
            console.log("The number is positive.");
        }
        else {
            console.log("The number is zero.");
        }
    }
    else {
        console.log("Please enter a valid number.");
    }
}


number = parseFloat(prompt("Enter a number: "));
checkNum(number);