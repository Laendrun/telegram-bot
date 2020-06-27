const express = require('express');
const router = express.Router();

const { get_bot } = require('../controllers/bot.controller.js');
const { commandHandler } = require('../commandHandler');

router.get('/', get_bot);

router.post('/', commandHandler);

module.exports = router;