const db = require('../config/db');
const bcrypt = require('bcrypt');

let Routine = {};

Routine.search = (data) => {
  return db.any(`
    SELECT routines.title, routines.level, moves.name, moves.image, moves.milliseconds, moves.audio
    FROM routines
    LEFT JOIN moves
    ON routines.id = $1 AND moves.routine_id = $1
    WHERE title LIKE $1`,
    [data]
  );
}

Routine.findByLevel = (level) => {
  return db.any(`
    SELECT *
    FROM routines
    WHERE level = $1`,
  [level]
  );
}

Routine.showAll = (routines) => {
  return db.manyOrNone(`
    SELECT *
    FROM routines
    ORDER BY id ASC`,
    [routines]
  );
};

Routine.findByRandom = (random) => {
  return db.one(`
    SELECT routines.title, routines.level, moves.name, moves.image, moves.milliseconds, moves.audio
    FROM routines
    LEFT JOIN moves
    on routine.id = $1 and moves.routine_id = $1`,
    [random]
  );
}

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
