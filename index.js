
function multiply(numbers) {
    let number = 1
    for (let i = 0; i < numbers.length; i++) {
        number *= numbers[i]
    }
    return number

}

console.log(multiply([1,2,3,4,5]))

// Test express

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
