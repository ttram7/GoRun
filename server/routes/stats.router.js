const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


// router.get('/', (req, res) => {
//     const sqlText = `SELECT "date", "distance", ('{SU,M,T,W,TH,F,SA}'::text[])[extract(dow from "date") + 1] as dow_name, 
//     EXTRACT (DOW FROM "date") AS dow_num FROM "runs" WHERE EXTRACT (WEEK FROM "date") = EXTRACT (WEEK FROM NOW()) AND "user_id" = $1 ORDER BY "date" ASC;`
//     pool.query(sqlText, [req.user.id])
//         .then((result) => {
//             console.log(`Got stuff back from the database`, result.rows);
//             res.send(result.rows);
//         })
//         .catch((error) => {
//             console.log(`Error making database query ${sqlText}`, error);
//             res.sendStatus(500); // Good server always responds
//         })
// })

module.exports = router;