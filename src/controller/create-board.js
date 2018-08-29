const createBoard = require("../queries/create_board");

module.exports = (req, res, next) => {
  console.log("create board reached");
  createBoard()
    .then(result => {
      console.log("create board successful");
      return res.redirect(`/board/${result.id}`);
    })
    .catch(err => {
      console.log("error:", err.message);
      return next(err);
    });
};
