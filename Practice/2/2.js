// Write a program to check whether a number is even or odd.

function checkEvenOdd(num) {
    if (typeof num == "number" && !isNaN(num)) {
        if (num % 2 == 0) {
            console.log("The number is even.");
        }
        else {
            console.log("The number is odd.");
        }
    }
    else {
        console.log("Please enter a valid number.");
    }
}

number = parseFloat(prompt("Enter a number: "));
checkEvenOdd(number);