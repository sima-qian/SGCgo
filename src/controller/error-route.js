module.exports = (req, res, next) => {
  try {
    throw new Error("500");
  } catch (err) {
    next(err);
  }
};
