const express = require('express');
const router = express.Router();

const { createGame, getAllGame, getGame } = require('../controller/games');


router.route('/static').post(createGame).get(getAllGame);
router.route('/').get(getGame);


module.exports = router;