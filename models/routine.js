const db = require('../config/db');
const bcrypt = require('bcrypt');

let Routine = {};

Routine.createRT = (routine) => {
  return db.one(`
    INSERT INTO routines
    (title,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    user_id)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    RETURNING *
  `, [
    routine.title,
    routine.image1,
    routine.image2,
    routine.image3,
    routine.image4,
    routine.image5,
    routine.image6,
    routine.image7,
    routine.image8,
    routine.image9,
    routine.image10,
    routine.image11,
    routine.image12,
    routine.user_id
  ]);
};

Routine.showAll = (routines) => {
  return db.manyOrNone(`
    SELECT *
    FROM routines`,
    [routines]
  );
};

module.exports = Routine;
