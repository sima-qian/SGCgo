const createBoard = require("../queries/create_board");

module.exports = (req, res, next) => {
  console.log("create board reached");
  createBoard()
    .then(result => {
      console.log("create board successful");
      res.redirect(`/board/${result.id}`);
    })
    .catch(err => next(err));
};
