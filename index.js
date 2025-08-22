
function multiply(numbers) {
    let number = 1
    for (let i = 0; i < numbers.length; i++) {
        number *= numbers[i]
    }
    return number

}

console.log(multiply([1,2,3,4,5]))

// Test express

const express = require('express') // import express
const app = express() // créer l'application et ses routes
const port = 3000 // port choisi pour l'app

app.get('/', (req, res) => {
    res.send('Hello World!')
}) // lorsque rien n'est ajouté aprés le lien (accueil du site), get envoie les infos du res et req est la requete de l'user

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) // écoute le port choisi
