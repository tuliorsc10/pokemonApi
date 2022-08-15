const {Router} = require('express');
const PlayerController = require('../controllers/PlayersController');

const router = Router();

router.get('/players', PlayerController.pegaPlayers)

module.exports = router;