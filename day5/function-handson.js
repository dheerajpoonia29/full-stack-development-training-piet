// function is a block of code designed to perform a particular task

// function functionName() {};
// function is a keyword
function greet() {
    // block of code
    console.log("Hello, my name is Dheeraj");
    console.log("I am learning JavaScript functions.");
    // block end here
}

// function call -> write name of function (greet) with parentheses ()
greet();

// function with parameters
function greetWithName(name) {
    // name is a parameter
    console.log("Hello, my name is " + name);
}
greetWithName("Dheeraj");

// function with multiple parameters
function greetWithFullName(firstName, lastName) {
    console.log("Hello, my full name is " + firstName + " " + lastName);
    console.log(`Hello, my full name is ${firstName} ${lastName}`);
}
greetWithFullName("Dheeraj", "Poonia");

// function with return value
function addNumbers(a, b) {
    return a + b;
}
let result = addNumbers(10, 20);
console.log("The sum is: " + result);

// sub function


