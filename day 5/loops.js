let array = [1, 2, 3, 4, 5];
console.log("array length = " + array.length)

let arrayLength = array.length;

// for loop
// for (initialization; condition; increment/decrement) { }
for (let i = 0; i < arrayLength; i++) {
    let element = array[i];
    console.log("elemnt at index " + i + " is " + element);
}