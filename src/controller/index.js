const express = require('express');

const router = express.Router();

const landing = require('./landing');

router.get('/', landing.get);

module.exports = router;
