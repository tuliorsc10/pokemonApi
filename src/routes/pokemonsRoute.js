const {Router} = require('express');
const PokemonController = require('../controllers/PokemonController');

const router = Router();

router.get('/pokemons', PokemonController.pegaPokemons)
router.get('/pokemons/:id', PokemonController.pegaUmPokemon)
router.post('/pokemons', PokemonController.criaUmPokemon)
router.put('/pokemons/:id', PokemonController.alteraPokemon)
router.delete('/pokemons/:id', PokemonController.deletaPokemon)
router.get('/pokemons/:id/:novoId', PokemonController.comparaPokemon)

module.exports = router;