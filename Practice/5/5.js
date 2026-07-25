// Check whether a given year is a leap year.

function isLeapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}

year = parseInt(prompt("Enter a year: "));
if (typeof year == "number" && !isNaN(year)) {
    let result = isLeapYear(year);
    if (result) {
        alert(year + " is a leap year.");
    } else {
        alert(year + " is not a leap year.");
    }
}
else {
    alert("Please enter a valid number.");
}