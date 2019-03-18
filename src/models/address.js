'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    street: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true 
    },
});

module.exports = mongoose.model('Address', schema);