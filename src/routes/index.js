const bodyParser = require('body-parser');
const express = require('express');
const pokemons = require('./pokemonsRoute');

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pokemons)
}