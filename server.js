// Express.js palvelin//
const path = require('path')
const express = require('express')

const app = express()

const herkut = require('./Herkut.json')

//GET ALL etsitään kaikki namit jsonilta
app.get('/api/herkut', (req, res) => {
    res.json(herkut)
    })


//tehdään polkumääritys puplic kansioon
const polku = path.join(__dirname, './public')

//sanotaan että em. polussa on tiedostosisältö jota palvelin käyttää kun se saa http reguest
app.use(express.static(polku))

app.listen(3000, () => {
    console.log('server is up on port 3000.')
})