const db = require('../config/db');

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
