const db = require('../config/db');
const bcrypt = require('bcrypt');

let Move = {};

Move.showAll = (moves) => {
  return db.manyOrNone(`
    SELECT *
    FROM moves
    WHERE routine_id = 1`,
    [moves]
  );
};

module.exports = Move;
