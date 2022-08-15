const database = require('../models');

class PlayerController {
    static async pegaPlayers(req,res) {
        try {
            const listaPlayers = await database.Vitorias.findAll()
            return res.status(200).json(listaPlayers)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PlayerController;