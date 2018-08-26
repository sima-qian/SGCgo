exports.client = (err, req, res, next) => {
  if (err.message === "500") {
    next(err);
  }
  res.status(404).send("<h1>404 not found</h1>");
};

exports.server = (err, req, res, next) => {
  res.status(500).send("<h1>Server error</h1>");
};
