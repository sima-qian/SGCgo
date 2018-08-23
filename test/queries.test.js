const tape = require('tape');
const runDbTestBuild = require('../src/database/test_build');

tape('tape is running', (t) => {
    t.equal(2 + 2, 4, '2 plus 2 is 4');
    t.end();
});
