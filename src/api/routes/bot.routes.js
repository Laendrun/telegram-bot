const express = require('express');
const router = express.Router();

const { get_bot } = require('../controllers/bot.controller.js');

router.get('/', get_bot);

module.exports = router;