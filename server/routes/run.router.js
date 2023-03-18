const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  if (req.isAuthenticated()) {
    //const query = `SELECT * FROM runs WHERE "user_id" = $1 ORDER BY "date" DESC`;
    const query = `SELECT * FROM "runs" WHERE EXTRACT (WEEK FROM "date") = EXTRACT (WEEK FROM NOW()) AND "user_id" = $1 ORDER BY "date" DESC`;
    pool.query(query, [req.user.id])
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all runs', err);
        res.sendStatus(500)
      })
  } else {
    res.sendStatus(403);
  }
});

router.get('/weekly', (req, res) => {
  const sqlText = `SELECT "date", "distance", ('{SU,M,T,W,TH,F,SA}'::text[])[extract(dow from "date") + 1] as dow_name, 
  EXTRACT (DOW FROM "date") AS dow_num FROM "runs" WHERE EXTRACT (WEEK FROM "date") = EXTRACT (WEEK FROM NOW()) AND "user_id" = $1 ORDER BY "date" ASC;`
  pool.query(sqlText, [req.user.id])
      .then((result) => {
          //console.log(`Got stuff back from the database`, result.rows);
          res.send(result.rows);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500); // Good server always responds
      })
})

router.get('/monthly', (req, res) => {
  const sqlText = `SELECT "date", "distance", "duration", EXTRACT (DAY FROM "date") AS day FROM "runs" 
  WHERE EXTRACT (MONTH FROM "date") = EXTRACT (MONTH FROM NOW()) AND "user_id" = $1 ORDER BY "date" ASC;`
  pool.query(sqlText, [req.user.id])
      .then((result) => {
          //console.log(`Got stuff back from the database`, result.rows);
          res.send(result.rows);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500); // Good server always responds
      })
})


/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
 // console.log('/runs POST route');
  //console.log(req.body);
  if (req.isAuthenticated()) {
    const query = `INSERT INTO "runs" ("name", "date", "time", "distance", "duration", "difficulty", "notes", "user_id")
                  VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
    pool.query(query, [req.body.name, req.body.date, req.body.time, req.body.distance, req.body.duration, req.body.difficulty, req.body.notes, req.user.id])
      .then(() => {
        res.sendStatus(201);
      })
      .catch(err => {
        console.log('ERROR: Posting run', err);
        res.sendStatus(500)
      })
  } else {
    res.sendStatus(403);
  }
});

router.delete('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    const query = `DELETE FROM "runs" WHERE "id" = $1 AND "user_id" = $2`;
    pool.query(query, [req.params.id, req.user.id])
      .then(() => {
        res.sendStatus(201);
      })
      .catch(err => {
        console.log('ERROR: Deleting run', err);
        res.sendStatus(500)
      })
  } else {
    res.sendStatus(403);
  }
})

router.put('/:id', (req, res) => {
  console.log('in put route')
  console.log(req.body, req.body.id)
  if (req.isAuthenticated()) {
    const query = `UPDATE "runs" SET "name" = $1, "date" = $2, "time" = $3, "distance" = $4, 
    "duration" = $5, "difficulty" = $6, "notes" = $7
    WHERE "id" = $8 AND "user_id" = $9`;
    pool.query(query, [req.body.name, req.body.date, req.body.time, req.body.distance, req.body.duration, req.body.difficulty, req.body.notes, req.body.id, req.user.id])
      .then((result) => {
        res.sendStatus(201);
      })
      .catch(err => {
        console.log('ERROR: updating run', err);
        res.sendStatus(500)
      })
  } else {
    res.sendStatus(403);
  }
})

module.exports = router;
