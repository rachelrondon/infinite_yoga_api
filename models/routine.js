const db = require('../config/db');
const bcrypt = require('bcrypt');

let Routine = {};

Routine.showAll = (routines) => {
  return db.manyOrNone(`
    SELECT *
    FROM routines`,
    [routines]
  );
};

Routine.findById = (id) => {
  console.log(id);
  return db.any(`
    SELECT routines.title, routines.level, moves.name, moves.image, moves.milliseconds, moves.audio
    FROM routines
    LEFT JOIN moves
    ON routines.id = $1 AND moves.routine_id = $1`,
    [id]
  );
}

module.exports = Routine;
