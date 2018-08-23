const tape = require("tape");

tape("Tape is running", t => {
  const num = 6;
  t.equal(num, 6, "six of one, half a dozen of another");
  t.end();
});
