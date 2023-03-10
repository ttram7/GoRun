const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


router.get('/', (req, res) => {
    //console.log('in stats router get route')
    const sqlText = `SELECT * FROM "runs" WHERE EXTRACT (WEEK FROM "date") = EXTRACT (WEEK FROM NOW()) ORDER BY date ASC;`
    pool.query(sqlText)
        .then((result) => {
            //console.log(`Got stuff back from the database`, result.rows);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

module.exports = router;