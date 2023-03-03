const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

// /**
//  * GET route template
//  */
router.get('/', (req, res) => {
//   if (req.isAuthenticated()) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Minneapolis&appid=${process.env.OPEN_WEATHER_API_KEY}`)
    .then((response) => {
        res.send(response.data)
    })
    .catch((error) => {
        console.log(error);
    });

//   } else {
//     res.sendStatus(403);
//   }
});


// /**
//  * POST route template
//  */
// router.post('/', (req, res) => {
//   // POST route code here
//   console.log('/runs POST route');
//   console.log(req.body);
//   if (req.isAuthenticated()) {
//     const query = `INSERT INTO "runs" ("name", "date", "time", "distance", "duration", "difficulty", "notes", "user_id")
//                   VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
//     pool.query(query, [req.body.name, req.body.date, req.body.time, req.body.distance, req.body.duration, req.body.difficulty, req.body.notes, req.user.id])
//       .then(() => {
//         res.sendStatus(201);
//       })
//       .catch(err => {
//         console.log('ERROR: Posting run', err);
//         res.sendStatus(500)
//       })
//   } else {
//     res.sendStatus(403);
//   }
// });

// router.delete('/:id', (req, res) => {
//   if (req.isAuthenticated()) {
//     const query = `DELETE FROM "runs" WHERE "id" = $1 AND "user_id" = $2`;
//     pool.query(query, [req.params.id, req.user.id])
//       .then(() => {
//         res.sendStatus(201);
//       })
//       .catch(err => {
//         console.log('ERROR: Deleting run', err);
//         res.sendStatus(500)
//       })
//   } else {
//     res.sendStatus(403);
//   }
// })

// router.put('/:id', (req, res) => {
//   console.log('in put route')
//   console.log(req.body, req.body.id)
//   if (req.isAuthenticated()) {
//     const query = `UPDATE "runs" SET "name" = $1, "date" = $2, "time" = $3, "distance" = $4, 
//     "duration" = $5, "difficulty" = $6, "notes" = $7
//     WHERE "id" = $8 AND "user_id" = $9`;
//     pool.query(query, [req.body.name, req.body.date, req.body.time, req.body.distance, req.body.duration, req.body.difficulty, req.body.notes, req.body.id, req.user.id])
//       .then((result) => {
//         res.sendStatus(201);
//       })
//       .catch(err => {
//         console.log('ERROR: ', err);
//         res.sendStatus(500)
//       })
//   } else {
//     res.sendStatus(403);
//   }
// })

module.exports = router;