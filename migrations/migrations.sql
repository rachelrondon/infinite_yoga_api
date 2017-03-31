BEGIN TRANSACTION;

DROP TABLE IF EXISTS moves;
DROP TABLE IF EXISTS routines;

CREATE TABLE routines (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  level VARCHAR(255) NOT NULL
);

CREATE TABLE moves (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  milliseconds VARCHAR(255) NOT NULL,
  audio VARCHAR(255) NOT NULL,
  routine_id INTEGER REFERENCES routines(id)
);

COMMIT;
