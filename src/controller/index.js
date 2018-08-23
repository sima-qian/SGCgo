const express = require('express');

const router = express.Router();

const landing = require('./landing');
const getBoard = require('./get-board');

router.get('/', landing.get);
router.get('/board/:id', getBoard.get);

module.exports = router;
