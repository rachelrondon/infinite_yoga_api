const db = require('../config/db');
const bcrypt = require('bcrypt');

let Routine = {};

Routine.createRT = (routine) => {
  console.log(routine)
  return db.one(`
    INSERT INTO routines
    (title,
    image1,
    time1,
    image2,
    time2,
    image3,
    time3,
    image4,
    time4,
    image5,
    time5,
    image6,
    time6,
    image7,
    time7,
    image8,
    time8,
    image9,
    time9,
    image10,
    time10,
    image11,
    time11,
    image12,
    time12,
    user_id)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26)
    RETURNING *
  `, [
    routine.title,
    routine.image1,
    routine.time1,
    routine.image2,
    routine.time2,
    routine.image3,
    routine.time3,
    routine.image4,
    routine.time4,
    routine.image5,
    routine.time5,
    routine.image6,
    routine.time6,
    routine.image7,
    routine.time7,
    routine.image8,
    routine.time8,
    routine.image9,
    routine.time9,
    routine.image10,
    routine.time10,
    routine.image11,
    routine.time11,
    routine.image12,
    routine.time12,
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
