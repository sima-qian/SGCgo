const express = require('express');

// creates a new Express router
const router = express.Router();

// require controllers
const landing = require('./landing');
const getBoard = require('./get-board');
const errorRoute = require('./error-route');
const error = require('./error');

// set home route
router.get('/', landing.get);
// show a specific board
router.get('/board/:id', getBoard.get);

router.get('/make_error', errorRoute);
router.use(error.client);
router.use(error.server);

module.exports = router;
