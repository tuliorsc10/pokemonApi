const {Router} = require('express');
const PokemonController = require('../controllers/PokemonController');

const router = Router();

router.get('/pokemons', PokemonController.pegaPokemons)

module.exports = router;