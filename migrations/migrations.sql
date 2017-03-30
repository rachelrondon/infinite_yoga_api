BEGIN TRANSACTION;

-- DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS routines;

-- CREATE TABLE users (
--   id BIGSERIAL PRIMARY KEY,
--   first_name VARCHAR(255) NOT NULL,
--   last_name VARCHAR(255) NOT NULL,
--   username VARCHAR(255) NOT NULL,
--   email VARCHAR(255) NOT NULL,
--   password_digest VARCHAR(255) NOT NULL
-- );

CREATE TABLE routines (
  title VARCHAR(255) NOT NULL,
  image1 VARCHAR(255),
  time1 VARCHAR(255),
  image2 VARCHAR(255),
  time2 VARCHAR(255),
  image3 VARCHAR(255),
  time3 VARCHAR(255),
  image4 VARCHAR(255),
  time4 VARCHAR(255),
  image5 VARCHAR(255),
  time5 VARCHAR(255),
  image6 VARCHAR(255),
  time6 VARCHAR(255),
  image7 VARCHAR(255),
  time7 VARCHAR(255),
  image8 VARCHAR(255),
  time8 VARCHAR(255),
  image9 VARCHAR(255),
  time9 VARCHAR(255),
  image10 VARCHAR(255),
  time10 VARCHAR(255),
  image11 VARCHAR(255),
  time11 VARCHAR(255),
  image12 VARCHAR(255),
  time12 VARCHAR(255),
  user_id INTEGER REFERENCES users(id)
);

COMMIT;
