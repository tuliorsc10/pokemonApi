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

    static async comparaPokemon(req,res) {
        const {id} = req.params;
        const {novoId} = req.params
        const playerOne = await database.Vitorias.findAll()
        console.log(playerOne)
        try {
            const primeiroPokemon = await database.Pokemons.findOne( { where: {id: Number(id)}})
            const segundoPokemon = await database.Pokemons.findOne( { where: {id: Number(novoId)}})

            let primeiraCarta = 0;
            let segundaCarta = 0;

            let propriedadePrimeiroPokemon = Object.entries(primeiroPokemon);
            let objetoPrimeiroPokemon = propriedadePrimeiroPokemon[1][1]
            let valorPrimeiroPokemon = Object.values(objetoPrimeiroPokemon)

            let propriedadeSegundoPokemon = Object.entries(segundoPokemon);
            let objetoSegundoPokemon = propriedadeSegundoPokemon[1][1]
            let valorSegundoPokemon = Object.values(objetoSegundoPokemon)

            for(let i = 2; i<valorPrimeiroPokemon.length-2; i++) {
                if(valorPrimeiroPokemon[i] > valorSegundoPokemon[i]) {
                    primeiraCarta += 1
                } else {
                    segundaCarta += 1
                }
            }
            
            if(primeiraCarta > segundaCarta ) {
                return res.status(200).json({"winner":id, "loser":novoId,primeiroPokemon})
            }else {
                return res.status(200).json({"winner":novoId, "loser":id,segundoPokemon})
            }
            
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PokemonController;