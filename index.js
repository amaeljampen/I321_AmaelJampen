
function multiply(numbers) {
    let number = 1
    for (let i = 0; i < numbers.length; i++) {
        number *= numbers[i]
    }
    return number

}

console.log(multiply([1,2,3,4,5]))