const express = require('express');
const locationModel = require('../models/locations.model');
const router = express.Router();

router.get('/', async (req, res) => {
    const locations = await locationModel.find({}); // Fetch data from locationModel
    res.status(200).json(locations); // Send the fetched locations as JSON
});

module.exports = router;
