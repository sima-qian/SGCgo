const createBoard = require("../queries/create_board");

module.exports = (req, res, next) => {
  createBoard()
    .then(result => {
      res.redirect(`/board/${result.id}`);
    })
    .catch(err => next(err));
};
