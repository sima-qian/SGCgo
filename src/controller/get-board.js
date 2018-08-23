exports.get = (req, res) => {
  const { name } = req.params;
  res.render("board", { name });
};
