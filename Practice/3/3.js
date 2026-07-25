// Take a user's age as input and check whether they are eligible to vote.

function checkVotingEligibility(age) {
    if (typeof age == "number" && !isNaN(age)) {
        if (age >= 18) {
            console.log("You're eligible to vote.");
        }
        else if (age >= 0) {
            console.log("You aren't eligible to vote.");
        }
        else {
            console.log("Age can't be negative.");
        }
    }
    else {
        console.log("Enter a valid age.");
    }
}

age = parseFloat(prompt("Entre your age: "));
checkVotingEligibility(age);