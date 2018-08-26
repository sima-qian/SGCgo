const express = require("express");

const router = express.Router();

const landing = require("./landing");
const getBoard = require("./get-board");
const errorRoute = require("./error-route");
const createBoard = require("./create-board");
const addTopic = require("./add-topic");
const deleteTopic = require("./delete-topic");
const error = require("./error");

router.get("/", landing.get);
router.get("/create/", createBoard);
router.get("/board/:name", getBoard.get);
router.post("/add-topic/", addTopic);
router.post("/delete-topic/", deleteTopic);
router.get("/make_error", errorRoute);
router.use(error.client);
router.use(error.server);

module.exports = router;
