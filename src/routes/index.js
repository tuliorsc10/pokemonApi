const bodyParser = require('body-parser');
const express = require('express');
const pokemons = require('./pokemonsRoute');
const players = require('./playersRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pokemons)
    app.use(players)
}