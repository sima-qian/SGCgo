const getBoardIdFromTopic = require("../queries/get_board");
const deleteTopic = require("../queries/delete_topic");

module.exports = (req, res, next) => {
  const topicId = req.body.id;
  let boardId;
  getBoardIdFromTopic(topicId)
    .then(result => {
      boardId = result.board_id;
      return deleteTopic.byId(topicId);
    })
    .then(result => res.redirect(`/board/${boardId}`))
    .catch(err => next(err));
};
