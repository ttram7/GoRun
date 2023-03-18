const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

//  * GET route to retrieve weather data
router.get('/', (req, res) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Minneapolis&appid=${process.env.OPEN_WEATHER_API_KEY}`)
    .then((response) => {
        console.log(response.data)
        res.send(response.data)
    })
    .catch((error) => {
        console.log(error);
    });
});

module.exports = router;