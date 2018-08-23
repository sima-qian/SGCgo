const createBoard = require("../queries/create_board");

module.exports = (req, res) => {
  createBoard().then(result => {
    res.redirect(`/board/${result.id}`);
  });
};
