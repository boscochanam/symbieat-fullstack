const { ViewModuleSharp } = require('@material-ui/icons');
const mongoose = require('mongoose');
const locationSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
});

const locationModel = mongoose.model('Location', locationSchema);
module.exports = locationModel;