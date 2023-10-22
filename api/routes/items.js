const express = require('express');
const itemModel = require('../models/items.model');
const router = express.Router();

router.get('/', async (req, res) => {
    const items = await itemModel.find({});
    res.status(200).json(items);
});

module.exports = router;