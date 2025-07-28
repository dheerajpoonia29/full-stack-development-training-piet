// if else statement
// if else is keyword
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
} else if (age >= 13 && age < 18) {
    console.log("You are a teenager.");
} else if (age > 60) {
    console.log("You are a senior citizen.");
} else {
    console.log("You are a minor.");
}
// we use if where we don't have range

// switch statement
// swtich, case, break, default are keywords
// we switch where we have defined range
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}