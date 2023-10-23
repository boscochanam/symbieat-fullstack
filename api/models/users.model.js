const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    isAdmin: Boolean,
    cart: [{
        item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item', // Reference to the 'Item' model
        },
        quantity: Number,
    }],
    balance: Number,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
