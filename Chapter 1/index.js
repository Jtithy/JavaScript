//1. Ways to print in JavaScript
//console.log(" Hello ");
//alert(" me ");
//document.write(" This is document write");

//2. JavaScript console API
console.log("Hi!");
console.warn("A warning");
console.error("An error");

//3. JavaScript variables
var num1 = 30;
var num2 = 55;
console.log(num1 - num2);

//4. Datatypes
// Numbers-Premitive
var num1 = 30;
var num2 = 55;

// Strings-Premitive
var str1 = "A string";
var str2 = "Another string";

// Objects-Reference/Non-Premitive
var marks = {
    Ravi: 34,
    Shubbham: 46,
    Ruhi: 33
}
console.log(marks);

// Boolean-Premitive
var a = true;
var b = false;

// Undefined-Premitive
var und = undefined;

// Null-Premitive
var n = null;

// Array-Reference/Non-Premitive
var arr = [1, 2, "String", 4, 5];
console.log(arr);

//5. Operators
var a = 34;
var b = 45;
console.log("The value of a + b is: ", a + b);
console.log("The value of a - b is: ", a - b);
console.log("The value of a * b is: ", a * b);
console.log("The value of a / b is: ", a / b);

// Assignment Operators
var c = b;
console.log(c);
c += 5;
console.log(c);
c -= 15;
console.log(c);

// Comparison Operatos
var x = 324;
var y = 34;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x != y);
console.log(x > y);
console.log(x < y);

// Logical Operators
//AND
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
//OR
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
//NOT
console.log(!true);
console.log(!false);


//6. Function
//DRY = Do not repeat yourself
function avg(a, b) {
    return (a + b) / 2;
}
c = avg(5, 7);
console.log(c);

//7. Conditionals
//Single if statement
var age = 10;
if (age > 18) {
    console.log("You can vote");
}
else {
    console.log("You cannot vote");
}

//if-else ladder
var age = 10;
if (age < 5) {
    console.log("You are a kid");
}
else if (age < 18) {
    console.log("Your are a teenager");
}
else if (age < 40) {
    console.log("Your are an adult");
}
else {
    console.log("You are a senior citizen");
}

//8. Loops
//For loop
var arr1 = [1, 2, 3, 4];

for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

//For Each loop
arr1.forEach(function (element) {
    console.log(element);
});

// //While loop
var arr2 = ["q", "w", "e", "r"];
let j = 0;
while (j < arr2.length) {
    console.log(arr2[j]);
    j++;
}

//Do While loop
do {
    console.log(arr2[j]);
    j++;
} while (j < arr2.length);

//Break-Continue
var ab = [3, 4, 5];
for (var i = 0; i < ab.length; i++) {
    if (i == 4) {
        continue;
    }
    console.log(ab[i]);
}

for (var i = 0; i < ab.length; i++) {
    if (i == 4) {
        break;
    }
    console.log(ab[i]);
}

//9. Array Methods
let myArr = ["Fan", 34, null, true];
console.log(myArr);
console.log(myArr.length);
myArr.pop();
console.log(myArr);
myArr.push("Camera");
console.log(myArr);
myArr.shift();
console.log(myArr);
myArr.unshift("Hello");
console.log(myArr);
myArr.sort();
console.log(myArr);
myArr.reverse();
console.log(myArr);

//10. String Method
let myString = "Hello World";
//Length
console.log(myString.length);
//Find
console.log(myString.indexOf("Harry"));
console.log(myString.lastIndexOf("o"));
//Slice
console.log(myString.slice(1, 4));
//Replace
console.log(myString.replace("World", "Prorammer"));

//11. Date and Time
let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());

//12. DOM Manipulation(Document Object Model)
let elem = document.getElementById("click");
console.log(elem);

let elemClass = document.getElementsByClassName("container");
console.log(elemClass);
elemClass[0].style.background = "Yellow";

//13. Events
firstContainer.addEventListener('click', function () {
    console.log("Clicked");
});
//mouseover, mouseout, mousedown, mouseup, keydown, keyup, load etc.

//14. Arrow Function
/*function sumNum(a, b) {
    return a + b;
}*/
sumNum = (a, b) => {
    return a + b;
}

//15. setTime and setInterval
log = () => {
    console.log("Your log");
}
setTimeout(log, 1000);
// clr = setInterval(log, 2000);
// clearInterval(clr); or clearTimeout(clr);

//16. Local Storage
localStorage.setItem('name', 'Tithy');
console.log(localStorage.getItem('name'));
//localStorage.removeItem('name');
//localStorage.clear();

//17. JSON- JavaScript Object Notation
obj = { name: "Tithy", length: 1, a: { this: "that" } }
jso = JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);
parsed = JSON.parse(jso);
console.log(parsed);

//18. Tamplate Literals
