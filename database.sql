
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "runs" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL,
    "date"  DATE NOT NULL,
    "time" TIME NOT NULL,
    "distance" INT CHECK (INT > 0) NOT NULL,
    "duration" INT CHECK (INT > 0) NOT NULL,
    "difficulty" INT CHECK (INT BETWEEN 1 and 10) NOT NULL,
    "notes" VARCHAR (300)
)

CREATE TABLE "type" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (80) NOT NULL
)

-- JUNCTION TABLE
-- Run can only have one type and type can be applied to multiple runs
CREATE TABLE "runs_type" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT REFERENCES "user" NOT NULL,
  "type_id" INT REFERENCES "type" NOT NULL
);