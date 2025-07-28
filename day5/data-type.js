// string
let name = "Dheeraj";
console.log(name);

// let is keyword for variable declaration
// let variableName = value

// number
let age = 26;
console.log(age);
console.log("my age is " + age);
console.log("my age is ", age);

// float
let height = 5.9;
console.log(height);
// in c, printf("%f", height);

// javascript dynamic type langauge (we don't define type of variable/data)
// c, c++, java static type language (we define type of variable/data))
// int age = 36; string name = "dheeraj"; float height = 5.9;
// in js, we just use let keyword to take any type of date value


// boolean
let isMarried = false;
console.log(isMarried);

// is js case sensitive?
let a = 10; // a in smaller case variable
let A = 20; // A in capital case variable
console.log(a, A); // 10 20
// js is case sensitive language

// undefined
let x;
console.log(x);

// null
let y = null;
console.log(y);

// object date type
// let objectName = { key: value, key2: value2 }
// key is string, value can be any data type
// object is form of dictionary in js
let person = {
    "name": "Dheeraj",
    "age": 26,
    "height": 2.4,
    "city": "Delhi"
}
console.log(person);

let address = {
    "ke1": "string value", // value is string
    "key2": 1234, // value is number
    "homeAddress": { "city": "delhi" }, // value is object
    "officeAddress": { "city": "noida" } // value is object 
}
console.log(address);
console.log(address.homeAddress.city);
// print city of officeAddress
console.log("my office city is " + address.officeAddress.city);

// array data type
let myFriends = ["Dheeraj", "Amit", "Rahul", "Suresh"];
console.log(myFriends);
console.log(myFriends[0]); // array start from index 0
console.log(myFriends[2]);
// my best friens is Amit & Suresh
console.log("my best friends are " + myFriends[1] + " and " + myFriends[3]); // string concatenation
console.log(`my best friends are ${myFriends[1]} and ${myFriends[3]}`); // template literal

// date date type
let currentDate = new Date(); // Date is a class in js
console.log(currentDate);
let myDOB = new Date("1999-06-02"); // year-month-day format of Date 
console.log(myDOB);
console.log("dob year " + myDOB.getFullYear()); // get year from date
console.log("dob month " + (myDOB.getMonth() + 1)); // added 1 because month is 0 indexed in js
console.log("dob date " + myDOB.getDate()); // get day from date

console.log("my expression " + 1 + 5); // "my expression 1" + 5 -> my expression 15
console.log("my expression " + (1 + 5)); // "my expression " + 6 -> my expression 6
