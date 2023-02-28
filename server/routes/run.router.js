const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  if (req.isAuthenticated()) {
    const query = `SELECT * FROM runs WHERE "user_id" = $1`;
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


/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  console.log('/runs POST route');
  console.log(req.body);
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

module.exports = router;
