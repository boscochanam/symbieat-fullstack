const { ViewModuleSharp } = require('@material-ui/icons');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    isAdmin: Boolean,
    cart: [{
        item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item',
        },
        quantity: Number,
    }],
    balance: Number,
});

const userModel = mongoose.model('Users', userSchema);
module.exports = userModel;
