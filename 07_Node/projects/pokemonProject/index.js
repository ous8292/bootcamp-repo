const express = require("express")
const app = express()

const pokemon = require('pokemon')

app.get('/', (req,res) => {
    res.send('I am the pokemon page')
})

app.get('/pokemon', (req,res) => {
    res.send(pokemon.random())
})

app.get('/dex', (req, res) => {
    dex = [pokemon.getName(142),pokemon.getName(14),pokemon.getName(17),pokemon.getName(7)]
    const randomPoke = dex[Math.floor(Math.random() * dex.length)];
    dexObj = {
        name: randomPoke,
        attack: Math.floor(Math.random() * (100 - 50) + 50),
        defense: Math.floor(Math.random() * (100 - 0) + 0)
    }
    //req.dexObj.name
    res.send({dexObj})

})


const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`App is running on ${PORT}`))