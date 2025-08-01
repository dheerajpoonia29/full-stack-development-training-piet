
/*
map funciton used to iterate array with value and index
syntax of map function

variableName.map( (parameter1, parameter2) => { expression } )
parameter1 is give the actual of array element and parameter 2 index of array element
*/

// variable number is type of array which contains map function
let numbers = [10, 20, 30];
numbers.map((value, index) => {
    console.log(`value = ${value} index = ${index}`)
})

/*
value = 10 index = 0
value = 20 index = 1
value = 30 index = 2
*/

let fruits = ["banan", "apple", "kiwi"]
/*
fruit = banana, index = 0
fruit = apple, index = 1
fruit = kiwi, index = 2
*/
fruits.map((value, index) => {
    console.log(`fruit = ${value}, index = ${index}`)
})
