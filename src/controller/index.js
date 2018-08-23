const express = require('express');

const router = express.Router();

const landing = require('./landing');
const getBoard = require('./get-board');
const errorRoute = require('./error-route');
const createBoard = require('./create-board');
const error = require('./error');

router.get('/', landing.get);
router.get('/create/', createBoard);
router.get('/board/:name', getBoard.get);
router.get('/make_error', errorRoute);
router.use(error.client);
router.use(error.server);

module.exports = router;
