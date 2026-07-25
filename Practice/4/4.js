// Write a program to find the largest of three numbers.

function largest(a, b, c) {
    if (typeof a == 'number' && typeof b == 'number' && typeof c == 'number') {
        return Math.max(a, b, c);
    }
    else {
        return "Please enter valid numbers";
    }
}

a = parseFloat(prompt("Enter first number: "));
b = parseFloat(prompt("Enter second number: "));
c = parseFloat(prompt("Enter third number: "));

let result = largest(a, b, c);
alert("The largest number is: " + result);