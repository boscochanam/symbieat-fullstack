const express = require('express');
const router = express.Router();

const locations = [
    { id: 1, name: 'Location 1', address: 'Address 1' },
    { id: 2, name: 'Location 2', address: 'Address 2' },
];

router.get('/', (req, res) => {
    res.status(200).json(locations);
});

module.exports = router;