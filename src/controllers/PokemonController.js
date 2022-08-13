const database = require('../models');

class PokemonController {
    static async pegaPokemons(req,res) {
        try {
            const listaPokemon = await database.Pokemons.findAll()
            return res.status(200).json(listaPokemon)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmPokemon(req,res) {
        const {id} = req.params;
        try {
            const umPokemon = await database.Pokemons.findOne( { where: {id: Number(id)}})
            return res.status(200).json(umPokemon)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PokemonController;