const checkBoard = require("../queries/check_board");
const getTopics = require("../queries/get_topics");

exports.get = (req, res, next) => {
  const { name } = req.params;
  checkBoard
    .byId(name)
    .then(result => getTopics.byId(result.id))
    .then(topics => {
      const stop = topics.filter(topic => topic.sgc === 1);
      const go = topics.filter(topic => topic.sgc === 2);
      const cont = topics.filter(topic => topic.sgc === 3);
      res.render("board", { name, stop, go, cont });
    })
    .catch(err => next(err));
};
