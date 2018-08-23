exports.get = (req, res) => {
  const { id } = req.params;
  res.render('board', { id });
};
