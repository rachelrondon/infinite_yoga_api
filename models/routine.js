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
 // return db.manyOrNone(`
 //   SELECT *
 //   FROM routines
 //   WHERE title LIKE $1
 //   `, [data])
 // }

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
