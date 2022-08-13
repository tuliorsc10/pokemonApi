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
            const listaumPokemon = await database.Pokemons.findOne( { where: {id: Number(id)}})
            return res.status(200).json(listaumPokemon)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaUmPokemon(req,res) {
        const novoPokemon = req.body;
        try {
            const cricaoPokemon = await database.Pokemons.create(novoPokemon)
            return res.status(200).json(cricaoPokemon)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async alteraPokemon(req,res) {
        const {id} = req.params;
        const novasInfos = req.body;
        try {
            await database.Pokemons.update(novasInfos, { where: {id: Number(id)}})
            const updatePokemon = await database.Pokemons.findOne({ where: {id: Number(id)}})
            return res.status(200).json(updatePokemon)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaPokemon(req,res) {
        const {id} = req.params;
        try {
            await database.Pokemons.destroy({ where: {id: Number(id)}})
            return res.status(200).json({message:`O id ${id} foi deletado!`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PokemonController;