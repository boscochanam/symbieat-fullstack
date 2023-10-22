const { ViewModuleSharp } = require('@material-ui/icons');
const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: String,
});

const itemModel = mongoose.model('Item', itemSchema);
module.exports = itemModel;