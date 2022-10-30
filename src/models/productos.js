const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id:{
        type: String,
        trim: true,
    },
    name:{
        type: String,
        trim: true,
    },
    image:{
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Products',productSchema);
