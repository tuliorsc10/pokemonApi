const database = require('../models');
const PrimeiraCarta = require('../helpers/ComparacaoHelper')
const SegundaCarta = require('../helpers/ComparacaoHelper')

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
        
        const playerOneCard = Number(req.body.playerOneCard)
        const playerTwoCard = Number(req.body.playerTwoCard)
        
        try {
            const primeiroPokemon = await database.Pokemons.findOne( { where: {id: playerOneCard}})
            const segundoPokemon = await database.Pokemons.findOne( { where: {id: Number(playerTwoCard)}})
            const player = await database.Vitorias.findAll()
            
            let propriedadePlayerOne = Object.values(player);
            let objetoPlayerOne = propriedadePlayerOne[0].dataValues.playerOne;
            console.log(propriedadePlayerOne)
            let alteraplayerOne = objetoPlayerOne + 1;

            let propriedadePlayerTwo = Object.values(player)
            let objetoPlayerTwo = propriedadePlayerTwo[0].dataValues.playerTwo
            let alteraplayerTwo = objetoPlayerTwo + 1

            let primeiraCarta = 0;
            let segundaCarta = 0;

            let valorPrimeiroPokemon = PrimeiraCarta(primeiroPokemon);
            let valorSegundoPokemon = SegundaCarta(segundoPokemon);

            for(let i = 2; i<valorPrimeiroPokemon.length-2; i++) {
                if(valorPrimeiroPokemon[i] == valorSegundoPokemon[i]){
                    primeiraCarta += 1;
                    segundaCarta += 1;
                } 
                if(valorPrimeiroPokemon[i] > valorSegundoPokemon[i]) {
                    primeiraCarta += 1;
                } else if(valorPrimeiroPokemon[i] < valorSegundoPokemon[i]){
                    segundaCarta += 1;
                }
            }
        
            if(primeiraCarta > segundaCarta ) {
                await database.Vitorias.update({playerOne: alteraplayerOne}, {where: {id: Number(1)}})
                return res.status(200).json({"winner":playerOneCard, "loser":playerTwoCard,primeiroPokemon})
            }else if(primeiraCarta < segundaCarta ) {
                await database.Vitorias.update({playerTwo: alteraplayerTwo}, {where: {id: Number(1)}})
                return res.status(200).json({"winner":playerTwoCard, "loser":playerOneCard,segundoPokemon})
            }else {
                return res.status(406).json({message:'Empate! Escolha outra carta para uma nova disputa!'})
            }

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PokemonController;