// Create a simple calculator using switch:

function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
                break;
            }
            else {
                return "Error: Division by zero is not allowed.";
                break;
            }
        case '%':
            if (num2 !== 0) {
                result = num1 % num2;
                break;
            }
            else {
                return "Error: Division by zero is not allowed.";
                break;
            }
        default:
            return "Error: Invalid operator. Please use +, -, *, /, or %.";
            break;

    }
    return result;
}

let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));
let operator = prompt("Enter an operator (+, -, *, /, %): ");
if (typeof num1 === "number" && !isNaN(num1) && typeof num2 === "number" && !isNaN(num2)) {
    let result = calculator(num1, num2, operator);
    alert("Result: " + result);
}
else {
    alert("Please enter valid numbers.");
}

