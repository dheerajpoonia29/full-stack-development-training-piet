function myFunction(value) {
    return (
        <h1>{value}</h1>
    )
}

function RenderList() {
    let fruits = ["banan", "apple", "kiwi"]

    // parantheses () to write jsx in javascript
    // curly {} to write javascript in html

    return (
        // jsx
        <div>
            {/* <h1>{fruits[0]}</h1>
            <h1>{fruits[1]}</h1>
            <h1>{fruits[2]}</h1> */}
            {
                fruits.map((value, index) => myFunction(value))
            }
        </div>
    )
}

export { RenderList }