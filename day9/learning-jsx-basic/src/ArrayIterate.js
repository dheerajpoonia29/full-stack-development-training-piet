let arr = [10, 20, 30, 40]

// 1st way to iterate the array using for loop
for (let index = 0; index < arr.length; index++) {
    let ele = arr[index];
    console.log(`index ${index} ele ${ele}`)
}

console.log("\n\n-----------------")

// 2nd way to iterate the array using map function
arr.map((ele, index) => {
    console.log(`index is ${index} ele is ${ele}`)
})