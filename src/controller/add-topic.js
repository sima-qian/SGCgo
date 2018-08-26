const addTopic = require("../queries/add_topic");

module.exports = (req, res, next) => {
  addTopic(req.body)
    .then(response => res.redirect(`/board/${req.body.board_id}`))
    .catch(err => next(err));
};
