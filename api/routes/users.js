const express = require('express');
const router = express.Router();

const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },
];

router.get('/', (req, res) => {
    res.status(200).json(users);
});

module.exports = router;